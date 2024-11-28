'use strict'

const Env = use('Env');
const { z } = require("zod");
const { DataSource } = require("typeorm");
const { ChatOpenAI } = require("@langchain/openai");
const { SqlDatabase } = require("langchain/sql_db");
const { createSqlQueryChain } = require("langchain/chains/sql_db");
const { PromptTemplate, ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { RunnablePassthrough, RunnableSequence } = require("@langchain/core/runnables");

const llm = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0,
});

const datasource = new DataSource({
  type: Env.get("DB_CONNECTION"),
  host: Env.get("DB_HOST"),
  port: Env.get("DB_PORT"),
  username: Env.get("DB_USER"),
  password: Env.get("DB_PASSWORD"),
  database: Env.get("DB_DATABASE"),
  synchronize: true,
  logging: false,
});

class Chatbot2Controller {
  // Fungsi untuk mendeteksi apakah pertanyaan berhubungan dengan database atau tidak
  async isDatabaseQuery(question) {
    const keywords = ["daftar", "informasi", "data", "tabel", "rekam", "lihat"];
    const definitionPatterns = [
      /apa itu/i,   
      /jelaskan/i,  
      /bagaimana/i, 
      /kenapa/i,    
      /apa yang/i,   
      /mengapa/i     
    ];

    const isDefinition = definitionPatterns.some(pattern => pattern.test(question));
    console.log(`[Chatbot2Controller:isDatabaseQuery] Pertanyaan: "${question}", Is Definition: ${isDefinition}`);
    
    if (isDefinition) {
      return false;
    }

    return keywords.some(keyword => question.toLowerCase().includes(keyword));
  }

  // Fungsi untuk menangani pertanyaan yang bisa dijawab langsung oleh ChatGPT
  async handleChatCompletion(question, response) {
    try {
      const responseOpenAI = await llm.call([question]);
      return response.json({
        status: "success",
        data: responseOpenAI,
      });
    } catch (error) {
      console.error("Error in ChatGPT: ", error);
      return response.status(500).json({
        status: "error",
        message: "Something went wrong with ChatGPT.",
        error: error.message,
      });
    }
  }

  // Fungsi untuk menangani pertanyaan yang berhubungan dengan query database
  async handleDatabaseQuery(question, response) {
    try {
      // Langkah 1: Inisialisasi Database
      const db = await SqlDatabase.fromDataSourceParams({
        appDataSource: datasource,
        includesTables: [
            "m_penghargaan", 
            "tk_perusahaan_sekolah", 
            "m_ta", 
            "m_sekolah", 
            "m_user", 
            "m_sanksi_siswa", 
            "m_sikap_siswa", 
            "tk_siswa_pelanggaran", 
            "m_sanksi_pelanggaran", 
            "m_prestasi", "m_anggota_ekskul", 
            "m_ekstrakurikuler", 
            "m_rapor_ekskul", 
            "m_sarpras", 
            "m_keterangan_pkl", 
            "m_perusahaan", 
            "m_mou_perusahaan", 
            "m_alumni", 
            "m_disposisi", 
            "m_pelaporan_disposisi", 
            "m_surat"
        ]
      });

      const tableNames = db.includesTables.map((t) => t)

      // Langkah 2: Mengambil daftar tabel dari database menggunakan query SQL
    //   const query = 'SHOW TABLES';
    //   const tables = await db.run(query);

    //   console.log("Tables in database: ", tables);

    //   /// Periksa jika hasilnya adalah array atau objek dan mengonversinya ke array
    //   let tableNames = [];
    //   if (Array.isArray(tables)) {
    //     // Jika hasilnya adalah array, ambil nama tabel
    //     tableNames = tables.map((table) => Object.values(table)[0]);
    //   } else if (tables && tables[Object.keys(tables)[0]]) {
    //     // Jika hasilnya adalah objek dengan key yang dapat diakses
    //     tableNames = Object.values(tables[Object.keys(tables)[0]]);
    //   }

    //   if (!tableNames || tableNames.length === 0) {
    //     return response.json({
    //       status: "error",
    //       message: "No tables found in the database.",
    //     });
    //   }

      // Langkah 3: Membuat Prompt untuk Memilih Tabel yang Relevan
      const tablePrompt = `
        You are an AI SQL assistant. Based on the user question, determine which SQL tables are relevant to answer the question. 
        The tables available in the database are:
        ${tableNames.join(", ")}

        Make sure to include *all potentially relevant tables* for the question.
        Question: {question}
        Relevant Tables:    
      `;

      const Table = z.object({
        names: z.array(z.string()).describe("Names of tables in SQL database"),
      });

      const tableChain = ChatPromptTemplate.fromMessages([ 
        ["system", tablePrompt],
        ["human", "{question}"],
      ]).pipe(llm.withStructuredOutput(Table));

      // Langkah 4: Membuat Query SQL Berdasarkan Tabel yang Dipilih
      const sqlQueryChain = await createSqlQueryChain({
        llm,
        db,
        dialect: "mysql",
      });

      // Langkah 5: Membuat Prompt untuk Menjawab Pertanyaan
      const answerPrompt = PromptTemplate.fromTemplate(`
        Given the following user question, corresponding SQL query, and SQL result, answer the user question.
        Question: {question}
        SQL Query: {query}
        SQL Result: {result}

        Answer:
      `);

      const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

      // Langkah 6: Membuat Rangkaian Chain Lengkap
      const fullChain = RunnableSequence.from([
        RunnablePassthrough.assign({
          relevantTables: (i) => tableChain.invoke({ question: i.question }),
        }).assign({
          query: (i) =>
            sqlQueryChain.invoke({
              question: i.question,
              tableNamesToUse: i.relevantTables, 
            }),
        }),
        RunnablePassthrough.assign({
          result: async (i) => {
            console.log("Query: ", i.query);
            return await db.run(i.query);
          },
        }),
        answerChain,
      ]);

      // Langkah 7: Eksekusi Chain dan Kirim Respons
      const responseOpenAI = await fullChain.invoke({ question });

      return response.json({
        status: "success",
        data: responseOpenAI,
      });
    } catch (error) {
      console.error("Error in Database Query: ", error);
      return response.status(500).json({
        status: "error",
        message: "Something went wrong with the database query.",
        error: error.message,
      });
    }
  }

  // Fungsi utama untuk menangani pertanyaan
  async langchain({ question, response }) {
    try {
      // Pastikan question diterima dari parameter
      if (!question || typeof question !== "string") {
        return response.status(400).json({
          status: "error",
          message: "Parameter 'question' harus berupa string.",
        });
      }
      
      const isDatabaseRelated = await this.isDatabaseQuery(question);

      if (isDatabaseRelated) {
        // Jika pertanyaan terkait database, lanjutkan ke Langchain untuk query SQL
        return await this.handleDatabaseQuery(question, response);
      } else {
        // Jika pertanyaan meminta penjelasan, gunakan ChatGPT untuk menjawab
        //return await this.handleChatCompletion(question, response);
        const chatbotController = use("App/Controllers/Http/ChatbotController");
            return await chatbotController.openAIResponse({ request, response });
      }
    } catch (error) {
      console.error("Error in langchain method: ", error);
      return response.status(500).json({
        status: "error",
        message: "Something went wrong.",
        error: error.message,
      });
    }
  }
}

module.exports = Chatbot2Controller;
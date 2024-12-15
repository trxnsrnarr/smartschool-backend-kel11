'use strict'

const MChatroom = use("App/Models/MChatroom");
const MMessage = use("App/Models/MMessage");
const Env = use("Env");

const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: Env.OPENAI_API_KEY });

const fs = require('fs');
const natural = require('natural');
const PDFDocument = require('pdfkit');
const classifier = new natural.BayesClassifier();

// Langchain
const { z } = require("zod");
const { DataSource } = require("typeorm");
const { SqlDatabase } = require("langchain/sql_db");
const { ChatOpenAI } = require("@langchain/openai");
const { createSqlQueryChain } = require("langchain/chains/sql_db");
const { PromptTemplate, ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { RunnablePassthrough, RunnableSequence } = require("@langchain/core/runnables");

const llm = new ChatOpenAI({
  modelName: "gpt-4o",
  temperature: 0,
});

const datasource = new DataSource({
  type: Env.get("DB_CONNECTION"),
  host: Env.get("A_DB_HOST"),
  port: Env.get("DB_PORT"),
  username: Env.get("A_DB_USER"),
  password: Env.get("A_DB_PASSWORD"),
  database: Env.get("DB_DATABASE"),
  synchronize: false,
  logging: true,
});

// Function untuk menghapus tag image dari data content image
function getBase64FromImgTag(content) {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : null;
}

// Function untuk memuat data dari file JSON dan melatih classifier
function trainClassifierFromJson(filePath) {
  // Membaca file JSON
  const rawData = fs.readFileSync(filePath);
  const trainingData = JSON.parse(rawData);

  // Menambahkan setiap item dalam JSON ke classifier
  trainingData.forEach((item) => {
    const { content, intent } = item;
    classifier.addDocument(content, intent);
  });

  // Melatih classifier
  classifier.train();
}

// Memanggil function untuk melatih classifier dengan file JSON
trainClassifierFromJson('./app/Data/nlp.json');

class ChatbotController {
  async storeMessage(messages, chatroomId = null, userId = null, intent = "text_question") {
    try {
      if (!chatroomId || chatroomId === null) {
        const storeChatroom = await MChatroom.create({
          name: messages[0].content.split(" ").slice(0, 5).join(" "),
          m_user_id: userId
        });
        chatroomId = storeChatroom.id;
      }

      const chatroom = await MChatroom.find(chatroomId);
      if (!chatroom) {
        return {
          status: 'error',
          message: 'Chatroom not found'
        };
      }

      for (const message of messages) {
        await MMessage.create({
          role: message.role,
          content: message.content,
          type_of_content: intent,
          m_chatroom_id: chatroomId,
        });
      }

      return {
        status: 'success',
        message: 'Messages successfully stored',
        chatroomId: chatroomId,
        data: messages
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'An error occurred while storing messages',
        error: error.message,
      };
    }
  }

  async sqlRequest(question) {
    const db = await SqlDatabase.fromDataSourceParams({
      appDataSource: datasource,
      includesTables: ["m_penghargaan", "tk_perusahaan_sekolah", "m_ta", "m_sekolah", "m_user", "m_sanksi_siswa", "m_sikap_siswa", "m_pelanggaran","m_kategori_pelanggaran", "tk_siswa_pelanggaran", "m_sanksi_pelanggaran", "m_prestasi", "m_anggota_ekskul", "m_ekstrakurikuler", "m_rapor_ekskul", "m_sarpras", "m_keterangan_pkl", "m_perusahaan", "m_mou_perusahaan", "m_alumni", "m_disposisi", "m_pelaporan_disposisi", "m_surat", "m_jurusan", "m_mata_pelajaran", "m_ujian", "m_jadwal_ujian", "tk_jadwal_ujian"],
      sampleRowsInTableInfo: 2,
      
    });


    const Table = z.object({
      names: z.array(z.string()).describe("Names of tables in SQL database"),
    });

    const tableNames = db.includesTables.map((t) => t).join("\n");

    const system = `
      Return the names of ALL the SQL tables that MIGHT be relevant to the user question.
      The tables are:

      ${tableNames}

      Remember to include ALL POTENTIALLY RELEVANT tables, even if you're not sure that they're needed.
      Question: {question}
      Relevant Tables:
    `;

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", system],
      ["human", "{question}"],
    ]);

    const tableChain = prompt.pipe(llm.withStructuredOutput(Table));
    
    const answerPrompt = PromptTemplate.fromTemplate(`
      Given the following user question, corresponding SQL query, and SQL result, answer the user question.

      Question: {question}
      SQL Query: {query}
      SQL Result: {result}

      Answer:
    `);

    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    const validationPrompt = `
    You are a {dialect} SQL expert. Your task is to generate syntactically correct and contextually accurate {dialect} queries based on the given input question. Before generating the query, you must first understand the structure of the database.

    **Step 1: Read Database Schema**:
    - First, review the provided schema information. This should include the list of tables, their columns, and the relationships between them (foreign keys and joins). You will use this schema information to generate queries accurately.
    - If the schema information is not provided, you must query the database's \`INFORMATION_SCHEMA\` (or similar database metadata) to retrieve the schema details dynamically. Specifically, you will need to find the tables and the relationships between them.
    - Check for foreign key relationships between tables. Look for columns that are named \`<related_table>_id\` which represent the foreign keys.
    - Ensure that you understand which tables are related and how they should be joined. Ensure you know the types of joins (INNER JOIN, LEFT JOIN, etc.) based on the provided schema and the user's query.

    **Step 2: Understanding the Question**:
    - Once the schema is loaded, analyze the user’s question to determine which tables and columns are required for the query.
    - Identify any specific roles, filtering conditions (e.g., \`siswa\`, \`guru\`, \`admin\`), and ensure you use these attributes to filter the data correctly.

    **Step 3: Construct the Query**:
    - Build the query by selecting only the necessary columns to answer the user's question. Do not include unnecessary data.
    - Unless the user specifies in the question a specific number of examples to obtain, query for at most {top_k} or 5 results using the LIMIT clause as per {dialect}.
    - If the user has not specified a limit on the number of results, use a \`LIMIT\` clause with a maximum of 5 rows. If the user explicitly asks for all data, do not include a \`LIMIT\` clause.
    - Always use explicit joins (e.g., \`INNER JOIN\`, \`LEFT JOIN\`, etc.) and ensure the conditions are correct.
    - Ensure that each column name is wrapped in backticks (\`\`) to denote it as a delimited identifier.
    - Write the query in a single line without using newline characters (\`\\n\`) or string concatenation (\`+\`).

    **Step 4: Verify Query Accuracy**:
    - Double-check that the query uses the correct tables and columns according to the schema.
    - Verify that all JOIN conditions are based on foreign keys and that the relationships between tables are correct.
    - Ensure that the query handles filtering by roles (e.g., filtering based on \`role\` column for \`siswa\`, \`guru\`, \`admin\`) if mentioned.

    **Error Avoidance**:
    - Avoid common SQL mistakes, such as:
      - Using NOT IN with NULL values.
      - Improper use of UNION instead of UNION ALL.
      - Data type mismatches in WHERE clauses or JOIN conditions.
      - Incorrect number of arguments in SQL functions.
      - Missing or improper quoting of identifiers.
      - Using BETWEEN for exclusive ranges unless explicitly needed.
      - Failing to handle NULL values properly, especially in joins or WHERE clauses.
      - Do NOT use Markdown annotations (like \`\`\`sql).
      - Only return the raw SQL query.
      - Ensure the query is syntactically and contextually correct.
      - Verify joins, filters, and conditions are accurate based on the database schema.

    **General Notes**:
    - Use \`date('now')\` to handle questions involving "today".
    - Always ensure that the query adheres to the structure and constraints of the provided table schema.
    - For the \`users\` table, the \`role\` column differentiates between \`siswa\`, \`guru\`, and \`admin\`. Ensure this column is used correctly for filtering data when applicable.
    
    **Relational Mapping**:
    - For each relationship between tables, understand which foreign key columns should be used for joins.
    - Be sure to check the table schema to identify which tables are related and ensure that joins reflect the correct relationships (e.g., using \`students.course_id = courses.id\`).
    - Handle scenarios where multiple tables need to be joined to retrieve comprehensive data (e.g., joining \`users\` with \`orders\` and \`products\` to get product details for each order).
    - Always ensure that the query includes only the necessary joins and avoids redundant data.

    Please use the following table schema:
    {table_info}

    Generate the query based on the user’s input and ensure it aligns with the database structure and relationships described above. Double-check the query for accuracy and logical correctness before finalizing it. Every generated query **must include a LIMIT clause with a maximum of {top_k} or 5 results**, unless explicitly instructed otherwise:
    - A \`LIMIT\` clause with a maximum of 5 rows if the user does not request all data.
    - No \`LIMIT\` clause if the user explicitly asks for all data.

    Extract SQL only from the answer for example:
    SELECT COUNT('m_user'.'id') AS jumlah_siswa FROM 'm_user' INNER JOIN 'm_sekolah' ON 'm_user'.'m_sekolah_id' = 'm_sekolah'.'id' WHERE 'm_user'.'role' = 'siswa' AND 'm_sekolah'.'nama' = 'SMKN 26 Jakarta';
`;

    // Validasi sebelum query dibuat
    // const validationPrompt = `
    //       You are a {dialect} SQL expert. Your task is to generate syntactically correct and contextually accurate {dialect} queries based on the given input question.

    //       Important instructions:
    //       1. **Relational Context**:
    //         - The database contains tables with relationships defined through columns named \`<table_name>_id\`. Use these columns to join tables correctly.
    //         - Ensure JOINs are properly constructed and only include columns relevant to the query context.

    //       2. **Role and Filtering**:
    //         - Pay close attention to columns such as \`role\` or similar attributes to filter data correctly. Ensure the column's content is matched accurately to the user’s intent.

    //       3. **Query Construction**:
    //         - Only query columns that are necessary to answer the question.
    //         - Unless the user specifies in the question a specific number of examples to obtain, query for at most {top_k} or 5 results using the LIMIT clause as per {dialect}.
    //         - Avoid selecting all columns with \`*\` unless explicitly requested.
    //         - Wrap each column name in backticks to denote them as delimited identifiers.
    //         - Made a multiple lines query (Just made a single line query).
    //         - Dont made a string query.
    //         - Dont using '\n' instead of ' '.
    //         - Dont using '+' for concatenation.


    //       4. **Error Avoidance**:
    //         - Avoid common SQL mistakes, such as:
    //           - Using NOT IN with NULL values.
    //           - Improper use of UNION instead of UNION ALL.
    //           - Data type mismatches in WHERE clauses or JOIN conditions.
    //           - Incorrect number of arguments in SQL functions.
    //           - Missing or improper quoting of identifiers.
    //           - Using BETWEEN for exclusive ranges unless explicitly needed.
    //           - Failing to consider NULL handling where applicable.
    //           - Never Using Limit, Always using LIMIT.

    //       5. **General Notes**:
    //         - Use \`date('now')\` to handle questions involving "today".
    //         - Always ensure the query adheres to the structure and constraints of the provided table schema.
    //         - For User's table there a role colomn to differentiate between siswa, guru and admin. Use this column to filter data correctly.

    //       Please use the following tables schema:
    //       {table_info}

    //       Generate the query based on the user’s input and ensure it aligns with the database structure and relationships described above. Double-check the query for accuracy and logical correctness before finalizing it. Every generated query **must include a LIMIT clause with a maximum of {top_k} or 5 results**, unless explicitly instructed otherwise.
    //     `;



    const prompt2 = ChatPromptTemplate.fromMessages([
      ["system", validationPrompt],
      ["human", "{input}"]
    ]);

    // const executeQuery = new QuerySqlTool(db);
    const queryChain = await createSqlQueryChain({
      llm,
      db,
      prompt: prompt2,
      dialect: "mysql"
    });
    console.log("ini query chain", queryChain);
    
    // console.log("Generated SQL Query:", queryChain);

    const fullChain = RunnableSequence.from([
      // Langkah 1: Dapatkan nama tabel yang relevan
      RunnablePassthrough
        .assign({
          relevantTables: (i) => tableChain.invoke({ question: i.question }),
        })
        .assign({
          query: (i) =>
            queryChain.invoke({
              question: i.question,
              tableNamesToUse: i.relevantTables,
            }),
        }),
      RunnablePassthrough
        .assign({
          result: async (i) => {
            console.log("query yg di eksekusi:", i.query);
            return await db.run(i.query)
          }
        }),

      // Langkah 2: Dapatkan jawaban dari pertanyaan sesuai format
      answerChain
    ]);

    try {
      const responseOpenAI = await fullChain.invoke({ question: question });
      return responseOpenAI;
    } catch (err) {
      console.error("Error in query response:", err);
      return err.message;
    }
  }

  async processOpenAI(userMessage, chatroomId, intent) {
    try {
      let response;

      const previousChatsData = await MMessage.query()
        .where("m_chatroom_id", chatroomId || null)
        .where("type_of_content", "text_question")
        .orderBy("created_at", "asc")
        .fetch();

      // Mengonversi hasil query menjadi array of objects dengan struktur yang diinginkan
      const previousChats = previousChatsData.toJSON().map(message => ({
        role: message.role,
        content: [
          {
            type: "text",
            text: message.content
          }
        ]
      }));

      switch (intent) {
        case "text_question":
          const imagesBase64 = await MMessage.query()
            .where("m_chatroom_id", chatroomId || null)
            .where("type_of_content", "image_request")
            .where("role", "assistant")
            .orderBy("created_at", "asc")
            .fetch();

          const images = imagesBase64.toJSON();

          const imageBase64Urls = images
            .map(image => getBase64FromImgTag(image.content))
            .filter(url => url !== null);

          const previousImage_urls = imageBase64Urls.length > 0
            ? imageBase64Urls.map(url => ({
              type: "image_url",
              image_url: { url }
            }))
            : null;

          response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              ...previousChats,
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text: userMessage
                  },
                  ...(previousImage_urls ? previousImage_urls : [])
                ]
              }
            ]
          });
          return response.choices[0].message.content;
        case "image_request":
          const previousMessages = previousChats.map(chat => chat.content).join(' ');
          const fullPrompt = previousMessages + ' ' + userMessage;

          response = await openai.images.generate({
            model: "dall-e-3",
            prompt: fullPrompt,
            n: 1,
            size: "1024x1024",
            style: "natural",
            response_format: "b64_json"
          });
          const imageBase64 = response.data[0].b64_json;
          return `<img src="data:image/png;base64,${imageBase64}" alt="Generated Image" />`;
        case "file_request":
          response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              ...previousChats,
              { role: "system", content: "You are a helpful assistant that generates content without filler or explanation." },
              { role: "user", content: userMessage + "\n The output should only contain the content of the file." }
            ]
          });

          const content = response.choices[0].message.content;

          // Create a PDF document
          const doc = new PDFDocument();

          // Create a stream to capture PDF data as a Buffer
          const pdfBuffer = await new Promise((resolve, reject) => {
            const buffers = [];
            doc.on('data', (chunk) => buffers.push(chunk));
            doc.on('end', () => resolve(Buffer.concat(buffers)));
            doc.on('error', reject);

            // Add content to the PDF
            doc.text(content);

            // Finalize PDF file
            doc.end();
          });

          // Convert the buffer to Base64
          const pdfBase64 = pdfBuffer.toString('base64');

          // Return Base64 string of PDF
          return `<a href="data:application/pdf;base64,${pdfBase64}" download="file.pdf">Download File PDF</a>`;
        case "sql_request":
          return await this.sqlRequest(userMessage)
        default:
          return "Invalid intent";
      }
    } catch (error) {
      return {
        status: 'error',
        message: 'An error occurred while proccessing OpenAI',
        error: error.message,
      };
    }
  }

  async openAIResponse({ auth, request, response }) {
    try {
      const userMessage = request.input("message");
      const chatroomId = request.input("chatroom_id");
      const user = await auth.getUser();
      const userId = user.id;

      const intent = classifier.classify(userMessage);

      const responseOpenAI = await this.processOpenAI(userMessage, chatroomId, intent);
      if (responseOpenAI.status === "error") {
        return response.status(500).json({
          status: responseOpenAI.status,
          message: responseOpenAI.message,
          error: responseOpenAI.error,
        });
      }

      const messages = [
        { role: "user", content: userMessage },
        { role: "assistant", content: responseOpenAI }
      ];

      // Ensure the message storing is awaited properly
      const storeResult = await this.storeMessage(messages, chatroomId, userId, intent);
      if (storeResult.status === "error") {
        return response.status(500).json({
          status: storeResult.status,
          message: storeResult.message,
          error: storeResult.error,
        });
      }

      // Return OpenAI response after storing the message
      return response.json({
        status: storeResult.status,
        message: storeResult.message,
        intent: intent,
        chatroomId: storeResult.chatroomId,
        data: storeResult.data
      });

    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'An error occurred while getting OpenAI response',
        error: error.message,
      });
    }
  }

  async getChatrooms({ auth, response }) {
    try {
      const user = await auth.getUser();
      const chatrooms = await MChatroom.query()
        .where('m_user_id', user.id)
        .fetch();
      return response.json({
        status: 'success',
        data: chatrooms
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'Failed to get chatrooms',
        error: error.message
      });
    }
  }

  async deleteAllChatrooms({ auth, response }) {
    try {
      const user = await auth.getUser();
      await MChatroom.query().where('m_user_id', user.id).delete();
      return response.json({
        status: 'success',
        message: 'All chatrooms deleted successfully'
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'Failed to delete all chatrooms',
        error: error.message
      });
    }
  }

  async deleteChatroomById({ params, response }) {
    try {
      const chatroom = await MChatroom.find(params.id);
      if (!chatroom) {
        return response.status(404).json({
          status: 'error',
          message: 'Chatroom not found'
        });
      }
      await chatroom.delete();
      return response.json({
        status: 'success',
        message: 'Chatroom deleted successfully'
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'Failed to delete chatroom by ID',
        error: error.message
      });
    }
  }

  async getMessagesByChatroomId({ params, response }) {
    try {
      const { chatroom_id } = params;
      const messages = await MMessage.query()
        .where('m_chatroom_id', chatroom_id)
        .orderBy('created_at', 'asc')
        .fetch();

      return response.json({
        status: 'success',
        data: messages
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'Failed to get messages by chatroom ID',
        error: error.message
      });
    }
  }

  async getSuggestions({ auth, response, request }) {
    const user = await auth.getUser();
    const userProfileTemplate = `
      Analisa ini dalam membuat saran pencarian yang lebih akurat
          Asal Sekolah : ${user?.sekolah?.nama}
          Jabatan : ${user?.role}
      `;
    const inputValue = request.input("input_value");
    try {
      const responseOpenAI = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system", content: `Kamu adalah asisten saran pencarian. ${userProfileTemplate}. Ketika pengguna mengetikkan sebagian kata atau frasa, berikan beberapa ide atau saran pencarian yang relevan. Gunakan bahasa Indonesia dan batasi jawaban hingga 50 token.`
          },
          {
            role: "user",
            content: `Berikan tiga saran pencarian terkait untuk: "${inputValue}". Tampilkan saran dalam bentuk teks yang langsung terhubung dengan kata/frasa tersebut, tanpa angka atau bullet, dipisahkan dengan garis baru. Format jawaban harus: "${inputValue} {saran}" dan gunakan tanda baca yang sesuai.`,
          }
        ],
        max_tokens: 50,
      });

      const suggestionsList = responseOpenAI.choices[0].message.content.split('\n');
      return response.json({
        status: 'success',
        data: suggestionsList
      })
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message
      })
    }
  }

  async generateQuestions(role, tingkat = null, numQuestions = 1) {
    try {
      const template = tingkat
        ? `Buat {numQuestions} pertanyaan umum untuk role {role} di tingkat {tingkat}. Jawaban harus singkat tanpa simbol tambahan seperti ** - atau lainnya.`
        : `Buat {numQuestions} pertanyaan umum untuk role {role}. Jawaban harus singkat tanpa simbol tambahan seperti ** - atau lainnya.`;

      const prompt = ChatPromptTemplate.fromTemplate(template);

      const chain = prompt.pipe(openai);

      // Eksekusi prompt
      const response = await chain.invoke({
        numQuestions,
        role,
        tingkat
      });

      // Periksa struktur respons dan ekstrak teks
      const responseText = response.text || response; // Jika respons berupa objek, ambil properti `text`

      // Parsing hasil menjadi array pertanyaan
      const questions = responseText
        .split('\n')
        .filter(Boolean)
        .map((question) =>
          question
            .replace(/^\d+\.\s*/, '')
            .trim()
        );

      console.log('Raw response:', responseText);
      return questions;
    } catch (error) {
      console.error('Error generating questions:', error.message);
      return [];
    }
  }

  async addGeneratedQuestions(role, tingkat = null) {
    const newQuestions = await generateQuestions(role, tingkat);

    newQuestions.forEach((question) => {
      existingData.questions.push({ question, role, tingkat });
    });

    console.log(`Pertanyaan untuk ${role}${tingkat ? ` di tingkat ${tingkat}` : ''} berhasil ditambahkan:`, newQuestions);
  }

  async getTemplateSuggestions({ auth, response }) {
    try {
      const user = await auth.getUser();
      console.log(user);

      const templateSuggestions = this.addGeneratedQuestions(user.role, "sma");

      return response.json({
        status: 200,
        data: templateSuggestions
      })
    }
    catch (error) {
      return response.json({
        status: 500,
        data: error.message
      })
    }
  }
}

module.exports = ChatbotController

'use strict'

const Env = use('Env');
const { z } = require("zod");
const { DataSource } = require("typeorm");
const { SqlDatabase } = require("langchain/sql_db");
const { ChatOpenAI } = require("@langchain/openai");
const { QuerySqlTool } = require("langchain/tools/sql");
const { createSqlQueryChain, SqlDatabaseChain } = require("langchain/chains/sql_db");
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
  synchronize: false,
  logging: false,
});

class Chatbot2Controller {
  async langchain({ response, request }) {
    const question = request.input("question");

    const db = await SqlDatabase.fromDataSourceParams({
      appDataSource: datasource,
      includesTables: [
        // Table Utama
        "m_user",
        "m_sekolah",
        "m_ta",

        // TU
        "m_mata_pelajaran",
        "m_profil_user",
        "m_rombel",
        "m_anggota_rombel",
        "m_barang",
        "m_lokasi",
        "m_surat",
        "m_disposisi",
        "m_pelaporan_disposisi",

        // PPDB
        "m_alur_ppdb",
        "m_jalur_ppdb",
        "m_informasi_jalur_ppdb",
        "m_pendaftar_ppdb",
        "m_gelombang_ppdb",
        "m_jadwal_ppdb",
        "tk_peserta_ujian_ppdb",

        //
        "m_penghargaan",
        "tk_perusahaan_sekolah",
        "m_sanksi_siswa",
        "m_sikap_siswa",
        "m_pelanggaran",
        "m_kategori_pelanggaran",
        "tk_siswa_pelanggaran",
        "m_sanksi_pelanggaran",
        "m_prestasi",
        "m_anggota_ekskul",
        "m_ekstrakurikuler",
        "m_rapor_ekskul",
        "m_sarpras",
        "m_keterangan_pkl",
        "m_perusahaan",
        "m_mou_perusahaan",
        "m_alumni",
        "m_jurusan",
        "m_jadwal_ujian",
        "m_peringatan_ujian_siswa",
        "m_soal_ujian",
        "m_ujian",
        "m_ujian_siswa",
        "tk_jadwal_ujian",
        "tk_jawaban_ujian_siswa",
        "tk_peserta_ujian",
        "tk_siswa_ujian",
        "tk_soal_ujian"
      ],
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

    // Validasi sebelum query dibuat
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
            return await db.run(i.query)
          }
        }),

      // Langkah 2: Dapatkan jawaban dari pertanyaan sesuai format
      answerChain
    ]);

    try {
      const responseOpenAI = await fullChain.invoke({ question: question });
      return response.json({
        status: "success",
        data: responseOpenAI,
      });
    } catch (err) {
      console.error("Error in RunnableSequence:", err);
      return response.json({
        status: "error",
        data: err.message,
      });
    }
  }
}

module.exports = Chatbot2Controller;

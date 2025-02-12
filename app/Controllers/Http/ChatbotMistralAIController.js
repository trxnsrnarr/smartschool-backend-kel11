'use strict'

const MChatroom = use("App/Models/MChatroom");
const MMessage = use("App/Models/MMessage");
const Env = use("Env");

const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: Env.OPENAI_API_KEY });

// Langchain
const { z } = require("zod");
const { DataSource } = require("typeorm");
const { SqlDatabase } = require("langchain/sql_db");
const { ChatMistralAI, MistralAIEmbeddings } = require("@langchain/mistralai");
const { createSqlQueryChain } = require("langchain/chains/sql_db");
const { PromptTemplate, ChatPromptTemplate, FewShotPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { RunnablePassthrough, RunnableSequence } = require("@langchain/core/runnables");
const { MemoryVectorStore } = require("langchain/vectorstores/memory");
const { SemanticSimilarityExampleSelector } = require("@langchain/core/example_selectors");

const fs = require('fs');
const PDFDocument = require('pdfkit');
const { StructuredTool } = require('@langchain/core/tools');
const { HumanMessage } = require('@langchain/core/messages');
const natural = require('natural');
const classifier = new natural.BayesClassifier();

const nlp = './app/Data/nlp.json';
const sqlExamples = './app/Data/sql.json';

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed"
});

const vectorStore = new MemoryVectorStore(embeddings);

const llm = new ChatMistralAI({
  model: "mistral-large-latest",
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
  timezone: "Z"
});

// Function untuk menghapus tag image dari data content image
function getBase64FromImgTag(content) {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : null;
}

// FUNGSI INTENT 1.0
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
trainClassifierFromJson(nlp);

// // FUNGSI INTENT 2.0
// // Fungsi untuk melatih intent classifier
// async function trainIntentClassifier(filePath) {
//   try {
//     const rawData = fs.readFileSync(filePath, 'utf-8');
//     const trainingData = JSON.parse(rawData);

//     const docs = trainingData.map(item => ({
//       pageContent: item.content,
//       metadata: { intent: item.intent }
//     }));

//     await vectorStore.addDocuments(docs);
//   } catch (error) {
//     console.error("Gagal melatih classifier:", error);
//   }
// }

// // Fungsi untuk mengklasifikasikan intent
// async function classifyIntent(text) {
//   const results = await vectorStore.similaritySearch(text, 4);
//   return results[0]?.metadata?.intent || "text_question";
// }

// Fungsi untuk menyimpan intent baru jika tidak ditemukan
function saveNewIntent(content, intent, filePath = nlp) {
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const trainingData = JSON.parse(rawData);

    const newEntry = { content: content, intent: intent };
    trainingData.push(newEntry);

    fs.writeFileSync(filePath, JSON.stringify(trainingData, null, 2));
    console.log("Intent baru ditambahkan ke nlp.json");
  } catch (error) {
    console.error("Gagal menyimpan intent baru:", error);
  }
}

class CreatePDFTool extends StructuredTool {
  name = "createPdf";
  description = "Create a PDF file with the given content";

  // Definisikan skema input menggunakan Zod
  schema = z.object({
    content: z.string().describe("The content to include in the PDF"),
  });

  async _call({ content }) {
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      const buffers = [];

      doc.on('data', (chunk) => buffers.push(chunk));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        const base64 = pdfBuffer.toString('base64');
        resolve(`<a href="data:application/pdf;base64,${base64}" download="file.pdf">Download File PDF</a>`);
      });
      doc.on('error', (err) => {
        reject(new Error(`Error creating PDF: ${err.message}`));
      });

      doc.text(content);
      doc.end();
    });
  }
}

class ChatbotMistralAIController {
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

  async textQuestion(question, previousChats) {
    const systemTemplate = "Anda adalah seorang Assistant Aplikasi SmartESchool yang berguna untuk menjawab pertanyaan - pertanyaan pengguna di aplikasi ini.";
    const promptTemplate = ChatPromptTemplate.fromMessages([
      ["system", systemTemplate],
      ...previousChats,
      ["user", "{question}"]
    ]);
    const promptValue = await promptTemplate.invoke({ question });
    const response = await llm.invoke(promptValue);

    return response?.content;
  }

  async imageRequest(question) {
    // const previousMessages = previousChats.map(chat => chat.content).join(' ');
    // const fullPrompt = previousMessages + ' ' + question;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: question,
      n: 1,
      size: "1024x1024",
      style: "natural",
      response_format: "b64_json"
    });
    const imageBase64 = response.data[0].b64_json;
    return `<img src="data:image/png;base64,${imageBase64}" alt="Generated Image" />`;
  }

  async fileRequest(question) {
    try {
      // Inisialisasi agent dengan tools
      const createPDFTool = new CreatePDFTool();

      const llmWithTools = llm.bindTools([createPDFTool]);

      const messages = [new HumanMessage(question)];

      const aiMessage = await llmWithTools.invoke(messages);

      messages.push(aiMessage);
      const toolsByName = {
        createPdf: createPDFTool
      };

      let toolMessage;
      for (const toolCall of aiMessage.tool_calls) {
        const selectedTool = toolsByName[toolCall.name];
        toolMessage = await selectedTool.invoke(toolCall);
        messages.push(toolMessage);
      }
      return toolMessage?.content;
    } catch (error) {
      console.error("Error in query response BE:", error);
      return {
        status: 'error',
        message: "Kesalahan dalam memproses permintaan File. Silakan coba lagi nanti.",
        error: error.message,
      };
    }
  }

  async sqlRequest(question, user) {
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

        // PKL
        "m_penerimaan_siswa",
        "m_penerimaan_perusahaan",
        "tk_perusahaan_sekolah",
        "m_perusahaan",

        "m_penghargaan",
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
        "tk_soal_ujian",
        "m_jam_mengajar",
        "m_jadwal_mengajar",
        "m_kategori",
        "m_kategori_mapel",
        "m_predikat_nilai",
        "m_bobot_nilai",
        "m_tugas",
        "m_rekap",
        "tk_rekap_nilai",
        "m_rekap_rombel",
        "tk_mapel_rapor"
      ],
      // sampleRowsInTableInfo: 2,
    });

    const Table = z.object({
      names: z.array(z.string()).describe("Names of tables in SQL database"),
    });

    const tableNames = db.includesTables.map((t) => t).join("\n");

    const relavantTablePrompt = `
      Return the names of ALL the SQL tables that MIGHT be relevant to the user question.
      The tables are:

      ${tableNames}

      Remember to include ALL POTENTIALLY RELEVANT tables, even if you're not sure that they're needed.
      Question: {question}
      Relevant Tables:
    `;

    const relavantTable = ChatPromptTemplate.fromMessages([
      ["system", relavantTablePrompt],
      ["human", "{question}"],
    ]);

    const tableChain = relavantTable.pipe(llm.withStructuredOutput(Table));
    const relavantTables = await tableChain.invoke({ question });
    console.log(relavantTables.names);

    const db2 = await SqlDatabase.fromDataSourceParams({
      appDataSource: datasource,
      includesTables: relavantTables.names,
      sampleRowsInTableInfo: 2,
    });

    const rawData = fs.readFileSync(sqlExamples, 'utf-8');
    const examples = JSON.parse(rawData);

    const exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(examples, embeddings, MemoryVectorStore, {
      k: 5,
      inputKeys: ["input"],
    });

    const examplePrompt = PromptTemplate.fromTemplate(
      `User input: {input}\nSQL Query: {query}`
    );

    const answerPrompt = PromptTemplate.fromTemplate(`
      Anda adalah seorang Assistant Aplikasi SmartESchool yang berguna untuk menjawab pertanyaan - pertanyaan pengguna dalam mempertanyakan terhadap data di aplikasi ini.
      Semisal hasil dari SQL Error maka berikanlah respon yang menjelaskan bahwa pertanyaan pengguna kurang memberikan informasi yang tepat. Dan jelaskan dengan bahasa yang bukan teknis agar orang awam mengerti.
      Untuk Pengguna Chatbot kurang lebih seorang anggota sekolah seperti siswa, guru, kepala sekolah, admin, dll.
      Diberikan pertanyaan pengguna berikut, query SQL yang sesuai, dan hasil SQL, jawablah pertanyaan pengguna.

      Pertanyaan: {question}
      Query SQL: {query}
      Hasil SQL: {result}

      Jawaban:
    `);

    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    // const validationPrompt = `
    //   Tugas Anda sebagai ahli SQL {dialect} adalah untuk menghasilkan query SQL yang sintaksisnya benar dan kontekstual sesuai dengan pertanyaan yang diberikan.
    //   Buatlah query SQL berdasarkan informasi pengguna yang telah login. Informasi pengguna yang tersedia adalah sebagai berikut:

    //   ID Pengguna: ${user.id}
    //   Role: ${user.role} (contoh: 'siswa', 'guru', 'kepsek', atau 'admin')
    //   Nama: ${user.nama}
    //   ID Sekolah: ${user.m_sekolah_id}
    //   Saat pengguna memberikan pertanyaan, tugas Anda adalah:
    //   Memahami konteks pertanyaan dan memastikan query SQL yang dihasilkan relevan dengan data pengguna.
    //   Sebelum membuat query, Anda harus memahami struktur database terlebih dahulu.

    //   Gunakan skema tabel berikut:
    //   {table_info}

    //   **Langkah 1: Membaca Skema Database**
    //     - Pertama, tinjau informasi skema yang diberikan. Informasi ini mencakup daftar tabel, kolom-kolomnya, dan hubungan antar tabel (kunci asing dan cara penggabungan/join). Gunakan informasi ini untuk membuat query secara akurat.
    //     - Jika informasi skema tidak disediakan, Anda harus mengambil detail skema database secara dinamis melalui \`INFORMATION_SCHEMA\` (atau metadata database serupa). Secara spesifik, Anda perlu menemukan tabel dan hubungan antar tabelnya.
    //     - Periksa hubungan kunci asing antara tabel. Cari kolom yang dinamai dengan pola \`<related_table>_id\` yang menunjukkan kunci asing.
    //     - Pastikan Anda memahami tabel mana yang berhubungan dan bagaimana mereka harus digabungkan. Pastikan juga Anda mengetahui jenis penggabungan (INNER JOIN, LEFT JOIN, dll.) berdasarkan skema dan pertanyaan pengguna.

    //   **Langkah 2: Memahami Pertanyaan**
    //     - Setelah skema dimuat, analisis pertanyaan pengguna untuk menentukan tabel dan kolom mana yang dibutuhkan untuk query.
    //     - Identifikasi peran spesifik atau kondisi penyaringan (misalnya, \`siswa\`, \`guru\`, \`kepsek\`, \`admin\`) dan pastikan atribut ini digunakan untuk memfilter data secara benar.

    //   **Langkah 3: Membuat Query**
    //     - Buat query hanya dengan menggunakan command SELECT (Jangan gunakan command CRETE, UPDATE, DELETE, ALTER, dll).
    //     - Buat query dengan memilih hanya kolom yang diperlukan untuk menjawab pertanyaan pengguna. Jangan sertakan data yang tidak diperlukan.
    //     - Kecuali pengguna menentukan jumlah data yang ingin diambil, gunakan batasan maksimal ({top_k} atau 5 hasil) dengan klausa LIMIT sesuai dengan standar {dialect}.
    //     - Jika pengguna tidak menentukan batas jumlah data, tambahkan klausa LIMIT dengan maksimum 5 baris. Jika pengguna meminta semua data secara eksplisit, jangan sertakan klausa LIMIT.
    //     - Gunakan penggabungan eksplisit (misalnya, \`INNER JOIN\`, \`LEFT JOIN\`, dll.) dan pastikan kondisinya benar.
    //     - Bungkus setiap nama kolom dengan tanda kutip balik (\`\`) untuk menandai bahwa itu adalah pengenal.
    //     - Tulis query dalam satu baris tanpa menggunakan karakter baris baru (\`\\n\`) atau penggabungan string (\`+\`).
    //     - Jika pertanyaan berkaitan dengan informasi pribadi pengguna, tambahkan kondisi filter berdasarkan id, role, atau m_sekolah_id.

    //   **Langkah 4: Verifikasi Ketepatan Query**
    //     - Periksa ulang bahwa query menggunakan tabel dan kolom yang benar sesuai dengan skema.
    //     - Pastikan semua kondisi JOIN didasarkan pada kunci asing dan bahwa hubungan antar tabel sudah benar.
    //     - Pastikan query menangani penyaringan berdasarkan peran (misalnya, memfilter berdasarkan kolom role untuk siswa, guru, admin) jika disebutkan.

    //   **Hindari Kesalahan Umum**
    //   **Hindari kesalahan umum dalam SQL, seperti**:
    //     - Menggunakan NOT IN dengan nilai NULL.
    //     - Penggunaan UNION yang salah, seharusnya menggunakan UNION ALL.
    //     - Ketidaksesuaian tipe data dalam klausa WHERE atau kondisi JOIN.
    //     - Jumlah argumen yang salah dalam fungsi SQL.
    //     - Penggunaan tanda kutip yang tidak benar pada pengenal.
    //     - Menggunakan BETWEEN untuk rentang eksklusif kecuali diminta secara eksplisit.
    //     - Gagal menangani nilai NULL dengan benar, terutama dalam JOIN atau klausa WHERE.
    //     - Jangan menggunakan anotasi Markdown (seperti sql).
    //     - Hanya kembalikan query SQL mentah.
    //     - Pastikan query secara sintaksis dan kontekstual benar.
    //     - Verifikasi penggabungan, filter, dan kondisi yang benar sesuai dengan skema database.

    //   **Catatan Umum**
    //     - Tambahkan logika untuk membaca data berdasarkan waktu tertentu. Gunakan:
    //     - **Hari ini:** Gunakan \`CURDATE()\`.
    //     - **Kemarin:** Gunakan \`DATE_SUB(CURDATE(), INTERVAL 1 DAY)\`.
    //     - **Besok:** Gunakan \`DATE_ADD(CURDATE(), INTERVAL 1 DAY)\`.
    //     - **Lusa:** Gunakan \`DATE_ADD(CURDATE(), INTERVAL 2 DAY)\`.
    //     - **Dua hari lalu:** Gunakan \`DATE_SUB(CURDATE(), INTERVAL 2 DAY)\`.
    //     - **Rentang waktu:** Gunakan format \`BETWEEN 'YYYY-MM-DD' AND 'YYYY-MM-DD'\`.
    //     - **Hari tertentu dalam minggu:** Gunakan \`DAYOFWEEK()\` atau \`WEEKDAY()\` untuk membandingkan hari tertentu.
    //     - Selalu pastikan query sesuai dengan struktur dan batasan tabel yang diberikan.
    //     - Untuk tabel \`m_user\`, kolom \`role\` membedakan antara siswa, guru, dan admin. Pastikan kolom ini digunakan dengan benar untuk memfilter data jika berlaku.
    //     - Semisal pengguna meminta data jadwal ujian yang memerlukan relasi dengan sekolah gunakan perintah JOIN seperti ini:  JOIN m_user ON m_user.id = m_jadwal_ujian.m_user_id JOIN m_sekolah ON m_sekolah.id = m_user.m_sekolah_id.
    //     - Semisal pengguna menanyakan data yang berkaitan dengan tahun akademik atau ta jangan sertakan kolom aktif pada table m_ta (ta yang digunakan saat ini) jika tidak dibahas.
    //     - Saat membuat query, periksa setiap tabel yang digunakan apakah memiliki kolom \`dihapus\`.
    //     - Jika sebuah tabel memiliki kolom \`dihapus\`, tambahkan kondisi \`AND <nama_tabel>.\`dihapus\` = 0\` di klausa WHERE untuk menyaring data yang tidak dihapus.
    //     - Jika sebuah tabel tidak memiliki kolom \`dihapus\`, kondisi tersebut tidak perlu ditambahkan.

    //   **Pemetaan Relasional**
    //     - Untuk setiap hubungan antar tabel, pahami kolom kunci asing mana yang harus digunakan untuk penggabungan.
    //     - Pastikan query hanya mencakup penggabungan yang diperlukan dan menghindari data yang redundan.

    //   Buat query berdasarkan input pengguna dan pastikan query sesuai dengan struktur database dan hubungan yang dijelaskan di atas. Periksa ulang query untuk ketepatan dan kebenaran logis sebelum menyelesaikannya. Setiap query yang dihasilkan harus mencakup klausa LIMIT dengan maksimal {top_k} atau 5 hasil, kecuali dinyatakan sebaliknya oleh pengguna:
    //     - Tambahkan klausa \`LIMIT\` dengan maksimal 5 baris jika pengguna tidak meminta semua data.
    //     - Jangan tambahkan klausa \`LIMIT\` jika pengguna secara eksplisit meminta semua data.

    //   Hanya keluarkan query SQL mentah sebagai output.
    //   Contoh output:
    //     - Query untuk menghitung jumlah pengguna siswa: SELECT COUNT('m_user'.'id') AS jumlah_siswa FROM 'm_user' INNER JOIN 'm_sekolah' ON 'm_user'.'m_sekolah_id' = 'm_sekolah'.'id' WHERE 'm_user'.'role' = 'siswa' AND 'm_sekolah'.'nama' = 'SMKN 26 Jakarta';
    //     - Query untuk melihat data lokasi berserta dengan total barang sarpas: SELECT m_lokasi.nama AS nama_lokasi, COUNT(m_barang.nama) AS total_barang FROM m_lokasi JOIN m_barang ON m_lokasi.id = m_barang.m_lokasi_id JOIN m_sekolah ON m_lokasi.m_sekolah_id = m_sekolah.id WHERE m_sekolah.nama = 'Sekolah Demo Smarteschool' AND m_lokasi.dihapus = 0 AND m_barang.dihapus = 0 GROUP BY m_lokasi.nama;
    //     - Query untuk melihat data ujian hari ini: SELECT m_ujian.nama AS ujian_nama, m_jadwal_ujian.waktu_dibuka, m_user.nama AS pembuat_jadwal, m_sekolah.nama AS sekolah_nama FROM m_ujian JOIN m_jadwal_ujian ON m_jadwal_ujian.m_ujian_id = m_ujian.id JOIN m_user ON m_user.id = m_jadwal_ujian.m_user_id JOIN m_sekolah ON m_sekolah.id = m_user.m_sekolah_id WHERE date(m_jadwal_ujian.waktu_dibuka) = curdate() AND m_sekolah.nama = "SMAN 8 Jakarta";
    //     - Query untuk melihat data ujian dengan tanggal tertentu: SELECT m_ujian.nama AS ujian_nama, m_jadwal_ujian.waktu_dibuka, m_user.nama AS pembuat_jadwal, m_sekolah.nama AS sekolah_nama FROM m_ujian JOIN m_jadwal_ujian ON m_jadwal_ujian.m_ujian_id = m_ujian.id JOIN m_user ON m_user.id = m_jadwal_ujian.m_user_id JOIN m_sekolah ON m_sekolah.id = m_user.m_sekolah_id WHERE date(m_jadwal_ujian.waktu_dibuka) = "2025-01-03" AND m_sekolah.nama = "SMAN 8 Jakarta";
    //     - Query untuk melihat data peserta ujian hari ini: select distinct tk_peserta_ujian.id as id_peserta, m_user.nama as nama_peserta, m_jadwal_ujian.waktu_dibuka as waktu_dibuka, m_ujian.nama as nama_ujian, m_sekolah.nama as nama_sekolah from tk_peserta_ujian join m_user on m_user.id = tk_peserta_ujian.m_user_id join m_sekolah on m_sekolah.id = m_user.m_sekolah_id join tk_jadwal_ujian on tk_jadwal_ujian.id = tk_peserta_ujian.tk_jadwal_ujian_id join m_jadwal_ujian on m_jadwal_ujian.id = tk_jadwal_ujian.m_jadwal_ujian_id join m_ujian on m_ujian.id = m_jadwal_ujian.m_ujian_id where date(m_jadwal_ujian.waktu_dibuka) = curdate() and m_sekolah.nama = "sman 8 jakarta";
    //     - Query untuk melihat data peserta ujian dengan tanggal tertentu: select distinct tk_peserta_ujian.id as id_peserta, m_user.nama as nama_peserta, m_jadwal_ujian.waktu_dibuka as waktu_dibuka, m_ujian.nama as nama_ujian, m_sekolah.nama as nama_sekolah from tk_peserta_ujian join m_user on m_user.id = tk_peserta_ujian.m_user_id join m_sekolah on m_sekolah.id = m_user.m_sekolah_id join tk_jadwal_ujian on tk_jadwal_ujian.id = tk_peserta_ujian.tk_jadwal_ujian_id join m_jadwal_ujian on m_jadwal_ujian.id = tk_jadwal_ujian.m_jadwal_ujian_id join m_ujian on m_ujian.id = m_jadwal_ujian.m_ujian_id where date(m_jadwal_ujian.waktu_dibuka) = "2025-01-16" and m_sekolah.nama = "sman 8 jakarta";
    //     - Query untuk melihat data surat keluar pada tanggal yang ditentukan: SELECT m_surat.nomor, m_surat.perihal, m_surat.asal, m_surat.tanggal FROM m_surat INNER JOIN m_sekolah ON m_surat.m_sekolah_id = m_sekolah.id WHERE m_surat.tipe = 'keluar' AND m_surat.tanggal = '2021-11-11' AND m_sekolah.nama = 'SMK Bhakti Persada' AND m_surat.dihapus = 0;
    //     - Query untuk menampilkan jadwal mengajar sesuai dengan waktu yang ditentukan: SELECT m_rombel.nama AS kelas, m_jam_mengajar.jam_mulai, m_jam_mengajar.jam_selesai, m_mata_pelajaran.nama AS mata_pelajaran, m_user.nama AS guru FROM m_jadwal_mengajar JOIN m_jam_mengajar ON m_jadwal_mengajar.m_jam_mengajar_id = m_jam_mengajar.id JOIN m_mata_pelajaran ON m_jadwal_mengajar.m_mata_pelajaran_id = m_mata_pelajaran.id JOIN m_rombel ON m_jadwal_mengajar.m_rombel_id = m_rombel.id JOIN m_user ON m_mata_pelajaran.m_user_id = m_user.id JOIN m_sekolah ON m_jadwal_mengajar.m_sekolah_id = m_sekolah.id JOIN m_ta ON m_jadwal_mengajar.m_ta_id = m_ta.id WHERE m_sekolah.nama = 'Sekolah Demo Smarteschool' AND m_ta.aktif = 1 AND m_jam_mengajar.kode_hari = DAYOFWEEK(CURDATE()) - 1 and m_user.dihapus = 0 and m_mata_pelajaran.dihapus = 0 and m_rombel.dihapus = 0 and m_ta.dihapus = 0;
    //     - Query untuk menampilkan nilai ujian siswa: SELECT tk_peserta_ujian.nilai FROM tk_peserta_ujian JOIN m_user ON tk_peserta_ujian.m_user_id = m_user.id JOIN tk_jadwal_ujian ON tk_peserta_ujian.tk_jadwal_ujian_id = tk_jadwal_ujian.id join m_jadwal_ujian on tk_jadwal_ujian.m_jadwal_ujian_id = m_jadwal_ujian.id join m_ujian on m_jadwal_ujian.m_ujian_id = m_ujian.id WHERE m_ujian.nama = 'DIAGNOSTIK MATEMATIKA 2425' AND m_user.nama = 'HILMY MUZHAFFAR PASHA'
    //     - Query untuk menampilkan nama siswa yang pkl di perusahaan PT. SmartSchool: SELECT m_user.nama AS nama_siswa FROM m_penerimaan_siswa INNER JOIN m_user ON m_penerimaan_siswa.m_user_id = m_user.id INNER JOIN m_penerimaan_perusahaan ON m_penerimaan_siswa.m_penerimaan_perusahaan_id = m_penerimaan_perusahaan.id INNER JOIN tk_perusahaan_sekolah ON m_penerimaan_perusahaan.tk_perusahaan_sekolah_id = tk_perusahaan_sekolah.id INNER JOIN m_perusahaan ON tk_perusahaan_sekolah.m_perusahaan_id = m_perusahaan.id WHERE m_perusahaan.nama = "PT. SmartSchool" AND m_perusahaan.dihapus = 0 AND m_penerimaan_siswa.dihapus = 0;
    //     - Query untuk mendapatkan data nama walikelas dari suatu rombel atau kelas seseorang: SELECT m_user.nama AS nama_walikelas FROM m_rombel INNER JOIN m_anggota_rombel ON m_anggota_rombel.m_rombel_id = m_rombel.id INNER JOIN m_user ON m_rombel.m_user_id = m_user.id WHERE m_anggota_rombel.m_user_id = 2912837 AND m_anggota_rombel.dihapus = 0 LIMIT 5;
    // `;

    // const validation = ChatPromptTemplate.fromMessages([
    //   ["system", validationPrompt],
    //   ["human", "{input}"]
    // ]);

    const validation2 = new FewShotPromptTemplate({
      exampleSelector,
      examplePrompt,
      prefix: `
        Tugas Anda sebagai ahli SQL {dialect} adalah untuk menghasilkan query SQL yang sintaksisnya benar dan kontekstual sesuai dengan pertanyaan yang diberikan.
        Buatlah query SQL berdasarkan informasi pengguna yang telah login. Informasi pengguna yang tersedia adalah sebagai berikut:

        ID Pengguna: ${user.id}
        Role: ${user.role} (contoh: 'siswa', 'guru', 'kepsek', atau 'admin')
        Nama: ${user.nama}
        ID Sekolah: ${user.m_sekolah_id}

        Anda hanya dapat mengakses data sekolah yang sesuai dengan ID Sekolah Pengguna saat ini: ${user.m_sekolah_id}.
        Jika pertanyaan terkait dengan sekolah lain, jangan buat query.

        Saat pengguna memberikan pertanyaan, tugas Anda adalah:
        Memahami konteks pertanyaan dan memastikan query SQL yang dihasilkan relevan dengan data pengguna.
        Sebelum membuat query, Anda harus memahami struktur database terlebih dahulu.

        Gunakan relavant tabel berikut:
        {table_info}

        **Langkah 1: Membaca Skema Database**
          - Pertama, tinjau informasi skema yang diberikan. Informasi ini mencakup daftar tabel, kolom-kolomnya, dan hubungan antar tabel (kunci asing dan cara penggabungan/join). Gunakan informasi ini untuk membuat query secara akurat.
          - Jika informasi skema tidak disediakan, Anda harus mengambil detail skema database secara dinamis melalui \`INFORMATION_SCHEMA\` (atau metadata database serupa). Secara spesifik, Anda perlu menemukan tabel dan hubungan antar tabelnya.
          - Periksa hubungan kunci asing antara tabel. Cari kolom yang dinamai dengan pola \`<related_table>_id\` yang menunjukkan kunci asing.
          - Pastikan Anda memahami tabel mana yang berhubungan dan bagaimana mereka harus digabungkan. Pastikan juga Anda mengetahui jenis penggabungan (INNER JOIN, LEFT JOIN, dll.) berdasarkan skema dan pertanyaan pengguna.

        **Langkah 2: Memahami Pertanyaan**
          - Setelah skema dimuat, analisis pertanyaan pengguna untuk menentukan tabel dan kolom mana yang dibutuhkan untuk query.
          - Identifikasi peran spesifik atau kondisi penyaringan (misalnya, \`siswa\`, \`guru\`, \`kepsek\`, \`admin\`) dan pastikan atribut ini digunakan untuk memfilter data secara benar.

        **Langkah 3: Membuat Query**
          - Buat query hanya dengan menggunakan command SELECT (Jangan gunakan command CRETE, UPDATE, DELETE, ALTER, dll).
          - Buat query dengan memilih hanya kolom yang diperlukan untuk menjawab pertanyaan pengguna. Jangan sertakan data yang tidak diperlukan.
          - Kecuali pengguna menentukan jumlah data yang ingin diambil, gunakan batasan maksimal ({top_k} atau 5 hasil) dengan klausa LIMIT sesuai dengan standar {dialect}.
          - Jika pengguna tidak menentukan batas jumlah data, tambahkan klausa LIMIT dengan maksimum 5 baris. Jika pengguna meminta semua data secara eksplisit, jangan sertakan klausa LIMIT.
          - Gunakan penggabungan eksplisit (misalnya, \`INNER JOIN\`, \`LEFT JOIN\`, dll.) dan pastikan kondisinya benar.
          - Bungkus setiap nama kolom dengan tanda kutip balik (\`\`) untuk menandai bahwa itu adalah pengenal.
          - Tulis query dalam satu baris tanpa menggunakan karakter baris baru (\`\\n\`) atau penggabungan string (\`+\`).
          - Jika pertanyaan berkaitan dengan informasi pribadi pengguna, tambahkan kondisi filter berdasarkan id, role, atau m_sekolah_id.

        **Langkah 4: Verifikasi Ketepatan Query**
          - Periksa ulang bahwa query menggunakan tabel dan kolom yang benar sesuai dengan skema.
          - Pastikan semua kondisi JOIN didasarkan pada kunci asing dan bahwa hubungan antar tabel sudah benar.
          - Pastikan query menangani penyaringan berdasarkan peran (misalnya, memfilter berdasarkan kolom role untuk siswa, guru, admin) jika disebutkan.

        **Hindari Kesalahan Umum**
        **Hindari kesalahan umum dalam SQL, seperti**:
          - Menggunakan NOT IN dengan nilai NULL.
          - Penggunaan UNION yang salah, seharusnya menggunakan UNION ALL.
          - Ketidaksesuaian tipe data dalam klausa WHERE atau kondisi JOIN.
          - Jumlah argumen yang salah dalam fungsi SQL.
          - Penggunaan tanda kutip yang tidak benar pada pengenal.
          - Menggunakan BETWEEN untuk rentang eksklusif kecuali diminta secara eksplisit.
          - Gagal menangani nilai NULL dengan benar, terutama dalam JOIN atau klausa WHERE.
          - Jangan menggunakan anotasi Markdown (seperti sql).
          - Hanya kembalikan query SQL mentah.
          - Pastikan query secara sintaksis dan kontekstual benar.
          - Verifikasi penggabungan, filter, dan kondisi yang benar sesuai dengan skema database.

        **Catatan Umum**
          - Tambahkan logika untuk membaca data berdasarkan waktu tertentu. Gunakan:
          - **Hari ini:** Gunakan \`CURDATE()\`.
          - **Kemarin:** Gunakan \`DATE_SUB(CURDATE(), INTERVAL 1 DAY)\`.
          - **Besok:** Gunakan \`DATE_ADD(CURDATE(), INTERVAL 1 DAY)\`.
          - **Lusa:** Gunakan \`DATE_ADD(CURDATE(), INTERVAL 2 DAY)\`.
          - **Dua hari lalu:** Gunakan \`DATE_SUB(CURDATE(), INTERVAL 2 DAY)\`.
          - **Rentang waktu:** Gunakan format \`BETWEEN 'YYYY-MM-DD' AND 'YYYY-MM-DD'\`.
          - **Hari tertentu dalam minggu:** Gunakan \`DAYOFWEEK()\` atau \`WEEKDAY()\` untuk membandingkan hari tertentu.
          - Selalu pastikan query sesuai dengan struktur dan batasan tabel yang diberikan.
          - Untuk tabel \`m_user\`, kolom \`role\` membedakan antara siswa, guru, dan admin. Pastikan kolom ini digunakan dengan benar untuk memfilter data jika berlaku.
          - Semisal pengguna meminta data jadwal ujian yang memerlukan relasi dengan sekolah gunakan perintah JOIN seperti ini:  JOIN m_user ON m_user.id = m_jadwal_ujian.m_user_id JOIN m_sekolah ON m_sekolah.id = m_user.m_sekolah_id.
          - Semisal pengguna menanyakan data yang berkaitan dengan tahun akademik atau ta jangan sertakan kolom aktif pada table m_ta (ta yang digunakan saat ini) jika tidak dibahas.
          - Saat membuat query, periksa setiap tabel yang digunakan apakah memiliki kolom \`dihapus\`.
          - Jika sebuah tabel memiliki kolom \`dihapus\`, tambahkan kondisi \`AND <nama_tabel>.\`dihapus\` = 0\` di klausa WHERE untuk menyaring data yang tidak dihapus.
          - Jika sebuah tabel tidak memiliki kolom \`dihapus\`, kondisi tersebut tidak perlu ditambahkan.

        **Pemetaan Relasional**
          - Untuk setiap hubungan antar tabel, pahami kolom kunci asing mana yang harus digunakan untuk penggabungan.
          - Pastikan query hanya mencakup penggabungan yang diperlukan dan menghindari data yang redundan.

        Buat query berdasarkan input pengguna dan pastikan query sesuai dengan struktur database dan hubungan yang dijelaskan di atas. Periksa ulang query untuk ketepatan dan kebenaran logis sebelum menyelesaikannya. Setiap query yang dihasilkan harus mencakup klausa LIMIT dengan maksimal {top_k} atau 5 hasil, kecuali dinyatakan sebaliknya oleh pengguna:
          - Tambahkan klausa \`LIMIT\` dengan maksimal 5 baris jika pengguna tidak meminta semua data.
          - Jangan tambahkan klausa \`LIMIT\` jika pengguna secara eksplisit meminta semua data.

        Di bawah ini adalah sejumlah contoh pertanyaan dan kueri SQL terkaitnya.
      `,
      suffix: `
        Hanya keluarkan query SQL mentah sebagai output.
        User input: {input}
        SQL query:
      `,
      inputVariables: ["input", "top_k", "table_info", "dialect"],
    });

    await validation2.format({
      input: question,
      top_k: 5,
      table_info: relavantTables.names,
      dialect: "mysql",
    });

    // const validation = ChatPromptTemplate.fromMessages([
    //   ["system", validationPrompt],
    //   ["human", "{input}"]
    // ]);

    const queryChain = await createSqlQueryChain({
      llm,
      db: db2,
      prompt: validation2,
      dialect: "mysql",
    });

    const fullChain = RunnableSequence.from([
      // Langkah 1: Dapatkan nama tabel yang relevan
      RunnablePassthrough
        .assign({
          relevantTables: (i) => tableChain.invoke({ question: i.question }),
        })

        // Langkah 2: Generate Query
        .assign({
          query: (i) => {
            return queryChain.invoke({
              question: i.question,
              tableNamesToUse: i.relevantTables,
            })
          }
        }),

      // Langkah 3: Eksekusi untuk Query yang sudah dibuat lalu mendapatkan hasil Query nya
      RunnablePassthrough
        .assign({
          result: async (i) => {
            console.log("query yg di eksekusi:", i.query);
            console.log("hasil query yg di eksekusi:", await db.run(i.query));
            return await db.run(i.query)
          }
        }),

      // Langkah 4: Dapatkan jawaban dari pertanyaan sesuai format
      answerChain
    ]);

    try {
      const responseOpenAI = await fullChain.invoke({ question: question });
      return responseOpenAI;
    } catch (error) {
      console.error("Error in query response BE:", error);
      return {
        status: 'error',
        message: "Kesalahan dalam memproses permintaan SQL. Silakan coba lagi nanti.",
        error: error.message,
      };
    }
  }

  async openAIResponse({ auth, request, response }) {
    try {
      const { message, chatroom_id: chatroomId } = request.post();
      const user = await auth.getUser();
      trainClassifierFromJson(nlp);

      // const intent = await classifyIntent(message);
      const intent = classifier.classify(message);
      console.log(intent);

      const previousChatsData = await MMessage.query()
        .where("m_chatroom_id", chatroomId || null)
        .where("type_of_content", "text_question")
        .orderBy("created_at", "asc")
        .fetch();

      // Mengonversi hasil query menjadi array of objects dengan struktur yang diinginkan
      const previousChats = previousChatsData.toJSON().map(message => ({
        role: message.role,
        content: message.content
      }));

      let responseOpenAI;
      switch (intent) {
        case "text_question":
          responseOpenAI = await this.textQuestion(message, previousChats);
          break;
        case "image_request":
          responseOpenAI = await this.imageRequest(message);
          break;
        case "file_request":
          responseOpenAI = await this.fileRequest(message);
          break;
        case "sql_request":
          responseOpenAI = await this.sqlRequest(message, user);
          break;
        default:
          return response.status(500).json({
            status: 'error',
            message: 'Invalid Intent',
            // error: undefined,
          });
      }

      const messages = [
        { role: "user", content: message },
        { role: "assistant", content: responseOpenAI }
      ];

      // Ensure the message storing is awaited properly
      const storeResult = await this.storeMessage(messages, chatroomId, user.id, intent);
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
        // error: undefined,
      });
    }
  }

  async invalidIntent({ request, response }) {
    try {
      const { content, intent } = request.post();
      saveNewIntent(content, intent);
      // await trainIntentClassifier(nlp);
      trainClassifierFromJson(nlp);
      return response.ok({
        status: 'success',
        message: 'Intent saved successfully'
      })
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: 'Failed to store intent',
        error: error.message
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

module.exports = ChatbotMistralAIController

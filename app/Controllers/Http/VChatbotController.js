'use strict'

// Import Chatbot2Controller
const Chatbot2Controller = use("App/Controllers/Http/VChatbot2Controller");

const MChatroom = use("App/Models/MChatroom");
const MMessage = use("App/Models/MMessage");
const Env = use("Env");

const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: Env.OPENAI_API_KEY });

const fs = require('fs');
const natural = require('natural');
const PDFDocument = require('pdfkit');
const classifier = new natural.BayesClassifier();

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
  async isDatabaseQuery(question) {
    const chatbot2 = new Chatbot2Controller();
    const isDbQuery = await chatbot2.isDatabaseQuery(question);
    console.log(`[isDatabaseQuery1] Pertanyaan: "${question}", Terkait Database: ${isDbQuery}`);
    return isDbQuery;
  }
  

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

      console.log(`[openAIResponse] User ID: ${userId}, Chatroom ID: ${chatroomId}, Pertanyaan: "${userMessage}"`);

      const isDatabaseRelated = await this.isDatabaseQuery(userMessage);

      if (isDatabaseRelated) {
        console.log(`[openAIResponse] Pertanyaan diarahkan ke Chatbot2Controller untuk pembacaan database.`);
        const chatbot2 = new Chatbot2Controller();
        return await chatbot2.langchain({ question: userMessage, response });
        
      }
      
      console.log(`[openAIResponse] Pertanyaan dianggap sebagai pertanyaan umum.`);
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

      console.log(`[openAIResponse] Menyimpan pesan ke database.`);
      const storeResult = await this.storeMessage(messages, chatroomId, userId, intent);
      if (storeResult.status === "error") {
        return response.status(500).json({
          status: storeResult.status,
          message: storeResult.message,
          error: storeResult.error,
        });
      }

      console.log(`[openAIResponse] Respon berhasil diproses.`);
      return response.json({
        status: storeResult.status,
        message: storeResult.message,
        intent: intent,
        chatroomId: storeResult.chatroomId,
        data: storeResult.data
      });

    } catch (error) {
      console.error(`[openAIResponse] Error Umum: ${error.message}`);
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
        model: "gpt-4o",
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
}

module.exports = ChatbotController

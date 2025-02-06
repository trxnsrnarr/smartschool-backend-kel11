'use strict'

const MChatroom = use("App/Models/MChatroom");
const MMessage = use("App/Models/MMessage");
const Env = use("Env");
const { ChatOllama, OllamaEmbeddings } = require('@langchain/ollama');
const { MemoryVectorStore } = require('langchain/vectorstores/memory');
// const { Redis } = require('ioredis');
// const redis = new Redis(Env.get('REDIS_URL'));

const fs = require('fs');
const PDFDocument = require('pdfkit');
const { z } = require("zod");
const { DataSource } = require("typeorm");
const { SqlDatabase } = require("langchain/sql_db");
const { PromptTemplate, ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { RunnablePassthrough, RunnableSequence } = require("@langchain/core/runnables");
const { createSqlQueryChain } = require("langchain/chains/sql_db");

// Initialize Ollama
const llm = new ChatOllama({
  baseUrl: "http://143.198.118.227:11434",
  model: "deepseek-r1:1.5b",
  temperature: 0,
});

class Chatbot2Controller {
  async storeMessage(messages, chatroomId = null, userId = null, intent = "text_question") {
    try {
      if (!chatroomId) {
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

  async getChatHistory(chatroomId) {
    try {
      const previousChatsData = await MMessage.query()
        .where("m_chatroom_id", chatroomId || null)
        .where("type_of_content", "text_question")
        .orderBy("created_at", "asc")
        .fetch();

      // Mengonversi hasil query menjadi array of objects dengan struktur yang diinginkan
      const previousChats = previousChatsData.toJSON()
        .filter(message => message.content)
        .map(({ role, content }) => [
          role === "user" ? "human" : role === "assistant" ? "assistant" : "system",
          content
        ]);

      return previousChats;
    } catch (error) {
      return {
        status: 'error',
        message: error.message
      };
    }
  }

  async openAIResponse({ auth, request, response  }) {
    try {
      const user = await auth.getUser();
      const userId = user.id;
      const { message, chatroom_id: chatroomId } = request.post();
      console.log(chatroomId);
      const previousChats = await this.getChatHistory(chatroomId);

      const chain = RunnableSequence.from([
        ChatPromptTemplate.fromMessages([
          ...previousChats,
          ["system", "Anda adalah asisten AI yang membantu pengguna."],
          ["human", `{input}`]
        ]),
        llm,
        new StringOutputParser()
      ]);

      const result = await chain.invoke({
        input: message
      });
      console.log(result);

      const messages = [
        { role: "user", content: message },
        { role: "assistant", content: result }
      ];

      // Ensure the message storing is awaited properly
      await this.storeMessage(messages, chatroomId, userId);

      return response.json({
        status: 'success',
        data: result
      });

    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }
}

module.exports = Chatbot2Controller

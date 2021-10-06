const { default: axios } = require("axios");

class WhatsAppService {
  static async sendMessage(number, message) {
    try {
      await axios.post(`https://whatsapp.smarteschool.net/send-message`, {
        number: `${number}@c.us`,
        message: message,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = WhatsAppService;

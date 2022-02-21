const { default: axios } = require("axios");
const User = use("App/Models/User");

class WhatsAppService {
  static async kirimNotifWa(user_id, waktu, id, pesan) {
    const check = await User.query().where({ id: user_id }).first();

    if (!check.wa_real) {
      return "whatsapp belum terverifikasi";
    }

    const data = await this.sendMessage(check.wa_real, pesan, 1);
    return data;
  }

  static async ubahNotifWa(user_id, waktu, id, pesan) {
    const check = await User.query().where({ id: user_id }).first();

    if (!check.wa_real) {
      return "whatsapp belum terverifikasi";
    }

    const data = await this.sendMessage(check.wa_real, pesan, 1);
    return data;
  }

  static async hapusNotifWa(id) {
    // const check = await User.query().where({ id: user_id }).first();

    // if (!check.wa_real) {
    //   return "whatsapp belum terverifikasi";
    // }

    const data = await this.sendMessage(check.wa_real, pesan, 1);
    return data;
  }

  static async sendMessage(number, message, format) {
    try {
      const { data } = await axios.post(
        `https://whatsapp.smarteschool.net/send-message`,
        {
          number: format ? `${number}` : `${number}@c.us`,
          message: message,
        }
      );
      return data;
    } catch (err) {
      // console.log(err.response.data);
      return err;
    }
  }
}

module.exports = WhatsAppService;

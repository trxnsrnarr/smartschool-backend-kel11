"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

const htmlEscaper = require("html-escaper");

class TkMateriKesimpulan extends Model {
  static get table() {
    return "tk_materi_kesimpulan";
  }

  static get computed() {
    return ["durasi"];
  }

  topik() {
    return this.belongsTo("App/Models/MTopik");
  }

  getWaktuMulai(waktu_mulai) {
    return moment(waktu_mulai).format("DD MMM YYYY HH:mm");
  }

  getWaktuSelesai(waktu_selesai) {
    return waktu_selesai
      ? moment(waktu_selesai).format("DD MMM YYYY HH:mm")
      : null;
  }

  getDurasi({ waktu_mulai, waktu_selesai }) {
    return waktu_selesai
      ? `${moment(waktu_selesai).diff(waktu_mulai, "minutes")} menit`
      : null;
  }
  getKesimpulan(kesimpulan) {
    return kesimpulan ? htmlEscaper.unescape(kesimpulan) : "";
  }
}

module.exports = TkMateriKesimpulan;

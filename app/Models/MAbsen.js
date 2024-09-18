"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");

class MAbsen extends Model {
  static get table() {
    return "m_absen";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  static get computed() {
    return ["waktuMasukText", "waktuPulangText"];
  }

  getWaktuMasukText({ waktu_masuk }) {
    return waktu_masuk ? moment(waktu_masuk).format("LT") : null;
  }

  getWaktuPulangText({ waktu_pulang }) {
    return waktu_pulang ? moment(waktu_pulang).format("LT") : null;
  }

  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }

  getWaktuMasuk(waktu_masuk) {
    return waktu_masuk
      ? moment(waktu_masuk).format("YYYY-MM-DD HH:mm:ss")
      : null;
  }

  getWaktuPulang(waktu_pulang) {
    return waktu_pulang
      ? moment(waktu_pulang).format("YYYY-MM-DD HH:mm:ss")
      : null;
  }
}

module.exports = MAbsen;

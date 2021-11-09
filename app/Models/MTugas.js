"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const htmlEscaper = require("html-escaper");


class MTugas extends Model {
  static get table() {
    return "m_tugas";
  }

  timeline() {
    return this.hasMany("App/Models/MTimeline");
  }

  getLampiran(lampiran) {
    return lampiran ? lampiran.split(",") : [];
  }

  getLink(link) {
    return link ? link.split(",") : [];
  }

  static get computed() {
    return ["tanggalPengumpulanFormat"];
  }

  getCreatedAt(created_at) {
    return moment(created_at).format("DD MMMM YYYY");
  }

  getInstruksi(instruksi) {
    return instruksi ? htmlEscaper.unescape(instruksi) : "";
  }

  soal(){
    return this.hasMany("App/Models/TkSoalTugas");
  }
}

module.exports = MTugas;

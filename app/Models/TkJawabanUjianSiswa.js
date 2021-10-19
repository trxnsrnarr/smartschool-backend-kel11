"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const htmlEscaper = require("html-escaper");

class TkJawabanUjianSiswa extends Model {
  static get table() {
    return "tk_jawaban_ujian_siswa";
  }

  soal() {
    return this.belongsTo("App/Models/MSoalUjian");
  }

  getJawabanEsai(jawaban_esai) {
    return jawaban_esai ? htmlEscaper.unescape(jawaban_esai) : "";
  }

  pesertaUjian() {
    return this.belongsTo("App/Models/TkPesertaUjian", "tk_peserta_ujian_id");
  }

  getDurasi(durasi) {
    return durasi ? `${durasi / 1000} detik` : `0 detik`;
  }

  getJawabanPgKompleks(jawaban_pg_kompleks) {
    return jawaban_pg_kompleks ? jawaban_pg_kompleks.split(",") : [];
  }
  getJawabanMenjodohkan(jawaban_menjodohkan) {
    return jawaban_menjodohkan ? JSON.parse(jawaban_menjodohkan) : "";
  }

  getJawabanFoto(jawaban_foto) {
    return jawaban_foto ? jawaban_foto.split(",") : [];
  }
}

module.exports = TkJawabanUjianSiswa;

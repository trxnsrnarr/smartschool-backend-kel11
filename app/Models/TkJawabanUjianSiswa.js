"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkJawabanUjianSiswa extends Model {
  static get table() {
    return "tk_jawaban_ujian_siswa";
  }

  soal() {
    return this.belongsTo("App/Models/MSoalUjian");
  }

  pesertaUjian() {
    return this.belongsTo("App/Models/TkPesertaUjian", "tk_peserta_ujian_id");
  }
}

module.exports = TkJawabanUjianSiswa;

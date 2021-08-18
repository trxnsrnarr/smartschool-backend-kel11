"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MUjianSiswa extends Model {
  static get table() {
    return "m_ujian_siswa";
  }
  nilaiUAS() {
    return this.belongsTo("App/Models/TkPesertaUjian", "uas_id", "id");
  }
  nilaiUTS() {
    return this.belongsTo("App/Models/TkPesertaUjian", "uts_id", "id");
  }
}

module.exports = MUjianSiswa;

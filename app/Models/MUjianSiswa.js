"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MUjianSiswa extends Model {
  static get table() {
    return "m_ujian_siswa";
  }
  nilaiUAS() {
    return this.belongsTo("App/Models/TkRekapNilai", "uas_id", "id");
  }
  nilaiUTS() {
    return this.belongsTo("App/Models/TkRekapNilai", "uts_id", "id");
  }

  nilaiUS() {
    return this.belongsTo("App/Models/TkRekapNilai", "us_id", "id");
  }

  mapel(){
    return this.belongsTo("App/Models/MMataPelajaran");
  }
}

module.exports = MUjianSiswa;

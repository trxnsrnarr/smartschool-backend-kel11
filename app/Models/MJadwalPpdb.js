"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MJadwalPpdb extends Model {
  static get table() {
    return "m_jadwal_ppdb";
  }

  soal() {
    return this.belongsTo("App/Models/MUjian");
  }

  ujian() {
    return this.belongsTo("App/Models/MUjian");
  }

  info() {
    return this.belongsTo("App/Models/MInformasiGelombang");
  }

  peserta() {
    return this.hasMany("App/Models/TkPesertaUjianPpdb");
  }
}

module.exports = MJadwalPpdb;

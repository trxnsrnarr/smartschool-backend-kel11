"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkJadwalUjian extends Model {
  static get table() {
    return "tk_jadwal_ujian";
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }

  jadwalUjian() {
    return this.belongsTo("App/Models/MJadwalUjian");
  }

  peserta() {
    return this.hasMany("App/Models/TkPesertaUjian");
  }
}

module.exports = TkJadwalUjian;

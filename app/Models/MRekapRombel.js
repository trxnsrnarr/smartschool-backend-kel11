"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRekapRombel extends Model {
  static get table() {
    return "m_rekap_rombel";
  }

  rekapnilai() {
    return this.hasMany("App/Models/TkRekapNilai");
  }

  tugas() {
    return this.belongsTo("App/Models/MTugas");
  }

  rekap() {
    return this.belongsTo("App/Models/MRekap");
  }
}

module.exports = MRekapRombel;

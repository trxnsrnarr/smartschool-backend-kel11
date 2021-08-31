"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRekapRombel extends Model {
  static get table() {
    return "m_rekap_rombel";
  }

  rekapnilai() {
    return this.hasMany("App/Models/TkRekapNilai", "id", "m_rekap_rombel_id");
  }

  rekapNilaiSendiri() {
    return this.belongsTo("App/Models/TkRekapNilai", "id", "m_rekap_rombel_id");
  }

  tugas() {
    return this.belongsTo("App/Models/MTugas");
  }

  rekap() {
    return this.belongsTo("App/Models/MRekap");
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }
}

module.exports = MRekapRombel;

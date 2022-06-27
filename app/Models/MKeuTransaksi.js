"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuTransaksi extends Model {
  static get table() {
    return "m_keu_transaksi";
  }

  jurnal() {
    return this.hasMany("App/Models/MKeuJurnal");
  }

  jurnalDebet() {
    return this.belongsTo("App/Models/MKeuJurnal","id", "m_keu_transaksi_id");
  }

  rencana() {
    return this.belongsTo("App/Models/MRencanaTransaksi")
  }
}

module.exports = MKeuTransaksi;

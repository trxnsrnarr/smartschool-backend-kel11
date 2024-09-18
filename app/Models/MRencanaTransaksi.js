"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaTransaksi extends Model {
  static get table() {
    return "m_rencana_transaksi";
  }

  jurnal() {
    return this.hasMany("App/Models/MKeuRencanaJurnal");
  }
}

module.exports = MRencanaTransaksi;

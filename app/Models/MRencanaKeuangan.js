"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const moment = require("moment");

class MRencanaKeuangan extends Model {
  static get table() {
    return "m_rencana_keuangan";
  }
  static get computed() {
    return ["aktif"];
  }

  getAktif({ tanggal_akhir, tanggal_awal }) {
    return tanggal_akhir >= moment() && tanggal_awal <= moment();
  }

  transaksi() {
    return this.hasMany("App/Models/MRencanaTransaksi");
  }
}

module.exports = MRencanaKeuangan;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaKeuangan extends Model {
  static get table() {
    return "m_rencana_keuangan";
  }

  setAktif({ tanggal_akhir, tanggal_awal }) {
    return (
      tanggal_akhir >= moment().format("YYYY-MM-DD") &&
      tanggal_awal <= moment().format("YYYY-MM-DD")
    );
  }
}

module.exports = MRencanaKeuangan;

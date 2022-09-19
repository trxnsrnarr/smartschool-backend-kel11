"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuAktivitasTransaksi extends Model {
  static get table() {
    return "m_keu_aktivitas_transaksi";
  }

  akunArusKas() {
    return this.belongsTo("App/Models/MKeuKategoriTipeAkun");
  }
}

module.exports = MKeuAktivitasTransaksi;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuKategoriArusKas extends Model {
  static get table() {
    return "m_keu_kategori_arus_kas";
  }

  tipeAkun() {
    return this.hasMany("App/Models/MKeuAktivitasTransaksi", "id", "m_keu_kategori_arus_kas_id");
  }
}

module.exports = MKeuKategoriArusKas;

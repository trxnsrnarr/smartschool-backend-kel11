"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuKategoriTipeAkun extends Model {
  static get table() {
    return "m_keu_kategori_tipe_akun";
  }

  akunArus() {
    return this.belongsTo("App/Models/MKeuAkun");
  }

  akun() {
    return this.hasMany("App/Models/TkKategoriTipeAkun");
  }
}

module.exports = MKeuKategoriTipeAkun;

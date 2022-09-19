"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkKategoriTipeAkun extends Model {
  static get table() {
    return "tk_kategori_tipe_akun";
  }

  akun() {
    return this.belongsTo("App/Models/MKeuAkun");
  }
}

module.exports = TkKategoriTipeAkun;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkKategoriAkunLabaRugi extends Model {
  static get table() {
    return "tk_kategori_akun_laba_rugi";
  }

  akun() {
    return this.belongsTo("App/Models/MKeuAkun");
  }
}

module.exports = TkKategoriAkunLabaRugi;

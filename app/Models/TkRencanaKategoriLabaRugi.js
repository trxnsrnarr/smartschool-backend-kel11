"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkRencanaKategoriLabaRugi extends Model {
  static get table() {
    return "tk_rencana_kategori_laba";
  }

  akun() {
    return this.belongsTo("App/Models/MKeuAkun");
  }
}

module.exports = TkRencanaKategoriLabaRugi;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkRencanaKategoriNeraca extends Model {
  static get table() {
    return "tk_rencana_kategori_neraca";
  }

  akun() {
    return this.belongsTo("App/Models/MKeuAkun");
  }
}

module.exports = TkRencanaKategoriNeraca;

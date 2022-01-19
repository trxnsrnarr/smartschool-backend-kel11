"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaKategoriNeraca extends Model {
  static get table() {
    return "m_rencana_kategori_neraca";
  }

  akunNeraca() {
    return this.hasMany("App/Models/TkRencanaKategoriNeraca");
  }
}

module.exports = MRencanaKategoriNeraca;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuKategoriNeraca extends Model {
  static get table() {
    return "m_keu_kategori_neraca";
  }

  akunNeraca() {
    return this.hasMany("App/Models/TkKategoriAkunNeraca");
  }
}

module.exports = MKeuKategoriNeraca;

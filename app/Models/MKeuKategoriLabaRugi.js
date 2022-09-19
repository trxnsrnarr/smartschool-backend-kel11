"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuKategoriLabaRugi extends Model {
  static get table() {
    return "m_keu_kategori_laba_rugi";
  }

  akunLabaRugi() {
    return this.hasMany("App/Models/TkKategoriAkunLabaRugi");
  }
}

module.exports = MKeuKategoriLabaRugi;

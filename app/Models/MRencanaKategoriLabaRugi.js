"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaKategoriLabaRugi extends Model {
  static get table() {
    return "m_rencana_kategori_laba_rugi";
  }

  akunLabaRugi() {
    return this.hasMany("App/Models/TkRencanaKategoriLabaRugi");
  }
}

module.exports = MRencanaKategoriLabaRugi;

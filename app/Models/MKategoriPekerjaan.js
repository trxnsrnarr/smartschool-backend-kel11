"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKategoriPekerjaan extends Model {
  static get table() {
    return "m_kategori_pekerjaan";
  }

  pekerjaan() {
    return this.hasMany("App/Models/MPekerjaanProyek");
  }
}

module.exports = MKategoriPekerjaan;

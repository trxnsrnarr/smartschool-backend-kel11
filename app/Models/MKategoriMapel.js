"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKategoriMapel extends Model {
  static get table() {
    return "m_kategori_mapel";
  }
  mapelRapor() {
    return this.hasMany("App/Models/TkMapelRapor");
  }
}

module.exports = MKategoriMapel;

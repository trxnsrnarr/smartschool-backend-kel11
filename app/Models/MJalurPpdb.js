"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MJalurPpdb extends Model {
  static get table() {
    return "m_jalur_ppdb";
  }

  gelombang() {
    return this.hasMany("App/Models/MGelombangPpdb");
  }
  informasi() {
    return this.hasMany("App/Models/MInformasiJalurPpdb");
  }
}

module.exports = MJalurPpdb;

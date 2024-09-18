"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiJalurPpdb extends Model {
  static get table() {
    return "m_informasi_jalur_ppdb";
  }

  jalur() {
    this.belongsTo("App/Models/MJalurPpdb");
  }
}

module.exports = MInformasiJalurPpdb;

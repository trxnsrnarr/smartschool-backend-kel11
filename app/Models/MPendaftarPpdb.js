"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPendaftarPpdb extends Model {
  static get table() {
    return "m_pendaftar_ppdb";
  }

  gelombang() {
    return this.belongsTo("App/Models/MGelombangPpdb");
  }
}

module.exports = MPendaftarPpdb;

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

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MPendaftarPpdb;

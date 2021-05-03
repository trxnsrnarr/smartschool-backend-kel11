"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPendaftarPpdb extends Model {
  static get table() {
    return "m_pendaftar_ppdb";
  }

  static get computed() {
    return ["dataJurusan", "bayarPendaftar"];
  }

  getDataJurusan({ m_jurusan_1_id }) {
    return m_jurusan_1_id ? true : false;
  }

  getBayarPendaftar({ diverifikasi }) {
    return diverifikasi ? true : false;
  }

  gelombang() {
    return this.belongsTo("App/Models/MGelombangPpdb");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
}

module.exports = MPendaftarPpdb;

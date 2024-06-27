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

  jurusan1() {
    return this.belongsTo("App/Models/MJurusan", "m_jurusan_1_id");
  }
  jurusan2() {
    return this.belongsTo("App/Models/MJurusan", "m_jurusan_2_id");
  }
  jurusan3() {
    return this.belongsTo("App/Models/MJurusan", "m_jurusan_3_id");
  }
  jurusan4() {
    return this.belongsTo("App/Models/MJurusan", "m_jurusan_4_id");
  }
  jurusan5() {
    return this.belongsTo("App/Models/MJurusan", "m_jurusan_5_id");
  }

  gelombang() {
    return this.belongsTo("App/Models/MGelombangPpdb");
  }

  diskon() {
    return this.belongsTo("App/Models/MDiskonPendaftar","id","m_pendaftar_ppdb_id");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  userKonfirmasi() {
    return this.belongsTo("App/Models/User", "konfirmasi_id");
  }
}

module.exports = MPendaftarPpdb;

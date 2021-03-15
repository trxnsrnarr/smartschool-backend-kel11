"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPembayaranSiswa extends Model {
  static get table() {
    return "m_pembayaran_siswa";
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  rombelPembayaran() {
    return this.belongsTo("App/Models/TkPembayaranRombel");
  }
}

module.exports = MPembayaranSiswa;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPembayaranSiswa extends Model {
  static get table() {
    return "m_pembayaran_siswa";
  }

  riwayat() {
    return this.hasMany("App/Models/MRiwayatPembayaranSiswa");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }

  rombelPembayaran() {
    return this.belongsTo("App/Models/TkPembayaranRombel");
  }

  getRiwayat(riwayat) {
    return riwayat ? JSON.parse(riwayat) : null;
  }
}

module.exports = MPembayaranSiswa;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRiwayatPembayaranSiswa extends Model {
  static get table() {
    return "m_riwayat_pembayaran_siswa";
  }
}

module.exports = MRiwayatPembayaranSiswa;

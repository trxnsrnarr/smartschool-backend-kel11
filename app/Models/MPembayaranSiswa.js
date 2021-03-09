"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPembayaranSiswa extends Model {
  static get table() {
    return "m_pembayaran_siswa";
  }
}

module.exports = MPembayaranSiswa;

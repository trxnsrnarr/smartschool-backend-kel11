"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPeringatanUjianSiswa extends Model {
  static get table() {
    return "m_peringatan_ujian_siswa";
  }
}

module.exports = MPeringatanUjianSiswa;

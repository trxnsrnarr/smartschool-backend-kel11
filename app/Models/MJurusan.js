"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MJurusan extends Model {
  static get table() {
    return "m_jurusan";
  }

  informasi() {
    return this.hasOne("App/Models/MInformasiJurusan");
  }

  rombel() {
    return this.hasMany("App/Models/MRombel");
  }

  penerimaanSiswa() {
    return this.hasMany("App/Models/MPenerimaanSiswa");
  }
}

module.exports = MJurusan;

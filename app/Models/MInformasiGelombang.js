"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MInformasiGelombang extends Model {
  static get table() {
    return "m_informasi_gelombang";
  }

  ujian() {
    return this.hasOne("App/Models/MJadwalPpdb");
  }

  gelombang() {
    return this.belongsTo("App/Models/MGelombangPpdb");
  }
}

module.exports = MInformasiGelombang;

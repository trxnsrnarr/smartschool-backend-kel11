"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MAbsenBelumTerdaftar extends Model {
  static get table() {
    return "m_absen_belum_terdaftar";
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
}

module.exports = MAbsenBelumTerdaftar;

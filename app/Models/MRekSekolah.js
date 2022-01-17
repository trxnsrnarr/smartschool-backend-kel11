"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRekSekolah extends Model {
  static get table() {
    return "m_rek_sekolah";
  }
  
  akun() {
    return this.belongsTo("App/Models/MKeuAkun", "id", "m_rek_sekolah_id");
  }
}

module.exports = MRekSekolah;

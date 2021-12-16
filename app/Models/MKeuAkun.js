"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuAkun extends Model {
  static get table() {
    return "m_keu_akun";
  }

  rek() {
    return this.hasOne("App/Models/MRekSekolah");
  }
}

module.exports = MKeuAkun;

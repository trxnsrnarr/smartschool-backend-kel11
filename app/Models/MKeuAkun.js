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

  jurnal() {
    return this.hasMany("App/Models/MKeuJurnal");
  }
}

module.exports = MKeuAkun;

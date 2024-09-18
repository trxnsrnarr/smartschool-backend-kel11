"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Sekolah extends Model {
  static get table() {
    return "sekolah";
  }

  sekolahSS() {
    return this.belongsTo('App/Models/MSekolah')
  }
  registrasi() {
    return this.hasOne("App/Models/MRegistrasiAkun")
  }
}

module.exports = Sekolah;

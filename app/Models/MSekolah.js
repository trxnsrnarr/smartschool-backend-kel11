"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSekolah extends Model {
  static get table() {
    return "m_sekolah";
  }

  informasi() {
    return this.hasOne("App/Models/MInformasiSekolah");
  }
}

module.exports = MSekolah;

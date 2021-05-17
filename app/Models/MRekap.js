"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRekap extends Model {
  static get table() {
    return "m_rekap";
  }

  rekapnilai() {
    return this.hasMany("App/Models/TkRekapNilai");
  }

  tugas() {
    return this.belongsTo("App/Model/MTugas");
  }
}

module.exports = MRekap;

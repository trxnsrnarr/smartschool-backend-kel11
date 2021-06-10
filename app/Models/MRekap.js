"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRekap extends Model {
  static get table() {
    return "m_rekap";
  }

  materi() {
    return this.belongsTo("App/Models/MMateri");
  }

  rekaprombel() {
    return this.hasMany("App/Models/MRekapRombel");
  }
}

module.exports = MRekap;

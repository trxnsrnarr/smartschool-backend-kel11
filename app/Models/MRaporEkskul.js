"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRaporEkskul extends Model {
  static get table() {
    return "m_rapor_ekskul";
  }
  ekskul() {
    return this.belongsTo("App/Models/MEkstrakurikuler");
  }
  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }
}

module.exports = MRaporEkskul;

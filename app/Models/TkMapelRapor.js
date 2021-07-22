"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkMapelRapor extends Model {
  static get table() {
    return "tk_mapel_rapor";
  }
  mataPelajaran() {
    return this.belongsTo("App/Models/MMataPelajaran");
  }
}

module.exports = TkMapelRapor;

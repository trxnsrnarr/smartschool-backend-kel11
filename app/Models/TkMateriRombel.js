"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkMateriRombel extends Model {
  static get table() {
    return "tk_materi_rombel";
  }

  rombel() {
    return this.belongsTo("App/Models/MRombel");
  }

  materi() {
    return this.belongsTo("App/Models/MMateri");
  }
}

module.exports = TkMateriRombel;

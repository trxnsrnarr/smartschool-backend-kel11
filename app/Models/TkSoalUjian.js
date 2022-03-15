"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkSoalUjian extends Model {
  static get table() {
    return "tk_soal_ujian";
  }

  soal() {
    return this.belongsTo("App/Models/MSoalUjian");
  }

  ujian() {
    return this.belongsTo("App/Models/MUjian");
  }
}

module.exports = TkSoalUjian;

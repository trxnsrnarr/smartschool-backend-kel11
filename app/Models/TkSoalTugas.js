"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TkSoalTugas extends Model {
  static get table() {
    return "tk_soal_tugas";
  }

  soal() {
    return this.belongsTo("App/Models/MSoalUjian");
  }
}

module.exports = TkSoalTugas;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MSoalKuis extends Model {
  static get table() {
    return "m_soal_kuis";
  }

  static get computed() {
    return ["bentuk"];
  }

  getBentuk({ esai }) {
    if (esai == 0) {
      return "pg";
    }

    return "esai";
  }
}

module.exports = MSoalKuis;

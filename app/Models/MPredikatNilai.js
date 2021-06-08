"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MPredikatNilai extends Model {
  static get table() {
    return "m_predikat_nilai";
  }
}

module.exports = MPredikatNilai;

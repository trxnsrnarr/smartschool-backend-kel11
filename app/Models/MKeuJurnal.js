"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MKeuJurnal extends Model {
  static get table() {
    return "m_keu_jurnal";
  }
}

module.exports = MKeuJurnal;

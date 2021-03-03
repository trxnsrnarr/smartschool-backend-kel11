"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRekSekolah extends Model {
  static get table() {
    return "m_rek_sekolah";
  }
}

module.exports = MRekSekolah;

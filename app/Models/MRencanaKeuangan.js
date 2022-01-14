"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaKeuangan extends Model {
  static get table() {
    return "m_rencana_keuangan";
  }
}

module.exports = MRencanaKeuangan;

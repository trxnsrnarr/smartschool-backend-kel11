"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaRumusSaldoKasAwal extends Model {
  static get table() {
    return "m_rencana_rumus_saldo_kas_awal";
  }
}

module.exports = MRencanaRumusSaldoKasAwal;

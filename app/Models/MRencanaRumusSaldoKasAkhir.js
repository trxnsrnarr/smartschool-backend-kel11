"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MRencanaRumusSaldoKasAkhir extends Model {
  static get table() {
    return "m_rencana_rumus_saldo_kas_akhir";
  }
}

module.exports = MRencanaRumusSaldoKasAkhir;

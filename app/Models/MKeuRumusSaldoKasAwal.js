'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuRumusSaldoKasAwal extends Model {
    static get table() {
        return "m_keu_rumus_saldo_kas_awal";
      }
}

module.exports = MKeuRumusSaldoKasAwal

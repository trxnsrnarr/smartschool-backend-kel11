'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuRumusSaldoKasAkhir extends Model {
    static get table() {
        return "m_keu_rumus_saldo_kas_akhir";
      }
}

module.exports = MKeuRumusSaldoKasAkhir

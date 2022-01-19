'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MRencanaRumusLabaRugi extends Model {
    static get table() {
      return "m_rencana_rumus_laba_rugi";
    }
}

module.exports = MRencanaRumusLabaRugi

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MRencanaRumusArusKas extends Model {
    static get table() {
        return "m_rencana_rumus_arus_kas";
      }
}

module.exports = MRencanaRumusArusKas

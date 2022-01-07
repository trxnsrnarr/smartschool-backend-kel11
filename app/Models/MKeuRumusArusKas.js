'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuRumusArusKas extends Model {
    static get table() {
        return "m_keu_rumus_arus_kas";
      }
}

module.exports = MKeuRumusArusKas

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuRumusPenyusutan extends Model {
    static get table() {
        return "m_keu_rumus_penyusutan";
      }
}

module.exports = MKeuRumusPenyusutan

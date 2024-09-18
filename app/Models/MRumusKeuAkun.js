'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MRumusKeuAkun extends Model {
    static get table() {
        return "m_rumus_keu_akun";
      }
}

module.exports = MRumusKeuAkun

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MDiskonPendaftar extends Model {
    static get table() {
        return "m_diskon_pendaftar";
      }
}

module.exports = MDiskonPendaftar

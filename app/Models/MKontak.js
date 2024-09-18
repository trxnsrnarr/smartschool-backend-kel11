'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKontak extends Model {
    static get table() {
        return "m_kontak";
      }
}

module.exports = MKontak


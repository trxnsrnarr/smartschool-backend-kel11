'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MLabelKalender extends Model {
    static get table() {
        return "m_kegiatan_kalender";
      }
}

module.exports = MLabelKalender

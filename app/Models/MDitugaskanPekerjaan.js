'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MDitugaskanPekerjaan extends Model {
    static get table() {
        return "m_ditugaskan_pekerjaan"
    }
}

module.exports = MDitugaskanPekerjaan

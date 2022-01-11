'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MFiturSekolah extends Model {
    static get table() {
        return "m_fitur_sekolah";
      }
}

module.exports = MFiturSekolah

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MSuratPerusahaan extends Model {
    static get table() {
        return "m_surat_perusahaan";
      }
}

module.exports = MSuratPerusahaan

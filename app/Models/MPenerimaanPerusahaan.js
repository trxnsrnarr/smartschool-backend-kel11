'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPenerimaanPerusahaan extends Model {
    static get table() {
        return "m_penerimaan_perusahaan";
      }
}

module.exports = MPenerimaanPerusahaan

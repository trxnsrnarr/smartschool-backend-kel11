'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MMouPerusahaan extends Model {
    static get table() {
        return "m_mou_perusahaan";
      }
}

module.exports = MMouPerusahaan

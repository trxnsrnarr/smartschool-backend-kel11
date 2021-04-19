'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKategoriPekerjaan extends Model {
    static get table() {
        return "m_kategori_pekerjaan";
      }
}

module.exports = MKategoriPekerjaan

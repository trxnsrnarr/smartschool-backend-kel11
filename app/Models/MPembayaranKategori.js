'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPembayaranKategori extends Model {
    static get table() {
        return "m_pembayaran_kategori";
      }
}

module.exports = MPembayaranKategori

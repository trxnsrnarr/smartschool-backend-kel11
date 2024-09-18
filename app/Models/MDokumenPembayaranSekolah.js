'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MDokumenPembayaranSekolah extends Model { 
    static get table() {
    return "m_dokumen_pembayaran_sekolah";
  }
}

module.exports = MDokumenPembayaranSekolah

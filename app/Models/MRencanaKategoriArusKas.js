'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MRencanaKategoriArusKa extends Model {
    static get table() {
        return "m_rencana_kategori_arus_kas";
      }
    
      tipeAkun() {
        return this.hasMany("App/Models/MRencanaAktivitasTransaksi", "id", "m_rencana_kategori_arus_kas_id");
      }
}

module.exports = MRencanaKategoriArusKa

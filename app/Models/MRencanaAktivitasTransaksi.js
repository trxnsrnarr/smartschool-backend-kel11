'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MRencanaAktivitasTransaksi extends Model {
    static get table() {
        return "m_rencana_aktivitas_trx";
      }
    
      akunArusKas() {
        return this.belongsTo("App/Models/MRencanaKategoriTipeAkun");
      }
}

module.exports = MRencanaAktivitasTransaksi

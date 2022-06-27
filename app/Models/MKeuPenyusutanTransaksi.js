'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuPenyusutanTransaksi extends Model {
    static get table() {
        return "m_keu_penyusutan_transaksi";
      }
    
}

module.exports = MKeuPenyusutanTransaksi

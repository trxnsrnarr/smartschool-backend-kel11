'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKeuRencanaJurnal extends Model {
    static get table() {
        return "m_rencana_jurnal";
      }
    
      akun() {
        return this.belongsTo("App/Models/MKeuAkun");
      }
    
      transaksi() {
        return this.belongsTo("App/Models/MRencanaTransaksi");
      }
}

module.exports = MKeuRencanaJurnal

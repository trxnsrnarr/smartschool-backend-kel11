'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPenerimaanPerusahaan extends Model {
    static get table() {
        return "m_penerimaan_perusahaan";
      }
      
    siswa() {
      return this.hasMany("App/Models/MPenerimaanSiswa");
    }
    
    perusahaanSekolah() {
      return this.belongsTo("App/Models/TkPerusahaanSekolah");
    }
}

module.exports = MPenerimaanPerusahaan

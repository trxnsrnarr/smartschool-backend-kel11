'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MKategoriPelanggaran extends Model {
    static get table() {
        return "m_kategori_pelanggaran";
      }
    
      pelanggaran() {
        return this.hasMany("App/Models/MPelanggaran");
      }
}

module.exports = MKategoriPelanggaran

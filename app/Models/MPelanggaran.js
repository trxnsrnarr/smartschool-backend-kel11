'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPelanggaran extends Model {
    static get table() {
        return "m_pelanggaran";
      }
    
      kategori() {
        return this.belongsTo("App/Models/MKategoriPelanggaran");
      }
}

module.exports = MPelanggaran

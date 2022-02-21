'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPembayaranSekolah extends Model {
    static get table() {
        return "m_pembayaran_sekolah";
      }
    
      sekolah() {
        return this.belongsTo("App/Models/MSekolah");
      }
    
      dokumen() {
        return this.hasMany("App/Models/MDokumenPembayaranSekolah", "id", "m_pembayaran_sekolah_id");
      }
}

module.exports = MPembayaranSekolah

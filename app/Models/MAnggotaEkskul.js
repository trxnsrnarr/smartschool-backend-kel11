'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MAnggotaEkskul extends Model {
    static get table() {
        return "m_anggota_ekskul";
      }
    
      ekskul() {
        return this.belongsTo("App/Models/MEkstrakurikuler");
      }
    
      user() {
        return this.belongsTo("App/Models/User", "m_user_id");
      }
}

module.exports = MAnggotaEkskul

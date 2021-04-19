'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkPekerjaanProyekAktivita extends Model {
    static get table() {
        return "tk_pekerjaan_proyek_aktivitas";
    }
    
    user() {
        return this.belongsTo("App/Models/User", "m_user_id");
      }

    pekerjaan() {
      return this.belongsTo("App/Models/MPekerjaanProyek");
    }
}

module.exports = TkPekerjaanProyekAktivita

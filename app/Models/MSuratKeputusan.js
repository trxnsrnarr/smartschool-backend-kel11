'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MSuratKeputusan extends Model {
    static get table() {
        return "m_surat_keputusan";
      }
      suratUser() {
        return this.hasMany("App/Models/TkSuratKeputusanUser","id" ,"m_surat_keputusan_id");
      }

      tahun() {
        return this.belongsTo("App/Models/Mta");
      }

}

module.exports = MSuratKeputusan

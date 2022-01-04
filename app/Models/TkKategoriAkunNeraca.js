'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkKategoriAkunNeraca extends Model {
    static get table() {
        return "tk_kategori_akun_neraca";
      }

      akun () {
        return this.belongsTo("App/Models/MKeuAkun")
      }
    
}

module.exports = TkKategoriAkunNeraca

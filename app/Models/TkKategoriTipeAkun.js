'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TkKategoriTipeAkun extends Model {
    static get table() {
        return "tk_kategori_tipe_akun";
      }
}

module.exports = TkKategoriTipeAkun

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MRencanaKategoriTipeAkun extends Model {
    static get table() {
    return "m_rencana_kategori_tipe_akun";
  }

  akunArus() {
    return this.belongsTo("App/Models/MKeuAkun");
  }

  akun() {
    return this.hasMany("App/Models/TkRencanaKategoriTipeAkun");
  }
}

module.exports = MRencanaKategoriTipeAkun

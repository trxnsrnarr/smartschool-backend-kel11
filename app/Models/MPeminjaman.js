'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MPeminjaman extends Model {
  static get table() {
    return "m_peminjaman";
  }

  barang() {
    return this.belongsTo("App/Models/MBarang", "m_barang_id", "id");
  }

  user() {
    return this.belongsTo("App/Models/User", "m_user_id", "id");
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah", "m_sekolah_id", "id");
  }

  lokasi() {
    return this.belongsTo("App/Models/MLokasi", "m_lokasi_id", "id");
  }

  dokumen() {
    return this.hasMany("App/Models/MDokumenPeminjaman", "id", "m_peminjaman_id");
  }
}

module.exports = MPeminjaman

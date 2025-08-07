'use strict'

const Model = use('Model')

class MKategoriBarang extends Model {
  static get table () {
    return 'm_kategori_barang'
  }

  sekolah() {
    return this.belongsTo('App/Models/MSekolah', 'm_sekolah_id', 'id')
  }

  barang() {
    return this.hasMany('App/Models/MBarang', 'id', 'm_kategori_barang_id')
  }
}

module.exports = MKategoriBarang

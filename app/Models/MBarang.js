'use strict'

const Model = use('Model')

class MBarang extends Model {
  static get table () {
    return 'm_barang'
  }

  kategori() {
    return this.belongsTo('App/Models/MKategoriBarang', 'm_kategori_barang_id', 'id')
  }

  lokasi() {
    return this.belongsTo('App/Models/MLokasi', 'm_lokasi_id', 'id')
  }

  sekolah() {
    return this.belongsTo('App/Models/MSekolah', 'm_sekolah_id', 'id')
  }

  jurusan() {
    return this.belongsTo('App/Models/MJurusanBarang', 'kategori_barang', 'id')
  }
}

module.exports = MBarang

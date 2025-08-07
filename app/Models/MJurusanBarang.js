'use strict'

const Model = use('Model')

class MJurusanBarang extends Model {
  static get table () {
    return 'm_jurusan_barang'
  }

  jurusan() {
    return this.belongsTo('App/Models/MJurusan', 'm_jurusan_id', 'id')
  }
}

module.exports = MJurusanBarang

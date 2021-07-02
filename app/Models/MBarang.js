'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MBarang extends Model {
    static get table() {
        return "m_barang";
      }

      lokasi() {
        return this.belongsTo("App/Models/MLokasi");
      }
}

module.exports = MBarang

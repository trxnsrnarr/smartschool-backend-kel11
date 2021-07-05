'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MLokasi extends Model {
    static get table() {
        return "m_lokasi";
      }

      barang() {
        return this.hasMany("App/Models/MBarang");
      }
}

module.exports = MLokasi

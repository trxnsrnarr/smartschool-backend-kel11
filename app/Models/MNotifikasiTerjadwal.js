'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MNotifikasiTerjadwal extends Model {
    static get table() {
        return "m_notifikasi_terjadwal";
      }
}

module.exports = MNotifikasiTerjadwal

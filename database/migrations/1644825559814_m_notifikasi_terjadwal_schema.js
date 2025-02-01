'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MNotifikasiTerjadwalSchema extends Schema {
  up () {
    this.table('m_notifikasi_terjadwal', (table) => {
      // alter table
      table.string("nama")
    })
  }

  down () {
    this.table('m_notifikasi_terjadwal', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MNotifikasiTerjadwalSchema

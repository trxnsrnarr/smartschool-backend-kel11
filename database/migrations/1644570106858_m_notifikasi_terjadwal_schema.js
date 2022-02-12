'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MNotifikasiTerjadwalSchema extends Schema {
  up () {
    this.create('m_notifikasi_terjadwal', (table) => {
      table.increments()
      table.datetime("tanggal_dibagikan")
      table.string("tanggal_cron")
      table.text("pesan")
      table.string("tujuan")
      table.boolean("dikirim").defaultTo(0);
      table.boolean("diupdate").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('m_notifikasi_terjadwal')
  }
}

module.exports = MNotifikasiTerjadwalSchema

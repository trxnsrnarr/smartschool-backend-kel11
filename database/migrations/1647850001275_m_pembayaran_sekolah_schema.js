'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPembayaranSekolahSchema extends Schema {
  up () {
    this.table('m_pembayaran_sekolah', (table) => {
      // alter table
      table.date("tanggal_pembayaran")
    })
  }

  down () {
    this.table('m_pembayaran_sekolah', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MPembayaranSekolahSchema

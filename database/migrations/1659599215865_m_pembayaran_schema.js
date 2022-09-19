'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPembayaranSchema extends Schema {
  up () {
    this.table('m_pembayaran', (table) => {
      // alter table
      table.string("nama_transaksi_siswa");
    })
  }

  down () {
    this.table('m_pembayaran', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MPembayaranSchema

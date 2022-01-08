'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateMKeutransaksiSchema extends Schema {
  up () {
    this.table('m_keu_transaksi', (table) => {
      // alter table
      table.datetime("tanggal").alter();
    })
  }

  down () {
    this.table('m_keu_transaksi', (table) => {
      // reverse alternations
      table.date("tanggal").alter();
    })
  }
}

module.exports = UpdateMKeutransaksiSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRencanaTransaksiSchema extends Schema {
  up () {
    this.table('m_rencana_transaksi', (table) => {
      // alter table
      table.boolean("status");
    })
  }

  down () {
    this.table('m_rencana_transaksi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MRencanaTransaksiSchema

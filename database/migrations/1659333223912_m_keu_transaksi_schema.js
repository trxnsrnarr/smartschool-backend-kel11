'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKeuTransaksiSchema extends Schema {
  up () {
    this.table('m_keu_transaksi', (table) => {
      // alter table
      table.integer("m_pembayaran_id").unsigned().index("m_pembayaran_id");
      table
        .foreign("m_pembayaran_id")
        .references("m_pembayaran.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('m_keu_transaksi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MKeuTransaksiSchema

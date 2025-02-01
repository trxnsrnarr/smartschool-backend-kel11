'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKeuTransaksiUpdateSchema extends Schema {
  up () {
    this.table('m_keu_transaksi', (table) => {
      table.integer("m_keu_penyusutan_transaksi_id").unsigned().index("m_keu_penyusutan_transaksi_id");
      table
        .foreign("m_keu_penyusutan_transaksi_id")
        .references("m_keu_penyusutan_transaksi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      // alter table
    })
  }

  down () {
    this.table('m_keu_transaksi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MKeuTransaksiUpdateSchema

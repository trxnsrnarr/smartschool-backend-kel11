'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPembayaranSchema extends Schema {
  up () {
    this.table('m_pembayaran', (table) => {
      // alter table
      table.string("nama_transaksi");
      table
        .integer("m_keu_akun_debet_id")
        .unsigned()
        .index("m_keu_akun_debet_id");
      table
        .foreign("m_keu_akun_debet_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_keu_akun_kredit_id")
        .unsigned()
        .index("m_keu_akun_kredit_id");
      table
        .foreign("m_keu_akun_kredit_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('m_pembayaran', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MPembayaranSchema

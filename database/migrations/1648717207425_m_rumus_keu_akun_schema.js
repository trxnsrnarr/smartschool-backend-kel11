'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRumusKeuAkunSchema extends Schema {
  up () {
    this.table('m_rumus_keu_akun', (table) => {
      // alter table
      table.integer("m_rencana_keuangan_id").unsigned().index("m_rencana_keuangan_id");
      table
        .foreign("m_rencana_keuangan_id")
        .references("m_rencana_keuangan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('m_rumus_keu_akun', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MRumusKeuAkunSchema

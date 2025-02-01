'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MSuratKeputusanSchema extends Schema {
  up () {
    this.table('m_surat_keputusan', (table) => {
      // alter table
      
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('m_surat_keputusan', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MSuratKeputusanSchema

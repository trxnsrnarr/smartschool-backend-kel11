'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRencanaJurnalSchema extends Schema {
  up () {
    this.table('m_rencana_jurnal', (table) => {
      // alter table
      table.boolean("status");
    })
  }

  down () {
    this.table('m_rencana_jurnal', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MRencanaJurnalSchema

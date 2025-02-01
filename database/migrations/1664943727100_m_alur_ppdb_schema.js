'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAlurPpdbSchema extends Schema {
  up () {
    this.table('m_alur_ppdb', (table) => {
      // alter table
      table.string("tipe")
    })
  }

  down () {
    this.table('m_alur_ppdb', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MAlurPpdbSchema

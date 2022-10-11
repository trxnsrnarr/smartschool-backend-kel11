'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MJalurPpdbSchema extends Schema {
  up () {
    this.table('m_jalur_ppdb', (table) => {
      // alter table
      table.string("tipe")
    })
  }

  down () {
    this.table('m_jalur_ppdb', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MJalurPpdbSchema

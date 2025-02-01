'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAbsenAlterSchema extends Schema {
  up () {
    this.table('m_absen', (table) => {
      // alter table
      table.boolean("masker")
      table.string("suhu");
    })
  }

  down () {
    this.table('m_absen', (table) => {
      // reverse alternations
      table.dropColumn("masker")
      table.dropColumn("suhu")
    })
  }
}

module.exports = MAbsenAlterSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MLowonganSchema extends Schema {
  up () {
    this.table('m_lowongans', (table) => {
      // alter table
      table.text("alamat")
    })
  }

  down () {
    this.table('m_lowongans', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MLowonganSchema

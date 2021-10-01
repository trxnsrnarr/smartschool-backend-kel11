'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAbsenAlterSchema extends Schema {
  up () {
    this.table('m_absen', (table) => {
      // alter table
      table.string("foto_masuk_local")
      table.string("foto_pulang_local")
    })
  }

  down () {
    this.table('m_absen', (table) => {
      // reverse alternations
      table.dropColumn("foto_masuk_local")
      table.dropColumn("foto_pulang_local")
    })
  }
}

module.exports = MAbsenAlterSchema

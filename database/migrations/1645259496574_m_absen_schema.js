'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAbsenSchema extends Schema {
  up () {
    this.table('m_absen', (table) => {
      // alter table
      table.text("lokasi_masuk")
      table.text("lokasi_pulang")
    })
  }

  down () {
    this.table('m_absen', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MAbsenSchema

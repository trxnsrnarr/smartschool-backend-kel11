'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MJadwalUjianSchema extends Schema {
  up () {
    this.table('m_jadwal_ujian', (table) => {
      // alter table
      table.string("token")
    })
  }

  down () {
    this.table('m_jadwal_ujian', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MJadwalUjianSchema

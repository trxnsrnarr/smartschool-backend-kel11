'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAnggotaRombelSchema extends Schema {
  up () {
    this.table('m_anggota_rombel', (table) => {
      // alter table
      table.date("tanggal_keluar")
    })
  }

  down () {
    this.table('m_anggota_rombel', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MAnggotaRombelSchema

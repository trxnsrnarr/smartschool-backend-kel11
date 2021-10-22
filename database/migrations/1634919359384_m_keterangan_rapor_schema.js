'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKeteranganRaporSchema extends Schema {
  up () {
    this.table('m_keterangan_rapor', (table) => {
      // alter table
      table.integer("sakit").unsigned();
      table.integer("izin").unsigned();
      table.integer("alpa").unsigned();
    })
  }
  
  down () {
    this.table('m_keterangan_rapor', (table) => {
      // reverse alternations
      table.dropColumn("sakit")
      table.dropColumn("izin")
      table.dropColumn("alpa")
    })
  }
}

module.exports = MKeteranganRaporSchema

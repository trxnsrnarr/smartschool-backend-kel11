'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKeteranganRaporSchema extends Schema {
  up () {
    this.table('m_keterangan_rapor', (table) => {
      // alter 
      table.integer("telat").unsigned().defaultTo(0);
    })
  }

  down () {
    this.table('m_keterangan_rapor', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MKeteranganRaporSchema

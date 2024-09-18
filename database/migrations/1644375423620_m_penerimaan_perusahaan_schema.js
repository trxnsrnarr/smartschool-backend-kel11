'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPenerimaanPerusahaanSchema extends Schema {
  up () {
    this.table('m_penerimaan_perusahaan', (table) => {
      // alter table
      table.string("tahun")
    })
  }

  down () {
    this.table('m_penerimaan_perusahaan', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MPenerimaanPerusahaanSchema

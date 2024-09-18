'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRencanaKategoriLabaRugiSchema extends Schema {
  up () {
    this.table('m_rencana_kategori_laba_rugi', (table) => {
      // alter table
      table.string("kategori")
    })
  }

  down () {
    this.table('m_rencana_kategori_laba_rugi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MRencanaKategoriLabaRugiSchema

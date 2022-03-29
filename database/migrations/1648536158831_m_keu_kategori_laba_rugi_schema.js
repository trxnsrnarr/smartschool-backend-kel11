'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKeuKategoriLabaRugiSchema extends Schema {
  up () {
    this.table('m_keu_kategori_laba_rugi', (table) => {
      table.string("kategori")
    })
  }

  down () {
    this.table('m_keu_kategori_laba_rugi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MKeuKategoriLabaRugiSchema

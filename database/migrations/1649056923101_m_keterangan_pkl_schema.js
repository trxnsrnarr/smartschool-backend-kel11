'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKeteranganPklSchema extends Schema {
  up () {
    this.table('m_keterangan_pkl', (table) => {
      // alter table
      table.string("nilai")
      table.text("id_card")
      table.text("kontrak")
      table.text("sertifikat")
    })
  }

  down () {
    this.table('m_keterangan_pkl', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MKeteranganPklSchema

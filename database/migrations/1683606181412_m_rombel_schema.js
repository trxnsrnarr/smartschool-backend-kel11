'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRombelSchema extends Schema {
  up () {
    this.table('m_rombel', (table) => {
      // alter table
      table.text("deskripsi")
      table.text("banner")
    })
  }

  down () {
    // this.table('m_rombel', (table) => {
    //   // reverse alternations
    // })
  }
}

module.exports = MRombelSchema

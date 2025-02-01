'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkPesertaUjianSchema extends Schema {
  up () {
    this.table('tk_peserta_ujian', (table) => {
      // alter table
      table.boolean("block").defaultTo(0)
    })
  }

  down () {
    this.table('tk_peserta_ujian', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TkPesertaUjianSchema

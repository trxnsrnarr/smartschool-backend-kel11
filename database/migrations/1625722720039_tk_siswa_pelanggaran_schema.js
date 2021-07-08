'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkSiswaPelanggaranSchema extends Schema {
  up () {
    this.create('tk_siswa_pelanggarans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_siswa_pelanggarans')
  }
}

module.exports = TkSiswaPelanggaranSchema

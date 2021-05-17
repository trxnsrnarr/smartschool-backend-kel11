'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkRekapNilaiSchema extends Schema {
  up () {
    this.create('tk_rekap_nilais', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_rekap_nilais')
  }
}

module.exports = TkRekapNilaiSchema

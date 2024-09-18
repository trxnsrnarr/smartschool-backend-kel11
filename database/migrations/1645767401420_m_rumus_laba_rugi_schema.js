'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRumusLabaRugiSchema extends Schema {
  up () {
    this.table('m_rumus_laba_rugi', (table) => {
      // alter table
      table.string("nama")
    })
  }

  down () {
    this.table('m_rumus_laba_rugi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MRumusLabaRugiSchema

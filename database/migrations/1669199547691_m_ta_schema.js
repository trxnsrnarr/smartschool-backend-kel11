'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MTaSchema extends Schema {
  up () {
    this.table('m_ta', (table) => {
      // alter table
      table.string("tingkat1")
      table.string("tingkat2")
      table.string("tingkat3")
      table.string("tingkat4")
      table.string("tingkat5")
      table.string("tingkat6")
    })
  }

  down () {
    this.table('m_ta', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MTaSchema

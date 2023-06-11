'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MTaSchema extends Schema {
  up () {
    this.table('m_ta', (table) => {
      // alter table
      table.boolean("save").defaultTo(0);
    })
  }

  down () {
    this.table('m_ta', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MTaSchema

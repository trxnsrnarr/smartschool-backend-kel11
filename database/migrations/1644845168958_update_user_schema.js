'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarketPlaceSchema extends Schema {
  up () {
    this.table('m_user', (table) => {
      // alter table
      table.string("no_ujian");
    })
  }

  down () {
    this.table('m_user', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MarketPlaceSchema

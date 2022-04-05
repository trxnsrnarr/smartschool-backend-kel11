'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarketPlaceSchema extends Schema {
  up () {
    this.table('m_sekolah', (table) => {
      // alter table
      table.string("provinsi_id");
      table.string("kabupaten_ids");
    })
  }

  down () {
    this.table('m_sekolah', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MarketPlaceSchema

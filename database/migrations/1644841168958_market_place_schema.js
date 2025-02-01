'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarketPlaceSchema extends Schema {
  up () {
    this.table('market_places', (table) => {
      // alter table
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('market_places', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MarketPlaceSchema

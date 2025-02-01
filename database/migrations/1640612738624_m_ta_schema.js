'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MTaSchema extends Schema {
  up () {
    this.table('m_ta', (table) => {
      table.boolean("jam_sinkron").defaultTo(0);
      table.boolean("mapel_sinkron").defaultTo(0);
      table.boolean("rombel_sinkron").defaultTo(0);
      table.boolean("jadwal_sinkron").defaultTo(0);
    })
  }

  down () {
    this.table('m_ta', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MTaSchema

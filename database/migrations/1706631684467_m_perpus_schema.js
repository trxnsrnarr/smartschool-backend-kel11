'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPerpusSchema extends Schema {
  up () {
    this.table('m_perpus', (table) => {
      // alter table
      table.string("no_rak")
    })
  }

  down () {
    this.table('m_perpus', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MPerpusSchema

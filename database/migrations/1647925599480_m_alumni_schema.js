'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAlumniSchema extends Schema {
  up () {
    this.table('m_alumni', (table) => {
      // alter table
      table.boolean("verifikasi");
      table.string("status");
    })
  }

  down () {
    this.table('m_alumni', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MAlumniSchema

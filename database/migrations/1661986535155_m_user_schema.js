'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MUserSchema extends Schema {
  up () {
    this.table('m_user', (table) => {
      // alter table
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('m_user', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MUserSchema

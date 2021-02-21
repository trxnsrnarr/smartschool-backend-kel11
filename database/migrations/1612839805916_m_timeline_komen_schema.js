'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MTimelineKomenSchema extends Schema {
  up () {
    this.create('m_timeline_komen', (table) => {
      table.increments()
      table.text("komen");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_timeline_id").unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('m_timeline_komen')
  }
}

module.exports = MTimelineKomenSchema

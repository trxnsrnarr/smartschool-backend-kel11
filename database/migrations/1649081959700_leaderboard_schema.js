'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeaderboardSchema extends Schema {
  up () {
    this.create('leaderboards', (table) => {
      table.increments()
      table.string('kcd')
      table.integer('total')
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps()
    })
  }

  down () {
    this.drop('leaderboards')
  }
}

module.exports = LeaderboardSchema

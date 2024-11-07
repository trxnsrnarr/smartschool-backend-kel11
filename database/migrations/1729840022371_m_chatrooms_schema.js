'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MChatroomsSchema extends Schema {
  up() {
    this.create('m_chatrooms', (table) => {
      table.increments()
      table.string('name').notNullable();
      table.integer('m_user_id').unsigned();
      table
        .foreign('m_user_id')
        .references('m_user.id')
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps()
    })
  }

  down () {
    this.drop('m_chatrooms')
  }
}

module.exports = MChatroomsSchema

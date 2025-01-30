'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MMessagesSchema extends Schema {
  up() {
    this.create('m_messages', (table) => {
      table.increments()
      table.string('role', 50);
      table.text('content', 'longtext');
      table.string('type_of_content', 50);
      table.integer('m_chatroom_id').unsigned().index();
      table
        .foreign('m_chatroom_id')
        .references('m_chatrooms.id')
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps()
    })
  }

  down () {
    this.drop('m_messages')
  }
}

module.exports = MMessagesSchema

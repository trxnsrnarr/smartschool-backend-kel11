'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkServerSekolahSchema extends Schema {
  up () {
    this.create('tk_server_sekolah', (table) => {
      table.increments()
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        table.integer("m_server_id").unsigned().index("m_server_id");
      table
        .foreign("m_server_id")
        .references("m_server.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        table.boolean("dihapus").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_server_sekolah')
  }
}

module.exports = TkServerSekolahSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MAnggotaEkskulSchema extends Schema {
  up () {
    this.create('m_anggota_ekskul', (table) => {      
      table.increments();
      table.string("role");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_ekstrakurikuler_id").unsigned().index("m_ekstrakurikuler_id");
      table
        .foreign("m_ekstrakurikuler_id")
        .references("m_ekstrakurikuler.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    })
  }

  down () {
    this.drop('m_anggota_ekskul')
  }
}

module.exports = MAnggotaEkskulSchema

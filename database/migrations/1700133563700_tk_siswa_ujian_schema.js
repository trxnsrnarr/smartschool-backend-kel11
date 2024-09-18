'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkSiswaUjianSchema extends Schema {
  up () {
    this.create('tk_siswa_ujian', (table) => {
      table.increments()
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_rombel_id").unsigned().index();
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jadwal_ujian_id").unsigned().index();
      table
        .foreign("m_jadwal_ujian_id")
        .references("m_jadwal_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index();
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_siswa_ujian')
  }
}

module.exports = TkSiswaUjianSchema

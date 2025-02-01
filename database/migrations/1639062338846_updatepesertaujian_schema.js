'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdatepesertaujianSchema extends Schema {
  up () {
    this.table('tk_peserta_ujian', (table) => {
      table.integer("tk_timeline_id").unsigned().index("tk_timeline_id");
      table
        .foreign("tk_timeline_id")
        .references("tk_timeline.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      // alter table
    })
  }

  down () {
    this.table('tk_peserta_ujian', (table) => {
      table.dropColumn("tk_timeline_id");
      // reverse alternations
    })
  }
}

module.exports = UpdatepesertaujianSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkPesertaUjianSchema extends Schema {
  up () {
    this.table('tk_peserta_ujian', (table) => {
      // alter table
      table.integer("tk_siswa_ujian_id").unsigned().index("tk_siswa_ujian_id");
      table
        .foreign("tk_siswa_ujian_id")
        .references("tk_siswa_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('tk_peserta_ujian', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TkPesertaUjianSchema

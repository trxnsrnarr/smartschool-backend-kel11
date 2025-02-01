'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkJawabanUjianSiswaSchema extends Schema {
  up () {
    this.table('tk_jawaban_ujian_siswa', (table) => {
      // alter table
      table
        .integer("tk_peserta_ujian_ppdb_id")
        .unsigned()
        .index("tk_peserta_ujian_ppdb_id");
      table
        .foreign("tk_peserta_ujian_ppdb_id")
        .references("tk_peserta_ujian_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    })
  }

  down () {
    this.table('tk_jawaban_ujian_siswa', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TkJawabanUjianSiswaSchema

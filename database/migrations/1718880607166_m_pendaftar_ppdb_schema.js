'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPendaftarPpdbSchema extends Schema {
  up () {
    this.table('m_pendaftar_ppdb', (table) => {
      table.integer("konfirmasi_id").unsigned().index("konfirmasi_id");
      table
        .foreign("konfirmasi_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      // alter table
    })
  }

  down () {
    this.table('m_pendaftar_ppdb', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MPendaftarPpdbSchema

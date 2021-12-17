'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MProfilUserSchema extends Schema {
  up () {
    this.table('m_profil_user', (table) => {
      table.string("no_ijazah");
      table.string("tahun_ijazah");
      table.text("file_ijazah");
      table.string("alamat_asal_sekolah");
      // alter table
    })
  }

  down () {
    this.table('m_profil_user', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MProfilUserSchema

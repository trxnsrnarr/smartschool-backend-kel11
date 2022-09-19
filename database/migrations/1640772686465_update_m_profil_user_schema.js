'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateMProfilUserSchema extends Schema {
  up () {
    this.table('m_profil_user', (table) => {
      // alter table
      table.text("file_ppdb");
      table.text("data_absensi");
    })
  }
  
  down () {
    this.table('m_profil_user', (table) => {
      // reverse alternations
      table.dropColumn("file_ppdb")
      table.dropColumn("data_absensi");
    })
  }
}

module.exports = UpdateMProfilUserSchema

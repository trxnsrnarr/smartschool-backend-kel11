'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateTkKategoriLabarugiSchema extends Schema {
  up () {
    this.table('tk_kategori_akun_laba_rugi', (table) => {
      // alter table
      table.string("pengaturan");
    })
  }

  down () {
    this.table('tk_kategori_akun_laba_rugi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateTkKategoriLabarugiSchema

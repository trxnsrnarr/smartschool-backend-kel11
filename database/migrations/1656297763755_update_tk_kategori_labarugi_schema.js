'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateTkKategoriLabarugiSchema extends Schema {
  up () {
    this.table('update_tk_kategori_labarugi', (table) => {
      // alter table
      table.text("pengaturan");
    })
  }

  down () {
    this.table('update_tk_kategori_labarugi', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateTkKategoriLabarugiSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkKategoriAkunNeracaSchema extends Schema {
  up () {
    this.table('tk_kategori_akun_neraca', (table) => {
      // alter table
      table.string("pengaturan");
    })
  }

  down () {
    this.table('tk_kategori_akun_neraca', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TkKategoriAkunNeracaSchema

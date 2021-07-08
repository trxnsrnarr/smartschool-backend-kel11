'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKategoriPelanggaranSchema extends Schema {
  up () {
    this.create('m_kategori_pelanggarans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_kategori_pelanggarans')
  }
}

module.exports = MKategoriPelanggaranSchema

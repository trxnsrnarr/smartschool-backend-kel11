'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPembayaranKategoriSchema extends Schema {
  up () {
    this.create('m_pembayaran_kategori', (table) => {
      table.increments()
      table.string('kategori')
      table.boolean("dihapus");
      table.integer("m_pembayaran_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('m_pembayaran_kategori')
  }
}

module.exports = MPembayaranKategoriSchema

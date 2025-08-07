'use strict'

const Schema = use('Schema')

class MKategoriBarangSchema extends Schema {
  up () {
    this.create('m_kategori_barang', (table) => {
      table.increments('id')
      table.string('nama', 100).notNullable()
      table.text('slug').nullable()
      table.text('deskripsi').nullable()
      table.string('jenis_kolom', 255).nullable()
      table.string('link', 255).nullable()
      table.string('img', 255).nullable()
      table.integer('m_sekolah_id').unsigned().references('id').inTable('m_sekolah').onDelete('SET NULL')
      table.datetime('created_at').defaultTo(this.fn.now())
      table.datetime('updated_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('m_kategori_barang')
  }
}

module.exports = MKategoriBarangSchema

'use strict'

const Schema = use('Schema')

class MJurusanBarangSchema extends Schema {
  up () {
    this.create('m_jurusan_barang', (table) => {
      table.increments('id')
      table.string('nama', 255).nullable()
      table.string('slug', 255).nullable()
      table.text('deskripsi').nullable()
      table.string('link', 255).nullable()
      table.string('image', 255).nullable()
        table.integer('m_sekolah_id').unsigned().references('id').inTable('m_sekolah').onDelete('SET NULL')
      table.integer('m_jurusan_id').unsigned().references('id').inTable('m_jurusan').onDelete('SET NULL')
      table.datetime('created_at').defaultTo(this.fn.now())
      table.datetime('updated_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('m_jurusan_barang')
  }
}

module.exports = MJurusanBarangSchema

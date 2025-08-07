'use strict'

const Schema = use('Schema')

class MBarangSchema extends Schema {
  up () {
    this.create('m_barang', (table) => {
      table.increments('id')
      table.string('kode_barang', 255).nullable()
      table.string('foto', 255).nullable()
      table.string('nama', 255).nullable()
      table.string('merk', 255).nullable()
      table.text('spesifikasi').nullable()
      table.date('tanggal_dibeli').nullable()
      table.text('deskripsi').nullable()
      table.text('kategori_barang').nullable() // bisa juga .string kalau ingin pendek
      table.integer('m_kategori_barang_id').unsigned().references('id').inTable('m_kategori_barang').onDelete('SET NULL')
      table.decimal('harga', 15, 2).nullable()
      table.enu('status', ['tersedia', 'dipinjam', 'rusak', '']).nullable()
      table.integer('waktu_peminjaman').nullable() // satuan: jam
      table.text('sanksi').nullable()
      table.integer('m_lokasi_id').unsigned().references('id').inTable('m_lokasi').onDelete('SET NULL')
      table.integer('m_sekolah_id').unsigned().references('id').inTable('m_sekolah').onDelete('SET NULL')
      table.datetime('created_at').nullable()
      table.datetime('updated_at').nullable()
      table.boolean('dihapus').defaultTo(0)
    })
  }

  down () {
    this.drop('m_barang')
  }
}

module.exports = MBarangSchema

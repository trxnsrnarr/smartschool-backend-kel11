'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPembayaranSchema extends Schema {
  up () {
    this.create('m_pembayaran', (table) => {
      table.increments()
      table.string("nama");
      table.string("jenis");
      table.string("bulan"); // spp
      table.string('tipe_ujian') // ujian
      table.integer("nominal");
      table.datetime("tanggal_dibuat");
      table.boolean("dihapus");
      table.integer("m_sekolah_id").unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('m_pembayaran')
  }
}

module.exports = MPembayaranSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPenerimaanPerusahaanSchema extends Schema {
  up () {
    this.create('m_penerimaan_perusahaan', (table) => {
      table.increments()
      table.string("nama")
      table.text("data_siswa");
      table.text("surat_tugas");
      table.text("mou");
      table.integer("tk_perusahaan_sekolah_id").unsigned().index("tk_perusahaan_sekolah_id");
      table
        .foreign("tk_perusahaan_sekolah_id")
        .references("tk_perusahaan_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('m_penerimaan_perusahaan')
  }
}

module.exports = MPenerimaanPerusahaanSchema

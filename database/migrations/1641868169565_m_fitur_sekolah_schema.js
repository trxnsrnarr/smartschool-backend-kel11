'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MFiturSekolahSchema extends Schema {
  up () {
    this.create('m_fitur_sekolah', (table) => {
      table.increments()
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        
      table.boolean("nota_barang").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('m_fitur_sekolah')
  }
}

module.exports = MFiturSekolahSchema

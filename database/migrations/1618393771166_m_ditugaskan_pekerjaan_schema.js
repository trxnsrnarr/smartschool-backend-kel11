'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MDitugaskanPekerjaanSchema extends Schema {
  up () {
    this.create('m_ditugaskan_pekerjaan', (table) => {
      table.increments()
      table.integer("m_pekerjaan_proyek_id").unsigned().index('m_pekerjaan_proyek_id');
      table
        .foreign("m_pekerjaan_proyek_id")
        .references("m_pekerjaan_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_anggota_proyek_id").unsigned().index('m_anggota_proyek_id');
      table
        .foreign("m_anggota_proyek_id")
        .references("m_anggota_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus")
      table.timestamps()
    })
  }

  down () {
    this.drop('m_ditugaskan_pekerjaan')
  }
}

module.exports = MDitugaskanPekerjaanSchema

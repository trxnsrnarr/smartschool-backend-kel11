'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRegistrasiAkunSchema extends Schema {
  up () {
    this.create('m_registrasi_akun', (table) => {
      table.increments()
      table.string("nama")
      table.string("whatsapp")
      table.string("jabatan")
      table.text("lampiran")
      table.string("password");
      table.boolean("verifikasi").defaultTo(0);
      table.integer("sekolah_id").unsigned().index("sekolah_id");
      table
        .foreign("sekolah_id")
        .references("sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps()
    })
  }

  down () {
    this.drop('m_registrasi_akun')
  }
}

module.exports = MRegistrasiAkunSchema

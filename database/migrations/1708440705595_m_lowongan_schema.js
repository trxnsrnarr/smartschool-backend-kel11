'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MLowonganSchema extends Schema {
  up () {
    this.create('m_lowongans', (table) => {
      table.increments()
      table.string("posisi")
      table.datetime("deadline")
      table.text("deskripsi")
      table.string("jenis")
      table.string("tipe")
      table.string("jenis_kelamin")
      table.string("gaji_min")
      table.string("gaji_max")
      table.integer("jumlah")
      table.text("persyaratan_khusus")
      table.string("pendidikan")
      table.integer("umur_min")
      table.integer("umur_max")
      table.string("status")
      table.integer("minimal_pengalaman")
      table.string("kondisi_fisik")
      table.text("keterampilan")
      table
        .integer('m_user_id')
        .unsigned()
        .notNullable()
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade")
      table.boolean("dihapus").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('m_lowongans')
  }
}

module.exports = MLowonganSchema

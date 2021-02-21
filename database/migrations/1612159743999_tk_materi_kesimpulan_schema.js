'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkMateriKesimpulanSchema extends Schema {
  up () {
    this.create('tk_materi_kesimpulan', (table) => {
      table.increments()
      table.text("kesimpulan");
      table.datetime("waktu_mulai");
      table.datetime("waktu_selesai");
      table.boolean("dibaca");
      table.integer("m_topik_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_materi_kesimpulan')
  }
}

module.exports = TkMateriKesimpulanSchema

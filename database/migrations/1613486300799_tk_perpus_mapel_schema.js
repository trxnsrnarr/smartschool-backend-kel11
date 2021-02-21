'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkPerpusMapelSchema extends Schema {
  up () {
    this.create('tk_perpus_mapel', (table) => {
      table.increments()
      table.boolean("dihapus");
      table.integer("m_jurusan_id").unsigned();
      table.integer("m_mata_pelajaran_id").unsigned();
      table.integer("m_perpus_id").unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_perpus_mapel')
  }
}

module.exports = TkPerpusMapelSchema

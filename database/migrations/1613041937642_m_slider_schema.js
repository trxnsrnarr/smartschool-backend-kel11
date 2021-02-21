'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MSliderSchema extends Schema {
  up () {
    this.create('m_slider', (table) => {
      table.increments()
      table.text('banner')
      table.string('judul')
      table.text('deskripsi')
      table.boolean('dihapus')
      table.integer("m_sekolah_id").unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('m_slider')
  }
}

module.exports = MSliderSchema

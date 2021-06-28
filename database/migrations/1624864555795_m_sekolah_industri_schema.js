'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MSekolahIndustriSchema extends Schema {
  up () {
    this.create('m_sekolah_industris', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_sekolah_industris')
  }
}

module.exports = MSekolahIndustriSchema

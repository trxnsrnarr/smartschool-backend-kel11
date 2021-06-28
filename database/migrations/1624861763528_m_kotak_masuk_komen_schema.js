'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MKotakMasukKomenSchema extends Schema {
  up () {
    this.create('m_kotak_masuk_komen', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_kotak_masuk_komen')
  }
}

module.exports = MKotakMasukKomenSchema

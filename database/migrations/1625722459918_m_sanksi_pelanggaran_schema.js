'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MSanksiPelanggaranSchema extends Schema {
  up () {
    this.create('m_sanksi_pelanggarans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_sanksi_pelanggarans')
  }
}

module.exports = MSanksiPelanggaranSchema

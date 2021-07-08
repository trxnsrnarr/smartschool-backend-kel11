'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MPelanggaranSchema extends Schema {
  up () {
    this.create('m_pelanggarans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_pelanggarans')
  }
}

module.exports = MPelanggaranSchema

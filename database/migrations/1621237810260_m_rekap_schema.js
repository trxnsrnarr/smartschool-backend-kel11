'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MRekapSchema extends Schema {
  up () {
    this.create('m_rekaps', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_rekaps')
  }
}

module.exports = MRekapSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MSanksiSiswaSchema extends Schema {
  up () {
    this.create('m_sanksi_siswas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('m_sanksi_siswas')
  }
}

module.exports = MSanksiSiswaSchema

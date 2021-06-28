'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TkTipeSurelSchema extends Schema {
  up () {
    this.create('tk_tipe_surels', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tk_tipe_surels')
  }
}

module.exports = TkTipeSurelSchema

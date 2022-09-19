'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MCameraSchema extends Schema {
  up () {
    this.table('m_camera', (table) => {
      // alter table
      table.boolean("dihapus")
    })
  }
  
  down () {
    this.table('m_camera', (table) => {
      table.dropColumn("dihapus")
      // reverse alternations
    })
  }
}

module.exports = MCameraSchema

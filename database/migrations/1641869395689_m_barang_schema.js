'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MBarangSchema extends Schema {
  up () {
    this.table('m_barang', (table) => {
      table.text("nota");
    })
  }

  down () {
    this.table('m_barang', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MBarangSchema

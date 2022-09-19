'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MBarangSchema extends Schema {
  up () {
    this.table('m_barang', (table) => {
      // alter table 
      table.boolean("verifikasi").defaultTo(0);
    })
  }

  down () {
    this.table('m_barang', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MBarangSchema

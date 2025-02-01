'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MInformasiPerusahaanSchema extends Schema {
  up () {
    this.table('m_informasi_perusahaan', (table) => {
      // alter table
      
      table.boolean("keselarasan");
      table.boolean("istd");
    })
  }

  down () {
    this.table('m_informasi_perusahaan', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MInformasiPerusahaanSchema

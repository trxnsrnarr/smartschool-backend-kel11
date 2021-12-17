'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateKeuJurnalSchema extends Schema {
  up () {
    this.table('m_keu_jurnal', (table) => {
      // alter table
      table.bigInteger("saldo")
    })
  }

  down () {
    this.table('m_keu_jurnal', (table) => {
      // reverse alternations
      table.integer("saldo");
    })
  }
}

module.exports = UpdateKeuJurnalSchema

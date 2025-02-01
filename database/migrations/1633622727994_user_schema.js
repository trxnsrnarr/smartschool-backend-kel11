'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('m_user', (table) => {
      table.text("token")
      // alter table
    })
  }
  
  down () {
    this.table('m_user', (table) => {
      // reverse alternations
      table.dropColumn("token")
    })
  }
}

module.exports = UserSchema

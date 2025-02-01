'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SekolahGradeSchema extends Schema {
  up () {
    this.create('sekolah_grades', (table) => {
      table.increments()
      table.string("nama")
      table.string("status")
      table.string("kabupaten")
      table.string("grade")
      table
        .integer('m_sekolah_id')
        .unsigned()
        .notNullable()
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('sekolah_grades')
  }
}

module.exports = SekolahGradeSchema

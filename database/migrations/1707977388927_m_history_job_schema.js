'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MHistoryJobSchema extends Schema {
  up () {
    this.create('m_history_jobs', (table) => {
      table.increments();
      table
        .integer('m_user_id')
        .unsigned()
        .notNullable();
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer('m_sekolah_id')
        .unsigned()
        .notNullable();
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("job_id");
      table.string("job_title");
      table.string("company_name");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    })
  }

  down () {
    this.drop('m_history_jobs')
  }
}

module.exports = MHistoryJobSchema

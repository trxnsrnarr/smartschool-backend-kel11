"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMAlumniSchema extends Schema {
  up() {
    this.table("m_alumni", (table) => {
      // alter table
      table.text("usaha");
    });
  }

  down() {
    this.table("m_alumni", (table) => {
      // reverse alternations
      table.dropColumn("usaha");
    });
  }
}

module.exports = UpdateMAlumniSchema;

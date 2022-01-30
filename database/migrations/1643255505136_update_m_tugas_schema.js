"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMTugasSchema extends Schema {
  up() {
    this.table("m_tugas", (table) => {
      // alter table
      table.boolean("show_nilai").defaultTo(1);
    });
  }

  down() {
    this.table("m_tugas", (table) => {
      // reverse alternations
      table.dropColumn("show_nilai");
    });
  }
}

module.exports = UpdateMTugasSchema;

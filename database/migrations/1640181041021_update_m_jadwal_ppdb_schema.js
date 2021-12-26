"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMJadwalPpdbSchema extends Schema {
  up() {
    this.table("m_jadwal_ppdb", (table) => {
      // alter table
      table.boolean("terlihat").defaultTo(0);
    });
  }

  down() {
    this.table("m_jadwal_ppdb", (table) => {
      // reverse alternations
      table.dropColumn("terlihat").defaultTo(0);
    });
  }
}

module.exports = UpdateMJadwalPpdbSchema;

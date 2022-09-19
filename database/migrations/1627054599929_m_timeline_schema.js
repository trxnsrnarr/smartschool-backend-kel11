"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTimelineSchema extends Schema {
  up() {
    this.table("m_timeline", (table) => {
      table.datetime("tanggal_akhir");
      // alter table
    });
  }

  down() {
    this.table("m_timeline", (table) => {
      table.dropColumn("tanggal_akhir");
      // reverse alternations
    });
  }
}

module.exports = MTimelineSchema;

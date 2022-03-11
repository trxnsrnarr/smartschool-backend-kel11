"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMBroadcastSchema extends Schema {
  up() {
    this.table("m_broadcast", (table) => {
      // alter table
      table.text("lampiran");
    });
  }

  down() {
    this.table("m_broadcast", (table) => {
      // reverse alternations
    });
  }
}

module.exports = UpdateMBroadcastSchema;

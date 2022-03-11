"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMBroadcastSchema extends Schema {
  up() {
    this.table("update_m_broadcasts", (table) => {
      // alter table
      table.text("lampiran");
    });
  }

  down() {
    this.table("update_m_broadcasts", (table) => {
      // reverse alternations
    });
  }
}

module.exports = UpdateMBroadcastSchema;

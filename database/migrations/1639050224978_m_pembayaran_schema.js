"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPembayaranSchema extends Schema {
  up() {
    this.table("m_pembayaran", (table) => {
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      // alter table
    });
  }

  down() {
    this.table("m_pembayaran", (table) => {
      table.dropColumn("m_ta_id");
      // reverse alternations
    });
  }
}

module.exports = MPembayaranSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekapAlterSchema extends Schema {
  up() {
    this.hasTable("m_rekap").then((exist) => {
      if (exist) {
        this.table("m_rekap", (table) => {
          table.integer("m_ta_id").unsigned().index("m_ta_id");
          table
            .foreign("m_ta_id")
            .references("m_ta.id")
            .onDelete("cascade")
            .onUpdate("cascade");
        });
      }
    });
  }

  down() {
    this.table("m_rekap", (table) => {
      table.dropForeign("m_ta_id");
      table.dropColumn("m_ta_id");
    });
  }
}

module.exports = MRekapAlterSchema;

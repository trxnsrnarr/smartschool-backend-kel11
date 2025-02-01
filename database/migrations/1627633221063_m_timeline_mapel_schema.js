"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTimelineMapelSchema extends Schema {
  up() {
    this.hasColumn("m_timeline", async (table) => {
      // alter table
      const exist = await this.hasColumn("m_timeline", "m_mata_pelajaran_id");
      if (!exist) {
        table
          .integer("m_mata_pelajaran_id")
          .unsigned()
          .index("m_mata_pelajaran_id");
        table
          .foreign("m_mata_pelajaran_id")
          .references("m_mata_pelajaran.id")
          .onDelete("cascade")
          .onUpdate("cascade");
      }
    });
  }

  down() {
    this.table("m_timeline", (table) => {
      // reverse alternations
      table.dropForeign("m_mata_pelajaran_id");
      table.dropColumn("m_mata_pelajaran_id");
    });
  }
}

module.exports = MTimelineMapelSchema;

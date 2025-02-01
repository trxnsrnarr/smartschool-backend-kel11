"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkTimelineTopikSchema extends Schema {
  up() {
    this.create("tk_timeline_topik", (table) => {
      table.increments();
      table.integer("m_timeline_id").unsigned().index("m_timeline_id");
      table
        .foreign("m_timeline_id")
        .references("m_timeline.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_topik_id").unsigned().index("m_topik_id");
      table
        .foreign("m_topik_id")
        .references("m_topik.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_timeline_topik");
  }
}

module.exports = TkTimelineTopikSchema;

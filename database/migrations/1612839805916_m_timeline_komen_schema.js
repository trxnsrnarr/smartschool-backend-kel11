"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTimelineKomenSchema extends Schema {
  up() {
    this.create("m_timeline_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_timeline_id").unsigned().index("m_timeline_id");
      table
        .foreign("m_timeline_id")
        .references("m_timeline.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_timeline_komen");
  }
}

module.exports = MTimelineKomenSchema;

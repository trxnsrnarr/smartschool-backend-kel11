"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkTimelineKomenSchema extends Schema {
  up() {
    this.create("tk_timeline_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus").defaultTo(0);
      table.integer("tk_timeline_id").unsigned().index("tk_timeline_id");
      table
        .foreign("tk_timeline_id")
        .references("tk_timeline.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_timeline_komen");
  }
}

module.exports = TkTimelineKomenSchema;

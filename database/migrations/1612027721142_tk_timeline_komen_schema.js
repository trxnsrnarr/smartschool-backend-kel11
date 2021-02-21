"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkTimelineKomenSchema extends Schema {
  up() {
    this.create("tk_timeline_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus");
      table.integer("tk_timeline_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_timeline_komen");
  }
}

module.exports = TkTimelineKomenSchema;

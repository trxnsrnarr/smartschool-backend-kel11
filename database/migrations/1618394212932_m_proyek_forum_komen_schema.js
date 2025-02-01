"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MProyekForumKomenSchema extends Schema {
  up() {
    this.create("m_proyek_forum_komen", (table) => {
      table.increments();
      table.text("komen");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_proyek_forum").unsigned().index("m_proyek_forum");
      table
        .foreign("m_proyek_forum")
        .references("m_proyek_forum.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_proyek_forum_komen");
  }
}

module.exports = MProyekForumKomenSchema;

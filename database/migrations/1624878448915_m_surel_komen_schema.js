"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSurelKomenSchema extends Schema {
  up() {
    this.create("m_surel_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_surel_id").unsigned().index("m_surel_id");
      table
        .foreign("m_surel_id")
        .references("m_surel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.text("lampiran");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_surel_komen");
  }
}

module.exports = MSurelKomenSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPerpusKomenSchema extends Schema {
  up() {
    this.create("m_perpus_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_perpus_id").unsigned().index("m_perpus_id");
      table
        .foreign("m_perpus_id")
        .references("m_perpus.id")
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
    this.drop("m_perpus_komen");
  }
}

module.exports = MPerpusKomenSchema;

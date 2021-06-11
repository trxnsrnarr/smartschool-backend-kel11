"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPerpusTagSchema extends Schema {
  up() {
    this.create("tk_perpus_tag", (table) => {
      table.increments();
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_perpus_tag_id").unsigned().index("m_perpus_tag_id");
      table
        .foreign("m_perpus_tag_id")
        .references("m_perpus_tag.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_perpus_id").unsigned().index("m_perpus_id");
      table
        .foreign("m_perpus_id")
        .references("m_perpus.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_perpus_tag");
  }
}

module.exports = TkPerpusTagSchema;

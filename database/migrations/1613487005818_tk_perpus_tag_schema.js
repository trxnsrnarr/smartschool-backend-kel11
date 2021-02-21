"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPerpusTagSchema extends Schema {
  up() {
    this.create("tk_perpus_tag", (table) => {
      table.increments();
      table.boolean("dihapus");
      table.integer("m_perpus_tag_id").unsigned();
      table.integer("m_perpus_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_perpus_tag");
  }
}

module.exports = TkPerpusTagSchema;

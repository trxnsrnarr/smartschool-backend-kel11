"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPerpusKomenSchema extends Schema {
  up() {
    this.create("m_perpus_komen", (table) => {
      table.increments();
      table.text("komen");
      table.boolean("dihapus");
      table.integer("m_perpus_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_perpus_komen");
  }
}

module.exports = MPerpusKomenSchema;

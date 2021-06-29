"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkTipeSurelSchema extends Schema {
  up() {
    this.create("tk_tipe_surel", (table) => {
      table.increments();
      table.integer("m_surel_id").unsigned().index("m_surel_id");
      table
        .foreign("m_surel_id")
        .references("m_surel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("tipe");
      table.boolean("dibaca").defaultTo(0);
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_tipe_surel");
  }
}

module.exports = TkTipeSurelSchema;

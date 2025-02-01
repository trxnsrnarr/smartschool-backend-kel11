"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTopikSchema extends Schema {
  up() {
    this.create("m_topik", (table) => {
      table.increments();
      table.string("judul");
      table.text("konten");
      table.text("lampiran");
      table.text("link");
      table.boolean("kuis");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_bab_id").unsigned().index("m_bab_id");
      table
        .foreign("m_bab_id")
        .references("m_bab.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_topik");
  }
}

module.exports = MTopikSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBabSchema extends Schema {
  up() {
    this.create("m_bab", (table) => {
      table.increments();
      table.string("judul");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_materi_id").unsigned().index("m_materi_id");
      table
        .foreign("m_materi_id")
        .references("m_materi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_bab");
  }
}

module.exports = MBabSchema;

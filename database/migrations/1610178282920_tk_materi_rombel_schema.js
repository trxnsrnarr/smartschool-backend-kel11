"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkMateriRombelSchema extends Schema {
  up() {
    this.create("tk_materi_rombel", (table) => {
      table.increments();
      table.integer("m_materi_id").unsigned().index("m_materi_id");
      table
        .foreign("m_materi_id")
        .references("m_materi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_materi_rombel");
  }
}

module.exports = TkMateriRombelSchema;

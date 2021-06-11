"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkSoalUjianSchema extends Schema {
  up() {
    this.create("tk_soal_ujian", (table) => {
      table.increments();
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_ujian_id").unsigned().index("m_ujian_id");
      table
        .foreign("m_ujian_id")
        .references("m_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_soal_ujian_id").unsigned().index("m_soal_ujian_id");
      table
        .foreign("m_soal_ujian_id")
        .references("m_soal_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_soal_ujian");
  }
}

module.exports = TkSoalUjianSchema;

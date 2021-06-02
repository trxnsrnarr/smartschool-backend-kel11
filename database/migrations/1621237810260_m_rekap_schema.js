"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekapSchema extends Schema {
  up() {
    this.create("m_rekap", (table) => {
      table.increments();
      table.string("judul");
      table.string("tipe");
      table.integer("m_materi_id").unsigned().index("m_materi_id");
      table
        .foreign("m_materi_id")
        .references("m_materi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_rekap");
  }
}

module.exports = MRekapSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekapSchema extends Schema {
  up() {
    this.hasTable("m_rekap").then((exist) => {
      if (!exist)
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
          table.string("teknik");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_rekap");
  }
}

module.exports = MRekapSchema;

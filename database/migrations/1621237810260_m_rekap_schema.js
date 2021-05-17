"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekapSchema extends Schema {
  up() {
    this.create("m_rekap", (table) => {
      table.increments();
      table.boolean("di_ss");
      table.string("judul");
      table.text("deskripsi");
      table.dateTime("tanggal");
      table.integer("kkm");
      table.integer("dibawahkkm");
      table.string("teknik");
      table.integer("m_materi_id").unsigned().index("m_materi_id");
      table
        .foreign("m_materi_id")
        .references("m_materi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_tugas_id").unsigned().index("m_tugas_id");
      table
        .foreign("m_tugas_id")
        .references("m_tugas.id")
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

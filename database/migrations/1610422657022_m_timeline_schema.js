"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTimelineSchema extends Schema {
  up() {
    this.create("m_timeline", (table) => {
      table.increments();
      table.integer("m_tugas_id").unsigned().index("m_tugas_id");
      table
        .foreign("m_tugas_id")
        .references("m_tugas.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("tipe"); // absen, tugas, diskusi
      table.text("deskripsi"); // diskusi, absen
      table.string("gmeet"); // absen
      table.text("rpp"); // absen
      table.text("jurnal"); // absen
      table.boolean("dihapus").defaultTo(0);
      table.string("lampiran");
      table.datetime("tanggal_dibuat");
      table.datetime("tanggal_pembagian");
      table.datetime("tanggal_akhir");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_timeline");
  }
}

module.exports = MTimelineSchema;

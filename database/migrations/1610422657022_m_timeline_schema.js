"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTimelineSchema extends Schema {
  up() {
    this.create("m_timeline", (table) => {
      table.increments();
      table.integer("m_tugas_id").unsigned();
      table.integer("m_rombel_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.string("tipe"); // absen, tugas, diskusi
      table.text("deskripsi"); // diskusi, absen
      table.string("gmeet"); // absen
      table.text("rpp"); // absen
      table.text("jurnal"); // absen
      table.boolean("dihapus");
      table.string("lampiran");
      table.datetime("tanggal_dibuat");
      table.datetime("tanggal_pembagian");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_timeline");
  }
}

module.exports = MTimelineSchema;

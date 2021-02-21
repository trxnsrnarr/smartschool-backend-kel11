"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkTimelineSchema extends Schema {
  up() {
    this.create("tk_timeline", (table) => {
      table.increments();
      table.string("tipe"); // tugas, absen
      table.text("lampiran"); // tugas
      table.datetime("waktu_pengumpulan"); // tugas
      table.datetime("waktu_absen"); // absen
      table.text("keterangan"); // absen
      table.integer("nilai");
      table.integer("m_user_id").unsigned();
      table.integer("m_timeline_id").unsigned();
      table.string("absen");
      table.boolean("dihapus");
      table.boolean("dikumpulkan");
      table.boolean("dikembalikan");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_timeline");
  }
}

module.exports = TkTimelineSchema;

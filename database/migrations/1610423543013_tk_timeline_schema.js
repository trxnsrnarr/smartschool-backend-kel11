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
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_timeline_id").unsigned().index("m_timeline_id");
      table
        .foreign("m_timeline_id")
        .references("m_timeline.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("absen");
      table.boolean("dihapus").defaultTo(0);
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

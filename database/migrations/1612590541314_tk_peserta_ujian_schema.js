"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkJadwalUjianSiswaSchema extends Schema {
  up() {
    this.create("tk_peserta_ujian", (table) => {
      table.increments();
      table.text("doc_id");
      table.datetime("waktu_mulai");
      table.datetime("waktu_selesai");
      table.integer("nilai");
      table.boolean("selesai");
      table.boolean("dinilai");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("tk_jadwal_ujian_id")
        .unsigned()
        .index("tk_jadwal_ujian_id");
      table
        .foreign("tk_jadwal_ujian_id")
        .references("tk_jadwal_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_peserta_ujian");
  }
}

module.exports = TkJadwalUjianSiswaSchema;

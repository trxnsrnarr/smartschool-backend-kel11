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
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("tk_jadwal_ujian_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_peserta_ujian");
  }
}

module.exports = TkJadwalUjianSiswaSchema;

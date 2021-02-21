"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkJadwalUjianSchema extends Schema {
  up() {
    this.create("tk_jadwal_ujian", (table) => {
      table.increments();
      table.boolean("dihapus");
      table.integer("m_rombel_id").unsigned();
      table.integer("m_jadwal_ujian_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_jadwal_ujian");
  }
}

module.exports = TkJadwalUjianSchema;

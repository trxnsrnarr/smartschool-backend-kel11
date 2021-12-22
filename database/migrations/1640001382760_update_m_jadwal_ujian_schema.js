"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMJadwalUjianSchema extends Schema {
  up() {
    this.table("m_jadwal_ujian", (table) => {
      // alter table
      table.integer("jumlah_menjodohkan");
      table.integer("jumlah_uraian");
      table.integer("jumlah_pg_kompleks");
    });
  }

  down() {
    this.table("m_jadwal_ujian", (table) => {
      // reverse alternations
      table.dropColumn("jumlah_menjodohkan");
      table.dropColumn("jumlah_uraian");
      table.dropColumn("jumlah_pg_kompleks");
    });
  }
}

module.exports = UpdateMJadwalUjianSchema;

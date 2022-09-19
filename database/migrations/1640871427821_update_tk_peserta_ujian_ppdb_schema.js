"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateTkPesertaUjianPpdbSchema extends Schema {
  up() {
    this.table("tk_peserta_ujian_ppdb", (table) => {
      // alter table
      table
        .integer("m_pendaftar_ppdb_id")
        .unsigned()
        .index("m_pendaftar_ppdb_id");
      table
        .foreign("m_pendaftar_ppdb_id")
        .references("m_pendaftar_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("tk_peserta_ujian_ppdb", (table) => {
      // reverse alternations
      table.dropForeign("m_pendaftar_ppdb_id");
      table.dropColumn("m_pendaftar_ppdb_id");
    });
  }
}

module.exports = UpdateTkPesertaUjianPpdbSchema;

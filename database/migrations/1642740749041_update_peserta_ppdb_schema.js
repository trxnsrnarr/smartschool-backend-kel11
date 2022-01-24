"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdatePesertaPpdbSchema extends Schema {
  up() {
    this.table("tk_peserta_ujian_ppdb", (table) => {
      // alter table
      table
        .integer("tk_peserta_ujian_id")
        .unsigned()
        .index("tk_peserta_ujian_id");
      table
        .foreign("tk_peserta_ujian_id")
        .references("tk_peserta_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("tk_peserta_ujian_ppdb", (table) => {
      // reverse alternations
      table.dropForeign("tk_peserta_ujian");
      table.dropColumn("tk_peserta_ujian")
    });
  }
}

module.exports = UpdatePesertaPpdbSchema;

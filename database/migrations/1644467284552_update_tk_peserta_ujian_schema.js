"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateTkPesertaUjianSchema extends Schema {
  up() {
    this.table("tk_peserta_ujian", (table) => {
      // alter table
      table.integer("warning");
    });
  }

  down() {
    this.table("tk_peserta_ujian", (table) => {
      // reverse alternations
      table.dropColumn("warning");
    });
  }
}

module.exports = UpdateTkPesertaUjianSchema;

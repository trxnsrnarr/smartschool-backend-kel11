"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkSoalUjianSchema extends Schema {
  up() {
    this.table("tk_soal_ujian", (table) => {
      table.string("bentuk");
      // alter table
    });
  }

  down() {
    this.table("tk_soal_ujian", (table) => {
      // reverse alternations
    });
  }
}

module.exports = TkSoalUjianSchema;

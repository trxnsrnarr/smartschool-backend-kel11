"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkSoalUjianSchema extends Schema {
  up() {
    this.create("tk_soal_ujian", (table) => {
      table.increments();
      table.boolean("dihapus");
      table.integer("m_ujian_id").unsigned();
      table.integer("m_soal_ujian_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_soal_ujian");
  }
}

module.exports = TkSoalUjianSchema;

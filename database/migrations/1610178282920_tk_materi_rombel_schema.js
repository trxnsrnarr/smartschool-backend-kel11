"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkMateriRombelSchema extends Schema {
  up() {
    this.create("tk_materi_rombel", (table) => {
      table.increments();
      table.integer("m_materi_id").unsigned();
      table.integer("m_rombel_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_materi_rombel");
  }
}

module.exports = TkMateriRombelSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MUjianSchema extends Schema {
  up() {
    this.create("m_ujian", (table) => {
      table.increments();
      table.string("nama");
      table.string("tipe");
      table.string("tingkat");
      table.boolean("dihapus");
      table.integer("m_mata_pelajaran_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_ujian");
  }
}

module.exports = MUjianSchema;

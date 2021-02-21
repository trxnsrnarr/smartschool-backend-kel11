"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRombelSchema extends Schema {
  up() {
    this.create("m_rombel", (table) => {
      table.increments();
      table.string("tingkat");
      table.string("nama");
      table.string("kelompok");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_jurusan_id").unsigned();
      table.integer("m_ta_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_rombel");
  }
}

module.exports = MRombelSchema;

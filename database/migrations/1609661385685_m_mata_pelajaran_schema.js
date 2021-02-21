"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MMataPelajaranSchema extends Schema {
  up() {
    this.create("m_mata_pelajaran", (table) => {
      table.increments();
      table.string("nama");
      table.string("kode");
      table.string("kelompok");
      table.string("kkm");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_ta_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_mata_pelajaran");
  }
}

module.exports = MMataPelajaranSchema;

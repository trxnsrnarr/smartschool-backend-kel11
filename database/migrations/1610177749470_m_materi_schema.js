"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MMateriSchema extends Schema {
  up() {
    this.create("m_materi", (table) => {
      table.increments();
      // iduka
      table.string("nama");
      table.integer("m_user_id").unsigned();
      table.integer("m_sekolah_id").unsigned();

      // init
      table.string("tingkat");
      table.boolean("dihapus");
      table.integer("m_jurusan_id").unsigned();
      table.integer("m_mata_pelajaran_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_materi");
  }
}

module.exports = MMateriSchema;

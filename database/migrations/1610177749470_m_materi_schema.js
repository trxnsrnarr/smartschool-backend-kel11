"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MMateriSchema extends Schema {
  up() {
    this.create("m_materi", (table) => {
      table.increments();
      // iduka
      table.string("nama");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");

      // init
      table.string("tingkat");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_jurusan_id").unsigned().index("m_jurusan_id");
      table
        .foreign("m_jurusan_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_mata_pelajaran_id")
        .unsigned()
        .index("m_mata_pelajaran_id");
      table
        .foreign("m_mata_pelajaran_id")
        .references("m_mata_pelajaran.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_materi");
  }
}

module.exports = MMateriSchema;

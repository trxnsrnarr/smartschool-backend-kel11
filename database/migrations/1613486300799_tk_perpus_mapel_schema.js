"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPerpusMapelSchema extends Schema {
  up() {
    this.create("tk_perpus_mapel", (table) => {
      table.increments();
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
      table.integer("m_perpus_id").unsigned().index("m_perpus_id");
      table
        .foreign("m_perpus_id")
        .references("m_perpus.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_perpus_mapel");
  }
}

module.exports = TkPerpusMapelSchema;

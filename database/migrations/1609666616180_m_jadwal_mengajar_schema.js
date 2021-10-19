"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJadwalMengajarSchema extends Schema {
  up() {
    this.create("m_jadwal_mengajar", (table) => {
      table.increments();
      table.boolean("diubah");
      table
        .integer("m_mata_pelajaran_id")
        .unsigned()
        .index("m_mata_pelajaran_id");
      table
        .foreign("m_mata_pelajaran_id")
        .references("m_mata_pelajaran.id")
        .onDelete("set null")
        .onUpdate("set null");
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_jam_mengajar_id").unsigned().index("m_jam_mengajar_id");
      table
        .foreign("m_jam_mengajar_id")
        .references("m_jam_mengajar.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jadwal_mengajar");
  }
}

module.exports = MJadwalMengajarSchema;

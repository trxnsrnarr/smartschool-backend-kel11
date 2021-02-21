"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJadwalMengajarSchema extends Schema {
  up() {
    this.create("m_jadwal_mengajar", (table) => {
      table.increments();
      table.boolean("diubah");
      table.integer("m_mata_pelajaran_id").unsigned();
      table.integer("m_rombel_id").unsigned();
      table.integer("m_ta_id").unsigned();
      table.integer("m_jam_mengajar_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jadwal_mengajar");
  }
}

module.exports = MJadwalMengajarSchema;

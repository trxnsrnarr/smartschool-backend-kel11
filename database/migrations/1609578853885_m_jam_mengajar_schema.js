"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MWaktuSekolahSchema extends Schema {
  up() {
    this.create("m_jam_mengajar", (table) => {
      table.increments();
      table.integer("kode_hari");
      table.string("hari");
      table.integer("jam_ke");
      table.time("jam_mulai");
      table.time("jam_selesai");
      table.boolean("istirahat");
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
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
    this.drop("m_jam_mengajar");
  }
}

module.exports = MWaktuSekolahSchema;

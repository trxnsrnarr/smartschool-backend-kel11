"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkSoalTugasSchema extends Schema {
  up() {
    this.create("tk_soal_tugas", (table) => {
      table.increments();
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_tugas_id").unsigned().index("m_tugas_id");
      table
        .foreign("m_tugas_id")
        .references("m_tugas.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_soal_ujian_id").unsigned().index("m_soal_ujian_id");
      table
        .foreign("m_soal_ujian_id")
        .references("m_soal_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_soal_tugas");
  }
}

module.exports = TkSoalTugasSchema;

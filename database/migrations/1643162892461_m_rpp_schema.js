"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRppSchema extends Schema {
  up() {
    this.table("m_rpp", (table) => {
      // alter table
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.date("tanggal");
      table.integer("soal");
      table.integer("waktu");
      table.integer("kkm");
      table.string("penyusun"); 
      table.integer("m_ujian_id").unsigned().index("m_ujian_id");
      table
        .foreign("m_ujian_id")
        .references("m_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("m_rpp", (table) => {
      // reverse alternations
    });
  }
}

module.exports = MRppSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MGelombangPpdbSchema extends Schema {
  up() {
    this.create("m_gelombang_ppdb", (table) => {
      table.increments();
      table.string("nama");
      table.integer("biaya_pendaftaran");
      table.datetime("dibuka");
      table.datetime("ditutup");
      table.boolean("dihapus").defaultTo(0);
      table.boolean("tes_akademik");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_ta_id").unsigned().index("m_ta_id");
      table
        .foreign("m_ta_id")
        .references("m_ta.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_gelombang_ppdb");
  }
}

module.exports = MGelombangPpdbSchema;

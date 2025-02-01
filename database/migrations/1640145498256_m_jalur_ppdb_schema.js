"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJalurPpdbSchema extends Schema {
  up() {
    this.create("m_jalur_ppdb", (table) => {
      table.increments();
      table.string("nama");
      table.datetime("dibuka");
      table.datetime("ditutup");
      table.integer("biaya").unsigned();
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jalur_ppdb");
  }
}

module.exports = MJalurPpdbSchema;

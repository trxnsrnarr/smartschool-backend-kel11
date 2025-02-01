"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MMutasiSchema extends Schema {
  up() {
    this.create("m_mutasi", (table) => {
      table.increments();
      table.string("tipe");
      table.string("nama");
      table.string("kategori");
      table.string("nominal");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.datetime("waktu_dibuat");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_mutasi");
  }
}

module.exports = MMutasiSchema;

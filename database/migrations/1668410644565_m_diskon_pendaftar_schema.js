"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MDiskonPendaftarSchema extends Schema {
  up() {
    this.create("m_diskon_pendaftar", (table) => {
      table.increments();
      table
        .integer("m_pendaftar_ppdb_id")
        .unsigned()
        .index("m_pendaftar_ppdb_id");
      table
        .foreign("m_pendaftar_ppdb_id")
        .references("m_pendaftar_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("diskon");
      table.integer("harga");
      table.integer("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_diskon_pendaftar");
  }
}

module.exports = MDiskonPendaftarSchema;

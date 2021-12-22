"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MInformasiGelombangSchema extends Schema {
  up() {
    this.create("m_informasi_gelombang", (table) => {
      table.increments();
      table.string("tipe");
      table.string("nama");
      table.datetime("pengumuman");
      table.datetime("dibuka");
      table.datetime("ditutup");
      table
        .integer("m_gelombang_ppdb_id")
        .unsigned()
        .index("m_gelombang_ppdb_id");
      table
        .foreign("m_gelombang_ppdb_id")
        .references("m_gelombang_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_informasi_gelombang");
  }
}

module.exports = MInformasiGelombangSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MInformasiJalurPpdbSchema extends Schema {
  up() {
    this.create("m_informasi_jalur_ppdb", (table) => {
      table.increments();
      table.string("tipe");
      table.string("nama");
      table.text("deskripsi");
      table.text("biaya");
      table.integer("m_jalur_ppdb_id").unsigned().index("m_jalur_ppdb_id");
      table
        .foreign("m_jalur_ppdb_id")
        .references("m_jalur_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_informasi_jalur_ppdb");
  }
}

module.exports = MInformasiJalurPpdbSchema;

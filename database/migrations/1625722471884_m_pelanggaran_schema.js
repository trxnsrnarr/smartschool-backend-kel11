"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPelanggaranSchema extends Schema {
  up() {
    this.hasTable("m_pelanggaran").then((exist) => {
      if (!exist)
        this.create("m_pelanggaran", (table) => {
          table.increments();
          table.string("nama");
          table
            .integer("m_kategori_pelanggaran_id")
            .unsigned()
            .index("m_kategori_pelanggaran_id");
          table
            .foreign("m_kategori_pelanggaran_id")
            .references("m_kategori_pelanggaran.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("poin");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_pelanggaran");
  }
}

module.exports = MPelanggaranSchema;

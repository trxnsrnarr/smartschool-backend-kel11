"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKategoriPelanggaranSchema extends Schema {
  up() {
    this.hasTable("m_kategori_pelanggaran").then((exist) => {
      if (!exist)
        this.create("m_kategori_pelanggaran", (table) => {
          table.increments();
          table.string("nama");
          table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
          table
            .foreign("m_sekolah_id")
            .references("m_sekolah.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_kategori_pelanggaran");
  }
}

module.exports = MKategoriPelanggaranSchema;

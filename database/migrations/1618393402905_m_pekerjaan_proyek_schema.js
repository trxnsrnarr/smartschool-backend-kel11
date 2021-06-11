"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPekerjaanProyekSchema extends Schema {
  up() {
    this.create("m_pekerjaan_proyek", (table) => {
      table.increments();
      table.string("judul");
      table.string("prioritas");
      table.string("status");
      table.datetime("batas_waktu");
      table.text("deskripsi");
      table
        .integer("m_kategori_pekerjaan_id")
        .unsigned()
        .index("m_kategori_pekerjaan_id");
      table
        .foreign("m_kategori_pekerjaan_id")
        .references("m_kategori_pekerjaan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.integer("urutan");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pekerjaan_proyek");
  }
}

module.exports = MPekerjaanProyekSchema;

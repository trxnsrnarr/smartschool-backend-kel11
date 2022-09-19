"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPekerjaanPengumumanSchema extends Schema {
  up() {
    this.hasTable("m_pekerjaan_pengumuman").then((exist) => {
      if (!exist)
        this.create("m_pekerjaan_pengumuman", (table) => {
          table.increments();
          table.string("judul");
          table.integer("m_pekerjaan_id").unsigned().index("m_pekerjaan_id");
          table
            .foreign("m_pekerjaan_id")
            .references("m_pekerjaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.text("deskripsi");
          table.text("file");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_pekerjaan_pengumuman");
  }
}

module.exports = MPekerjaanPengumumanSchema;

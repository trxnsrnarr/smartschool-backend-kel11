"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPraktikKerjaSchema extends Schema {
  up() {
    this.create("m_praktik_kerja", (table) => {
      table.increments();
      table.string("nama");
      table.string("siswa");
      table.string("surat_tugas");
      table.string("mou");
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
    this.drop("m_praktik_kerja");
  }
}

module.exports = MPraktikKerjaSchema;

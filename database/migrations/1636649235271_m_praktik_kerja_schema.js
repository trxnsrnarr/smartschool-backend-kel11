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
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_praktik_kerja");
  }
}

module.exports = MPraktikKerjaSchema;

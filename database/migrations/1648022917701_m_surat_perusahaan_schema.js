"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSuratPerusahaanSchema extends Schema {
  up() {
    this.create("m_surat_perusahaan", (table) => {
      table.increments();
      table.string("nama");
      table.text("lampiran");
      table.boolean("dihapus").defaultTo(0);
      table
        .integer("tk_perusahaan_sekolah_id")
        .unsigned()
        .index("tk_perusahaan_sekolah_id");
      table
        .foreign("tk_perusahaan_sekolah_id")
        .references("tk_perusahaan_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_surat_perusahaan");
  }
}

module.exports = MSuratPerusahaanSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPekerjaanSchema extends Schema {
  up() {
    this.create("m_pekerjaan", (table) => {
      table.increments();
      table.string("nama");
      table.integer("m_perusahaan_id").unsigned().index("m_perusahaan_id");
      table
        .foreign("m_perusahaan_id")
        .references("m_perusahaan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.text("jenis");
      table.string("bidang");
      table.string("kontrak_kerja");
      table.datetime("mulai_kerja");
      table.datetime("akhir_kerja");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pekerjaan");
  }
}

module.exports = MPekerjaanSchema;

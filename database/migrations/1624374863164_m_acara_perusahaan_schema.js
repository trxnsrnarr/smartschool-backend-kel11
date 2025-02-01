"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAcaraPerusahaanSchema extends Schema {
  up() {
    this.hasTable("m_acara_perusahaan").then((exist) => {
      if (!exist)
        this.create("m_acara_perusahaan", (table) => {
          table.increments();
          table.string("judul");
          table.integer("m_perusahaan_id").unsigned().index("m_perusahaan_id");
          table
            .foreign("m_perusahaan_id")
            .references("m_perusahaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.text("foto");
          table.string("lokasi");
          table.text("deskripsi");
          table.datetime("waktu_awal");
          table.datetime("waktu_akhir");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_acara_perusahaan");
  }
}

module.exports = MAcaraPerusahaanSchema;

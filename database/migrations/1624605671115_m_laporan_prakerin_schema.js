"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MLaporanPrakerinSchema extends Schema {
  up() {
    this.hasTable("m_laporan_prakerin").then((exist) => {
      if (!exist)
        this.create("m_laporan_prakerin", (table) => {
          table.increments();
          table.string("judul");
          table.datetime("waktu_mulai");
          table.datetime("waktu_akhir");
          table.text("deskripsi");
          table.text("lampiran");
          table.integer("nilai");
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_laporan_prakerin");
  }
}

module.exports = MLaporanPrakerinSchema;

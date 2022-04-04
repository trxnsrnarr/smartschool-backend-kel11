"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MMouPerusahaanSchema extends Schema {
  up() {
    this.create("m_mou_perusahaan", (table) => {
      table.increments();
      table.string("nama")
      table.date("mulai_kontrak");
      table.date("akhir_kontrak");
      table.text("kerjasama");
      table.text("fasilitas");
      table.text("lampiran");
      table.boolean("status");
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
    this.drop("m_mou_perusahaan");
  }
}

module.exports = MMouPerusahaanSchema;

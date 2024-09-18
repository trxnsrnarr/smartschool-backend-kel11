"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPekerjaanSchema extends Schema {
  up() {
    this.hasTable("m_pekerjaan").then((exist) => {
      if (!exist)
        this.create("m_pekerjaan", (table) => {
          table.increments();
          table.string("judul");
          table.integer("m_perusahaan_id").unsigned().index();
          table
            .foreign("m_perusahaan_id")
            .references("m_perusahaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("jumlah_lowongan");
          table.text("jenis");
          table.string("bidang");
          table.string("kontrak_kerja");
          table.datetime("mulai_kerja");
          table.datetime("akhir_kerja");
          table.string("province_id", 2).index();
          table.string("regency_id", 4).index();
          table.string("district_id", 7).index();
          table.string("village_id", 10).index();
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_pekerjaan");
  }
}

module.exports = MPekerjaanSchema;

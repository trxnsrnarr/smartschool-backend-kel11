"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MInformasiPekerjaanSchema extends Schema {
  up() {
    this.hasTable("m_informasi_pekerjaan").then((exist) => {
      if (!exist)
        this.create("m_informasi_pekerjaan", (table) => {
          table.increments();
          table.integer("m_pekerjaan_id").unsigned().index("m_pekerjaan_id");
          table
            .foreign("m_pekerjaan_id")
            .references("m_pekerjaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("pengalaman");
          table.datetime("batas_pengiriman");
          table.string("pendidikan");
          table.text("detail_pendidikan");
          table.string("keahlian");
          table.text("deskripsi");
          table.text("persyaratan_khusus");
          table.string("range_gaji");
          table.string("status_jurusan");
          table.text("jurusan");
          table.enu("gender", ["L", "P"]);
          table.integer("tb");
          table.integer("usia_minimal");
          table.integer("usia_maksimal");
          table.text("alamat");
          table.string("kodepos");
          table.boolean("khusus_alumni");
          table.boolean("khusus_difabel");
          table.boolean("buta_warna");
          table.boolean("kacamata");
          table.boolean("tes");
          table.text("lokasi_tes");
          table.boolean("kelengkapan_data");
          table.boolean("data_nilai");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_informasi_pekerjaan");
  }
}

module.exports = MInformasiPekerjaanSchema;

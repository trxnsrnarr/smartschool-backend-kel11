"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MInformasiPerusahaanSchema extends Schema {
  up() {
    this.hasTable("m_informasi_perusahaan").then((exist) => {
      if (!exist)
        this.create("m_informasi_perusahaan", (table) => {
          table.increments();
          table.integer("m_perusahaan_id").unsigned().index("m_perusahaan_id");
          table
            .foreign("m_perusahaan_id")
            .references("m_perusahaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("didirikan");
          table.text("alamat");
          table.string("telepon");
          table.string("situs");
          table.string("jumlah_pekerja");
          table.text("tentang");
          table.text("budaya");
          table.text("benefit_karyawan");
          table.string("lingkungan_kerja");
          table.string("busana");
          table.string("budaya_kerja");
          table.string("jam_kerja");
          table.string("nama_pj");
          table.string("telepon_pj");
          table.string("email_pj");
          table.datetime("registrasi_pj");
          table.text("youtube");
          table.text("twitter");
          table.text("instagram");
          table.text("facebook");
          table.text("github");
          table.text("linkedin");
          table.text("behace");
          table.text("dribble");
          table.string("kodepos");
          table.text("sampul");
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_informasi_perusahaan");
  }
}

module.exports = MInformasiPerusahaanSchema;

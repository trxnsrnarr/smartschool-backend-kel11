"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSekolahSchema extends Schema {
  up() {
    this.create("m_sekolah", (table) => {
      table.increments();
      table.string("logo");
      table.text("domain");
      table.text("logo_ss");
      table.text("favicon");
      table.string("integrasi");
      table.boolean("diintegrasi");
      table.string("kode_prop");
      table.string("propinsi");
      table.string("kode_kab_kota");
      table.string("kabupaten_kota");
      table.string("kode_kec");
      table.string("kecamatan");
      table.string("kelurahan");
      table.string("npsn");
      table.string("nama");
      table.string("tingkat");
      table.string("status");
      table.string("alamat");
      table.boolean("trial").defaultTo(0);
      table.boolean("gpds").defaultTo(0);
      table.string("lintang");
      table.string("bujur");
      table.integer("sekolah_id").unsigned().index("sekolah_id");
      table
        .foreign("sekolah_id")
        .references("sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
        table.string('gpds_event')
        table.integer('jumlah_ujian')
        table.integer('jumlah_topik')
      table.timestamps();
    });
  }

  down() {
    this.drop("m_sekolah");
  }
}

module.exports = MSekolahSchema;

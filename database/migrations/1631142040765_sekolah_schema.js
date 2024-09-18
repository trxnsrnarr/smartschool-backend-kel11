"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SekolahSchema extends Schema {
  up() {
    this.create("sekolah", (table) => {
      table.increments();
      table.string("kode_prop");
      table.string("propinsi");
      table.string("kode_kab_kota");
      table.string("kabupaten_kota");
      table.string("kode_kec");
      table.string("kecamatan");
      table.string("uuid");
      table.string("npsn");
      table.string("sekolah");
      table.string("bentuk");
      table.string("status");
      table.string("alamat_jalan");
      table.string("lintang");
      table.string("bujur");
      table.timestamps();
    });
  }

  down() {
    this.drop("sekolah");
  }
}

module.exports = SekolahSchema;
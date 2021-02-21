"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSekolahSchema extends Schema {
  up() {
    this.create("m_sekolah", (table) => {
      table.increments();
      table.string("npsn");
      table.string("nama");
      table.string("provinsi");
      table.string("kabupaten");
      table.string("kecamatan");
      table.string("kelurahan");
      table.text("alamat");
      table.string("kode_pos");
      table.string("status");
      table.string("telp");
      table.string("email");
      table.string("logo");
      table.string("domain");
      table.string("tingkat");
      table.string("integrasi");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_sekolah");
  }
}

module.exports = MSekolahSchema;

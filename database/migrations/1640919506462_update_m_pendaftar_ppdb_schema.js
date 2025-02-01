"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMPendaftarPpdbSchema extends Schema {
  up() {
    this.table("m_pendaftar_ppdb", (table) => {
      // alter table
      table.text("surat_rekomendasi");
    });
  }

  down() {
    this.table("m_pendaftar_ppdb", (table) => {
      // reverse alternations
      table.dropColumn("surat_rekomendasi");
    });
  }
}

module.exports = UpdateMPendaftarPpdbSchema;

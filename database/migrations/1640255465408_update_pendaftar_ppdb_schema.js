"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdatePendaftarPpdbSchema extends Schema {
  up() {
    this.table("m_pendaftar_ppdb", (table) => {
      // alter table
      table.string("status");
      table.text("pembayaran");
    });
  }

  down() {
    this.table("m_pendaftar_ppdb", (table) => {
      // reverse alternations
      table.dropColumn("status");
      table.dropColumn("pembayaran");
    });
  }
}

module.exports = UpdatePendaftarPpdbSchema;

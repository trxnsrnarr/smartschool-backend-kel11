"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateGelombangPpdbSchema extends Schema {
  up() {
    this.table("m_gelombang_ppdb", (table) => {
      // alter table
      table.string("nama_akun");
      table.string("norek");
      table.string("bank");
    });
  }

  down() {
    this.table("m_gelombang_ppdb", (table) => {
      // reverse alternations
      table.dropColumn("nama_akun");
      table.dropColumn("norek");
      table.dropColumn("bank");
    });
  }
}

module.exports = UpdateGelombangPpdbSchema;

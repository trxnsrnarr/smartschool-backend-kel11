"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMGelombangPpdbSchema extends Schema {
  up() {
    this.table("m_gelombang_ppdb", (table) => {
      // alter table
      table.integer("diterima").unsigned();
    });
  }

  down() {
    this.table("m_gelombang_ppdb", (table) => {
      // reverse alternations
      table.dropColumn("diterima");
    });
  }
}

module.exports = UpdateMGelombangPpdbSchema;

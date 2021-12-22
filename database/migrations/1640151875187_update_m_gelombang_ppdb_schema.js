"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMGelombangPpdbSchema extends Schema {
  up() {
    this.table("m_gelombang_ppdb", (table) => {
      // alter table
      table.integer("m_jalur_ppdb_id").unsigned().index("m_jalur_ppdb_id");
      table
        .foreign("m_jalur_ppdb_id")
        .references("m_jalur_ppdb.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("m_gelombang_ppdb", (table) => {
      // reverse alternations
      table.dropForeign("m_jalur_ppdb_id");
      table.dropColumn("m_jalur_ppdb_id");
    });
  }
}

module.exports = UpdateMGelombangPpdbSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateRencanaKeuanganSchema extends Schema {
  up() {
    this.table("m_rencana_keuangan", (table) => {
      // alter table
      table.dropColumn("aktif");
    });
  }

  down() {
    this.table("m_rencana_keuangan", (table) => {
      // reverse alternations
    });
  }
}

module.exports = UpdateRencanaKeuanganSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateRencanaAktivitasTransaksiSchema extends Schema {
  up() {
    this.table("m_rencana_aktivitas_trx", (table) => {
      table.boolean("laba").defaultTo(0);

      // alter table
    });
  }

  down() {
    this.table("m_rencana_aktivitas_trx", (table) => {
      table.dropColumn("laba");

      // reverse alternations
    });
  }
}

module.exports = UpdateRencanaAktivitasTransaksiSchema;

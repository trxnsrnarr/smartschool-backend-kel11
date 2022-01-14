"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMKeuAktivitasTransaksiSchema extends Schema {
  up() {
    this.table("m_keu_aktivitas_transaksi", (table) => {
      // alter table
      table.boolean("laba").defaultTo(0);
    });
  }

  down() {
    this.table("m_keu_aktivitas_transaksi", (table) => {
      // reverse alternations
      table.dropColumn("laba");
    });
  }
}

module.exports = UpdateMKeuAktivitasTransaksiSchema;

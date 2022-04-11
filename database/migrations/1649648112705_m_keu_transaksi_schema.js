"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuTransaksiSchema extends Schema {
  up() {
    this.table("m_keu_transaksi", (table) => {
      // alter table
      table.boolean("status");
    });
  }

  down() {
    this.table("m_keu_transaksi", (table) => {
      // reverse alternations
    });
  }
}

module.exports = MKeuTransaksiSchema;

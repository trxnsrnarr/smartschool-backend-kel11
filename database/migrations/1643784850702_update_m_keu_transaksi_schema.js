"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMKeuTransaksiSchema extends Schema {
  up() {
    this.table("m_keu_transaksi", (table) => {
      // alter table
      table
        .integer("m_rencana_transaksi_id")
        .unsigned()
        .index("m_rencana_transaksi_id");
      table
        .foreign("m_rencana_transaksi_id")
        .references("m_rencana_transaksi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("m_keu_transaksi", (table) => {
      // reverse alternations
      table.dropForeign("m_rencana_transaksi_id");
      table.dropColumn("m_rencana_transaksi_id");
    });
  }
}

module.exports = UpdateMKeuTransaksiSchema;

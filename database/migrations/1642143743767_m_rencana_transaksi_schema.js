"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRencanaTransaksiSchema extends Schema {
  up() {
    this.create("m_rencana_transaksi", (table) => {
      table.increments();
      table.string("nama");
      table.datetime("tanggal");
      table.string("nomor");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_rencana_keuangan_id")
        .unsigned()
        .index("m_rencana_keuangan_id");
      table
        .foreign("m_rencana_keuangan_id")
        .references("m_rencana_keuangan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_rencana_transaksi");
  }
}

module.exports = MRencanaTransaksiSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuTransaksiSchema extends Schema {
  up() {
    this.create("m_keu_transaksi", (table) => {
      table.increments();
      table.string("nama");
      table.date("tanggal");
      table.string("nomor");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_transaksi");
  }
}

module.exports = MKeuTransaksiSchema;

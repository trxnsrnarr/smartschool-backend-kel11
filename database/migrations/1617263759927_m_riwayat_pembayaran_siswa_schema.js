"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRiwayatPembayaranSiswaSchema extends Schema {
  up() {
    this.create("m_riwayat_pembayaran_siswa", (table) => {
      table.increments();
      table.string("bank");
      table.string("norek");
      table.string("nama_pemilik");
      table.string("nominal");
      table.text("bukti");
      table.boolean("dikonfirmasi");
      table.boolean("dihapus").defaultTo(0);
      table
        .integer("m_pembayaran_siswa_id")
        .unsigned()
        .index("m_pembayaran_siswa_id");
      table
        .foreign("m_pembayaran_siswa_id")
        .references("m_pembayaran_siswa.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_riwayat_pembayaran_siswa");
  }
}

module.exports = MRiwayatPembayaranSiswaSchema;

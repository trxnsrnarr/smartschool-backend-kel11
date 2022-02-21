"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MDokumenPembayaranSekolahSchema extends Schema {
  up() {
    this.create("m_dokumen_pembayaran_sekolah", (table) => {
      table.increments();
      table.string("nama");
      table.string("jenis");
      table.text("lampiran");
      table.datetime("tanggal");
      table.integer("m_pembayaran_sekolah_id").unsigned().index("m_pembayaran_sekolah_id");
      table
        .foreign("m_pembayaran_sekolah_id")
        .references("m_pembayaran_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_dokumen_pembayaran_sekolah");
  }
}

module.exports = MDokumenPembayaranSekolahSchema;

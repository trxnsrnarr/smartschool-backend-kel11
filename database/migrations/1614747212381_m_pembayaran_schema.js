"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPembayaranSchema extends Schema {
  up() {
    this.create("m_pembayaran", (table) => {
      table.increments();
      table.string("nama");
      table.string("jenis");
      table.string("bulan"); // spp
      table.string("tipe_ujian"); // ujian
      table.integer("nominal");
      table.datetime("tanggal_dibuat");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pembayaran");
  }
}

module.exports = MPembayaranSchema;

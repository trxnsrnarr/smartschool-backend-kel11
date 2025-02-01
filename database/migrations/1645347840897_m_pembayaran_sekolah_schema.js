"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPembayaranSekolahSchema extends Schema {
  up() {
    this.create("m_pembayaran_sekolah", (table) => {
      table.increments();
      table.string("nama");
      table.date("mulai_kontrak");
      table.date("akhir_kontrak");
      table.integer("jumlah_pembayaran");
      table.boolean("smarteschool").defaultTo(0);
      table.boolean("internet").defaultTo(0);
      table.boolean("face_recog").defaultTo(0);
      table.boolean("stand_fr").defaultTo(0);
      table.integer("jumlah_pengguna");
      table.integer("jumlah_fr");
      table.integer("jumlah_stand");
      table.integer("ukuran_bandwidth");
      table.integer("invoice_bulan");
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
    this.drop("m_pembayaran_sekolah");
  }
}

module.exports = MPembayaranSekolahSchema;

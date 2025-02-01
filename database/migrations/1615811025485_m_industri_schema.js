"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MIndustriSchema extends Schema {
  up() {
    this.create("m_industri", (table) => {
      table.increments();
      table.string("nama");
      table.string("klasifikasi");
      table.string("jumlah_karyawan");
      table.text("tautan");
      table.text("galeri");
      table.text("deskripsi");
      table.string("tahun_kerjasama");
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
    this.drop("m_industri");
  }
}

module.exports = MIndustriSchema;

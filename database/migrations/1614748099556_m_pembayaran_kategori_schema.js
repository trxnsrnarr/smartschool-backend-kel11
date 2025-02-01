"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPembayaranKategoriSchema extends Schema {
  up() {
    this.create("m_pembayaran_kategori", (table) => {
      table.increments();
      table.string("kategori");
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
    this.drop("m_pembayaran_kategori");
  }
}

module.exports = MPembayaranKategoriSchema;

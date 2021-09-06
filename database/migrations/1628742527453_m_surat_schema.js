"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSuratSchema extends Schema {
  up() {
    this.create("m_surat", (table) => {
      table.increments();
      table.string("tipe");
      table.string("kode");
      table.string("asal");
      table.string("nomor");
      table.date("tanggal");
      table.string("perihal");
      table.string("keamanan");
      table.string("isi");
      table.string("file");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("teruskan").defaultTo(0);
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_surat");
  }
}

module.exports = MSuratSchema;

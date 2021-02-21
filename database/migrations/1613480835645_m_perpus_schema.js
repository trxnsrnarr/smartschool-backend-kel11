"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPerpusSchema extends Schema {
  up() {
    this.create("m_perpus", (table) => {
      table.increments();
      table.string("judul");
      table.text("deskripsi");
      table.text("penulis");
      table.text("cover");
      table.string("penerbit");
      table.string("tahun_terbit");
      table.string("isbn");
      table.boolean("draft");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_buku_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_perpus");
  }
}

module.exports = MPerpusSchema;

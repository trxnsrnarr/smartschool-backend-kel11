"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKategoriSchema extends Schema {
  up() {
    this.create("m_kategori", (table) => {
      table.increments();
      table.string("judul");
      table.string("slug");
      table.boolean("dihapus");
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kategori");
  }
}

module.exports = MKategoriSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKategoriPekerjaanSchema extends Schema {
  up() {
    this.create("m_kategori_pekerjaan", (table) => {
      table.increments();
      table.string("nama");
      table.string("warna");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_proyek_id").unsigned().index("m_proyek_id");
      table
        .foreign("m_proyek_id")
        .references("m_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("urutan");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kategori_pekerjaan");
  }
}

module.exports = MKategoriPekerjaanSchema;

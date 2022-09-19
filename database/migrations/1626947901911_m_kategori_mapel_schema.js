"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKategoriMapelSchema extends Schema {
  up() {
    this.create("m_kategori_mapel", (table) => {
      table.increments();
      table.string("nama");
      table.string("warna");
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kategori_mapel");
  }
}

module.exports = MKategoriMapelSchema;

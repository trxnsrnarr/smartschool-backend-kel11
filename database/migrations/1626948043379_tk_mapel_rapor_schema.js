"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkMapelRaporSchema extends Schema {
  up() {
    this.create("tk_mapel_rapor", (table) => {
      table.increments();
      table.string("nama");
      table.integer("kkm2");
      table
        .integer("m_mata_pelajaran_id")
        .unsigned()
        .index("m_mata_pelajaran_id");
      table
        .foreign("m_mata_pelajaran_id")
        .references("m_mata_pelajaran.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_kategori_mapel_id")
        .unsigned()
        .index("m_kategori_mapel_id");
      table
        .foreign("m_kategori_mapel_id")
        .references("m_kategori_mapel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("urutan");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_mapel_rapor");
  }
}

module.exports = TkMapelRaporSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTesPekerjaanSchema extends Schema {
  up() {
    this.create("m_tes_pekerjaan", (table) => {
      table.increments();
      table.integer("m_pekerjaan_id").unsigned().index("m_pekerjaan_id");
      table
        .foreign("m_pekerjaan_id")
        .references("m_pekerjaan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("tipe")
      table.time("waktu_mulai");
      table.time("waktu_akhir");
      table.string("lokasi");
      table.string("link");
      table.string("keterangan");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_tes_pekerjaan");
  }
}

module.exports = MTesPekerjaanSchema;

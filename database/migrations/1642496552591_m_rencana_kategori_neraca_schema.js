"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRencanaKategoriNeracaSchema extends Schema {
  up() {
    this.create("m_rencana_kategori_neraca", (table) => {
      table.increments();
      table.string("tipe");
      table.string("nama");
      table.string("warna");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_rencana_keuangan_id")
        .unsigned()
        .index("m_rencana_keuangan_id");
      table
        .foreign("m_rencana_keuangan_id")
        .references("m_rencana_keuangan.id")
        .onDelete("cascade")
        .onUpdate("cascade");

      table.timestamps();
    });
  }

  down() {
    this.drop("m_rencana_kategori_neraca");
  }
}

module.exports = MRencanaKategoriNeracaSchema;

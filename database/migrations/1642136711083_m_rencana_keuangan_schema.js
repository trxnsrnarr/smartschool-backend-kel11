"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRencanaKeuanganSchema extends Schema {
  up() {
    this.create("m_rencana_keuangan", (table) => {
      table.increments();
      table.string("nama");
      table.date("tanggal_awal");
      table.date("tanggal_akhir");
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
    this.drop("m_rencana_keuangan");
  }
}

module.exports = MRencanaKeuanganSchema;

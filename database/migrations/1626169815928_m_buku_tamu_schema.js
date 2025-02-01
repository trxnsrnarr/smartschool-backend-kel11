"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBukuTamuSchema extends Schema {
  up() {
    this.create("m_buku_tamu", (table) => {
      table.increments();
      table.string("nama");
      table.integer("no_hp");
      table.string("instansi");
      table.string("bidang");
      table.string("alamat");
      table.string("province_id", 2).index("province_id");
      table.string("regency_id", 4).index("regency_id");
      table.string("kodepos");
      table.string("keterangan");
      table.string("ttd");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_buku_tamu");
  }
}

module.exports = MBukuTamuSchema;

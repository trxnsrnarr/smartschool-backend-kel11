"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MtaSchema extends Schema {
  up() {
    this.create("m_ta", (table) => {
      table.increments();
      table.string("tahun");
      table.string("semester");
      table.string("nama_kepsek");
      table.string("nip_kepsek");
      table.date("tanggaL_awal");
      table.date("tanggaL_keluar");
      table.boolean("aktif");
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
    this.drop("m_ta");
  }
}

module.exports = MtaSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSanksiPelanggaranSchema extends Schema {
  up() {
    this.create("m_sanksi_pelanggaran", (table) => {
      table.increments();
      table.string("nama");
      table.integer("poin_bawah");
      table.integer("poin_atas");
      table.string("tindak_lanjut");
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
    this.drop("m_sanksi_pelanggaran");
  }
}

module.exports = MSanksiPelanggaranSchema;

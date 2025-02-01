"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBuktiPelaksanaanSanksiSchema extends Schema {
  up() {
    this.create("m_bukti_pelaksanaan_sanksi", (table) => {
      table.increments();
      table.text("link");
      table.text("lampiran");
      table.integer("m_sanksi_siswa_id").unsigned().index("m_sanksi_siswa_id");
      table
        .foreign("m_sanksi_siswa_id")
        .references("m_sanksi_siswa.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("konfirmasi");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_bukti_pelaksanaan_sanksi");
  }
}

module.exports = MBuktiPelaksanaanSanksiSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJurusanSchema extends Schema {
  up() {
    this.create("m_jurusan", (table) => {
      table.increments();
      table.string("nama");
      table.string("kode");
      table.integer("spp");
      table.integer("sumbangan_sarana_pendidikan");
      table.integer("kegiatan_osis");
      table.integer("mpls_jas_almamater");
      table.integer("seragam_sekolah");
      table.integer("toolkit_praktek");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("alumni");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jurusan");
  }
}

module.exports = MJurusanSchema;

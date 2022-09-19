"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPerusahaanSekolahSchema extends Schema {
  up() {
    this.hasTable("tk_perusahaan_sekolahs").then((exist) => {
      if (!exist)
        this.create("tk_perusahaan_sekolahs", (table) => {
          table.increments();
          table.integer("m_perusahaan_id").unsigned().index("m_perusahaan_id");
          table
            .foreign("m_perusahaan_id")
            .references("m_perusahaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
          table
            .foreign("m_sekolah_id")
            .references("m_sekolah.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("status");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("tk_perusahaan_sekolahs");
  }
}

module.exports = TkPerusahaanSekolahSchema;

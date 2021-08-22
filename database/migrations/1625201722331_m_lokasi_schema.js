"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MLokasiSchema extends Schema {
  up() {
    this.hasTable("m_lokasi").then((exist) => {
      if (!exist)
        this.create("m_lokasi", (table) => {
          table.increments();
          table.string("jenis");
          table.string("no_regis");
          table.string("nama");
          table.float("lebar", [11, 1]);
          table.float("panjang", [11, 1]);
          table.text('foto')
          table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
          table
            .foreign("m_sekolah_id")
            .references("m_sekolah.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_lokasi");
  }
}

module.exports = MLokasiSchema;

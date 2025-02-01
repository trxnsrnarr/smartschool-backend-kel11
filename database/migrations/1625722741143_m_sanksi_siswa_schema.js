"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSanksiSiswaSchema extends Schema {
  up() {
    this.hasTable("m_sanksi_siswa").then((exist) => {
      if (!exist)
        this.create("m_sanksi_siswa", (table) => {
          table.increments();
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table
            .integer("m_sanksi_pelanggaran_id")
            .unsigned()
            .index("m_sanksi_pelanggaran_id");
          table
            .foreign("m_sanksi_pelanggaran_id")
            .references("m_sanksi_pelanggaran.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("keterangan");
          table.string("lampiran");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_sanksi_siswa");
  }
}

module.exports = MSanksiSiswaSchema;

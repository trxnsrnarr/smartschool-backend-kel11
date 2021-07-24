"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkSiswaPelanggaranSchema extends Schema {
  up() {
    this.hasTable("tk_siswa_pelanggaran").then((exist) => {
      if (!exist)
        this.create("tk_siswa_pelanggaran", (table) => {
          table.increments();
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table
            .integer("m_pelanggaran_id")
            .unsigned()
            .index("m_pelanggaran_id");
          table
            .foreign("m_pelanggaran_id")
            .references("m_pelanggaran.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table
            .integer("m_user_pelapor_id")
            .unsigned()
            .index("m_user_pelapor_id");
          table
            .foreign("m_user_pelapor_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("catatan");
          table.datetime("tanggal_pelanggaran");
          table.integer("poin");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("tk_siswa_pelanggaran");
  }
}

module.exports = TkSiswaPelanggaranSchema;

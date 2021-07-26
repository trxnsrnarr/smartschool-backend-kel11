"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekapRombelSchema extends Schema {
  up() {
    this.hasTable("m_rekap_rombel").then((exist) => {
      if (!exist)
        this.create("m_rekap_rombel", (table) => {
          table.increments();
          table.boolean("di_ss");
          table.string("judul");
          table.dateTime("tanggal");
          table.string("teknik");
          table.integer("m_rombel_id").unsigned().index("m_rombel_id");
          table
            .foreign("m_rombel_id")
            .references("m_rombel.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_tugas_id").unsigned().index("m_tugas_id");
          table
            .foreign("m_tugas_id")
            .references("m_tugas.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_rekap_id").unsigned().index("m_rekap_id");
          table
            .foreign("m_rekap_id")
            .references("m_rekap.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_rekap_rombel");
  }
}

module.exports = MRekapRombelSchema;

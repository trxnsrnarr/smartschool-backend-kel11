"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkRekapNilaiSchema extends Schema {
  up() {
    this.hasTable("tk_rekap_nilai").then((exist) => {
      if (!exist)
        this.create("tk_rekap_nilai", (table) => {
          table.increments();
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("nilai");
          table
            .integer("m_rekap_rombel_id")
            .unsigned()
            .index("m_rekap_rombel_id");
          table
            .foreign("m_rekap_rombel_id")
            .references("m_rekap_rombel.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("tk_rekap_nilai");
  }
}

module.exports = TkRekapNilaiSchema;

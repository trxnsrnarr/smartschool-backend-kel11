"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeteranganRaporSchema extends Schema {
  up() {
    this.hasTable("m_keterangan_rapor").then((exist) => {
      if (!exist)
        this.create("m_keterangan_rapor", (table) => {
          table.increments();
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_ta_id").unsigned().index("m_ta_id");
          table
            .foreign("m_ta_id")
            .references("m_ta.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("catatan");
          table.string("kelulusan");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_keterangan_rapor");
  }
}

module.exports = MKeteranganRaporSchema;

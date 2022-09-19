"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSiswaSchema extends Schema {
  up() {
    this.hasTable("m_sikap_siswa").then((exist) => {
      if (!exist)
        this.create("m_sikap_siswa", (table) => {
          table.increments();
          table.string("tipe");
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("m_sikap_sosial_ditunjukkan_id");
          table.string("m_sikap_sosial_ditingkatkan_id");
          table.string("m_sikap_spiritual_ditunjukkan_id");
          table.string("m_sikap_spiritual_ditingkatkan_id");
          table.boolean("status");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_sikap_siswa");
  }
}

module.exports = MSikapSiswaSchema;

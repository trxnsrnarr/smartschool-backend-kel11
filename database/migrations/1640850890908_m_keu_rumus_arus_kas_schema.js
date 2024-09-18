"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuRumusArusKasSchema extends Schema {
  up() {
    this.create("m_keu_rumus_arus_kas", (table) => {
      table.increments();
      table.text("rumus");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_sekolah_id").unsigned().index();
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_rumus_arus_kas");
  }
}

module.exports = MKeuRumusArusKasSchema;

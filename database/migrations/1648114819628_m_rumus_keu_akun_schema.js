"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRumusKeuAkunSchema extends Schema {
  up() {
    this.create("m_rumus_keu_akun", (table) => {
      table.increments();
      table.string("tipe")
      table.text("rumus");
      table.integer("m_keu_akun_id").unsigned().index("m_keu_akun_id");
      table
        .foreign("m_keu_akun_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_rumus_keu_akun");
  }
}

module.exports = MRumusKeuAkunSchema;

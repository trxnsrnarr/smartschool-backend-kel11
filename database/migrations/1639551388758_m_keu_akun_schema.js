"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuAkunSchema extends Schema {
  up() {
    this.create("m_keu_akun", (table) => {
      table.increments();
      table.integer("m_rek_sekolah_id").unsigned().index("m_rek_sekolah_id");
      table
        .foreign("m_rek_sekolah_id")
        .references("m_rek_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("nama")
      table.string("kode")
      table.integer("debit")
      table.integer("kredit")
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_akun");
  }
}

module.exports = MKeuAkunSchema;

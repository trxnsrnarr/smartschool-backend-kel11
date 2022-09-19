"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateKeuAkunSchema extends Schema {
  up() {
    this.table("m_keu_akun", (table) => {
      // alter table
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("m_keu_akun", (table) => {
      // reverse alternations
      table.dropColumn("m_sekolah_id");
    });
  }
}

module.exports = UpdateKeuAkunSchema;

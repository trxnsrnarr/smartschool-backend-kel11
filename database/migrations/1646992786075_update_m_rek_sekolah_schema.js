"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMRekSekolahSchema extends Schema {
  up() {
    this.table("m_rek_sekolah", (table) => {
      // alter table
      table
        .integer("m_rencana_keuangan_id")
        .unsigned()
        .index("m_rencana_keuangan_id");
      table
        .foreign("m_rencana_keuangan_id")
        .references("m_rencana_keuangan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("m_rek_sekolah", (table) => {
      // reverse alternations
    });
  }
}

module.exports = UpdateMRekSekolahSchema;

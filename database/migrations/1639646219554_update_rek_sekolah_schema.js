"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateRekSekolahSchema extends Schema {
  up() {
    this.table("m_rek_sekolah", (table) => {
      // alter table
      table.integer("m_keu_akun_id").unsigned().index("m_keu_akun_id");
      table
        .foreign("m_keu_akun_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
    });
  }

  down() {
    this.table("m_rek_sekolah", (table) => {
      // reverse alternations
      table.dropColumn("m_keu_akun_id");
    });
  }
}

module.exports = UpdateRekSekolahSchema;

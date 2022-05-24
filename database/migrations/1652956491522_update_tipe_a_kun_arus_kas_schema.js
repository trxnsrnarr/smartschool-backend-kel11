"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateTipeAKunArusKasSchema extends Schema {
  up() {
    this.table("m_keu_kategori_tipe_akun", (table) => {
      // alter table
      table.text("pengaturan");
    });
  }

  down() {
    this.table("m_keu_kategori_tipe_akun", (table) => {
      // reverse alternations
      table.dropColumn("pengaturan");
    });
  }
}

module.exports = UpdateTipeAKunArusKasSchema;

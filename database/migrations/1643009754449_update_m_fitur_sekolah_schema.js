"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMFiturSekolahSchema extends Schema {
  up() {
    this.table("m_fitur_sekolah", (table) => {
      // alter table
      table.text("fitur", ["mediumtext"]);
      table.dropColumn("nota_barang");
    });
  }

  down() {
    this.table("m_fitur_sekolah", (table) => {
      // reverse alternations
      table.dropColumn("fitur");
      table.string("nota_barang");
    });
  }
}

module.exports = UpdateMFiturSekolahSchema;

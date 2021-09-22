"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekSekolahAlterSchema extends Schema {
  up() {
    this.hasTable("m_rek_sekolah").then((exist) => {
      if (exist) {
        this.table("m_rek_sekolah", (table) => {
          table.integer("pemasukan").unsigned();
          table.integer("pengeluaran").unsigned();
        });
      }
    });
  }

  down() {
    this.table("m_rek_sekolah", (table) => {
      table.dropColumn("pemasukan");
      table.dropColumn("pengeluaran");
    });
  }
}

module.exports = MRekSekolahAlterSchema;

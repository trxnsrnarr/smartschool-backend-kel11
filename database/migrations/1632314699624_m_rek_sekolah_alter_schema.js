"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekSekolahAlterSchema extends Schema {
  up() {
    this.alter("m_rek_sekolah", (table) => {
      table.integer("pemasukan").unsigned().defaultTo(0).alter();
      table.integer("pengeluaran").unsigned().defaultTo(0).alter();
    });
  }

  down() {
    this.alter("m_rek_sekolah", (table) => {
      table.integer("pemasukan").unsigned();
      table.integer("pengeluaran").unsigned();
    });
  }
}

module.exports = MRekSekolahAlterSchema;

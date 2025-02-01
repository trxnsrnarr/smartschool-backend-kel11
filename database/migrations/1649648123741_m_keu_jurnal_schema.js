"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuJurnalSchema extends Schema {
  up() {
    this.table("m_keu_jurnal", (table) => {
      // alter table
      table.boolean("status");
    });
  }

  down() {
    this.table("m_keu_jurnal", (table) => {
      // reverse alternations
    });
  }
}

module.exports = MKeuJurnalSchema;

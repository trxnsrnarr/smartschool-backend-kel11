"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuAkunSchema extends Schema {
  up() {
    this.table("m_keu_akun", (table) => {
      // alter table
      table.string("saldo_normal");
    });
  }

  down() {
    this.table("m_keu_akun", (table) => {
      // reverse alternations
    });
  }
}

module.exports = MKeuAkunSchema;

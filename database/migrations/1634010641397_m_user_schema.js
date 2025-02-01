"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MUserSchema extends Schema {
  up() {
    this.table("m_user", (table) => {
      // alter table
      table.string("wa_real");
      table.string("bagian");
      table.string("verifikasi");
    });
  }

  down() {
    this.table("m_user", (table) => {
      // reverse alternations
      table.dropColumn("wa_real");
      table.dropColumn("bagian");
      table.dropColumn("verifikasi");
    });
  }
}

module.exports = MUserSchema;

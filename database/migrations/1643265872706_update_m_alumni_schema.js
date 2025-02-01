"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMAlumniSchema extends Schema {
  up() {
    this.table("m_alumni", (table) => {
      // alter table
      table.string("alamat_perusahaan");
    });
  }

  down() {
    this.table("m_alumni", (table) => {
      // reverse alternations
      table.dropColumn("alamat_perusahaan");
    });
  }
}

module.exports = UpdateMAlumniSchema;

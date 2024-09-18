"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMSekolahSchema extends Schema {
  up() {
    this.table("m_sekolah", (table) => {
      // alter table
      table.string("link_rapor");
      table.string("link_web");
      table.string("link_dapodik");
    });
  }

  down() {
    this.table("m_sekolah", (table) => {
      table.dropColumn("link_rapor");
      table.dropColumn("link_web");
      table.dropColumn("link_dapodik");
      // reverse alternations
    });
  }
}

module.exports = UpdateMSekolahSchema;

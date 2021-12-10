"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateProfilSchema extends Schema {
  up() {
    this.table("m_profil_user", (table) => {
      // alter table
      table.string("nama_panggilan");
    });
  }

  down() {
    this.table("m_profil_user", (table) => {
      // reverse alternations
      table.dropColumn("nama_panggilan");
    });
  }
}

module.exports = UpdateProfilSchema;

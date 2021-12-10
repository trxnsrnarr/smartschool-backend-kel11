"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateProfilSchema extends Schema {
  up() {
    this.table("m_profil_user", (table) => {
      // alter table
      table.string("nama_panggilan");
      table.hasColumn("m_profil_user", "gender").then((exist) => {
        if (exist) table.dropColumn("gender");
      });
    });
  }

  down() {
    this.table("m_profil_user", (table) => {
      // reverse alternations
      table.dropColumn("nama_panggilan");
      table.hasColumn("m_profil_user", "gender").then((exist) => {
        if (!exist) table.enu("gender", ["L", "P"]);
      });
    });
  }
}

module.exports = UpdateProfilSchema;

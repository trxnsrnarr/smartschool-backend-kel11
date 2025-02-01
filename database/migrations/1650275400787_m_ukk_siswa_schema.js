"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MUkkSiswaSchema extends Schema {
  up() {
    this.table("m_ukk_siswa", (table) => {
      // alter table
      table.boolean("dihapus").defaultTo(0);
    });
  }

  down() {
    this.table("m_ukk_siswa", (table) => {
      // reverse alternations
    });
  }
}

module.exports = MUkkSiswaSchema;

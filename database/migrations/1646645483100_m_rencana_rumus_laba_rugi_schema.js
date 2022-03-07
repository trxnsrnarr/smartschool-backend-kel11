"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRencanaRumusLabaRugiSchema extends Schema {
  up() {
    this.table("m_rencana_rumus_laba_rugi", (table) => {
      // alter table
      table.name("nama");
    });
  }

  down() {
    this.table("m_rencana_rumus_laba_rugi", (table) => {
      // reverse alternations
      table.dropColumn("nama");
    });
  }
}

module.exports = MRencanaRumusLabaRugiSchema;

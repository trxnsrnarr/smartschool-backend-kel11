"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSchema extends Schema {
  up() {
    this.hasTable("m_sikap_sosial").then((exist) => {
      if (!exist)
        this.create("m_sikap_sosial", (table) => {
          table.increments();
          table.string("sikap");
        });
    });
  }

  down() {
    this.drop("m_sikap_sosial");
  }
}

module.exports = MSikapSchema;

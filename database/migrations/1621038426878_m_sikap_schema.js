"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSchema extends Schema {
  up() {
    this.create("m_sikap", (table) => {
      table.increments();
      table.string("sikap");
    });
  }

  down() {
    this.drop("m_sikaps");
  }
}

module.exports = MSikapSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MIndustriSchema extends Schema {
  up() {
    this.create("m_industri", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_industri");
  }
}

module.exports = MIndustriSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MServerSchema extends Schema {
  up() {
    this.create("m_server", (table) => {
      table.increments();
      table.string("nama");
      table.string("ip");
      table.string("tagihan");
      table.text("ram")
      table.text("cpu")
      table.text("storage")
      table.timestamps();
    });
  }

  down() {
    this.drop("m_server");
  }
}

module.exports = MServerSchema;

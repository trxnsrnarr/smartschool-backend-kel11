"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSpiritualSchema extends Schema {
  up() {
    this.hasTable("m_sikap_spiritual").then((exist) => {
      if (!exist)
        this.create("m_sikap_spiritual", (table) => {
          table.increments();
          table.string("sikap");
        });
    });
  }

  down() {
    this.drop("m_sikap_spiritual");
  }
}

module.exports = MSikapSpiritualSchema;

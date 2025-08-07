"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddDihapusColumnToMBarangSchema extends Schema {
  up() {
    this.table("m_barang", (table) => {
      table.boolean("dihapus").defaultTo(false);
    });
  }

  down() {
    this.table("m_barang", (table) => {
      table.dropColumn("dihapus");
    });
  }
}

module.exports = AddDihapusColumnToMBarangSchema;

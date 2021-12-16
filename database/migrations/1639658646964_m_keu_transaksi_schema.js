"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuTransaksiSchema extends Schema {
  up() {
    this.create("m_keu_transaksi", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_transaksi");
  }
}

module.exports = MKeuTransaksiSchema;

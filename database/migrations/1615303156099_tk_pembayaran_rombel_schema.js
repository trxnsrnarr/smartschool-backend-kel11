"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPembayaranRombelSchema extends Schema {
  up() {
    this.create("tk_pembayaran_rombel", (table) => {
      table.increments();
      table.boolean("dihapus");
      table.integer("m_pembayaran_id").unsigned();
      table.integer("m_rombel_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_pembayaran_rombel");
  }
}

module.exports = TkPembayaranRombelSchema;

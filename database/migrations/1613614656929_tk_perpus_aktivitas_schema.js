"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPerpusBacaSchema extends Schema {
  up() {
    this.create("tk_perpus_aktivitas", (table) => {
      table.increments();
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_perpus_id").unsigned();
      table.string("aktivitas");
      table.datetime("waktu_mulai");
      table.datetime("waktu_selesai");
      table.integer("rating");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_perpus_aktivitas");
  }
}

module.exports = TkPerpusBacaSchema;

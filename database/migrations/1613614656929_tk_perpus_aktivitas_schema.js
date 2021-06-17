"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPerpusBacaSchema extends Schema {
  up() {
    this.create("tk_perpus_aktivitas", (table) => {
      table.increments();
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_perpus_id").unsigned().index("m_perpus_id");
      table
        .foreign("m_perpus_id")
        .references("m_perpus.id")
        .onDelete("cascade")
        .onUpdate("cascade");
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

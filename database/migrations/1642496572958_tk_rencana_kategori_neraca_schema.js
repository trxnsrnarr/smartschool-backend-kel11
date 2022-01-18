"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkRencanaKategoriNeracaSchema extends Schema {
  up() {
    this.create("tk_rencana_kategori_neraca", (table) => {
      table.increments();
      table
        .integer("m_rencana_kategori_neraca_id")
        .unsigned()
        .index("m_rencana_kategori_neraca_id");
      table
        .foreign("m_rencana_kategori_neraca_id")
        .references("m_rencana_kategori_neraca.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_keu_akun_id").unsigned().index("m_keu_akun_id");
      table
        .foreign("m_keu_akun_id")
        .references("m_keu_akun.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("urutan");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_rencana_kategori_neraca");
  }
}

module.exports = TkRencanaKategoriNeracaSchema;

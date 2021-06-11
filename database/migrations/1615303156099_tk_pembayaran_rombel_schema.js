"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPembayaranRombelSchema extends Schema {
  up() {
    this.create("tk_pembayaran_rombel", (table) => {
      table.increments();
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_pembayaran_id").unsigned().index("m_pembayaran_id");
      table
        .foreign("m_pembayaran_id")
        .references("m_pembayaran.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_rombel_id").unsigned().index("m_rombel_id");
      table
        .foreign("m_rombel_id")
        .references("m_rombel.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_pembayaran_rombel");
  }
}

module.exports = TkPembayaranRombelSchema;

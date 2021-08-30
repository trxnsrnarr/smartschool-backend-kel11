"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPelaporanDisposisiSchema extends Schema {
  up() {
    this.create("m_pelaporan_disposisi", (table) => {
      table.increments();
      table.string("keterangan");
      table.string("lampiran");
      table.integer("m_disposisi_id").unsigned().index("m_disposisi_id");
      table
        .foreign("m_disposisi_id")
        .references("m_disposisi.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("status").defaultTo(0);
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pelaporan_disposisi");
  }
}

module.exports = MPelaporanDisposisiSchema;

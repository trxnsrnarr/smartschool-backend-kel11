"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPenghargaanSchema extends Schema {
  up() {
    this.create("m_penghargaan", (table) => {
      table.increments();
      table.string("tingkat");
      table.integer("poin");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_penghargaan");
  }
}

module.exports = MPenghargaanSchema;

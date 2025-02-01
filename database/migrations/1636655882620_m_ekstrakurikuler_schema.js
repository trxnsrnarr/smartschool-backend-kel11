"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MEkstrakurikulerSchema extends Schema {
  up() {
    this.create("m_ekstrakurikuler", (table) => {
      table.increments();
      table.string("nama");
      table.text("program");
      table.text("file");
      table.text("foto");
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
    this.drop("m_ekstrakurikuler");
  }
}

module.exports = MEkstrakurikulerSchema;

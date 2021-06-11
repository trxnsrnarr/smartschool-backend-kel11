"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MStatusProyekSchema extends Schema {
  up() {
    this.create("m_status_proyek", (table) => {
      table.increments();
      table.string("nama");
      table.string("warna");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_status_proyek");
  }
}

module.exports = MStatusProyekSchema;

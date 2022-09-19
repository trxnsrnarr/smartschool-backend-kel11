"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPasalPeraturanSchema extends Schema {
  up() {
    this.create("m_pasal_peraturan", (table) => {
      table.increments();
      table.string("nama");
      table.string("isi");
      table.string("foto");
      table.integer("m_bab_id").unsigned().index("m_bab_id");
      table
        .foreign("m_bab_id")
        .references("m_bab_peraturan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pasal_peraturan");
  }
}

module.exports = MPasalPeraturanSchema;

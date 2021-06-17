"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSarprasSchema extends Schema {
  up() {
    this.create("m_sarpras", (table) => {
      table.increments();
      table.text("foto");
      table.string("nama");
      table.string("virtual_tour");
      table.text("deskripsi");
      table.boolean("dihapus").defaultTo(0);
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
    this.drop("m_sarpras");
  }
}

module.exports = MSarprasSchema;

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
      table.boolean("dihapus");
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_sarpras");
  }
}

module.exports = MSarprasSchema;

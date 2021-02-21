"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKegiatanSchema extends Schema {
  up() {
    this.create("m_kegiatan", (table) => {
      table.increments();
      table.string("nama");
      table.text("banner");
      table.boolean("dihapus");
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kegiatan");
  }
}

module.exports = MKegiatanSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKegiatanGaleriSchema extends Schema {
  up() {
    this.create("m_kegiatan_galeri", (table) => {
      table.increments();
      table.text("foto");
      table.string("nama");
      table.text("deskripsi");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_kegiatan_id").unsigned().index("m_kegiatan_id");
      table
        .foreign("m_kegiatan_id")
        .references("m_kegiatan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kegiatan_galeri");
  }
}

module.exports = MKegiatanGaleriSchema;

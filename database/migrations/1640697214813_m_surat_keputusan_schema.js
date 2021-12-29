"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSuratKeputusanSchema extends Schema {
  up() {
    this.create("m_surat_keputusan", (table) => {
      table.increments();
      table.string("nama");
      table.text("file");
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
    this.drop("m_surat_keputusan");
  }
}

module.exports = MSuratKeputusanSchema;

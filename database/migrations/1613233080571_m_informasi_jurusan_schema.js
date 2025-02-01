"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MInformasiJurusanSchema extends Schema {
  up() {
    this.create("m_informasi_jurusan", (table) => {
      table.increments();
      table.text("banner");
      table.text("sambutan");
      table.text("deskripsi");
      table.text("cover");
      table.text("galeri");
      table.integer("m_jurusan_id").unsigned().index("m_jurusan_id");
      table
        .foreign("m_jurusan_id")
        .references("m_jurusan.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_informasi_jurusan");
  }
}

module.exports = MInformasiJurusanSchema;

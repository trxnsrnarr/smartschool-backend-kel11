"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKontakSchema extends Schema {
  up() {
    this.create("m_kontak", (table) => {
      table.increments();
      table.string("tu");
      table.string("keuangan");
      table.string("kurikulum");
      table.string("kesiswaan");
      table.string("sarpras");
      table.string("humas");
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
    this.drop("m_kontak");
  }
}

module.exports = MKontakSchema;

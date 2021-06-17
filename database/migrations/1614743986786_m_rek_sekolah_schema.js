"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MRekSekolahSchema extends Schema {
  up() {
    this.create("m_rek_sekolah", (table) => {
      table.increments();
      table.string("bank");
      table.string("norek");
      table.string("nama");
      table.integer("saldo");
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
    this.drop("m_rek_sekolah");
  }
}

module.exports = MRekSekolahSchema;

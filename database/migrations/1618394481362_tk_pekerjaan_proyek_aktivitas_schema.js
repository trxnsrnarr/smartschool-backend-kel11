"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPekerjaanProyekAktivitasSchema extends Schema {
  up() {
    this.create("tk_pekerjaan_proyek_aktivitas", (table) => {
      table.increments();
      table.string("event");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .integer("m_pekerjaan_proyek_id")
        .unsigned()
        .index("m_pekerjaan_proyek_id");
      table
        .foreign("m_pekerjaan_proyek_id")
        .references("m_pekerjaan_proyek.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_pekerjaan_proyek_aktivitas");
  }
}

module.exports = TkPekerjaanProyekAktivitasSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MDitugaskanPekerjaanSchema extends Schema {
  up() {
    this.hasTable("m_ditugaskan_pekerjaan").then((exist) => {
      if (!exist)
        this.create("m_ditugaskan_pekerjaan", (table) => {
          table.increments();
          table
            .integer("m_pekerjaan_proyek_id")
            .unsigned()
            .index("m_pekerjaan_proyek_id");
          table
            .foreign("m_pekerjaan_proyek_id")
            .references("m_pekerjaan_proyek.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_ditugaskan_pekerjaan");
  }
}

module.exports = MDitugaskanPekerjaanSchema;

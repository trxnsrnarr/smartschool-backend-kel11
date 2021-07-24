"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkStatusPekerjaanSchema extends Schema {
  up() {
    this.hasTable("tk_status_pekerjaan").then((exist) => {
      if (!exist)
        this.create("tk_status_pekerjaan", (table) => {
          table.increments();
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_pekerjaan_id").unsigned().index("m_pekerjaan_id");
          table
            .foreign("m_pekerjaan_id")
            .references("m_pekerjaan.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("status");
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("tk_status_pekerjaan");
  }
}

module.exports = TkStatusPekerjaanSchema;

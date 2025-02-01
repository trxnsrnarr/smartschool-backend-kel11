"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeuTemplateAkunSchema extends Schema {
  up() {
    this.create("m_keu_template_akun", (table) => {
      table.increments();
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.text("template", ["mediumtext"])
      table.timestamps();
    });
  }

  down() {
    this.drop("m_keu_template_akun");
  }
}

module.exports = MKeuTemplateAkunSchema;

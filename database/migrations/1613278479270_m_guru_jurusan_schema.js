"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MGuruJurusanSchema extends Schema {
  up() {
    this.create("m_guru_jurusan", (table) => {
      table.increments();
      table.text("foto");
      table.string("jabatan");
      table.integer("m_jurusan_id").unsigned().index("m_jurusan_id");
      table
        .foreign("m_jurusan_id")
        .references("m_jurusan.id")
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
  }

  down() {
    this.drop("m_guru_jurusan");
  }
}

module.exports = MGuruJurusanSchema;

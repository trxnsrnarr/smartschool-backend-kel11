"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MGuruJurusanSchema extends Schema {
  up() {
    this.create("m_guru_jurusan", (table) => {
      table.increments();
      table.text("foto");
      table.string("jabatan");
      table.integer("m_jurusan_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.boolean("dihapus");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_guru_jurusan");
  }
}

module.exports = MGuruJurusanSchema;

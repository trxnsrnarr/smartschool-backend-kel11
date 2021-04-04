"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAbsenSchema extends Schema {
  up() {
    this.create("m_absen", (table) => {
      table.increments();
      table.string("role");
      table.string("absen");
      table.string("keterangan");
      table.text("lampiran");
      table.string("foto_masuk");
      table.datetime("waktu_masuk");
      table.string("foto_pulang");
      table.datetime("waktu_pulang");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
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
    this.drop("m_absen");
  }
}

module.exports = MAbsenSchema;

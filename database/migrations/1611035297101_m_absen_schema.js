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
      table.string("lampiran");
      table.string("foto_masuk");
      table.datetime("waktu_masuk");
      table.string("foto_pulang");
      table.datetime("waktu_pulang");
      table.integer("m_user_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_absen");
  }
}

module.exports = MAbsenSchema;

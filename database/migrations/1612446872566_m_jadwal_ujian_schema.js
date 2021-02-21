"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJadwalUjianSchema extends Schema {
  up() {
    this.create("m_jadwal_ujian", (table) => {
      table.increments();
      table.integer("jumlah_pg");
      table.integer("jumlah_esai");
      table.integer("kkm");
      table.datetime("waktu_dibuka");
      table.integer("durasi");
      table.string("gmeet");
      table.boolean("diacak");
      table.boolean("dihapus");
      table.integer("m_ujian_id").unsigned();
      table.integer("m_user_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jadwal_ujian");
  }
}

module.exports = MJadwalUjianSchema;

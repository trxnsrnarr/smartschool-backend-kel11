"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJadwalUjianSchema extends Schema {
  up() {
    this.create("m_jadwal_ujian", (table) => {
      table.increments();
      table.integer("jumlah_pg");
      table.integer("jumlah_esai");
      table.integer("jumlah_soal_akm");
      table.integer("kkm");
      table.datetime("waktu_dibuka");
      table.datetime("waktu_ditutup");
      table.integer("durasi");
      table.string("gmeet");
      table.boolean("diacak");
      table.boolean("dihapus").defaultTo(0);
      table.integer("m_ujian_id").unsigned().index("m_ujian_id");
      table
        .foreign("m_ujian_id")
        .references("m_ujian.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jadwal_ujian");
  }
}

module.exports = MJadwalUjianSchema;

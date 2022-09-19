"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJadwalPpdbSchema extends Schema {
  up() {
    this.create("m_jadwal_ppdb", (table) => {
      table.increments();
      table.string("tipe", [20]);
      table.string("nama");
      table.text("keterangan");
      table.text("lokasi");
      table.string("link");
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
      table
        .integer("m_informasi_gelombang_id")
        .unsigned()
        .index("m_informasi_gelombang_id");
      table
        .foreign("m_informasi_gelombang_id")
        .references("m_informasi_gelombang.id")
        .onDelete("cascade")
        .onUpdate("cascade");
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
    this.drop("m_jadwal_ppdb");
  }
}

module.exports = MJadwalPpdbSchema;

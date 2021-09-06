"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MJadwalKonsultasiSchema extends Schema {
  up() {
    this.create("m_jadwal_konsultasi", (table) => {
      table.increments();
      table.integer("m_pertemuan_bk_id").unsigned().index("m_pertemuan_bk_id");
      table
        .foreign("m_pertemuan_bk_id")
        .references("m_pertemuan_bk.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.time("waktu_mulai");
      table.time("waktu_berakhir");
      table.string("media");
      table.string("keterangan");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_jadwal_konsultasi");
  }
}

module.exports = MJadwalKonsultasiSchema;

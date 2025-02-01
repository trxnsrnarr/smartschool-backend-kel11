"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAbsenBelumTerdaftarSchema extends Schema {
  up() {
    this.create("m_absen_belum_terdaftar", (table) => {
      table.increments();
      table.text("foto");
      table.string("suhu");
      table.boolean("masker");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.datetime("waktu_masuk");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_absen_belum_terdaftar");
  }
}

module.exports = MAbsenBelumTerdaftarSchema;

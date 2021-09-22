"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKegiatanKalenderSchema extends Schema {
  up() {
    this.create("m_kegiatan_kalender", (table) => {
      table.increments();
      table.string("kegiatan");
      table
        .integer("m_label_kalender_id")
        .unsigned()
        .index("m_label_kalender_id");
      table
        .foreign("m_label_kalender_id")
        .references("m_label_kalender.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.date("tanggal_mulai");
      table.date("tanggal_akhir");
      table.time("waktu_mulai");
      table.time("waktu_akhir");
      table.string("media");
      table.string("tempat");
      table.string("deskripsi");
      table.text("link");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("dihapus").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_kegiatan_kalender");
  }
}

module.exports = MKegiatanKalenderSchema;

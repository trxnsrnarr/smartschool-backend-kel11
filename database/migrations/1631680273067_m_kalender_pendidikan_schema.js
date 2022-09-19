"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKalenderPendidikanSchema extends Schema {
  up() {
    this.create("m_kalender_pendidikan", (table) => {
      table.increments();
      table.string("nama");
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
    this.drop("m_kalender_pendidikan");
  }
}

module.exports = MKalenderPendidikanSchema;

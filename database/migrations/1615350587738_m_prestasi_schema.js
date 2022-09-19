"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPrestasiSchema extends Schema {
  up() {
    this.create("m_prestasi", (table) => {
      table.increments();
      table.string("nama");
      table.string("tingkat");
      table.string("peringkat");
      table.string("lembaga");
      table.date("tanggal_terbit");
      table.boolean("sertifikat_kadaluarsa").defaultTo(0);
      table.date("tanggal_kadaluarsa");
      table.string("id_sertifikat");
      table.string("lampiran");
      table.boolean("dihapus").defaultTo(0);
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
    this.drop("m_prestasi");
  }
}

module.exports = MPrestasiSchema;

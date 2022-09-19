"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBobotNilaiSchema extends Schema {
  up() {
    this.create("m_bobot_nilai", (table) => {
      table.increments();
      table.integer("tugas_pts");
      table.integer("uh_pts");
      table.integer("uts_pts");
      table.integer("praktik_pts");
      table.integer("proyek_pts");
      table.integer("produk_pts");
      table.integer("portofolio_pts");
      table.integer("tugas_pas");
      table.integer("uh_pas");
      table.integer("uts_pas");
      table.integer("uas_pas");
      table.integer("praktik_pas");
      table.integer("proyek_pas");
      table.integer("produk_pas");
      table.integer("portofolio_pas");
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
    this.drop("m_bobot_nilai");
  }
}

module.exports = MBobotNilaiSchema;

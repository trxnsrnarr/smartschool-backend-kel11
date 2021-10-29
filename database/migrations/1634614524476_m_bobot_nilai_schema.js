"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBobotNilaiSchema extends Schema {
  up() {
    this.create("m_bobot_nilai", (table) => {
      table.increments();
      table.string("tipe");
      table.integer("tugas");
      table.integer("uh");
      table.integer("uts");
      table.integer("uas");
      table.integer("praktik");
      table.integer("proyek");
      table.integer("produk");
      table.integer("portofolio");
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

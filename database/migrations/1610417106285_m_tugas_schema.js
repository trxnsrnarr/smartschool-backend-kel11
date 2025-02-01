"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MTugasSchema extends Schema {
  up() {
    this.create("m_tugas", (table) => {
      table.increments();
      table.string("judul");
      table.text("instruksi");
      table.date("tanggal_pembagian");
      table.time("waktu_pembagian");
      table.date("tanggal_pengumpulan");
      table.time("waktu_pengumpulan");
      table.integer("kkm");
      table.text("lampiran");
      table.text("link");
      table.boolean("draft");
      table.boolean("dihapus").defaultTo(0);
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
    this.drop("m_tugas");
  }
}

module.exports = MTugasSchema;

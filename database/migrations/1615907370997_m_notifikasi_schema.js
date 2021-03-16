"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MNotifikasiSchema extends Schema {
  up() {
    this.create("m_notifikasi", (table) => {
      table.increments();
      table.string("tipe");
      table.string("judul");
      table.text("isi");
      table.datetime("tanggal_dibuat");
      table.boolean("dibaca");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_notifikasi");
  }
}

module.exports = MNotifikasiSchema;

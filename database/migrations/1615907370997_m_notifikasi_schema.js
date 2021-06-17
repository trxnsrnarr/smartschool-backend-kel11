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
    this.drop("m_notifikasi");
  }
}

module.exports = MNotifikasiSchema;

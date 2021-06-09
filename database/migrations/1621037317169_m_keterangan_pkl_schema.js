"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeteranganPklSchema extends Schema {
  up() {
    this.create("m_keterangan_pkl", (table) => {
      table.increments();
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("namamitra");
      table.dateTime("tanggal_mulai");
      table.dateTime("tanggal_selesai");
      table.string("keterangan");
      table.boolean("dihapus");

      table.timestamps();
    });
  }

  down() {
    this.drop("m_keterangan_pkl");
  }
}

module.exports = MKeteranganPklSchema;

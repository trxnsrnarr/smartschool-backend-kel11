"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPertemuanBkSchema extends Schema {
  up() {
    this.create("m_pertemuan_bk", (table) => {
      table.increments();
      table.integer("m_user_guru_id").unsigned().index("m_user_guru_id");
      table
        .foreign("m_user_guru_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_user_id").unsigned().index("m_user_id");
      table
        .foreign("m_user_id")
        .references("m_user.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("keperluan");
      table.date("tanggal_konsultasi");
      table.string("media_konsultasi");
      table.string("keterangan");
      table.boolean("status");
      table.boolean("status_selesai").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("m_pertemuan_bk");
  }
}

module.exports = MPertemuanBkSchema;

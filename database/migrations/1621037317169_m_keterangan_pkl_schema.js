"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MKeteranganPklSchema extends Schema {
  up() {
    this.hasTable("m_keterangan_pkl").then((exist) => {
      if (!exist)
        this.create("m_keterangan_pkl", (table) => {
          table.increments();
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_ta_id").unsigned().index("m_ta_id");
          table
            .foreign("m_ta_id")
            .references("m_ta.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.string("namamitra");
          table.dateTime("tanggal_mulai");
          table.dateTime("tanggal_selesai");
          table.string("keterangan");
          table.boolean("dihapus").defaultTo(0);

          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_keterangan_pkl");
  }
}

module.exports = MKeteranganPklSchema;

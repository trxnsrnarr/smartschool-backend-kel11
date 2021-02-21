"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MtaSchema extends Schema {
  up() {
    this.create("m_ta", (table) => {
      table.increments();
      table.string("tahun");
      table.string("semester");
      table.string("nama_kepsek");
      table.string("nip_kepsek");
      table.boolean("aktif");
      table.boolean("dihapus");
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_ta");
  }
}

module.exports = MtaSchema;

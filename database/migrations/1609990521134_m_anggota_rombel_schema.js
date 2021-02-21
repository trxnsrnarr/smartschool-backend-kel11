"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MAnggotaRombelSchema extends Schema {
  up() {
    this.create("m_anggota_rombel", (table) => {
      table.increments();
      table.string("role");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_rombel_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_anggota_rombel");
  }
}

module.exports = MAnggotaRombelSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateMNotifikasiTerjadwalSchema extends Schema {
  up() {
    this.table("m_notifikasi_terjadwal", (table) => {
      // alter table
      table.text("lampiran");
    });
  }

  down() {
    this.table("m_notifikasi_terjadwal", (table) => {
      // reverse alternations
    });
  }
}

module.exports = UpdateMNotifikasiTerjadwalSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPrestasiSchema extends Schema {
  up() {
    this.create("m_prestasi", (table) => {
      table.increments();
      table.string("nama");
      table.string("tingkat");
      table.string("peringkat");
      table.string("tempat");
      table.string("tahun");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_prestasi");
  }
}

module.exports = MPrestasiSchema;

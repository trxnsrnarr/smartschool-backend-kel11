"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPerpusTagSchema extends Schema {
  up() {
    this.create("m_perpus_tag", (table) => {
      table.increments();
      table.string("nama");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_perpus_tag");
  }
}

module.exports = MPerpusTagSchema;

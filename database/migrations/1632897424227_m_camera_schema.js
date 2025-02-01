"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MCameraSchema extends Schema {
  up() {
    this.create("m_camera", (table) => {
      table.increments();
      table.string("nama");
      table.string("address");
      table.integer("m_sekolah_id").unsigned().index("m_sekolah_id");
      table
        .foreign("m_sekolah_id")
        .references("m_sekolah.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.datetime("waktu_sinkron");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_camera");
  }
}

module.exports = MCameraSchema;

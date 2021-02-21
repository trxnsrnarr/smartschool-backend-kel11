"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPostSchema extends Schema {
  up() {
    this.create("m_post", (table) => {
      table.increments();
      table.string("judul");
      table.string("slug");
      table.text("banner");
      table.text("konten");
      table.boolean("disembunyikan");
      table.boolean("dihapus");
      table.integer("m_user_id").unsigned();
      table.integer("m_sekolah_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_post");
  }
}

module.exports = MPostSchema;

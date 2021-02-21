"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPostSchema extends Schema {
  up() {
    this.create("tk_post", (table) => {
      table.increments();
      table.integer("m_post_id").unsigned();
      table.integer("m_kategori_id").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_post");
  }
}

module.exports = TkPostSchema;

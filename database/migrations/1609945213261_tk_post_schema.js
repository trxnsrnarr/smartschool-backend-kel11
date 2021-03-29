"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TkPostSchema extends Schema {
  up() {
    this.create("tk_post", (table) => {
      table.increments();
      table.integer("m_post_id").unsigned().index("m_post_id");
      table
        .foreign("m_post_id")
        .references("m_post.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("m_kategori_id").unsigned().index("m_kategori_id");
      table
        .foreign("m_kategori_id")
        .references("m_kategori.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("tk_post");
  }
}

module.exports = TkPostSchema;

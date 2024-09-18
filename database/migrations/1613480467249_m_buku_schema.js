"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MBukuSchema extends Schema {
  up() {
    this.create("m_buku", (table) => {
      table.increments();
      table.text("createdate");
      table.text("metadatadate");
      table.text("creatortool");
      table.text("instanceid");
      table.text("originaldocumentid");
      table.text("documentid");
      table.text("renditionclass");
      table.text("history");
      table.text("derivedfrom");
      table.text("format");
      table.text("producer");
      table.text("trapped");
      table.text("link");
      table.timestamps();
    });
  }

  down() {
    this.drop("m_buku");
  }
}

module.exports = MBukuSchema;

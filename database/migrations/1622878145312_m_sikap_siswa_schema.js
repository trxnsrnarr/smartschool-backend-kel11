"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MSikapSiswaSchema extends Schema {
  up() {
    this.create("m_sikap_siswa", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("m_sikap_siswa");
  }
}

module.exports = MSikapSiswaSchema;

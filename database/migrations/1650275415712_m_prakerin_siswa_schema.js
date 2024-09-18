"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPrakerinSiswaSchema extends Schema {
  up() {
    this.table("m_prakerin_siswa", (table) => {
      // alter table
      table.string("kodepos")
    });
  }

  down() {
    this.table("m_prakerin_siswa", (table) => {
      // reverse alternations
    });
  }
}

module.exports = MPrakerinSiswaSchema;

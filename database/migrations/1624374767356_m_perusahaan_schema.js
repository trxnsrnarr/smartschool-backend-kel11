"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MPerusahaanSchema extends Schema {
  up() {
    this.hasTable("m_perusahaan").then((exist) => {
      if (!exist)
        this.create("m_perusahaan", (table) => {
          table.increments();
          table.string("nama");
          table.string("nama_pt");
          table.string("bidang");
          table.text("logo");
          table.string("province_id", 2).index("province_id");
          // table
          // .foreign("province_id")
          // .references("provinces.id")
          // .onDelete("cascade")
          // .onUpdate("cascade");
          table.string("regency_id", 4).index("regency_id");
          // table
          // .foreign("regency_id")
          // .references("regencies.id")
          // .onDelete("cascade")
          // .onUpdate("cascade");
          table.string("district_id", 7).index("district_id");
          // table
          // .foreign("district_id")
          // .references("districts.id")
          // .onDelete("cascade")
          // .onUpdate("cascade");
          table.string("village_id", 10).index("village_id");
          // table
          // .foreign("village_id")
          // .references("villages.id")
          // .onDelete("cascade")
          // .onUpdate("cascade");
          table.boolean("dihapus").defaultTo(0);
          table.timestamps();
        });
    });
  }

  down() {
    this.drop("m_perusahaan");
  }
}

module.exports = MPerusahaanSchema;

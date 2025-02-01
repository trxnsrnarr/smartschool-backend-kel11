"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MUjianSiswaSchema extends Schema {
  up() {
    this.hasTable("m_rekap").then((exist) => {
      if (!exist) {
        this.create("m_ujian_siswa", (table) => {
          table.increments();
          table.integer("m_ta_id").unsigned().index("m_ta_id");
          table
            .foreign("m_ta_id")
            .references("m_ta.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("m_user_id").unsigned().index("m_user_id");
          table
            .foreign("m_user_id")
            .references("m_user.id")
            .onDelete("cascade")
            .onUpdate("cascade");

          table
            .integer("m_mata_pelajaran_id")
            .unsigned()
            .index("m_mata_pelajaran_id");
          table
            .foreign("m_mata_pelajaran_id")
            .references("m_mata_pelajaran.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("uas_id").unsigned().index("uas_id");
          table
            .foreign("uas_id")
            .references("tk_peserta_ujian.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("uts_id").unsigned().index("uts_id");
          table
            .foreign("uts_id")
            .references("tk_peserta_ujian.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("us_id").unsigned().index("us_id");
          table
            .foreign("us_id")
            .references("tk_peserta_ujian.id")
            .onDelete("cascade")
            .onUpdate("cascade");
          table.integer("nilai");
          table.integer("nilai_keterampilan");
          table.timestamps();
        });
      }
    });
  }

  down() {
    this.drop("m_ujian_siswa");
  }
}

module.exports = MUjianSiswaSchema;

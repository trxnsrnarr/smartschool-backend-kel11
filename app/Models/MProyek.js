"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MProyek extends Model {
  static get table() {
    return "m_proyek";
  }
  user() {
    return this.belongsTo("App/Models/User", "m_user_id");
  }
  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }
  status() {
    return this.belongsTo("App/Models/MStatusProyek");
  }
  anggota() {
    return this.hasMany("App/Models/MAnggotaProyek");
  }
  forum() {
    return this.hasMany("App/Models/MProyekForum");
  }
  kategoriPekerjaan() {
    return this.hasMany("App/Models/MKategoriPekerjaan");
  }
}

module.exports = MProyek;

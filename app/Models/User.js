"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class User extends Model {
  static get table() {
    return "m_user";
  }

  sekolah() {
    return this.belongsTo("App/Models/MSekolah");
  }

  absen() {
    return this.hasMany("App/Models/MAbsen", "id", "m_user_id");
  }

  infoAlumni() {
    return this.hasOne("App/Models/MAlumni", "id", "m_user_id");
  }

  kesimpulan() {
    return this.hasMany("App/Models/TkMateriKesimpulan", "id", "m_user_id");
  }

  mataPelajaran() {
    return this.hasMany("App/Models/MMataPelajaran", "id", "m_user_id");
  }

  tugas() {
    return this.hasMany("App/Models/TkTimeline", "id", "m_user_id");
  }

  pesertaUjian() {
    return this.hasMany("App/Models/TkPesertaUjian", "id", "m_user_id");
  }

  getPhotos(photos) {
    return photos ? JSON.parse(photos) : {};
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  static get hidden() {
    return ["password"];
  }

  static get computed() {
    return ["gender_text"];
  }

  getGenderText({ gender }) {
    switch (gender) {
      case "L":
        return "Laki-laki";
      case "P":
        return "Perempuan";
      default:
        return "N/A";
    }
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }

  profil() {
    return this.hasOne("App/Models/MProfilUser", "id", "m_user_id");
  }
  sikap() {
    return this.hasOne("App/Models/MSikapSiswa", "id", "m_user_id");
  }
}

module.exports = User;

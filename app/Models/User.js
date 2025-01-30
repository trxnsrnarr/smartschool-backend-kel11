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
  tugasnilai() {
    return this.hasMany("App/Models/TkTimeline", "id", "m_user_id");
  }
  absenRombel() {
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
  lowongan() {
    return this.hasMany("App/Models/MLowongan", "id", "m_user_id");
  }
  sikap() {
    return this.hasOne("App/Models/MSikapSiswa", "id", "m_user_id");
  }
  sikapYadika() {
    return this.hasMany("App/Models/MSikapSiswaYadika", "id", "m_user_id");
  }
  sikapUas() {
    return this.hasOne("App/Models/MSikapSiswa", "id", "m_user_id");
  }
  rekapSikap() {
    return this.hasOne("App/Models/MSikapRombel", "id", "m_user_id");
  }
  keteranganRapor() {
    return this.hasOne("App/Models/MKeteranganRapor", "id", "m_user_id");
  }
  keteranganRaporUas() {
    return this.hasOne("App/Models/MKeteranganRapor", "id", "m_user_id");
  }
  keteranganPkl() {
    return this.hasMany("App/Models/MKeteranganPkl", "id", "m_user_id");
  }

  keteranganPkl1() {
    return this.belongsTo("App/Models/MKeteranganPkl", "id", "m_user_id");
  }
  raporEkskul() {
    return this.hasMany("App/Models/MRaporEkskul", "id", "m_user_id");
  }
  prestasi() {
    return this.hasMany("App/Models/MPrestasi", "id", "m_user_id");
  }
  pelanggaranSiswa() {
    return this.hasMany("App/Models/TkSiswaPelanggaran", "id", "m_user_id");
  }
  anggotaRombel() {
    return this.belongsTo("App/Models/MAnggotaRombel", "id", "m_user_id");
  }
  semuaAnggotaRombel() {
    return this.hasMany("App/Models/MAnggotaRombel", "id", "m_user_id");
  }
  anggotaEkskul() {
    return this.hasMany("App/Models/MAnggotaEkskul", "id", "m_user_id");
  }
  sanksiSiswa() {
    return this.hasMany("App/Models/MSanksiSiswa", "id", "m_user_id");
  }

  pertemuan() {
    return this.hasMany("App/Models/MTimeline", "id", "m_user_id");
  }

  nilaiUjian() {
    return this.belongsTo("App/Models/MUjianSiswa", "id", "m_user_id");
  }

  nilaiRekapSiswa() {
    return this.hasMany("App/Models/TkRekapNilai", "id", "m_user_id");
  }

  nilaiSemuaUjian() {
    return this.hasMany("App/Models/MUjianSiswa", "id", "m_user_id");
  }

  pertemuanBk() {
    return this.hasMany("App/Models/MPertemuanBk", "id", "m_user_guru_id");
  }

  jadwalUjianSemua() {
    return this.hasMany("App/Models/MJadwalUjian", "id", "m_user_id");
  }

  pembayaran() {
    return this.hasMany("App/Models/MPembayaranSiswa", "id", "m_user_id");
  }

  rpp() {
    return this.hasMany("App/Models/MRpp", "id", "m_user_id");
  }
  prakerinSiswa() {
    return this.hasMany("App/Models/MPrakerinSiswa", "id", "m_user_id");
  }

  ukkSiswa() {
    return this.belongsTo("App/Models/MUkkSiswa", "id", "m_user_id");
  }

  messsage() {
    return this.hasMany("App/Models/MMessage", 'id', "m_chatroom_id");
  }
}

module.exports = User;

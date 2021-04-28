"use strict";

const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
const Sekolah = use("App/Models/Sekolah");
const MSekolah = use("App/Models/MSekolah");
const MSarpras = use("App/Models/MSarpras");
const MKegiatanGaleri = use("App/Models/MKegiatanGaleri");
const MProyek = use("App/Models/MProyek");
const MPerpusKomen = use("App/Models/MPerpusKomen");
const MGelombangPpdb = use("App/Models/MGelombangPpdb");
const MPendaftarPpdb = use("App/Models/MPendaftarPpdb");
const MAnggotaProyek = use("App/Models/MAnggotaProyek");
const MAnggotaProyekRole = use("App/Models/MAnggotaProyekRole");
const MKategoriPekerjaan = use("App/Models/MKategoriPekerjaan");
const MAlurPPDB = use("App/Models/MAlurPpdb");
const TkPerpusAktivitas = use("App/Models/TkPerpusAktivitas");
const MJurusan = use("App/Models/MJurusan");
const MRekSekolah = use("App/Models/MRekSekolah");
const MIndustri = use("App/Models/MIndustri");
const MPembayaran = use("App/Models/MPembayaran");
const MPembayaranSiswa = use("App/Models/MPembayaranSiswa");
const MMutasi = use("App/Models/MMutasi");
const MAlumni = use("App/Models/MAlumni");
const MProfilUser = use("App/Models/MProfilUser");
const MRiwayatPembayaranSiswa = use("App/Models/MRiwayatPembayaranSiswa");
const MPembayaranKategori = use("App/Models/MPembayaranKategori");
const Mta = use("App/Models/Mta");
const MSlider = use("App/Models/MSlider");
const MTugas = use("App/Models/MTugas");
const MKegiatan = use("App/Models/MKegiatan");
const MInformasiSekolah = use("App/Models/MInformasiSekolah");
const MInformasiJurusan = use("App/Models/MInformasiJurusan");
const MGuruJurusan = use("App/Models/MGuruJurusan");
const MRombel = use("App/Models/MRombel");
const TkPembayaranRombel = use("App/Models/TkPembayaranRombel");
const MJamMengajar = use("App/Models/MJamMengajar");
const MJadwalMengajar = use("App/Models/MJadwalMengajar");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const TkPost = use("App/Models/TkPost");
const MPost = use("App/Models/MPost");
const MKategori = use("App/Models/MKategori");
const MTopik = use("App/Models/MTopik");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const TkMateriRombel = use("App/Models/TkMateriRombel");
const MBab = use("App/Models/MBab");
const MPrestasi = use("App/Models/MPrestasi");
const MAbsen = use("App/Models/MAbsen");
const MSoalUjian = use("App/Models/MSoalUjian");
const TkSoalUjian = use("App/Models/TkSoalUjian");
const MJadwalUjian = use("App/Models/MJadwalUjian");
const TkJadwalUjian = use("App/Models/TkJadwalUjian");
const TkPesertaUjian = use("App/Models/TkPesertaUjian");
const MUjian = use("App/Models/MUjian");
const MMateri = use("App/Models/MMateri");
const MSoalKuis = use("App/Models/MSoalKuis");
const MTimeline = use("App/Models/MTimeline");
const TkTimeline = use("App/Models/TkTimeline");
const TkTimelineKomen = use("App/Models/TkTimelineKomen");
const TkMateriKesimpulan = use("App/Models/TkMateriKesimpulan");
const MTimelineKomen = use("App/Models/MTimelineKomen");

const MBuku = use("App/Models/MBuku");
const MPerpus = use("App/Models/MPerpus");
const TkPerpusMapel = use("App/Models/TkPerpusMapel");
const MPerpusTag = use("App/Models/MPerpusTag");
const TkPerpusTag = use("App/Models/TkPerpusTag");
const MKontak = use("App/Models/MKontak");
const TkJawabanUjianSiswa = use("App/Models/TkJawabanUjianSiswa");
const User = use("App/Models/User");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const PDFExtract = require("pdf.js-extract").PDFExtract;

const Hash = use("Hash");
const Helpers = use("Helpers");
const axios = require("axios");
const { validate } = use("Validator");
const slugify = require("slugify");
const Excel = require("exceljs");
const WordExtractor = require("word-extractor");
const AdonisGCS = require("adonis-google-cloud-storage");
const uuid = require("uuid-v4");
const pdftohtml = require("pdftohtmljs");

const fs = require("fs");
const pdf = require("pdf-parse");

// firestore
const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();

// reference to
const jadwalUjianReference = db.collection("jadwal-ujian");

const Env = use("Env");
const Database = use("Database");

const accountSid = "AC124e53d8cfb40a9f80ae98c59eba0980";
const authToken = "04e5831e528fa131ad81400739e1022f";
const client = require("twilio")(accountSid, authToken);
const joinNotification = `http://wa.me/+14155238886?text=join additional-growth`;

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

// RULES
const rulesUserPost = {
  nama: "required",
  password: "required",
  whatsapp: "required",
  gender: "required",
};

const rulesUserPut = {
  nama: "required",
  password: "required",
  whatsapp: "required",
  gender: "required",
};

const rulesAnggotaPost = {
  m_proyek_id: "required",
  m_user_id: "required",
  status: "required",
};

const messagesUser = {
  "password.required": "Password harus diisi",
  "nama.required": "Nama harus diisi",
  "whatsapp.required": "Whatsapp harus diisi",
  "gender.required": "Jenis Kelamin harus diisi",
};

const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

class MainController {
  // UTILS
  async singleUpload({ request, response }) {
    const fileUpload = request.file("file");

    const fname = `${new Date().getTime()}.${fileUpload.extname}`;

    await fileUpload.move(Helpers.publicPath("uploads/"), {
      name: fname,
      overwrite: true,
    });

    if (!fileUpload.moved()) {
      return fileUpload.error();
    }

    return fname;
  }

  async richEditorUpload({ request, response }) {
    const fileUpload = request.file("file");

    const fname = `${new Date().getTime()}.${fileUpload.extname}`;

    await fileUpload.move(Helpers.publicPath("uploads/"), {
      name: fname,
      overwrite: true,
    });

    if (!fileUpload.moved()) {
      return fileUpload.error();
    }

    return { link: `http://${request.headers().host}/uploads/${fname}` };
  }

  async multipleUpload({ request, response }) {
    // const fileUpload = request.file("file");
    // const fname = `${new Date().getTime()}.${fileUpload.extname}`;
    // await fileUpload.move(Helpers.publicPath("uploads/"), {
    //   name: fname,
    //   overwrite: true,
    // });
    // if (!fileUpload.moved()) {
    //   return fileUpload.error();
    // }
    // const profilePics = request.file('profile_pics')
    // await profilePics.moveAll(Helpers.tmpPath('uploads'))
    // if (!profilePics.movedAll()) {
    //   return profilePics.errors()
    // }
    // return "http://demoapi.getsmartschool.id/uploads/" + fname;
  }

  async getSekolahByDomain(domain) {
    const sekolah = await MSekolah.query()
      .with("informasi")
      .where("domain", "like", `%${domain}%`)
      .first();

    if (!sekolah) {
      return "404";
    }

    return sekolah;
  }

  async meSekolah({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kontak = await MKontak.query()
      .where({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      sekolah: sekolah,
      integrasi: sekolah.integrasi,
      kontak,
    });
  }

  async getTAAktif(sekolah) {
    const ta = await Mta.query()
      .select("id", "tahun")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ aktif: 1 })
      .andWhere({ dihapus: 0 })
      .first();

    if (!ta) {
      return "404";
    }

    return ta;
  }

  async getLokasiSaatIni({ response }) {
    const geolocation = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${Env.get(
        "GCP_API_KEYS"
      )}`
    );

    const lat = geolocation.data.location.lat;
    const lng = geolocation.data.location.lng;

    const reverse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${lng}&key=${Env.get(
        "GCP_API_KEYS"
      )}`
    );

    return response.ok(reverse.data);
  }

  // REST API

  async getProvince({ response }) {
    const res = await Province.query().fetch();

    return response.ok(res);
  }

  async getRegency({ response, request }) {
    const { province_id } = request.get();

    const res = await Regency.query().where({ province_id }).fetch();

    return response.ok(res);
  }

  async getDistrict({ response, request }) {
    const { regency_id } = request.get();

    const res = await District.query().where({ regency_id }).fetch();

    return response.ok(res);
  }

  async getVillage({ response, request }) {
    const { district_id } = request.get();

    const res = await Village.query().where({ district_id }).fetch();

    return response.ok(res);
  }

  async getMasterSekolah({ response, request }) {
    const { npsn } = request.get();

    const res = await Sekolah.query()
      .where("npsn", "like", `%${npsn}%`)
      .first();

    return response.ok(res);
  }

  async loginWhatsapp({ response, request }) {
    const { whatsapp, role } = request.post();
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (role == "ortu") {
      const res = await User.query()
        .select("nama", "whatsapp", "role")
        .where({ wa_ayah: whatsapp })
        .andWhere({ m_sekolah_id: sekolah.id })
        .first();

      return response.ok(res);
    }

    const res = await User.query()
      .select("nama", "whatsapp", "role")
      .where({ whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (role == "warga-sekolah") {
      return response.ok(res);
    }

    if (res.role == "admin") {
      return response.ok(res);
    }

    if (res.role == "kepsek") {
      return response.ok(res);
    }

    if (res.role != role) {
      return response.forbidden({
        message: "Oops.. sepertinya anda salah pilih akun",
      });
    }

    return response.ok(res);
  }

  async getProfil({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const userData = await User.query()
      .where({ id: user.id })
      .with("sekolah")
      .first();

    let rombel;

    if (ta != "404") {
      rombel = await MRombel.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ m_user_id: user.id })
        .first();
    }

    return response.ok({
      user: userData,
      mataPelajaran: mataPelajaran,
      rombel,
      ta,
    });
  }

  async putProfil({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    const {
      nama,
      whatsapp,
      avatar,
      gender,
      tanggal_lahir,
      // siswa
      nama_ayah,
      wa_ayah,
      nama_ibu,
      wa_ibu,
      // guru
      nip,
      nrk,
      nuptk,
      pangkat,
      golongan,
    } = request.post();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const update = await User.query().where({ id: user.id }).update({
      nama,
      whatsapp,
      avatar,
      gender,
      // guru
      nip,
      nrk,
      nuptk,
      pangkat,
      golongan,
      // siswa
      tanggal_lahir,
      nama_ayah,
      wa_ayah,
      nama_ibu,
      wa_ibu,
    });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getProfilUser({ auth, response, request }) {
    const user = await auth.getUser();

    const profil = await User.query()
      .with("profil")
      .where({ id: user.id })
      .first();

    return response.ok({
      profil: profil,
    });
  }

  async postProfilUser({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    let {
      // identitas
      nama,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,

      // informasi
      nisn,
      asal_sekolah,

      // alamat
      alamat,
      province_id,
      regency_id,
      district_id,
      village_id,
      kodepos,

      // kesehatan
      tb,
      bb,
      gol_darah,
      buta_warna,
      kacamata,
      disabilitas,
      surat_keterangan_sehat,
      surat_keterangan_buta_warna,

      // ortu
      nama_ayah,
      telp_ayah,
      alamat_ayah,
      pekerjaan_ayah,
      nama_ibu,
      telp_ibu,
      alamat_ibu,
      pekerjaan_ibu,

      // rapor
      fisika1,
      fisika2,
      fisika3,
      fisika4,
      fisika5,
      fisika6,
      matematika1,
      matematika2,
      matematika3,
      matematika4,
      matematika5,
      matematika6,
      bindo1,
      bindo2,
      bindo3,
      bindo4,
      bindo5,
      bindo6,
      bing1,
      bing2,
      bing3,
      bing4,
      bing5,
      bing6,

      // lampiran rapor
      semester1,
      semester2,
      semester3,
      semester4,
      semester5,
      semester6,
    } = request.post();

    await User.query().where({ id: user.id }).update({
      // identitas
      nama,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
    });

    const check = await MProfilUser.query()
      .select("id")
      .where({
        m_user_id: user.id,
      })
      .first();

    let profil;

    if (check) {
      profil = await MProfilUser.query().where({ id: check.id }).update({
        // informasi
        nisn,
        asal_sekolah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        m_user_id: user.id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,
      });
    } else {
      profil = await MProfilUser.create({
        // informasi
        nisn,
        asal_sekolah,

        // alamat
        alamat,
        province_id,
        regency_id,
        district_id,
        village_id,
        kodepos,

        // kesehatan
        tb,
        bb,
        gol_darah,
        buta_warna,
        kacamata,
        disabilitas,
        surat_keterangan_sehat,
        surat_keterangan_buta_warna,

        // ortu
        nama_ayah,
        telp_ayah,
        alamat_ayah,
        pekerjaan_ayah,
        nama_ibu,
        telp_ibu,
        alamat_ibu,
        pekerjaan_ibu,
        m_user_id: user.id,

        // rapor
        fisika1,
        fisika2,
        fisika3,
        fisika4,
        fisika5,
        fisika6,
        matematika1,
        matematika2,
        matematika3,
        matematika4,
        matematika5,
        matematika6,
        bindo1,
        bindo2,
        bindo3,
        bindo4,
        bindo5,
        bindo6,
        bing1,
        bing2,
        bing3,
        bing4,
        bing5,
        bing6,

        // lampiran rapor
        semester1,
        semester2,
        semester3,
        semester4,
        semester5,
        semester6,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putUbahPassword({ auth, response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    const user = await auth.getUser();

    const { password_lama, password_baru } = request.post();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    if (!(await Hash.verify(password_lama, user.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const update = await User.query()
      .where({ id: user.id })
      .update({
        password: await Hash.make(password_baru),
      });

    if (!update) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async loginAdminWhatsapp({ response, request }) {
    const { whatsapp } = request.post();

    const res = await User.query()
      .select("nama", "whatsapp")
      .where({ whatsapp })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    return response.ok(res);
  }

  async loginAdmin({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { password, whatsapp } = request.post();

    const res = await User.query()
      .where({ whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (!(await Hash.verify(password, res.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async login({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { password, whatsapp } = request.post();

    const res = await User.query()
      .where({ whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    if (!(await Hash.verify(password, res.password))) {
      return response.notFound({ message: "Password yang anda masukan salah" });
    }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async getSekolah({ response, request }) {
    const domain = request.headers().origin;

    const res = await MSekolah.query()
      .where("domain", "like", `%${domain}%`)
      .first();

    if (!res) {
      return "404";
    }

    return response.ok(res);
  }

  async getJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let jurusan;

    if (sekolah.status == "N") {
      jurusan = await MJurusan.query()
        .select("nama", "kode", "id")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    } else {
      jurusan = await MJurusan.query()
        .select(
          "id",
          "nama",
          "kode",
          "spp",
          "sumbangan_sarana_pendidikan",
          "kegiatan_osis",
          "mpls_jas_almamater",
          "seragam_sekolah",
          "toolkit_praktek"
        )
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      jurusan: jurusan,
      sekolah: sekolah,
    });
  }

  async postJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
    } = request.post();

    const jurusan = await MJurusan.create({
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putJurusan({ response, request, auth, params: { jurusan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
    } = request.post();

    const jurusan = await MJurusan.query().where({ id: jurusan_id }).update({
      nama,
      kode,
      spp,
      sumbangan_sarana_pendidikan,
      kegiatan_osis,
      mpls_jas_almamater,
      seragam_sekolah,
      toolkit_praktek,
      m_sekolah_id: sekolah.id,
    });

    if (!jurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteJurusan({ response, request, auth, params: { jurusan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const jurusan = await MJurusan.query().where({ id: jurusan_id }).update({
      dihapus: 1,
    });

    if (!jurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    return response.ok({
      guru: guru,
    });
  }

  async detailGuru({ response, request, params: { guru_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const guru = await User.query()
      .andWhere({ dihapus: 0 })
      .andWhere({ id: guru_id })
      .first();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ m_user_id: guru.id })
      .fetch();

    // const mataPelajaranIds = await Promise.all(
    //   mataPelajaran.toJSON().map((d) => d.id)
    // );

    return response.ok({
      guru: guru,
      mata_pelajaran: mataPelajaran,
    });
  }

  async postGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { gender, nama, whatsapp, password, avatar } = request.post();

    const validation = await validate(
      request.post(),
      rulesUserPost,
      messagesUser
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const guru = await User.create({
      nama,
      whatsapp,
      gender,
      password: await Hash.make(password),
      role: "guru",
      m_sekolah_id: sekolah.id,
      dihapus: 0,
      avatar,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putGuru({ response, request, auth, params: { guru_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { gender, nama, whatsapp, password, avatar } = request.post();

    let guru;

    if (!password) {
      guru = await User.query().where({ id: guru_id }).update({
        nama,
        whatsapp,
        gender,
        avatar,
      });
    } else {
      guru = await User.query()
        .where({ id: guru_id })
        .update({
          nama,
          whatsapp,
          gender,
          password: await Hash.make(password),
          avatar,
        });
    }

    if (!guru) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteGuru({ response, request, auth, params: { guru_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const guru = await User.query().where({ id: guru_id }).update({
      dihapus: 1,
    });

    if (!guru) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const jurusan = await MJurusan.query()
      .with("rombel", (builder) => {
        builder
          .withCount("anggotaRombel as jumlahAnggota", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({ m_ta_id: ta.id });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let jurusanData = {};

    await Promise.all(
      jurusan.toJSON().map(async (d) => {
        d.rombel.map((e) => {
          if (d.id == e.m_jurusan_id) {
            jurusanData[d.nama] = jurusanData[d.nama]
              ? jurusanData[d.nama] + e.__meta__.jumlahAnggota
              : e.__meta__.jumlahAnggota;
          }
        });
      })
    );

    const jumlahLaki = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ gender: "L" })
      .andWhere({ role: "siswa" })
      .getCount();

    const jumlahPerempuan = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ gender: "P" })
      .andWhere({ role: "siswa" })
      .getCount();

    let { search, page } = request.get();

    page = page ? parseInt(page) : 1;
    let siswa;

    if (search) {
      siswa = await User.query()
        .select("nama", "id", "whatsapp", "avatar", "gender")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .andWhere("nama", "like", `%${search}%`)
        .paginate(page, 25);
    } else {
      siswa = await User.query()
        .select("nama", "id", "whatsapp", "avatar", "gender")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .paginate(page, 25);
    }

    return response.ok({
      siswa: siswa,
      integrasi: sekolah.integrasi,
      jumlahLaki: jumlahLaki,
      jumlahPerempuan: jumlahPerempuan,
      jurusanData: Object.entries(jurusanData),
      jurusan,
    });
  }

  async postSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, whatsapp, password, gender, avatar } = request.post();

    const validation = await validate(
      request.post(),
      rulesUserPost,
      messagesUser
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const siswa = await User.create({
      nama,
      whatsapp,
      gender,
      password: await Hash.make(password),
      role: "siswa",
      m_sekolah_id: sekolah.id,
      dihapus: 0,
      avatar,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSiswa({ response, request, auth, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, whatsapp, gender, password, avatar } = request.post();

    let siswa;

    if (!password) {
      siswa = await User.query().where({ id: siswa_id }).update({
        nama,
        whatsapp,
        gender,
        avatar,
      });
    } else {
      siswa = await User.query()
        .where({ id: siswa_id })
        .update({
          nama,
          whatsapp,
          gender,
          password: await Hash.make(password),
          avatar,
        });
    }

    if (!siswa) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSiswa({ response, request, auth, params: { siswa_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const siswa = await User.query().where({ id: siswa_id }).update({
      dihapus: 1,
    });

    if (!siswa) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async loginPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { whatsapp, password } = request.post();

    const res = await User.query().where({ whatsapp: whatsapp }).first();

    if (!res) {
      return response.notFound({ message: "Akun tidak ditemukan" });
    }

    // if (!(await Hash.verify(password, res.password))) {
    //   return response.notFound({ message: "Password yang anda masukan salah" });
    // }

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async daftarPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama, nama_ibu, whatsapp, password } = request.post();

    const check = await User.query().where({ whatsapp: whatsapp }).first();

    if (check) {
      return response.forbidden({
        message: "Akun sudah terdaftar",
      });
    }

    const res = await User.create({
      nama,
      nama_ibu,
      whatsapp,
      password: await Hash.make(password),
      role: "ppdb",
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    const { token } = await auth.generate(res);

    return response.ok({
      message: `Selamat datang ${res.nama}`,
      token,
    });
  }

  async getAlumni({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, offset } = request.get();

    offset = offset ? parseInt(offset) : 0;

    let alumni;

    if (search) {
      alumni = await User.query()
        .with("infoAlumni")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "alumni" })
        .andWhere("nama", "like", `%${search}%`)
        .offset(offset)
        .limit(25)
        .fetch();
    } else {
      alumni = await User.query()
        .with("infoAlumni")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "alumni" })
        .offset(offset)
        .limit(25)
        .fetch();
    }

    return response.ok({
      alumni: alumni,
    });
  }

  async postAlumni({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      whatsapp,
      gender,
      tanggal_lahir,
      email,
      jurusan,
      tahun_masuk,
      pekerjaan,
      kantor,
      sektor_industri,
      sekolah_lanjutan,
      sertifikasi_keahlian,
      purnakarya,
      pengalaman,
      deskripsi,
    } = request.post();

    const user = await User.create({
      nama,
      whatsapp,
      email,
      gender,
      role: "alumni",
      m_sekolah_id: sekolah.id,
      tanggal_lahir,
      dihapus: 0,
    });

    const alumni = await MAlumni.create({
      jurusan,
      tahun_masuk,
      pekerjaan,
      kantor,
      sektor_industri,
      sekolah_lanjutan: sekolah_lanjutan.length
        ? sekolah_lanjutan.toString()
        : null,
      sertifikasi_keahlian: sertifikasi_keahlian.length
        ? sertifikasi_keahlian.toString()
        : null,
      pengalaman: pengalaman.length ? pengalaman.toString() : null,
      purnakarya,
      deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
      dihapus: 0,
      m_user_id: user.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putAlumni({ response, request, auth, params: { alumni_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      whatsapp,
      gender,
      tanggal_lahir,
      email,
      jurusan,
      tahun_masuk,
      pekerjaan,
      kantor,
      sektor_industri,
      sekolah_lanjutan,
      sertifikasi_keahlian,
      purnakarya,
      pengalaman,
      deskripsi,
    } = request.post();

    await User.query().where({ id: alumni_id }).update({
      nama,
      whatsapp,
      email,
      gender,
      tanggal_lahir,
    });

    const alumni = await MAlumni.query()
      .where({ m_user_id: alumni_id })
      .update({
        jurusan,
        tahun_masuk,
        pekerjaan,
        kantor,
        sektor_industri,
        sekolah_lanjutan: sekolah_lanjutan.length
          ? sekolah_lanjutan.toString()
          : null,
        sertifikasi_keahlian: sertifikasi_keahlian.length
          ? sertifikasi_keahlian.toString()
          : null,
        pengalaman: pengalaman.length ? pengalaman.toString() : null,
        purnakarya,
        deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
      });

    if (!alumni) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAlumni({ response, request, auth, params: { alumni_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const alumni = await User.query().where({ id: alumni_id }).update({
      dihapus: 1,
    });

    if (!alumni) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTA({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await Mta.query()
      .select("tahun", "semester", "nama_kepsek", "nip_kepsek", "aktif", "id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    return response.ok({
      ta: ta,
    });
  }

  async postTA({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tahun, semester, nama_kepsek, nip_kepsek, aktif } = request.post();

    if (aktif == 1) {
      await Mta.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .update({
          aktif: 0,
        });
    }

    const ta = await Mta.create({
      tahun,
      semester,
      nama_kepsek,
      nip_kepsek,
      aktif,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    const jamMengajar = [];

    for (let i = 0; i <= 6; i++) {
      jamMengajar.push(
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 1,
          jam_mulai: "06:45:00",
          jam_selesai: "07:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 2,
          jam_mulai: "07:30:00",
          jam_selesai: "08:15:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 3,
          jam_mulai: "08:15:00",
          jam_selesai: "09:00:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 4,
          jam_mulai: "09:00:00",
          jam_selesai: "09:45:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 0,
          jam_mulai: "09:45:00",
          jam_selesai: "10:00:00",
          istirahat: 1,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 5,
          jam_mulai: "10:00:00",
          jam_selesai: "10:45:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 6,
          jam_mulai: "10:45:00",
          jam_selesai: "11:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 0,
          jam_mulai: "12:15:00",
          jam_selesai: "12:30:00",
          istirahat: 1,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 7,
          jam_mulai: "12:30:00",
          jam_selesai: "13:15:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 8,
          jam_mulai: "13:15:00",
          jam_selesai: "14:00:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 9,
          jam_mulai: "14:00:00",
          jam_selesai: "14:45:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 10,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 11,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 12,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 13,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 14,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 15,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 16,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 17,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 18,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 19,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        },
        {
          kode_hari: i,
          hari: hari[i],
          jam_ke: 20,
          jam_mulai: "14:45:00",
          jam_selesai: "15:30:00",
          istirahat: 0,
          m_ta_id: ta.id,
          m_sekolah_id: sekolah.id,
        }
      );
    }

    await MJamMengajar.createMany(jamMengajar);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTA({ response, request, auth, params: { ta_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tahun, semester, nama_kepsek, nip_kepsek, aktif } = request.post();

    if (aktif == 1) {
      await Mta.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .update({
          aktif: 0,
        });
    }

    const ta = await Mta.query().where({ id: ta_id }).update({
      tahun,
      semester,
      nama_kepsek,
      nip_kepsek,
      aktif,
    });

    if (!ta) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTA({ response, request, auth, params: { ta_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const ta = await Mta.query().where({ id: ta_id }).update({
      dihapus: 1,
    });

    if (!ta) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { kode_hari, jam_saat_ini } = request.get();

    if (user.role == "guru") {
      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_user_id: user.id })
        .ids();

      const rombel = await MRombel.query()
        .where({ m_user_id: user.id })
        .first();

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .ids();

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("rombel")
        .with("jamMengajar")
        .with("mataPelajaran")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .orderBy("m_jam_mengajar_id", "asc")
        .fetch();

      const rombelMengajar = await MJadwalMengajar.query()
        .with("rombel")
        .with("mataPelajaran")
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .fetch();

      const jadwalMengajarData = [];

      await Promise.all(
        jadwalMengajar.toJSON().map(async (d) => {
          if (
            moment(d.jamMengajar.jam_mulai, "HH:mm:ss").format("HH:mm") <=
              jam_saat_ini &&
            moment(d.jamMengajar.jam_selesai, "HH:mm:ss").format("HH:mm") >=
              jam_saat_ini
          ) {
            jadwalMengajarData.push({ ...d, aktif: true });
          } else {
            jadwalMengajarData.push({ ...d, aktif: false });
          }
        })
      );

      return response.ok({
        jadwalMengajar: jadwalMengajarData,
        rombelMengajar: rombelMengajar,
        rombel,
        userRole: user.role,
      });
    } else if (user.role == "siswa") {
      const rombelIds = await MRombel.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const rombel = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .whereIn("m_rombel_id", rombelIds)
        .pluck("m_rombel_id");

      if (!rombel) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .ids();

      const jadwalMengajar = await MJadwalMengajar.query()
        .with("rombel")
        .with("jamMengajar")
        .with("mataPelajaran")
        .whereIn("m_rombel_id", rombel)
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .fetch();

      const rombelMengajar = await MJadwalMengajar.query()
        .with("rombel")
        .with("mataPelajaran", (builder) => {
          builder.with("user");
        })
        .whereIn("m_rombel_id", rombel)
        .fetch();

      const jadwalMengajarData = [];

      await Promise.all(
        jadwalMengajar.toJSON().map(async (d) => {
          if (
            moment(d.jamMengajar.jam_mulai, "HH:mm:ss").format("HH:mm") <=
              jam_saat_ini &&
            moment(d.jamMengajar.jam_selesai, "HH:mm:ss").format("HH:mm") >=
              jam_saat_ini
          ) {
            jadwalMengajarData.push({ ...d, aktif: false });
          } else {
            jadwalMengajarData.push({ ...d, aktif: false });
          }
        })
      );

      return response.ok({
        jadwalMengajar: jadwalMengajarData,
        rombelMengajar: rombelMengajar,
        rombel,
        userRole: user.role,
      });
    }

    let { kelompok } = request.get();

    const kelompokData = [
      { value: "reguler", label: "Reguler" },
      { value: "ekskul", label: "Ekstrakurikuler" },
      { value: "teori", label: "Teori (Peminatan)" },
      { value: "praktik", label: "Praktik" },
    ];

    if (!kelompok) {
      kelompok = kelompokData[0].value;
    }

    const rombel = await MRombel.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ kelompok: kelompok })
      .fetch();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    let tingkat = [];

    if (sekolah.tingkat == "SMK") {
      tingkat = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkat = ["VII", "VIII", "IX"];
    }

    return response.ok({
      rombel: rombel,
      jurusan: jurusan,
      guru: guru,
      tingkat: tingkat,
      userRole: user.role,
      kelompok: kelompokData,
    });
  }

  async detailRombel({
    response,
    request,
    auth,
    params: { jadwal_mengajar_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { rombel_id, kode_hari } = request.get();

    let jadwalMengajar;
    let analisisMateri;
    let analisisNilai;
    let checkAbsensi = [];
    let judulTugas;

    if (rombel_id) {
      jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran")
        .with("rombel", (builder) => {
          builder.with("anggotaRombel", (builder) => {
            builder.with("user");
          });
        })
        .where({ m_rombel_id: rombel_id })
        .first();
    } else {
      jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran", (builder) => {
          builder.with("user");
        })
        .with("rombel", (builder) => {
          builder.with("anggotaRombel", (builder) => {
            builder.with("user");
          });
        })
        .where({ id: jadwal_mengajar_id })
        .first();

      const jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere({ m_ta_id: ta.id })
        .ids();

      checkAbsensi = await MJadwalMengajar.query()
        .where({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
        .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .ids();

      if (!checkAbsensi) {
        checkAbsensi = [];
      }

      let materi = await MMateri.query()
        .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
        .andWhere({ m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id })
        .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
        .first();

      if (!materi) {
        materi = await MMateri.query()
          .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
          .andWhere({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
          .first();
      }

      const userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .pluck("m_user_id");

      const timelineIds = await MTimeline.query()
        .where({ dihapus: 0 })
        .andWhere({ tipe: "tugas" })
        .andWhere({ m_rombel_id: jadwalMengajar.toJSON().m_rombel_id })
        .andWhere({
          m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        })
        .ids();

      if (user.role == "guru") {
        judulTugas = await MTimeline.query()
          .select("id", "m_tugas_id", "tanggal_dibuat")
          .with("tugas", (builder) => {
            builder.select("id", "judul");
          })
          .with("ditugaskan", (builder) => {
            builder
              .select(
                Database.raw(
                  "sum(nilai) as jumlahNilai, count(id) as jumlahSiswa"
                )
              )
              .select("m_timeline_id")
              .groupBy("m_timeline_id");
          })
          .whereIn("id", timelineIds)
          .fetch();

        analisisNilai = await User.query()
          .with("tugas", (builder) => {
            builder.whereIn("m_timeline_id", timelineIds);
          })
          .whereIn("id", userIds)
          .fetch();

        analisisMateri = await TkMateriRombel.query()
          .with("materi", (builder) => {
            builder.with("bab", (builder) => {
              builder
                .with("topik", (builder) => {
                  builder
                    .withCount(
                      "materiKesimpulan as totalKesimpulan",
                      (builder) => {
                        builder
                          .whereIn("m_user_id", userIds)
                          .whereNotNull("kesimpulan");
                      }
                    )
                    .where({ dihapus: 0 });
                })
                .where({ dihapus: 0 });
            });
          })
          .with("rombel", (builder) => {
            builder.withCount("anggotaRombel as totalAnggota", (builder) => {
              builder.where({ dihapus: 0 });
            });
          })
          .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
          .andWhere({ m_materi_id: materi.id })
          .first();
      }
    }

    return response.ok({
      jadwalMengajar: jadwalMengajar,
      analisisMateri: analisisMateri,
      analisisNilai: analisisNilai,
      integrasi: sekolah.integrasi,
      checkAbsensi: checkAbsensi.length,
      judulTugas: judulTugas,
    });
  }

  async postRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tingkat, kode, m_jurusan_id, m_user_id, kelompok } = request.post();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ id: m_jurusan_id })
      .first();

    const rombel = await MRombel.create({
      tingkat,
      nama: m_jurusan_id ? `${tingkat} ${jurusan.kode} ${kode}` : kode,
      m_jurusan_id,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
      m_user_id,
      kelompok,
      dihapus: 0,
    });

    const jamMengajar = await MJamMengajar.query()
      .select("id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const jadwalMengajarData = await Promise.all(
      jamMengajar.toJSON().map(async (data) => {
        data.m_mata_pelajaran_id = null;
        data.m_rombel_id = rombel.id;
        data.m_jam_mengajar_id = data.id;
        data.m_sekolah_id = sekolah.id;
        data.m_ta_id = ta.id;
        delete data.id;
        delete data.jamFormat;

        return data;
      })
    );

    await MJadwalMengajar.createMany(jadwalMengajarData);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRombel({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tingkat, kode, m_jurusan_id, m_user_id, kelompok } = request.post();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ id: m_jurusan_id })
      .first();

    const rombel = await MRombel.query()
      .where({ id: rombel_id })
      .update({
        tingkat,
        nama: m_jurusan_id ? `${tingkat} ${jurusan.kode} ${kode}` : kode,
        m_jurusan_id,
        kelompok,
        m_user_id,
      });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRombel({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query().where({ id: rombel_id }).update({
      dihapus: 1,
    });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getJamMengajar({ response, request, auth, params: { rombel_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { hari } = request.get();

    hari = hari ? hari : 1;

    const jamMengajar = await MJamMengajar.query()
      .where({ kode_hari: hari })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    return {
      jamMengajar: jamMengajar,
    };
  }

  async putJamMengajar({
    response,
    request,
    auth,
    params: { jam_mengajar_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { jam_mulai, jam_selesai } = request.post();

    const jamMengajar = await MJamMengajar.query()
      .where({ id: jam_mengajar_id })
      .update({
        jam_mulai: jam_mulai,
        jam_selesai: jam_selesai,
      });

    if (!jamMengajar) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getMataPelajaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const mataPelajaran = await MMataPelajaran.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const mataPelajaranKelompokA = [];
    const mataPelajaranKelompokB = [];
    const mataPelajaranKelompokC = [];

    const guru = await User.query()
      .select("nama", "id", "whatsapp", "avatar", "gender")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    await Promise.all(
      mataPelajaran.toJSON().map(async (data) => {
        if (data.kelompok == "A") {
          mataPelajaranKelompokA.push(data);
        } else if (data.kelompok == "B") {
          mataPelajaranKelompokB.push(data);
        } else if (data.kelompok == "C") {
          mataPelajaranKelompokC.push(data);
        }
      })
    );

    return response.ok({
      mataPelajaranKelompokA,
      mataPelajaranKelompokB,
      mataPelajaranKelompokC,
      guru: guru,
    });
  }

  async postMataPelajaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, kode, kelompok, m_user_id, kkm } = request.post();

    const mataPelajaran = await MMataPelajaran.create({
      nama,
      kode,
      kelompok,
      m_user_id,
      kkm,
      m_ta_id: ta.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putMataPelajaran({
    response,
    request,
    auth,
    params: { mata_pelajaran_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, kode, kelompok, m_user_id, kkm } = request.post();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ id: mata_pelajaran_id })
      .update({
        nama,
        kode,
        kelompok,
        m_user_id,
        kkm,
      });

    if (!mataPelajaran) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMataPelajaran({
    response,
    request,
    auth,
    params: { mata_pelajaran_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const jurusan = await MMataPelajaran.query()
      .where({ id: mata_pelajaran_id })
      .update({
        dihapus: 1,
      });

    if (!jurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getJadwalMengajar({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const mataPelajaran = await MMataPelajaran.query()
      .with("user", (builder) => {
        builder.select("id", "nama").where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let tingkatRombel = [];

    if (sekolah.tingkat == "SMK") {
      tingkatRombel = ["X", "XI", "XII"];
    }

    const { tingkat, hari } = request.get();

    let tingkatGet;

    if (tingkat) {
      tingkatGet = tingkat;
    } else {
      tingkatGet = tingkatRombel[0];
    }

    const rombelIds = await MRombel.query()
      .where({ tingkat: tingkatGet })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const jamMengajar = await MJamMengajar.query()
      .with("jadwalMengajar", (builder) => {
        builder
          .with("mataPelajaran", (builder) => {
            builder.with("user");
          })
          .with("rombel")
          .whereIn("m_rombel_id", rombelIds);
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ kode_hari: hari })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    return response.ok({
      tingkatRombel,
      mataPelajaran,
      jamMengajar,
      hari: jamMengajar.toJSON()[0].hari,
      userRole: user.role,
    });
  }

  async putJadwalMengajar({
    response,
    request,
    auth,
    params: { jadwal_mengajar_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      m_mata_pelajaran_id,
      kosongkan,
      tingkat,
      m_rombel_id,
      m_jurusan_id,
    } = request.post();

    let jadwalMengajar;

    if (kosongkan) {
      jadwalMengajar = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .update({
          m_mata_pelajaran_id: null,
          diubah: 1,
        });

      return response.ok({
        message: messagePutSuccess,
      });
    } else {
      jadwalMengajar = await MJadwalMengajar.query()
        .where({ id: jadwal_mengajar_id })
        .update({
          m_mata_pelajaran_id,
          diubah: 1,
        });
    }

    if (!jadwalMengajar) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const mataPelajaran = await MMataPelajaran.query()
      .where({ id: m_mata_pelajaran_id })
      .first();

    if (mataPelajaran.kelompok == "C") {
      const check = await MMateri.query()
        .where({ m_mata_pelajaran_id })
        .andWhere({ tingkat })
        .andWhere({ m_jurusan_id })
        .first();

      if (!check) {
        const materi = await MMateri.create({
          tingkat,
          m_jurusan_id,
          m_mata_pelajaran_id,
        });

        await TkMateriRombel.create({
          m_materi_id: materi.id,
          m_rombel_id,
        });
      } else {
        await TkMateriRombel.create({
          m_materi_id: check.id,
          m_rombel_id,
        });
      }
    } else {
      const check = await MMateri.query()
        .where({ m_mata_pelajaran_id })
        .andWhere({ tingkat })
        .first();

      if (!check) {
        const materi = await MMateri.create({
          tingkat,
          m_jurusan_id: 0,
          m_mata_pelajaran_id,
        });

        await TkMateriRombel.create({
          m_materi_id: materi.id,
          m_rombel_id,
        });
      } else {
        await TkMateriRombel.create({
          m_materi_id: check.id,
          m_rombel_id,
        });
      }
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPost({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { limit } = request.get();

    let post;

    if (limit) {
      post = await MPost.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .limit(limit)
        .fetch();
    } else {
      post = await MPost.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      post: post,
    });
  }

  async detailPost({ response, request, auth, params: { post_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const post = await MPost.query()
      .with("tkPost")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ id: post_id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .first();

    const kategori = await MKategori.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      post: post,
      kategori: kategori,
    });
  }

  async postPost({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten, banner, m_kategori_id, simpan } = request.post();

    const slug = `${slugify(judul)}-${new Date().getTime()}`;

    let post;

    if (simpan) {
      post = await MPost.create({
        judul,
        slug,
        konten: konten ? Buffer(konten).toString("base64") : "",
        banner,
        disembunyikan: 1,
        dihapus: 0,
        m_user_id: user.id,
        m_sekolah_id: sekolah.id,
      });
    } else {
      post = await MPost.create({
        judul,
        slug,
        konten: konten ? Buffer(konten).toString("base64") : "",
        banner,
        disembunyikan: 0,
        dihapus: 0,
        m_user_id: user.id,
        m_sekolah_id: sekolah.id,
      });
    }

    let tkPostData = [];

    if (m_kategori_id) {
      await Promise.all(
        m_kategori_id.map((data) => {
          tkPostData.push({
            m_kategori_id: data,
            m_post_id: post.id,
          });
        })
      );

      await TkPost.createMany(tkPostData);
    }

    if (simpan) {
      return response.ok({
        message: messageSaveSuccess,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPost({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      judul,
      konten,
      banner,
      m_kategori_id,
      disembunyikan,
    } = request.post();

    let post;

    if (disembunyikan) {
      post = await MPost.query()
        .where({ id: post_id })
        .update({
          judul,
          konten: konten ? Buffer(konten).toString("base64") : "",
          banner,
          disembunyikan: 1,
          dihapus: 0,
        });
    } else {
      post = await MPost.query()
        .where({ id: post_id })
        .update({
          judul,
          konten: konten ? Buffer(konten).toString("base64") : "",
          banner,
          disembunyikan: 0,
          dihapus: 0,
        });
    }

    if (!post) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    let tkPostData = [];

    if (m_kategori_id) {
      await Promise.all(
        m_kategori_id.map((data) => {
          tkPostData.push({
            m_kategori_id: data,
            m_post_id: post.id,
          });
        })
      );

      await TkPost.createMany(tkPostData);
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePost({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const post = await MPost.query().where({ id: post_id }).update({
      dihapus: 1,
    });

    if (!post) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getKategori({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kategori = await MKategori.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      kategori: kategori,
    });
  }

  async postKategori({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten, banner } = request.post();

    const slug = slugify(judul);

    const post = await MPost.create({
      judul,
      slug,
      konten,
      banner,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategori({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten } = request.post();

    const post = await MPost.query().where({ id: post_id }).update({
      judul,
      konten,
      banner,
    });

    if (!post) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategori({ response, request, auth, params: { post_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query().where({ id: post_id }).update({
      dihapus: 1,
    });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postAnggotaRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { tingkat, kode, m_jurusan_id, m_user_id } = request.post();

    const jurusan = await MJurusan.query()
      .select("kode", "id")
      .where({ id: m_jurusan_id })
      .first();

    const rombel = await MRombel.create({
      tingkat,
      nama: `${tingkat} ${jurusan.kode} ${kode}`,
      m_jurusan_id,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
      m_user_id,
      dihapus: 0,
    });

    const jamMengajar = await MJamMengajar.query()
      .select("id")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const jadwalMengajarData = await Promise.all(
      jamMengajar.toJSON().map(async (data) => {
        data.m_mata_pelajaran_id = null;
        data.m_rombel_id = rombel.id;
        data.m_jam_mengajar_id = data.id;
        data.m_sekolah_id = sekolah.id;
        data.m_ta_id = ta.id;
        delete data.id;

        return data;
      })
    );

    await MJadwalMengajar.createMany(jadwalMengajarData);

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async importAnggotaRombelServices(filelocation, sekolah, m_rombel_id) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Sheet 1");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 2) {
        data.push({
          nama: explanation.getCell("A" + rowNumber).value,
          whatsapp: explanation.getCell("B" + rowNumber).value,
          gender: explanation.getCell("C" + rowNumber).value,
          role: explanation.getCell("D" + rowNumber).value,
          password: explanation.getCell("E" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkUser = await User.query()
          .where({ whatsapp: d.whatsapp })
          .first();

        if (!checkUser) {
          const createUser = await User.create({
            nama: d.nama,
            whatsapp: d.whatsapp,
            gender: d.gender,
            password: await Hash.make(`${d.password}`),
            role: "siswa",
            m_sekolah_id: sekolah.id,
            dihapus: 0,
          });

          await MAnggotaRombel.create({
            role: d.role,
            dihapus: 0,
            m_user_id: createUser.toJSON().id,
            m_rombel_id: m_rombel_id,
          });

          return;
        }

        const checkAnggotaRombel = await MAnggotaRombel.query()
          .where({ role: d.role })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_user_id: checkUser.toJSON().id })
          .andWhere({ m_rombel_id: m_rombel_id })
          .first();

        if (checkAnggotaRombel) {
          return {
            message: `${d.nama} sudah terdaftar`,
            error: true,
          };
        }

        await MAnggotaRombel.create({
          role: d.role,
          dihapus: 0,
          m_user_id: checkUser.toJSON().id,
          m_rombel_id: m_rombel_id,
        });

        return;
      })
    );

    return result;
  }

  async importAnggotaRombel({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.${file.extname}`;

    const { m_rombel_id } = request.post();

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importAnggotaRombelServices(
      `tmp/uploads/${fname}`,
      sekolah,
      m_rombel_id
    );
  }

  async deleteAnggotaRombel({
    response,
    request,
    auth,
    params: { rombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const rombel = await MRombel.query().where({ id: rombel_id }).update({
      dihapus: 1,
    });

    if (!rombel) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getMateri({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    if (user.role == "siswa") {
      const rombelIds = await MRombel.query().where({ m_ta_id: ta.id }).ids();

      const rombelIdsAnggota = await MAnggotaRombel.query()
        .whereIn("m_rombel_id", rombelIds)
        .andWhere({ m_user_id: user.id })
        .pluck("m_rombel_id");

      const materiIds = await TkMateriRombel.query()
        .whereIn("m_rombel_id", rombelIdsAnggota)
        .pluck("m_materi_id");

      const materi = await MMateri.query()
        .with("jurusan")
        .with("mataPelajaran", (builder) => {
          builder.with("user");
        })
        .withCount("bab", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("id", materiIds)
        .fetch();

      const materiLainnya = await MMateri.query()
        .with("user")
        .with("sekolah")
        .withCount("bab", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      return response.ok({
        materi,
        materiLainnya,
      });
    }

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .withCount("bab", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    const materiLainnya = await MMateri.query()
      .with("user")
      .with("sekolah")
      .withCount("bab", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      materi,
      materiLainnya,
    });
  }

  async detailMateri({ response, request, auth, params: { materi_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .with("user")
      .with("sekolah")
      .where({ id: materi_id })
      .first();

    const bab = await MBab.query()
      .with("topik", (builder) => {
        builder
          .with("materiKesimpulan", (builder) => {
            builder.where({ m_user_id: user.id });
          })
          .where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_materi_id: materi_id })
      .fetch();

    let looping = true;

    const babData = [];

    await Promise.all(
      bab.toJSON().map(async (d) => {
        d.topik.map(async (e, idx) => {
          if (!e.materiKesimpulan) {
            if (idx == 0) {
              e.lock = false;
            } else if (looping == false) {
              e.lock = false;
              looping = true;
            } else {
              e.lock = true;
            }
          } else {
            e.lock = false;
            looping = false;
          }
        });

        babData.push(d);
      })
    );

    return response.ok({
      materi,
      bab: babData,
    });
  }

  async postMateri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama } = request.post();

    await MMateri.create({
      nama,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putMateri({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { nama } = request.post();

    const materi = await MMateri.query().where({ id: materi_id }).update({
      nama,
    });

    if (!materi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMateri({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const materi = await MMateri.query().where({ id: materi_id }).update({
      dihapus: 1,
    });

    if (!materi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postMateriKesimpulan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { waktu_mulai, m_topik_id } = request.post();

    const check = await TkMateriKesimpulan.query()
      .where({ m_user_id: user.id })
      .andWhere({ m_topik_id: m_topik_id })
      .first();

    if (!check) {
      await TkMateriKesimpulan.create({
        waktu_mulai,
        m_topik_id,
        m_user_id: user.id,
        dibaca: 0,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putMateriKesimpulan({
    response,
    request,
    auth,
    params: { materi_kesimpulan_id },
  }) {
    const domain = request.headers().origin;

    const user = await auth.getUser();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      kesimpulan,
      waktu_mulai,
      waktu_selesai,
      m_topik_id,
    } = request.post();

    const materiKesimpulan = await TkMateriKesimpulan.query()
      .where({ m_topik_id: m_topik_id })
      .andWhere({ m_user_id: user.id })
      .update({
        kesimpulan: kesimpulan ? Buffer(kesimpulan).toString("base64") : "",
        waktu_selesai,
      });

    if (!materiKesimpulan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async detailBab({ response, request, auth, params: { bab_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const bab = await MBab.query().where({ id: bab_id }).first();

    const topikIds = await MTopik.query()
      .select("id", "kuis", "m_bab_id")
      .with("materiKesimpulan", (builder) => {
        builder.where({ m_user_id: user.id });
      })
      .where({ m_bab_id: bab.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let looping = true;
    const topikIdsData = [];

    await Promise.all(
      topikIds.toJSON().map(async (d, idx) => {
        if (!d.materiKesimpulan) {
          if (idx == 0) {
            d.lock = false;
          } else if (looping == false) {
            d.lock = false;
            looping = true;
          } else {
            d.lock = true;
          }
        } else {
          d.lock = false;
          looping = false;
        }

        topikIdsData.push(d);
      })
    );

    return response.ok({
      bab,
      topikIds: topikIdsData,
    });
  }

  async postBab({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, m_materi_id } = request.post();

    const bab = await MBab.create({
      judul,
      m_materi_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBab({ response, request, auth, params: { bab_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { judul } = request.post();

    const bab = await MBab.query().where({ id: bab_id }).update({
      judul,
    });

    if (!bab) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteBab({ response, request, auth, params: { bab_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const bab = await MBab.query().where({ id: bab_id }).update({
      dihapus: 1,
    });

    if (!bab) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getPrestasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, offset, tingkat, nama_siswa } = request.get();

    offset = offset ? parseInt(offset) : 0;

    let prestasi;

    if (search) {
      const userIds = await User.query()
        .where("nama", "like", `%${search}%`)
        .andWhere({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .ids();

      if (tingkat) {
        prestasi = await MPrestasi.query()
          .with("user")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ tingkat })
          .whereIn("m_user_id", userIds)
          .offset(offset)
          .limit(25)
          .fetch();
      } else {
        prestasi = await MPrestasi.query()
          .with("user")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .whereIn("m_user_id", userIds)
          .offset(offset)
          .limit(25)
          .fetch();
      }
    } else {
      if (tingkat) {
        prestasi = await MPrestasi.query()
          .with("user")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ tingkat })
          .offset(offset)
          .limit(25)
          .fetch();
      } else {
        prestasi = await MPrestasi.query()
          .with("user")
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .offset(offset)
          .limit(25)
          .fetch();
      }
    }

    let tingkatData = [
      { label: "Internasional", value: "internasional" },
      { label: "Nasional", value: "nasional" },
      { label: "Provinsi", value: "provinsi" },
      { label: "Kabupaten/Kota", value: "kabupaten" },
    ];

    let user;

    if (nama_siswa) {
      user = await User.query()
        .select("id", "nama")
        .where("nama", "like", `%${nama_siswa}%`)
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .fetch();
    } else {
      user = await User.query()
        .select("id", "nama")
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .limit(25)
        .fetch();
    }

    return response.ok({
      prestasi,
      tingkat: tingkatData,
      user: user,
    });
  }

  async postPrestasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      tingkat,
      peringkat,
      tempat,
      tahun,
      m_user_id,
    } = request.post();

    await MPrestasi.create({
      nama,
      tingkat,
      peringkat,
      tempat,
      tahun,
      dihapus: 0,
      m_user_id: m_user_id,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPrestasi({ response, request, auth, params: { prestasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      nama,
      tingkat,
      peringkat,
      tempat,
      tahun,
      m_user_id,
    } = request.post();

    const prestasi = await MPrestasi.query().where({ id: prestasi_id }).update({
      nama,
      tingkat,
      peringkat,
      tempat,
      tahun,
      m_user_id,
    });

    if (!prestasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePrestasi({ response, request, auth, params: { prestasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const prestasi = await MPrestasi.query().where({ id: prestasi_id }).update({
      dihapus: 1,
    });

    if (!prestasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTopik({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    return response.ok({
      materi,
    });
  }

  async detailTopik({ response, request, auth, params: { topik_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { analisis, m_jadwal_mengajar_id } = request.get();

    if (analisis) {
      const jadwalMengajar = await MJadwalMengajar.query()
        .where({ id: m_jadwal_mengajar_id })
        .first();

      const userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .pluck("m_user_id");

      const user = await User.query()
        .with("kesimpulan", (builder) => {
          builder.where({ m_topik_id: topik_id });
        })
        .whereIn("id", userIds)
        .fetch();

      const topik = await MTopik.query()
        .with("bab")
        .withCount("materiKesimpulan as sudahBaca", (builder) => {
          builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
        })
        .where({ id: topik_id })
        .first();

      return response.ok({
        user: user,
        topik: topik,
      });
    }

    const topik = await MTopik.query()
      .with("soalKuis", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("materiKesimpulan", (builder) => {
        builder.where({ m_user_id: user.id });
      })
      .where({ id: topik_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      topik,
    });
  }

  async postTopik({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { kuis, m_bab_id } = request.post();

    const topik = await MTopik.create({
      judul: "Judul Topik",
      kuis,
      m_bab_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
      topik_id: topik.id,
    });
  }

  async putTopik({ response, request, auth, params: { topik_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, konten, lampiran, link } = request.post();

    const topik = await MTopik.query()
      .where({ id: topik_id })
      .update({
        judul,
        konten: konten ? Buffer(konten).toString("base64") : "",
        lampiran: lampiran.toString(),
        link: link.toString(),
      });

    if (!topik) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTopik({ response, request, auth, params: { topik_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const topik = await MTopik.query().where({ id: topik_id }).update({
      dihapus: 1,
    });

    if (!topik) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getSoalKuis({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const materi = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    return response.ok({
      materi,
    });
  }

  async detailSoalKuis({ response, request, auth, params: { topik_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const topik = await MTopik.query()
      .where({ id: topik_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      topik,
    });
  }

  async postSoalKuis({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      pertanyaan,
      pg_a,
      pg_b,
      pg_c,
      pg_d,
      pg_e,
      pg_kj,
      pg_poin,
      rubrik_kj,
      esai,
      pembahasan,
      m_topik_id,
    } = request.post();

    if (esai == 1) {
      await MSoalKuis.create({
        pertanyaan,
        rubrik_kj: JSON.stringify(rubrik_kj),
        esai: 1,
        pembahasan,
        m_topik_id,
        dihapus: 0,
      });
    } else {
      await MSoalKuis.create({
        pertanyaan,
        pg_a,
        pg_b,
        pg_c,
        pg_d,
        pg_e,
        pg_kj,
        pg_poin,
        esai: 0,
        pembahasan,
        m_topik_id,
        dihapus: 0,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSoalKuis({ response, request, auth, params: { soal_kuis_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      pertanyaan,
      pg_a,
      pg_b,
      pg_c,
      pg_d,
      pg_e,
      pg_kj,
      pg_poin,
      rubrik_kj,
      pembahasan,
    } = request.post();

    const soalKuis = await MSoalKuis.query()
      .where({ id: soal_kuis_id })
      .first();

    if (!soalKuis) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (soalKuis.esai == 1) {
      await MSoalKuis.query()
        .where({ id: soal_kuis_id })
        .update({
          pertanyaan,
          rubrik_kj: JSON.stringify(rubrik_kj),
          esai: 1,
          pembahasan,
        });
    } else {
      await MSoalKuis.query().where({ id: soal_kuis_id }).update({
        pertanyaan,
        pg_a,
        pg_b,
        pg_c,
        pg_d,
        pg_e,
        pg_kj,
        pg_poin,
        esai: 0,
        pembahasan,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSoalKuis({ response, request, auth, params: { soal_kuis_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const topik = await MSoalKuis.query().where({ id: soal_kuis_id }).update({
      dihapus: 1,
    });

    if (!topik) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTugas({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { m_jadwal_mengajar_id, hari_ini, jam_saat_ini } = request.get();

    if (user.role == "siswa") {
      return response.ok({
        message: "siswa",
      });
    }

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .where({ id: m_jadwal_mengajar_id })
      .first();

    const rombelIds = await MJadwalMengajar.query()
      .where({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      .pluck("m_rombel_id");

    let materi = await MMateri.query()
      .with("materiRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .whereIn("m_rombel_id", rombelIds);
      })
      .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
      .andWhere({
        m_mata_pelajaran_id: jadwalMengajar.toJSON().m_mata_pelajaran_id,
      })
      .andWhere({
        m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id,
      })
      .first();

    if (!materi) {
      materi = await MMateri.query()
        .with("materiRombel", (builder) => {
          builder
            .with("rombel", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .whereIn("m_rombel_id", rombelIds);
        })
        .where({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
        .andWhere({
          m_mata_pelajaran_id: jadwalMengajar.toJSON().m_mata_pelajaran_id,
        })
        .first();
    }

    const timelineTugas = await MTimeline.query()
      .with("tugas", (builder) => {
        builder.with("timeline", (builder) => {
          builder.with("tkTimeline").with("rombel");
        });
      })
      .withCount("komen as total_komen", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("tkTimeline as total_respon", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_siswa")
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tipe: "tugas" })
      .orderBy("id", "desc")
      .fetch();

    const tugasSaatIni = [];
    const tugasTerjadwal = [];
    const tugasSelesai = [];
    const tugasTerperiksa = [];
    const tugasDraf = [];

    await Promise.all(
      timelineTugas.toJSON().map(async (d) => {
        if (d.tugas.draft) {
          tugasDraf.push(d);
        } else if (
          moment(d.tugas.tanggal_pembagian).format("YYYY-MM-DD") <= hari_ini &&
          moment(d.tugas.tanggal_pengumpulan).format("YYYY-MM-DD") >= hari_ini
        ) {
          tugasSaatIni.push(d);
        } else if (
          moment(d.tugas.tanggal_pembagian).format("YYYY-MM-DD") >= hari_ini &&
          moment(d.tugas.waktu_pembagian).format("HH:mm") >= jam_saat_ini
        ) {
          tugasTerjadwal.push(d);
        } else if (
          moment(d.tugas.tanggal_pengumpulan).format("YYYY-MM-DD") <= hari_ini
        ) {
          tugasSelesai.push(d);
        }
      })
    );

    return response.ok({
      materi,
      tugasSaatIni,
      tugasTerjadwal,
      tugasSelesai,
      tugasTerperiksa,
      tugasDraf,
    });
  }

  async postTugas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      instruksi,
      tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan,
      waktu_pengumpulan,
      kkm,
      lampiran,
      link,
      draft,
      list_anggota,
      list_rombel,
    } = request.post();

    const tugas = await MTugas.create({
      judul,
      instruksi,
      tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan,
      waktu_pengumpulan,
      kkm,
      lampiran: lampiran.toString(),
      link: link.toString(),
      draft,
      dihapus: 0,
      m_user_id: user.id,
    });

    if (tugas) {
      let timeline;

      if (list_anggota.length) {
        timeline = await MTimeline.create({
          m_user_id: user.id,
          m_rombel_id: list_rombel[0],
          m_tugas_id: tugas.id,
          tipe: "tugas",
          dihapus: 0,
        });
      } else {
        const timelineData = [];

        await Promise.all(
          list_rombel.map((d) => {
            timelineData.push({
              m_user_id: user.id,
              m_rombel_id: d,
              m_tugas_id: tugas.id,
              tipe: "tugas",
              dihapus: 0,
            });
          })
        );

        timeline = await MTimeline.createMany(timelineData);
      }

      if (timeline) {
        let anggotaRombel;

        if (list_anggota.length) {
          anggotaRombel = await MAnggotaRombel.query()
            .where({ m_rombel_id: list_rombel[0] })
            .whereIn("m_user_id", list_anggota)
            .fetch();
        } else {
          anggotaRombel = await MAnggotaRombel.query()
            .whereIn("m_rombel_id", list_rombel)
            .fetch();
        }

        let userIds = [];

        if (list_anggota.length) {
          await Promise.all(
            anggotaRombel.toJSON().map(async (d) => {
              userIds.push({
                m_user_id: d.m_user_id,
                tipe: "tugas",
                m_timeline_id: timeline.id,
                dihapus: 0,
              });
            })
          );
        } else {
          await Promise.all(
            timeline.map(async (t) => {
              await Promise.all(
                anggotaRombel.toJSON().map(async (d) => {
                  if (t.m_rombel_id == d.m_rombel_id) {
                    userIds.push({
                      m_user_id: d.m_user_id,
                      tipe: "tugas",
                      m_timeline_id: t.id,
                      dihapus: 0,
                    });
                  }
                })
              );
            })
          );
        }

        await TkTimeline.createMany(userIds);
      }
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTugas({ response, request, auth, params: { tugas_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      instruksi,
      tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan,
      waktu_pengumpulan,
      kkm,
      lampiran,
      link,
      draft,
      list_anggota,
      list_rombel,
    } = request.post();

    const tugas = await MTugas.query().where({ id: tugas_id }).update({
      judul,
      instruksi,
      tanggal_pembagian,
      waktu_pembagian,
      tanggal_pengumpulan,
      waktu_pengumpulan,
      kkm,
      lampiran: lampiran.toString(),
      link: link.toString(),
      draft,
    });

    if (tugas) {
      let timeline;

      if (list_anggota) {
        timeline = await MTimeline.create({
          m_user_id: user.id,
          m_rombel_id: list_rombel[0],
          m_tugas_id: tugas.id,
          tipe: "tugas",
          dihapus: 0,
        });
      } else {
        const timelineData = [];

        await Promise.all(
          list_rombel.map((d) => {
            timelineData.push({
              m_user_id: user.id,
              m_rombel_id: d,
              m_tugas_id: tugas.id,
              tipe: "tugas",
              dihapus: 0,
            });
          })
        );

        timeline = await MTimeline.createMany(timelineData);
      }

      if (timeline) {
        let anggotaRombel;

        if (list_anggota) {
          anggotaRombel = await MAnggotaRombel.query()
            .whereIn("m_user_id", list_anggota)
            .fetch();
        } else {
          anggotaRombel = await MAnggotaRombel.query()
            .whereIn("m_rombel_id", list_rombel)
            .fetch();
        }

        let userIds = [];

        await Promise.all(
          anggotaRombel.toJSON().map(async (d) => {
            userIds.push({
              m_user_id: d.m_user_id,
              tipe: "tugas",
              m_timeline_id: timeline.id,
              dihapus: 0,
            });
          })
        );

        await TkTimeline.createMany(userIds);
      }
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  // delete soon
  async deleteTugas({ response, request, auth, params: { tugas_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const tugas = await MTugas.query().where({ id: tugas_id }).update({
      dihapus: 1,
    });

    if (!tugas) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const timelineIds = await MTimeline.query()
      .where({ m_tugas_id: tugas_id })
      .ids();

    const timeline = await MTimeline.query()
      .where({ m_tugas_id: tugas_id })
      .update({
        dihapus: 1,
      });

    if (!timeline) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    await TkTimeline.query()
      .whereIn("m_timeline_id", timelineIds)
      .update({ dihapus: 1 });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getTimeline({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      m_jadwal_mengajar_id,
      absen,
      hari_ini,
      waktu_saat_ini,
    } = request.get();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: m_jadwal_mengajar_id })
      .first();

    let timeline;

    if (user.role == "siswa") {
      const timelineIds = await MTimeline.query()
        .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .andWhere({
          m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
        })
        .orWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const timeline = await TkTimeline.query()
        .with("timeline", (builder) => {
          builder
            .with("tugas")
            .withCount("komen as total_komen", (builder) => {
              builder.where({ dihapus: 0 });
            })
            .with("komen", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            });
        })
        .with("user")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .whereIn("m_timeline_id", timelineIds)
        .orderBy("id", "desc")
        .fetch();

      let timelineData = [];

      await Promise.all(
        timeline.toJSON().map(async (d) => {
          if (d.tipe == "tugas") {
            if (
              moment(
                `${d.timeline.tugas.tanggal_pengumpulan} ${d.timeline.tugas.waktu_pengumpulan}`
              ).format("YYYY-MM-DD HH:mm:ss") >= waktu_saat_ini
            ) {
              timelineData.push({ ...d, sudah_lewat: true });
            } else {
              timelineData.push({ ...d, sudah_lewat: false });
            }
          } else {
            if (d.tipe == "diskusi") {
              if (
                moment(d.tanggal_pembagian).format("YYYY-MM-DD") <=
                moment(waktu_saat_ini).format("YYYY-MM-DD")
              ) {
                timelineData.push({ ...d });
              } else if (
                moment(d.tanggal_pembagian).format("YYYY-MM-DD") >
                moment(waktu_saat_ini).format("YYYY-MM-DD")
              ) {
                return;
              } else {
                timelineData.push({ ...d });
              }
            } else {
              timelineData.push({ ...d });
            }
          }
        })
      );

      return response.ok({
        timeline: timelineData,
        role: user.role,
      });
    }

    if (absen) {
      timeline = await MTimeline.query()
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("absen");
        })
        .with("user")
        .withCount("tkTimeline as total_siswa")
        .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    } else {
      const tugasIds = await MTugas.query()
        .where("tanggal_pembagian", "<=", hari_ini)
        .andWhere("tanggal_pengumpulan", ">=", hari_ini)
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const userIds = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .pluck("m_user_id");

      const timelineLainnya = await MTimeline.query()
        .where({ dihapus: 0 })
        .whereIn("m_user_id", userIds)
        .ids();

      timeline = await MTimeline.query()
        .with("tugas")
        .with("user")
        .with("komen", (builder) => {
          builder.with("user").where({ dihapus: 0 });
        })
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("waktu_pengumpulan");
        })
        .withCount("tkTimeline as total_absen", (builder) => {
          builder.whereNotNull("waktu_absen");
        })
        .withCount("tkTimeline as total_siswa")
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        // .orWhereIn("m_tugas_id", tugasIds)
        // .orWhereIn("id", timelineLainnya)
        .orderBy("id", "desc")
        .fetch();
    }

    return response.ok({
      timeline: timeline,
    });
  }

  async detailTimeline({ response, request, auth, params: { timeline_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { waktu_saat_ini } = request.get();

    if (user.role == "siswa") {
      const timeline = await TkTimeline.query()
        .with("timeline", (builder) => {
          builder
            .with("rombel")
            .with("tugas")
            .with("komen", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            });
        })
        .with("komen", (builder) => {
          builder.with("user");
        })
        .where({ id: timeline_id })
        .andWhere({ dihapus: 0 })
        .first();

      let sudah_lewat = false;

      if (
        timeline.toJSON().tipe == "tugas" &&
        moment(
          `${timeline.toJSON().timeline.tugas.tanggal_pengumpulan} ${
            timeline.toJSON().timeline.tugas.waktu_pengumpulan
          }`
        ).format("YYYY-MM-DD HH:mm:ss") >= waktu_saat_ini
      ) {
        sudah_lewat = true;
      }

      return response.ok({
        timeline,
        sudah_lewat,
      });
    }

    const timeline = await MTimeline.query()
      .with("rombel")
      .with("komen", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .with("tugas")
      .with("tkTimeline", (builder) => {
        builder.with("user");
      })
      .with("listSiswaBelum", (builder) => {
        builder.with("user").whereNull("waktu_pengumpulan");
      })
      .with("listSiswaTerkumpul", (builder) => {
        builder
          .with("user")
          .where({ dikumpulkan: 1 })
          .with("komen", (builder) => {
            builder.with("user").where({ dihapus: 0 });
          });
      })
      .with("listSiswaDinilai", (builder) => {
        builder
          .with("user")
          .whereNotNull("nilai")
          .with("komen", (builder) => {
            builder.with("user").where({ dihapus: 0 });
          });
      })
      .withCount("tkTimeline as total_respon_tugas", (builder) => {
        builder.whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_respon_absen", (builder) => {
        builder.whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_hadir", (builder) => {
        builder.where({ absen: "hadir" }).whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_sakit", (builder) => {
        builder.where({ absen: "sakit" }).whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_izin", (builder) => {
        builder.where({ absen: "izin" }).whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_alpa", (builder) => {
        builder.whereNull("waktu_absen");
      })
      .withCount("tkTimeline as total_tugas_belum", (builder) => {
        builder.whereNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_tugas_terkumpul", (builder) => {
        builder.with("user").whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_tugas_dinilai", (builder) => {
        builder.whereNotNull("nilai");
      })
      .withCount("tkTimeline as total_siswa")
      .where({ id: timeline_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      timeline,
    });
  }

  async postTimeline({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      m_jadwal_mengajar_id,
      deskripsi,
      tipe,
      gmeet,
      lampiran,
      hari_ini,
      tanggal_dibuat,
      tanggal_pembagian,
    } = request.post();

    const jadwalMengajar = await MJadwalMengajar.query()
      .where({ id: m_jadwal_mengajar_id })
      .first();

    let timeline;

    if (tipe == "absen") {
      await MJadwalMengajar.query().where({ id: m_jadwal_mengajar_id }).update({
        diubah: 0,
      });

      timeline = await MTimeline.create({
        m_user_id: user.id,
        m_rombel_id: jadwalMengajar.m_rombel_id,
        tipe,
        deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
        gmeet,
        tanggal_dibuat,
        dihapus: 0,
        tanggal_pembagian,
      });

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .fetch();

      let userIds = [];

      await Promise.all(
        anggotaRombel.toJSON().map(async (d) => {
          userIds.push({
            m_user_id: d.m_user_id,
            tipe: "absen",
            m_timeline_id: timeline.id,
            dihapus: 0,
          });
        })
      );

      await TkTimeline.createMany(userIds);
    } else if (tipe == "diskusi") {
      timeline = await MTimeline.create({
        m_user_id: user.id,
        m_rombel_id: jadwalMengajar.m_rombel_id,
        deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
        lampiran: lampiran.toString(),
        tipe,
        dihapus: 0,
      });

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .fetch();

      let userIds = [];

      await Promise.all(
        anggotaRombel.toJSON().map(async (d) => {
          userIds.push({
            m_user_id: d.m_user_id,
            tipe: "diskusi",
            m_timeline_id: timeline.id,
            dihapus: 0,
          });
        })
      );

      await TkTimeline.createMany(userIds);
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTimeline({ response, request, auth, params: { timeline_id } }) {
    const user = await auth.getUser();
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      deskripsi,
      gmeet,
      jurnal,
      rpp,
      m_jadwal_mengajar_id,
      tipe,
      lampiran,
      absen,
      keterangan,
      waktu_absen,
      waktu_pengumpulan,
      dikumpulkan,
      tanggal_pembagian,
      nilai,
    } = request.post();

    let timeline;

    if (tipe == "nilai") {
      timeline = await TkTimeline.query().where({ id: timeline_id }).update({
        nilai,
      });
    }

    if (tipe == "diskusi") {
      timeline = await MTimeline.query()
        .where({ id: timeline_id })
        .update({
          m_jadwal_mengajar_id,
          deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
          lampiran: lampiran.toString(),
          tipe,
        });
    }

    if (tipe == "absen") {
      if (user.role == "siswa") {
        timeline = await TkTimeline.query().where({ id: timeline_id }).update({
          lampiran: lampiran.toString(),
          absen: absen,
          keterangan: keterangan,
          waktu_absen: waktu_absen,
        });
      } else {
        timeline = await MTimeline.query()
          .where({ id: timeline_id })
          .update({
            rpp: rpp ? rpp.toString() : "",
            jurnal,
            deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
            gmeet,
          });
      }
    }

    if (tipe == "tugas") {
      timeline = await TkTimeline.query().where({ id: timeline_id }).update({
        lampiran: lampiran.toString(),
        keterangan: keterangan,
        waktu_pengumpulan: waktu_pengumpulan,
        dikumpulkan: dikumpulkan,
      });
    }

    if (!timeline) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTimeline({ response, request, auth, params: { timeline_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const timeline = await MTimeline.query().where({ id: timeline_id }).update({
      dihapus: 1,
    });

    if (!timeline) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    await TkTimeline.query()
      .where({ m_timeline_id: timeline_id })
      .update({ dihapus: 1 });

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async downloadTimelineAbsen({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { jadwal_mengajar_id } = request.post();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: jadwal_mengajar_id })
      .first();

    const timeline = await MTimeline.query()
      .with("tkTimeline", (builder) => {
        builder.with("user");
      })
      .with("user")
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
      .andWhere({ tipe: "absen" })
      .andWhere({ dihapus: 0 })
      .fetch();

    const workbook = new Excel.Workbook();

    await Promise.all(
      timeline.toJSON().map(async (d, idx) => {
        // Create workbook & add worksheet
        const worksheet = workbook.addWorksheet(`Pertemuan ${idx + 1}`);

        await Promise.all(
          d.tkTimeline.map(async (e) => {
            // add column headers
            worksheet.getRow(10).values = ["Nama", "Absen"];

            worksheet.columns = [{ key: "user" }, { key: "absen" }];

            // Add row using key mapping to columns
            const row = worksheet.addRow({
              user: e.user.nama,
              absen: e.absen || "alpa",
            });
          })
        );

        worksheet.getCell("A1").value = "Nama";
        worksheet.getCell("B1").value = d.user.nama;
        worksheet.getCell("D1").value = "NIP";
        worksheet.getCell("E1").value = d.user.nip;
        worksheet.getCell("D2").value = "Link Pertemuan";
        worksheet.getCell("E2").value = d.gmeet;
        worksheet.getCell("A2").value = "Tanggal Pertemuan";
        worksheet.getCell("B2").value = d.tanggal_dibuat;

        worksheet.getCell("A4").value = "RPP";
        worksheet.getCell("A5").value = d.rpp.toString();

        worksheet.getCell("A7").value = "Deskripsi";
        worksheet.getCell("A8").value = d.deskripsi;

        worksheet.columns.forEach(function (column, i) {
          let maxLength = 0;
          column["eachCell"]({ includeEmpty: true }, function (cell) {
            let columnLength = cell.value ? cell.value.toString().length : 10;

            if (cell.value == "alpa") {
              // red
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "F9D5D4" },
                bgColor: { argb: "F9D5D4" },
              };

              cell.font = {
                color: { argb: "FC544B" },
              };
            }

            if (cell.value == "sakit") {
              // yellow
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FCE8D2" },
                bgColor: { argb: "FCE8D2" },
              };

              cell.font = {
                color: { argb: "F9AC50" },
              };
            }

            if (cell.value == "izin") {
              // green
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "E0FCE4" },
                bgColor: { argb: "E0FCE4" },
              };

              cell.font = {
                color: { argb: "63ED7A" },
              };
            }

            if (cell.value == "hadir") {
              // green
              cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "2680EB" },
                bgColor: { argb: "2680EB" },
              };

              cell.font = {
                color: { argb: "FFFFFF" },
              };
            }

            if (columnLength > maxLength) {
              maxLength = columnLength;
            }
          });

          column.width = maxLength < 15 ? 15 : maxLength > 30 ? 30 : 15;
        });
      })
    );

    let namaFile = `/uploads/absen-pertemuan-${new Date().getTime()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async postTkTimelineKomen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tk_timeline_id, komen } = request.post();

    const tkTimelineKomen = await TkTimelineKomen.create({
      dihapus: 0,
      tk_timeline_id: tk_timeline_id,
      komen: komen,
      m_user_id: user.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deleteTkTimelineKomen({
    response,
    request,
    auth,
    params: { timeline_komen_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const tkTimelineKomen = await TkTimelineKomen.query()
      .where({ id: timeline_komen_id })
      .update({
        dihapus: 1,
      });

    if (!tkTimelineKomen) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postTimelineKomen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_timeline_id, komen } = request.post();

    if (user.role == "siswa") {
      const tkTimeline = await TkTimeline.query()
        .where({ id: m_timeline_id })
        .first();

      m_timeline_id = tkTimeline.m_timeline_id;
    }

    const timelineKomen = await MTimelineKomen.create({
      dihapus: 0,
      m_timeline_id: m_timeline_id,
      komen: komen,
      m_user_id: user.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deleteTimelineKomen({
    response,
    request,
    auth,
    params: { timeline_komen_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const timelineKomen = await MTimelineKomen.query()
      .where({ id: timeline_komen_id })
      .update({
        dihapus: 1,
      });

    if (!timelineKomen) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { role, tanggal } = request.get();

    if (role == "guru") {
      const absen = await User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: role })
        .fetch();

      return response.ok({
        absen: absen,
      });
    } else if (role == "siswa") {
      const rombel = await MRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();

      let rombelData = [];

      await Promise.all(
        rombel.toJSON().map(async (d) => {
          const userIds = await MAnggotaRombel.query()
            .where({ m_rombel_id: d.id })
            .pluck("m_user_id");

          const totalHadir = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ keterangan: "hadir" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalSakit = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ keterangan: "sakit" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalIzin = await MAbsen.query()
            .with("user")
            .where("created_at", "like", `%${tanggal}%`)
            .andWhere({ keterangan: "izin" })
            .whereIn("m_user_id", userIds)
            .count("* as total");
          const totalAlpa =
            userIds.length -
            (totalHadir[0].total + totalSakit[0].total + totalIzin[0].total);

          return rombelData.push({
            rombel: d.nama,
            totalHadir: totalHadir[0].total,
            totalSakit: totalSakit[0].total,
            totalIzin: totalIzin[0].total,
            totalAlpa,
          });
        })
      );

      return response.ok({
        rombel: rombelData,
      });
    }
  }

  async meAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { hari_ini, kode_hari, jam_saat_ini } = request.get();

    let absen;
    let jadwalMengajar = null;

    if (hari_ini) {
      absen = await MAbsen.query()
        .where("created_at", "like", `%${hari_ini}%`)
        .andWhere({ m_user_id: user.id })
        .first();

      const rombelIds = await MRombel.query().where({ m_ta_id: ta.id }).ids();

      const rombelId = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .whereIn("m_rombel_id", rombelIds)
        .pluck("m_rombel_id");

      let jamMengajarId = await MJamMengajar.query()
        .where({ kode_hari: kode_hari })
        .andWhere("jam_mulai", ">=", jam_saat_ini)
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .pluck("id");

      if (!jamMengajarId) {
        jadwalMengajar = await MJadwalMengajar.query()
          .with("jamMengajar")
          .with("rombel")
          .with("mataPelajaran")
          .where({ m_jam_mengajar_id: jamMengajarId[0] })
          .andWhere({ m_rombel_id: rombelId[0] })
          .first();
      }
    } else {
      absen = await MAbsen.query().where({ m_user_id: user.id }).fetch();
    }

    return response.ok({
      absen: absen,
      jadwalMengajar: jadwalMengajar,
    });
  }

  async detailAbsen({ response, request, auth, params: { absen_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const absen = await MAbsen.query().where({ id: absen_id }).first();

    if (!absen) {
      return response.notFound({ message: messageNotFound });
    }

    return response.ok({
      absen: absen,
    });
  }

  async postAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { absen, keterangan, lampiran, foto_masuk } = request.post();

    lampiran = lampiran ? lampiran.toString() : null;

    if (absen != "hadir") {
      return await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen,
        keterangan,
        lampiran: lampiran,
      });
    } else {
      await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user.id,
        role: user.role,
        absen,
        keterangan,
        foto_masuk,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putAbsen({ response, request, auth, params: { absen_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      absen,
      keterangan,
      lampiran,
      foto_pulang,
      waktu_pulang,
      foto_masuk,
    } = request.post();

    if (absen != "hadir") {
      await MAbsen.query().where({ id: absen_id }).update({
        absen,
        keterangan,
        lampiran: lampiran.toString(),
      });
    } else {
      await MAbsen.query().where({ id: absen_id }).update({
        foto_masuk,
        absen,
        foto_pulang,
        waktu_pulang,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async downloadAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { role, tanggal } = request.post();

    if (role == "siswa") {
      const rombel = await MRombel.query()
        .with("user")
        .with("anggotaRombel", (builder) => {
          builder.with("user", (builder) => {
            builder.with("absen", (builder) => {
              builder.where("created_at", "like", `%${tanggal}%`);
            });
          });
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();

      let workbook = new Excel.Workbook();

      await Promise.all(
        rombel.toJSON().map(async (d, idx) => {
          let worksheet = workbook.addWorksheet(`${idx + 1}.${d.nama}`);

          await Promise.all(
            d.anggotaRombel.map(async (anggota) => {
              // add column headers
              worksheet.getRow(10).values = [
                "Nama",
                "Absen",
                "Keterangan",
                "Lampiran",
                "Foto Masuk",
                "Waktu Masuk",
                "Foto Pulang",
                "Waktu Pulang",
              ];

              worksheet.columns = [
                { key: "user" },
                { key: "absen" },
                { key: "keterangan" },
                { key: "lampiran" },
                { key: "foto_masuk" },
                { key: "created_at" },
                { key: "foto_pulang" },
                { key: "waktu_pulang" },
              ];

              // Add row using key mapping to columns
              let row = worksheet.addRow({
                user: anggota.user ? anggota.user.nama : "-",
                absen: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].absen
                      : "-"
                    : "-"
                  : "-",
                keterangan: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].keterangan
                      : "-"
                    : "-"
                  : "-",
                lampiran: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].lampiran
                      : "-"
                    : "-"
                  : "-",
                foto_masuk: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].foto_masuk
                      : "-"
                    : "-"
                  : "-",
                created_at: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].created_at
                      : "-"
                    : "-"
                  : "-",
                foto_pulang: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].foto_pulang
                      : "-"
                    : "-"
                  : "-",
                waktu_pulang: anggota.user
                  ? anggota.user.absen
                    ? anggota.user.absen.length
                      ? anggota.user.absen[0].waktu_pulang
                      : "-"
                    : "-"
                  : "-",
              });
            })
          );
        })
      );

      let namaFile = `/uploads/rekap-absen-siswa-${new Date().getTime()}.xlsx`;

      // save workbook to disk
      await workbook.xlsx.writeFile(`public${namaFile}`);

      return namaFile;
    } else if (role == "guru") {
      const kepsek = await User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "kepsek" })
        .fetch();

      const absen = await User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: role })
        .fetch();

      let workbook = new Excel.Workbook();

      let worksheet = workbook.addWorksheet(`${tanggal}`);

      await Promise.all(
        kepsek.toJSON().map(async (d) => {
          worksheet.getRow(10).values = [
            "Nama",
            "Absen",
            "Keterangan",
            "Lampiran",
            "Foto Masuk",
            "Waktu Masuk",
            "Foto Pulang",
            "Waktu Pulang",
          ];

          worksheet.columns = [
            { key: "user" },
            { key: "absen" },
            { key: "keterangan" },
            { key: "lampiran" },
            { key: "foto_masuk" },
            { key: "created_at" },
            { key: "foto_pulang" },
            { key: "waktu_pulang" },
          ];

          let row = worksheet.addRow({
            user: d ? d.nama : "-",
            kepsek: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].kepsek
                  : "-"
                : "-"
              : "-",
            keterangan: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].keterangan
                  : "-"
                : "-"
              : "-",
            lampiran: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].lampiran
                  : "-"
                : "-"
              : "-",
            foto_masuk: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].foto_masuk
                  : "-"
                : "-"
              : "-",
            created_at: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].created_at
                  : "-"
                : "-"
              : "-",
            foto_pulang: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].foto_pulang
                  : "-"
                : "-"
              : "-",
            waktu_pulang: d
              ? d.kepsek
                ? d.kepsek.length
                  ? d.kepsek[0].waktu_pulang
                  : "-"
                : "-"
              : "-",
          });
        })
      );

      await Promise.all(
        absen.toJSON().map(async (d) => {
          worksheet.getRow(12).values = [
            "Nama",
            "Absen",
            "Keterangan",
            "Lampiran",
            "Foto Masuk",
            "Waktu Masuk",
            "Foto Pulang",
            "Waktu Pulang",
          ];

          worksheet.columns = [
            { key: "user" },
            { key: "absen" },
            { key: "keterangan" },
            { key: "lampiran" },
            { key: "foto_masuk" },
            { key: "created_at" },
            { key: "foto_pulang" },
            { key: "waktu_pulang" },
          ];

          let row = worksheet.addRow({
            user: d ? d.nama : "-",
            absen: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].absen
                  : "-"
                : "-"
              : "-",
            keterangan: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].keterangan
                  : "-"
                : "-"
              : "-",
            lampiran: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].lampiran
                  : "-"
                : "-"
              : "-",
            foto_masuk: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].foto_masuk
                  : "-"
                : "-"
              : "-",
            created_at: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].created_at
                  : "-"
                : "-"
              : "-",
            foto_pulang: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].foto_pulang
                  : "-"
                : "-"
              : "-",
            waktu_pulang: d
              ? d.absen
                ? d.absen.length
                  ? d.absen[0].waktu_pulang
                  : "-"
                : "-"
              : "-",
          });
        })
      );

      let namaFile = `/uploads/rekap-absen-guru.xlsx`;

      // save workbook to disk
      await workbook.xlsx.writeFile(`public${namaFile}`);

      return namaFile;
    }
  }

  async getTest({ response, request, auth }) {}

  async notFoundPage({ response, request, auth }) {
    return `<p>Data tidak ditemukan, silahkan kembali ke <a href="http://getsmartschool.id">Smart School</a></p>`;
  }

  async getUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tingkat, daftar_ujian_id } = request.get();

    if (tingkat) {
      let ujianTingkat;

      if (user.role == "admin") {
        const userIds = await User.query()
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .whereIn("role", ["guru", "admin"])
          .ids();

        const tipeUjian = [
          "pts1",
          "pts2",
          "pas1",
          "pas2",
          "us",
          "literasi",
          "numerasi",
        ];

        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 0 })
          .whereIn("m_user_id", userIds)
          .whereIn("tipe", tipeUjian)
          .fetch();
      } else {
        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_user_id: user.id })
          .fetch();
      }

      let ujianDetail;

      if (daftar_ujian_id) {
        ujianDetail = await MUjian.query()
          .with("soalUjian", (builder) => {
            builder
              .with("soal", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ dihapus: 0 });
          })
          .where({ id: daftar_ujian_id })
          .first();
      }

      return response.ok({
        ujianTingkat: ujianTingkat,
        ujianDetail: ujianDetail,
      });
    }

    let mataPelajaran;

    if (user.role == "guru") {
      mataPelajaran = await MMataPelajaran.query()
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();
    } else if (user.role == "admin") {
      mataPelajaran = await MMataPelajaran.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .fetch();
    }

    const ujian = await MUjian.query()
      .with("mataPelajaran")
      .withCount("soalUjian as jumlahSoal", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .fetch();

    let tingkatData = [];

    if (sekolah.tingkat == "SMK") {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkatData = ["VII", "VIII", "IX"];
    }

    let tipeUjian = [
      { value: "ph", label: "Penilaian Harian" },
      { value: "pts1", label: "Penilaian Tengah Semester 1" },
      { value: "pts2", label: "Penilaian Tengah Semester 2" },
      { value: "pas1", label: "Penilaian Akhir Semester 1" },
      { value: "pas2", label: "Penilaian Akhir Semester 2" },
      { value: "us", label: "Ujian Sekolah" },
      { value: "literasi", label: "AKM - Literasi" },
      { value: "numerasi", label: "AKM - Numerasi" },
    ];

    return response.ok({
      ujian: ujian,
      mataPelajaran: mataPelajaran,
      tingkat: tingkatData,
      tipeUjian: tipeUjian,
    });
  }

  async detailUjian({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ujian = await MUjian.query()
      .with("soalUjian", (builder) => {
        builder
          .with("soal", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .where({ id: ujian_id })
      .first();

    const soalUjianIds = await TkSoalUjian.query()
      .with("soal")
      .where({ m_ujian_id: ujian_id })
      .fetch();

    let jumlahSoalPg = 0;

    let jumlahSoalEsai = 0;

    await Promise.all(
      soalUjianIds.toJSON().map(async (d) => {
        if (d.soal.bentuk == "pg") {
          jumlahSoalPg = jumlahSoalPg + 1;
        } else if (d.soal.bentuk == "esai") {
          jumlahSoalEsai = jumlahSoalEsai + 1;
        }
      })
    );

    let kontenMateri = [];
    let konteksMateri = [];
    let prosesKognitif = [];
    let levelKognitif = [];
    let bentukSoal = [];

    if (ujian.tipe == "literasi") {
      kontenMateri = [
        { value: "teks_informasi", label: "Teks Informasi" },
        { value: "teks_fiksi", label: "Teks Fiksi" },
        { value: "bilangan", label: "Bilangan" },
      ];

      konteksMateri = [
        { value: "personal", label: "Personal" },
        { value: "sosbud", label: "Sosial Budaya" },
        { value: "saintifik", label: "Saintifik" },
      ];

      prosesKognitif = [
        { value: "menemukan_informasi", label: "Menemukan Informasi" },
        {
          value: "interpretasi_integrasi",
          label: "Interpretasi dan Integrasi",
        },
        { value: "evaluasi_refleksi", label: "Evaluasi dan Refleksi" },
      ];

      bentukSoal = [
        { value: "pg", label: "Pilihan Ganda" },
        { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
        { value: "esai", label: "Isian" },
        { value: "uraian", label: "Uraian" },
        { value: "menjodohkan", label: "Menjodohkan" },
      ];
    } else if (ujian.tipe == "numerasi") {
      kontenMateri = [
        { value: "geometri_pengukuran", label: "Geometri dan Pengukuran" },
        { value: "data_ketidakpastian", label: "Data dan Ketidakpastian" },
        { value: "aljabar", label: "Aljabar" },
      ];

      konteksMateri = [
        { value: "personal", label: "Personal" },
        { value: "sosbud", label: "Sosial Budaya" },
        { value: "saintifik", label: "Saintifik" },
      ];

      prosesKognitif = [
        { value: "pemahaman", label: "Pemahaman" },
        { value: "penerapan", label: "Penerapan" },
        { value: "penalaran", label: "Penalaran" },
      ];

      bentukSoal = [
        { value: "pg", label: "Pilihan Ganda" },
        { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
        { value: "esai", label: "Isian" },
        { value: "uraian", label: "Uraian" },
        { value: "menjodohkan", label: "Menjodohkan" },
      ];
    } else {
      levelKognitif = [
        { value: "c1", label: "Mengingat" },
        { value: "c2", label: "Memahami" },
        { value: "c3", label: "Menerapkan" },
        { value: "c4", label: "Menganalisis" },
        { value: "c5", label: "Mengevaluasi" },
        { value: "c6", label: "Mengkreasi" },
      ];
      bentukSoal = [
        { value: "pg", label: "Pilihan Ganda" },
        { value: "esai", label: "Esai" },
        { value: "esai", label: "Isian" },
      ];
    }

    let tingkatData;

    if (sekolah.tingkat == "SMK") {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkatData = ["VII", "VIII", "IX"];
    }

    return response.ok({
      ujian: ujian,
      kontenMateri,
      konteksMateri,
      prosesKognitif,
      bentukSoal,
      levelKognitif,
      jumlahSoalPg: jumlahSoalPg,
      jumlahSoalEsai: jumlahSoalEsai,
      // filter
      tingkat: tingkatData,
    });
  }

  async postUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, tipe, tingkat, m_mata_pelajaran_id } = request.post();

    const ujian = await MUjian.create({
      nama,
      tipe,
      tingkat,
      m_mata_pelajaran_id,
      m_user_id: user.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putUjian({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, tipe, tingkat, m_mata_pelajaran_id } = request.post();

    const ujian = await MUjian.query().where({ id: ujian_id }).update({
      nama,
      tipe,
      tingkat,
      m_mata_pelajaran_id,
    });

    if (!ujian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteUjian({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ujian = await MUjian.query().where({ id: ujian_id }).update({
      dihapus: 1,
    });

    if (!ujian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getSoalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const user = await auth.getUser();

    const mataPelajaran = await MMataPelajaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const ujian = await MUjian.query().where({ dihapus: 0 }).fetch();

    let tingkat = [];

    if (sekolah.tingkat == "SMK") {
      tingkat = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkat = ["VII", "VIII", "IX"];
    }

    let tipeUjian = [
      { value: "ph", label: "Penilaian Harian" },
      { value: "pts1", label: "Penilaian Tengah Semester 1" },
      { value: "pts2", label: "Penilaian Tengah Semester 2" },
      { value: "pas1", label: "Penilaian Akhir Semester 1" },
      { value: "pas2", label: "Penilaian Akhir Semester 2" },
      { value: "us", label: "Ujian Sekolah" },
      { value: "literasi", label: "AKM - Literasi" },
      { value: "numerasi", label: "AKM - Numerasi" },
    ];

    return response.ok({
      ujian: ujian,
      mataPelajaran: mataPelajaran,
      tingkat: tingkat,
      tipeUjian: tipeUjian,
    });
  }

  async detailSoalUjian({
    response,
    request,
    auth,
    params: { soal_ujian_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { rombel_id } = request.get();

    let kontenMateri = [
      { value: "teks_informasi", label: "Teks Informasi" },
      { value: "teks_fiksi", label: "Teks Fiksi" },
      { value: "bilangan", label: "Bilangan" },
      { value: "geometri_pengukuran", label: "Geometri dan Pengukuran" },
      { value: "data_ketidakpastian", label: "Data dan Ketidakpastian" },
      { value: "aljabar", label: "Aljabar" },
    ];

    let konteksMateri = [
      { value: "personal", label: "Personal" },
      { value: "sosbud", label: "Sosial Budaya" },
      { value: "saintifik", label: "Saintifik" },
    ];

    let prosesKognitif = [
      { value: "menemukan_informasi", label: "Menemukan Informasi" },
      { value: "interpretasi_integrasi", label: "Interpretasi dan Integrasi" },
      { value: "evaluasi_refleksi", label: "Evaluasi dan Refleksi" },
      { value: "pemahaman", label: "Pemahaman" },
      { value: "penerapan", label: "Penerapan" },
      { value: "penalaran", label: "Penalaran" },
    ];

    let bentukSoal = [
      { value: "pg", label: "Pilihan Ganda" },
      { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
      { value: "esai", label: "Isian" },
      { value: "uraian", label: "Uraian" },
      { value: "menjodohkan", label: "Menjodohkan" },
    ];

    return response.ok({
      bentukSoal,
    });
  }

  async postSoalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      kd,
      kd_konten_materi,
      level_kognitif,
      bentuk,
      akm_konten_materi,
      akm_konteks_materi,
      akm_proses_kognitif,
      // pg
      pertanyaan,
      audio,
      jawaban_a,
      jawaban_b,
      jawaban_c,
      jawaban_d,
      jawaban_e,
      kj_pg,
      // esai
      rubrik_kj,
      pembahasan,
      nilai_soal,
      m_ujian_id,
      // uraian
      opsi_a_uraian,
      opsi_b_uraian,
      kj_uraian,
      // pg kompleks
      jawaban_pg_kompleks,
      // menjodohkan
      pilihan_menjodohkan,
      soal_menjodohkan,
      // pilih dari bank soal
      daftar_soal_ujian_id,
    } = request.post();

    if (daftar_soal_ujian_id) {
      let soalUjianData = [];
      if (daftar_soal_ujian_id.length) {
        daftar_soal_ujian_id.map((d) => {
          soalUjianData.push({
            m_ujian_id: m_ujian_id,
            m_soal_ujian_id: d,
            dihapus: 0,
          });
        });
      }

      await TkSoalUjian.createMany(soalUjianData);

      return response.ok({
        message: messagePostSuccess,
      });
    }
    jawaban_pg_kompleks = jawaban_pg_kompleks
      ? jawaban_pg_kompleks.toString()
      : null;
    pilihan_menjodohkan = pilihan_menjodohkan
      ? pilihan_menjodohkan.toString()
      : null;
    soal_menjodohkan = soal_menjodohkan
      ? JSON.stringify(soal_menjodohkan)
      : null;

    jawaban_a =
      typeof jawaban_a !== "object"
        ? Buffer(jawaban_a).toString("base64")
        : null;
    jawaban_b =
      typeof jawaban_b !== "object"
        ? Buffer(jawaban_b).toString("base64")
        : null;
    jawaban_c =
      typeof jawaban_c !== "object"
        ? Buffer(jawaban_c).toString("base64")
        : null;
    jawaban_d =
      typeof jawaban_d !== "object"
        ? Buffer(jawaban_d).toString("base64")
        : null;
    jawaban_e =
      typeof jawaban_e !== "object"
        ? Buffer(jawaban_e).toString("base64")
        : null;
    pembahasan =
      typeof pembahasan !== "object"
        ? Buffer(pembahasan).toString("base64")
        : null;

    const soalUjian = await MSoalUjian.create({
      kd,
      kd_konten_materi,
      level_kognitif,
      bentuk,
      akm_konten_materi,
      akm_konteks_materi,
      akm_proses_kognitif,
      audio,
      pertanyaan: pertanyaan ? Buffer(pertanyaan).toString("base64") : "",
      jawaban_a,
      jawaban_b,
      jawaban_c,
      jawaban_d,
      jawaban_e,
      kj_pg,
      kj_uraian,
      jawaban_pg_kompleks,
      pilihan_menjodohkan,
      soal_menjodohkan,
      opsi_a_uraian,
      opsi_b_uraian,
      rubrik_kj: JSON.stringify(rubrik_kj),
      pembahasan,
      nilai_soal,
      m_user_id: user.id,
      dihapus: 0,
    });

    const tkSoalUjian = await TkSoalUjian.create({
      dihapus: 0,
      m_ujian_id: m_ujian_id,
      m_soal_ujian_id: soalUjian.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async importSoalUjianServices(filelocation, user, m_ujian_id) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Sheet1");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 13) {
        data.push({
          kd: "" + explanation.getCell("A" + rowNumber).value,
          kd_konten_materi: "" + explanation.getCell("B" + rowNumber).value,
          level_kognitif: "" + explanation.getCell("C" + rowNumber).value,
          bentuk: "" + explanation.getCell("D" + rowNumber).value,
          // akm_konten_materi: '' + explanation.getCell("A" + rowNumber).value,
          // akm_konteks_materi: '' + explanation.getCell("A" + rowNumber).value,
          // akm_proses_kognitif: '' + explanation.getCell("A" + rowNumber).value,
          pertanyaan: "" + explanation.getCell("E" + rowNumber).value,
          jawaban_a: "" + explanation.getCell("F" + rowNumber).value,
          jawaban_b: "" + explanation.getCell("G" + rowNumber).value,
          jawaban_c: "" + explanation.getCell("H" + rowNumber).value,
          jawaban_d: "" + explanation.getCell("I" + rowNumber).value,
          jawaban_e: "" + explanation.getCell("J" + rowNumber).value,
          kj_pg: "" + explanation.getCell("K" + rowNumber).value,
          pembahasan: "" + explanation.getCell("L" + rowNumber).value,
          nilai_soal: "" + explanation.getCell("M" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const soalUjian = await MSoalUjian.create({
          kd: d.kd,
          kd_konten_materi: d.kd_konten_materi,
          level_kognitif: d.level_kognitif,
          bentuk: d.bentuk,
          // akm_konten_materi,
          // akm_konteks_materi,
          // akm_proses_kognitif,
          pertanyaan: d.pertanyaan
            ? Buffer(d.pertanyaan).toString("base64")
            : "",
          jawaban_a: d.jawaban_a ? Buffer(d.jawaban_a).toString("base64") : "",
          jawaban_b: d.jawaban_b ? Buffer(d.jawaban_b).toString("base64") : "",
          jawaban_c: d.jawaban_c ? Buffer(d.jawaban_c).toString("base64") : "",
          jawaban_d: d.jawaban_d ? Buffer(d.jawaban_d).toString("base64") : "",
          jawaban_e: d.jawaban_e ? Buffer(d.jawaban_e).toString("base64") : "",
          kj_pg: d.kj_pg,
          // rubrik_kj: JSON.stringify(rubrik_kj),
          pembahasan: d.pembahasan
            ? Buffer(d.pembahasan).toString("base64")
            : "",
          nilai_soal: d.nilai_soal,
          m_user_id: user.id,
          dihapus: 0,
        });

        const tkSoalUjian = await TkSoalUjian.create({
          dihapus: 0,
          m_ujian_id: m_ujian_id,
          m_soal_ujian_id: soalUjian.id,
        });
      })
    );

    return result;
  }

  async importSoalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");

    let fname = `import-excel-soal.${file.extname}`;

    const user = await auth.getUser();

    const { m_ujian_id } = request.post();

    //move uploaded file into custom folder
    await file.move(Helpers.publicPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importSoalUjianServices(
      `${Helpers.publicPath("/uploads")}/${fname}`,
      user,
      m_ujian_id
    );
  }

  async putSoalUjian({ response, request, auth, params: { soal_ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      kd,
      kd_konten_materi,
      level_kognitif,
      bentuk,
      akm_konten_materi,
      akm_konteks_materi,
      akm_proses_kognitif,
      // pg
      pertanyaan,
      audio,
      jawaban_a,
      jawaban_b,
      jawaban_c,
      jawaban_d,
      jawaban_e,
      kj_pg,
      // esai
      rubrik_kj,
      pembahasan,
      nilai_soal,
      // uraian
      opsi_a_uraian,
      opsi_b_uraian,
      kj_uraian,
      // pg kompleks
      jawaban_pg_kompleks,
      // menjodohkan
      pilihan_menjodohkan,
      soal_menjodohkan,
    } = request.post();

    jawaban_pg_kompleks = jawaban_pg_kompleks
      ? jawaban_pg_kompleks.toString()
      : null;
    pilihan_menjodohkan = pilihan_menjodohkan
      ? pilihan_menjodohkan.toString()
      : null;
    soal_menjodohkan = soal_menjodohkan
      ? JSON.stringify(soal_menjodohkan)
      : null;

    jawaban_a =
      typeof jawaban_a !== "object"
        ? Buffer(jawaban_a).toString("base64")
        : null;
    jawaban_b =
      typeof jawaban_b !== "object"
        ? Buffer(jawaban_b).toString("base64")
        : null;
    jawaban_c =
      typeof jawaban_c !== "object"
        ? Buffer(jawaban_c).toString("base64")
        : null;
    jawaban_d =
      typeof jawaban_d !== "object"
        ? Buffer(jawaban_d).toString("base64")
        : null;
    jawaban_e =
      typeof jawaban_e !== "object"
        ? Buffer(jawaban_e).toString("base64")
        : null;
    pembahasan =
      typeof pembahasan !== "object"
        ? Buffer(pembahasan).toString("base64")
        : null;

    const soalUjian = await MSoalUjian.query()
      .where({ id: soal_ujian_id })
      .update({
        kd,
        kd_konten_materi,
        level_kognitif,
        bentuk,
        akm_konten_materi,
        akm_konteks_materi,
        akm_proses_kognitif,
        audio,
        pertanyaan: pertanyaan ? Buffer(pertanyaan).toString("base64") : "",
        jawaban_a,
        jawaban_b,
        jawaban_c,
        jawaban_d,
        jawaban_e,
        kj_pg,
        kj_uraian,
        jawaban_pg_kompleks,
        pilihan_menjodohkan,
        soal_menjodohkan,
        opsi_a_uraian,
        opsi_b_uraian,
        rubrik_kj: JSON.stringify(rubrik_kj),
        pembahasan,
        nilai_soal,
      });

    if (!soalUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSoalUjian({
    response,
    request,
    auth,
    params: { soal_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const soalUjian = await MSoalUjian.query()
      .where({ id: soal_ujian_id })
      .update({
        dihapus: 1,
      });

    const tkSoalUjian = await TkSoalUjian.query()
      .where({ m_soal_ujian_id: soal_ujian_id })
      .update({
        dihapus: 1,
      });

    if (!soalUjian || !tkSoalUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getJadwalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { hari_ini, status } = request.get();

    const user = await auth.getUser();

    if (user.role == "guru") {
      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_user_id: user.id })
        .ids();

      const rombelIds = await MJadwalMengajar.query()
        .with("rombel")
        .with("mataPelajaran")
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .pluck("m_rombel_id");

      const rombel = await MRombel.query().whereIn("id", rombelIds).fetch();

      let jadwalUjian;

      if (status == "akan-datang") {
        jadwalUjian = await MJadwalUjian.query()
          .with("ujian")
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", ">", hari_ini)
          .fetch();
      } else if (status == "berlangsung") {
        jadwalUjian = await MJadwalUjian.query()
          .with("ujian")
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", "<=", hari_ini)
          .andWhere("waktu_ditutup", ">=", hari_ini)
          .fetch();
      } else if (status == "sudah-selesai") {
        jadwalUjian = await MJadwalUjian.query()
          .with("ujian")
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_ditutup", "<=", hari_ini)
          .fetch();
      }

      const jadwalUjianDataFormat = [];

      await Promise.all(
        jadwalUjian.toJSON().map(async (jadwalUjianData) => {
          const tkJadwalUjian = await TkJadwalUjian.query()
            .with("rombel")
            .where({ m_jadwal_ujian_id: jadwalUjianData.id })
            .fetch();

          let metaJadwalUjian = {
            remedial: 0,
            susulan: 0,
            diatasKKM: 0,
          };

          // await Promise.all(
          //   tkJadwalUjian.toJSON().map(async (rombelUjianData) => {
          //     const anggotaRombel = await MAnggotaRombel.query()
          //       .where({ m_rombel_id: rombelUjianData.m_rombel_id })
          //       .fetch();

          //     const userIds = await MAnggotaRombel.query()
          //       .where({ m_rombel_id: rombelUjianData.m_rombel_id })
          //       .pluck("m_user_id");

          //     if (!userIds[0]) {
          //       return "kosong";
          //     }

          //     const pesertaUjian = await TkPesertaUjian.query()
          //       .with("jawabanSiswa", (builder) => {
          //         builder.with("soal");
          //       })
          //       .where({ tk_jadwal_ujian_id: rombelUjianData.id })
          //       .andWhere({ m_user_id: userIds[0] })
          //       .fetch();

          //     if (!pesertaUjian.toJSON().length) {
          //       metaJadwalUjian.susulan = anggotaRombel.toJSON().length;
          //       return;
          //     }

          //     await Promise.all(
          //       pesertaUjian.toJSON().map(async (peserta) => {
          //         let metaHasil = {
          //           nilaiPg: 0,
          //           nilaiEsai: 0,
          //           nilaiTotal: 0,
          //           benar: 0,
          //         };

          //         await Promise.all(
          //           peserta.jawabanSiswa.map(async (jawaban) => {
          //             if (jawaban.soal.bentuk == "pg") {
          //               if (jawaban.jawaban_pg == jawaban.soal.kj_pg) {
          //                 metaHasil.nilaiPg =
          //                   metaHasil.nilaiPg + jawaban.soal.nilai_soal;
          //                 metaHasil.benar = metaHasil.benar + 1;
          //               }
          //             } else if (jawaban.soal.bentuk == "esai") {
          //               JSON.parse(jawaban.jawaban_rubrik_esai).map((e) => {
          //                 if (e.benar) {
          //                   metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
          //                 }
          //               });
          //               if (jawaban.jawaban_rubrik_esai.indexOf("true") != -1) {
          //                 metaHasil.benar = metaHasil.benar + 1;
          //               }
          //             }
          //           })
          //         );

          //         metaHasil.nilaiTotal =
          //           metaHasil.nilaiPg + metaHasil.nilaiEsai;

          //         const nilaiTotal = metaHasil.nilaiTotal;

          //         if (nilaiTotal > jadwalUjianData.kkm) {
          //           metaJadwalUjian.diatasKKM = metaJadwalUjian.diatasKKM + 1;
          //         } else {
          //           metaJadwalUjian.remedial = metaJadwalUjian.remedial + 1;
          //         }

          //         metaJadwalUjian.susulan =
          //           anggotaRombel.toJSON().length -
          //           (metaJadwalUjian.diatasKKM + metaJadwalUjian.remedial);
          //       })
          //     );
          //   })
          // );

          jadwalUjianDataFormat.push({
            jadwalUjian: jadwalUjianData,
            rombel: tkJadwalUjian,
            metaJadwalUjian: metaJadwalUjian,
          });
        })
      );

      const ujian = await MUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      return response.ok({
        rombel,
        jadwalUjian: jadwalUjianDataFormat,
        ujian,
      });
    } else if (user.role == "admin") {
      const rombel = await MRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .fetch();

      let jadwalUjian;

      if (status == "akan-datang") {
        jadwalUjian = await MJadwalUjian.query()
          .with("ujian")
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", ">", hari_ini)
          .fetch();
      } else if (status == "berlangsung") {
        jadwalUjian = await MJadwalUjian.query()
          .with("ujian")
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_dibuka", "<=", hari_ini)
          .andWhere("waktu_ditutup", ">=", hari_ini)
          .fetch();
      } else if (status == "sudah-selesai") {
        jadwalUjian = await MJadwalUjian.query()
          .with("ujian")
          .where({ m_user_id: user.id })
          .andWhere({ dihapus: 0 })
          .andWhere("waktu_ditutup", "<=", hari_ini)
          .fetch();
      }

      const jadwalUjianDataFormat = [];

      await Promise.all(
        jadwalUjian.toJSON().map(async (jadwalUjianData) => {
          const tkJadwalUjian = await TkJadwalUjian.query()
            .with("rombel")
            .where({ m_jadwal_ujian_id: jadwalUjianData.id })
            .fetch();

          let metaJadwalUjian = {
            remedial: 0,
            susulan: 0,
            diatasKKM: 0,
          };

          // await Promise.all(
          //   tkJadwalUjian.toJSON().map(async (rombelUjianData) => {
          //     const anggotaRombel = await MAnggotaRombel.query()
          //       .where({ m_rombel_id: rombelUjianData.m_rombel_id })
          //       .fetch();

          //     const userIds = await MAnggotaRombel.query()
          //       .where({ m_rombel_id: rombelUjianData.m_rombel_id })
          //       .pluck("m_user_id");

          //     if (!userIds[0]) {
          //       return "kosong";
          //     }

          //     const pesertaUjian = await TkPesertaUjian.query()
          //       .with("jawabanSiswa", (builder) => {
          //         builder.with("soal");
          //       })
          //       .where({ tk_jadwal_ujian_id: rombelUjianData.id })
          //       .andWhere({ m_user_id: userIds[0] })
          //       .fetch();

          //     if (!pesertaUjian.toJSON().length) {
          //       metaJadwalUjian.susulan = anggotaRombel.toJSON().length;
          //       return;
          //     }

          //     await Promise.all(
          //       pesertaUjian.toJSON().map(async (peserta) => {
          //         let metaHasil = {
          //           nilaiPg: 0,
          //           nilaiEsai: 0,
          //           nilaiTotal: 0,
          //           benar: 0,
          //         };

          //         await Promise.all(
          //           peserta.jawabanSiswa.map(async (jawaban) => {
          //             if (jawaban.soal.bentuk == "pg") {
          //               if (jawaban.jawaban_pg == jawaban.soal.kj_pg) {
          //                 metaHasil.nilaiPg =
          //                   metaHasil.nilaiPg + jawaban.soal.nilai_soal;
          //                 metaHasil.benar = metaHasil.benar + 1;
          //               }
          //             } else if (jawaban.soal.bentuk == "esai") {
          //               JSON.parse(jawaban.jawaban_rubrik_esai).map((e) => {
          //                 if (e.benar) {
          //                   metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
          //                 }
          //               });
          //               if (jawaban.jawaban_rubrik_esai.indexOf("true") != -1) {
          //                 metaHasil.benar = metaHasil.benar + 1;
          //               }
          //             }
          //           })
          //         );

          //         metaHasil.nilaiTotal =
          //           metaHasil.nilaiPg + metaHasil.nilaiEsai;

          //         const nilaiTotal = metaHasil.nilaiTotal;

          //         if (nilaiTotal > jadwalUjianData.kkm) {
          //           metaJadwalUjian.diatasKKM = metaJadwalUjian.diatasKKM + 1;
          //         } else {
          //           metaJadwalUjian.remedial = metaJadwalUjian.remedial + 1;
          //         }

          //         metaJadwalUjian.susulan =
          //           anggotaRombel.toJSON().length -
          //           (metaJadwalUjian.diatasKKM + metaJadwalUjian.remedial);
          //       })
          //     );
          //   })
          // );

          jadwalUjianDataFormat.push({
            jadwalUjian: jadwalUjianData,
            rombel: tkJadwalUjian,
            metaJadwalUjian: metaJadwalUjian,
          });
        })
      );

      const ujian = await MUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      return response.ok({
        rombel,
        jadwalUjian: jadwalUjianDataFormat,
        ujian,
      });
    } else if (user.role == "siswa") {
      const rombelIds = await MRombel.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .ids();

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_user_id: user.id })
        .whereIn("m_rombel_id", rombelIds)
        .pluck("m_rombel_id");

      let jadwalUjian;
      if (status == "akan-datang") {
        jadwalUjian = await TkJadwalUjian.query()
          .with("jadwalUjian", (builder) => {
            builder.with("ujian").where("waktu_dibuka", ">", hari_ini);
          })
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", anggotaRombel)
          .fetch();
      } else if (status == "berlangsung") {
        jadwalUjian = await TkJadwalUjian.query()
          .with("jadwalUjian", (builder) => {
            builder
              .with("ujian")
              .where("waktu_dibuka", "<=", hari_ini)
              .andWhere("waktu_ditutup", ">", hari_ini);
          })
          .with("peserta")
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", anggotaRombel)
          .fetch();
      } else if (status == "sudah-selesai") {
        jadwalUjian = await TkJadwalUjian.query()
          .with("jadwalUjian", (builder) => {
            builder.with("ujian").andWhere("waktu_ditutup", "<", hari_ini);
          })
          .with("peserta", (builder) => {
            builder.where({ m_user_id: user.id });
          })
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", anggotaRombel)
          .fetch();
      }

      return response.ok({
        jadwalUjian,
      });
    }
  }

  async detailJadwalUjian({
    response,
    request,
    auth,
    params: { jadwal_ujian_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tk_jadwal_ujian_id } = request.get();

    const jadwalUjian = await MJadwalUjian.query()
      .with("rombelUjian", (builder) => {
        builder.with("rombel");
      })
      .with("ujian")
      .where({ id: jadwal_ujian_id })
      .first();

    let pesertaUjianData = [];
    let detailRombel;

    if (tk_jadwal_ujian_id) {
      const tkJadwalUjian = await TkJadwalUjian.query()
        .where({ id: tk_jadwal_ujian_id })
        .pluck("m_rombel_id");

      const anggotaRombel = await MAnggotaRombel.query()
        .where({ m_rombel_id: tkJadwalUjian[0] })
        .pluck("m_user_id");

      detailRombel = await MRombel.query()
        .where({ id: tkJadwalUjian[0] })
        .first();

      pesertaUjianData = await User.query()
        .with("pesertaUjian", (builder) => {
          builder
            .where({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
            .andWhere({ dihapus: 0 });
        })
        .whereIn("id", anggotaRombel)
        .fetch();
    }

    return response.ok({
      jadwalUjian,
      pesertaUjian: pesertaUjianData,
      rombel: detailRombel,
    });
  }

  async downloadJadwalUjian({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tk_jadwal_ujian_id, m_jadwal_ujian_id } = request.post();

    const jadwalUjian = await TkJadwalUjian.query()
      .with("peserta")
      .with("rombel")
      .with("jadwalUjian", (builder) => {
        builder.with("ujian");
      })
      .where({ id: tk_jadwal_ujian_id })
      .first();

    const tkJadwalUjian = await TkJadwalUjian.query()
      .where({ id: tk_jadwal_ujian_id })
      .pluck("m_rombel_id");

    const anggotaRombel = await MAnggotaRombel.query()
      .where({ m_rombel_id: tkJadwalUjian[0] })
      .pluck("m_user_id");

    const pesertaUjianData = await User.query()
      .whereIn("id", anggotaRombel)
      .fetch();

    const workbook = new Excel.Workbook();

    await Promise.all(
      [0].map(async (_, idx) => {
        // Create workbook & add worksheet
        const worksheet = workbook.addWorksheet(
          `${jadwalUjian.toJSON().rombel.nama}`
        );

        await Promise.all(
          pesertaUjianData.toJSON().map(async (d) => {
            await Promise.all(
              jadwalUjian.toJSON().peserta.map(async (e) => {
                if (d.id == e.m_user_id) {
                  const pesertaUjian = await TkPesertaUjian.query()
                    .with("jawabanSiswa", (builder) => {
                      builder.with("soal");
                    })
                    .with("user")
                    .where({ id: e.id })
                    .first();

                  let metaHasil = {
                    nilaiPg: 0,
                    nilaiEsai: 0,
                    nilaiTotal: 0,
                    benar: 0,
                  };
                  let analisisBenar = {};
                  let analisisTotal = {};

                  await Promise.all(
                    pesertaUjian.toJSON().jawabanSiswa.map(async (d) => {
                      if (d.soal.bentuk == "pg") {
                        if (d.jawaban_pg == d.soal.kj_pg) {
                          metaHasil.nilaiPg =
                            metaHasil.nilaiPg + d.soal.nilai_soal;
                          metaHasil.benar = metaHasil.benar + 1;
                          analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                            ? analisisBenar[d.soal.kd] + 1
                            : 1;
                        }
                        analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                          ? analisisTotal[d.soal.kd] + 1
                          : 1;
                      } else if (d.soal.bentuk == "esai") {
                        JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                          if (e.benar) {
                            metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
                          }
                        });
                        if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                          metaHasil.benar = metaHasil.benar + 1;
                        }
                      }
                    })
                  );

                  metaHasil.nilaiTotal =
                    metaHasil.nilaiPg + metaHasil.nilaiEsai;

                  // add column headers
                  worksheet.getRow(10).values = [
                    "Nama",
                    "Nilai PG",
                    "Nilai Esai",
                    "Nilai Total",
                  ];

                  worksheet.columns = [
                    { key: "user" },
                    { key: "nilai_pg" },
                    { key: "nilai_esai" },
                    { key: "nilai_total" },
                  ];

                  // Add row using key mapping to columns
                  const row = worksheet.addRow({
                    user: d.nama,
                    nilai_pg: metaHasil.nilaiPg,
                    nilai_esai: metaHasil.nilaiEsai,
                    nilai_total: metaHasil.nilaiTotal,
                  });
                }
              })
            );
          })
        );

        worksheet.getCell("A1").value = "Ujian";
        worksheet.getCell(
          "B1"
        ).value = jadwalUjian.toJSON().jadwalUjian.ujian.nama;
        worksheet.getCell("D1").value = "Tanggal";
        worksheet.getCell("E1").value = `${
          jadwalUjian.toJSON().jadwalUjian.tanggalUjian
        } ${jadwalUjian.toJSON().jadwalUjian.waktuUjian}`;
        worksheet.getCell("D2").value = "KKM";
        worksheet.getCell("E2").value = jadwalUjian.toJSON().jadwalUjian.kkm;
        worksheet.getCell("A2").value = "Durasi";
        worksheet.getCell("B2").value = `${
          jadwalUjian.toJSON().jadwalUjian.durasi
        } menit`;

        // worksheet.getCell("A4").value = "RPP";
        // worksheet.getCell("A5").value = d.rpp.toString();

        // worksheet.getCell("A7").value = "Deskripsi";
        // worksheet.getCell("A8").value = d.deskripsi;

        // worksheet.columns.forEach(function (column, i) {
        //   let maxLength = 0;
        //   column["eachCell"]({ includeEmpty: true }, function (cell) {
        //     let columnLength = cell.value ? cell.value.toString().length : 10;

        //     if (cell.value == "alpa") {
        //       // red
        //       cell.fill = {
        //         type: "pattern",
        //         pattern: "solid",
        //         fgColor: { argb: "F9D5D4" },
        //         bgColor: { argb: "F9D5D4" },
        //       };

        //       cell.font = {
        //         color: { argb: "FC544B" },
        //       };
        //     }

        //     if (cell.value == "sakit") {
        //       // yellow
        //       cell.fill = {
        //         type: "pattern",
        //         pattern: "solid",
        //         fgColor: { argb: "FCE8D2" },
        //         bgColor: { argb: "FCE8D2" },
        //       };

        //       cell.font = {
        //         color: { argb: "F9AC50" },
        //       };
        //     }

        //     if (cell.value == "izin") {
        //       // green
        //       cell.fill = {
        //         type: "pattern",
        //         pattern: "solid",
        //         fgColor: { argb: "E0FCE4" },
        //         bgColor: { argb: "E0FCE4" },
        //       };

        //       cell.font = {
        //         color: { argb: "63ED7A" },
        //       };
        //     }

        //     if (cell.value == "hadir") {
        //       // green
        //       cell.fill = {
        //         type: "pattern",
        //         pattern: "solid",
        //         fgColor: { argb: "2680EB" },
        //         bgColor: { argb: "2680EB" },
        //       };

        //       cell.font = {
        //         color: { argb: "FFFFFF" },
        //       };
        //     }

        //     if (columnLength > maxLength) {
        //       maxLength = columnLength;
        //     }
        //   });

        //   column.width = maxLength < 15 ? 15 : maxLength > 30 ? 30 : 15;
        // });
      })
    );

    let namaFile = `/uploads/rekap-nilai-${new Date().getTime()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async postJadwalUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      jumlah_pg,
      jumlah_esai,
      kkm,
      waktu_dibuka,
      jumlah_soal_akm,
      durasi,
      gmeet,
      diacak,
      rombel_id,
      m_ujian_id,
    } = request.post();

    const jadwalUjian = await MJadwalUjian.create({
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      m_ujian_id,
      kkm,
      waktu_dibuka,
      waktu_ditutup: moment(waktu_dibuka)
        .add("minutes", durasi)
        .format("YYYY-MM-DD HH:mm:ss"),
      durasi,
      gmeet,
      diacak,
      m_user_id: user.id,
      dihapus: 0,
    });

    let tkJadwalUjianData = [];

    if (rombel_id.length) {
      await Promise.all(
        rombel_id.map(async (rombel) => {
          tkJadwalUjianData.push({
            m_rombel_id: rombel,
            dihapus: 0,
            m_jadwal_ujian_id: jadwalUjian.id,
          });
        })
      );

      await TkJadwalUjian.createMany(tkJadwalUjianData);
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putJadwalUjian({
    response,
    request,
    auth,
    params: { jadwal_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      kkm,
      waktu_dibuka,
      durasi,
      gmeet,
      diacak,
      rombel_id,
    } = request.post();

    const jadwalUjian = await MJadwalUjian.query()
      .where({ id: jadwal_ujian_id })
      .update({
        jumlah_pg,
        jumlah_esai,
        jumlah_soal_akm,
        kkm,
        waktu_dibuka,
        waktu_ditutup: moment(waktu_dibuka)
          .add("minutes", durasi)
          .format("YYYY-MM-DD HH:mm:ss"),
        durasi,
        gmeet,
        diacak,
      });

    if (!jadwalUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    let tkJadwalUjianData = [];

    if (rombel_id.length) {
      await Promise.all(
        rombel_id.map(async (rombel) => {
          const check = await TkJadwalUjian.query()
            .where({ m_rombel_id: rombel })
            .andWhere({ m_jadwal_ujian_id: jadwal_ujian_id })
            .first();

          if (!check) {
            tkJadwalUjianData.push({
              m_rombel_id: rombel,
              dihapus: 0,
              m_jadwal_ujian_id: jadwal_ujian_id,
            });
          }
        })
      );

      const tkJadwalUjian = await TkJadwalUjian.createMany(tkJadwalUjianData);
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteJadwalUjian({
    response,
    request,
    auth,
    params: { jadwal_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jadwalUjian = await MJadwalUjian.query()
      .where({ id: jadwal_ujian_id })
      .update({
        dihapus: 1,
      });

    const tkJadwalUjian = await TkJadwalUjian.query()
      .where({ m_jadwal_ujian_id: jadwal_ujian_id })
      .update({
        dihapus: 1,
      });

    if (!jadwalUjian || !tkJadwalUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async detailPesertaUjian({
    response,
    request,
    auth,
    params: { peserta_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { jawaban_siswa_id, siswa } = request.get();

    let pesertaUjian;

    if (user.role == "guru" || siswa || user.role == "admin") {
      pesertaUjian = await TkPesertaUjian.query()
        .with("jadwalUjian", (builder) => {
          builder.with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
        })
        .with("jawabanSiswa", (builder) => {
          builder.with("soal");
        })
        .with("user")
        .where({ id: peserta_ujian_id })
        .first();

      let metaHasil = { nilaiPg: 0, nilaiEsai: 0, nilaiTotal: 0, benar: 0 };
      let analisisBenar = {};
      let analisisTotal = {};

      await Promise.all(
        pesertaUjian.toJSON().jawabanSiswa.map(async (d) => {
          if (d.soal.bentuk == "pg") {
            if (d.jawaban_pg == d.soal.kj_pg) {
              metaHasil.nilaiPg = metaHasil.nilaiPg + d.soal.nilai_soal;
              metaHasil.benar = metaHasil.benar + 1;
              analisisBenar[d.soal.kd] = analisisBenar[d.soal.kd]
                ? analisisBenar[d.soal.kd] + 1
                : 1;
            }
            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
              ? analisisTotal[d.soal.kd] + 1
              : 1;
          } else if (d.soal.bentuk == "esai") {
            JSON.parse(d.jawaban_rubrik_esai).map((e) => {
              if (e.benar) {
                metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
              }
            });
            if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
              metaHasil.benar = metaHasil.benar + 1;
            }
          }
        })
      );

      metaHasil.nilaiTotal = metaHasil.nilaiPg + metaHasil.nilaiEsai;

      analisisBenar = Object.entries(analisisBenar);
      analisisTotal = Object.entries(analisisTotal);

      let analisisData = [];
      let idTmp;

      analisisTotal.map((d) => {
        analisisBenar.map((e) => {
          if (d[0] == e[0]) {
            idTmp = e[0];
            analisisData.push({
              kd: d[0],
              nilai: (e[1] / d[1]) * 100,
              total: d[1],
            });
          }
        });

        if (idTmp != d[0]) {
          analisisData.push({
            kd: d[0],
            nilai: 0 * 100,
            total: d[1],
          });
        }
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
        metaHasil,
        analisisData: analisisData,
      });
    } else {
      pesertaUjian = await TkPesertaUjian.query()
        .with("jadwalUjian", (builder) => {
          builder.with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
        })
        .withCount("jawabanSiswa as totalSoal")
        .withCount("jawabanSiswa as totalDijawab", (builder) => {
          builder.where({ dijawab: 1 });
        })
        .with("user")
        .where({ id: peserta_ujian_id })
        .first();

      const soal_ids = await TkJawabanUjianSiswa.query()
        .where({ tk_peserta_ujian_id: peserta_ujian_id })
        .select("id", "ragu", "dijawab")
        .fetch();

      let soal_siswa;

      if (jawaban_siswa_id) {
        soal_siswa = await TkJawabanUjianSiswa.query()
          .with("soal", (builder) => {
            builder.select(
              "id",
              "kd",
              "kd_konten_materi",
              "level_kognitif",
              "bentuk_soal",
              "akm_konten_materi",
              "akm_konteks_materi",
              "akm_proses_kognitif",
              "pertanyaan",
              "jawaban_a",
              "jawaban_b",
              "jawaban_c",
              "jawaban_d",
              "jawaban_e",
              "opsi_a_uraian",
              "opsi_b_uraian",
              "pilihan_menjodohkan",
              "soal_menjodohkan",
              "bentuk",
              "dihapus",
              "m_user_id",
              "audio"
            );
          })
          .where({ id: jawaban_siswa_id })
          .first();
      }

      return response.ok({
        peserta_ujian: pesertaUjian,
        soal_ids: soal_ids,
        soal_siswa: soal_siswa,
      });
    }
  }

  async postPesertaUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { waktu_mulai, tk_jadwal_ujian_id, ujian_id } = request.post();

    const ujian = await MUjian.query().where({ id: ujian_id }).first();

    const jadwalUjian = await TkJadwalUjian.query()
      .with("jadwalUjian")
      .where({ id: tk_jadwal_ujian_id })
      .first();

    if (jadwalUjian.toJSON().jadwalUjian.waktu_dibuka > waktu_mulai) {
      return response.forbidden({
        message: messageForbidden,
      });
    }

    let diacak = "id ASC";

    if (jadwalUjian.toJSON().jadwalUjian.diacak) {
      diacak = "RAND()";
    }

    if (ujian.tipe == "literasi" || ujian.tipe == "numerasi") {
      const soalIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterIds = await MSoalUjian.query()
        .where({ dihapus: 0 })
        .whereIn("id", soalIds)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_soal_akm)
        .ids();

      const soalAKM = await TkSoalUjian.query()
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_soal_ujian_id", soalMasterIds)
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_soal_akm)
        .fetch();

      const soalData = [];

      const checkIfExist = await TkPesertaUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
        .first();

      if (checkIfExist) {
        return response.ok({
          peserta_ujian: checkIfExist,
        });
      }

      const pesertaUjian = await TkPesertaUjian.create({
        waktu_mulai,
        dinilai: 0,
        selesai: 0,
        dihapus: 0,
        m_user_id: user.id,
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
      });

      await Promise.all(
        soalAKM.toJSON().map(async (d) => {
          if (d.soal.bentuk == "uraian") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk == "pg_kompleks") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk == "menjodohkan") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk == "esai") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              m_soal_ujian_id: d.soal.id,
              jawaban_rubrik_esai: d.soal.rubrik_kj,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          } else if (d.soal.bentuk == "pg") {
            soalData.push({
              durasi: 0,
              ragu: 0,
              dijawab: 0,
              dinilai: 1,
              m_soal_ujian_id: d.soal.id,
              tk_peserta_ujian_id: pesertaUjian.id,
            });
          }
        })
      );

      await TkJawabanUjianSiswa.createMany(soalData);

      const res = await jadwalUjianReference.add({
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
        user_id: pesertaUjian.m_user_id,
        progress: 0,
        waktu_mulai: waktu_mulai,
      });

      await TkPesertaUjian.query().where({ id: pesertaUjian.id }).update({
        doc_id: res.id,
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
      });
    } else {
      const soalPGIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterPGIds = await MSoalUjian.query()
        .where({ bentuk: "pg" })
        .andWhere({ dihapus: 0 })
        .whereIn("id", soalPGIds)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_pg)
        .ids();

      const soalPG = await TkSoalUjian.query()
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_soal_ujian_id", soalMasterPGIds)
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_pg)
        .fetch();

      const soalEsaiIds = await TkSoalUjian.query()
        .where({ dihapus: 0 })
        .andWhere({ m_ujian_id: ujian_id })
        .pluck("m_soal_ujian_id");

      const soalMasterEsaiIds = await MSoalUjian.query()
        .where({ bentuk: "esai" })
        .andWhere({ dihapus: 0 })
        .whereIn("id", soalEsaiIds)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_esai)
        .ids();

      const soalEsai = await TkSoalUjian.query()
        .with("soal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_soal_ujian_id", soalMasterEsaiIds)
        .orderByRaw(`${diacak}`)
        .limit(jadwalUjian.toJSON().jadwalUjian.jumlah_esai)
        .fetch();

      const soalData = [];

      const checkIfExist = await TkPesertaUjian.query()
        .where({ m_user_id: user.id })
        .andWhere({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
        .first();

      if (checkIfExist) {
        return response.ok({
          peserta_ujian: checkIfExist,
        });
      }

      const pesertaUjian = await TkPesertaUjian.create({
        waktu_mulai,
        dinilai: 0,
        selesai: 0,
        dihapus: 0,
        m_user_id: user.id,
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
      });

      await Promise.all(
        soalPG.toJSON().map(async (d) => {
          soalData.push({
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            dinilai: 1,
            m_soal_ujian_id: d.soal.id,
            tk_peserta_ujian_id: pesertaUjian.id,
          });
        })
      );

      await Promise.all(
        soalEsai.toJSON().map(async (d) => {
          soalData.push({
            durasi: 0,
            ragu: 0,
            dijawab: 0,
            m_soal_ujian_id: d.soal.id,
            jawaban_rubrik_esai: d.soal.rubrik_kj,
            tk_peserta_ujian_id: pesertaUjian.id,
          });
        })
      );

      await TkJawabanUjianSiswa.createMany(soalData);

      const res = await jadwalUjianReference.add({
        tk_jadwal_ujian_id: tk_jadwal_ujian_id,
        user_id: pesertaUjian.m_user_id,
        progress: 0,
        waktu_mulai: waktu_mulai,
      });

      await TkPesertaUjian.query().where({ id: pesertaUjian.id }).update({
        doc_id: res.id,
      });

      return response.ok({
        peserta_ujian: pesertaUjian,
      });
    }
  }

  async putPesertaUjian({
    response,
    request,
    auth,
    params: { peserta_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { waktu_selesai } = request.post();

    const pesertaUjian = await TkPesertaUjian.query()
      .where({ id: peserta_ujian_id })
      .update({
        waktu_selesai,
        selesai: 1,
      });

    if (!pesertaUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    const pesertaUjianData = await TkPesertaUjian.query()
      .where({ id: peserta_ujian_id })
      .first();

    await jadwalUjianReference.doc(`${pesertaUjianData.doc_id}`).set(
      {
        waktu_selesai: waktu_selesai,
      },
      { merge: true }
    );

    return response.ok({
      message: "Jawaban berhasil direkam",
    });
  }

  async putJawabanUjianSiswa({
    response,
    request,
    auth,
    params: { jawaban_ujian_siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      jawaban_pg,
      jawaban_esai,
      durasi,
      ragu,
      jawaban_rubrik_esai,
      jawaban_opsi_uraian,
      jawaban_uraian,
      jawaban_pg_kompleks,
      jawaban_menjodohkan,
      jawaban_foto,
    } = request.post();
    jawaban_pg_kompleks = jawaban_pg_kompleks
      ? jawaban_pg_kompleks.toString()
      : null;
    jawaban_foto = jawaban_foto ? jawaban_foto.toString() : null;
    jawaban_menjodohkan = jawaban_menjodohkan
      ? JSON.stringify(jawaban_menjodohkan)
      : null;

    if (user.role == "guru" || user.role == "admin") {
      await TkJawabanUjianSiswa.query()
        .where({ id: jawaban_ujian_siswa_id })
        .update({
          jawaban_rubrik_esai: JSON.stringify(jawaban_rubrik_esai),
          dinilai: 1,
        });

      return response.ok({
        message: messagePutSuccess,
      });
    } else if (user.role == "siswa") {
      let jawabanUjianSiswa;

      if (jawaban_opsi_uraian) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_opsi_uraian,
            jawaban_uraian,
            durasi,
            ragu,
            dijawab: 1,
            jawaban_foto,
          });
      } else if (jawaban_pg_kompleks) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_pg_kompleks,
            durasi,
            ragu,
            dijawab: 1,
          });
      }
      if (jawaban_menjodohkan) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_menjodohkan,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else if (jawaban_esai) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_esai,
            durasi,
            ragu,
            dijawab: 1,
            jawaban_foto,
          });
      } else if (jawaban_pg) {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            jawaban_pg,
            durasi,
            ragu,
            dijawab: 1,
          });
      } else {
        jawabanUjianSiswa = await TkJawabanUjianSiswa.query()
          .where({ id: jawaban_ujian_siswa_id })
          .update({
            ragu,
          });
      }

      if (!jawabanUjianSiswa) {
        return response.notFound({
          message: messageNotFound,
        });
      }

      const jawabanUjianSiswaData = await TkJawabanUjianSiswa.query()
        .with("pesertaUjian", (builder) => {
          builder.withCount("jawabanSiswa as totalDijawab", (builder) => {
            builder.where({ dijawab: 1 });
          });
        })
        .where({ id: jawaban_ujian_siswa_id })
        .first();

      await jadwalUjianReference
        .doc(`${jawabanUjianSiswaData.toJSON().pesertaUjian.doc_id}`)
        .set(
          {
            tk_jadwal_ujian_id: jawabanUjianSiswaData.toJSON().pesertaUjian
              .tk_jadwal_ujian_id,
            user_id: jawabanUjianSiswaData.toJSON().pesertaUjian.m_user_id,
            progress: jawabanUjianSiswaData.toJSON().pesertaUjian.__meta__
              .totalDijawab,
          },
          { merge: true }
        );

      return response.noContent();
    }
  }

  async getSlider({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const slider = await MSlider.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    return response.ok({
      slider: slider,
    });
  }

  async postSlider({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { banner, judul, deskripsi } = request.post();

    const slider = await MSlider.create({
      banner,
      judul,
      deskripsi,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSlider({ response, request, auth, params: { slider_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { banner, judul, deskripsi } = request.post();

    const slider = await MSlider.query().where({ id: slider_id }).update({
      banner,
      judul,
      deskripsi,
    });

    if (!slider) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSlider({ response, request, auth, params: { slider_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const slider = await MSlider.query().where({ id: slider_id }).update({
      dihapus: 1,
    });

    if (!slider) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getInformasiSekolah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { section } = request.get();

    let informasiSekolah;

    if (section == "beranda") {
      informasiSekolah = await MInformasiSekolah.query()
        .select(
          "deskripsi_singkat",
          "visi",
          "misi",
          "background_section_mengapa",
          "jumlah_siswa",
          "jumlah_guru",
          "jumlah_kelas",
          "thumbnail_profil",
          "video_profil",
          "background_section_virtual_tour",
          "virtual_tour"
        )
        .where({ m_sekolah_id: sekolah.id })
        .first();
    } else if (section == "profil") {
      informasiSekolah = await MInformasiSekolah.query()
        .select(
          "banner_profil",
          "deskripsi_sekolah",
          "foto_tentang_sekolah",
          "pesan_kepsek",
          "foto_kepsek",
          "sejarah",
          "foto_sejarah",
          "foto_logo",
          "lirik_mars",
          "lagu_mars",
          "alamat",
          "gmaps",
          "email",
          "telp",
          "fax"
        )
        .where({ m_sekolah_id: sekolah.id })
        .first();
    } else if (section == "sarpras") {
      informasiSekolah = await MInformasiSekolah.query()
        .select("banner_sarpras")
        .where({ m_sekolah_id: sekolah.id })
        .first();
    } else if (section == "blog") {
      informasiSekolah = await MInformasiSekolah.query()
        .select("banner_blog")
        .where({ m_sekolah_id: sekolah.id })
        .first();
    }

    return response.ok({
      informasi_sekolah: informasiSekolah,
    });
  }

  async putInformasiSekolah({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      deskripsi_singkat,
      visi,
      misi,
      background_section_mengapa,
      jumlah_siswa,
      jumlah_guru,
      jumlah_kelas,
      thumbnail_profil,
      video_profil,
      background_section_virtual_tour,
      virtual_tour,
      banner_profil,
      deskripsi_sekolah,
      foto_tentang_sekolah,
      pesan_kepsek,
      foto_kepsek,
      sejarah,
      foto_sejarah,
      foto_logo,
      lirik_mars,
      lagu_mars,
      alamat,
      gmaps,
      email,
      telp,
      fax,
      banner_sarpras,
      banner_blog,
    } = request.post();

    let updatePayload = {};

    if (deskripsi_singkat)
      updatePayload.deskripsi_singkat = Buffer(deskripsi_singkat).toString(
        "base64"
      );
    if (visi) updatePayload.visi = Buffer(visi).toString("base64");
    if (misi) updatePayload.misi = Buffer(misi).toString("base64");
    if (background_section_mengapa)
      updatePayload.background_section_mengapa = background_section_mengapa;
    if (jumlah_siswa) updatePayload.jumlah_siswa = jumlah_siswa;
    if (jumlah_guru) updatePayload.jumlah_guru = jumlah_guru;
    if (jumlah_kelas) updatePayload.jumlah_kelas = jumlah_kelas;
    if (thumbnail_profil) updatePayload.thumbnail_profil = thumbnail_profil;
    if (video_profil) updatePayload.video_profil = video_profil;
    if (background_section_virtual_tour)
      updatePayload.background_section_virtual_tour = background_section_virtual_tour;
    if (virtual_tour) updatePayload.virtual_tour = virtual_tour;
    if (banner_profil) updatePayload.banner_profil = banner_profil;
    if (deskripsi_sekolah)
      updatePayload.deskripsi_sekolah = Buffer(deskripsi_sekolah).toString(
        "base64"
      );
    if (foto_tentang_sekolah)
      updatePayload.foto_tentang_sekolah = foto_tentang_sekolah
        ? foto_tentang_sekolah.toString()
        : "";
    if (pesan_kepsek)
      updatePayload.pesan_kepsek = Buffer(pesan_kepsek).toString("base64");
    if (foto_kepsek) updatePayload.foto_kepsek = foto_kepsek;
    if (sejarah) updatePayload.sejarah = Buffer(sejarah).toString("base64");
    if (foto_sejarah) updatePayload.foto_sejarah = foto_sejarah;
    if (foto_logo) updatePayload.foto_logo = foto_logo;
    if (lirik_mars)
      updatePayload.lirik_mars = Buffer(lirik_mars).toString("base64");
    if (lagu_mars) updatePayload.lagu_mars = lagu_mars;
    if (alamat) updatePayload.alamat = alamat;
    if (gmaps) updatePayload.gmaps = gmaps;
    if (email) updatePayload.email = email;
    if (telp) updatePayload.telp = telp;
    if (fax) updatePayload.fax = fax;
    if (banner_sarpras) updatePayload.banner_sarpras = banner_sarpras;
    if (banner_blog) updatePayload.banner_blog = banner_blog;

    const check = await MInformasiSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (!check) {
      await MInformasiSekolah.create({
        m_sekolah_id: sekolah.id,
      });
    }

    const informasiSekolah = await MInformasiSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .update(updatePayload);

    if (!informasiSekolah) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getInformasiJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jurusan = await MJurusan.query()
      .with("informasi")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const { jurusan_id } = request.get();

    let informasiJurusan;
    let guruJurusan;
    let guru;

    if (jurusan_id) {
      informasiJurusan = await MInformasiJurusan.query()
        .with("jurusan")
        .where({ m_jurusan_id: jurusan_id })
        .first();

      guruJurusan = await MGuruJurusan.query()
        .with("user")
        .where({ m_jurusan_id: jurusan_id })
        .andWhere({ dihapus: 0 })
        .fetch();

      guru = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ role: "guru" })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    return response.ok({
      jurusan: jurusan,
      informasi_jurusan: informasiJurusan,
      guru: guru,
      guruJurusan: guruJurusan,
    });
  }

  async putInformasiJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      banner,
      sambutan,
      deskripsi,
      cover,
      galeri,
      m_jurusan_id,
    } = request.post();

    const check = await MInformasiJurusan.query()
      .where({ m_jurusan_id: m_jurusan_id })
      .first();

    if (!check) {
      await MInformasiJurusan.create({
        m_jurusan_id: m_jurusan_id,
      });
    }

    const informasiJurusan = await MInformasiJurusan.query()
      .where({ m_jurusan_id: m_jurusan_id })
      .update({
        banner,
        sambutan,
        deskripsi,
        cover,
        galeri: galeri ? galeri.toString() : null,
      });

    if (!informasiJurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getKegiatan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kegiatan = await MKegiatan.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const { kegiatan_id } = request.get();

    let informasiKegiatan;

    if (kegiatan_id) {
      informasiKegiatan = await MKegiatan.query()
        .with("galeri", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ id: kegiatan_id })
        .first();
    }

    return response.ok({
      kegiatan: kegiatan,
      informasi_kegiatan: informasiKegiatan,
    });
  }

  async postKegiatan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, banner } = request.post();

    const kegiatan = await MKegiatan.create({
      dihapus: 0,
      nama,
      banner,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKegiatan({ response, request, auth, params: { kegiatan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { nama, banner } = request.post();

    const kegiatan = await MKegiatan.query().where({ id: kegiatan_id }).update({
      nama,
      banner,
    });

    if (!kegiatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKegiatan({ response, request, auth, params: { kegiatan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const kegiatan = await MKegiatan.query().where({ id: kegiatan_id }).update({
      dihapus: 1,
    });

    if (!kegiatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getGelombangPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }

    const user = await auth.getUser();

    const checkIds = await MGelombangPpdb.query()
      .where("dibuka", "<=", moment().format("YYYY-MM-DD"))
      .andWhere("ditutup", ">=", moment().format("YYYY-MM-DD"))
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let gelombangAktif;

    if (checkIds.length) {
      gelombangAktif = await MPendaftarPpdb.query()
        .with("gelombang")
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .whereIn("m_gelombang_ppdb_id", checkIds)
        .orWhereNotNull("bukti")
        .first();
    }

    const pendaftarIds = await MPendaftarPpdb.query()
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .pluck("m_gelombang_ppdb_id");

    const terdaftar = await MGelombangPpdb.query()
      .whereIn("id", pendaftarIds)
      .fetch();

    const gelombang = await MGelombangPpdb.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      gelombang: gelombang,
      terdaftar: terdaftar,
      gelombangAktif: gelombangAktif,
    });
  }

  async detailGelombangPPDB({ response, params: { gelombang_ppdb_id } }) {
    const gelombang = await MGelombangPpdb.query()
      .with("pendaftar", (builder) => {
        builder.with("user");
      })
      .where({ id: gelombang_ppdb_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      gelombang: gelombang,
    });
  }

  async postGelombangPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const ta = await this.getTAAktif(sekolah);

    const {
      nama,
      dibuka,
      ditutup,
      tes_akademik,
      biaya_pendaftaran,
    } = request.post();

    await MGelombangPpdb.create({
      nama,
      dibuka,
      ditutup,
      dihapus: 0,
      tes_akademik,
      biaya_pendaftaran,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putGelombangPPDB({
    response,
    request,
    auth,
    params: { gelombang_ppdb_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      dibuka,
      ditutup,
      tes_akademik,
      biaya_pendaftaran,
    } = request.post();

    const gelombang = await MGelombangPpdb.query()
      .where({ id: gelombang_ppdb_id })
      .update({
        nama,
        dibuka,
        ditutup,
        tes_akademik,
        biaya_pendaftaran,
      });

    if (!gelombang) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteGelombangPPDB({
    response,
    request,
    auth,
    params: { gelombang_ppdb_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const gelombang = await MGelombangPpdb.query()
      .where({ id: gelombang_ppdb_id })
      .update({
        dihapus: 1,
      });

    if (!gelombang) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postPendaftarPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { m_gelombang_ppdb_id } = request.post();

    const check = await MPendaftarPpdb.query()
      .where({ dihapus: 0 })
      .andWhere({ m_gelombang_ppdb_id: m_gelombang_ppdb_id })
      .andWhere({ m_user_id: user.id })
      .first();

    if (check) {
      return response.forbidden({
        message: "Kamu sudah terdaftar pada gelombang ini",
      });
    }

    await MPendaftarPpdb.create({
      m_gelombang_ppdb_id,
      m_user_id: user.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPendaftarPPDB({ response, request, params: { pendaftar_ppdb_id } }) {
    const {
      bank,
      norek,
      nama_pemilik,
      nominal,
      bukti,
      m_jurusan_1_id,
      m_jurusan_2_id,
      m_jurusan_3_id,
      m_jurusan_4_id,
      m_jurusan_5_id,
    } = request.post();

    const check = await MPendaftarPpdb.query()
      .where({ id: pendaftar_ppdb_id })
      .update({
        bank,
        norek,
        nama_pemilik,
        nominal,
        bukti,
        m_jurusan_1_id,
        m_jurusan_2_id,
        m_jurusan_3_id,
        m_jurusan_4_id,
        m_jurusan_5_id,
      });

    if (!check) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async getAlurPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }

    const alur = await MAlurPPDB.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      alur: alur,
    });
  }

  async postAlurPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const ta = await this.getTAAktif(sekolah);

    const { judul, deskripsi } = request.post();

    await MAlurPPDB.create({
      judul,
      deskripsi,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_ta_id: ta.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putAlurPPDB({ response, request, auth, params: { alur_ppdb_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { judul, deskripsi } = request.post();

    const alur = await MAlurPPDB.query().where({ id: alur_ppdb_id }).update({
      judul,
      deskripsi,
    });

    if (!alur) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAlurPPDB({ response, request, auth, params: { alur_ppdb_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const alur = await MAlurPPDB.query().where({ id: alur_ppdb_id }).update({
      dihapus: 1,
    });

    if (!alur) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async detailKegiatanGaleri({
    response,
    request,
    auth,
    params: { kegiatan_galeri_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kegiatanGaleri = await MKegiatanGaleri.query()
      .with("kegiatan")
      .where({ id: kegiatan_galeri_id })
      .first();

    if (!kegiatanGaleri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      kegiatanGaleri: kegiatanGaleri,
    });
  }

  async postKegiatanGaleri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, deskripsi, m_kegiatan_id } = request.post();

    const kegiatan = await MKegiatanGaleri.create({
      foto,
      nama,
      deskripsi,
      dihapus: 0,
      m_kegiatan_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKegiatanGaleri({
    response,
    request,
    auth,
    params: { kegiatan_galeri_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, deskripsi } = request.post();

    const kegiatanGaleri = await MKegiatanGaleri.query()
      .where({ id: kegiatan_galeri_id })
      .update({
        foto,
        nama,
        deskripsi,
      });

    if (!kegiatanGaleri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKegiatanGaleri({
    response,
    request,
    auth,
    params: { kegiatan_galeri_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const kegiatanGaleri = await MKegiatanGaleri.query()
      .where({ id: kegiatan_galeri_id })
      .update({
        dihapus: 1,
      });

    if (!kegiatanGaleri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postGuruJurusan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, jabatan, m_jurusan_id, m_user_id } = request.post();

    const guruJurusan = await MGuruJurusan.create({
      foto,
      jabatan,
      dihapus: 0,
      m_jurusan_id,
      m_user_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putGuruJurusan({
    response,
    request,
    auth,
    params: { guru_jurusan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, jabatan, m_jurusan_id, m_user_id } = request.post();

    const guruJurusan = await MGuruJurusan.query()
      .where({ id: guru_jurusan_id })
      .update({
        foto,
        jabatan,
        dihapus: 0,
        m_jurusan_id,
        m_user_id,
      });

    if (!guruJurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteGuruJurusan({
    response,
    request,
    auth,
    params: { guru_jurusan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const guruJurusan = await MGuruJurusan.query()
      .where({ id: guru_jurusan_id })
      .update({
        dihapus: 1,
      });

    if (!guruJurusan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getSarpras({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const sarpras = await MSarpras.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      sarpras: sarpras,
    });
  }

  async detailSarpras({ response, request, params: { sarpras_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const sarpras = await MSarpras.query().where({ id: sarpras_id }).first();

    return response.ok({
      sarpras: sarpras,
    });
  }

  async postSarpras({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, virtual_tour, deskripsi } = request.post();

    const sarpras = await MSarpras.create({
      foto,
      nama,
      virtual_tour,
      deskripsi,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putSarpras({ response, request, auth, params: { sarpras_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const { foto, nama, virtual_tour, deskripsi } = request.post();

    const sarpras = await MSarpras.query().where({ id: sarpras_id }).update({
      foto,
      nama,
      virtual_tour,
      deskripsi,
    });

    if (!sarpras) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteSarpras({ response, request, auth, params: { sarpras_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const sarpras = await MSarpras.query().where({ id: sarpras_id }).update({
      dihapus: 1,
    });

    if (!sarpras) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPerpus({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    const mataPelajaran = await MMataPelajaran.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const { nav, search, tag, urutkan } = request.get();

    let perpus;

    if (tag) {
      const tagIds = await MPerpusTag.query().whereIn("nama", tag).ids();

      const perpusTags = await TkPerpusTag.query()
        .whereIn("m_perpus_tag_id", tagIds)
        .pluck("m_perpus_id");

      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("id", perpusTags)
        .andWhere({ dihapus: 0 })
        .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
        .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    }

    if (search) {
      if (nav == "buku-saya") {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_user_id: user.id })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      } else if (nav == "buku-sekolah") {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ dihapus: 0 })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      } else {
        perpus = await MPerpus.query()
          .with("user")
          .with("buku")
          .with("sekolah")
          .with("tag", (builder) => {
            builder.with("tag");
          })
          .with("mapel", (builder) => {
            builder.with("mapel");
          })
          .withCount("aktivitasPerpus as total_baca", (builder) => {
            builder.where({ aktivitas: "baca" });
          })
          .withCount("aktivitasPerpus as total_download", (builder) => {
            builder.where({ aktivitas: "download" });
          })
          .withCount("aktivitasPerpus as total_rating", (builder) => {
            builder.where({ aktivitas: "rating" });
          })
          .withCount("komen as total_komen", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .orWhere("judul", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("deskripsi", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penulis", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("penerbit", "like", `%${decodeURIComponent(search)}%`)
          .orWhere("isbn", "like", `%${decodeURIComponent(search)}%`)
          .andWhere({ dihapus: 0 })
          .orderBy("id", "desc")
          .fetch();
      }
    } else if (nav == "buku-saya") {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .orderBy("id", "desc")
        .fetch();
    } else if (nav == "buku-sekolah") {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    } else {
      perpus = await MPerpus.query()
        .with("user")
        .with("buku")
        .with("sekolah")
        .with("tag", (builder) => {
          builder.with("tag");
        })
        .with("mapel", (builder) => {
          builder.with("mapel");
        })
        .withCount("aktivitasPerpus as total_baca", (builder) => {
          builder.where({ aktivitas: "baca" });
        })
        .withCount("aktivitasPerpus as total_download", (builder) => {
          builder.where({ aktivitas: "download" });
        })
        .withCount("aktivitasPerpus as total_rating", (builder) => {
          builder.where({ aktivitas: "rating" });
        })
        .withCount("komen as total_komen", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .orderBy("id", "desc")
        .fetch();
    }

    if (urutkan == "terbaru") {
    } else if (urutkan == "populer") {
    } else if (urutkan == "dibicarakan") {
    }

    const tagData = await MPerpusTag.query()
      .where({ dihapus: 0 })
      .limit(5)
      .fetch();

    const filter = [
      { label: "Terbaru", value: "terbaru" },
      { label: "Paling Populer", value: "populer" },
      { label: "Paling Dibicarakan", value: "dibicarakan" },
    ];

    return response.ok({
      perpus: perpus,
      mataPelajaran: mataPelajaran,
      tag: tagData,
      filter: filter,
    });
  }

  async detailPerpus({ response, request, auth, params: { perpus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    const perpus = await MPerpus.query()
      .with("user")
      .with("buku")
      .with("sekolah")
      .with("tag", (builder) => {
        builder.with("tag");
      })
      .with("mapel", (builder) => {
        builder.with("mapel");
      })
      .withCount("aktivitasPerpus as total_baca", (builder) => {
        builder.where({ aktivitas: "baca" });
      })
      .withCount("aktivitasPerpus as total_download", (builder) => {
        builder.where({ aktivitas: "download" });
      })
      .withCount("aktivitasPerpus as total_rating", (builder) => {
        builder.where({ aktivitas: "rating" });
      })
      .with("komen", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .where({ id: perpus_id })
      .orderBy("id", "desc")
      .first();

    const ratingPerpus = await TkPerpusAktivitas.query()
      .where({ m_perpus_id: perpus_id })
      .andWhere({ aktivitas: "rating" })
      .avg("rating as ratingPerpus");

    return response.ok({
      perpus: perpus,
      ratingPerpus: ratingPerpus[0].ratingPerpus,
    });
  }

  async postPerpus({ response, request, auth }) {
    const domain = request.headers().origin;
    const sekolah = await this.getSekolahByDomain(domain);
    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();
    const {
      judul,
      deskripsi,
      penulis,
      penerbit,
      tahun_terbit,
      isbn,
      draft,
      buku,
      // tk perpus mapel
      m_mata_pelajaran_id,
      // tk perpus tag
      tag,
      cover,
    } = request.post();
    // let bukuBuffer = fs.readFileSync(new URL(`file:///${buku}`));
    // const bukuData = await pdf(bukuBuffer, {
    //   //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    //   normalizeWhitespace: false,
    //   //do not attempt to combine same line TextItem's. The default value is `false`.
    //   disableCombineTextItems: false,
    // });
    let checkBuku = await MBuku.query()
      .where({ link: buku })
      // .where({ createdate: bukuData.metadata._metadata.createdate })
      // .andWhere({ metadatadate: bukuData.metadata._metadata.metadatadate })
      // .andWhere({ creatortool: bukuData.metadata._metadata.creatortool })
      // .andWhere({ instanceid: bukuData.metadata._metadata.instanceid })
      // .andWhere({
      //   originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
      // })
      // .andWhere({ documentid: bukuData.metadata._metadata.documentid })
      // .andWhere({ renditionclass: bukuData.metadata._metadata.renditionclass })
      // .andWhere({ history: bukuData.metadata._metadata.history })
      // .andWhere({ derivedfrom: bukuData.metadata._metadata.derivedfrom })
      // .andWhere({ format: bukuData.metadata._metadata.format })
      // .andWhere({ producer: bukuData.metadata._metadata.producer })
      // .andWhere({ trapped: bukuData.metadata._metadata.trapped })
      .first();
    if (!checkBuku) {
      checkBuku = await MBuku.create({
        // createdate: bukuData.metadata._metadata.createdate,
        // metadatadate: bukuData.metadata._metadata.metadatadate,
        // creatortool: bukuData.metadata._metadata.creatortool,
        // instanceid: bukuData.metadata._metadata.instanceid,
        // originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
        // documentid: bukuData.metadata._metadata.documentid,
        // renditionclass: bukuData.metadata._metadata.renditionclass,
        // history: bukuData.metadata._metadata.history,
        // derivedfrom: bukuData.metadata._metadata.derivedfrom,
        // format: bukuData.metadata._metadata.format,
        // producer: bukuData.metadata._metadata.producer,
        // trapped: bukuData.metadata._metadata.trapped,
        link: buku,
      });
    }

    const perpus = await MPerpus.create({
      judul,
      deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
      penulis: penulis ? penulis.toString() : "",
      penerbit,
      tahun_terbit,
      isbn,
      cover,
      draft,
      m_user_id: user.id,
      m_buku_id: checkBuku.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    if (m_mata_pelajaran_id) {
      const materi = await MMateri.query()
        .whereIn("mata_pelajaran_id", m_mata_pelajaran_id)
        .fetch();

      await Promise.all(
        materi.toJSON().map(async (d) => {
          await TkPerpusMapel.create({
            m_perpus_id: perpus.id,
            m_mata_pelajaran_id: d.m_mata_pelajaran_id,
            m_jurusan_id: d.m_jurusan_id,
            dihapus: 0,
          });
        })
      );
    }

    if (tag.length) {
      await Promise.all(
        tag.map(async (d) => {
          let check = await MPerpusTag.query().where({ nama: d }).first();

          if (!check) {
            check = await MPerpusTag.create({
              nama: d,
              dihapus: 0,
              m_user_id: user.id,
              m_sekolah_id: sekolah.id,
            });
          }

          await TkPerpusTag.create({
            m_perpus_id: perpus.id,
            m_perpus_tag_id: check.id,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPerpus({ response, request, auth, params: { perpus_id } }) {
    const domain = request.headers().origin;
    const sekolah = await this.getSekolahByDomain(domain);
    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const user = await auth.getUser();
    const {
      judul,
      deskripsi,
      penulis,
      penerbit,
      tahun_terbit,
      isbn,
      draft,
      buku,
      // tk perpus mapel
      m_mata_pelajaran_id,
      // tk perpus tag
      tag,
      cover,
    } = request.post();
    // let bukuBuffer = fs.readFileSync(new URL(`file:///${buku}`));
    // const bukuData = await pdf(bukuBuffer, {
    //   //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    //   normalizeWhitespace: false,
    //   //do not attempt to combine same line TextItem's. The default value is `false`.
    //   disableCombineTextItems: false,
    // });
    let checkBuku = await MBuku.query()
      .where({ link: buku })
      // .where({ createdate: bukuData.metadata._metadata.createdate })
      // .andWhere({ metadatadate: bukuData.metadata._metadata.metadatadate })
      // .andWhere({ creatortool: bukuData.metadata._metadata.creatortool })
      // .andWhere({ instanceid: bukuData.metadata._metadata.instanceid })
      // .andWhere({
      //   originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
      // })
      // .andWhere({ documentid: bukuData.metadata._metadata.documentid })
      // .andWhere({ renditionclass: bukuData.metadata._metadata.renditionclass })
      // .andWhere({ history: bukuData.metadata._metadata.history })
      // .andWhere({ derivedfrom: bukuData.metadata._metadata.derivedfrom })
      // .andWhere({ format: bukuData.metadata._metadata.format })
      // .andWhere({ producer: bukuData.metadata._metadata.producer })
      // .andWhere({ trapped: bukuData.metadata._metadata.trapped })
      .first();
    if (!checkBuku) {
      checkBuku = await MBuku.create({
        // createdate: bukuData.metadata._metadata.createdate,
        // metadatadate: bukuData.metadata._metadata.metadatadate,
        // creatortool: bukuData.metadata._metadata.creatortool,
        // instanceid: bukuData.metadata._metadata.instanceid,
        // originaldocumentid: bukuData.metadata._metadata.originaldocumentid,
        // documentid: bukuData.metadata._metadata.documentid,
        // renditionclass: bukuData.metadata._metadata.renditionclass,
        // history: bukuData.metadata._metadata.history,
        // derivedfrom: bukuData.metadata._metadata.derivedfrom,
        // format: bukuData.metadata._metadata.format,
        // producer: bukuData.metadata._metadata.producer,
        // trapped: bukuData.metadata._metadata.trapped,
        link: buku,
      });
    }

    const perpus = await MPerpus.query()
      .where({ id: perpus_id })
      .update({
        judul,
        deskripsi: deskripsi ? Buffer(deskripsi).toString("base64") : "",
        penulis: penulis ? penulis.toString() : "",
        penerbit,
        tahun_terbit,
        cover,
        isbn,
        draft,
        m_user_id: user.id,
        m_buku_id: checkBuku.id,
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });

    if (m_mata_pelajaran_id) {
      const materi = await MMateri.query()
        .where("mata_pelajaran_id", m_mata_pelajaran_id)
        .fetch();

      await TkPerpusMapel.query().where({ m_perpus_id: perpus_id }).delete();

      await Promise.all(
        materi.toJSON().map(async (d) => {
          await TkPerpusMapel.create({
            m_perpus_id: perpus_id,
            m_mata_pelajaran_id: d.m_mata_pelajaran_id,
            m_jurusan_id: d.m_jurusan_id,
            dihapus: 0,
          });
        })
      );
    }

    if (tag.length) {
      await Promise.all(
        tag.map(async (d) => {
          let check = await MPerpusTag.query().where({ nama: d }).first();

          if (!check) {
            check = await MPerpusTag.create({
              nama: d,
              dihapus: 0,
              m_user_id: user.id,
              m_sekolah_id: sekolah.id,
            });
          }

          await TkPerpusTag.query().where({ m_perpus_id: perpus_id }).delete();

          await TkPerpusTag.create({
            m_perpus_id: perpus_id,
            m_perpus_tag_id: check.id,
            dihapus: 0,
          });
        })
      );
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePerpus({ response, request, auth, params: { perpus_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const perpus = await MPerpus.query().where({ id: perpus_id }).update({
      dihapus: 1,
    });

    if (!perpus) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPerpusAktivitas({ response, request, auth }) {
    const domain = request.headers().origin;
    const sekolah = await this.getSekolahByDomain(domain);
    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      aktivitas,
      waktu_mulai,
      waktu_selesai,
      m_perpus_id,
      rating,
    } = request.post();

    const check = await TkPerpusAktivitas.query()
      .where({ m_user_id: user.id })
      .andWhere({ m_perpus_id: m_perpus_id })
      .andWhere({ aktivitas: aktivitas })
      .first();

    if (!check) {
      await TkPerpusAktivitas.create({
        dihapus: 0,
        m_user_id: user.id,
        aktivitas,
        waktu_mulai,
        waktu_selesai,
        m_perpus_id,
        rating,
      });
    } else {
      await TkPerpusAktivitas.query().where({ id: check.id }).update({
        waktu_selesai,
        rating,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postPerpusKomen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { m_perpus_id, komen } = request.post();

    const perpusKomen = await MPerpusKomen.create({
      dihapus: 0,
      m_perpus_id: m_perpus_id,
      komen: komen,
      m_user_id: user.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deletePerpusKomen({
    response,
    request,
    auth,
    params: { perpus_komen_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const perpusKomen = await MPerpusKomen.query()
      .where({ id: perpus_komen_id })
      .update({
        dihapus: 1,
      });

    if (!perpusKomen) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getRekSekolah({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const rekSekolah = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    return response.ok({
      rekSekolah: rekSekolah,
    });
  }

  async putRekSekolah({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { bank, norek, nama, saldo } = request.post();

    const check = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    if (!check) {
      await MRekSekolah.create({
        dihapus: 0,
        m_sekolah_id: sekolah.id,
      });
    }

    const rekSekolah = await MRekSekolah.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .update({
        bank,
        norek,
        nama,
        saldo,
      });

    if (!rekSekolah) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getPembayaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let { jenis, search } = request.get();

    jenis = jenis ? jenis : "spp";

    let pembayaran;

    if (search) {
      pembayaran = await MPembayaran.query()
        .with("rombel", (builder) => {
          builder.with("rombel");
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ jenis: jenis })
        .andWhere("nama", "like", `%${search}%`)
        .fetch();
    } else {
      pembayaran = await MPembayaran.query()
        .with("rombel", (builder) => {
          builder.with("rombel");
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ jenis: jenis })
        .fetch();
    }

    const rombel = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    let jenisData = [
      { label: "SPP", value: "spp" },
      { label: "Ujian", value: "ujian" },
      { label: "Lainnya", values: "lainnya" },
    ];

    let tipeUjian = [
      { value: "pts1", label: "Penilaian Tengah Semester 1" },
      { value: "pts2", label: "Penilaian Tengah Semester 2" },
      { value: "pas1", label: "Penilaian Akhir Semester 1" },
      { value: "pas2", label: "Penilaian Akhir Semester 2" },
      { value: "us", label: "Ujian Sekolah" },
    ];

    const pembayaranKategori = await MPembayaranKategori.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    return response.ok({
      pembayaran: pembayaran,
      jenisData: jenisData,
      rombel: rombel,
      tipeUjian: tipeUjian,
      pembayaran_kategori: pembayaranKategori,
    });
  }

  async detailPembayaran({
    response,
    request,
    auth,
    params: { pembayaran_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    let { rombel_id, search, nav } = request.get();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pembayaran = await MPembayaran.query()
      .with("rombel", (builder) => {
        builder.with("rombel");
      })
      .where({ id: pembayaran_id })
      .first();

    let siswa;

    let userIds;

    if (search) {
      userIds = await User.query()
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .ids();
    }

    if (rombel_id) {
      if (search) {
        siswa = await MPembayaranSiswa.query()
          .with("user")
          .with("riwayat", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({ tk_pembayaran_rombel_id: rombel_id })
          .whereIn("m_user_id", userIds)
          .fetch();
      } else {
        siswa = await MPembayaranSiswa.query()
          .with("user")
          .with("riwayat", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({ tk_pembayaran_rombel_id: rombel_id })
          .fetch();
      }
    } else {
      if (search) {
        siswa = await MPembayaranSiswa.query()
          .with("user")
          .with("riwayat", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({
            tk_pembayaran_rombel_id: pembayaran.toJSON().rombel[0].id,
          })
          .whereIn("m_user_id", userIds)
          .fetch();
      } else {
        siswa = await MPembayaranSiswa.query()
          .with("user")
          .with("riwayat", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 })
          .andWhere({
            tk_pembayaran_rombel_id: pembayaran.toJSON().rombel[0].id,
          })
          .fetch();
      }
    }

    return response.ok({
      pembayaran,
      siswa,
    });
  }

  async postPembayaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      nama,
      jenis,
      bulan,
      tipe_ujian,
      nominal,
      tanggal_dibuat,
      rombel_id,
    } = request.post();

    rombel_id = rombel_id.length ? rombel_id : [];

    const pembayaran = await MPembayaran.create({
      nama,
      jenis,
      bulan,
      tipe_ujian,
      nominal,
      tanggal_dibuat,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    if (rombel_id.length) {
      await Promise.all(
        rombel_id.map(async (d) => {
          const check = await TkPembayaranRombel.query()
            .where({ dihapus: 0 })
            .andWhere({ m_pembayaran_id: pembayaran.id })
            .andWhere({ m_rombel_id: d })
            .andWhere({ m_sekolah_id: sekolah.id })
            .first();

          if (!check) {
            const tkPembayaran = await TkPembayaranRombel.create({
              dihapus: 0,
              m_pembayaran_id: pembayaran.id,
              m_rombel_id: d,
              m_sekolah_id: sekolah.id,
            });

            const userIds = await MAnggotaRombel.query()
              .where({ m_rombel_id: d })
              .pluck("m_user_id");

            await Promise.all(
              userIds.map(async (user) => {
                await MPembayaranSiswa.create({
                  status: "belum lunas",
                  dihapus: 0,
                  m_user_id: user,
                  tk_pembayaran_rombel_id: tkPembayaran.id,
                  m_sekolah_id: sekolah.id,
                });
              })
            );
          }
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPembayaran({ response, request, auth, params: { pembayaran_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { nama, jenis, bulan, tipe_ujian, nominal, rombel_id } = request.post();

    rombel_id = rombel_id.length ? rombel_id : [];

    const pembayaran = await MPembayaran.query()
      .where({ id: pembayaran_id })
      .update({
        nama,
        jenis,
        bulan,
        tipe_ujian,
        nominal,
      });

    if (!pembayaran) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    if (rombel_id.length) {
      await Promise.all(
        rombel_id.map(async (d) => {
          const check = await TkPembayaranRombel.query()
            .where({ dihapus: 0 })
            .andWhere({ m_pembayaran_id: pembayaran.id })
            .andWhere({ m_rombel_id: d })
            .andWhere({ m_sekolah_id: sekolah.id })
            .first();

          if (!check) {
            await TkPembayaranRombel.create({
              dihapus: 0,
              m_pembayaran_id: pembayaran.id,
              m_rombel_id: d,
              m_sekolah_id: sekolah.id,
            });
          }
        })
      );
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePembayaran({
    response,
    request,
    auth,
    params: { pembayaran_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pembayaran = await MPembayaran.query()
      .where({ id: pembayaran_id })
      .update({
        dihapus: 1,
      });

    if (!pembayaran) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPembayaranKategori({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { kategori } = request.post();

    await MPembayaranKategori.create({
      kategori,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async deletePembayaranKategori({
    response,
    request,
    auth,
    params: { pembayaran_kategori_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pembayaranKategori = await MPembayaranKategori.query()
      .where({ id: pembayaran_kategori_id })
      .update({
        dihapus: 1,
      });

    if (!pembayaranKategori) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async getPembayaranSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { status } = request.get();

    status = status ? status : "belum lunas";

    const user = await auth.getUser();

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const pembayaran = await MPembayaranSiswa.query()
      .with("rombelPembayaran", (builder) => {
        builder.with("pembayaran");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ status: status })
      .fetch();

    return response.ok({
      pembayaran: pembayaran,
      rek_sekolah: rekSekolah,
    });
  }

  async detailPembayaranSiswa({
    response,
    request,
    auth,
    params: { pembayaran_siswa_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const rekSekolah = await MRekSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    const pembayaran = await MPembayaranSiswa.query()
      .with("rombelPembayaran", (builder) => {
        builder.with("pembayaran");
      })
      .with("user")
      .with("riwayat", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("riwayat as totalJumlah", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ id: pembayaran_siswa_id })
      .first();

    const kontak = await MKontak.query()
      .where({
        m_sekolah_id: sekolah.id,
      })
      .first();

    return response.ok({
      pembayaran: pembayaran,
      rek_sekolah: rekSekolah,
      kontak,
    });
  }

  async postRiwayatPembayaranSiswa({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
      bank,
      norek,
      nama_pemilik,
      nominal,
      bukti,
      m_pembayaran_siswa_id,
    } = request.post();

    const pembayaran = await MRiwayatPembayaranSiswa.create({
      bank,
      norek,
      nama_pemilik,
      nominal: +nominal,
      bukti,
      dikonfirmasi: 0,
      m_pembayaran_siswa_id: +m_pembayaran_siswa_id,
      dihapus: 0,
    });

    return response.ok(pembayaran);
  }

  async getKontak({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const kontak = await MKontak.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    return response.ok({
      kontak: kontak,
    });
  }

  async putKontak({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    if (user.role != "admin" || user.m_sekolah_id != sekolah.id) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      tu,
      keuangan,
      kurikulum,
      kesiswaan,
      sarpras,
      humas,
    } = request.post();

    const check = await MKontak.query()
      .where({ m_sekolah_id: sekolah.id })
      .first();

    if (!check) {
      await MKontak.create({
        m_sekolah_id: sekolah.id,
      });
    }

    const kontak = await MKontak.query()
      .where({ m_sekolah_id: sekolah.id })
      .update({
        tu,
        keuangan,
        kurikulum,
        kesiswaan,
        sarpras,
        humas,
      });

    if (!kontak) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getMutasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, dari_tanggal, sampai_tanggal, tipe, offset } = request.get();
    offset = offset ? parseInt(offset) : 0;

    let sarpras;

    if (search) {
      if (dari_tanggal || sampai_tanggal || tipe) {
        if (tipe) {
          sarpras = await MMutasi.query()
            .where({ dihapus: 0 })
            .andWhere({ m_sekolah_id: sekolah.id })
            .andWhere({ tipe: tipe })
            .andWhere("nama", "like", `%${search}%`)
            .whereBetween("waktu_dibuat", [dari_tanggal, sampai_tanggal])
            .offset(offset)
            .limit(25)
            .fetch();
        } else {
          sarpras = await MMutasi.query()
            .where({ dihapus: 0 })
            .andWhere({ m_sekolah_id: sekolah.id })
            .andWhere("nama", "like", `%${search}%`)
            .whereBetween("waktu_dibuat", [dari_tanggal, sampai_tanggal])
            .offset(offset)
            .limit(25)
            .fetch();
        }
      } else {
        sarpras = await MMutasi.query()
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere("nama", "like", `%${search}%`)
          .offset(offset)
          .limit(25)
          .fetch();
      }
    } else {
      if (dari_tanggal || sampai_tanggal || tipe) {
        if (tipe) {
          sarpras = await MMutasi.query()
            .where({ dihapus: 0 })
            .andWhere({ m_sekolah_id: sekolah.id })
            .andWhere({ tipe: tipe })
            .offset(offset)
            .limit(25)
            .fetch();
        } else {
          sarpras = await MMutasi.query()
            .where({ dihapus: 0 })
            .andWhere({ m_sekolah_id: sekolah.id })
            .whereBetween("waktu_dibuat", [dari_tanggal, sampai_tanggal])
            .offset(offset)
            .limit(25)
            .fetch();
        }
      } else {
        sarpras = await MMutasi.query()
          .where({ dihapus: 0 })
          .andWhere({ m_sekolah_id: sekolah.id })
          .offset(offset)
          .limit(25)
          .fetch();
      }
    }

    return response.ok({
      sarpras: sarpras,
    });
  }

  async postMutasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tipe, nama, kategori, nominal, waktu_dibuat } = request.post();

    const mutasi = await MMutasi.create({
      tipe,
      nama,
      kategori,
      nominal,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      waktu_dibuat,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putMutasi({ response, request, auth, params: { mutasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tipe, nama, kategori, nominal, waktu_dibuat } = request.post();

    const mutasi = await MMutasi.query().where({ id: mutasi_id }).update({
      tipe,
      nama,
      kategori,
      nominal,
      waktu_dibuat,
    });

    if (!mutasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteMutasi({ response, request, auth, params: { mutasi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const mutasi = await MMutasi.query().where({ id: mutasi_id }).update({
      dihapus: 1,
    });

    if (!mutasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getIndustri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // get industri
  }

  async postIndustri({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
    } = request.post();

    galeri = galeri ? galeri.toJSON() : null;
    deskripsi = deskripsi ? Buffer(deskripsi).toString("base64") : null;
    tautan = tautan ? JSON.stringify(tautan) : null;

    await MIndustri.create({
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putIndustri({ response, request, auth, params: { industri_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let {
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
    } = request.post();

    galeri = galeri ? galeri.toJSON() : null;
    deskripsi = deskripsi ? Buffer(deskripsi).toString("base64") : null;
    tautan = tautan ? JSON.stringify(tautan) : null;

    const industri = await MIndustri.query().where({ id: industri_id }).update({
      nama,
      klasifikasi,
      jumlah_karyawan,
      tautan,
      galeri,
      deskripsi,
      tahun_kerjasama,
    });

    if (!industri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteIndustri({ response, request, auth, params: { industri_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const industri = await MIndustri.query().where({ id: industri_id }).update({
      dihapus: 1,
    });

    if (!industri) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async getProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let proyek;

    if (search) {
      // ===== service cari proyek ====

      proyek = await MProyek.query()
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .fetch();
    } else {
      // ===== service proyek saya ====

      // cek proyek yg diterima
      const terimaProyekIds = await MAnggotaProyek.query()
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ status: "menerima" })
        .pluck("m_proyek_id");

      // ambil data dari proyek yg diterima
      proyek = await MProyek.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("id", terimaProyekIds)
        .fetch();
    }

    // ===== service cari partner ====
    const cariPartner = await MAnggotaProyek.query()
      .where({ dihapus: 0 })
      .pluck("m_user_id");

    const userPartner = await User.query()
      .where({ dihapus: 0 })
      .andWhere("nama", "like", `%${search}%`)
      .whereIn("id", cariPartner)
      .fetch();

    // ===== List Undangan =====
    const undangan = await MAnggotaProyek.query()
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ status: "undangan" })
      .fetch();

    return response.ok({
      proyek: proyek,
      userPartner: userPartner,
      undangan,
    });
  }

  async detailProyek({ response, request, auth, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async postProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      privasi,
      deskripsi,
      banner,
      m_status_proyek_id,
    } = request.post();

    const proyek = await MProyek.create({
      nama,
      privasi,
      deskripsi,
      banner,
      m_status_proyek_id,
      m_user_id: user.id,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    await MAnggotaProyek.create({
      m_proyek_id: proyek.id,
      m_user_id: user.id,
      status: "menerima",
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putProyek({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      privasi,
      deskripsi,
      banner,
      m_status_proyek_id,
    } = request.post();

    const proyek = await MProyek.query()
      .where({ id: proyek_id })
      .andWhere({ m_user_id: user.id })
      .update({
        nama,
        privasi,
        deskripsi,
        banner,
        m_status_proyek_id,
        m_user_id: user.id,
        m_sekolah_id: sekolah.id,
        dihapus: 0,
      });

    if (!proyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteProyek({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const proyek = await MProyek.query()
      .where({ id: proyek_id })
      .andWhere({ m_user_id: user.id })
      .update({
        dihapus: 1,
      });

    if (!proyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postKategoriPekerjaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, warna, m_proyek_id } = request.post();

    await MKategoriPekerjaan.create({
      nama,
      warna,
      m_proyek_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKategoriPekerjaan({
    response,
    request,
    auth,
    params: { proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, warna, m_proyek_id } = request.post();

    const kategoriPekerjaan = await MKategoriPekerjaan.query()
      .where({ id: proyek_id })
      .andWhere({ m_user_id: user.id })
      .update({
        nama,
        warna,
        m_proyek_id,
        dihapus: 0,
      });

    if (!kategoriPekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKategoriPekerjaaan({
    response,
    request,
    auth,
    params: { proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const kategoriPekerjaan = await MKategoriPekerjaaan.query()
      .where({ id: proyek_id })
      .andWhere({ m_user_id: user.id })
      .update({
        dihapus: 1,
      });

    if (!kategoriPekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ===================== Anggota Proyek Service =========================

  async getAnggotaProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { proyek_id } = request.get();

    const anggota = await MAnggotaProyek.query()
      .where({ dihapus: 0 })
      .andWhere({ status: "menerima" })
      .andWhere({ m_proyek_id: proyek_id })
      .fetch();

    return response.ok({
      anggota,
    });
  }

  // ============ Invite Anggota kedalam Proyek =================
  async postAnggotaProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { anggota_proyek_id, proyek_id, user_id } = request.post();

    const validation = await validate(
      request.post(),
      rulesAnggotaPost,
      pesanSudahDitambahkan
    );

    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const isAdmin = await MAnggotaProyekRole.query()
      .where({ m_anggota_proyek_id: anggota_proyek_id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "Admin" })
      .fetch();

    if (!isAdmin) {
      return response.forbidden({ message: messageForbidden });
    }

    await Promise.all(
      user_id.map(async (d, idx) => {
        await MAnggotaProyek.create({
          m_proyek_id: proyek_id,
          m_user_id: d,
          status: "undangan",
          dihapus: 0,
        });
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ================ Update status Anggota Proyek ======================
  async putAnggotaProyek({
    response,
    request,
    auth,
    params: { anggota_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { status } = request.post();

    const anggota = await MAnggotaProyek.query()
      .where({ id: anggota_proyek_id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .update({
        status,
      });

    if (!anggota) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAnggotaProyek({
    response,
    request,
    auth,
    params: { anggota_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { delete_anggota } = request.post();

    // Cek Role, selain admin tidak boleh delete anggota
    const isAdmin = await MAnggotaProyekRole.query()
      .where({ m_anggota_proyek_id: anggota_proyek_id })
      .andWhere({ role: "Admin" })
      .fetch();

    if (!isAdmin) {
      return response.forbidden({ message: messageForbidden });
    }

    const hapusAnggota = await MAnggotaProyek.query()
      .where({ id: delete_anggota })
      .update({
        dihapus: 1,
      });

    if (!hapusAnggota) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }
}

module.exports = MainController;

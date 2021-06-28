"use strict";

const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
const Sekolah = use("App/Models/Sekolah");
const MSekolah = use("App/Models/MSekolah");
const MSekolahIndustri = use("App/Models/MSekolahIndustri");
const MSarpras = use("App/Models/MSarpras");
const MKegiatanGaleri = use("App/Models/MKegiatanGaleri");
const MProyek = use("App/Models/MProyek");
const MPerpusKomen = use("App/Models/MPerpusKomen");
const MRpp = use("App/Models/MRpp");
const MSikapSiswa = use("App/Models/MSikapSiswa");
const MSikapRombel = use("App/Models/MSikapRombel");
const MRekap = use("App/Models/MRekap");
const MPredikatNilai = use("App/Models/MPredikatNilai");
const MKeteranganRapor = use("App/Models/MKeteranganRapor");
const MKeteranganPkl = use("App/Models/MKeteranganPkl");
const MRaporEkskul = use("App/Models/MRaporEkskul");
const MRekapRombel = use("App/Models/MRekapRombel");
const TkRekapNilai = use("App/Models/TkRekapNilai");
const MGelombangPpdb = use("App/Models/MGelombangPpdb");
const MPendaftarPpdb = use("App/Models/MPendaftarPpdb");
const MAnggotaProyek = use("App/Models/MAnggotaProyek");
const MAnggotaProyekRole = use("App/Models/MAnggotaProyekRole");
const MKategoriPekerjaan = use("App/Models/MKategoriPekerjaan");
const MPekerjaanProyek = use("App/Models/MPekerjaanProyek");
const MDitugaskanPekerjaan = use("App/Models/MDitugaskanPekerjaan");
const MProyekForum = use("App/Models/MProyekForum");
const MProyekForumKomen = use("App/Models/MProyekForumKomen");
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
const MSikapSosial = use("App/Models/MSikapSosial");
const MSikapSpiritual = use("App/Models/MSikapSpiritual");
const MSoalKuis = use("App/Models/MSoalKuis");
const MTimeline = use("App/Models/MTimeline");
const TkTimeline = use("App/Models/TkTimeline");
const TkTimelineKomen = use("App/Models/TkTimelineKomen");
const TkMateriKesimpulan = use("App/Models/TkMateriKesimpulan");
const MTimelineKomen = use("App/Models/MTimelineKomen");
const MPerusahaan = use("App/Models/MPerusahaan");
const MPekerjaan = use("App/Models/MPekerjaan");
const MInformasiPekerjaan = use("App/Models/MInformasiPekerjaan");
const MPekerjaanPengumuman = use("App/Models/MPekerjaanPengumuman");
const MAcaraPerusahaan = use("App/Models/MAcaraPerusahaan");
const TkStatusPekerjaan = use("App/Models/TkStatusPekerjaan");

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
const http = require("http"); // or 'https' for https:// URLs
const Downloader = require("nodejs-file-downloader");

const PDFDocument = require("pdfkit");
const fs = require("fs");
const fetch = require("node-fetch");
const pdf = require("pdf-parse");

// firestore
const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();
var striptags = require("striptags");
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
  proyek_id: "required",
  user_id: "required",
  status: "required",
};

const messagesUser = {
  "password.required": "Password harus diisi",
  "nama.required": "Nama harus diisi",
  "whatsapp.required": "Whatsapp harus diisi",
  "gender.required": "Jenis Kelamin harus diisi",
};

const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const romawi = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, "0");
const year = dateObj.getFullYear();
const keluarantanggal = day + "," + month + "," + year;
class MainController {
  // UTILS

  async removeTag(content) {
    // const removeEl = content.replace(/(<([^>]+)>)/ig, "");

    var html = content;

    return striptags(html);
  }

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

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let {
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
    whatsapp = whatsapp.trim();

    if (user.whatsapp != whatsapp) {
      const check = await User.query().where({ whatsapp: whatsapp }).first();

      if (check) {
        return response.forbidden({
          message: "Akun sudah terdaftar",
        });
      }
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
      bio,
      pendidikan,
      pengalaman,
      prestasi,
      portofolio,
      bahasa,

      // identitas
      nama,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,

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

    let userPayload = {
      // identitas
      nama,
      nama_panggilan,
      whatsapp,
      gender,
      agama,
      tempat_lahir,
      tanggal_lahir,
      avatar,
    };

    tanggal_lahir == "Invalid date" ? delete userPayload.tanggal_lahir : null;

    await User.query().where({ id: user.id }).update(userPayload);

    const check = await MProfilUser.query()
      .select("id")
      .where({
        m_user_id: user.id,
      })
      .first();

    let profil;

    if (check) {
      profil = await MProfilUser.query().where({ id: check.id }).update({
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,

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
        bio,
        pendidikan,
        pengalaman,
        prestasi,
        portofolio,
        bahasa,

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

    let { nama, whatsapp, gender, password, avatar, photos } = request.post();
    whatsapp = whatsapp.trim();
    photos = JSON.stringify(photos);

    let guru;

    let payload = {
      whatsapp,
      nama,
      gender,
      avatar,
      photos,
    };

    password ? (payload.password = await Hash.make(password)) : null;

    const check = await User.query().where({ whatsapp: whatsapp }).first();

    if (check) {
      delete payload.whatsapp;
      guru = await User.query().where({ id: guru_id }).update(payload);
    } else {
      guru = await User.query().where({ id: guru_id }).update(payload);
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
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ role: "siswa" })
        .andWhere("nama", "like", `%${search}%`)
        .paginate(page, 25);
    } else {
      siswa = await User.query()
        .select("nama", "id", "whatsapp", "avatar", "gender", "photos")
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

    let { nama, whatsapp, gender, password, avatar, photos } = request.post();
    whatsapp = whatsapp.trim();
    photos = JSON.stringify(photos);

    let siswa;

    let payload = {
      whatsapp,
      nama,
      gender,
      avatar,
      photos,
    };

    password ? (payload.password = await Hash.make(password)) : null;

    const check = await User.query().where({ whatsapp: whatsapp }).first();

    if (check) {
      delete payload.whatsapp;
      siswa = await User.query().where({ id: siswa_id }).update(payload);
    } else {
      siswa = await User.query().where({ id: siswa_id }).update(payload);
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

    let { whatsapp, password } = request.post();
    whatsapp = whatsapp.trim();

    const res = await User.query()
      .where({ whatsapp: whatsapp })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

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

    const industri = await MSekolahIndustri.query()
      .with("industri")
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    const { rombel_id, kode_hari } = request.get();

    let jadwalMengajar;
    let analisisMateri;
    let analisisNilai;
    let checkAbsensi = [];
    let judulTugas;
    let rekap;

    if (rombel_id) {
      jadwalMengajar = await MJadwalMengajar.query()
        .with("mataPelajaran")
        .with("rombel", (builder) => {
          builder.with("anggotaRombel", (builder) => {
            builder.with("user", (builder) => {
              builder
                .with("keteranganRapor")
                .with("keteranganPkl")
                .with("raporEkskul")
                .with("prestasi")
                .with("sikap");
            });
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
            builder.with("user", (builder) => {
              builder
                .with("keteranganRapor")
                .with("keteranganPkl")
                .with("raporEkskul")
                .with("prestasi")
                .with("sikap");
            });
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

        //disini
        rekap = await MRekap.query()
          .with("rekaprombel", (builder) => {
            builder.with("rekapnilai");
          })
          .where({ dihapus: 0 })
          .fetch();
      }
    }

    return response.ok({
      jadwalMengajar: jadwalMengajar,
      analisisMateri: analisisMateri,
      analisisNilai: analisisNilai,
      integrasi: sekolah.integrasi,
      checkAbsensi: checkAbsensi.length,
      judulTugas: judulTugas,
      rekap: rekap,
      industri: industri,
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
    } else if (sekolah.tingkat == "SMP") {
      tingkatRombel = ["VII", "VIII", "IX"];
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

    const { judul, konten, banner, m_kategori_id, disembunyikan } =
      request.post();

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

    const { kesimpulan, waktu_mulai, waktu_selesai, m_topik_id } =
      request.post();

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

    const { nama, tingkat, peringkat, tempat, tahun, m_user_id } =
      request.post();

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

    const { nama, tingkat, peringkat, tempat, tahun, m_user_id } =
      request.post();

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

    const { m_jadwal_mengajar_id, absen, hari_ini, waktu_saat_ini } =
      request.get();

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

    let { absen, keterangan, lampiran, foto_masuk, user_id } = request.post();

    lampiran = lampiran ? lampiran.toString() : null;

    let data;
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
      data = await MAbsen.create({
        m_sekolah_id: sekolah.id,
        m_user_id: user_id ? user_id : user.id,
        role: user.role,
        absen,
        keterangan,
        foto_masuk,
      });
    }

    return response.ok({
      data: data,
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
        .with("user")
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .andWhere({ m_ta_id: ta.id })
        .fetch();
    } else if (user.role == "admin") {
      mataPelajaran = await MMataPelajaran.query()
        .with("user")
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

    const { status } = request.get();

    const hari_ini = moment().format("YYYY-MM-DD HH:mm");

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
        worksheet.getCell("B1").value =
          jadwalUjian.toJSON().jadwalUjian.ujian.nama;
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
            tk_jadwal_ujian_id:
              jawabanUjianSiswaData.toJSON().pesertaUjian.tk_jadwal_ujian_id,
            user_id: jawabanUjianSiswaData.toJSON().pesertaUjian.m_user_id,
            progress:
              jawabanUjianSiswaData.toJSON().pesertaUjian.__meta__.totalDijawab,
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
      updatePayload.deskripsi_singkat =
        Buffer(deskripsi_singkat).toString("base64");
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
      updatePayload.background_section_virtual_tour =
        background_section_virtual_tour;
    if (virtual_tour) updatePayload.virtual_tour = virtual_tour;
    if (banner_profil) updatePayload.banner_profil = banner_profil;
    if (deskripsi_sekolah)
      updatePayload.deskripsi_sekolah =
        Buffer(deskripsi_sekolah).toString("base64");
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

    const { banner, sambutan, deskripsi, cover, galeri, m_jurusan_id } =
      request.post();

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

    let { is_public } = request.get();
    is_public = is_public ? is_public : false;

    const checkIds = await MGelombangPpdb.query()
      .where("dibuka", "<=", moment().format("YYYY-MM-DD"))
      .andWhere("ditutup", ">=", moment().format("YYYY-MM-DD"))
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let gelombangAktif;
    let pendaftarIds;
    let terdaftar;

    if (checkIds.length && is_public == false) {
      const user = await auth.getUser();

      gelombangAktif = await MPendaftarPpdb.query()
        .with("gelombang")
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .whereIn("m_gelombang_ppdb_id", checkIds)
        .first();

      pendaftarIds = await MPendaftarPpdb.query()
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .pluck("m_gelombang_ppdb_id");

      terdaftar = await MGelombangPpdb.query()
        .whereIn("id", pendaftarIds)
        .fetch();
    }

    const gelombang = await MGelombangPpdb.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const jumlahPeserta = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "ppdb" })
      .count("* as total");

    return response.ok({
      gelombang: gelombang,
      terdaftar: terdaftar,
      gelombangAktif: gelombangAktif,
      jumlahPeserta: jumlahPeserta[0].total,
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

    const { nama, dibuka, ditutup, tes_akademik, biaya_pendaftaran } =
      request.post();

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

    const { nama, dibuka, ditutup, tes_akademik, biaya_pendaftaran } =
      request.post();

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

  async downloadPendaftarPPDB({ response, request, auth }) {
    // Create a document
    const doc = new PDFDocument({ size: "A4" });

    let namaFile = `/uploads/kartu-peserta-${new Date().getTime()}.pdf`;

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream(`public${namaFile}`));

    // Embed a font, set the font size, and render some text
    // doc
    //   .font("fonts/PalatinoBold.ttf")
    //   .fontSize(25)
    //   .text("Some text with an embedded font!", 100, 100);

    doc.fontSize(25).text("Some text with an embedded font!", 100, 100);

    axios
      .get(
        "https://awsimages.detik.net.id/community/media/visual/2020/07/10/tes-psikologi.jpeg",
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        const pngBuffer = Buffer.from(response.data);
        doc.image(pngBuffer);
      });

    // Add an image, constrain it to a given size, and center it vertically and horizontally
    // doc.image(image, {
    //   fit: [250, 300],
    //   align: "center",
    //   valign: "center",
    // });

    // Add another page
    doc
      .addPage()
      .fontSize(25)
      .text("Here is some vector graphics...", 100, 100);

    // Draw a triangle
    doc
      .save()
      .moveTo(100, 150)
      .lineTo(100, 250)
      .lineTo(200, 250)
      .fill("#FF3300");

    // Apply some transforms and render an SVG path with the 'even-odd' fill rule
    doc
      .scale(0.6)
      .translate(470, -380)
      .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
      .fill("red", "even-odd")
      .restore();

    // Add some text with annotations
    doc
      .addPage()
      .fillColor("blue")
      .text("Here is a link!", 100, 100)
      .underline(100, 100, 160, 27, { color: "#0000FF" })
      .link(100, 100, 160, 27, "http://google.com/");

    // Finalize PDF file
    doc.end();

    return "sukses";
  }

  async detailPendaftarPPDB({
    response,
    request,
    auth,
    params: { pendaftar_ppdb_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const pendaftar = await MPendaftarPpdb.query()
      .with("user", (builder) => {
        builder.with("profil");
      })
      .with("gelombang")
      .where({ id: pendaftar_ppdb_id })
      .first();

    return response.ok({ pendaftar: pendaftar });
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

  async konfirmasiPendaftarPPDB({
    response,
    request,
    params: { pendaftar_ppdb_id },
  }) {
    const check = await MPendaftarPpdb.query()
      .where({ id: pendaftar_ppdb_id })
      .first();

    const gelombang = await MGelombangPpdb.query()
      .where({ id: check.m_gelombang_ppdb_id })
      .first();

    await MPendaftarPpdb.query().where({ id: pendaftar_ppdb_id }).update({
      diverifikasi: 1,
    });

    if (check.nominal == gelombang.biaya_pendaftaran) {
      return response.ok({
        message: `Pembayaran ${gelombang.nama} sudah lunas dengan nomor transaksi #${check.id}`,
      });
    } else if (check.nominal > gelombang.biaya_pendaftaran) {
      return response.ok({
        message: `Pembayaran ${gelombang.nama} kelebihan Rp${
          +check.nominal - +gelombang.biaya_pendaftaran
        } dengan nomor transaksi #${check.id}`,
      });
    } else if (check.nominal < gelombang.biaya_pendaftaran) {
      return response.ok({
        message: `Pembayaran ${gelombang.nama} kurang Rp${
          +gelombang.biaya_pendaftaran - +check.nominal
        } dengan nomor transaksi #${
          check.id
        }. Silahkan upload kekurangannya pada menu pembayaran`,
      });
    }
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

  async getRpp({ response, request, auth }) {
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

    const rpp = await MRpp.query()
      .with("mataPelajaran")
      .with("user")
      .with("sekolah")
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .fetch();

    let tingkatData = [];

    if (sekolah.tingkat == "SMK") {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkatData = ["VII", "VIII", "IX"];
    }

    return response.ok({
      rpp: rpp,
      mataPelajaran: mataPelajaran,
      tingkat: tingkatData,
    });
  }

  async detailRpp({ response, request, auth, params: { ujian_id } }) {
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

  async postRpp({ response, request, auth }) {
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

    const { judul, moda, deskripsi, lampiran, tingkat, m_mata_pelajaran_id } =
      request.post();

    await MRpp.create({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
      m_user_id: user.id,
      m_ta_id: ta.id,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRpp({ response, request, auth, params: { rpp_id } }) {
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

    const { judul, moda, deskripsi, lampiran, tingkat, m_mata_pelajaran_id } =
      request.post();

    const rpp = await MRpp.query().where({ id: rpp_id }).update({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
    });

    if (!rpp) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRpp({ response, request, auth, params: { rpp_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const rpp = await MRpp.query().where({ id: rpp_id }).update({
      dihapus: 1,
    });

    if (!rpp) {
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

    const { aktivitas, waktu_mulai, waktu_selesai, m_perpus_id, rating } =
      request.post();

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

    let { nama, jenis, bulan, tipe_ujian, nominal, tanggal_dibuat, rombel_id } =
      request.post();

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

    let { bank, norek, nama_pemilik, nominal, bukti, m_pembayaran_siswa_id } =
      request.post();

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

    const { tu, keuangan, kurikulum, kesiswaan, sarpras, humas } =
      request.post();

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
    const { search, searchall } = request.get();

    let proyek;
    let proyekall;

    if (search) {
      // ===== service cari proyek ====

      proyek = await MProyek.query()
        .withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        })
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
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
        .withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        })
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("id", terimaProyekIds)
        .paginate();
    }
    if (searchall) {
      // ===== service cari proyek ====

      proyekall = await MProyek.query()
        .withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        })
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${searchall}%`)
        .paginate();
    } else {
      proyekall = await MProyek.query()
        .withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        })
        .where({ dihapus: 0 })
        .paginate();
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
      .with("proyek", (builder) => {
        builder.withCount("anggota", (builder) => {
          builder.where({ status: "menerima" });
        });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_user_id: user.id })
      .andWhere({ status: "undangan" })
      .fetch();

    return response.ok({
      proyek: proyek,
      userPartner: userPartner,
      undangan,
      proyekall,
    });
  }

  async detailProyek({ response, request, auth, params: { proyek_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const proyek = await MProyek.query()
      .with("status")
      .with("user")
      .with("sekolah")
      .with("forum", (builder) => {
        builder.where({ dihapus: 0 }).orderBy("created_at", "desc");
      })
      .with("anggota", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .where({ id: proyek_id })
      .first();

    // const forumKomen = await MProyekForumKomen.query()
    //   .where({ dihapus: 0 })
    //   .andWhere({ m_proyek_forum: MProyekForum.id })
    //   .fetch();

    return response.ok({
      message: messagePostSuccess,
      proyek,
      // forumKomen,
    });
  }

  async getUser({ response, request, auth }) {
    const { page, name } = request.get();

    let user;
    if (name) {
      user = await User.query()
        .with("sekolah")
        .where({ dihapus: 0 })
        .where("nama", "like", `%${name}%`)
        .andWhereNot({ role: "admin" })
        .paginate(page);
    } else {
      user = await User.query()
        .with("sekolah")
        .where({ dihapus: 0 })
        .andWhereNot({ role: "admin" })
        .paginate(page);
    }

    return response.ok({
      user: user,
    });
  }

  async detailUser({ response, request, auth, params: { user_id } }) {
    const role = await auth.getUser();
    if (role.role != "admin") {
      return response.json({
        message: messageForbidden,
      });
    }
    const user = await User.query()
      .where({ dihapus: 0 })
      .where({ id: user_id })
      .first();

    return response.ok({
      user: user,
    });
  }

  async getKategoriPekerjaan({
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

    let { user_id, prioritas, status, batas_waktu } = request.get();

    let kategori;

    if (batas_waktu) {
      kategori = await MKategoriPekerjaan.query()
        .with("pekerjaan", (builder) => {
          builder
            .with("ditugaskan", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 })
            .andWhere({ batas_waktu: batas_waktu });
        })
        .where({ m_proyek_id: proyek_id })
        .andWhere({ dihapus: 0 })
        .orderBy("urutan", "asc")
        .fetch();
    } else if (prioritas) {
      kategori = await MKategoriPekerjaan.query()
        .with("pekerjaan", (builder) => {
          builder
            .with("ditugaskan", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 })
            .andWhere({ prioritas: prioritas });
        })
        .where({ m_proyek_id: proyek_id })
        .andWhere({ dihapus: 0 })
        .orderBy("urutan", "asc")
        .fetch();
    } else {
      kategori = await MKategoriPekerjaan.query()
        .with("pekerjaan", (builder) => {
          builder
            .with("ditugaskan", (builder) => {
              builder.with("user").where({ dihapus: 0 });
            })
            .where({ dihapus: 0 });
        })
        .where({ m_proyek_id: proyek_id })
        .andWhere({ dihapus: 0 })
        .orderBy("urutan", "asc")
        .fetch();
    }

    return response.ok({
      kategori: kategori,
    });
  }

  async postProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nama, privasi, deskripsi, banner, m_status_proyek_id } =
      request.post();

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

    const kategori = await MKategoriPekerjaan.createMany([
      {
        nama: "Daftar Pekerjaan",
        warna: "#2680eb",
        m_proyek_id: proyek.id,
        dihapus: 0,
        urutan: 1,
      },
      {
        nama: "Sedang Dikerjakan",
        warna: "#f9ac50",
        m_proyek_id: proyek.id,
        dihapus: 0,
        urutan: 2,
      },
      {
        nama: "Selesai",
        warna: "#62ed7a",
        m_proyek_id: proyek.id,
        dihapus: 0,
        urutan: 3,
      },
    ]);

    return response.ok({
      proyek,
      kategori,
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

    const { nama, privasi, deskripsi, banner, m_status_proyek_id } =
      request.post();

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

    let { nama, warna, m_proyek_id } = request.post();
    warna = warna
      ? warna
      : `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const maxUrutan = await MKategoriPekerjaan.query().getMax("urutan");

    const kategori = await MKategoriPekerjaan.create({
      nama,
      warna,
      urutan: maxUrutan,
      m_proyek_id,
      dihapus: 0,
    });

    return response.ok({
      kategori,
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

  // ===================== Forum Proyek Service ===========================
  async postProyekForum({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { deskripsi, lampiran, m_proyek_id, m_user_id } = request.post();

    await MProyekForum.create({
      deskripsi,
      lampiran,
      m_proyek_id,
      m_user_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putProyekForum({
    response,
    request,
    auth,
    params: { proyek_id },
    params: { proyekForum_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { deskripsi, lampiran, m_proyek_id } = request.post();

    const proyekForum = await MProyekForum.query()
      .where({ id: proyekForum_id })
      .andWhere({ m_user_id: user.id })
      .update({
        deskripsi,
        lampiran,
        m_proyek_id,
        dihapus: 0,
      });

    if (!proyekForum) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteProyekForum({
    response,
    request,
    auth,
    params: { proyek_id },
    params: { proyekForum_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const proyekForum = await MProyekForum.query()
      .where({ id: proyekForum_id })
      .andWhere({ m_proyek_id: proyek_id })
      .update({
        dihapus: 1,
      });

    if (!proyekForum) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ===================== Proyek Pekerjaan Service ===========================
  async postPekerjaanProyek({
    response,
    request,
    auth,
    params: { kategori_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, prioritas, status, batas_waktu, deskripsi, urutan } =
      request.post();

    const maxUrutan =
      (await MPekerjaanProyek.query()
        .where({ m_kategori_pekerjaan_id: kategori_id })
        .getMax("urutan")) + 1;

    const pekerjaan = await MPekerjaanProyek.create({
      judul,
      prioritas,
      status,
      batas_waktu,
      deskripsi,
      m_kategori_pekerjaan_id: kategori_id,
      urutan: maxUrutan,
      dihapus: 0,
    });

    return response.ok({
      pekerjaan,
      message: messagePostSuccess,
    });
  }

  async putPekerjaanProyek({
    response,
    request,
    auth,
    params: { pekerjaan_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      prioritas,
      status,
      batas_waktu,
      deskripsi,
      m_kategori_pekerjaan_id,
      urutan,
    } = request.post();

    const pekerjaanProyek = await MPekerjaanProyek.query()
      .where({ id: pekerjaan_proyek_id })
      // .andWhere({ m_user_id: user.id }) // Kolom m_user_id tidak ada di table pekerjaan proyek
      .update({
        judul,
        prioritas,
        status,
        batas_waktu,
        deskripsi,
        m_kategori_pekerjaan_id,
        urutan,
        dihapus: 0,
      });

    if (!pekerjaanProyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePekerjaanProyek({
    response,
    request,
    auth,
    params: { pekerjaan_proyek_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const pekerjaanProyek = await MPekerjaanProyek.query()
      .where({ id: pekerjaan_proyek_id })
      .update({
        dihapus: 1,
      });

    if (!pekerjaanProyek) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // ===================== Anggota Proyek Service =========================

  // async getAnggotaProyek({ response, request, auth }) {
  //   const domain = request.headers().origin;

  //   const sekolah = await this.getSekolahByDomain(domain);

  //   if (sekolah == "404") {
  //     return response.notFound({ message: "Sekolah belum terdaftar" });
  //   }

  //   const { proyek_id } = request.get();

  //   const anggota = await MAnggotaProyek.query()
  //     .where({ dihapus: 0 })
  //     .andWhere({ status: "menerima" })
  //     .andWhere({ m_proyek_id: proyek_id })
  //     .fetch();

  //   return response.ok({
  //     anggota,
  //   });
  // }

  // ============ Invite Anggota kedalam Proyek =================
  async postAnggotaProyek({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { anggota_proyek_id, proyek_id, user_id, status } = request.post();

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
          status: status,
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

  // =========== Rekap Nilai Service ==============

  async detailRekap({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const pelajaran = await MMateri.query()
      .with("mataPelajaran")
      .where({ id: materi_id })
      .first();

    const sikapsosial = await MSikapSosial.query().fetch();
    const sikapspiritual = await MSikapSpiritual.query().fetch();

    const tugas = await MTugas.query().where({ m_user_id: user.id }).fetch();

    const rekap = await MMateri.query()
      .with("jurusan")
      .with("mataPelajaran")
      .with("rekap", (builder) => {
        builder
          .with("rekaprombel", (builder) => {
            builder.withCount("rekapnilai as total", (builder) => {
              builder.where(
                "nilai",
                "<",
                `${pelajaran.toJSON().mataPelajaran.kkm}`
              );
            });
          })
          .where({ dihapus: 0 });
      })
      .where({ id: materi_id })
      // .andWhere({ dihapus: 0 })
      .first();

    const materirombel = await TkMateriRombel.query()
      .with("rombel", (builder) => {
        builder.with("anggotaRombel", (builder) => {
          builder.with("user", (builder) => {
            builder
              .with("sikap", (builder) => {
                builder
                  .with("ditingkatkanSosial")
                  .with("ditunjukkanSosial")
                  .with("ditingkatkanSpiritual")
                  .with("ditunjukkanSpiritual");
              })
              .select("id", "nama");
          });
        });
      })
      .where({ m_materi_id: materi_id })
      .fetch();

    return response.ok({
      rekap,
      materirombel,
      sikapsosial,
      sikapspiritual,
      tugas,
    });
  }

  async postSikapRombel({
    response,
    request,
    auth,
    params: { user_id },
    params: { rombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // const user = await auth.getUser();

    const { m_sikap_ditunjukkan_id, m_sikap_ditingkatkan_id } = request.post();

    const sikap = await MSikapRombel.create({
      m_user_id: user_id,
      m_rombel_id: rombel_id,
      m_sikap_ditunjukkan_id: m_sikap_ditunjukkan_id.length
        ? m_sikap_ditunjukkan_id.toString()
        : null,
      m_sikap_ditingkatkan_id: m_sikap_ditingkatkan_id.length
        ? m_sikap_ditingkatkan_id.toString()
        : null,
      status: 1,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async postRaporSikap({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const checkSikap = await MSikapSiswa.query()
      .where({ m_user_id: user_id })
      .andWhere({ dihapus: 0 })
      .first();

    const {
      m_sikap_spiritual_ditingkatkan_id,
      m_sikap_spiritual_ditunjukkan_id,
      m_sikap_sosial_ditunjukkan_id,
      m_sikap_sosial_ditingkatkan_id,
      tipe,
    } = request.post();

    let sikap;

    if (checkSikap) {
      sikap = await MSikapSiswa.query()
        .where({ m_user_id: user_id })
        .update({
          tipe,
          m_sikap_sosial_ditunjukkan_id: m_sikap_sosial_ditunjukkan_id.length
            ? m_sikap_sosial_ditunjukkan_id.toString()
            : null,
          m_sikap_sosial_ditingkatkan_id: m_sikap_sosial_ditingkatkan_id.length
            ? m_sikap_sosial_ditingkatkan_id.toString()
            : null,
          m_sikap_spiritual_ditunjukkan_id:
            m_sikap_spiritual_ditunjukkan_id.length
              ? m_sikap_spiritual_ditunjukkan_id.toString()
              : null,
          m_sikap_spiritual_ditingkatkan_id:
            m_sikap_spiritual_ditingkatkan_id.length
              ? m_sikap_spiritual_ditingkatkan_id.toString()
              : null,
        });
    } else {
      sikap = await MSikapSiswa.create({
        m_user_id: user_id,
        tipe,
        m_sikap_sosial_ditunjukkan_id: m_sikap_sosial_ditunjukkan_id.length
          ? m_sikap_sosial_ditunjukkan_id.toString()
          : null,
        m_sikap_sosial_ditingkatkan_id: m_sikap_sosial_ditingkatkan_id.length
          ? m_sikap_sosial_ditingkatkan_id.toString()
          : null,
        m_sikap_spiritual_ditunjukkan_id:
          m_sikap_spiritual_ditunjukkan_id.length
            ? m_sikap_spiritual_ditunjukkan_id.toString()
            : null,
        m_sikap_spiritual_ditingkatkan_id:
          m_sikap_spiritual_ditingkatkan_id.length
            ? m_sikap_spiritual_ditingkatkan_id.toString()
            : null,
        status: 1,
        dihapus: 0,
      });
    }
    if (!sikap) {
      return response.ok({
        message: messagePostSuccess,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ Detail Rekap Nilai ============

  async detailRekapNilai({
    response,
    request,
    auth,
    params: { rekap_id },
    // params: { rombel_id },
    params: { materi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const pelajaran = await MMateri.query()
      .with("mataPelajaran")
      .where({ id: materi_id })
      .first();

    const materirombel = await TkMateriRombel.query()
      .with("rombel")
      .where({ m_materi_id: materi_id })
      .fetch();

    const rekap = await MRekap.query()
      .with("rekaprombel", (builder) => {
        builder
          .with("rekapnilai", (builder) => {
            builder.with("user", (builder) => {
              builder.select("id", "nama");
            });
          })
          .withCount("rekapnilai as total", (builder) => {
            builder.where(
              "nilai",
              "<",
              `${pelajaran.toJSON().mataPelajaran.kkm}`
            );
          })
          .with("tugas")
          .where({ dihapus: 0 });
        // .andWhere({ m_rombel_id: rombel_id });
      })
      .with("materi", (builder) => {
        builder.with("mataPelajaran");
      })
      .where({ id: rekap_id })
      .andWhere({ dihapus: 0 })
      .first();

    const tugas = await MTugas.query().where({ m_user_id: user.id }).fetch();

    return response.ok({
      materirombel,
      rekap,
      tugas,
    });
  }

  async detailRekapRombel({
    response,
    request,
    auth,
    // params: { rekap_id },
    params: { materi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const materirombel = await TkMateriRombel.query()
      .with("rombel")
      .where({ m_materi_id: materi_id })
      .fetch();

    const tugasdata = await MTimeline.query()
      .select("id", "m_tugas_id", "m_rombel_id", "m_user_id")
      .with("listSiswaDinilai", (builder) => {
        builder
          .select("id", "nilai", "m_user_id", "m_timeline_id")
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .whereNotNull("nilai");
      })
      .where({ m_tugas_id: 172 })
      .fetch();

    const datatugas = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.with("user", (builder) => {
          builder.select("id", "nama").with("tugas", (builder) => {
            builder
              .select("id", "nilai", "m_user_id", "m_timeline_id")
              .with("user", (builder) => {
                builder.select("id", "nama");
              })
              .whereNotNull("nilai");
          });
        });
      })
      .where({ id: m_rombel_id })
      .fetch();

    // // const rekap = await Promise.all(
    // //   materirombel.toJSON().map(async (d) => {
    // const rekap = await MRekap.query()
    //   .with("rekaprombel", (builder) => {
    //     builder
    //       .with("rekapnilai", (builder) => {
    //         builder.with("user", (builder) => {
    //           builder.select("id", "nama");
    //         });
    //       })
    //       .withCount("rekapnilai as total", (builder) => {
    //         builder.where(
    //           "nilai",
    //           "<",
    //           `${pelajaran.toJSON().mataPelajaran.kkm}`
    //         );
    //       })
    //       .with("tugas")
    //       .where({ dihapus: 0 });
    //     // .andWhere({ m_rombel_id: rombel_id });
    //   })
    //   .with("materi", (builder) => {
    //     builder.with("mataPelajaran");
    //   })
    //   .where({ id: rekap_id })
    //   .andWhere({ dihapus: 0 })
    //   .first();
    // //   })
    // // );

    const tugas = await MTugas.query().where({ m_user_id: user.id }).fetch();

    return response.ok({
      datatugas,
      materirombel,
      // rekap,
      tugas,
      tugasdata,
    });
  }

  async postRekap({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, teknik, tipe } = request.post();

    const rekap = await MRekap.create({
      judul,
      teknik,
      tipe,
      m_materi_id: materi_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async postRekapRombel({
    response,
    request,
    auth,
    params: { rekapnilai_id, materi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { di_ss, judul, tanggal, m_tugas_id, m_rombel_id, m_rekap_id } =
      request.post();

    const rekap = await MRekapRombel.create({
      di_ss,
      judul,
      tanggal,
      m_tugas_id,
      m_rombel_id,
      m_rekap_id: rekapnilai_id,
      dihapus: 0,
    });

    const tugasdata = await MTimeline.query()
      .with("listSiswaDinilai", (builder) => {
        builder.with("user").whereNotNull("nilai");
      })
      .where({ m_tugas_id: m_tugas_id })
      .fetch();

    const data = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.with("user", (builder) => {
          builder.select("id", "nama");
        });
      })
      .where({ id: m_rombel_id })
      .fetch();

    // const tugasdata = await MRombel.query()
    //   .with("anggotaRombel", (builder) => {
    //     builder.with("user", (builder) => {
    //       builder.select("id", "nama").with("tugas", (builder) => {
    //         builder
    //           .select("id", "nilai", "m_user_id", "m_timeline_id")
    //           .with("user", (builder) => {
    //             builder.select("id", "nama");
    //           })
    //           .whereNotNull("nilai");
    //       });
    //     });
    //   })
    //   .where({ id: m_rombel_id })
    //   .fetch();

    // if (tugasdata) {
    //   const all = await Promise.all(
    //     data.toJSON().map(async (d) => {
    //       await Promise.all(
    //         d.anggotaRombel.map(async (e) => {
    //           const tugasdata = await MTimeline.query()
    //             .select("id", "m_tugas_id", "m_rombel_id", "m_user_id")
    //             .with("listSiswaDinilai", (builder) => {
    //               builder
    //                 .select("id", "nilai", "m_user_id", "m_timeline_id")
    //                 .whereNotNull("nilai")
    //                 .andWhere({ m_user_id: e.m_user_id });
    //             })
    //             .where({ m_tugas_id: m_tugas_id })
    //             .fetch();

    //           await TkRekapNilai.create({
    //             m_user_id: e.m_user_id,
    //             nilai: tugasdata.lisSiswaDinilai.nilai,
    //             m_rekap_rombel_id: `${rekap.id}`,
    //           });
    //         })
    //       );
    //     })
    //   );
    // }

    const all = await Promise.all(
      data.toJSON().map(async (d) => {
        await Promise.all(
          d.anggotaRombel.map(async (e) => {
            await TkRekapNilai.create({
              m_user_id: e.m_user_id,
              nilai: 0,
              m_rekap_rombel_id: `${rekap.id}`,
            });
          })
        );
        // }
      })
    );

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRekap({ response, request, auth, params: { rekap_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, teknik } = request.post();

    const rekap = await MRekap.query().where({ id: rekap_id }).update({
      judul,
      teknik,
      dihapus: 0,
    });

    if (!rekap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async putRekapRombel({ response, request, auth, params: { rekap_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, tanggal, m_tugas_id } = request.post();

    const rekap = await MRekapRombel.query().where({ id: rekap_id }).update({
      judul,
      tanggal,
      m_tugas_Id,
      dihapus: 0,
    });

    if (!rekap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteRekap({ response, request, auth, params: { rekap_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const rekap = await MRekap.query().where({ id: rekap_id }).update({
      dihapus: 1,
    });

    if (!rekap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async deleteRekapRombel({
    response,
    request,
    auth,
    params: { rekaprombel_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const rekap = await MRekapRombel.query()
      .where({ id: rekaprombel_id })
      .update({
        dihapus: 1,
      });

    if (!rekap) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async putRekapNilai({
    response,
    request,
    auth,
    params: { user_id, rekapnilai_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { nilai } = request.post();

    const check = await TkRekapNilai.query()
      .where({ m_user_id: user_id })
      .andWhere({ m_rekap_rombel_id: rekapnilai_id })
      .first();

    let rekap;

    if (check) {
      rekap = await TkRekapNilai.query().where({ m_user_id: user_id }).update({
        nilai,
      });
    } else {
      await TkRekapNilai.create({
        m_user_id: user_id,
        nilai,
        m_rekap_rombel_id: rekapnilai_id,
      });
    }

    if (!rekap) {
      return response.ok({
        message: messagePostSuccess,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  // async postRekapNilaisiswa({
  //   response,
  //   request,
  //   auth,
  //   params: { user_id, rekap_id, materi_id },
  // }) {
  //   const domain = request.headers().origin;

  //   const sekolah = await this.getSekolahByDomain(domain);

  //   if (sekolah == "404") {
  //     return response.notFound({ message: "Sekolah belum terdaftar" });
  //   }

  //   const user = await auth.getUser();

  //   const { m_rombel_id } = request.post();

  //   const data = await TkMateriRombel.query()
  //     .with("rombel", (builder) => {
  //       builder.with("anggotaRombel", (builder) => {
  //         builder.with("user", (builder) => {
  //           builder.select("id", "nama");
  //         });
  //       });
  //     })
  //     .where({ m_materi_id: materi_id })
  //     .fetch();

  //   let rekap;

  //   const all = await Promise.all(
  //     data.map(async (d) => {
  //       await TkRekapNilai.create({
  //         m_user_id: d.anggotaRombel.user.id,
  //         nilai: 0,
  //         m_rekap_rombel_id: rekapnilai_id,
  //       });
  //       // }
  //     })
  //   );

  //   if (!rekap) {
  //     return response.ok({
  //       message: messagePostSuccess,
  //     });
  //   }

  //   return response.ok({
  //     message: messagePutSuccess,
  //   });
  // }

  // =========== IMPORT GTK SERVICE ================
  async importGTKServices(filelocation, sekolah) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Daftar guru");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 6) {
        data.push({
          nama: explanation.getCell("B" + rowNumber).value,
          nuptk: explanation.getCell("C" + rowNumber).value,
          gender: explanation.getCell("D" + rowNumber).value,
          tempat_lahir: explanation.getCell("E" + rowNumber).value,
          tanggal_lahir: explanation.getCell("F" + rowNumber).value,
          nip: explanation.getCell("G" + rowNumber).value,
          status_kepegawaian: explanation.getCell("H" + rowNumber).value,
          jenis_ptk: explanation.getCell("I" + rowNumber).value,
          agama: explanation.getCell("J" + rowNumber).value,
          alamat: explanation.getCell("K" + rowNumber).value,
          rt: explanation.getCell("L" + rowNumber).value,
          rw: explanation.getCell("M" + rowNumber).value,
          dusun: explanation.getCell("N" + rowNumber).value,
          kelurahan: explanation.getCell("O" + rowNumber).value,
          kecamatan: explanation.getCell("P" + rowNumber).value,
          kode_pos: explanation.getCell("Q" + rowNumber).value,
          whatsapp: explanation.getCell("R" + rowNumber).value,
          email: explanation.getCell("S" + rowNumber).value,
          tugas_tambahan: explanation.getCell("T" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkUser = await User.query()
          .where({ whatsapp: d.whatsapp })
          .andWhere({ dihapus: 0 })
          .first();

        let kecamatan1 = `${d.kecamatan.split(" ")[1]}`;
        let kecamatan2 = d ? d.kecamatan.split(" ")[2] : "";
        let kecamatans = kecamatan1.concat(" ", kecamatan2 ? kecamatan2 : "");
        const districtIds = await District.query()
          .with("regency")
          .where({ name: kecamatans })
          .first();

        const villageIds = await Village.query()
          .where({ name: d.kelurahan })
          .andWhere({ district_id: districtIds.id })
          .first();

        // return villageIds;

        if (checkUser) {
          await MProfilUser.create({
            nuptk: d.nuptk,
            gender: d.gender,
            tempat_lahir: d.tempat_lahir,
            tanggal_lahir: d.tanggal_lahir,
            nip: d.nip,
            status_kepegawaian: d.status_kepegawaian,
            jenis_ptk: d.jenis_ptk,
            agama: d.agama,
            alamat: d.alamat,
            rt: d.rt,
            rw: d.rw,
            dusun: d.dusun,
            village_id: villageIds ? villageIds.id : "",
            district_id: districtIds.id,
            regency_id: districtIds.regency_id,
            province_id: districtIds.toJSON().regency.province_id,
            kodepos: d.kode_pos,
            tugas_tambahan: d.tugas_tambahan,
          });
          return {
            message: `${d.nama} ${d.whatsapp} sudah terdaftar`,
            error: true,
          };
        }

        await User.create({
          nama: d.nama,
          whatsapp: d.whatsapp,
          gender: d.gender,
          password: await Hash.make(`smartschool`),
          role: "guru",
          m_sekolah_id: sekolah.id,
          dihapus: 0,
        });
        await MProfilUser.create({
          nuptk: d.nuptk,
          gender: d.gender,
          tempat_lahir: d.tempat_lahir,
          tanggal_lahir: d.tanggal_lahir,
          nip: d.nip,
          status_kepegawaian: d.status_kepegawaian,
          jenis_ptk: d.jenis_ptk,
          agama: d.agama,
          alamat: d.alamat,
          rt: d.rt,
          rw: d.rw,
          dusun: d.dusun,
          village_id: villageIds.id,
          district_id: districtIds.id,
          regency_id: districtIds.regency_id,
          province_id: districtIds.toJSON().regency.province_id,
          kodepos: d.kode_pos,
          tugas_tambahan: d.tugas_tambahan,
        });

        return;
      })
    );

    return result;
  }

  async importGTK({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.${file.extname}`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importGTKServices(`tmp/uploads/${fname}`, sekolah);
  }

  async downloadRekapAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { role, tanggal_awal, tanggal_akhir } = request.post();

    const tanggalDistinct = await Database.raw(
      "SELECT DISTINCT DATE_FORMAT(created_at, '%Y-%m-%d') as tanggalDistinct from m_absen WHERE created_at BETWEEN ? AND  ?",
      [tanggal_awal, tanggal_akhir]
    );

    const absenKepsek = await User.query()
      .select("id", "nama")
      .with("absen", (builder) => {
        builder
          .select("id", "m_user_id", "created_at", "absen")
          .whereBetween("created_at", [`${tanggal_awal}`, `${tanggal_akhir}`]);
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "kepsek" })
      .fetch();

    const absenGuru = await User.query()
      .select("id", "nama")
      .with("absen", (builder) => {
        builder
          .select("id", "m_user_id", "created_at", "absen")
          .whereBetween("created_at", [`${tanggal_awal}`, `${tanggal_akhir}`]);
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    // loop pertama untuk nge looping data kepsek
    const rekapAbsenKepsek = await Promise.all(
      absenKepsek.toJSON().map(async (d) => {
        let namaKepsek = d.nama;
        let totalSakit = 0;
        let totalHadir = 0;
        let totalTelat = 0;
        let totalIzin = 0;
        let totalAlpa = 0;

        // loop ketiga untuk nge looping absen kepsek
        await Promise.all(
          d.absen.map(async (e) => {
            if (e.absen == "sakit") {
              totalSakit = totalSakit + 1;
            } else if (e.absen == "izin") {
              totalIzin = totalIzin + 1;
            } else if (
              (await Promise.all(
                tanggalDistinct.find(async (tanggal) => {
                  tanggal.tanggalDistinct ==
                    moment(e.created_at).format("YYYY-MM-DD");
                })
              )) !== undefined
            ) {
              totalHadir = totalHadir + 1;

              if (moment(e.created_at).format("HH:mm:ss") > "06.30") {
                totalTelat = totalTelat + 1;
              }
            }
          })
        );

        totalAlpa =
          tanggalDistinct[0].length - (totalSakit + totalHadir + totalIzin);

        return {
          namaKepsek,
          totalSakit,
          totalHadir,
          totalTelat,
          totalIzin,
          totalAlpa,
        };
      })
    );

    // loop pertama untuk nge looping data guru
    const rekapAbsenGuru = await Promise.all(
      absenGuru.toJSON().map(async (d) => {
        let namaGuru = d.nama;
        let totalSakit = 0;
        let totalHadir = 0;
        let totalTelat = 0;
        let totalIzin = 0;
        let totalAlpa = 0;

        // loop ketiga untuk nge looping absen guru
        await Promise.all(
          d.absen.map(async (e) => {
            if (e.absen == "sakit") {
              totalSakit = totalSakit + 1;
            } else if (e.absen == "izin") {
              totalIzin = totalIzin + 1;
            } else if (
              (await Promise.all(
                tanggalDistinct.find(async (tanggal) => {
                  tanggal.tanggalDistinct ==
                    moment(e.created_at).format("YYYY-MM-DD");
                })
              )) !== undefined
            ) {
              totalHadir = totalHadir + 1;

              if (moment(e.created_at).format("HH:mm:ss") > "06.30") {
                totalTelat = totalTelat + 1;
              }
            }
          })
        );

        totalAlpa =
          tanggalDistinct[0].length - (totalSakit + totalHadir + totalIzin);

        return {
          namaGuru,
          totalSakit,
          totalHadir,
          totalTelat,
          totalIzin,
          totalAlpa,
        };
      })
    );

    // return rekapAbsenGuru;

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`RekapAbsen`);
    const awal = moment(`${tanggal_awal}`).format("DD-MM-YYYY");
    const akhir = moment(`${tanggal_akhir}`).format("DD-MM-YYYY");
    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: `A1:G2`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A3:G3`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.mergeCells(`A1:G1`);
    worksheet.mergeCells(`A2:G2`);
    worksheet.mergeCells(`A3:G3`);
    worksheet.addConditionalFormatting({
      ref: `A8:G8`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A5:G5`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    await Promise.all(
      rekapAbsenKepsek.map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 5}:G${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.getRow(5).values = [
          "No",
          "Nama",
          "Hadir",
          "telat",
          "Sakit",
          "Izin",
          "Alpa",
        ];

        worksheet.columns = [
          { key: "no" },
          { key: "user" },
          { key: "hadir" },
          { key: "telat" },
          { key: "sakit" },
          { key: "izin" },
          { key: "alpa" },
        ];

        worksheet.getCell("A1").value = "Rekap Absen";
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.getCell("A3").value = `${awal} sampai ${akhir}`;

        let row = worksheet.addRow({
          no: `${idx + 1}`,
          user: d ? d.namaKepsek : "-",
          hadir: d ? d.totalHadir : "-",
          telat: d ? d.totalTelat : "-",
          sakit: d ? d.totalSakit : "-",
          izin: d ? d.totalIzin : "-",
          alpa: d ? d.totalAlpa : "-",
        });
      })
    );

    await Promise.all(
      rekapAbsenGuru.map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 8}:G${(idx + 1) * 1 + 8}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 8}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.getRow(8).values = [
          "No",
          "Nama",
          "Hadir",
          "Telat",
          "Sakit",
          "Izin",
          "Alpa",
        ];

        worksheet.columns = [
          { key: "no" },
          { key: "user" },
          { key: "hadir" },
          { key: "telat" },
          { key: "sakit" },
          { key: "izin" },
          { key: "alpa" },
        ];

        let row = worksheet.addRow({
          no: `${idx + 1}`,
          user: d ? d.namaGuru : "-",
          hadir: d ? d.totalHadir : "-",
          telat: d ? d.totalTelat : "-",
          sakit: d ? d.totalSakit : "-",
          izin: d ? d.totalIzin : "-",
          alpa: d ? d.totalAlpa : "-",
        });
      })
    );

    let namaFile = `/uploads/rekap-absen-guru-tanggal.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  // =========== IMPORT GTK SERVICE ================
  async importMapelServices(filelocation, sekolah, ta) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Daftar Mapel");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 3) {
        data.push({
          namaGuru: explanation.getCell("B" + rowNumber).value,
          whatsapp: explanation.getCell("C" + rowNumber).value,
          nama: explanation.getCell("D" + rowNumber).value,
          kode: explanation.getCell("E" + rowNumber).value,
          kelompok: explanation.getCell("F" + rowNumber).value,
          kkm: explanation.getCell("G" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const user = await User.query()
          .where({ whatsapp: d.whatsapp })
          .andWhere({ dihapus: 0 })
          .first();
        if (!user) {
          return;
        }

        await MMataPelajaran.create({
          nama: d.nama,
          kode: d.kode,
          kelompok: d.kelompok,
          kkm: d.kkm,
          m_user_id: user.id,
          m_sekolah_id: sekolah.id,
          m_ta_id: ta.id,
          dihapus: 0,
        });

        return;
      })
    );

    return result;
  }

  async importMapel({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.${file.extname}`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importMapelServices(`tmp/uploads/${fname}`, sekolah, ta);
  }

  async downloadMapel({ response, request, auth }) {
    const domain = request.headers().origin;

    const user = await auth.getUser();

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const mapel = await MMataPelajaran.query()
      .with("user")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Rekap Mata Pelajaran`);
    worksheet.getCell("A1").value = "Rekap Mata Pelajaran";
    worksheet.getCell("A2").value = sekolah.nama;
    worksheet.getCell("A3").value = ta.tahun;
    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: `A1:G2`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A3:G3`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.mergeCells(`A1:G1`);
    worksheet.mergeCells(`A2:G2`);
    worksheet.mergeCells(`A3:G3`);
    worksheet.addConditionalFormatting({
      ref: `A5:G5`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    await Promise.all(
      mapel.toJSON().map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 5}:G${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.getRow(5).values = [
          "No",
          "Nama Guru",
          "Whatsapp",
          "Nama",
          "Kode",
          "Kelompok",
          "KKM",
        ];

        worksheet.columns = [
          { key: "no" },
          { key: "guru" },
          { key: "whatsapp" },
          { key: "nama" },
          { key: "kode" },
          { key: "kelompok" },
          { key: "kkm" },
        ];

        let row = worksheet.addRow({
          no: `${idx + 1}`,
          guru: d.user ? d.user.nama : "-",
          whatsapp: d.user ? d.user.whatsapp : "-",
          nama: d ? d.nama : "-",
          kode: d ? d.kode : "-",
          kelompok: d ? d.kelompok : "-",
          kkm: d ? d.kkm : "-",
        });
      })
    );

    let namaFile = `/uploads/rekap-mata-pelajaran.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async importMutasiServices(filelocation, sekolah, ta) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Daftar Mutasi");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 6) {
        data.push({
          tanggal: explanation.getCell("B" + rowNumber).value,
          nama: explanation.getCell("D" + rowNumber).value,
          kategori: explanation.getCell("E" + rowNumber).value,
          nominal: explanation.getCell("F" + rowNumber).value,
          tipe: explanation.getCell("C" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        await MMutasi.create({
          nama: d.nama,
          waktu_dibuat: d.tanggal,
          kategori: d.kategori,
          nominal: d.nominal,
          m_sekolah_id: sekolah.id,
          tipe: d.tipe,
          dihapus: 0,
        });

        return;
      })
    );

    return result;
  }

  async importMutasi({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.${file.extname}`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importMutasiServices(`tmp/uploads/${fname}`, sekolah);
  }

  async downloadMutasi({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const { tanggal_awal, tanggal_akhir } = request.post();

    const mutasi = await MMutasi.query()
      .whereBetween("waktu_dibuat", [`${tanggal_awal}`, `${tanggal_akhir}`])
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const tanggalDistinct = await Database.raw(
      "SELECT DISTINCT DATE_FORMAT(waktu_dibuat, '%Y-%m-%d') from m_mutasi"
    );

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap Mutasi Keuangan`);
    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: `A1:E2`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: `A3:E3`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.mergeCells(`A1:E1`);
    worksheet.mergeCells(`A2:E2`);
    worksheet.mergeCells(`A3:E3`);
    worksheet.addConditionalFormatting({
      ref: `A5:E5`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    await Promise.all(
      mutasi.toJSON().map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 5}:E${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 5}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.getRow(5).values = [
          "Tanggal Transaksi",
          "Tipe",
          "Nama",
          "Kategori",
          "Nominal",
        ];

        worksheet.columns = [
          { key: "waktu_dibuat" },
          { key: "tipe" },
          { key: "nama" },
          { key: "kategori" },
          { key: "nominal" },
        ];

        worksheet.getCell("A1").value = "Rekap Mutasi Keuangan";
        const awal = moment(`${tanggal_awal}`).format("DD-MM-YYYY");
        const akhir = moment(`${tanggal_akhir}`).format("DD-MM-YYYY");
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.getCell("A3").value = `${awal} sampai ${akhir}`;

        let row = worksheet.addRow({
          waktu_dibuat: d ? d.waktu_dibuat : "-",
          tipe: d ? d.tipe : "-",
          nama: d ? d.nama : "-",
          kategori: d ? d.kategori : "-",
          nominal: d ? d.nominal : "-",
        });
      })
    );

    let namaFile = `/uploads/rekap-keuangan.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async importRombelServices(filelocation, sekolah, ta) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Daftar Peserta Didik");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 7) {
        const rombelData = explanation.getCell("U" + rowNumber).value;
        // data.push({
        // });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkRombel = await MRombel.query()
          .where({ nama: d.rombel })
          // .andWhere({ tingkat: tingkatromawi })
          .andWhere({ m_ta_id: ta.id })
          .andWhere({ m_sekolah_id: sekolah.id })
          .first();

        if (checkRombel) {
          return "ganda";
        } else {
          return "ok";
        }

        // else {

        //   if (!checkUser) {
        //     const createUser = await User.create({
        //       nama: d.nama,
        //       whatsapp: d.whatsapp,
        //       email: d.email,
        //       gender: d.jk,
        //       password: await Hash.make(`${d.password}`),
        //       role: "siswa",
        //       tempat_lahir: d.tempatlahir,
        //       tanggal_lahir: d.tanggallahir,
        //       nip: d.nipd,
        //       nama_ayah: d.namaayah,
        //       nama_ibu: d.namaibu,
        //       m_sekolah_id: sekolah.id,
        //       agama: d.agama,
        //       dihapus: 0,
        //     });

        //     if ((districtIds, villageIds)) {
        //       await MProfilUser.create({
        //         nisn: d.nisn,
        //         asal_sekolah: d.asalsekolah,
        //         alamat: d.alamat,
        //         regency_id: districtIds.regency_id,
        //         district_id: districtIds.id,
        //         village_id: villageIds.id,
        //         kodepos: d.kodepos,
        //         bb: d.bb,
        //         tb: d.tb,
        //         disabilitas: d.kebutuhan,
        //         nama_ayah: d.namaayah,
        //         pekerjaan_ayah: d.pekerjaanayah,
        //         nama_ibu: d.namaibu,
        //         pekerjaan_ibu: d.pekerjaanibu,
        //         m_user_id: createUser.toJSON().id,
        //         nama_wali: d.namawali,
        //         pekerjaan_wali: d.pekerjaanwali,
        //       });
        //       return;
        //     }
        //     await MProfilUser.create({
        //       nisn: d.nisn,
        //       asal_sekolah: d.asalsekolah,
        //       alamat: d.alamat,
        //       kodepos: d.kodepos,
        //       bb: d.bb,
        //       tb: d.tb,
        //       disabilitas: d.kebutuhan,
        //       nama_ayah: d.namaayah,
        //       pekerjaan_ayah: d.pekerjaanayah,
        //       nama_ibu: d.namaibu,
        //       pekerjaan_ibu: d.pekerjaanibu,
        //       m_user_id: createUser.toJSON().id,
        //       nama_wali: d.namawali,
        //       pekerjaan_wali: d.pekerjaanwali,
        //     });
        //     if (createRombel) {
        //       await MAnggotaRombel.create({
        //         role: "anggota",
        //         dihapus: 0,
        //         m_user_id: createUser.toJSON().id,
        //         m_rombel_id: createRombel.toJSON().id,
        //       });
        //       return;
        //     }
        //     await MAnggotaRombel.create({
        //       role: "anggota",
        //       dihapus: 0,
        //       m_user_id: createUser.toJSON().id,
        //       m_rombel_id: checkRombel.id,
        //     });
        //     return;
        //   }

        //   if (createRombel) {
        //     const checkAnggotaRombel = await MAnggotaRombel.query()
        //       .where({ dihapus: 0 })
        //       .andWhere({ m_user_id: checkUser.id })
        //       .andWhere({ m_rombel_id: createRombel.id })
        //       .first();

        //     if (checkAnggotaRombel) {
        //       return {
        //         message: `${d.nama} sudah terdaftar`,
        //         error: true,
        //       };
        //     }

        //     await MAnggotaRombel.create({
        //       role: "anggota",
        //       dihapus: 0,
        //       m_user_id: checkUser.id,
        //       m_rombel_id: createRombel.id,
        //     });
        //     return;
        //   }
        //   const checkAnggotaRombel = await MAnggotaRombel.query()
        //     .where({ dihapus: 0 })
        //     .andWhere({ m_user_id: checkUser.id })
        //     .andWhere({ m_rombel_id: checkRombel.id })
        //     .first();

        //   if (checkAnggotaRombel) {
        //     return {
        //       message: `${d.nama} sudah terdaftar`,
        //       error: true,
        //     };
        //   }

        //   await MAnggotaRombel.create({
        //     role: "anggota",
        //     dihapus: 0,
        //     m_user_id: checkUser.id,
        //     m_rombel_id: checkRombel.id,
        //   });
        //   return;
        // }
      })
    );

    return result;
  }

  async importRombelServices2(filelocation, sekolah, ta) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Daftar Peserta Didik");

    let colComment = explanation.getColumn("A");

    // let dataRombel = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 7) {
        let rombelall = explanation.getCell("B" + rowNumber).value;
        let tingkat = `${rombelall.split(" ")[0]}`;

        // dataRombel.push({
        //   rombelall: explanation.getCell("B" + rowNumber).value,
        //   tingkat: `${rombelall.split(" ")[0]}`,
        // });

        const rombelCheck = await MRombel.query()
          .where({ nama: rombelall })
          .andWhere({ m_ta_id: ta.id })
          .andWhere({ m_sekolah_id: sekolah.id })
          .first();

        if (!rombelCheck) {
          await MRombel.create({
            tingkat: tingkat,
            nama: rombelall,
            kelompok: "reguler",
            m_sekolah_id: sekolah.id,
            m_ta_id: ta.id,
            dihapus: 0,
          });
          return rombelCheck;
        }
      }
    });

    // const rombelResult = await Promise.all(
    //   dataRombel.map(async (d) => {
    //     const rombelCheck = await MRombel.query()
    //       .where({ nama: d.rombel })
    //       .andWhere({ m_ta_id: ta.id })
    //       .andWhere({ m_sekolah_id: sekolah.id })
    //       .first();

    //     if (!rombelCheck) {
    //       const createRombel = await MRombel.create({
    //         tingkat: d.tingkat,
    //         nama: d.rombelall,
    //         kelompok: "reguler",
    //         m_sekolah_id: sekolah.id,
    //         m_ta_id: ta.id,
    //         dihapus: 0,
    //       });
    //       return;
    //     }
    //   })
    // );

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 7) {
        const rombelsiswa = explanation.getCell("X" + rowNumber).value;
        data.push({
          nama: explanation.getCell("E" + rowNumber).value,
          nipd: explanation.getCell("F" + rowNumber).value,
          jk: explanation.getCell("G" + rowNumber).value,
          nisn: explanation.getCell("H" + rowNumber).value,
          tempatlahir: explanation.getCell("I" + rowNumber).value,
          tanggallahir: explanation.getCell("J" + rowNumber).value,
          agama: explanation.getCell("K" + rowNumber).value,
          alamat: explanation.getCell("L" + rowNumber).value,
          kelurahan: explanation.getCell("M" + rowNumber).value,
          kecamatan: explanation.getCell("N" + rowNumber).value,
          kodepos: explanation.getCell("O" + rowNumber).value,
          whatsapp: explanation.getCell("P" + rowNumber).value,
          email: explanation.getCell("Q" + rowNumber).value,
          namaayah: explanation.getCell("R" + rowNumber).value,
          pekerjaanayah: explanation.getCell("S" + rowNumber).value,
          namaibu: explanation.getCell("T" + rowNumber).value,
          pekerjaanibu: explanation.getCell("U" + rowNumber).value,
          namawali: explanation.getCell("V" + rowNumber).value,
          pekerjaanwali: explanation.getCell("W" + rowNumber).value,
          rombel: `${romawi[rombelsiswa.split(" ")[0] - 1]} ${
            rombelsiswa.split(" ")[1]
          } ${rombelsiswa.split(" ")[2]}`,
          kebutuhan: explanation.getCell("Y" + rowNumber).value,
          asalsekolah: explanation.getCell("Z" + rowNumber).value,
          bb: explanation.getCell("AA" + rowNumber).value,
          tb: explanation.getCell("AB" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkUser = await User.query()
          .where({ whatsapp: d.whatsapp })
          .first();

        const districtIds = await District.query()
          .where({ name: d.kecamatan })
          .first();

        const villageIds = await Village.query()
          .where({ name: d.kelurahan })
          .first();

        const checkRombel = await MRombel.query()
          .where({ nama: d.rombel })
          .andWhere({ m_ta_id: ta.id })
          .andWhere({ m_sekolah_id: sekolah.id })
          .first();

        if (!checkUser) {
          const createUser = await User.create({
            nama: d.nama,
            whatsapp: d.whatsapp,
            email: d.email,
            gender: d.jk,
            password: await Hash.make(`${d.password}`),
            role: "siswa",
            tempat_lahir: d.tempatlahir,
            tanggal_lahir: d.tanggallahir,
            nip: d.nipd,
            nama_ayah: d.namaayah,
            nama_ibu: d.namaibu,
            m_sekolah_id: sekolah.id,
            agama: d.agama,
            dihapus: 0,
          });

          if ((districtIds, villageIds)) {
            await MProfilUser.create({
              nisn: d.nisn,
              asal_sekolah: d.asalsekolah,
              alamat: d.alamat,
              regency_id: districtIds.regency_id,
              district_id: districtIds.id,
              village_id: villageIds.id,
              kodepos: d.kodepos,
              bb: d.bb,
              tb: d.tb,
              disabilitas: d.kebutuhan,
              nama_ayah: d.namaayah,
              pekerjaan_ayah: d.pekerjaanayah,
              nama_ibu: d.namaibu,
              pekerjaan_ibu: d.pekerjaanibu,
              m_user_id: createUser.toJSON().id,
              nama_wali: d.namawali,
              pekerjaan_wali: d.pekerjaanwali,
            });
            return;
          }
          await MProfilUser.create({
            nisn: d.nisn,
            asal_sekolah: d.asalsekolah,
            alamat: d.alamat,
            kodepos: d.kodepos,
            bb: d.bb,
            tb: d.tb,
            disabilitas: d.kebutuhan,
            nama_ayah: d.namaayah,
            pekerjaan_ayah: d.pekerjaanayah,
            nama_ibu: d.namaibu,
            pekerjaan_ibu: d.pekerjaanibu,
            m_user_id: createUser.toJSON().id,
            nama_wali: d.namawali,
            pekerjaan_wali: d.pekerjaanwali,
          });
          await MAnggotaRombel.create({
            role: "anggota",
            dihapus: 0,
            m_user_id: createUser.toJSON().id,
            m_rombel_id: checkRombel.id,
          });
          return;
        }

        const checkAnggotaRombel = await MAnggotaRombel.query()
          .where({ dihapus: 0 })
          .andWhere({ m_user_id: checkUser.toJSON().id })
          .andWhere({ m_rombel_id: checkRombel.id })
          .first();

        if (checkAnggotaRombel) {
          return {
            message: `${d.nama} sudah terdaftar`,
            error: true,
          };
        }

        await MAnggotaRombel.create({
          role: "anggota",
          dihapus: 0,
          m_user_id: checkUser.id,
          m_rombel_id: checkRombel.id,
        });
        return;
      })
    );

    return result;
  }

  async importRombel({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.${file.extname}`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importRombelServices2(
      `tmp/uploads/${fname}`,
      sekolah,
      ta
    );
  }

  async downloadRombel({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const rombel = await MRombel.query()
      .with("user")
      .with("anggotaRombel", (builder) => {
        builder.with("user");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    let workbook = new Excel.Workbook();

    await Promise.all(
      rombel.toJSON().map(async (d, idx) => {
        let worksheet = workbook.addWorksheet(`${idx + 1}.${d.nama}`);
        worksheet.getCell("A1").value = "Rekap Data Siswa";
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.getCell("A3").value = ta.tahun;
        worksheet.getCell("A4 ").value = d.nama;
        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
        worksheet.addConditionalFormatting({
          ref: `A1:E4`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet.mergeCells(`A1:E1`);
        worksheet.mergeCells(`A2:E2`);
        worksheet.mergeCells(`A3:E3`);
        worksheet.mergeCells(`A4:E4`);
        worksheet.addConditionalFormatting({
          ref: `A7:E7`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                fill: {
                  type: "pattern",
                  pattern: "solid",
                  bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });

        await Promise.all(
          d.anggotaRombel.map(async (anggota, idx) => {
            worksheet.addConditionalFormatting({
              ref: `B${(idx + 1) * 1 + 7}:E${(idx + 1) * 1 + 7}`,
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    font: {
                      name: "Times New Roman",
                      family: 4,
                      size: 11,
                      // bold: true,
                    },
                    alignment: {
                      vertical: "middle",
                      horizontal: "left",
                    },
                    border: {
                      top: { style: "thin" },
                      left: { style: "thin" },
                      bottom: { style: "thin" },
                      right: { style: "thin" },
                    },
                  },
                },
              ],
            });
            worksheet.addConditionalFormatting({
              ref: `A${(idx + 1) * 1 + 7}`,
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    font: {
                      name: "Times New Roman",
                      family: 4,
                      size: 11,
                      // bold: true,
                    },
                    alignment: {
                      vertical: "middle",
                      horizontal: "center",
                    },
                    border: {
                      top: { style: "thin" },
                      left: { style: "thin" },
                      bottom: { style: "thin" },
                      right: { style: "thin" },
                    },
                  },
                },
              ],
            });
            // add column headers
            worksheet.getRow(7).values = [
              "No",
              "Nama",
              "Whatsapp",
              "Gender",
              "Jabatan",
            ];

            worksheet.columns = [
              { key: "no" },
              { key: "user" },
              { key: "whatsapp" },
              { key: "gender" },
              { key: "jabatan" },
            ];

            // Add row using key mapping to columns
            let row = worksheet.addRow({
              no: `${idx + 1}`,
              user: anggota.user ? anggota.user.nama : "-",
              whatsapp: anggota.user ? anggota.user.whatsapp : "-",
              gender: anggota.user ? anggota.user.gender : "-",
              jabatan: anggota ? anggota.role : "-",
            });
          })
        );
      })
    );
    let namaFile = `/uploads/rekap-Rombel.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadSPP({ response, request, params: { pembayaran_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const pembayaran = await MPembayaran.query()
      .with("rombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .with("siswa", (builder) => {
            builder.with("riwayat").with("user", (builder) => {
              builder.select("id", "nama");
            });
          })
          .where({ dihapus: 0 });
      })
      .where({ id: pembayaran_id })
      .andWhere({ jenis: "spp" })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .fetch();

    let workbook = new Excel.Workbook();

    await Promise.all(
      pembayaran.toJSON().map(async (d) => {
        await Promise.all(
          d.rombel.map(async (e, idx) => {
            let worksheet = workbook.addWorksheet(
              `${idx + 1}.${e.rombel.nama}`
            );
            worksheet.getCell("A1").value = "Rekap SPP";
            worksheet.getCell("A2").value = sekolah.nama;
            worksheet.getCell("A3").value = ta.tahun;
            worksheet.getCell("A5").value = d.nama;
            worksheet.getCell("A6").value = e.rombel.nama;
            worksheet.getCell("A7").value = d.bulan;
            worksheet.getCell(
              "A8"
            ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
            worksheet.mergeCells(`A1:F1`);
            worksheet.mergeCells(`A2:F2`);
            worksheet.mergeCells(`A3:F3`);
            worksheet.mergeCells(`A5:F5`);
            worksheet.mergeCells(`A6:F6`);
            worksheet.mergeCells(`A7:F7`);
            worksheet.addConditionalFormatting({
              ref: "A1:F3",
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    font: {
                      name: "Times New Roman",
                      family: 4,
                      size: 16,
                      bold: true,
                    },
                    alignment: {
                      vertical: "middle",
                      horizontal: "center",
                    },
                  },
                },
              ],
            });
            worksheet.addConditionalFormatting({
              ref: "A5:F7",
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    font: {
                      name: "Times New Roman",
                      family: 4,
                      size: 14,
                      // bold: true,
                    },
                    alignment: {
                      vertical: "middle",
                      horizontal: "center",
                    },
                  },
                },
              ],
            });
            worksheet.getColumn("A").width = 5;
            worksheet.getColumn("B").width = 28;
            worksheet.getColumn("C").width = 10;
            worksheet.addConditionalFormatting({
              ref: "A9:C9",
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    font: {
                      name: "Times New Roman",
                      family: 4,
                      size: 14,
                      bold: true,
                    },
                    fill: {
                      type: "pattern",
                      pattern: "solid",
                      bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
                    },
                    alignment: {
                      vertical: "middle",
                      horizontal: "center",
                    },
                    border: {
                      top: { style: "thin" },
                      left: { style: "thin" },
                      bottom: { style: "thin" },
                      right: { style: "thin" },
                    },
                  },
                },
              ],
            });
            worksheet.addConditionalFormatting({
              ref: "A10:A109",
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    alignment: {
                      vertical: "middle",
                      horizontal: "center",
                    },
                  },
                },
              ],
            });
            await Promise.all(
              e.siswa.map(async (anggota, nox) => {
                // add column headers
                worksheet.getRow(9).values = ["No", "Nama", "Status"];
                worksheet.columns = [
                  { key: "no" },
                  { key: "nama" },
                  { key: "status" },
                ];

                // Add row using key mapping to columns
                let row = worksheet.addRow({
                  no: `${nox + 1}`,
                  id: `${nox + 1}`,
                  nama: anggota.user ? anggota.user.nama : "-",
                  status: anggota ? anggota.status : "-",
                  status: anggota ? anggota.status : "-",
                  status: anggota ? anggota.status : "-",
                  status: anggota ? anggota.status : "-",
                  status: anggota ? anggota.status : "-",
                });

                await Promise.all(
                  anggota.riwayat.map(async (r, no) => {
                    worksheet.getRow(9).values = [
                      "",
                      "No",
                      "Nama",
                      "Bank",
                      "Norek",
                      "NamaPemilik",
                      "Nominal",
                      "Bukti",
                    ];

                    worksheet.columns = [
                      { key: "" },
                      { key: "no" },
                      { key: "bank" },
                      { key: "norek" },
                      { key: "nama_pemilik" },
                      { key: "nominal" },
                      { key: "bukti" },
                    ];

                    let row = worksheet.addRow({
                      no: `Pembayaran #${no + 1}`,
                      bank: r ? r.bank : "-",
                      norek: r ? r.norek : "-",
                      nama_pemilik: r ? r.nama_pemilik : "-",
                      nominal: r ? r.nominal : "-",
                      bukti: r ? r.bukti : "-",
                    });
                  })
                );
              })
            );
          })
        );
      })
    );
    let namaFile = `/uploads/rekap-SPP.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  // =========== IMPORT Alumni SERVICE ================
  async importAlumniServices(filelocation, sekolah) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("Daftar Alumni");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 8) {
        data.push({
          nama: explanation.getCell("B" + rowNumber).value,
          whatsapp: explanation.getCell("C" + rowNumber).value,
          email: explanation.getCell("D" + rowNumber).value,
          gender: explanation.getCell("E" + rowNumber).value,
          tempat_lahir: explanation.getCell("F" + rowNumber).value,
          tanggal_lahir: explanation.getCell("G" + rowNumber).value,
          jurusan: explanation.getCell("H" + rowNumber).value,
          tahun_masuk: explanation.getCell("I" + rowNumber).value,
          pekerjaan: explanation.getCell("J" + rowNumber).value,
          kantor: explanation.getCell("K" + rowNumber).value,
          sektor_industri: explanation.getCell("L" + rowNumber).value,
          sekolah_lanjutan: explanation.getCell("M" + rowNumber).value,
          pengalaman: explanation.getCell("N" + rowNumber).value,
          sertifikasi_keahlian: explanation.getCell("O" + rowNumber).value,
          purnakarya: explanation.getCell("P" + rowNumber).value,
          deskripsi: explanation.getCell("Q" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const checkUser = await User.query()
          .where({ whatsapp: d.whatsapp })
          .andWhere({ dihapus: 0 })
          .first();

        if (checkUser) {
          const alumni = await MAlumni.create({
            jurusan: d.jurusan,
            tahun_masuk: d.tahun_masuk,
            pekerjaan: d.pekerjaan,
            kantor: d.kantor,
            sektor_industri: d.sektor_industri,
            sekolah_lanjutan: d.sekolah_lanjutan,
            sertifikasi_keahlian: d.sertifikasi_keahlian,
            pengalaman: d.pengalaman,
            purnakarya: d.purnakarya,
            deskripsi: d.deskripsi,
            dihapus: 0,
            m_user_id: checkUser.id,
          });
          return {
            message: `${d.nama} ${d.whatsapp} sudah terdaftar`,
            error: true,
          };
        }

        const user = await User.create({
          nama: d.nama,
          whatsapp: d.whatsapp,
          email: d.email,
          gender: d.gender,
          role: "alumni",
          m_sekolah_id: sekolah.id,
          tanggal_lahir: d.tanggal_lahir,
          tempat_lahir: d.tempat_lahir,
          dihapus: 0,
        });

        await MProfilUser.create({
          gender: d.gender,
          tanggal_lahir: d.tanggal_lahir,
          tempat_lahir: d.tempat_lahir,
        });

        const alumni = await MAlumni.create({
          jurusan: d.jurusan,
          tahun_masuk: d.tahun_masuk,
          pekerjaan: d.pekerjaan,
          kantor: d.kantor,
          sektor_industri: d.sektor_industri,
          sekolah_lanjutan: d.sekolah_lanjutan,
          sertifikasi_keahlian: d.sertifikasi_keahlian,
          pengalaman: d.pengalaman,
          purnakarya: d.purnakarya,
          deskripsi: d.deskripsi,
          dihapus: 0,
          m_user_id: user.id,
        });

        return;
      })
    );

    return result;
  }

  async importAlumni({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel.${file.extname}`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importAlumniServices(`tmp/uploads/${fname}`, sekolah);
  }

  async downloadAlumni({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const alumni = await MAlumni.query()
      .with("user", (builder) => {
        builder.where({ m_sekolah_id: sekolah.id });
      })
      .where({ dihapus: 0 })
      .fetch();

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Alumni`);
    worksheet.mergeCells("A1:P1");
    worksheet.mergeCells("A2:P2");
    worksheet.getCell(
      "A3"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:P2",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            // border: {
            //   top: { style: "thin" },
            //   left: { style: "thin" },
            //   bottom: { style: "thin" },
            //   right: { style: "thin" },
            // },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A4:P4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    await Promise.all(
      alumni.toJSON().map(async (d, idx) => {
        worksheet.getCell("A1").value = "Rekap Alumni";
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 4}:P${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
              },
            },
          ],
        });
        // add column headers
        worksheet.getRow(4).values = [
          "No",
          "Nama",
          "Whatsapp",
          "Email",
          "Jenis Kelamin",
          "Tempat Lahir",
          "Tanggal Lahir",
          "Tahun Masuk",
          "Pekerjaan",
          "Kantor",
          "Sektor Industri",
          "Sekolah Lanjutan",
          "Pengalaman",
          "Sertifikasi Keahlian",
          "Purnakarya",
          "Deskripsi",
        ];
        worksheet.columns = [
          { key: "no" },
          { key: "nama" },
          { key: "whatsapp" },
          { key: "email" },
          { key: "jeniskelamin" },
          { key: "tempat_lahir" },
          { key: "tanggal_lahir" },
          { key: "tahun_masuk" },
          { key: "pekerjaan" },
          { key: "kantor" },
          { key: "sektor_industri" },
          { key: "sekolah_lanjutan" },
          { key: "pengalaman" },
          { key: "sertifikasi_keahlian" },
          { key: "purnakarya" },
          { key: "deskripsi" },
        ];

        // Add row using key mapping to columns
        let row = worksheet.addRow({
          no: `${idx + 1}`,
          nama: d.user ? d.user.nama : "-",
          whatsapp: d.user ? d.user.whatsapp : "-",
          email: d.user ? d.user.email : "-",
          jeniskelamnin: d.user ? d.user.gender : "-",
          tempat_lahir: d.user ? d.user.tempat_lahir : "-",
          tanggal_lahir: d.user ? d.user.tanggal_lahir : "-",
          tahun_masuk: d ? d.tahun_masuk : "-",
          pekerjaan: d ? d.pekerjaan : "-",
          kantor: d ? d.kantor : "-",
          sektor_industri: d ? d.sektor_industri : "-",
          sekolah_lanjutan: d ? d.sekolah_lanjutan : "-",
          pengalaman: d ? d.pengalaman : "-",
          sertifikasi_keahlian: d ? d.sertifikasi_keahlian : "-",
          purnakarya: d ? d.purnakarya : "-",
          deskripsi: d ? d.deskripsi : "-",
        });
      })
    );
    let namaFile = `/uploads/rekap-Alumni.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadKartuUjian({ response, request, params: { ujian_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const tasemester = await Mta.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ aktif: 1 })
      .andWhere({ dihapus: 0 })
      .first();

    const kepsek = await User.query()
      .where({ role: "kepsek" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .first();

    const ujian = await MUjian.query()
      .with("mataPelajaran", (builder) => {
        builder.with("user");
      })
      .with("soalUjian", (builder) => {
        builder.with("soal").where({ dihapus: 0 });
      })
      .withCount("soalUjian as TotalUjian", (builder) => {
        builder.where({ m_ujian_id: ujian_id });
      })
      .where({ dihapus: 0 })
      .andWhere({ id: ujian_id })
      .first();

    // const file = fs.createWriteStream("file.jpg");
    // const request = http.get(`${sekolah.logo}`, function (response) {
    //   response.pipe(file);
    // });

    (async () => {
      const downloader = new Downloader({
        url: `${sekolah.logo}`,
        directory: "./public/images/", //Sub directories will also be automatically created if they do not exist.
        fileName: "logo.png",
        cloneFiles: false,
      });

      try {
        await downloader.download();
      } catch (error) {
        console.log(error);
      }
    })();

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`KISI-KISI`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    const imageId1 = workbook.addImage({
      filename: "public/images/logo.png",
      extension: "png",
    });
    // worksheet.addImage(imageId1, 'B1:B3');
    worksheet.addImage(imageId1, {
      tl: { col: 1.5, row: 0.1 },
      ext: { width: 100, height: 60 },
    });

    // looping worksheet
    await Promise.all(
      ujian.toJSON().soalUjian.map(async (e, idx) => {
        // await Promise.all(
        //   d.soal.map(async (e, idx) => {
        // add column headers

        worksheet.getRow(22).values = [
          "No",
          "KOMPETENSI DASAR",
          "MATERI",
          "INDIKATOR PENCAPAIAN KOMPETENSI",
          "INDIKATOR SOAL",
          "LEVEL KOGNITIF",
          "BENTUK SOAL",
          "TINGKAT KESUKARAN",
          "SUMBER BUKU",
          "NO SOAL",
        ];

        worksheet.getRow(23).values = ["", "", "", "", "", "", "", "", "", ""];

        worksheet.columns = [
          { key: "No" },
          { key: "KOMPETENSI_DASAR" },
          { key: "MATERI" },
          { key: "INDIKATOR_PENCAPAIAN_KOMPETENSI" },
          { key: "INDIKATOR SOAL" },
          { key: "LEVEL_KOGNITIF" },
          { key: "BENTUK_SOAL" },
          { key: "TINGKAT_KESUKARAN" },
          { key: "SUMBER_BUKU" },
          { key: "NO_SOAL" },
        ];

        // Add row using key mapping to columns
        let row = worksheet.addRow({
          No: `${idx + 1}`,
          KOMPETENSI_DASAR: e.soal ? e.soal.kd : "-",
          MATERI: e.soal ? e.soal.kd_konten_materi : "-",
          INDIKATOR_PENCAPAIAN_KOMPETENSI: e.soal
            ? e.soal.akm_konteks_materi
            : "-",
          INDIKATOR_SOAL: e.soal ? e.soal.akm_konten_materi : "-",
          LEVEL_KOGNITIF: e.soal ? e.soal.aspek_level : "-",
          BENTUK_SOAL: e.soal ? e.soal.bentuk : "-",
          TINGAT_KESUKARAN: e.soal ? e.soal.tahun_masuk : "-",
          SUMBER_BUKU: e.soal ? e.soal.pekerjaan : "-",
          NO_SOAL: e.soal ? e.soal.kantor : "-",
        });
        // })
        // );
      })
    );
    // const imageId1 = workbook.addImage({
    //   filename: `${sekolah.logo_ss}`,
    //   extension: "png",
    // });
    // worksheet.addImage(imageId1, {
    //   tl: { col: 0, row: 0 },
    //   ext: { width: 500, height: 200 },
    // });
    // const imageId1 = workbook.addImage({
    // buffer: fs.readFileSync(`${sekolah.logo_ss}`),
    //   extension: "png",
    // });
    // worksheet.addImage(imageId1, {
    //   tl: { col: 0, row: 0 },
    //   ext: { width: 30, height: 20 },
    // });
    worksheet.mergeCells("A1:J1");
    worksheet.mergeCells("A2:J2");
    worksheet.mergeCells("A3:J3");
    worksheet.mergeCells("A4:J4");
    worksheet.mergeCells("A5:J5");
    worksheet.mergeCells("A21:J21");
    worksheet.mergeCells("A22:A23");
    worksheet.mergeCells("B22:B23");
    worksheet.mergeCells("C22:C23");
    worksheet.mergeCells("D22:D23");
    worksheet.mergeCells("E22:E23");
    worksheet.mergeCells("F22:F23");
    worksheet.mergeCells("G22:G23");
    worksheet.mergeCells("H22:H23");
    worksheet.mergeCells("I22:I23");
    worksheet.mergeCells("J22:J23");
    worksheet.getColumn("A").width = 4;
    worksheet.getColumn("B").width = 30;
    worksheet.getColumn("C").width = 17;
    worksheet.getColumn("D").width = 26;
    worksheet.getColumn("E").width = 26;
    worksheet.getColumn("F").width = 9.5;
    worksheet.getColumn("G").width = 8;
    worksheet.getColumn("H").width = 12;
    worksheet.getColumn("I").width = 11;
    worksheet.getColumn("J").width = 6;
    // return sekolah;
    worksheet.getCell("A1").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 16,
            bold: true,
          },
          text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi}`,
        },
      ],
    };
    worksheet.getCell("A1").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A2").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 20,
            bold: true,
          },
          text: "DINAS PENDIDIKAN",
        },
      ],
    };
    worksheet.getCell("A2").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A3").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 14,
            bold: true,
          },
          text: `${sekolah.alamat} telp.${sekolah.telp} ${sekolah.kabupaten} - ${sekolah.kode_pos}`,
        },
      ],
    };
    worksheet.getCell("A3").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A4").value = {
      richText: [
        {
          font: {
            name: "Agency FB",
            family: 4,
            size: 36,
            color: { argb: "FFFFFF" },
          },
          text: "KISI-KISI",
        },
      ],
    };

    worksheet.getCell("A4").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A5").value = {
      richText: [
        {
          font: {
            name: "Agency FB",
            family: 4,
            size: 26,
            color: { argb: "FFFFFF" },
          },
          text: `${ujian.toJSON().tipe_format}`,
        },
      ],
    };
    worksheet.getCell("A5").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A4").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0000" },
      bgColor: { argb: "FF0000" },
    };
    worksheet.getCell("A5").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0000" },
      bgColor: { argb: "FF0000" },
    };
    worksheet.getCell("A21").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "000000" },
      bgColor: { argb: "000000" },
    };
    worksheet.getCell("A22").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "0000FF" },
      bgColor: { argb: "0000FF" },
    };

    worksheet.addConditionalFormatting({
      ref: "A22:J22",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Agency FB",
              family: 4,
              size: 11,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "A24:A73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "top",
              horizontal: "right",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "B24:E73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "top",
              horizontal: "left",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "F24:J73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "top",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "B22:I72",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            alignment: { wrapText: true },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "J22:J72",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thick" },
            },
            alignment: { wrapText: true },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "B73:I73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thick" },
              right: { style: "thin" },
            },
            alignment: { wrapText: true },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A22:A72",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thick" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            alignment: { wrapText: true },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A1:J1",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thick" },
              left: { style: "thick" },
              // bottom: { style: "thick" },
              right: { style: "thick" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "J1:J72",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              // top: { style: "thick" },
              // left: { style: "thick" },
              // bottom: { style: "thick" },
              right: { style: "thick" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "B73:I73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              // top: { style: "thick" },
              // left: { style: "thick" },
              bottom: { style: "thick" },
              // right: { style: "thick" },
            },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "A1:A72",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              // top: { style: "thick" },
              left: { style: "thick" },
              // bottom: { style: "thick" },
              // right: { style: "thick" },
            },
          },
        },
      ],
    });
    worksheet.getCell("A1").border = {
      top: { style: "thick" },
      left: { style: "thick" },
      // bottom: {style:'thin'},
      // right: {style:'thin'}
    };
    worksheet.getCell("J1").border = {
      top: { style: "thick" },
      // left: {style:'thick'},
      // bottom: {style:'thin'},
      right: { style: "thick" },
    };
    worksheet.getCell("A73").border = {
      top: { style: "thin" },
      left: { style: "thick" },
      bottom: { style: "thick" },
      right: { style: "thin" },
    };
    worksheet.getCell("J73").border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thick" },
      right: { style: "thick" },
    };
    // worksheet.getRow(5).font = {
    //   name: "Times New Roman",
    //   family: 4,
    //   size: 16,
    //   bold: true,
    // };

    worksheet.getCell("B7").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G7").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("B8").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G8").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("B9").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G9").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("B10").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G10").alignment = {
      vertical: "middle",
      horizontal: "right",
    };

    worksheet.getCell("B7").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Nama Sekolah                    :",
        },
      ],
    };
    worksheet.getCell("C7").value = {
      richText: [
        { font: { name: "Times New Roman" }, text: `${sekolah.nama}` },
      ],
    };

    worksheet.getCell("G7").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Tanggal Tes                  :",
        },
      ],
    };
    worksheet.getCell("H7").value = {
      richText: [{ font: { name: "Times New Roman" }, text: 0 }],
    };

    worksheet.getCell("B8").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Mata Pelajaran                  :",
        },
      ],
    };
    worksheet.getCell("C8").value = {
      richText: [
        {
          font: { name: "Times New Roman" },
          text: `${ujian.toJSON().mataPelajaran.nama}`,
        },
      ],
    };

    worksheet.getCell("G8").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Kelas/Ujian                 :",
        },
      ],
    };
    worksheet.getCell("H8").value = {
      richText: [
        { font: { name: "Times New Roman" }, text: `${ujian.tingkat}` },
      ],
    };

    worksheet.getCell("B9").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Kompetensi Keahlian        :",
        },
      ],
    };
    worksheet.getCell("C9").value = {
      richText: [{ font: { name: "Times New Roman" }, text: 0 }],
    };

    worksheet.getCell("G9").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Bentuk Soal                  :",
        },
      ],
    };
    // worksheet.getCell("H9").value = {
    //   richText: [
    //     {
    //       font: { name: "Times New Roman" },
    //       text: `${ujian.soalUjian.soal.bentuk}`,
    //     },
    //   ],
    // };

    worksheet.getCell("B10").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Guru Mata Pelajarn         :",
        },
      ],
    };
    worksheet.getCell("C10").value = {
      richText: [
        {
          font: { name: "Times New Roman" },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };

    worksheet.getCell("G10").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Jumlah Soal/Waktu       :",
        },
      ],
    };
    worksheet.getCell("H10").value = {
      richText: [
        {
          font: { name: "Times New Roman" },
          text: `${ujian.TotalUjian}soal `,
        },
      ],
    };

    worksheet.getCell("B75").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet.getCell("B76").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "KEPALA SEKOLAH",
        },
      ],
    };
    worksheet.getCell("B80").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${kepsek.nama}`,
        },
      ],
    };

    worksheet.getCell("G75").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet.getCell("G76").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "GURU MATA PELAJARAN",
        },
      ],
    };
    worksheet.getCell("G80").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };

    let worksheet2 = workbook.addWorksheet(`Kartu Soal PG`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    worksheet2.getColumn("A").width = 3;
    worksheet2.getColumn("B").width = 28;
    worksheet2.getColumn("C").width = 1.5;
    worksheet2.getColumn("D").width = 7;
    worksheet2.getColumn("E").width = 5.5;
    worksheet2.getColumn("F").width = 33;
    worksheet2.getColumn("G").width = 42;
    worksheet2.getColumn("H").width = 31;

    await Promise.all(
      ujian.toJSON().soalUjian.map(async (d, idx) => {
        if (`${d.soal.bentuk}` == "pg") {
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 30}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 29}:H${(idx + 1) * 32 - 29}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 28}:H${(idx + 1) * 32 - 28}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 27}:H${(idx + 1) * 32 - 27}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 26}:H${(idx + 1) * 32 - 26}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 25}:F${(idx + 1) * 32 - 25}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 24}:F${(idx + 1) * 32 - 24}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 23}:F${(idx + 1) * 32 - 23}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 22}:F${(idx + 1) * 32 - 22}`
          );
          worksheet2.mergeCells(
            `G${(idx + 1) * 32 - 25}:H${(idx + 1) * 32 - 25}`
          );
          worksheet2.mergeCells(
            `G${(idx + 1) * 32 - 24}:H${(idx + 1) * 32 - 22}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 21}:E${(idx + 1) * 32 - 21}`
          ); //11
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 21}:G${(idx + 1) * 32 - 21}`
          ); //11
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 20}:E${(idx + 1) * 32 - 20}`
          ); //12
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 20}:G${(idx + 1) * 32 - 20}`
          ); //12
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 19}:D${(idx + 1) * 32 - 18}`
          ); //1314
          worksheet2.mergeCells(
            `E${(idx + 1) * 32 - 19}:G${(idx + 1) * 32 - 19}`
          ); //13
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 18}:B${(idx + 1) * 32 - 11}`
          ); //1421
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 17}:D${(idx + 1) * 32 - 16}`
          ); //1516
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 15}:D${(idx + 1) * 32 - 14}`
          ); //1718
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 13}:D${(idx + 1) * 32 - 11}`
          ); //1921
          worksheet2.mergeCells(
            `E${(idx + 1) * 32 - 18}:G${(idx + 1) * 32 - 16}`
          ); //1416
          worksheet2.mergeCells(
            `H${(idx + 1) * 32 - 16}:H${(idx + 1) * 32 - 11}`
          ); //1621
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 15}:G${(idx + 1) * 32 - 15}`
          ); //1717
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 14}:G${(idx + 1) * 32 - 14}`
          ); //18
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 13}:G${(idx + 1) * 32 - 13}`
          ); //19
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 12}:G${(idx + 1) * 32 - 12}`
          ); //20
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 11}:G${(idx + 1) * 32 - 11}`
          ); //21

          worksheet2.addImage(imageId1, "B2:C5");

          worksheet2.getCell(`B${(idx + 1) * 32 - 30}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi}`,
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 30}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 29}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 20,
                  bold: true,
                },
                text: "CABANG DINAS PENDIDIKAN",
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 29}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 28}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 14,
                  bold: true,
                },
                text: `${ta.tahun} `,
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 28}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };

          worksheet2.getCell(`B${(idx + 1) * 32 - 26}`).value = {
            richText: [
              {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 22,
                  color: { argb: "000000" },
                },
                text: `${ujian.toJSON().tipe_format}`,
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 26}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 26}`).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "ADD8E6" },
            bgColor: { argb: "ADD8E6" },
          };
          worksheet2.getCell(`G${(idx + 1) * 32 - 25}`).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "E0FFFF" },
            bgColor: { argb: "E0FFFF" },
          };
          worksheet2.getCell(`G${(idx + 1) * 32 - 25}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Kompetensi Dasar`,
              },
            ],
          };
          // worksheet2.getCell("B29").value = `${ujian.nama}`;
          worksheet2.getCell(`G${(idx + 1) * 32 - 25}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`G${(idx + 1) * 32 - 24}`).value = {
            richText: [
              {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `${d.soal.kd}`,
              },
            ],
          };
          // worksheet2.getCell("B29").value = `${ujian.nama}`;
          worksheet2.getCell(`G${(idx + 1) * 32 - 24}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };

          worksheet2.getCell(`B${(idx + 1) * 32 - 25}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Nama Sekolah`,
              },
            ],
          };
          worksheet2.getCell(
            `D${(idx + 1) * 32 - 25}`
          ).value = `${sekolah.nama}`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 24}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Kelas / Semester`,
              },
            ],
          };
          worksheet2.getCell(
            `D${(idx + 1) * 32 - 24}`
          ).value = `${ujian.tingkat}`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 23}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Mata Pelajaran`,
              },
            ],
          };
          worksheet2.getCell(`D${(idx + 1) * 32 - 23}`).value = `${
            ujian.toJSON().mataPelajaran.nama
          }`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 22}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Kompetensi Keahlian`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 25}`).value = ":";
          worksheet2.getCell(`C${(idx + 1) * 32 - 24}`).value = ":";
          worksheet2.getCell(`C${(idx + 1) * 32 - 23}`).value = ":";
          worksheet2.getCell(`C${(idx + 1) * 32 - 22}`).value = ":";

          worksheet2.getCell(
            `B${(idx + 1) * 32 - 21}`
          ).value = `Materi Pembelajaran`;
          worksheet2.getCell(
            `B${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.kd_konten_materi}`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 21}`
          ).value = `Indikator Pencapaian Kompetensi`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.akm_konteks_materi}`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 21}`).value = `Aspek (Level)`;
          worksheet2.getCell(
            `H${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.aspek_level}`;
          worksheet2.getCell(
            `B${(idx + 1) * 32 - 19}`
          ).value = `Indikator Soal`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 18}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `${d.soal.akm_konten_materi}`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 19}`).value = `Nomor`;
          worksheet2.getCell(`C${(idx + 1) * 32 - 17}`).value = `${idx + 1}`;
          worksheet2.getCell(
            `E${(idx + 1) * 32 - 19}`
          ).value = `Rumusan Butir Soal`;
          worksheet2.getCell(
            `E${(idx + 1) * 32 - 17}`
          ).value = `${d.soal.pertanyaan_ascii}`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 19}`).value = `BUKU`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 17}`).value = ``;
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 20}:H${(idx + 1) * 32 - 20}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 18}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 17}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 18}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 21}:H${(idx + 1) * 32 - 21}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    bold: true,
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 19}:H${(idx + 1) * 32 - 19}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    bold: true,
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: { wrapText: true },
                },
              },
            ],
          });

          worksheet2.getCell(`C${(idx + 1) * 32 - 15}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Kunci Jawaban`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 13}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 22,
                  color: { argb: "000000" },
                },
                text: `${d.soal.kj_pg}`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 13}`).alignment = {
            wrapText: true,
            vertical: "middle",
            horizontal: "center",
          };

          worksheet2.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 15}:E${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.getCell(`E${(idx + 1) * 32 - 15}`).value = `A`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 14}`).value = `B`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 13}`).value = `C`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 12}`).value = `D`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 11}`).value = `E`;
          worksheet2.addConditionalFormatting({
            ref: `F${(idx + 1) * 32 - 15}:F${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 9,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 15}`
          ).value = `${d.soal.jawaban_a_ascii}`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 14}`
          ).value = `${d.soal.jawaban_b_ascii}`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 13}`
          ).value = `${d.soal.jawaban_c_ascii}`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 12}`
          ).value = `${d.soal.jawaban_d_ascii}`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 11}`
          ).value = `${d.soal.jawaban_e_ascii}`;

          worksheet2.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 15}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                },
              },
            ],
          });

          worksheet2.getCell(`H${(idx + 1) * 32 - 17}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Gambar/Tabel/Grafik/Wacana`,
              },
            ],
          };
          worksheet2.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 17}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                },
              },
            ],
          });

          worksheet2.getCell(`B${(idx + 1) * 32 - 8}`).value = `Mengetahui :`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 7}`).value = `Kepala Sekolah`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 3}`).value = `${kepsek.nama}`;

          worksheet2.getCell(`H${(idx + 1) * 32 - 9}`).value = ``;
          worksheet2.getCell(
            `H${(idx + 1) * 32 - 7}`
          ).value = `Guru Mata Pelajaran`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 3}`).value = `${
            ujian.toJSON().mataPelajaran.user.nama
          }`;

          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 10}:B${(idx + 1) * 32 - 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    left: { style: "thin" },
                    // bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "right",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 10}:H${(idx + 1) * 32 - 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    // bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 3}:G${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
        }
      })
    );
    let worksheet3 = workbook.addWorksheet(`Kartu Soal Essay`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    //desain worksheet3
    worksheet3.getColumn("A").width = 3;
    worksheet3.getColumn("B").width = 28;
    worksheet3.getColumn("C").width = 1.5;
    worksheet3.getColumn("D").width = 7;
    worksheet3.getColumn("E").width = 5.5;
    worksheet3.getColumn("F").width = 33;
    worksheet3.getColumn("G").width = 42;
    worksheet3.getColumn("H").width = 31;
    // worksheet3.mergeCells("B2:H2");
    // worksheet3.mergeCells("B3:H3");
    // worksheet3.mergeCells("B4:H4");
    // worksheet3.mergeCells("B5:H5");
    // worksheet3.mergeCells("B6:H6");
    // worksheet3.mergeCells("D7:F7");
    // worksheet3.mergeCells("D8:F8");
    // worksheet3.mergeCells("D9:F9");
    // worksheet3.mergeCells("D10:F10");
    // worksheet3.mergeCells("G7:H7");
    // worksheet3.mergeCells("G8:H10");
    // worksheet3.mergeCells("B11:E11");
    // worksheet3.mergeCells("F11:G11");
    // worksheet3.mergeCells("B12:E12");
    // worksheet3.mergeCells("F12:G12");
    // worksheet3.mergeCells("C13:D14");
    // worksheet3.mergeCells("E13:G13");
    // worksheet3.mergeCells("B14:B21");
    // worksheet3.mergeCells("C15:D16");
    // worksheet3.mergeCells("C17:D21");
    // worksheet3.mergeCells("E17:G21");
    // worksheet3.mergeCells("E14:G16");
    // worksheet3.mergeCells("H16:H21");

    await Promise.all(
      ujian.toJSON().soalUjian.map(async (d, idx) => {
        if (`${d.soal.bentuk}` == "esai") {
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 30}`
          );
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 29}:H${(idx + 1) * 32 - 29}`
          );
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 28}:H${(idx + 1) * 32 - 28}`
          );
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 27}:H${(idx + 1) * 32 - 27}`
          );
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 26}:H${(idx + 1) * 32 - 26}`
          );
          worksheet3.mergeCells(
            `D${(idx + 1) * 32 - 25}:F${(idx + 1) * 32 - 25}`
          );
          worksheet3.mergeCells(
            `D${(idx + 1) * 32 - 24}:F${(idx + 1) * 32 - 24}`
          );
          worksheet3.mergeCells(
            `D${(idx + 1) * 32 - 23}:F${(idx + 1) * 32 - 23}`
          );
          worksheet3.mergeCells(
            `D${(idx + 1) * 32 - 22}:F${(idx + 1) * 32 - 22}`
          );
          worksheet3.mergeCells(
            `G${(idx + 1) * 32 - 25}:H${(idx + 1) * 32 - 25}`
          );
          worksheet3.mergeCells(
            `G${(idx + 1) * 32 - 24}:H${(idx + 1) * 32 - 22}`
          );
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 21}:E${(idx + 1) * 32 - 21}`
          ); //11
          worksheet3.mergeCells(
            `F${(idx + 1) * 32 - 21}:G${(idx + 1) * 32 - 21}`
          ); //11
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 20}:E${(idx + 1) * 32 - 20}`
          ); //12
          worksheet3.mergeCells(
            `F${(idx + 1) * 32 - 20}:G${(idx + 1) * 32 - 20}`
          ); //12
          worksheet3.mergeCells(
            `C${(idx + 1) * 32 - 19}:D${(idx + 1) * 32 - 18}`
          ); //1314
          worksheet3.mergeCells(
            `E${(idx + 1) * 32 - 19}:G${(idx + 1) * 32 - 19}`
          ); //13
          worksheet3.mergeCells(
            `B${(idx + 1) * 32 - 18}:B${(idx + 1) * 32 - 11}`
          ); //1421
          worksheet3.mergeCells(
            `C${(idx + 1) * 32 - 17}:D${(idx + 1) * 32 - 16}`
          ); //1516
          worksheet3.mergeCells(
            `C${(idx + 1) * 32 - 15}:D${(idx + 1) * 32 - 11}`
          ); //1718
          // worksheet3.mergeCells(
          //   `C${(idx + 1) * 32 - 13}:D${(idx + 1) * 32 - 11}`
          // ); //1921
          worksheet3.mergeCells(
            `E${(idx + 1) * 32 - 15}:G${(idx + 1) * 32 - 11}`
          ); //1718
          worksheet3.mergeCells(
            `E${(idx + 1) * 32 - 18}:G${(idx + 1) * 32 - 16}`
          ); //1416
          worksheet3.mergeCells(
            `H${(idx + 1) * 32 - 16}:H${(idx + 1) * 32 - 11}`
          ); //1621
          // worksheet3.mergeCells(
          //   `F${(idx + 1) * 32 - 15}:G${(idx + 1) * 32 - 15}`
          // ); //1717
          // worksheet3.mergeCells(
          //   `F${(idx + 1) * 32 - 14}:G${(idx + 1) * 32 - 14}`
          // ); //18
          // worksheet3.mergeCells(
          //   `F${(idx + 1) * 32 - 13}:G${(idx + 1) * 32 - 13}`
          // ); //19
          // worksheet3.mergeCells(
          //   `F${(idx + 1) * 32 - 12}:G${(idx + 1) * 32 - 12}`
          // ); //20
          // worksheet3.mergeCells(
          //   `F${(idx + 1) * 32 - 11}:G${(idx + 1) * 32 - 11}`
          // ); //21

          worksheet3.getCell(`B${(idx + 1) * 32 - 30}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi}`,
              },
            ],
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 30}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 29}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 20,
                  bold: true,
                },
                text: "CABANG DINAS PENDIDIKAN",
              },
            ],
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 29}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 28}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 14,
                  bold: true,
                },
                text: `${ta.tahun} `,
              },
            ],
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 28}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };

          worksheet3.getCell(`B${(idx + 1) * 32 - 26}`).value = {
            richText: [
              {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 22,
                  color: { argb: "000000" },
                },
                text: `${ujian.toJSON().tipe_format}`,
              },
            ],
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 26}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet3.getCell(`B${(idx + 1) * 32 - 26}`).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "ADD8E6" },
            bgColor: { argb: "ADD8E6" },
          };
          worksheet3.getCell(`G${(idx + 1) * 32 - 25}`).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "E0FFFF" },
            bgColor: { argb: "E0FFFF" },
          };
          worksheet3.getCell(`G${(idx + 1) * 32 - 25}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Kompetensi Dasar`,
              },
            ],
          };
          // worksheet3.getCell("B29").value = `${ujian.nama}`;
          worksheet3.getCell(`G${(idx + 1) * 32 - 25}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet3.getCell(`G${(idx + 1) * 32 - 24}`).value = {
            richText: [
              {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `${d.soal.kd}`,
              },
            ],
          };
          // worksheet3.getCell("B29").value = `${ujian.nama}`;
          worksheet3.getCell(`G${(idx + 1) * 32 - 24}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };

          worksheet3.getCell(`B${(idx + 1) * 32 - 25}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Nama Sekolah`,
              },
            ],
          };
          worksheet3.getCell(
            `D${(idx + 1) * 32 - 25}`
          ).value = `${sekolah.nama}`;
          worksheet3.getCell(`B${(idx + 1) * 32 - 24}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Kelas / Semester`,
              },
            ],
          };
          worksheet3.getCell(
            `D${(idx + 1) * 32 - 24}`
          ).value = `${ujian.tingkat}`;
          worksheet3.getCell(`B${(idx + 1) * 32 - 23}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Mata Pelajaran`,
              },
            ],
          };
          worksheet3.getCell(`D${(idx + 1) * 32 - 23}`).value = `${
            ujian.toJSON().mataPelajaran.nama
          }`;
          worksheet3.getCell(`B${(idx + 1) * 32 - 22}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Kompetensi Keahlian`,
              },
            ],
          };
          worksheet3.getCell(`C${(idx + 1) * 32 - 25}`).value = ":";
          worksheet3.getCell(`C${(idx + 1) * 32 - 24}`).value = ":";
          worksheet3.getCell(`C${(idx + 1) * 32 - 23}`).value = ":";
          worksheet3.getCell(`C${(idx + 1) * 32 - 22}`).value = ":";

          worksheet3.getCell(
            `B${(idx + 1) * 32 - 21}`
          ).value = `Materi Pembelajaran`;
          worksheet3.getCell(
            `B${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.kd_konten_materi}`;
          worksheet3.getCell(
            `F${(idx + 1) * 32 - 21}`
          ).value = `Indikator Pencapaian Kompetensi`;
          worksheet3.getCell(
            `F${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.akm_konteks_materi}`;
          worksheet3.getCell(`H${(idx + 1) * 32 - 21}`).value = `Aspek (Level)`;
          worksheet3.getCell(
            `H${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.level_kognitif}`;
          worksheet3.getCell(
            `B${(idx + 1) * 32 - 19}`
          ).value = `Indikator Soal`;
          worksheet3.getCell(`B${(idx + 1) * 32 - 18}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `${d.soal.akm_konten_materi}`,
              },
            ],
          };
          worksheet3.getCell(`C${(idx + 1) * 32 - 19}`).value = `Nomor`;
          worksheet3.getCell(`C${(idx + 1) * 32 - 17}`).value = `${idx + 1}`;
          worksheet3.getCell(
            `E${(idx + 1) * 32 - 19}`
          ).value = `Rumusan Butir Soal`;
          worksheet3.getCell(
            `E${(idx + 1) * 32 - 17}`
          ).value = `${d.soal.pertanyaan_ascii}`;
          worksheet3.getCell(`H${(idx + 1) * 32 - 19}`).value = `BUKU`;
          worksheet3.getCell(`H${(idx + 1) * 32 - 17}`).value = ``;
          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 20}:H${(idx + 1) * 32 - 20}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 18}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 17}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 18}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 21}:H${(idx + 1) * 32 - 21}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    bold: true,
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 19}:H${(idx + 1) * 32 - 19}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    bold: true,
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: { wrapText: true },
                },
              },
            ],
          });

          worksheet3.getCell(`C${(idx + 1) * 32 - 15}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Kunci Jawaban`,
              },
            ],
          };

          worksheet3.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 15}:E${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 15}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 9,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet3.getCell(
            `F${(idx + 1) * 32 - 15}`
          ).value = `${d.soal.kj_uraian}`;

          worksheet3.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 15}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                },
              },
            ],
          });

          worksheet3.getCell(`H${(idx + 1) * 32 - 17}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Gambar/Tabel/Grafik/Wacana`,
              },
            ],
          };
          worksheet3.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 17}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                },
              },
            ],
          });

          worksheet3.getCell(`B${(idx + 1) * 32 - 8}`).value = `Mengetahui :`;
          worksheet3.getCell(`B${(idx + 1) * 32 - 7}`).value = `Kepala Sekolah`;
          worksheet3.getCell(`B${(idx + 1) * 32 - 3}`).value = `${kepsek.nama}`;

          worksheet3.getCell(`H${(idx + 1) * 32 - 9}`).value = ``;
          worksheet3.getCell(
            `H${(idx + 1) * 32 - 7}`
          ).value = `Guru Mata Pelajaran`;
          worksheet3.getCell(`H${(idx + 1) * 32 - 3}`).value = `${
            ujian.toJSON().mataPelajaran.user.nama
          }`;

          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 10}:B${(idx + 1) * 32 - 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    left: { style: "thin" },
                    // bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "right",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 10}:H${(idx + 1) * 32 - 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    // bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 3}:G${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet3.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
        }
      })
    );

    let worksheet4 = workbook.addWorksheet(`Rumusan Soal`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });
    worksheet4.getColumn("A").width = 4;
    worksheet4.getColumn("B").width = 32;
    worksheet4.getColumn("C").width = 84;
    worksheet4.getColumn("D").width = 11;
    worksheet4.getColumn("E").width = 11;
    worksheet4.getColumn("F").width = 11;
    worksheet4.getColumn("G").width = 11;
    worksheet4.getColumn("H").width = 11;
    worksheet4.getColumn("I").width = 11;

    // worksheet4.getColumn("A").width = 4;
    // worksheet4.getColumn("B").width = 32;
    // worksheet4.getColumn("C").width = 84;
    // worksheet4.getColumn("D").width = 11;
    // worksheet4.getColumn("E").width = 11;
    // worksheet4.getColumn("F").width = 11;
    // worksheet4.getColumn("G").width = 11;
    // worksheet4.getColumn("H").width = 11;
    // worksheet4.getColumn("I").width = 11;

    // looping worksheet4
    await Promise.all(
      ujian.toJSON().soalUjian.map(async (e, idx) => {
        worksheet4.getRow(6).values = [
          "NO",
          "INDIKATOR SOAL",
          "RUMUSAN BUTIR SOAL",
          "PILIHAN JAWABAN",
          "",
          "",
          "",
          "",
          "KUNCI JAWABAN",
        ];

        worksheet4.getRow(7).values = ["", "", "", "A", "B", "C", "D", "E", ""];

        worksheet4.columns = [
          { key: "No" },
          { key: "INDIKATOR_SOAL" },
          { key: "RUMUSAN_BUTIR_SOAL" },
          { key: "A" },
          { key: "B" },
          { key: "C" },
          { key: "D" },
          { key: "E" },
          { key: "KUNCI_JAWABAN" },
        ];

        // Add row using key mapping to columns
        let row = worksheet4.addRow({
          No: `${idx + 1}`,
          INDIKATOR_SOAL: e.soal ? e.soal.akm_konten_materi : "-",
          RUMUSAN_BUTIR_SOAL: e.soal ? e.soal.pertanyaan_ascii : "-",
          A: e.soal ? e.soal.jawaban_a_ascii : "-",
          B: e.soal ? e.soal.jawaban_b_ascii : "-",
          C: e.soal ? e.soal.jawaban_c_ascii : "-",
          D: e.soal ? e.soal.jawaban_d_ascii : "-",
          E: e.soal ? e.soal.jawaban_e_ascii : "-",
          KUNCI_JAWABAN: e.soal ? e.soal.kj_pg : "-",
        });
        // })
        // );
      })
    );
    worksheet4.addImage(imageId1, {
      tl: { col: 1, row: 0.5 },
      ext: { width: 100, height: 60 },
    });

    // desain Worksheet 4
    // worksheet4.getColumn("A").width = 4;
    // worksheet4.getColumn("B").width = 32;
    // worksheet4.getColumn("C").width = 84;
    // worksheet4.getColumn("D").width = 11;
    // worksheet4.getColumn("E").width = 11;
    // worksheet4.getColumn("F").width = 11;
    // worksheet4.getColumn("G").width = 11;
    // worksheet4.getColumn("H").width = 11;
    // worksheet4.getColumn("I").width = 11;
    worksheet4.mergeCells("A1:I1");
    worksheet4.mergeCells("A2:I2");
    worksheet4.mergeCells("A3:I3");
    worksheet4.mergeCells("A4:I4");
    worksheet4.mergeCells("A5:I5");
    worksheet4.mergeCells("A6:A7");
    worksheet4.mergeCells("B6:B7");
    worksheet4.mergeCells("C6:C7");
    worksheet4.mergeCells("D6:H6");
    worksheet4.mergeCells("I6:I7");
    worksheet4.addConditionalFormatting({
      ref: "C8:I57",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            alignment: {
              wrapText: true,
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet4.addConditionalFormatting({
      ref: "A1:A4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              // top: { style: "thin" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
            alignment: {
              wrapText: true,
              vertical: "middle",
              horizontal: "center",
            },
            font: {
              name: "Stencil",
              family: 4,
              size: 18,
              color: { argb: "000000" },
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "32CD32", fgColor: { argb: "32CD32" } },
            },
          },
        },
      ],
    });
    worksheet4.getCell("A1").value = `RUMUSAN BUTIR SOAL`;
    worksheet4.getCell("A2").value = `${ujian.toJSON().tipe_format}`;
    worksheet4.getCell("A3").value = `${sekolah.nama}`;
    worksheet4.getCell("A4").value = `${ta.tahun}`;
    worksheet4.getCell("A5").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "000000" },
      bgColor: { argb: "000000" },
    };
    worksheet4.addConditionalFormatting({
      ref: "A6:I7",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            font: {
              name: "Calibri",
              family: 4,
              size: 11,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet4.addConditionalFormatting({
      ref: "A8:I57",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet4.getCell("B60").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet4.getCell("B61").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "KEPALA SEKOLAH",
        },
      ],
    };
    worksheet4.getCell("B66").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${kepsek.nama}`,
        },
      ],
    };

    worksheet4.getCell("G60").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${sekolah.kabupaten},`,
        },
      ],
    };
    worksheet4.getCell("G61").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "GURU MATA PELAJARAN",
        },
      ],
    };
    worksheet4.getCell("G66").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };

    // worksheet4.getColumn("A").width = 4;
    // worksheet4.getColumn("B").width = 32;
    // worksheet4.getColumn("C").width = 84;
    // worksheet4.getColumn("D").width = 11;
    // worksheet4.getColumn("E").width = 11;
    // worksheet4.getColumn("F").width = 11;
    // worksheet4.getColumn("G").width = 11;
    // worksheet4.getColumn("H").width = 11;
    // worksheet4.getColumn("I").width = 11;

    let worksheet5 = workbook.addWorksheet(`Naskah Soal`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    worksheet5.mergeCells("A1:L1");
    worksheet5.mergeCells("A2:L2");
    worksheet5.mergeCells("A3:L3");
    worksheet5.mergeCells("A4:L4");
    worksheet5.mergeCells("A21:L21");
    worksheet5.mergeCells("A11:L11");
    worksheet5.mergeCells("J6:L6");
    worksheet5.getColumn("A").width = 3;
    worksheet5.getColumn("B").width = 4.3;
    worksheet5.getColumn("C").width = 3;
    worksheet5.getColumn("D").width = 8.5;
    worksheet5.getColumn("E").width = 7.5;
    worksheet5.getColumn("F").width = 10;
    worksheet5.getColumn("G").width = 1.5;
    worksheet5.getColumn("H").width = 8.5;
    worksheet5.getColumn("I").width = 8.5;
    worksheet5.getColumn("J").width = 8.5;
    worksheet5.getColumn("K").width = 8.5;
    worksheet5.getColumn("L").width = 12;

    worksheet5.getCell("A1").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 14,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.toJSON().tipe_format}`,
        },
      ],
    };
    worksheet5.getCell("A2").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 14,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${sekolah.toJSON().tingkat_format}`,
        },
      ],
    };

    worksheet5.getCell("A3").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 16,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${sekolah.nama}`,
        },
      ],
    };
    worksheet5.getCell("A4").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 12,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ta.tahun}`,
        },
      ],
    };
    worksheet5.addConditionalFormatting({
      ref: "A5:L5",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "double" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "A1:A4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet5.getCell("G6").value = ":";
    worksheet5.getCell("G7").value = ":";
    worksheet5.getCell("G8").value = ":";
    worksheet5.getCell("G9").value = ":";

    worksheet5.getCell("E6").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Mata Pelajaran`,
        },
      ],
    };
    worksheet5.getCell("H6").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.toJSON().mataPelajaran.nama}`,
        },
      ],
    };
    worksheet5.getCell("J6").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            // bold: true,
          },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };
    worksheet5.getCell("J6").alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    worksheet5.getCell("E7").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Kelas/Semester`,
        },
      ],
    };
    worksheet5.getCell("H7").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.tingkat}/${tasemester.semester}`,
        },
      ],
    };
    worksheet5.getCell("E8").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Hari/Tanggal`,
        },
      ],
    };
    worksheet5.getCell("E9").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Jumlah Soal/Waktu`,
        },
      ],
    };
    worksheet5.getCell("H9").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.TotalUjian} soal`,
        },
      ],
    };
    worksheet5.getCell("A11").value = {
      richText: [
        {
          font: {
            name: "Arial",
            family: 4,
            size: 10,
            color: { argb: "000000" },
            bold: true,
            italic: true,
          },
          text: `PETUNJUK`,
        },
      ],
    };
    worksheet5.addConditionalFormatting({
      ref: "A11:L11",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              // bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "A11:A20",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              // top: { style: "thin" },
              left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "L11:L20",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              // top: { style: "thin" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    worksheet5.getCell("A12").value = "1.";
    worksheet5.getCell("B12").value =
      "a. Tulislah dengan jelas; Nama, Nomor Peserta, Kelas, pada lembar jawaban yang sudah disediakan.";
    worksheet5.getCell("B13").value =
      "b. Jawaban dikerjakan dengan cara menghitamkan bulatan kecil sesuai dengan pilihan yang dianggap benar.";
    worksheet5.getCell("B14").value =
      "c. Hapuslah jawaban yang dianggap keliru jika anda ingin menggantinya.";
    worksheet5.getCell("B15").value =
      "d. Lembar Jawaban tidak boleh kotor, basah atau rusak.";
    worksheet5.getCell("A16").value = "2.";
    worksheet5.getCell("B16").value =
      "Bacalah soal secara teliti sebelum anda menjawabnya.";
    worksheet5.getCell("A17").value = "3.";
    worksheet5.getCell("B17").value =
      "Dahulukan menjawab soal-soal yang dianggap mudah.";
    worksheet5.getCell("A18").value = "4.";
    worksheet5.getCell("B18").value =
      "Mintalah kertas buram kepada pengawas jika diperlukan.";
    worksheet5.getCell("A19").value = "5.";
    worksheet5.getCell("B19").value =
      "Periksa kembali jawaban anda sebelum menyerahkannya kepada pengawas.";
    worksheet5.getCell("A20").value = "6.";
    worksheet5.getCell("B20").value = "Berdoalah sebelum mengerjakan soal.";
    worksheet5.getCell("A21").value =
      "PILIHLAH SALAH SATU JAWABAN YANG BENAR PADA HURUF A, B, C, D, ATAU D !";
    worksheet5.addConditionalFormatting({
      ref: "A12:B20",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 8,
              color: { argb: "000000" },
              // bold: true,
              // italic: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "A21:L21",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            font: {
              name: "Arial",
              family: 4,
              size: 10,
              color: { argb: "000000" },
              bold: true,
              // italic: true,
            },
            border: {
              top: { style: "thin" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
          },
        },
      ],
    });

    // looping worksheet 5
    worksheet5.addImage(imageId1, {
      tl: { col: 1, row: 0.5 },
      ext: { width: 100, height: 60 },
    });
    await Promise.all(
      ujian.toJSON().soalUjian.map(async (e, idx) => {
        // worksheet5.mergeCells(`B${(idx + 1) * 7 + 15}:L${(idx + 1) * 7 + 15}`);
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 15}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `C${(idx + 1) * 7 + 16}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 17}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 18}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 19}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        // , pertanyaan, a, b, c, d,
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 20}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });

        // await Promise.all(
        //   d.soal.map(async (e, idx) => {
        // add column headers
        // pertanyaan = 0;pertanyaan > 22;pertanyaan + 7;a = 0;a > 23;a + 7;b = 0;b > 24;b + 7;c = 0;c > 25;c + 7;d = 0;d > 26;d + 7;e = 0;e > 27;
        worksheet5.getRow(`${(idx + 1) * 7 + 15}`).values = [
          `${idx + 1}`,
          `${e.soal ? e.soal.pertanyaan_ascii : "-"}`,
        ];

        worksheet5.getRow(`${(idx + 1) * 7 + 16}`).values = [
          "",
          "A",
          `${e.soal ? e.soal.jawaban_a_ascii : "-"}`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 17}`).values = [
          "",
          "B",
          `${e.soal ? e.soal.jawaban_b_ascii : "-"}`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 18}`).values = [
          "",
          "C",
          `${e.soal ? e.soal.jawaban_c_ascii : "-"}`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 19}`).values = [
          "",
          "D",
          `${e.soal ? e.soal.jawaban_d_ascii : "-"}`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 20}`).values = [
          "",
          "E",
          `${e.soal ? e.soal.jawaban_e_ascii : "-"}`,
        ];

        worksheet5.mergeCells(`B${(idx + 1) * 7 + 15}:L${(idx + 1) * 7 + 15}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 16}:L${(idx + 1) * 7 + 16}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 17}:L${(idx + 1) * 7 + 17}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 18}:L${(idx + 1) * 7 + 18}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 19}:L${(idx + 1) * 7 + 19}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 20}:L${(idx + 1) * 7 + 20}`);
      })
    );

    // return ujian.toJSON().soalUjian.soal;

    let namaFile = `/uploads/rekap-Kartu-Ujian.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async daftarsekolah({ response, request }) {
    const sekolah = await MSekolah.query()
      .select("id", "nama", "page", "logo")
      .fetch();

    return sekolah;
  }

  async ubahtipedata({ response, request }) {
    const post = await MPost.query().fetch();
    // console.log(`${post.judul}`);

    // let kontenisi = post.konten
    //   ? Buffer(konten, "base64").toString("ascii").replace("b&", "..........")
    //   : "";

    // await Promise.all(
    //   post.toJSON().map(async (d) => {
    //     d.konten = post.konten
    //       ? Buffer(konten, "base64")
    //           .toString("ascii")
    //           .replace("b&", "..........")
    //       : "";
    //     return d;
    //   })
    // );

    // const industri = await MIndustri.query().where({ id: industri_id }).update({
    //   nama,
    //   klasifikasi,
    //   jumlah_karyawan,
    //   tautan,
    //   galeri,
    //   deskripsi,
    //   tahun_kerjasama,
    // });

    return post.konten
      ? Buffer(konten, "base64").toString("ascii").replace("b&", "..........")
      : "";
  }

  async getBukuInduk({ response, request, auth }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const predikat = await MPredikatNilai.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rombel = await MRombel.query()
      .withCount("materiRombel as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    return response.ok({
      predikat: predikat,
      rombel: rombel,
    });
  }

  async detailBukuInduk({ response, request, auth, params: { rombel_id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const rombel = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.with("user");
      })
      .with("jurusan")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ id: rombel_id })
      .andWhere({ dihapus: 0 })
      .first();

    return response.ok({
      rombel: rombel,
    });
  }
  async detailBukuIndukSiswa({
    response,
    request,
    auth,
    params: { rombel_id },
    params: { user_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await Mta.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ aktif: 1 })
      .andWhere({ dihapus: 0 })
      .first();

    const tanggalDistinct = await Database.raw(
      "SELECT DISTINCT DATE_FORMAT(created_at, '%Y-%m-%d') as tanggalDistinct from m_absen WHERE created_at BETWEEN ? AND  ?",
      [`${ta.tanggal_awal}`, `${ta.tanggal_akhir}`]
    );

    const siswa = await User.query()
      .with("profil")
      .with("keteranganRapor")
      .with("keteranganPkl")
      .with("raporEkskul")
      .with("prestasi")
      .with("sikap", (builder) => {
        builder
          .with("ditingkatkanSosial")
          .with("ditunjukkanSosial")
          .with("ditingkatkanSpiritual")
          .with("ditunjukkanSpiritual");
      })
      .where({ id: user_id })
      .andWhere({ dihapus: 0 })
      .first();

    const nilai = await TkRekapNilai.query()
      .with("rekapRombel", (builder) => {
        builder.with("rekap").where({ dihapus: 0 });
      })
      .where({ m_user_id: user_id })
      .fetch();

    const materiRombel = await TkMateriRombel.query()
      .with("materi", (builder) => {
        builder.with("mataPelajaran");
      })
      .where({ m_rombel_id: rombel_id })
      .fetch();

    const predikat = await MPredikatNilai.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rombel = await MRombel.query()
      .with("user")
      .where({ id: rombel_id })
      .first();

    const ekskul = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder.where({ m_user_id: user_id });
      })
      .where({ kelompok: "ekskul" })
      .andWhere({ dihapus: 0 })
      .fetch();

    const totalHadir = await MAbsen.query()
      .with("user")
      .whereBetween("created_at", [`${ta.tanggal_awal}`, `${ta.tanggal_akhir}`])
      .andWhere({ keterangan: "hadir" })
      .andWhere({ m_user_id: user_id })
      .count("* as total");
    const totalSakit = await MAbsen.query()
      .with("user")
      .whereBetween("created_at", [`${ta.tanggal_awal}`, `${ta.tanggal_akhir}`])
      .andWhere({ keterangan: "sakit" })
      .andWhere({ m_user_id: user_id })
      .count("* as total");
    const totalIzin = await MAbsen.query()
      .with("user")
      .whereBetween("created_at", [`${ta.tanggal_awal}`, `${ta.tanggal_akhir}`])
      .andWhere({ keterangan: "izin" })
      .andWhere({ m_user_id: user_id })
      .count("* as total");
    const totalAlpa =
      user_id.length -
      (totalHadir[0].total + totalSakit[0].total + totalIzin[0].total);

    return response.ok({
      siswa: siswa,
      ta: ta,
      nilai: nilai,
      sekolah: sekolah,
      materiRombel: materiRombel,
      predikat: predikat,
      rombel: rombel,
      ekskul: ekskul,
      totalHadir: totalHadir,
      totalSakit: totalSakit,
      totalIzin: totalIzin,
      totalAlpa: totalAlpa,
      tanggalDistinct: tanggalDistinct,
    });
  }

  async detailBukuIndukRapor({
    response,
    request,
    auth,
    params: { rombel_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const rombel = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ id: rombel_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const materiRombel = await TkMateriRombel.query()
      .with("materi", (builder) => {
        builder.with("mataPelajaran");
      })
      .where({ m_rombel_id: rombel_id })
      .fetch();

    return response.ok({
      rombel: rombel,
      materiRombel: materiRombel,
    });
  }

  async postPredikat({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      predikat,
      bb_pengetahuan,
      ba_pengetahuan,
      bb_keterampilan,
      ba_keterampilan,
      sikap,
    } = request.post();

    const predikatNilai = await MPredikatNilai.create({
      predikat,
      bb_pengetahuan,
      ba_pengetahuan,
      bb_keterampilan,
      ba_keterampilan,
      sikap,
      m_sekolah_id: sekolah.id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPredikat({ response, request, auth, params: { predikat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      predikat,
      bb_pengetahuan,
      ba_pengetahuan,
      bb_keterampilan,
      ba_keterampilan,
      sikap,
    } = request.post();

    const predikatNilai = await MPredikatNilai.query()
      .where({ id: predikat_id })
      .update({
        predikat,
        bb_pengetahuan,
        ba_pengetahuan,
        bb_keterampilan,
        ba_keterampilan,
        sikap,
        dihapus: 0,
      });

    if (!predikatNilai) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePredikat({ response, request, auth, params: { predikat_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const predikat = await MPredikatNilai.query()
      .where({ id: predikat_id })
      .update({
        dihapus: 1,
      });

    if (!predikat) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  //rapor service

  // async detailRombelRapor({ response, request, auth, params: { user_id } }) {
  //   const user = await auth.getUser();

  //   const domain = request.headers().origin;

  //   const sekolah = await this.getSekolahByDomain(domain);

  //   if (sekolah == "404") {
  //     return response.notFound({ message: "Sekolah belum terdaftar" });
  //   }
  //   const rekap = await MRekap.query()
  //     .with("rekaprombel", (builder) => {
  //       builder.with("rekapnilai", (builder) => {
  //         builder.where({ m_user_id: user_id });
  //       });
  //     })
  //     .where({ dihapus: 0 })
  //     .fetch();
  //   return response.ok({
  //     predikat: predikat,
  //   });
  // }

  //Tambah Ekskul
  async postRaporEkskul({
    response,
    request,
    auth,
    params: { rombel_id },
    params: { user_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { keterangan } = request.post();

    const raporEkskul = await MRaporEkskul.create({
      m_rombel_id: rombel_id,
      keterangan,
      status: 1,
      m_user_id: user_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putRaporEkskul({ response, request, auth, params: { ekskul_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { keterangan } = request.post();

    const raporEksul = await MRaporEksul.query()
      .where({ id: ekskul_id })
      .update({
        keterangan,
        dihapus: 0,
      });

    if (!raporEksul) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postKeteranganRapor({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { catatan, kelulusan } = request.post();

    const keteranganRapor = await MKeteranganRapor.create({
      catatan,
      kelulusan,
      m_user_id: user_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKeteranganRapor({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { catatan, kelulusan } = request.post();

    const keteranganRapor = await MKeteranganRapor.query()
      .where({ m_user_id: user_id })
      .update({
        catatan,
        kelulusan,
        dihapus: 0,
      });

    if (!keteranganRapor) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteKeteranganRapor({
    response,
    request,
    auth,
    params: { user_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const keteranganrapor = await MKeteranganRapor.query()
      .where({ id: user_id })
      .update({
        dihapus: 1,
      });

    if (!keteranganrapor) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postKeteranganPkl({ response, request, auth, params: { user_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { namamitra, tanggal_mulai, tanggal_selesai, keterangan } =
      request.post();

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const keteranganPkl = await MKeteranganPkl.create({
      namamitra,
      tanggal_mulai,
      tanggal_selesai,
      keterangan,
      lamanya: lama,
      m_user_id: user_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putKeteranganPkl({ response, request, auth, params: { pkl_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { namamitra, tanggal_mulai, tanggal_selesai, keterangan } =
      request.post();

    const date1 = moment(`${tanggal_mulai}`);
    const date2 = moment(`${tanggal_selesai}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);
    const keteranganPkl = await MKeteranganPkl.query()
      .where({ id: pkl_id })
      .update({
        namamitra,
        tanggal_mulai,
        tanggal_selesai,
        lamanya: lama,
        keterangan,
        dihapus: 0,
      });

    if (!keteranganPkl) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
  async deleteKeteranganPkl({ response, request, auth, params: { pkl_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const keteranganpkl = await MKeteranganPkl.query()
      .where({ id: pkl_id })
      .update({
        dihapus: 1,
      });

    if (!keteranganpkl) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async downloadGelombangPPDB({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const gelombang = await MGelombangPpdb.query()
      .with("pendaftar", (builder) => {
        builder
          .with("user", (builder) => {
            builder.with("profil");
          })
          .with("jurusan1")
          .with("jurusan2")
          .with("jurusan3")
          .with("jurusan4")
          .with("jurusan5");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    // return gelombang;

    // return gelombang;
    // const monthNames = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    // const dateObj = new Date();
    // const month = monthNames[dateObj.getMonth()];
    // const day = String(dateObj.getDate()).padStart(2, "0");
    // const year = dateObj.getFullYear();
    // const output = dat + "," + month + "," + year;
    let workbook = new Excel.Workbook();

    await Promise.all(
      gelombang.toJSON().map(async (d, idx) => {
        let worksheet = workbook.addWorksheet(`${idx + 1}.${d.nama}`);
        worksheet.getCell("A1").value = d.nama;
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.getCell("A3").value = ta.tahun;
        worksheet.getCell("A5").value = `dibuka : ${d.waktuawal}`;
        worksheet.getCell("A6").value = `ditutup : ${d.waktuakhir}`;
        worksheet.getCell("A7").value = `Keterangan : ${d.keterangan}`;
        worksheet.getCell(
          "A9"
        ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;

        worksheet.getColumn("A").width = 28;
        worksheet.getColumn("B").width = 14;
        worksheet.getColumn("C").width = 8;
        worksheet.getColumn("D").width = 8.5;
        worksheet.getColumn("E").width = 9;
        worksheet.getColumn("F").width = 14;
        worksheet.getColumn("G").width = 10;
        worksheet.getColumn("H").width = 8;
        worksheet.getColumn("I").width = 11;

        await Promise.all(
          d.pendaftar.map(async (anggota, idx) => {
            // add column headers
            if (anggota.dataJurusan == true) {
              worksheet.getRow(10).values = [
                "No",
                "Nama",
                "Whatsapp",
                "NIPD",
                "Gender",
                "NIPD",
                "Tempat Lahir",
                "Tanggal Lahir",
                "Agama",
                "Alamat",
                "Kelurahan",
                "Kecamatan",
                "Kode Pos",
                "Email",
                "Data Ayah",
                "",
                "Data Ibu",
                "",
                "Data Wali",
                "",
                "Kebutuhan Khusus",
                "Sekolah Asal",
                "Berat Badan",
                "Tinggi Badan",
                "Bank",
                "Norek",
                "Nama Pemilih",
                "Nominal",
                "Bukti",
                "Diverifikasi",
                "Jurusan1",
                "Jurusan2",
                "Jurusan3",
                "Jurusan4",
                "Jurusan5",
              ];
              worksheet.getRow(11).values = [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "Nama",
                "Pekerjaan",
                "Nama",
                "Pekerjaan",
                "Nama",
                "Pekerjaan",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
              ];
              worksheet.columns = [
                { key: "no" },
                { key: "user" },
                { key: "whatsapp" },
                { key: "nipd" },
                { key: "gender" },
                { key: "nisn" },
                { key: "tempat_lahir" },
                { key: "tanggal_lahir" },
                { key: "agama" },
                { key: "alamat" },
                { key: "kelurahan" },
                { key: "kecamatan" },
                { key: "kode_pos" },
                { key: "email" },
                { key: "nama_ayah" },
                { key: "pekerjaan_ayah" },
                { key: "nama_ibu" },
                { key: "pekerjaan_ibu" },
                { key: "nama_wali" },
                { key: "pekerjaan_wali" },
                { key: "kebutuhan_khusus" },
                { key: "sekolah_asal" },
                { key: "berat_badan" },
                { key: "tinggi_badan" },
                { key: "bank" },
                { key: "norek" },
                { key: "nama_pemilik" },
                { key: "nominal" },
                { key: "bukti" },
                { key: "diverifikasi" },
                { key: "jurusan1" },
                { key: "jurusan2" },
                { key: "jurusan3" },
                { key: "jurusan4" },
                { key: "jurusan5" },
              ];

              // Add row using key mapping to columns
              let row = worksheet.addRow({
                no: `${idx + 1}`,
                user: anggota.user ? anggota.user.nama : "-",
                whatsapp: anggota.user ? anggota.user.whatsapp : "-",
                nipd: anggota.user.profil ? anggota.user.profil.nipd : "-",
                gender: anggota.user ? anggota.user.gender : "-",
                nisn: anggota.user.profil ? anggota.user.profil.nisn : "-",
                tempat_lahir: anggota.user.profil
                  ? anggota.user.profil.tempat_lahir
                  : "-",
                tanggal_lahir: anggota.user.profil
                  ? anggota.user.profil.tanggal_lahir
                  : "-",
                agama: anggota.user.profil ? anggota.user.profil.agama : "-",
                alamat: anggota.user.profil ? anggota.user.profil.alamat : "-",
                kelurahan: anggota.user.profil
                  ? anggota.user.profil.regency_id
                  : "-",
                kecamatan: anggota.user.profil
                  ? anggota.user.profil.district_id
                  : "-",
                kode_pos: anggota.user.profil
                  ? anggota.user.profil.kodepos
                  : "-",
                email: anggota.user.profil ? anggota.user.email : "-",
                nama_ayah: anggota.user.profil
                  ? anggota.user.profil.nama_ayah
                  : "-",
                pekerjaan_ayah: anggota.user.profil
                  ? anggota.user.profil.pekerjaan_ayah
                  : "-",
                nama_ibu: anggota.user.profil
                  ? anggota.user.profil.nama_ibu
                  : "-",
                pekerjaan_ibu: anggota.user.profil
                  ? anggota.user.profil.pekerjaan_ibu
                  : "-",
                nama_wali: anggota.user.profil
                  ? anggota.user.profil.nama_wali
                  : "-",
                pekerjaan_wali: anggota.user.profil
                  ? anggota.user.profil.pekerjaan_wali
                  : "-",
                kebutuhan_khusus: anggota.user.profil
                  ? anggota.user.profil.disabilitas
                  : "-",
                sekolah_asal: anggota.user.profil
                  ? anggota.user.profil.asal_sekolah
                  : "-",
                berat_badan: anggota.user.profil ? anggota.user.profil.bb : "-",
                tinggi_badan: anggota.user.profil
                  ? anggota.user.profil.tb
                  : "-",
                bank: anggota ? anggota.bank : "-",
                norek: anggota ? anggota.norek : "-",
                nama_pemilik: anggota ? anggota.nama_pemilik : "-",
                nominal: anggota ? anggota.nominal : "-",
                bukti: anggota ? anggota.bukti : "-",
                diverifikasi: anggota ? anggota.diverifikasi : "-",
                jurusan1: anggota.jurusan1 ? anggota.jurusan1.nama : "-",
                jurusan2: anggota.jurusan2 ? anggota.jurusan2.nama : "-",
                jurusan3: anggota.jurusan3 ? anggota.jurusan3.nama : "-",
                jurusan4: anggota.jurusan4 ? anggota.jurusan4.nama : "-",
                jurusan5: anggota.jurusan5 ? anggota.jurusan5.nama : "-",
              });

              worksheet.addConditionalFormatting({
                ref: `A10:AI11`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 14,
                        bold: true,
                      },
                      fill: {
                        type: "pattern",
                        pattern: "solid",
                        bgColor: {
                          argb: "C0C0C0",
                          fgColor: { argb: "C0C0C0" },
                        },
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 11}:AI${(idx + 1) * 1 + 11}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                    },
                  },
                ],
              });
            } else {
              worksheet.getRow(10).values = [
                "No",
                "Nama",
                "Whatsapp",
                "NIPD",
                "Gender",
                "NIPD",
                "Tempat Lahir",
                "Tanggal Lahir",
                "Agama",
                "Alamat",
                "Kelurahan",
                "Kecamatan",
                "Kode Pos",
                "Email",
                "Data Ayah",
                "",
                "Data Ibu",
                "",
                "Data Wali",
                "",
                "Kebutuhan Khusus",
                "Sekolah Asal",
                "Berat Badan",
                "Tinggi Badan",
                "Bank",
                "Norek",
                "Nama Pemilih",
                "Nominal",
                "Bukti",
                "Diverifikasi",
              ];
              worksheet.columns = [
                { key: "no" },
                { key: "user" },
                { key: "whatsapp" },
                { key: "nipd" },
                { key: "gender" },
                { key: "nisn" },
                { key: "tempat_lahir" },
                { key: "tanggal_lahir" },
                { key: "agama" },
                { key: "alamat" },
                { key: "kelurahan" },
                { key: "kecamatan" },
                { key: "kode_pos" },
                { key: "email" },
                { key: "nama_ayah" },
                { key: "pekerjaan_ayah" },
                { key: "nama_ibu" },
                { key: "pekerjaan_ibu" },
                { key: "nama_wali" },
                { key: "pekerjaan_wali" },
                { key: "kebutuhan_khusus" },
                { key: "sekolah_asal" },
                { key: "berat_badan" },
                { key: "tinggi_badan" },
                { key: "bank" },
                { key: "norek" },
                { key: "nama_pemilik" },
                { key: "nominal" },
                { key: "bukti" },
                { key: "diverifikasi" },
              ];

              // Add row using key mapping to columns
              let row = worksheet.addRow({
                no: `${idx + 1}`,
                user: anggota.user ? anggota.user.nama : "-",
                whatsapp: anggota.user ? anggota.user.whatsapp : "-",
                nipd: anggota.user.profil ? anggota.user.profil.nipd : "-",
                gender: anggota.user ? anggota.user.gender : "-",
                nisn: anggota.user.profil ? anggota.user.profil.nisn : "-",
                tempat_lahir: anggota.user.profil
                  ? anggota.user.profil.tempat_lahir
                  : "-",
                tanggal_lahir: anggota.user.profil
                  ? anggota.user.profil.tanggal_lahir
                  : "-",
                agama: anggota.user.profil ? anggota.user.profil.agama : "-",
                alamat: anggota.user.profil ? anggota.user.profil.alamat : "-",
                kelurahan: anggota.user.profil
                  ? anggota.user.profil.regency_id
                  : "-",
                kecamatan: anggota.user.profil
                  ? anggota.user.profil.district_id
                  : "-",
                kode_pos: anggota.user.profil
                  ? anggota.user.profil.kodepos
                  : "-",
                email: anggota.user.profil ? anggota.user.email : "-",
                nama_ayah: anggota.user.profil
                  ? anggota.user.profil.nama_ayah
                  : "-",
                pekerjaan_ayah: anggota.user.profil
                  ? anggota.user.profil.pekerjaan_ayah
                  : "-",
                nama_ibu: anggota.user.profil
                  ? anggota.user.profil.nama_ibu
                  : "-",
                pekerjaan_ibu: anggota.user.profil
                  ? anggota.user.profil.pekerjaan_ibu
                  : "-",
                nama_wali: anggota.user.profil
                  ? anggota.user.profil.nama_wali
                  : "-",
                pekerjaan_wali: anggota.user.profil
                  ? anggota.user.profil.pekerjaan_wali
                  : "-",
                kebutuhan_khusus: anggota.user.profil
                  ? anggota.user.profil.disabilitas
                  : "-",
                sekolah_asal: anggota.user.profil
                  ? anggota.user.profil.asal_sekolah
                  : "-",
                berat_badan: anggota.user.profil ? anggota.user.profil.bb : "-",
                tinggi_badan: anggota.user.profil
                  ? anggota.user.profil.tb
                  : "-",
                bank: anggota ? anggota.bank : "-",
                norek: anggota ? anggota.norek : "-",
                nama_pemilik: anggota ? anggota.nama_pemilik : "-",
                nominal: anggota ? anggota.nominal : "-",
                bukti: anggota ? anggota.bukti : "-",
                diverifikasi: anggota ? anggota.diverifikasi : "-",
              });

              worksheet.addConditionalFormatting({
                ref: `A10:AD11`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 14,
                        bold: true,
                      },
                      fill: {
                        type: "pattern",
                        pattern: "solid",
                        bgColor: {
                          argb: "C0C0C0",
                          fgColor: { argb: "C0C0C0" },
                        },
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                    },
                  },
                ],
              });
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 11}:AD${(idx + 1) * 1 + 11}`,
                rules: [
                  {
                    type: "expression",
                    formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                    style: {
                      border: {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                      },
                      font: {
                        name: "Times New Roman",
                        family: 4,
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "left",
                      },
                    },
                  },
                ],
              });
            }
          })
        );
        worksheet.mergeCells(`A1:AI1`);
        worksheet.mergeCells(`A2:AI2`);
        worksheet.mergeCells(`A3:AI3`);
        worksheet.mergeCells(`A5:AI5`);
        worksheet.mergeCells(`A6:AI6`);
        worksheet.mergeCells(`A7:AI7`);
        worksheet.mergeCells(`A10:A11`);
        worksheet.mergeCells(`B10:B11`);
        worksheet.mergeCells(`C10:C11`);
        worksheet.mergeCells(`D10:D11`);
        worksheet.mergeCells(`E10:E11`);
        worksheet.mergeCells(`F10:F11`);
        worksheet.mergeCells(`G10:G11`);
        worksheet.mergeCells(`H10:H11`);
        worksheet.mergeCells(`I10:I11`);
        worksheet.mergeCells(`J10:J11`);
        worksheet.mergeCells(`K10:K11`);
        worksheet.mergeCells(`L10:L11`);
        worksheet.mergeCells(`M10:M11`);
        worksheet.mergeCells(`N10:N11`);
        worksheet.mergeCells(`O10:P10`);
        worksheet.mergeCells(`Q10:R10`);
        worksheet.mergeCells(`S10:T10`);
        worksheet.mergeCells(`U10:U11`);
        worksheet.mergeCells(`V10:V11`);
        worksheet.mergeCells(`W10:W11`);
        worksheet.mergeCells(`X10:X11`);
        worksheet.mergeCells(`Y10:Y11`);
        worksheet.mergeCells(`Z10:Z11`);
        worksheet.mergeCells(`AA10:AA11`);
        worksheet.mergeCells(`AB10:AB11`);
        worksheet.mergeCells(`AC10:AC11`);
        worksheet.mergeCells(`AD10:AD11`);
        worksheet.mergeCells(`AE10:AE11`);
        worksheet.mergeCells(`AF10:AF11`);
        worksheet.mergeCells(`AG10:AG11`);
        worksheet.mergeCells(`AH10:AH11`);
        worksheet.mergeCells(`AI10:AI11`);
        worksheet.addConditionalFormatting({
          ref: "A1:I3",
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                // fill: {
                //   type: "pattern",
                //   pattern: "solid",
                //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
                // },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
      })
    );

    let namaFile = `/uploads/rekap-Gelombang PPDB.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadAnalisisNilai({
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

    const user = await auth.getUser();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("mataPelajaran", (builder) => {
        builder.with("user");
      })
      .with("rombel")
      .where({ id: jadwal_mengajar_id })
      .first();

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

    const analisisNilai = await User.query()
      .withCount("tugasnilai as kkm", (builder) => {
        builder.where(
          "nilai",
          "<",
          `${jadwalMengajar.toJSON().mataPelajaran.kkm}`
        );
      })
      .with("tugas", (builder) => {
        builder.whereIn("m_timeline_id", timelineIds);
      })
      .whereIn("id", userIds)
      .fetch();

    // const ratarata2 = await TkTimeline.query()
    //   .whereIn("m_timeline_id", timelineIds)
    //   .whereIn("m_user_id", userIds)
    //   .avg("nilai as rata");

    // return response.ok({
    //   // jadwalMengajar,
    //   analisisNilai,
    //   // ratarata2,
    // });

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Analisis Nilai`);
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    worksheet.mergeCells(`A1:J1`);
    worksheet.mergeCells(`A2:J2`);
    worksheet.mergeCells(`A3:J3`);
    worksheet.mergeCells(`A4:J4`);
    worksheet.mergeCells(`A6:J6`);
    worksheet.getColumn("A").width = 28;
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 8;
    worksheet.getColumn("D").width = 8.5;
    worksheet.getColumn("E").width = 9;
    worksheet.getColumn("F").width = 14;
    worksheet.getColumn("G").width = 10;
    worksheet.getColumn("H").width = 8;
    worksheet.getColumn("I").width = 11;
    worksheet.addConditionalFormatting({
      ref: "A1:I3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    //  await Promise.all(
    //       analisisNilai.toJSON().map(async (d, idx) => {
    //         worksheet.getRow(7).values = ["No", "Nama", "Rata-Rata", "Dibawah KKM","Tugas1","Tugas2","Tugas3","Tugas4","Tugas5"];
    //         worksheet.columns = [
    //           { key: "no" },
    //           { key: "user" },
    //           { key: "ratarata" },
    //           { key: "dibawahkkm" },
    //           { key: "tugas1" },
    //           { key: "tugas2" },
    //           { key: "tugas3" },
    //           { key: "tugas4" },
    //           { key: "tugas5" },
    //           { key: `tugas${nox+1}` },
    //         ];

    //         // Add row using key mapping to columns
    //         let row = worksheet.addRow({
    //           no: `${idx + 1}`,
    //           user: d ? d.nama : "-",
    //           ratarata: "-",
    //           dibawahkkm: "-",

    //         });
    //           await Promise.all(
    //           d.tugas.map(async (e,nox) => {
    // worksheet.columns = [{ key: `tugas${nox + 1}` }];

    //             let column = worksheet.addColumn({
    //              tugas1: e ? e.nilai : "-",
    //               tugas2: e ? e.nilai : "-",
    //               tugas3: e ? e.nilai : "-",
    //               tugas4: e ? e.nilai : "-",
    //               tugas5: e ? e.nilai : "-",
    //             })
    //           }));

    // add column headers
    await Promise.all(
      analisisNilai.toJSON().map(async (d, idx) => {
        // var total = 0;
        // for (var i = 0; i < d.tugas.length; i++) {
        //   total += d.tugas.nilai[i];
        // }
        // var avg = total / d.tugas.nilai.length;
        const ratarata2 = await TkTimeline.query()
          .where({ m_user_id: `${d.id}` })
          .whereIn("m_timeline_id", timelineIds)
          .avg("nilai as rata");

        worksheet.getRow(7).values = ["No", "Nama", "Rata-Rata", "Dibawah KKM"];
        worksheet.columns = [
          { key: "no" },
          { key: "user" },
          { key: "ratarata" },
          { key: "dibawahkkm" },
        ];
        let row = worksheet.addRow({
          no: `${idx + 1}`,
          user: d ? d.nama : "-",
          ratarata: `${ratarata2[0].rata ? ratarata2[0].rata : "-"}`,
          dibawahkkm: `${d.__meta__.kkm} Tugas`,
        });

        // const row = worksheet.getRow(8);
        await Promise.all(
          d.tugas.map(async (e, nox) => {
            worksheet.getColumn([`${(nox + 1) * 1 + 4}`]).values = [
              ``,
              ``,
              ``,
              ``,
              ``,
              ``,
              `Tugas${nox + 1}`,
              ,
            ];
            row.getCell([`${(nox + 1) * 1 + 4}`]).value = `${
              e.nilai ? e.nilai : "-"
            }`;
            row.getCell([`${(nox + 1) * 1 + 4}`]).border = {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            };
            worksheet.getColumn([`${(nox + 1) * 1 + 4}`]).fill = {
              type: "pattern",
              pattern: "solid",
              bgColor: {
                argb: "C0C0C0",
                fgColor: { argb: "C0C0C0" },
              },
            };
            // worksheet.getCell(`E${(nox + 1) * 1 + 8}`).value = e.nilai;
            // worksheet.columns = [
            //   { key: `tugas${nox+1}` },
            // ];

            worksheet.addConditionalFormatting({
              ref: `${(nox + 1) * 1 + 7}`,
              rules: [
                {
                  type: "expression",
                  formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                  style: {
                    border: {
                      top: { style: "thin" },
                      left: { style: "thin" },
                      bottom: { style: "thin" },
                      right: { style: "thin" },
                    },
                    font: {
                      name: "Times New Roman",
                      family: 4,
                      size: 11,
                      // bold: true,
                    },
                    alignment: {
                      vertical: "middle",
                      horizontal: "left",
                    },
                  },
                },
              ],
            });

            // // Add row using key mapping to columns
            // let row = worksheet.addRow ({
            //   tugas1: e ? e.nilai : "-",
            //   tugas2: e ? e.nilai : "-",
            //   tugas3: e ? e.nilai : "-",
            //   tugas4: e ? e.nilai : "-",
            //   tugas5: e ? e.nilai : "-",
            // });
          })
        );

        worksheet.addConditionalFormatting({
          ref: `A7:J7`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 14,
                  bold: true,
                },
                fill: {
                  type: "pattern",
                  pattern: "solid",
                  bgColor: {
                    argb: "C0C0C0",
                    fgColor: { argb: "C0C0C0" },
                  },
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 7}:D${(idx + 1) * 1 + 7}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
              },
            },
          ],
        });
      })
    );
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    let namaFile = `/uploads/rekap-Analisis Tugas.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadPerformaTugas({
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

    const user = await auth.getUser();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("mataPelajaran", (builder) => {
        builder.with("user");
      })
      .with("rombel")
      .where({ id: jadwal_mengajar_id })
      .first();

    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .pluck("m_user_id");

    const timeline = await MTimeline.query()
      .with("tugas")
      .withCount("ditugaskan as kkm", (builder) => {
        builder.where(
          "nilai",
          "<",
          `${jadwalMengajar.toJSON().mataPelajaran.kkm}`
        );
      })
      .with("ditugaskan")
      .where({ dihapus: 0 })
      .andWhere({ tipe: "tugas" })
      .andWhere({ m_rombel_id: jadwalMengajar.toJSON().m_rombel_id })
      .andWhere({
        m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id,
      })
      .fetch();

    // return response.ok({
    //   // jadwalMengajar,
    //   timeline,
    //   // tugas,
    //   // ratarata2,
    // });

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Performa Tugas`);
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    worksheet.mergeCells(`A1:E1`);
    worksheet.mergeCells(`A2:E2`);
    worksheet.mergeCells(`A3:E3`);
    worksheet.mergeCells(`A4:E4`);
    worksheet.mergeCells(`A6:E6`);
    worksheet.getColumn("A").width = 28;
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 8;
    worksheet.getColumn("D").width = 8.5;
    worksheet.getColumn("E").width = 9;
    worksheet.getColumn("F").width = 14;
    worksheet.getColumn("G").width = 10;
    worksheet.getColumn("H").width = 8;
    worksheet.getColumn("I").width = 11;
    worksheet.addConditionalFormatting({
      ref: "A1:I3",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 16,
              bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    // add column headers
    await Promise.all(
      timeline.toJSON().map(async (d, idx) => {
        const ratarata2 = await TkTimeline.query()
          .where({ m_timeline_id: d.id })
          .avg("nilai as rata");

        worksheet.getRow(7).values = [
          "No",
          "Nama Tugas",
          "Tanggal Pembuatan",
          "Nilai rata-rata",
          "Dibawah KKm",
        ];
        worksheet.columns = [
          { key: "no" },
          { key: "nama" },
          { key: "tanggal" },
          { key: "ratarata" },
          { key: "dibawahkkm" },
        ];
        let row = worksheet.addRow({
          no: `${idx + 1}`,
          nama: d.tugas ? d.tugas.judul : "-",
          tanggal: d ? d.tanggal_dibuat : "-",
          ratarata: `${ratarata2[0].rata ? ratarata2[0].rata : "-"}`,
          dibawahkkm: `${d.__meta__.kkm} Siswa`,
        });

        // const row = worksheet.getRow(8);

        worksheet.addConditionalFormatting({
          ref: `A7:E7`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 14,
                  bold: true,
                },
                fill: {
                  type: "pattern",
                  pattern: "solid",
                  bgColor: {
                    argb: "C0C0C0",
                    fgColor: { argb: "C0C0C0" },
                  },
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 7}:E${(idx + 1) * 1 + 7}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 11,
                  // bold: true,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "left",
                },
              },
            },
          ],
        });
      })
    );
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggal} oleh ${user.nama}`;
    let namaFile = `/uploads/rekap-PerformaTugas.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadExperimen({
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

    const user = await auth.getUser();

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Analisis Nilai`);
    const row = worksheet.getRow(5);
    row.getCell(8).value = "haisadisadj";

    let namaFile = `/uploads/EXPERIMEN EXCEL.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  //================= CDC SERVICE ===============

  async getPekerjaanSaya({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const pekerjaan = await TkStatusPekerjaan.query()
      .with("perusahaan")
      .where({ m_user_id: user.id })
      .first();

    return response.ok({
      pekerjaan,
    });
  }

  async getCariPekerjaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let pekerjaan;

    if (search) {
      // ===== service cari Pekerjaan ====
      pekerjaan = await MPekerjaan.query()
        .with("perusahaan", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
    } else {
      // ===== service Pekerjaan saya ====
      pekerjaan = await MPekerjaan.query()
        .with("perusahaan", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .paginate();
    }

    return response.ok({
      pekerjaan,
    });
  }

  async getCariPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let perusahaan;

    if (search) {
      // ===== service cari Perusahaan ====
      perusahaan = await MPerusahaan.query()
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
    } else {
      // ===== service Perusahaan saya ====
      perusahaan = await MPerusahaan.query().where({ dihapus: 0 }).paginate();
    }

    return response.ok({
      perusahaan,
    });
  }
  async getAcaraPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const { search } = request.get();

    let acara;

    if (search) {
      // ===== service cari Perusahaan ====
      acara = await MAcaraPerusahaan.query()
        .where({ dihapus: 0 })
        .andWhere("nama", "like", `%${search}%`)
        .paginate();
    } else {
      // ===== service Perusahaan saya ====
      acara = await MAcaraPerusahaan.query().where({ dihapus: 0 }).paginate();
    }

    return response.ok({
      acara,
    });
  }
  // ============ Detail Pekerjaan ============

  async detailPekerjaanSaya({
    response,
    request,
    auth,
    params: { pekerjaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const pekerjaan = await MPekerjaan.query()
      .with("perusahaan")
      .with("pengumuman", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: pekerjaan_id })
      .first();

    return response.ok({
      pekerjaan,
    });
  }

  async detailPekerjaan({ response, request, auth, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const pekerjaan = await MPekerjaan.query()
      .with("perusahaan")
      .with("pengumuman", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("informasi")
      .where({ id: pekerjaan_id })
      .first();

    return response.ok({
      pekerjaan,
    });
  }
  async detailPerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const perusahaan = await MPerusahaan.query()
      .with("acara", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("pekerjaan", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .with("informasi", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id: perusahaan_id })
      .first();

    return response.ok({
      perusahaan,
    });
  }

  async detailAcaraPerusahaan({
    response,
    request,
    auth,
    params: { acara_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    // const { rombel_id } = request.post();
    const acara = await MAcaraPerusahaan.query()
      .with("perusahaan")
      .where({ id: acara_id })
      .first();

    return response.ok({
      perusahaan,
    });
  }

  async postAcaraPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, foto, lokasi, deskripsi, waktu_awal, waktu_akhir } =
      request.post();

    const acara = await MAcaraPerusahaan.create({
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_awal,
      waktu_akhir,
      m_perusahaan_id: perusahaan_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async putAcaraPerusahaan({ response, request, auth, params: { acara_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, foto, lokasi, deskripsi, waktu_awal, waktu_akhir } =
      request.post();

    const acara = await MAcaraPerusahaaan.query()
      .where({ id: acara_id })
      .update({
        judul,
        foto,
        lokasi,
        deskripsi,
        waktu_awal,
        waktu_akhir,
        dihapus: 0,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteAcaraPerusahaan({
    response,
    request,
    auth,
    params: { acara_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const acara = await MAcaraPerusahaan.query()
      .where({ id: acara_id })
      .update({
        dihapus: 1,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPerusahaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      logo,
      bidang,
      province_id,
      regency_id,
      district_id,
      village_id,
      didirikan,
      alamat,
      telepon,
      situs,
      jumlah_pekerja,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
      sampul,
    } = request.post();

    const perusahaan = await MPerusahaan.create({
      nama,
      logo,
      bidang,
      province_id,
      regency_id,
      district_id,
      village_id,
      dihapus: 0,
    });

    const informasi = await MInformasiPerusahaan.create({
      m_perusahaan_id: perusahaan.id,
      didirikan,
      alamat,
      telepon,
      situs,
      jumlah_pekerja,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
      sampul,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async putPerusahaan({ response, request, auth, params: { perusahaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      nama,
      logo,
      bidang,
      province_id,
      regency_id,
      district_id,
      village_id,
      didirikan,
      alamat,
      telepon,
      situs,
      jumlah_pekerja,
      tentang,
      budaya,
      benefit_karyawan,
      lingkungan_kerja,
      busana,
      budaya_kerja,
      jam_kerja,
      nama_pj,
      telepon_pj,
      email_pj,
      registrasi_pj,
      youtube,
      twitter,
      instagram,
      facebook,
      github,
      linkedin,
      behace,
      dribble,
      kodepos,
      sampul,
    } = request.post();

    const perusahaan = await MPerusahaaan.query()
      .where({ id: perusahaan_id })
      .update({
        nama,
        logo,
        bidang,
        province_id,
        regency_id,
        district_id,
        village_id,
        dihapus: 0,
      });

    const informasi = await MInformasiPerusahaaan.query()
      .where({ m_perusahaan_id: perusahaan_id })
      .update({
        didirikan,
        alamat,
        telepon,
        situs,
        jumlah_pekerja,
        tentang,
        budaya,
        benefit_karyawan,
        lingkungan_kerja,
        busana,
        budaya_kerja,
        jam_kerja,
        nama_pj,
        telepon_pj,
        email_pj,
        registrasi_pj,
        youtube,
        twitter,
        instagram,
        facebook,
        github,
        linkedin,
        behace,
        dribble,
        kodepos,
        sampul,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePerusahaan({
    response,
    request,
    auth,
    params: { perusahaan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const perusahaan = await MPerusahaan.query()
      .where({ id: perusahaan_id })
      .update({
        dihapus: 1,
      });

    if (!perusahaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postPekerjaan({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      m_perusahaan_id,
      jenis,
      bidang,
      mulai_kerja,
      akhir_kerja,
      jumlah_lowongan,
      province_id,
      regency_id,
      district_id,
      village_id,
      pengalaman,
      batas_pengiriman,
      pendidikan,
      detail_pendidikan,
      keahlian,
      deskripsi,
      persyaratan_khusus,
      range_gaji,
      status_jurusan,
      jurusan,
      gender,
      tb,
      usia_minimal,
      usia_maksimal,
      alamat,
      kodepos,
      khusus_alumni,
      khusus_difabel,
      buta_warna,
      kacamata,
      tes,
      lokasi_tes,
      kelengkapan_data,
      data_nilai,
    } = request.post();
    const date1 = moment(`${mulai_kerja}`);
    const date2 = moment(`${akhir_kerja}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const pekerjaan = await MPekerjaan.create({
      judul,
      m_perusahaan_id,
      jenis,
      bidang,
      kontrak_kerja: lama,
      mulai_kerja,
      akhir_kerja,
      jumlah_lowongan,
      province_id,
      regency_id,
      district_id,
      village_id,
      dihapus: 0,
    });

    const informasi = await MInformasiPekerjaan.create({
      m_pekerjaan_id: pekerjaan.id,
      pengalaman,
      batas_pengiriman,
      pendidikan,
      detail_pendidikan,
      keahlian,
      deskripsi,
      persyaratan_khusus,
      range_gaji,
      status_jurusan,
      jurusan,
      gender,
      tb,
      usia_minimal,
      usia_maksimal,
      alamat,
      kodepos,
      khusus_alumni,
      khusus_difabel,
      buta_warna,
      kacamata,
      tes,
      lokasi_tes,
      kelengkapan_data,
      data_nilai,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async putPekerjaan({ response, request, auth, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      province_id,
      regency_id,
      district_id,
      village_id,
      jenis,
      bidang,
      mulai_kerja,
      akhir_kerja,
      jumlah_lowongan,
      pengalaman,
      batas_pengiriman,
      pendidikan,
      detail_pendidikan,
      keahlian,
      deskripsi,
      persyaratan_khusus,
      range_gaji,
      status_jurusan,
      gender,
      tb,
      usia_minimal,
      usia_maksimal,
      alamat,
      kodepos,
      khusus_alumni,
      khusus_difabel,
      buta_warna,
      kacamata,
      tes,
      lokasi_tes,
      kelengkapan_data,
      data_nilai,
    } = request.post();

    const date1 = moment(`${mulai_kerja}`);
    const date2 = moment(`${akhir_kerja}`);
    const diff = date2.diff(date1);

    const lama = moment(diff).format(`MM`);

    const pekerjaan = await MPekerjaan.query()
      .where({ id: pekerjaan_id })
      .update({
        judul,
        jenis,
        bidang,
        kontrak_kerja: lama,
        mulai_kerja,
        akhir_kerja,
        jumlah_lowongan,
        province_id,
        regency_id,
        district_id,
        village_id,
        dihapus: 0,
      });

    const informasi = await MInformasiPekerjaan.query()
      .where({ m_pekerjaan_id: pekerjaan_id })
      .update({
        pengalaman,
        batas_pengiriman,
        pendidikan,
        detail_pendidikan,
        keahlian,
        deskripsi,
        persyaratan_khusus,
        range_gaji,
        status_jurusan,
        gender,
        tb,
        usia_minimal,
        usia_maksimal,
        alamat,
        kodepos,
        khusus_alumni,
        khusus_difabel,
        buta_warna,
        kacamata,
        tes,
        lokasi_tes,
        kelengkapan_data,
        data_nilai,
      });

    if (!pekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deletePekerjaan({ response, request, auth, params: { pekerjaan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // mengambil data user
    const user = await auth.getUser();

    const pekerjaan = await MPekerjaan.query()
      .where({ id: pekerjaan_id })
      .update({
        dihapus: 1,
      });

    if (!pekerjaan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async postLaporanPrakerin({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const {
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_mulai,
      waktu_akhir,
      lampiran,
    } = request.post();

    const laporan = await MLaporanPrakerin.create({
      judul,
      foto,
      lokasi,
      deskripsi,
      waktu_mulai,
      waktu_akhir,
      lampiran,
      m_perusahaan_id: perusahaan_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  // ============ POST Rekap Tugas =================

  async putLaporanPrakerin({
    response,
    request,
    auth,
    params: { laporan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { judul, foto, lokasi, deskripsi, waktu_awal, waktu_akhir } =
      request.post();

    const acara = await MAcaraPerusahaaan.query()
      .where({ id: acara_id })
      .update({
        judul,
        foto,
        lokasi,
        deskripsi,
        waktu_awal,
        waktu_akhir,
        dihapus: 0,
      });

    if (!acara) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  // ====================================== Surel Service ==========================================
}
module.exports = MainController;

"use strict";

const Drive = use("Drive");
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
const MCamera = use("App/Models/MCamera");
const MAbsenBelumTerdaftar = use("App/Models/MAbsenBelumTerdaftar");
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
const MSikapSiswaYadika = use("App/Models/MSikapSiswaYadika");
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
const TkPesertaUjianPpdb = use("App/Models/TkPesertaUjianPpdb");
const MJadwalPpdb = use("App/Models/MJadwalPpdb");
const MUjian = use("App/Models/MUjian");
const MUjianSiswa = use("App/Models/MUjianSiswa");
const MMateri = use("App/Models/MMateri");
const MSikapSosial = use("App/Models/MSikapSosial");
const MSikapSpiritual = use("App/Models/MSikapSpiritual");
const MSoalKuis = use("App/Models/MSoalKuis");
const MTimeline = use("App/Models/MTimeline");
const TkTimeline = use("App/Models/TkTimeline");
const TkTimelineKomen = use("App/Models/TkTimelineKomen");
const TkTimelineTopik = use("App/Models/TkTimelineTopik");
const TkMateriKesimpulan = use("App/Models/TkMateriKesimpulan");
const MTimelineKomen = use("App/Models/MTimelineKomen");
const MPerusahaan = use("App/Models/MPerusahaan");
const MPenerimaanPerusahaan = use("App/Models/MPenerimaanPerusahaan");
const MPenerimaanSiswa = use("App/Models/MPenerimaanSiswa");
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const MPekerjaan = use("App/Models/MPekerjaan");
const MInformasiPekerjaan = use("App/Models/MInformasiPekerjaan");
const MPekerjaanPengumuman = use("App/Models/MPekerjaanPengumuman");
const MAcaraPerusahaan = use("App/Models/MAcaraPerusahaan");
const TkStatusPekerjaan = use("App/Models/TkStatusPekerjaan");

const MBuku = use("App/Models/MBuku");
const MPerpus = use("App/Models/MPerpus");
const MPraktikKerja = use("App/Models/MPraktikKerja");
const MEkstrakurikuler = use("App/Models/MEkstrakurikuler");
const TkPerpusMapel = use("App/Models/TkPerpusMapel");
const TkSoalTugas = use("App/Models/TkSoalTugas");
const MPerpusTag = use("App/Models/MPerpusTag");
const TkPerpusTag = use("App/Models/TkPerpusTag");
const MKontak = use("App/Models/MKontak");
const TkJawabanUjianSiswa = use("App/Models/TkJawabanUjianSiswa");
const User = use("App/Models/User");
const { HitungNilaiAkhir } = use("App/Services/NilaiServices");
const WhatsAppService = use("App/Services/WhatsAppService");
const { shuffle } = require("../../../Utils/Global");

const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const PDFExtract = require("pdf.js-extract").PDFExtract;

const Hash = use("Hash");
const Helpers = use("Helpers");
const axios = require("axios");
const Mail = use("Mail");
const { validate } = use("Validator");
const slugify = require("slugify");
const Excel = require("exceljs");
const WordExtractor = require("word-extractor");
const AdonisGCS = require("adonis-google-cloud-storage");
const uuid = require("uuid-v4");
const pdftohtml = require("pdftohtmljs");
const http = require("http"); // or 'https' for https:// URLs
const Downloader = require("nodejs-file-downloader");
const cron = require("node-cron");
var randomstring = require("randomstring");

const PDFDocument = require("pdfkit");
const fs = require("fs");
const fetch = require("node-fetch");
const pdf = require("pdf-parse");
const htmlEscaper = require("html-escaper");

// firestore
const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();
const FieldValue = firestore.FieldValue();
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
const messageEmailSuccess = "Data berhasil dikirim ke email";
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

// const hour = dateObj.getHours();
// const minute = dateObj.getMinutes();
// const second = dateObj.getSeconds();
// // const keluarantanggal = day + "," + month + "," + year;
// const keluarantanggalseconds1 = moment().format("YYYY-MM-DD-HH-mm-ss");
// const keluarantanggalseconds =
//   keluarantanggalseconds1 + "-" + dateObj.getTime();

function colName(n) {
  var ordA = "a".charCodeAt(0);
  var ordZ = "z".charCodeAt(0);
  var len = ordZ - ordA + 1;

  var s = "";
  while (n >= 0) {
    s = String.fromCharCode((n % len) + ordA) + s;
    n = Math.floor(n / len) - 1;
  }
  return s.toUpperCase();
}

class DinasController {
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

  //================= CDC SERVICE ===============

  async getDashboard({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const ta = await this.getTAAktif(sekolah);

    let { search, page } = request.get();

    page = page ? parseInt(page) : 1;

    const awal = moment().format("YYYY-MM-DD 00:00:00");
    const akhir = moment().format("YYYY-MM-DD 23:59:59");

    const absenGuru = await MAbsen.query()
      .where({ role: "guru" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereBetween("created_at", [awal, akhir])
      .fetch();

    const totalGuru = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "guru" })
      .getCount();

    // return totalGuru;

    const absenSiswa = await MAbsen.query()
      .where({ role: "siswa" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereBetween("created_at", [awal, akhir])
      .fetch();

    const totalUserSiswa = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "siswa" })
      .getCount();

    const hadirGuru = absenGuru
      .toJSON()
      .filter((d) => d.absen == "hadir").length;

    const sakitGuru = absenGuru
      .toJSON()
      .filter((d) => d.absen == "sakit").length;

    const izinGuru = absenGuru.toJSON().filter((d) => d.absen == "izin").length;

    const alpaGuru =
      totalGuru -
      absenGuru
        .toJSON()
        .filter(
          (d) => d.absen == "hadir" || d.absen == "sakit" || d.absen == "izin"
        ).length;

    const hadirSiswa = absenSiswa
      .toJSON()
      .filter((d) => d.absen == "hadir").length;

    const sakitSiswa = absenSiswa
      .toJSON()
      .filter((d) => d.absen == "sakit").length;

    const izinSiswa = absenSiswa
      .toJSON()
      .filter((d) => d.absen == "izin").length;

    const alpaSiswa =
      totalUserSiswa -
      absenSiswa
        .toJSON()
        .filter(
          (d) => d.absen == "hadir" || d.absen == "sakit" || d.absen == "izin"
        ).length;

    const rombel = await MRombel.query()
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .withCount("anggotaRombel as totalRombel", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const rombelIds = await MRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const jurusan = await MJurusan.query()
      .select("id", "kode", "nama")
      .withCount("penerimaanSiswa as total", (builder) => {
        builder.where({ dihapus: 0 }).whereIn("m_rombel_id", rombelIds);
      })
      .with("rombel", (builder) => {
        builder.withCount("anggotaRombel as totalRombel", (builder) => {
          builder.where({ dihapus: 0 });
        });
      })
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    // const { rombel_id } = request.post();

    const perusahaan = await TkPerusahaanSekolah.query()
      .with("penerimaan", (builder) => {
        builder
          .withCount("siswa", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .where({ dihapus: 0 });
      })
      .with("perusahaan")
      .where({ m_sekolah_id: sekolah.id })
      .fetch();

    let totalSiswa = 0;
    let totalPartner = 0;

    await Promise.all(
      perusahaan.toJSON().map(async (d) => {
        await Promise.all(
          d.penerimaan.map(async (e) => {
            await Promise.all(
              e.siswa.map(async (s) => {
                totalSiswa = totalSiswa + s.siswa.__meta__;
              })
            );
          })
        );
        totalPartner = totalPartner + 1;
      })
    );

    let rekapitulasi;
    rekapitulasi = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "guru" });
    if (search) {
      rekapitulasi.where("nama", "like", `%${search}%`);
    }

    rekapitulasi = await rekapitulasi.paginate(page, 25);

    return response.ok({
      totalSiswa,
      totalPartner,
      totalUserSiswa,
      rombel,
      jurusan,
      absenSiswa: {
        hadirSiswa,
        sakitSiswa,
        izinSiswa,
        alpaSiswa,
      },
      absenGuru: {
        hadirGuru,
        sakitGuru,
        izinGuru,
        alpaGuru,
      },
    });
  }

  async getData({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    let { search, jenis, role, tanggal, page, jurusan_id, rombel_id } =
      request.get();

    page = page ? parseInt(page) : 1;

    const awal = moment().format("YYYY-MM-DD 00:00:00");
    const akhir = moment().format("YYYY-MM-DD 23:59:59");

    if (jenis == "kehadiran") {
      let absenUser;
      absenUser = User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 });
      if (role == "siswa") {
        absenUser.andWhere({ role: "siswa" });
      } else if (role == "gtk") {
        absenUser.whereIn("role", ["guru", "admin", "kepsek"]);
      }
      absenUser = await absenUser.fetch();
      const absen = await MAbsen.query()
        .where({ role: role })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereBetween("created_at", [awal, akhir])
        .fetch();

      let total;
      total = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id });
      if (role == "siswa") {
        total.andWhere({ role: role });
      } else if (role == "gtk") {
        total.whereIn("role", ["guru", "admin", "kepsek"]);
      }
      total = await total.getCount();
      const hadir = absen.toJSON().filter((d) => d.absen == "hadir").length;

      const sakit = absen.toJSON().filter((d) => d.absen == "sakit").length;

      const izin = absen.toJSON().filter((d) => d.absen == "izin").length;

      const alpa =
        total -
        absen
          .toJSON()
          .filter(
            (d) => d.absen == "hadir" || d.absen == "sakit" || d.absen == "izin"
          ).length;

      return response.ok({
        absen: {
          hadir,
          sakit,
          izin,
          alpa,
        },
        absenUser,
      });
    } else if (jenis == "identitas") {
      const totalSiswa = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ role: "siswa" })
        .getCount();

      const totalGtk = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("role", ["guru", "admin", "kepsek"])
        .getCount();
      let rombelIds;

      rombelIds = MRombel.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 });

      if (jurusan_id) {
        rombelIds.andWhere({ m_jurusan_id: jurusan_id });
      }
      if (rombel_id) {
        rombelIds.andWhere({ m_rombel_id: rombel_id });
      }
      rombelIds = await rombelIds.ids();

      const anggotaIds = await MAnggotaRombel.query()
        .whereIn("m_rombel_id", rombelIds)
        .where({ dihapus: 0 })
        .pluck("m_user_id");

      let user;

      user = User.query()
        .with("anggotaRombel", (builder) => {
          builder
            .with("rombel")
            .whereIn("m_rombel_id", rombelIds)
            .where({ dihapus: 0 });
        })
        .select(
          "nama",
          "id",
          "whatsapp",
          "avatar",
          "gender",
          "photos",
          "role",
          "bagian"
        )
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 });
      if (role == "gtk") {
        user.whereIn("role", ["guru", "admin", "kepsek"]);
      } else if (role == "siswa") {
        user.where({ role: "siswa" });
        if (jurusan_id || rombel_id) {
          user.whereIn("id", anggotaIds);
        }
      }
      if (search) {
        user.andWhere("nama", "like", `%${search}%`);
      }
      user = await user.paginate(page, 25);

      return response.ok({
        user,
        totalSiswa,
        totalGtk,
      });
    }
  }

  async getBukuKerja({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let { search, tipe } = request.get();

    const user = await auth.getUser();
    let data;
    if (tipe == "skl") {
      data = await MRpp.query()
        .with("mataPelajaran")
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ tipe: "skl" })
        .fetch();
    } else if (tipe == "rpp") {
      data = await MRpp.query()
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "rpp" })
        .fetch();
    } else if (tipe == "silabus") {
      data = await MRpp.query()
        .with("mataPelajaran")
        .wiht("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "silabus" })
        .fetch();
    } else if (tipe == "kkm") {
      data = await MRpp.query()
        .with("mataPelajaran")
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kkm" })
        .fetch();
    } else if (tipe == "kode etik") {
      data = await MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kode etik" })
        .fetch();
    } else if (tipe == "ikrar") {
      data = await MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "ikrar" })
        .fetch();
    } else if (tipe == "tata tertib") {
      data = await MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "tata tertib" })
        .fetch();
    } else if (tipe == "pembiasaan") {
      data = await MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "pembiasaan" })
        .fetch();
    } else if (tipe == "kalender") {
      data = await MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kalender" })
        .fetch();
    } else if (tipe == "alokasi") {
      data = await MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "alokasi" })
        .fetch();
    } else if (tipe == "ptahunan") {
      data = await MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "ptahunan" })
        .fetch();
    } else if (tipe == "psemester") {
      data = await MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "psemester" })
        .fetch();
    } else if (tipe == "jurnal") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "jurnal" })
        .fetch();
    } else if (tipe == "daftar evaluasi") {
      data = await MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "daftar evaluasi" })
        .fetch();
    } else if (tipe == "tindak lanjut") {
      data = await MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "tindak lanjut" })
        .fetch();
    } else if (tipe == "akhlak") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "akhlak" })
        .fetch();
    } else if (tipe == "hasil ulangan") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "hasil ulangan" })
        .fetch();
    } else if (tipe == "program perbaikan") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "program perbaikan" })
        .fetch();
    } else if (tipe == "buku pegangan") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "buku pegangan" })
        .fetch();
    } else if (tipe == "daya serap") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "daya serap" })
        .fetch();
    } else if (tipe == "kisi soal") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kisi soal" })
        .fetch();
    } else if (tipe == "soal") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "soal" })
        .fetch();
    } else if (tipe == "butir soal") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "butir soal" })
        .fetch();
    } else if (tipe == "perbaikan soal") {
      data = await MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "perbaikan soal" })
        .fetch();
    }

    return response.ok({
      data,
    });
  }

  async getBukuKerja({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let bukuKerja1 = 0;
    let bukuKerja2 = 3;
    let bukuKerja3 = 0;
    let bukuKerja4 = 0;

    const skl = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tipe: "skl" })
      .first();
    const rpp = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "rpp" })
      .first();
    const silabus = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "silabus" })
      .first();
    const kkm = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kkm" })
      .first();
    const kodeEtik = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kode etik" })
      .first();
    const ikrar = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "ikrar" })
      .first();
    const tataTertib = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "tata tertib" })
      .first();
    const pembiasaan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "pembiasaan" })
      .first();
    const kalender = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kalender" })
      .first();
    const alokasi = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "alokasi" })
      .first();
    const ptahunan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "ptahunan" })
      .first();
    const psemester = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "psemester" })
      .first();
    const jurnal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "jurnal" })
      .first();
    const daftarEvaluasi = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "daftar evaluasi" })
      .first();
    const tindakLanjut = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "tindak lanjut" })
      .first();
    const akhlak = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "akhlak" })
      .first();
    const hasilUlangan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "hasil ulangan" })
      .first();
    const programPerbaikan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "program perbaikan" })
      .first();
    const bukuPegangan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "buku pegangan" })
      .first();
    const dayaSerap = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "daya serap" })
      .first();
    const kisiSoal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kisi soal" })
      .first();
    const soal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "soal" })
      .first();
    const butirSoal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "butir soal" })
      .first();
    const perbaikanSoal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "perbaikan soal" })
      .first();
    if (skl) {
      bukuKerja1 = bukuKerja1 + 1;
    } else if (rpp) {
      bukuKerja1 = bukuKerja1 + 1;
    } else if (silabus) {
      bukuKerja1 = bukuKerja1 + 1;
    } else if (kkm) {
      bukuKerja1 = bukuKerja1 + 1;
    } else if (kodeEtik) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (ikrar) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (tataTertib) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (pembiasaan) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (kalender) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (alokasi) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (ptahunan) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (psemester) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (jurnal) {
      bukuKerja2 = bukuKerja2 + 1;
    } else if (daftarEvaluasi) {
      bukuKerja4 = bukuKerja4 + 1;
    } else if (tindakLanjut) {
      bukuKerja4 = bukuKerja4 + 1;
    } else if (akhlak) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (hasilUlangan) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (programPerbaikan) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (bukuPegangan) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (dayaSerap) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (kisiSoal) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (soal) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (butirSoal) {
      bukuKerja3 = bukuKerja3 + 1;
    } else if (perbaikanSoal) {
      bukuKerja3 = bukuKerja3 + 1;
    }

    return response.ok({
      bukuKerja1,
      bukuKerja2,
      bukuKerja3,
      bukuKerja4
    });
  }

  async ip({ response, request }) {
    return response.ok({ ip: [request.ip(), request.ips()] });
  }

  async notFoundPage({ response, request, auth }) {
    return `<p>Data tidak ditemukan, silahkan kembali ke <a href="http://getsmartschool.id">Smart School</a></p>`;
  }
}
module.exports = DinasController;

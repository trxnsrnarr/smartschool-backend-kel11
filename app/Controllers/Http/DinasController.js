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
const TkBankSoalGuru = use("App/Models/TkBankSoalGuru");

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

    let { search, jenis, role, tanggal, page, jurusan_id, rombel_id,tingkat } =
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
      if(tingkat){
        rombelIds.andWhere({ tingkat: tingkat });
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

  async getBukuKerjaGuru({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let bukuKerja1 = 0;
    let bukuKerja2 = 0;
    let bukuKerja3 = 3;
    let bukuKerja4 = 0;

    const skl = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ tipe: "skl" })
      .first();
    if (skl) {
      bukuKerja1 = bukuKerja1 + 1;
    }
    const rpp = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "rpp" })
      .first();
    if (rpp) {
      bukuKerja1 = bukuKerja1 + 1;
    }
    const silabus = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "silabus" })
      .first();
    if (silabus) {
      bukuKerja1 = bukuKerja1 + 1;
    }
    const kkm = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kkm" })
      .first();
    if (kkm) {
      bukuKerja1 = bukuKerja1 + 1;
    }
    const kodeEtik = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kode etik" })
      .first();
    if (kodeEtik) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const ikrar = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "ikrar" })
      .first();
    if (ikrar) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const tataTertib = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "tata tertib" })
      .first();
    if (tataTertib) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const pembiasaan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "pembiasaan" })
      .first();
    if (pembiasaan) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const kalender = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kalender" })
      .first();
    if (kalender) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const alokasi = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "alokasi" })
      .first();
    if (alokasi) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const ptahunan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "ptahunan" })
      .first();
    if (ptahunan) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const psemester = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "psemester" })
      .first();
    if (psemester) {
      bukuKerja2 = bukuKerja2 + 1;
    }
    const jurnal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "jurnal" })
      .first();
    if (jurnal) {
      bukuKerja2 = bukuKerja2 + 1;
    }

    const akhlak = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "akhlak" })
      .first();
    if (akhlak) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const hasilUlangan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "hasil ulangan" })
      .first();
    if (hasilUlangan) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const programPerbaikan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "program perbaikan" })
      .first();
    if (programPerbaikan) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const bukuPegangan = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "buku pegangan" })
      .first();
    if (bukuPegangan) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const dayaSerap = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "daya serap" })
      .first();
    if (dayaSerap) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const kisiSoal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "kisi soal" })
      .first();
    if (kisiSoal) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const soal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "soal" })
      .first();
    if (soal) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const butirSoal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "butir soal" })
      .first();
    if (butirSoal) {
      bukuKerja3 = bukuKerja3 + 1;
    }
    const perbaikanSoal = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "perbaikan soal" })
      .first();
    if (perbaikanSoal) {
      bukuKerja3 = bukuKerja3 + 1;
    }

    const daftarEvaluasi = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "daftar evaluasi" })
      .first();

    if (daftarEvaluasi) {
      bukuKerja4 = bukuKerja4 + 1;
    }
    const tindakLanjut = await MRpp.query()
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .where({ tipe: "tindak lanjut" })
      .first();
    if (tindakLanjut) {
      bukuKerja4 = bukuKerja4 + 1;
    }
    return response.ok({
      bukuKerja1,
      bukuKerja2,
      bukuKerja3,
      bukuKerja4,
    });
  }

  async getDaftarKehadiran({
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

    const user = await auth.getUser();
    let { tipe, pertemuan_id } = request.get();

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_user_id: user.id })
      .where({ m_ta_id: ta.id })
      .ids();

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_ta_id: ta.id })
      .ids();

    const rombelMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder.select("id", "nama").where({ dihapus: 0 });
      })
      .whereIn("m_rombel_id", rombelIds)
      .where({ m_ta_id: ta.id })
      .with("mataPelajaran", (builder) => {
        builder.select("id", "nama");
      })
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: jadwal_mengajar_id })
      .first();
    if (tipe == "rekap") {
      const timelineIds = await MTimeline.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .ids();

      const tkTimelineIds = await TkTimeline.query()
        .where("m_timeline_id", timelineIds)
        .ids();

      const anggotaRombelIds = await MAnggotaRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .pluck("m_user_id");

      const siswa = await User.query()
        .withCount("absenKelas as hadir", (builder) => {
          builder.whereIn("id", tkTimelineIds).where({ absen: "hadir" });
        })
        .withCount("absenKelas as sakit", (builder) => {
          builder.whereIn("id", tkTimelineIds).where({ absen: "sakit" });
        })
        .withCount("absenKelas as izin", (builder) => {
          builder.whereIn("id", tkTimelineIds).where({ absen: "izin" });
        })
        .withCount("absenKelas as alpa", (builder) => {
          builder.whereIn("id", tkTimelineIds).whereNull("absen");
        })
        .select("id", "nama")
        .where({ dihapus: 0 })
        .whereIn("id", anggotaRombelIds)
        .fetch();

      const jumlahPertemuan = timelineIds.length;
      return response.ok({
        rombelMengajar,
        jumlahPertemuan,
        siswa,
      });
    } else if (tipe == "pertemuan") {
      const timelineAll = await MTimeline.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .fetch();

      const timeline = await MTimeline.query()
        .with("user")
        .with("rombel")
        .with("tkTimeline", (builder) => {
          builder.with("user");
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
        .withCount("tkTimeline as total_siswa")
        .where({ id: pertemuan_id })
        .andWhere({ dihapus: 0 })
        .first();

      const range = [
        moment(
          timeline.tipe == "tugas"
            ? timeline.toJSON().tugas.tanggal_pembagian
            : timeline.toJSON().tanggal_pembagian
        ).format("YYYY-MM-DD 00:00:00"),
        moment(
          timeline.tipe == "tugas"
            ? timeline.toJSON().tugas.tanggal_pembagian
            : timeline.toJSON().tanggal_pembagian
        ).format("YYYY-MM-DD 23:59:29"),
      ];

      const timelineBiasa = await MTimeline.query()
        .with("tugas", (builder) => {
          builder
            .with("soal", (builder) => {
              builder.where({ dihapus: 0 }).with("soal");
            })
            .with("timeline", (builder) => {
              builder.with("rombel").with("tkTimeline");
            });
        })
        .with("user")
        .withCount("tkTimeline as total_respon", (builder) => {
          builder.whereNotNull("waktu_pengumpulan");
        })
        .withCount("tkTimeline as total_absen", (builder) => {
          builder.whereNotNull("waktu_absen");
        })
        .withCount("tkTimeline as total_siswa")
        .where({ m_user_id: timeline.m_user_id })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_rombel_id: timeline.m_rombel_id })
        .whereBetween("tanggal_pembagian", range)
        .andWhereNot({ tipe: "tugas" })
        .fetch();

      const timelines = timelineBiasa;

      return response.ok({
        timeline,
        timelineAll,
        timelines,
        rombelMengajar,
      });
    }
  }

  async postBukuKerja({ response, request, auth }) {
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
      judul,
      moda,
      tingkat,
      deskripsi,
      lampiran,
      m_mata_pelajaran_id,
      tipe,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
    } = request.post();
    const rules = {
      judul: "required",
      lampiran: "required",
    };
    const message = {
      "judul.required": "Judul RPP harus diisi",
      "lampiran.required": "Lampiran RPP harus diisi",
    };
    if (!tipe) {
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    await MRpp.create({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      tipe,
      m_mata_pelajaran_id,
      m_user_id: user.id,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBukuKerja({ response, request, auth, params: { rpp_id } }) {
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
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
      tipe,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
    } = request.post();

    const rules = {
      judul: "required",
      lampiran: "required",
    };
    const message = {
      "judul.required": "Judul RPP harus diisi",
      "lampiran.required": "Lampiran RPP harus diisi",
    };
    if (!tipe) {
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    const rpp = await MRpp.query().where({ id: rpp_id }).update({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
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

  async deleteBukuKerja({ response, request, auth, params: { rpp_id } }) {
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

  async postBukuKerjaSoal({ response, request, auth }) {
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

    let {
      judul,
      moda,
      tingkat,
      deskripsi,
      lampiran,
      m_mata_pelajaran_id,
      tipe,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
      soal,
      m_user_id,
    } = request.post();
    const rules = {
      judul: "required",
      lampiran: "required",
    };
    const message = {
      "judul.required": "Judul RPP harus diisi",
      "lampiran.required": "Lampiran RPP harus diisi",
    };
    if (!tipe) {
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    m_user_id = m_user_id.length ? m_user_id : [];

    const allUser = await User.query()
      .select("id", "nama")
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "guru" })
      .first();

    let penyusun = `${allUser.toJSON().find((e) => e.id == user.id).nama}`;
    if (m_user_id) {
      await Promise.all(
        m_user_id.map(async (d) => {
          penyusun = `${penyusun}, ${
            allUser.toJSON().find((e) => e.id == d.id).nama
          } `;
        })
      );
    }

    await MRpp.create({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      tipe,
      m_mata_pelajaran_id,
      m_user_id: user.id,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
      soal,
      penyusun,
      m_sekolah_id: sekolah.id,
    });

    if (m_user_id.length) {
      await Promise.all(
        m_user_id.map(async (d) => {
          await MRpp.create({
            judul,
            moda,
            deskripsi,
            lampiran,
            tingkat,
            tipe,
            m_mata_pelajaran_id,
            m_user_id: d.id,
            m_ta_id,
            tanggal,
            m_rombel_id,
            waktu,
            kkm,
            soal,
            penyusun:m_user_id,
            m_sekolah_id: sekolah.id,
          });
        })
      );
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putBukuKerjaSoal({ response, request, auth, params: { rpp_id } }) {
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
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_mata_pelajaran_id,
      tipe,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
      soal,
      penyusun,
    } = request.post();

    const rules = {
      judul: "required",
      lampiran: "required",
    };
    const message = {
      "judul.required": "Judul RPP harus diisi",
      "lampiran.required": "Lampiran RPP harus diisi",
    };
    if (!tipe) {
      const validation = await validate(request.all(), rules, message);
      if (validation.fails()) {
        return response.unprocessableEntity(validation.messages());
      }
    }

    const rpp = await MRpp.query().where({ id: rpp_id }).update({
      judul,
      moda,
      deskripsi,
      lampiran,
      tingkat,
      m_ta_id,
      tanggal,
      m_rombel_id,
      waktu,
      kkm,
      soal,
      penyusun,
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

  async deleteBukuKerjaSoal({ response, request, auth, params: { rpp_id } }) {
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

    const {
      tingkat,
      daftar_ujian_id,
      page = 1,
      search,
      filter_mapel,
      filter_tipe,
      filter_tingkat,
    } = request.get();

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
          .orderBy("id", "desc")
          .fetch();
      } else {
        ujianTingkat = await MUjian.query()
          .select("id", "nama")
          .where({ tingkat: tingkat })
          .andWhere({ dihapus: 0 })
          .andWhere({ m_user_id: user.id })
          .orderBy("id", "desc")
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

    let mataPelajaran, ujian;

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

    if (user.role == "admin") {
      const userIds = await User.query()
        .where({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("role", ["guru", "admin"])
        .ids();
      ujian = MUjian.query()
        .with("mataPelajaran")
        .withCount("soalUjian as jumlahSoal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .whereIn("m_user_id", userIds)
        .orderBy("id", "desc");
    } else {
      ujian = MUjian.query()
        .with("mataPelajaran")
        .withCount("soalUjian as jumlahSoal", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ dihapus: 0 })
        .andWhere({ m_user_id: user.id })
        .orderBy("id", "desc");
    }

    if (search) {
      ujian = ujian.where("nama", "like", `%${search}%`);
    }
    if (filter_mapel) {
      ujian = ujian.where({ m_user_id: filter_mapel });
    }
    if (filter_tingkat) {
      ujian = ujian.where({ tingkat: filter_tingkat });
    }
    if (filter_tipe) {
      ujian = ujian.where({ tipe: filter_tipe });
    } else {
      ujian.whereNot({ tipe: "ppdb" });
    }

    ujian = await ujian.paginate(page, 20);

    let tingkatData = [];

    if (sekolah.tingkat == "SMK" || sekolah.tingkat == "SMA") {
      tingkatData = ["X", "XI", "XII", "XIII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkatData = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD") {
      tingkatData = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB") {
      tingkatData = [
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
      ];
    }

    let tipeUjian = [
      { value: "kuis", label: "Kuis" },
      { value: "ph", label: "Penilaian Harian" },
      { value: "pts1", label: "Penilaian Tengah Semester 1" },
      { value: "pts2", label: "Penilaian Tengah Semester 2" },
      { value: "pas1", label: "Penilaian Akhir Semester 1" },
      { value: "pas2", label: "Penilaian Akhir Semester 2" },
      { value: "us", label: "Ujian Sekolah" },
      { value: "to", label: "Try out" },
      { value: "literasi", label: "AKM - Literasi" },
      { value: "numerasi", label: "AKM - Numerasi" },
    ];

    return response.ok({
      ujian: ujian.toJSON().data,
      total: ujian.toJSON().total,
      lastPage: ujian.toJSON().lastPage,
      mataPelajaran: mataPelajaran,
      tingkat: tingkatData,
      tipeUjian: tipeUjian,
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

    let { nama, tipe, tingkat, m_mata_pelajaran_id, ujian_id, m_user_id } =
      request.post();

    // m_user_id = m_user_id.length ? m_user_id : [];

    const rules = {
      nama: "required",
      tipe: "required",
      tingkat: "required",
    };
    const message = {
      "nama.required": "Nama Ujian harus diisi",
      "tipe.required": "Tipe Ujian harus dipilih",
      "tingkat.required": "Tingkat Kelas harus dipilih",
      "m_mata_pelajaran_id.required": "Mata Pelajaran harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const ujian = await MUjian.create({
      nama,
      tipe,
      tingkat,
      m_mata_pelajaran_id,
      m_user_id: user.id,
      dihapus: 0,
    });


    await TkBankSoalGuru.create({
      m_ujian_id: ujian.id,
      m_user_id: user.id,
      dihapus: 0,
    });

    const idsGuru = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "guru" })
      .andWhere({ dihapus: 0 })
      .ids();

    const jumlahUjian = await MUjian.query()
      .whereIn("m_user_id", idsGuru)
      .andWhere({ dihapus: 0 })
      .getCount();

    await MSekolah.query().where({ id: sekolah.id }).update({
      jumlah_ujian: jumlahUjian,
    });
  

    let soal = 0;
    if (ujian_id) {
      const soalIds = await TkSoalUjian.query()
        .where({ m_ujian_id: ujian_id })
        .andWhere({ dihapus: 0 })
        .pluck("m_soal_ujian_id");
      soalIds.map(async (item) => {
        await TkSoalUjian.create({
          m_ujian_id: ujian.id,
          m_soal_ujian_id: item,
          dihapus: 0,
        });
        soal = soal + 1
      });
    }
    
    await MRpp.create({
      m_mata_pelajaran_id,
      judul: nama,
      tipe: "soal",
      tingkat,
      soal: soal,
      waktu: "0",
      tanggal: moment().format("YYYY-MM-DD"),
      m_ujian_id: ujian.id,
      tingkat,
      moda: "Ujian dari Smarteschool",
      m_user_id: user.id,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_ta_id:ta.id,
    });
    await MRpp.create({
      m_mata_pelajaran_id,
      judul: nama,
      tipe: "kisi soal",
      tingkat,
      soal: soal,
      waktu: "0",
      tanggal: moment().format("YYYY-MM-DD"),
      m_ujian_id: ujian.id,
      moda: "Ujian dari Smarteschool",
      m_user_id: user.id,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      m_ta_id:ta.id,
    });
    // if (m_user_id.length) {
    //   await Promise.all(
    //     m_user_id.map(async (d) => {
    //       await TkBankSoalGuru.query().create({
    //         m_ujian_id: ujian.id,
    //         m_user_id: d,
    //         dihapus: 0,
    //       });
    //       await MRpp.create({
    //         m_mata_pelajaran_id,
    //         judul: nama,
    //         tipe: "soal",
    //         tingkat,
    //         soal: soal,
    //         waktu: "0",
    //         tanggal: moment().format("YYYY-MM-DD"),
    //         ujian_id: ujian.id,
    //         moda: "Ujian dari Smarteschool",
    //         m_user_id: d,
    //         dihapus: 0,
    //         m_sekolah_id: sekolah.id,
    //       });
    //       await MRpp.create({
    //         m_mata_pelajaran_id,
    //         judul: nama,
    //         tipe: "kisi soal",
    //         tingkat,
    //         soal: soal,
    //         waktu: "0",
    //         tanggal: moment().format("YYYY-MM-DD"),
    //         ujian_id: ujian.id,
    //         moda: "Ujian dari Smarteschool",
    //         m_user_id: d,
    //         dihapus: 0,
    //         m_sekolah_id: sekolah.id,
    //       });
    //     })
    //   );
    // }

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
    const rules = {
      nama: "required",
      tipe: "required",
      tingkat: "required",
    };
    const message = {
      "nama.required": "Nama Ujian harus diisi",
      "tipe.required": "Tipe Ujian harus dipilih",
      "tingkat.required": "Tingkat Kelas harus dipilih",
      "m_mata_pelajaran_id.required": "Mata Pelajaran harus dipilih",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

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

  async ip({ response, request }) {
    return response.ok({ ip: [request.ip(), request.ips()] });
  }

  async notFoundPage({ response, request, auth }) {
    return `<p>Data tidak ditemukan, silahkan kembali ke <a href="http://getsmartschool.id">Smart School</a></p>`;
  }
}
module.exports = DinasController;

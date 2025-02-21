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
function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}
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

    const fname = `${Date.now()}.${fileUpload.extname}`;

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

    const fname = `${Date.now()}.${fileUpload.extname}`;

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
    // const fname = `${Date.now()}.${fileUpload.extname}`;
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
    // return "https://demoapi.smarteschool.id/uploads/" + fname;
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

    let { search, jenis, role, tanggal, page, jurusan_id, rombel_id, tingkat } =
      request.get();

    page = page ? parseInt(page) : 1;

    const awal = moment(tanggal).format("YYYY-MM-DD 00:00:00");
    const akhir = moment(tanggal).format("YYYY-MM-DD 23:59:59");

    if (jenis == "kehadiran") {
      let absenUser;
      absenUser = User.query()
        .with("absen", (builder) => {
          builder.where("created_at", "like", `%${tanggal}%`);
        })
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0 });

      let absen;
      absen = MAbsen.query()
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereBetween("created_at", [awal, akhir]);
      if (role == "siswa") {
        absenUser.andWhere({ role: "siswa" });
        absen.andWhere({ role: role });
      } else if (role == "gtk") {
        absenUser.whereIn("role", ["guru", "admin", "kepsek"]);
        absen.whereIn("role", ["guru", "admin", "kepsek"]);
      }
      if (search) {
        absenUser.andWhere("nama", "like", `%${search}%`);
        absen.whereHas("user", (builder) => {
          builder.where("nama", "like", `%${search}%`)
        });
      }
      if (rombel_id) {
        absenUser.whereHas("anggotaRombel", (builder) => {
          builder.where({ m_rombel_id: rombel_id })
        });
        absen.whereHas("user", (builder) => {
          builder.whereHas("anggotaRombel", (builder) => {
            builder.where({ m_rombel_id: rombel_id });
          })
        });
      }
      absenUser = await absenUser.paginate(page, 25);
      absen = await absen.fetch();

      let total = parseInt(absenUser.pages.total);
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
      if (tingkat) {
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

    const user = await auth.getUser();
    let { search, tipe, kode_hari } = request.get();

    const ta = await this.getTAAktif(sekolah);

    const semuaGuru = await User.query()
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "guru" })
      .fetch();

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_user_id: user.id })
      .ids();

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_ta_id: ta.id })
      .ids();

    const rombelJadwal = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .whereIn("m_rombel_id", rombelIds)
      .where({ m_ta_id: ta.id })
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .fetch();

    let janganUlangRombel = [];
    const rombelData = rombelJadwal.toJSON().filter((d) => {
      if (
        !janganUlangRombel.find(
          (e) =>
            e.m_rombel_id == d.m_rombel_id &&
            e.m_mata_pelajaran_id == d.m_mata_pelajaran_id
        )
      ) {
        janganUlangRombel.push(d);
        return true;
      } else {
        return false;
      }
    });

    const rombel = await Promise.all(
      rombelData.map(async (d) => {
        return d.rombel;
      })
    );
    const mataPelajaran = await MMataPelajaran.query()
      .select("id", "nama")
      .where({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let tingkatRombel = [];
    const semuaTA = await Mta.query()
      .select("id", "tahun", "semester")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .fetch();
    if (sekolah.tingkat == "SMK" || sekolah.tingkat == "SMA") {
      tingkatRombel = ["X", "XI", "XII"];
    } else if (sekolah.tingkat == "SMP") {
      tingkatRombel = ["VII", "VIII", "IX"];
    } else if (sekolah.tingkat == "SD") {
      tingkatRombel = ["I", "II", "III", "IV", "V", "VI"];
    } else if (sekolah.tingkat == "SLB") {
      tingkatRombel = [
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
    let data;
    if (tipe == "skl") {
      data = MRpp.query()
        .with("mataPelajaran")
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ tipe: "skl" })
        .orderBy("created_at", "desc");
    } else if (tipe == "rpp") {
      data = MRpp.query()
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "rpp" });
    } else if (tipe == "silabus") {
      data = MRpp.query()
        .with("mataPelajaran")
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "silabus" });
    } else if (tipe == "kkm") {
      data = MRpp.query()
        .with("mataPelajaran")
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "kkm" });
    } else if (tipe == "kode etik") {
      data = MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "kode etik" });
    } else if (tipe == "ikrar") {
      data = MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "ikrar" });
    } else if (tipe == "tata tertib") {
      data = MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "tata tertib" });
    } else if (tipe == "pembiasaan") {
      data = MRpp.query()
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "pembiasaan" });
    } else if (tipe == "kalender") {
      data = MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "kalender" });
    } else if (tipe == "alokasi") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "alokasi" });
    } else if (tipe == "ptahunan") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "ptahunan" });
    } else if (tipe == "psemester") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "psemester" });
    } else if (tipe == "jurnal") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "jurnal" });
    } else if (tipe == "daftar evaluasi") {
      data = MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "daftar evaluasi" });
    } else if (tipe == "tindak lanjut") {
      data = MRpp.query()
        .with("ta")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "tindak lanjut" });
    } else if (tipe == "akhlak") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "akhlak" });
    } else if (tipe == "hasil ulangan") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "hasil ulangan" });
    } else if (tipe == "program perbaikan") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "program perbaikan" });
    } else if (tipe == "buku pegangan") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "buku pegangan" });
    } else if (tipe == "daya serap") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "daya serap" });
    } else if (tipe == "kisi soal") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "kisi soal" });
    } else if (tipe == "soal") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "soal" });
    } else if (tipe == "butir soal") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "butir soal" });
    } else if (tipe == "perbaikan soal") {
      data = MRpp.query()
        .with("ta")
        .with("rombel")
        .with("mataPelajaran")
        .where({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .orderBy("created_at", "desc")
        .where({ tipe: "perbaikan soal" });
    } else if (tipe == "kehadiran") {
      data = MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds);
    } else if (tipe == "nilai") {
      data = MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds);
    } else if (tipe == "jadwal") {
      const jamIds = await MJamMengajar.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ kode_hari: kode_hari })
        .ids();
      data = MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .with("jamMengajar")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .whereIn("m_jam_mengajar_id", jamIds);
    }

    if (search) {
      data = data.where("judul", "like", `%${search}%`);
    }
    data = await data.fetch();

    return response.ok({
      data,
      rombel,
      semuaGuru,
      mataPelajaran,
      semuaTA,
      tingkatRombel,
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

  async getDaftarKehadiran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    const ta = await this.getTAAktif(sekolah);
    let { tipe, pertemuan_id, m_rombel_id, m_mata_pelajaran_id } =
      request.get();

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

    let janganUlangRombel = [];
    const rombelData = rombelMengajar.toJSON().filter((d) => {
      if (
        !janganUlangRombel.find(
          (e) =>
            e.m_rombel_id == d.m_rombel_id &&
            e.m_mata_pelajaran_id == d.m_mata_pelajaran_id
        )
      ) {
        janganUlangRombel.push(d);
        return true;
      } else {
        return false;
      }
    });

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder.select("id", "nama");
      })
      .with("mataPelajaran", (builder) => {
        builder.select("id", "nama", "m_user_id");
      })
      .where({ m_rombel_id: m_rombel_id })
      .where({ m_ta_id: ta.id })
      .where({ m_mata_pelajaran_id: m_mata_pelajaran_id })
      .first();
    if (tipe == "rekap") {
      const timelineIds = await MTimeline.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .ids();

      if (!timelineIds) {
        return "Guru belum membuat pertemuan";
      }

      const tkTimelineIds = await TkTimeline.query()
        .where("m_timeline_id", timelineIds)
        .ids();

      const anggotaRombelIds = await MAnggotaRombel.query()
        .where({ dihapus: 0 })
        .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .pluck("m_user_id");

      const siswa = await User.query()
        .withCount("absenRombel as hadir", (builder) => {
          builder.whereIn("id", tkTimelineIds).where({ absen: "hadir" });
        })
        .withCount("absenRombel as sakit", (builder) => {
          builder.whereIn("id", tkTimelineIds).where({ absen: "sakit" });
        })
        .withCount("absenRombel as izin", (builder) => {
          builder.whereIn("id", tkTimelineIds).where({ absen: "izin" });
        })
        .withCount("absenRombel as alpa", (builder) => {
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
        rombelData,
      });
    } else if (tipe == "pertemuan") {
      const timelineAll = await MTimeline.query()
        .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
        .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
        .andWhere({ tipe: "absen" })
        .andWhere({ dihapus: 0 })
        .fetch();
      if (!pertemuan_id) {
        return response.ok({
          // timeline,
          timelineAll,
          // timelines,
          rombelMengajar,
          rombelData,
        });
      }

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
        rombelData,
      });
    }
  }
  async getDaftarNilai({
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
    const ta = await this.getTAAktif(sekolah);
    let { tipe, search } = request.get();

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

    let janganUlangRombel = [];
    const rombelData = rombelMengajar.toJSON().filter((d) => {
      if (
        !janganUlangRombel.find(
          (e) =>
            e.m_rombel_id == d.m_rombel_id &&
            e.m_mata_pelajaran_id == d.m_mata_pelajaran_id
        )
      ) {
        janganUlangRombel.push(d);
        return true;
      } else {
        return false;
      }
    });
    const data = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: jadwal_mengajar_id })
      .first();

    let materi;
    materi = MMateri.query()
      .where({ m_mata_pelajaran_id: data.m_mata_pelajaran_id })
      .andWhere({ tingkat: data.toJSON().rombel.tingkat })
      .andWhere({ dihapus: 0 });
    if (data.toJSON().mataPelajaran.kelompok == "C") {
      materi.andWhere({ m_jurusan_id: data.toJSON().rombel.m_jurusan_id });
    }
    materi = await materi.first();

    let rekapIds;
    rekapIds = MRekap.query()
      .where({ m_materi_id: materi.id })
      .andWhere({ tipe: tipe })
      .andWhere({ m_ta_id: ta.id });
    if (tipe == "ujian") {
      rekapIds.where({ teknik: "UH" });
    }
    rekapIds = await rekapIds.ids();

    const rekapRombelIds = await MRekapRombel.query()
      .whereIn("m_rekap_id", rekapIds)
      .andWhere({ m_rombel_id: data.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .ids();
    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder
          .with("anggotaRombel", (builder) => {
            builder
              .with("user", async (builder) => {
                builder
                  .select(
                    "id",
                    "nama",
                    "whatsapp",
                    "email",
                    "avatar",
                    "gender",
                    "agama",
                    "m_sekolah_id"
                  )
                  // .with("nilaiRekapSiswa", (builder) => {
                  //   builder.whereIn("m_rekap_rombel_id", rekapRombelIds);
                  // })
                  .withCount("nilaiRekapSiswa as jumlahTotal", (builder) => {
                    builder.whereIn("m_rekap_rombel_id", rekapRombelIds);
                  })
                  .withCount("nilaiRekapSiswa as jumlahKkm", (builder) => {
                    builder
                      .whereIn("m_rekap_rombel_id", rekapRombelIds)
                      .where(
                        "nilai",
                        "<",
                        `${data.toJSON().mataPelajaran.kkm}`
                      );
                  })
                  .withCount("nilaiRekapSiswa as nilaiKosong", (builder) => {
                    builder
                      .whereIn("m_rekap_rombel_id", rekapRombelIds)
                      .where({ nilai: 0 });
                  });
                if (search) {
                  builder.where("nama", "like", `%${search}%`);
                }
              })
              .where({ dihapus: 0 });
          })
          .with("user");
      })
      .with("mataPelajaran", (builder) => {
        builder.select("id", "nama");
      })
      .where({ m_ta_id: ta.id })
      .where({ id: jadwal_mengajar_id })
      .first();

    return response.ok({
      jadwalMengajar,
      rombelData,
    });
  }
  async detailSiswaRekap({
    response,
    request,
    auth,
    params: { user_id, jadwal_mengajar_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);
    const siswa = await User.query()
      .with("anggotaRombel", (builder) => {
        builder.with("rombel").where({ dihapus: 0 });
      })
      .where({ id: user_id })
      .first();
    const data = await MJadwalMengajar.query()
      .where({ id: jadwal_mengajar_id })
      .first();

    const mapelSingkat = await MMataPelajaran.query()
      .where({ id: data.m_mata_pelajaran_id })
      .first();

    const mapel = await MMataPelajaran.query()
      .with("user")
      .with("materi", (builder) => {
        builder.where({ tingkat: siswa.toJSON().anggotaRombel.rombel.tingkat });
        if (mapelSingkat.kelompok == "C") {
          if (siswa.toJSON().anggotaRombel.rombel.m_jurusan_id != null) {
            builder.andWhere({
              m_jurusan_id: siswa.toJSON().anggotaRombel.rombel.m_jurusan_id,
            });
          }
        }
      })
      .where({ id: data.m_mata_pelajaran_id })
      .first();

    const rekap = await TkRekapNilai.query()
      .with("rekapRombel", (builder) => {
        builder.with("rekap", (builder) => {
          builder
            .where({ tipe: "tugas" })
            .andWhere({ m_ta_id: ta.id })
            .andWhere({ dihapus: 0 })
            .andWhere({ m_materi_id: mapel.toJSON().materi.id });
        });
      })
      .where({ m_user_id: user_id })
      .fetch();

    const rekapUjian = await TkRekapNilai.query()
      .with("rekapRombel", (builder) => {
        builder.with("rekap", (builder) => {
          builder
            .where({ tipe: "ujian" })
            .andWhere({ teknik: "UH" })
            .andWhere({ m_ta_id: ta.id })
            .andWhere({ dihapus: 0 })
            .andWhere({ m_materi_id: mapel.toJSON().materi.id });
        });
      })
      .where({ m_user_id: user_id })
      .fetch();

    const result = await Promise.all(
      rekap.toJSON().map(async (d) => {
        if (d.rekapRombel.rekap == null) {
          return;
        }
        return d;
      })
    );

    const dataTugas = result.filter((d) => d != null);

    let jumlah1 = 0;

    result
      .filter((d) => d != null)
      .forEach((d) => {
        jumlah1 += d.nilai;
      });

    const rataTugas = jumlah1 / data.length;

    const result1 = await Promise.all(
      rekapUjian.toJSON().map(async (d) => {
        if (d.rekapRombel.rekap == null) {
          return;
        }
        return d;
      })
    );

    const dataUjian = result1.filter((d) => d != null);

    let jumlah = 0;

    result1
      .filter((d) => d != null)
      .forEach((d) => {
        jumlah += d.nilai;
      });

    const rataUjian = jumlah / dataUjian.length;

    return response.ok({
      dataTugas,
      rataTugas,
      dataUjian,
      rataUjian,
      siswa,
      mapel,
    });
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
      .fetch();

    // return allUser

    // return m_user_id;
    let penyusun = `${user.nama}`;
    if (m_user_id) {
      await Promise.all(
        m_user_id.map(async (d) => {
          const penyusun1 = allUser.toJSON().find((e) => e.id == d);
          // return penyusun1;
          penyusun = `${penyusun}, ${penyusun1.nama}`;
        })
      );
      // return result;
    }
    // return penyusun;

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
            m_user_id: d,
            m_ta_id,
            tanggal,
            m_rombel_id,
            waktu,
            kkm,
            soal,
            penyusun,
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
        soal = soal + 1;
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
      m_ta_id: ta.id,
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
      m_ta_id: ta.id,
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

  async getBukuKerjaDinas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    let { tipe, user_id } = request.get();

    const ta = await this.getTAAktif(sekolah);

    let total = 0;
    const guru = await User.query()
      .with("rpp", (builder) => {
        builder
          .where({ dihapus: 0 })
          .whereNotNull("tipe")
          .select("id", "m_user_id", "tipe");
      })
      .select("id", "nama")
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("nama", "asc")
      .fetch();

    if (tipe == "bukuKerja1") {
      const skl = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .andWhere({ tipe: "skl" })
        .fetch();

      const rpp = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: null })
        .fetch();

      const silabus = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "silabus" })
        .fetch();

      const kkm = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kkm" })
        .fetch();

      if (skl.toJSON().length) {
        total = total + 1;
      }
      if (rpp.toJSON().length) {
        total = total + 1;
      }
      if (silabus.toJSON().length) {
        total = total + 1;
      }
      if (kkm.toJSON().length) {
        total = total + 1;
      }

      return response.ok({
        total,
        skl,
        skl_total: skl.toJSON().length,
        rpp,
        rpp_total: rpp.toJSON().length,
        silabus,
        silabus_total: silabus.toJSON().length,
        kkm,
        kkm_total: kkm.toJSON().length,
        guru,
      });
    }
    if (tipe == "bukuKerja2") {
      const kodeEtik = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kode etik" })
        .fetch();

      const ikrar = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "ikrar" })
        .fetch();

      const tataTertib = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "tata tertib" })
        .fetch();

      const pembiasaan = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "pembiasaan" })
        .fetch();

      const kalender = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kalender" })
        .fetch();

      const alokasi = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "alokasi" })
        .fetch();

      const ptahunan = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "ptahunan" })
        .fetch();

      const psemester = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "psemester" })
        .fetch();

      const jurnal = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "jurnal" })
        .fetch();

      if (kodeEtik.toJSON().length) {
        total = total + 1;
      }
      if (ikrar.toJSON().length) {
        total = total + 1;
      }
      if (tataTertib.toJSON().length) {
        total = total + 1;
      }
      if (pembiasaan.toJSON().length) {
        total = total + 1;
      }
      if (kalender.toJSON().length) {
        total = total + 1;
      }
      if (alokasi.toJSON().length) {
        total = total + 1;
      }
      if (ptahunan.toJSON().length) {
        total = total + 1;
      }
      if (psemester.toJSON().length) {
        total = total + 1;
      }
      if (jurnal.toJSON().length) {
        total = total + 1;
      }
      return response.ok({
        total,
        kodeEtik,
        ikrar,
        tataTertib,
        pembiasaan,
        kalender,
        alokasi,
        ptahunan,
        psemester,
        jurnal,
        kodeEtik_total: kodeEtik.toJSON().length,
        ikrar_total: ikrar.toJSON().length,
        tataTertib_total: tataTertib.toJSON().length,
        pembiasaan_total: pembiasaan.toJSON().length,
        kalender_total: kalender.toJSON().length,
        alokasi_total: alokasi.toJSON().length,
        ptahunan_total: ptahunan.toJSON().length,
        psemester_total: psemester.toJSON().length,
        jurnal_total: jurnal.toJSON().length,
        guru,
      });
    }

    if (tipe == "bukuKerja3") {
      const mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_user_id: user_id })
        .ids();

      const rombelIds = await MRombel.query()
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .where({ m_ta_id: ta.id })
        .ids();
      const kehadiran = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .fetch();

      const nilai = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .fetch();

      const jadwalMengajar = user_id;

      const akhlak = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "akhlak" })
        .fetch();

      const hasilUlangan = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "hasil ulangan" })
        .fetch();

      const progPerbaikan = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "program perbaikan" })
        .fetch();

      const bukuPegangan = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "buku pegangan" })
        .fetch();

      const dayaSerap = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "daya serap" })
        .fetch();

      const kisiSoal = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "kisi soal" })
        .fetch();

      const soal = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "soal" })
        .fetch();

      const butirSoal = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "butir soal" })
        .fetch();

      const perbaikanSoal = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "perbaikan soal" })
        .fetch();

      if (akhlak.toJSON().length) {
        total = total + 1;
      }
      if (hasilUlangan.toJSON().length) {
        total = total + 1;
      }
      if (progPerbaikan.toJSON().length) {
        total = total + 1;
      }
      if (hasilUlangan.toJSON().length) {
        total = total + 1;
      }
      if (bukuPegangan.toJSON().length) {
        total = total + 1;
      }
      if (dayaSerap.toJSON().length) {
        total = total + 1;
      }
      if (kisiSoal.toJSON().length) {
        total = total + 1;
      }
      if (soal.toJSON().length) {
        total = total + 1;
      }
      if (butirSoal.toJSON().length) {
        total = total + 1;
      }
      if (perbaikanSoal.toJSON().length) {
        total = total + 1;
      }
      total = total + 2;
      return response.ok({
        kehadiran,
        nilai,
        jadwalMengajar,
        akhlak,
        hasilUlangan,
        progPerbaikan,
        hasilUlangan,
        bukuPegangan,
        dayaSerap,
        kisiSoal,
        soal,
        butirSoal,
        perbaikanSoal,
        kehadiran_total: kehadiran.toJSON().length,
        nilai_total: nilai.toJSON().length,
        jadwalMengajar_total: 1,
        akhlak_total: akhlak.toJSON().length,
        hasilUlangan_total: hasilUlangan.toJSON().length,
        progPerbaikan_total: progPerbaikan.toJSON().length,
        hasilUlangan_total: hasilUlangan.toJSON().length,
        bukuPegangan_total: bukuPegangan.toJSON().length,
        dayaSerap_total: dayaSerap.toJSON().length,
        kisiSoal_total: kisiSoal.toJSON().length,
        soal_total: soal.toJSON().length,
        butirSoal_total: butirSoal.toJSON().length,
        perbaikanSoal_total: perbaikanSoal.toJSON().length,
        guru,
        total,
      });
    }

    if (tipe == "bukuKerja4") {
      const daftarEvaluasi = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "daftar evaluasi" })
        .fetch();
      const tindakLanjut = await MRpp.query()
        .where({ m_user_id: user_id })
        .andWhere({ dihapus: 0 })
        .where({ tipe: "tindak lanjut" })
        .fetch();

      if (daftarEvaluasi.toJSON().length) {
        total = total + 1;
      }
      if (tindakLanjut.toJSON().length) {
        total = total + 1;
      }

      return response.ok({
        total,
        daftarEvaluasi,
        tindakLanjut,
        daftarEvaluasi_total: daftarEvaluasi.toJSON().length,
        tindakLanjut_total: tindakLanjut.toJSON().length,
        guru,
      });
    }
    return response.ok({
      data,
      rombel,
      mataPelajaran,
      semuaTA,
      tingkatRombel,
    });
  }

  async downloadTimelineAbsen({ response, request, params: { pertemuan_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    // const { pertemuan_id } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD HH-mm-ss-") + Date.now();

    const timeline = await MTimeline.query()
      .with("tkTimeline", (builder) => {
        builder.with("user");
      })
      .with("user")
      .andWhere({ tipe: "absen" })
      .andWhere({ dihapus: 0 })
      .andWhere({ id: pertemuan_id })
      .first();
    // return timeline

    const workbook = new Excel.Workbook();
    // Create workbook & add worksheet
    const worksheet = workbook.addWorksheet(
      `Pertemuan ${timeline.toJSON().tanggal_pertemuan}`
    );

    await Promise.all(
      timeline
        .toJSON()
        .tkTimeline.sort((a, b) =>
          ("" + a.user.nama).localeCompare("" + b.user.nama)
        )
        .map(async (e, idx) => {
          // add column headers
          worksheet.getRow(10).values = ["No", "Nama", "Absen", "Waktu Absen"];

          worksheet.columns = [
            { key: "no" },
            { key: "user" },
            { key: "absen" },
            { key: "waktu_absen" },
          ];

          // Add row using key mapping to columns
          const row = worksheet.addRow({
            no: `${idx + 1}`,
            user: e.user.nama,
            absen: e.absen || "alpa",
            waktu_absen: e.waktu_absen,
          });
        })
    );

    worksheet.getCell("A1").value = "Nama";
    worksheet.getCell("B1").value = timeline.toJSON().user.nama;
    worksheet.getCell("D1").value = "NIP";
    worksheet.getCell("E1").value = timeline.toJSON().user.nip;
    worksheet.getCell("D2").value = "Link Pertemuan";
    worksheet.getCell("E2").value = timeline.gmeet;
    worksheet.getCell("A2").value = "Tanggal Pertemuan";
    worksheet.getCell("B2").value = timeline.toJSON().tanggal_dibuat;

    worksheet.getCell("A4").value = "RPP";
    worksheet.getCell("A5").value = timeline.toJSON().rpp
      ? timeline.toJSON().rpp.toString()
      : "-";

    worksheet.getCell("A7").value = "Deskripsi";
    worksheet.getCell("A8").value = timeline.deskripsi;

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

    worksheet.addConditionalFormatting({
      ref: `A11:D${timeline.toJSON().tkTimeline.length + 10}`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
              // bold: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
            // },
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
      ref: "A10:D10",
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
    worksheet.getColumn("A").width = 6;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 10;
    worksheet.getColumn("D").width = 20;

    let namaFile = `/uploads/absen-pertemuan-${
      timeline.toJSON().tanggal_pertemuan
    }-${Date.now()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadRekapAbsenSiswaDinas({ response, request, auth }) {
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
    const { jadwal_mengajar_id } = request.post();
    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel", (builder) => {
        builder.select("id", "nama");
      })
      .with("mataPelajaran", (builder) => {
        builder.select("id", "nama", "m_user_id");
      })
      // .where({ m_rombel_id: m_rombel_id })
      .where({ m_ta_id: ta.id })
      .where({ id: jadwal_mengajar_id })
      .first();

    // const rombel = await MRombel.query().where({ id: jadwalMengajar.m_rombel_id }).first();
    const timelineIds = await MTimeline.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .where({ m_user_id: jadwalMengajar.toJSON().mataPelajaran.m_user_id })
      .andWhere({ tipe: "absen" })
      .andWhere({ dihapus: 0 })
      .ids();

    if (!timelineIds) {
      return "Guru belum membuat pertemuan";
    }
    const tkTimelineIds = await TkTimeline.query()
      .whereIn("m_timeline_id", timelineIds)
      .ids();

    const anggotaRombelIds = await MAnggotaRombel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .pluck("m_user_id");

    const absenSiswa = await User.query()
      .select("id", "nama", "whatsapp")
      .withCount("absenRombel as hadir", (builder) => {
        builder.whereIn("id", tkTimelineIds).where({ absen: "hadir" });
      })
      .withCount("absenRombel as sakit", (builder) => {
        builder.whereIn("id", tkTimelineIds).where({ absen: "sakit" });
      })
      .withCount("absenRombel as izin", (builder) => {
        builder.whereIn("id", tkTimelineIds).where({ absen: "izin" });
      })
      .withCount("absenRombel as alpa", (builder) => {
        builder.whereIn("id", tkTimelineIds).whereNull("absen");
      })
      .where({ dihapus: 0 })
      .whereIn("id", anggotaRombelIds)
      .fetch();

    const jumlahPertemuan = timelineIds.length;

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`RekapAbsen`);
    worksheet.getCell(
      "A5"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: `A1:H4`,
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
      ref: `A4:H4`,
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
    worksheet.mergeCells(`A1:H1`);
    worksheet.mergeCells(`A2:H2`);
    worksheet.mergeCells(`A3:H3`);
    worksheet.mergeCells(`A4:H4`);
    worksheet.addConditionalFormatting({
      ref: `A6:H6`,
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
      absenSiswa.toJSON().map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 6}:H${(idx + 1) * 1 + 6}`,
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
          ref: `A${(idx + 1) * 1 + 6}`,
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
        worksheet.getRow(6).values = [
          "No",
          "Nama",
          "Whatsapp",
          "Hadir",
          // "Telat",
          "Sakit",
          "Izin",
          "Alpa",
          "Persentase",
        ];

        worksheet.columns = [
          { key: "no" },
          { key: "user" },
          { key: "whatsapp" },
          { key: "hadir" },
          // { key: "telat" },
          { key: "sakit" },
          { key: "izin" },
          { key: "alpa" },
          { key: "persen" },
        ];

        let row = worksheet.addRow({
          no: `${idx + 1}`,
          user: d ? d.nama : "-",
          whatsapp: d ? d.whatsapp : "-",
          hadir: d ? d.__meta__.hadir : "-",
          // telat: d ? d.__meta__.telat : "-",
          sakit: d ? d.__meta__.sakit : "-",
          izin: d ? d.__meta__.izin : "-",
          alpa: d ? d.__meta__.alpa : "-",
          persen: `${(d ? d.__meta__.hadir : "0" / jumlahPertemuan) * 100}%`,
        });
      })
    );

    worksheet.getCell("A1").value = "Rekap Absen";
    worksheet.getCell("A2").value = sekolah.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell(
      "A4"
    ).value = `Jumlah Total : ${jumlahPertemuan} Pertemuan`;

    worksheet.views = [
      {
        state: "frozen",
        xSplit: 2,
        ySplit: 6,
        topLeftCell: "A6",
        activeCell: "A6",
      },
    ];

    let namaFile = `/uploads/daftar-hadir-${
      jadwalMengajar.toJSON().rombel.nama
    } ${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async downloadRekapNilai({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();
    const { jadwal_mengajar_id, tipe } = request.post();
    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("mataPelajaran", (builder) => {
        builder.with("user");
      })
      .with("rombel")
      .where({ id: jadwal_mengajar_id })
      .first();

    let materi;
    materi = MMateri.query()
      .where({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      .andWhere({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
      .andWhere({ dihapus: 0 });
    if (jadwalMengajar.toJSON().mataPelajaran.kelompok == "C") {
      materi.andWhere({
        m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id,
      });
    }
    materi = await materi.first();

    let rekapIds;
    rekapIds = MRekap.query()
      .where({ m_materi_id: materi.id })
      .andWhere({ tipe: tipe })
      .andWhere({ m_ta_id: ta.id });
    if (tipe == "ujian") {
      rekapIds.where({ teknik: "UH" });
    }
    rekapIds = await rekapIds.ids();

    const rekapRombelIds = await MRekapRombel.query()
      .whereIn("m_rekap_id", rekapIds)
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .ids();

    const rekapRombel = await MRekapRombel.query()
      .with("rekap")
      .whereIn("m_rekap_id", rekapIds)
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "asc")
      .fetch();

    // return rekapRombel;

    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    const analisisNilai = await User.query()
      .with("nilaiRekapSiswa", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelIds)
          .orderBy("m_rekap_rombel_id", "asc");
      })
      .withCount("nilaiRekapSiswa as jumlahTotal", (builder) => {
        builder.whereIn("m_rekap_rombel_id", rekapRombelIds);
      })
      .withCount("nilaiRekapSiswa as jumlahKkm", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelIds)
          .where("nilai", "<", `${jadwalMengajar.toJSON().mataPelajaran.kkm}`);
      })
      .withCount("nilaiRekapSiswa as nilaiKosong", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelIds)
          .where({ nilai: 0 });
      })
      .whereIn("id", userIds)
      .fetch();

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap ${tipe}`);
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.getColumn("A").width = 28;
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 8;
    worksheet.getColumn("D").width = 8.5;
    worksheet.getColumn("E").width = 9;
    worksheet.getColumn("F").width = 14;
    worksheet.getColumn("G").width = 10;
    worksheet.getColumn("H").width = 8;
    worksheet.getColumn("I").width = 11;

    let totalTugas;
    // add column headers
    await Promise.all(
      analisisNilai
        .toJSON()
        .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
        .map(async (d, idx) => {
          worksheet.getRow(7).values = [
            "No",
            "Nama",
            "Jumlah Nilai",
            "Dibawah KKM",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "user" },
            { key: "jumlah" },
            { key: "dibawahkkm" },
          ];
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            user: d ? d.nama : "-",
            jumlah: `${d.__meta__.jumlahTotal - d.__meta__.nilaiKosong}/${
              d.__meta__.jumlahTotal
            } Nilai`,
            dibawahkkm: `${d.__meta__.jumlahKkm} Nilai`,
          });
          totalTugas = d.nilaiRekapSiswa.length;
          // const row = worksheet.getRow(8);
          await Promise.all(
            d.nilaiRekapSiswa.map(async (e, nox) => {
              worksheet.getColumn([`${(nox + 1) * 1 + 4}`]).values = [
                ``,
                ``,
                ``,
                ``,
                ``,
                ``,
                `${titleCase(tipe)} ${nox + 1}`,
                ,
              ];
              row.getCell([`${(nox + 1) * 1 + 4}`]).value = `${
                e.nilai ? e.nilai : "0"
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
            })
          );

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
    worksheet.addConditionalFormatting({
      ref: `A7:${colName(totalTugas + 3)}7`,
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
    worksheet.mergeCells(`A1:${colName(totalTugas + 3)}1`);
    worksheet.mergeCells(`A2:${colName(totalTugas + 3)}2`);
    worksheet.mergeCells(`A3:${colName(totalTugas + 3)}3`);
    worksheet.mergeCells(`A4:${colName(totalTugas + 3)}4`);
    worksheet.mergeCells(`A6:${colName(totalTugas + 3)}6`);
    worksheet.addConditionalFormatting({
      ref: `A1:${colName(totalTugas + 3)}4`,
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
    await Promise.all(
      rekapRombel.toJSON().map(async (d, idx) => {
        worksheet.getRow(`${analisisNilai.toJSON().length + 10}`).values = [
          "No",
          "Materi",
          `${titleCase(tipe)}`,
          "Nama Tugas",
        ];
        worksheet.columns = [
          { key: "no" },
          { key: "materi" },
          { key: "tugas" },
          { key: "nama" },
        ];
        let row = worksheet.addRow({
          no: `${idx + 1}`,
          materi: d.rekap ? d.rekap.judul : "-",
          tugas: `${titleCase(tipe)} ${idx + 1}`,
          nama: `${d ? d.judul : "-"}`,
        });
      })
    );

    // return analisisNilai.toJSON().length;
    worksheet.addConditionalFormatting({
      ref: `A${analisisNilai.toJSON().length + 10}:D${
        analisisNilai.toJSON().length + 10
      }`,
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
      ref: `A${analisisNilai.toJSON().length + 10}:D${
        analisisNilai.toJSON().length + 10 + rekapRombel.toJSON().length
      }`,
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
              // bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: {
            //     argb: "C0C0C0",
            //     fgColor: { argb: "C0C0C0" },
            //   },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.views = [
      {
        state: "frozen",
        xSplit: 2,
        ySplit: 7,
        topLeftCell: "A8",
        activeCell: "A8",
      },
    ];
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;
    worksheet.getColumn("A").width = 6;
    worksheet.getColumn("B").width = 18;
    worksheet.getColumn("C").width = 16;
    worksheet.getColumn("D").width = 20;
    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    let namaFile = `/uploads/rekap-nilai-${tipe}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadSemuaRekapNilai({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();
    const { jadwal_mengajar_id } = request.post();
    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("mataPelajaran", (builder) => {
        builder.with("user");
      })
      .with("rombel")
      .where({ id: jadwal_mengajar_id })
      .first();

    let materi;
    materi = MMateri.query()
      .where({ m_mata_pelajaran_id: jadwalMengajar.m_mata_pelajaran_id })
      .andWhere({ tingkat: jadwalMengajar.toJSON().rombel.tingkat })
      .andWhere({ dihapus: 0 });
    if (jadwalMengajar.toJSON().mataPelajaran.kelompok == "C") {
      materi.andWhere({
        m_jurusan_id: jadwalMengajar.toJSON().rombel.m_jurusan_id,
      });
    }
    materi = await materi.first();

    const rekapIds = await MRekap.query()
      .where({ m_materi_id: materi.id })
      .andWhere({ tipe: "tugas" })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const rekapUjianIds = await MRekap.query()
      .where({ m_materi_id: materi.id })
      .andWhere({ tipe: "ujian" })
      .where({ teknik: "UH" })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    const rekapRombelIds = await MRekapRombel.query()
      .whereIn("m_rekap_id", rekapIds)
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .ids();
    const rekapRombelUjianIds = await MRekapRombel.query()
      .whereIn("m_rekap_id", rekapUjianIds)
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .ids();

    const rekapRombel = await MRekapRombel.query()
      .with("rekap")
      .whereIn("m_rekap_id", rekapIds)
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "asc")
      .fetch();

    const rekapRombelUjian = await MRekapRombel.query()
      .with("rekap")
      .whereIn("m_rekap_id", rekapUjianIds)
      .andWhere({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "asc")
      .fetch();

    // return rekapRombel;

    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    const analisisNilai = await User.query()
      .with("nilaiRekapSiswa", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelIds)
          .orderBy("m_rekap_rombel_id", "asc");
      })
      .withCount("nilaiRekapSiswa as jumlahTotal", (builder) => {
        builder.whereIn("m_rekap_rombel_id", rekapRombelIds);
      })
      .withCount("nilaiRekapSiswa as jumlahKkm", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelIds)
          .where("nilai", "<", `${jadwalMengajar.toJSON().mataPelajaran.kkm}`);
      })
      .withCount("nilaiRekapSiswa as nilaiKosong", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelIds)
          .where({ nilai: 0 });
      })
      .whereIn("id", userIds)
      .fetch();

    const analisisNilaiUjian = await User.query()
      .with("nilaiRekapSiswa", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelUjianIds)
          .orderBy("m_rekap_rombel_id", "asc");
      })
      .withCount("nilaiRekapSiswa as jumlahTotal", (builder) => {
        builder.whereIn("m_rekap_rombel_id", rekapRombelUjianIds);
      })
      .withCount("nilaiRekapSiswa as jumlahKkm", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelUjianIds)
          .where("nilai", "<", `${jadwalMengajar.toJSON().mataPelajaran.kkm}`);
      })
      .withCount("nilaiRekapSiswa as nilaiKosong", (builder) => {
        builder
          .whereIn("m_rekap_rombel_id", rekapRombelUjianIds)
          .where({ nilai: 0 });
      })
      .whereIn("id", userIds)
      .fetch();

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap Tugas`);
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.getColumn("A").width = 28;
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 8;
    worksheet.getColumn("D").width = 8.5;
    worksheet.getColumn("E").width = 9;
    worksheet.getColumn("F").width = 14;
    worksheet.getColumn("G").width = 10;
    worksheet.getColumn("H").width = 8;
    worksheet.getColumn("I").width = 11;

    let totalTugas;
    // add column headers
    await Promise.all(
      analisisNilai
        .toJSON()
        .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
        .map(async (d, idx) => {
          worksheet.getRow(7).values = [
            "No",
            "Nama",
            "Jumlah Nilai",
            "Dibawah KKM",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "user" },
            { key: "jumlah" },
            { key: "dibawahkkm" },
          ];
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            user: d ? d.nama : "-",
            jumlah: `${d.__meta__.jumlahTotal - d.__meta__.nilaiKosong}/${
              d.__meta__.jumlahTotal
            } Nilai`,
            dibawahkkm: `${d.__meta__.jumlahKkm} Nilai`,
          });
          totalTugas = d.nilaiRekapSiswa.length;
          // const row = worksheet.getRow(8);
          await Promise.all(
            d.nilaiRekapSiswa.map(async (e, nox) => {
              worksheet.getColumn([`${(nox + 1) * 1 + 4}`]).values = [
                ``,
                ``,
                ``,
                ``,
                ``,
                ``,
                `Tugas ${nox + 1}`,
                ,
              ];
              row.getCell([`${(nox + 1) * 1 + 4}`]).value = `${
                e.nilai ? e.nilai : "0"
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
            })
          );

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
    worksheet.addConditionalFormatting({
      ref: `A7:${colName(totalTugas + 3)}7`,
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
    worksheet.mergeCells(`A1:${colName(totalTugas + 3)}1`);
    worksheet.mergeCells(`A2:${colName(totalTugas + 3)}2`);
    worksheet.mergeCells(`A3:${colName(totalTugas + 3)}3`);
    worksheet.mergeCells(`A4:${colName(totalTugas + 3)}4`);
    worksheet.mergeCells(`A6:${colName(totalTugas + 3)}6`);
    worksheet.addConditionalFormatting({
      ref: `A1:${colName(totalTugas + 3)}4`,
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
    await Promise.all(
      rekapRombel.toJSON().map(async (d, idx) => {
        worksheet.getRow(`${analisisNilai.toJSON().length + 10}`).values = [
          "No",
          "Materi",
          `Tugas`,
          "Nama Tugas",
        ];
        worksheet.columns = [
          { key: "no" },
          { key: "materi" },
          { key: "tugas" },
          { key: "nama" },
        ];
        let row = worksheet.addRow({
          no: `${idx + 1}`,
          materi: d.rekap ? d.rekap.judul : "-",
          tugas: `Tugas ${idx + 1}`,
          nama: `${d ? d.judul : "-"}`,
        });
      })
    );

    // return analisisNilai.toJSON().length;
    worksheet.addConditionalFormatting({
      ref: `A${analisisNilai.toJSON().length + 10}:D${
        analisisNilai.toJSON().length + 10
      }`,
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
      ref: `A${analisisNilai.toJSON().length + 10}:D${
        analisisNilai.toJSON().length + 10 + rekapRombel.toJSON().length
      }`,
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
              // bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: {
            //     argb: "C0C0C0",
            //     fgColor: { argb: "C0C0C0" },
            //   },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet.views = [
      {
        state: "frozen",
        xSplit: 2,
        ySplit: 7,
        topLeftCell: "A8",
        activeCell: "A8",
      },
    ];
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;
    worksheet.getColumn("A").width = 6;
    worksheet.getColumn("B").width = 18;
    worksheet.getColumn("C").width = 16;
    worksheet.getColumn("D").width = 20;
    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    let worksheet1 = workbook.addWorksheet(`Rekap Ujian`);
    worksheet1.getCell("A1").value = sekolah.nama;
    worksheet1.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet1.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet1.getCell("A4").value = ta.tahun;

    worksheet1.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet1.getColumn("A").width = 28;
    worksheet1.getColumn("B").width = 14;
    worksheet1.getColumn("C").width = 8;
    worksheet1.getColumn("D").width = 8.5;
    worksheet1.getColumn("E").width = 9;
    worksheet1.getColumn("F").width = 14;
    worksheet1.getColumn("G").width = 10;
    worksheet1.getColumn("H").width = 8;
    worksheet1.getColumn("I").width = 11;

    let totalUjian;
    // add column headers
    await Promise.all(
      analisisNilaiUjian
        .toJSON()
        .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
        .map(async (d, idx) => {
          worksheet1.getRow(7).values = [
            "No",
            "Nama",
            "Jumlah Nilai",
            "Dibawah KKM",
          ];
          worksheet1.columns = [
            { key: "no" },
            { key: "user" },
            { key: "jumlah" },
            { key: "dibawahkkm" },
          ];
          let row = worksheet1.addRow({
            no: `${idx + 1}`,
            user: d ? d.nama : "-",
            jumlah: `${d.__meta__.jumlahTotal - d.__meta__.nilaiKosong}/${
              d.__meta__.jumlahTotal
            } Nilai`,
            dibawahkkm: `${d.__meta__.jumlahKkm} Nilai`,
          });
          totalUjian = d.nilaiRekapSiswa.length;
          // const row = worksheet1.getRow(8);
          await Promise.all(
            d.nilaiRekapSiswa.map(async (e, nox) => {
              worksheet1.getColumn([`${(nox + 1) * 1 + 4}`]).values = [
                ``,
                ``,
                ``,
                ``,
                ``,
                ``,
                `Ujian ${nox + 1}`,
                ,
              ];
              row.getCell([`${(nox + 1) * 1 + 4}`]).value = `${
                e.nilai ? e.nilai : "0"
              }`;
              row.getCell([`${(nox + 1) * 1 + 4}`]).border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              };
              worksheet1.getColumn([`${(nox + 1) * 1 + 4}`]).fill = {
                type: "pattern",
                pattern: "solid",
                bgColor: {
                  argb: "C0C0C0",
                  fgColor: { argb: "C0C0C0" },
                },
              };
              // worksheet1.getCell(`E${(nox + 1) * 1 + 8}`).value = e.nilai;
              // worksheet1.columns = [
              //   { key: `tugas${nox+1}` },
              // ];

              worksheet1.addConditionalFormatting({
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
            })
          );

          worksheet1.addConditionalFormatting({
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
    worksheet1.addConditionalFormatting({
      ref: `A7:${colName(totalUjian + 3)}7`,
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
    worksheet1.mergeCells(`A1:${colName(totalUjian + 3)}1`);
    worksheet1.mergeCells(`A2:${colName(totalUjian + 3)}2`);
    worksheet1.mergeCells(`A3:${colName(totalUjian + 3)}3`);
    worksheet1.mergeCells(`A4:${colName(totalUjian + 3)}4`);
    worksheet1.mergeCells(`A6:${colName(totalUjian + 3)}6`);
    worksheet1.addConditionalFormatting({
      ref: `A1:${colName(totalUjian + 3)}4`,
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
    await Promise.all(
      rekapRombelUjian.toJSON().map(async (d, idx) => {
        worksheet1.getRow(`${analisisNilaiUjian.toJSON().length + 10}`).values =
          ["No", "Materi", `Ujian`, "Nama Ujian"];
        worksheet1.columns = [
          { key: "no" },
          { key: "materi" },
          { key: "tugas" },
          { key: "nama" },
        ];
        let row = worksheet1.addRow({
          no: `${idx + 1}`,
          materi: d.rekap ? d.rekap.judul : "-",
          tugas: `Ujian ${idx + 1}`,
          nama: `${d ? d.judul : "-"}`,
        });
      })
    );

    // return analisisNilai.toJSON().length;
    worksheet1.addConditionalFormatting({
      ref: `A${analisisNilaiUjian.toJSON().length + 10}:D${
        analisisNilaiUjian.toJSON().length + 10
      }`,
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
    worksheet1.addConditionalFormatting({
      ref: `A${analisisNilaiUjian.toJSON().length + 10}:D${
        analisisNilaiUjian.toJSON().length +
        10 +
        rekapRombelUjian.toJSON().length
      }`,
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
              // bold: true,
            },
            // fill: {
            //   type: "pattern",
            //   pattern: "solid",
            //   bgColor: {
            //     argb: "C0C0C0",
            //     fgColor: { argb: "C0C0C0" },
            //   },
            // },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet1.views = [
      {
        state: "frozen",
        xSplit: 2,
        ySplit: 7,
        topLeftCell: "A8",
        activeCell: "A8",
      },
    ];
    worksheet1.getCell("A1").value = sekolah.nama;
    worksheet1.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet1.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet1.getCell("A4").value = ta.tahun;
    worksheet1.getColumn("A").width = 6;
    worksheet1.getColumn("B").width = 18;
    worksheet1.getColumn("C").width = 16;
    worksheet1.getColumn("D").width = 20;
    worksheet1.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    let namaFile = `/uploads/daftar-nilai-${
      jadwalMengajar.toJSON().rombel.nama
    }-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadJadwalDinas1({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    // const { jadwal_mengajar_id, tipe } = request.post();
    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();
    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_user_id: user.id })
      .ids();

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_ta_id: ta.id })
      .ids();
    const hari = [
      {
        id: 1,
        hari: "senin",
      },
      {
        id: 2,
        hari: "selasa",
      },
      {
        id: 3,
        hari: "rabu",
      },
      {
        id: 4,
        hari: "kamis",
      },
      {
        id: 5,
        hari: "jumat",
      },
      {
        id: 6,
        hari: "sabtu",
      },
      // {
      //   id: 7,
      //   hari: "minggu",
      // },
    ];
    let workbook = new Excel.Workbook();
    const result = await Promise.all(
      hari.map(async (ss) => {
        const jamIds = await MJamMengajar.query()
          .where({ m_ta_id: ta.id })
          .andWhere({ m_sekolah_id: sekolah.id })
          .andWhere({ kode_hari: ss.id })
          .ids();
        const data = await MJadwalMengajar.query()
          .with("rombel", (builder) => {
            builder.where({ dihapus: 0 });
          })
          .whereIn("m_rombel_id", rombelIds)
          .with("mataPelajaran")
          .with("ta")
          .with("jamMengajar")
          .where({ m_ta_id: ta.id })
          .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
          .whereIn("m_jam_mengajar_id", jamIds)
          .fetch();
        let worksheet = workbook.addWorksheet(`${titleCase(ss.hari)}`);

        worksheet.mergeCells("A1:D1");
        worksheet.mergeCells("A2:D2");
        worksheet.mergeCells("A3:D3");
        worksheet.mergeCells("A4:D4");
        worksheet.getCell(
          "A5"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
        worksheet.addConditionalFormatting({
          ref: "A1:D4",
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
          ref: "A6:D6",
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
        worksheet.getCell("A1").value = "Rekap Jadwal";
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.getCell("A3").value = ta.tahun;
        worksheet.getCell("A4").value = ss.hari;

        const data11 = await Promise.all(
          data.toJSON().map(async (d, idx) => {
            // return d.jamMengajar;
            worksheet.addConditionalFormatting({
              ref: `B${(idx + 1) * 1 + 6}:D${(idx + 1) * 1 + 6}`,
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
              ref: `A${(idx + 1) * 1 + 6}`,
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
            worksheet.getRow(6).values = [
              "No",
              "Jam Pelajaran",
              "Mata Pelajaran",
              "Kelas",
            ];
            worksheet.columns = [
              { key: "no" },
              { key: "jam" },
              { key: "mapel" },
              { key: "kelas" },
            ];

            // Add row using key mapping to columns
            let row = worksheet.addRow({
              no: `${idx + 1}`,
              jam: `${d.jamMengajar ? d.jamMengajar.jamFormat : "-"}`,
              mapel: d.mataPelajaran ? d.mataPelajaran.nama : "-",
              kelas: d.rombel ? d.rombel.nama : "-",
            });
          })
        );
        // return data11
        worksheet.getColumn("A").width = 8;
        worksheet.getColumn("B").width = 18;
        worksheet.getColumn("C").width = 18;
        worksheet.getColumn("D").width = 20;
      })
    );
    // return result
    let namaFile = `/uploads/rekap-jadwal-${user.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadJadwalBukuKerja({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const { jadwal_mengajar_id, tipe } = request.post();
    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();
    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_user_id: user.id })
      .ids();

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_ta_id: ta.id })
      .ids();
    const hari = [
      {
        id: 1,
        hari: "Senin",
      },
      {
        id: 2,
        hari: "Selasa",
      },
      {
        id: 3,
        hari: "Rabu",
      },
      {
        id: 4,
        hari: "Kamis",
      },
      {
        id: 5,
        hari: "Jumat",
      },
      {
        id: 6,
        hari: "Sabtu",
      },
      // {
      //   id: 7,
      //   hari: "minggu",
      // },
    ];
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Jadwal`);
    let mengajar = 0;
    for (let no = 0; no < hari.length; no++) {
      const ss = hari[no];
      const jamIds = await MJamMengajar.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ kode_hari: ss.id })
        .ids();
      const data = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .with("jamMengajar")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .whereIn("m_jam_mengajar_id", jamIds)
        .fetch();

      const data11 = await Promise.all(
        data.toJSON().map(async (d, idx) => {
          // return d.jamMengajar;
          worksheet.addConditionalFormatting({
            ref: `C${(idx + 1) * 1 + 5}:E${(idx + 1) * 1 + 5}`,
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
            ref: `B${(idx + 1) * 1 + 5}`,
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
          if (no == 0) {
            worksheet.getRow(`${5 + mengajar + no}`).values = [
              "Hari",
              "Jam Ke-",
              "Waktu",
              "Mata Pelajaran",
              "Kelas",
            ];
          } else {
            worksheet.getRow(`${5 + mengajar + no}`).values = [
              "",
              "",
              "",
              "",
              "",
            ];
          }
          worksheet.columns = [
            { key: "hari" },
            { key: "jam" },
            { key: "waktu" },
            { key: "mapel" },
            { key: "kelas" },
          ];

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            jam: `${d.jamMengajar ? d.jamMengajar.jam_ke : "-"}`,
            waktu: `${d.jamMengajar ? d.jamMengajar.jamFormat : "-"}`,
            mapel: d.mataPelajaran ? d.mataPelajaran.nama : "-",
            kelas: d.rombel ? d.rombel.nama : "-",
          });
        })
      );
      // return {data, ss,no};
      worksheet.getCell(`A${6 + mengajar + no}`).value = ss.hari;
      worksheet.mergeCells(
        `A${6 + mengajar + no}:A${5 + mengajar + data.toJSON().length + no}`
      );
      worksheet.addConditionalFormatting({
        ref: `A${6 + mengajar + no}:A${
          5 + mengajar + data.toJSON().length + no
        }`,
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
                textRotation: 90,
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

      worksheet.mergeCells(
        `A${6 + mengajar + data.toJSON().length + no}:E${
          6 + mengajar + data.toJSON().length + no
        }`
      );
      // return 6 + data.toJSON().length + no;
      worksheet.addConditionalFormatting({
        ref: `A${6 + mengajar + data.toJSON().length + no}:E${
          6 + mengajar + data.toJSON().length + no
        }`,
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: {
                  argb: "C0C0C0",
                  fgColor: { argb: "C0C0C0" },
                },
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
      mengajar = mengajar + data.toJSON().length;
      // return data11
    }
    // return mengajar;

    worksheet.addConditionalFormatting({
      ref: `C6:E${11 + mengajar}`,
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
      ref: `B6:B${11 + mengajar}`,
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

    worksheet.getColumn("A").width = 8;
    worksheet.getColumn("B").width = 18;
    worksheet.getColumn("C").width = 18;
    worksheet.getColumn("D").width = 20;
    worksheet.getColumn("E").width = 20;
    worksheet.mergeCells("A1:E1");
    worksheet.mergeCells("A2:E2");
    worksheet.mergeCells("A3:E3");
    worksheet.mergeCells("A4:E4");
    // worksheet.getCell(
    //   "A5"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:E4",
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
      ref: "A5:E5",
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
    worksheet.getCell("A1").value = "Rekap Jadwal";
    worksheet.getCell("A2").value = sekolah.nama;
    worksheet.getCell("A3").value = ta.tahun;
    // return result
    let namaFile = `/uploads/rekap-jadwal-${user.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadJadwalDinas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);
    const user = await auth.getUser();

    const { user_id } = request.post();
    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();
    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_user_id: user_id })
      .ids();

    const rombelIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .where({ m_ta_id: ta.id })
      .ids();
    const hari = [
      {
        id: 1,
        hari: "Senin",
      },
      {
        id: 2,
        hari: "Selasa",
      },
      {
        id: 3,
        hari: "Rabu",
      },
      {
        id: 4,
        hari: "Kamis",
      },
      {
        id: 5,
        hari: "Jumat",
      },
      {
        id: 6,
        hari: "Sabtu",
      },
      // {
      //   id: 7,
      //   hari: "minggu",
      // },
    ];
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Jadwal`);
    let mengajar = 0;
    for (let no = 0; no < hari.length; no++) {
      const ss = hari[no];
      const jamIds = await MJamMengajar.query()
        .where({ m_ta_id: ta.id })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ kode_hari: ss.id })
        .ids();
      const data = await MJadwalMengajar.query()
        .with("rombel", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .whereIn("m_rombel_id", rombelIds)
        .with("mataPelajaran")
        .with("ta")
        .with("jamMengajar")
        .where({ m_ta_id: ta.id })
        .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
        .whereIn("m_jam_mengajar_id", jamIds)
        .fetch();

      const data11 = await Promise.all(
        data.toJSON().map(async (d, idx) => {
          // return d.jamMengajar;
          worksheet.addConditionalFormatting({
            ref: `C${(idx + 1) * 1 + 5}:E${(idx + 1) * 1 + 5}`,
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
            ref: `B${(idx + 1) * 1 + 5}`,
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
          if (no == 0) {
            worksheet.getRow(`${5 + mengajar + no}`).values = [
              "Hari",
              "Jam Ke-",
              "Waktu",
              "Mata Pelajaran",
              "Kelas",
            ];
          } else {
            worksheet.getRow(`${5 + mengajar + no}`).values = [
              "",
              "",
              "",
              "",
              "",
            ];
          }
          worksheet.columns = [
            { key: "hari" },
            { key: "jam" },
            { key: "waktu" },
            { key: "mapel" },
            { key: "kelas" },
          ];

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            jam: `${d.jamMengajar ? d.jamMengajar.jam_ke : "-"}`,
            waktu: `${d.jamMengajar ? d.jamMengajar.jamFormat : "-"}`,
            mapel: d.mataPelajaran ? d.mataPelajaran.nama : "-",
            kelas: d.rombel ? d.rombel.nama : "-",
          });
        })
      );
      // return {data, ss,no};
      worksheet.getCell(`A${6 + mengajar + no}`).value = ss.hari;
      worksheet.mergeCells(
        `A${6 + mengajar + no}:A${5 + mengajar + data.toJSON().length + no}`
      );
      worksheet.addConditionalFormatting({
        ref: `A${6 + mengajar + no}:A${
          5 + mengajar + data.toJSON().length + no
        }`,
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
                textRotation: 90,
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

      worksheet.mergeCells(
        `A${6 + mengajar + data.toJSON().length + no}:E${
          6 + mengajar + data.toJSON().length + no
        }`
      );
      // return 6 + data.toJSON().length + no;
      worksheet.addConditionalFormatting({
        ref: `A${6 + mengajar + data.toJSON().length + no}:E${
          6 + mengajar + data.toJSON().length + no
        }`,
        rules: [
          {
            type: "expression",
            formulae: ["MOD(ROW()+COLUMN(),1)=0"],
            style: {
              fill: {
                type: "pattern",
                pattern: "solid",
                bgColor: {
                  argb: "C0C0C0",
                  fgColor: { argb: "C0C0C0" },
                },
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
      mengajar = mengajar + data.toJSON().length;
      // return data11
    }
    // return mengajar;

    worksheet.addConditionalFormatting({
      ref: `C6:E${11 + mengajar}`,
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
      ref: `B6:B${11 + mengajar}`,
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

    worksheet.getColumn("A").width = 8;
    worksheet.getColumn("B").width = 18;
    worksheet.getColumn("C").width = 18;
    worksheet.getColumn("D").width = 20;
    worksheet.getColumn("E").width = 20;
    worksheet.mergeCells("A1:E1");
    worksheet.mergeCells("A2:E2");
    worksheet.mergeCells("A3:E3");
    worksheet.mergeCells("A4:E4");
    // worksheet.getCell(
    //   "A5"
    // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:E4",
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
      ref: "A5:E5",
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
    worksheet.getCell("A1").value = "Rekap Jadwal";
    worksheet.getCell("A2").value = sekolah.nama;
    worksheet.getCell("A3").value = ta.tahun;
    // return result
    let namaFile = `/uploads/rekap-jadwal-${user.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async getKbm({ response, request, auth }) {
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

    const { tanggal } = request.get();

    if (
      user.role == "admin" ||
      user.role == "pengawas" ||
      user.role == "kepsek"
    ) {
      const userIds = await User.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .where({ role: "guru" })
        .ids();

      const rombelIds = await MRombel.query()
        .where({ m_ta_id: ta.id })
        .where({ m_sekolah_id: sekolah.id })
        .where({ dihapus: 0 })
        .ids();

      const tugasIds = await MTugas.query()
        .whereIn("m_user_id", userIds)
        .where({ dihapus: 0 })
        .where(
          "tanggal_pembagian",
          "like",
          `%${tanggal || moment().format("YYYY-MM-DD")}%`
        )
        .ids();

      const timelineTugas = await MTimeline.query()
        .whereIn("m_tugas_id", tugasIds)
        .where({ dihapus: 0 })
        .ids();

      const timelineId = await MTimeline.query()
        .whereIn("m_rombel_id", rombelIds)
        .whereIn("tipe", ["absen", "materi"])
        .where(
          "tanggal_pembagian",
          "like",
          `%${tanggal || moment().format("YYYY-MM-DD")}%`
        )
        .ids();

      const timelineIds = [...timelineTugas, ...timelineId];

      let timeline = await MTimeline.query()
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
        .with("materi", (builder) => {
          builder
            .with("bab")
            .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
              builder.whereNotNull("kesimpulan");
            });
        })
        .with("rombel", (builder) => {
          builder.select("nama", "id");
        })
        .with("mataPelajaran", (builder) => {
          builder.select("nama", "id");
        })
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
        .whereIn("id", timelineIds)
        .fetch();

      timeline = await Promise.all(
        timeline.toJSON().map((d) => {
          /*** 1 = saat ini
           ** 2 = akan datang
           ** 3 = sudah selesai
           */
          let status = 1;

          let dibagikan = d.tanggal_pembagian;
          if (d.tipe == "tugas") {
            dibagikan = d.tugas.tanggal_pembagian;
          }

          if (moment(dibagikan).toDate() > moment().toDate()) {
            status = 2;
          } else {
            if (d.tipe == "tugas") {
              if (d.__meta__.total_respon >= d.__meta__.total_siswa) {
                status = 3;
              }
            } else if (d.tipe == "absen") {
              if (moment(d.tanggal_akhir).toDate() < moment().toDate()) {
                status = 3;
              }
            } else if (d.tipe == "materi") {
              if (
                d.materi[0].__meta__.totalKesimpulan >= d.__meta__.total_siswa
              ) {
                status = 3;
              }
            }
          }

          return { ...d, status, bab: d.materi.map((e) => e.bab) };
        })
      );

      let jamMengajarIds = await MJamMengajar.query()
        .where({ kode_hari: new Date(tanggal).getDay() })
        .andWhere({ m_sekolah_id: sekolah.id })
        .andWhere({ m_ta_id: ta.id })
        .ids();

      const total = await MJadwalMengajar.query()
        .distinct("m_rombel_id")
        .whereIn("m_rombel_id", rombelIds)
        .where({ m_ta_id: ta.id })
        .whereIn("m_jam_mengajar_id", jamMengajarIds)
        .fetch();

      return response.ok({
        pertemuan: timeline,
        total,
      });
    } else {
      return response.unauthorized({
        message: "Anda tidak memiliki hak akses",
      });
    }
  }

  async ip({ response, request }) {
    return response.ok({ ip: [request.ip(), request.ips()] });
  }

  async notFoundPage({ response, request, auth }) {
    return `<p>Data tidak ditemukan, silahkan kembali ke <a href="https://smarteschool.id">Smart School</a></p>`;
  }
}
module.exports = DinasController;

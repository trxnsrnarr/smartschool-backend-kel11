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
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const MPekerjaan = use("App/Models/MPekerjaan");
const MInformasiPekerjaan = use("App/Models/MInformasiPekerjaan");
const MPekerjaanPengumuman = use("App/Models/MPekerjaanPengumuman");
const MAcaraPerusahaan = use("App/Models/MAcaraPerusahaan");
const TkStatusPekerjaan = use("App/Models/TkStatusPekerjaan");
const MKotakMasuk = use("App/Models/MKotakMasuk");
const MKotakMasukKomen = use("App/Models/MKotakMasukKomen");
const MSurel = use("App/Models/MSurel");
const MSurelKomen = use("App/Models/MSurelKomen");
const MFolderArsip = use("App/Models/MFolderArsip");
const TkTipeSurel = use("App/Models/TkTipeSurel");
const MBarang = use("App/Models/MBarang");
const MLokasi = use("App/Models/MLokasi");
const MKategoriPelanggaran = use("App/Models/MKategoriPelanggaran");
const MPelanggaran = use("App/Models/MPelanggaran");
const MPenghargaan = use("App/Models/MPenghargaan");
const MSanksiPelanggaran = use("App/Models/MSanksiPelanggaran");
const MSanksiSiswa = use("App/Models/MSanksiSiswa");
const TkSiswaPelanggaran = use("App/Models/TkSiswaPelanggaran");
const MBabPeraturan = use("App/Models/MBabPeraturan");
const MPasalPeraturan = use("App/Models/MPasalPeraturan");
const MBukuTamu = use("App/Models/MBukuTamu");
const MKategoriMapel = use("App/Models/MKategoriMapel");
const TkMapelRapor = use("App/Models/TkMapelRapor");
const MSurat = use("App/Models/MSurat");
const MDisposisi = use("App/Models/MDisposisi");
const MPelaporanDisposisi = use("App/Models/MPelaporanDisposisi");
const MTemplateDeskripsi = use("App/Models/MTemplateDeskripsi");
const MPertemuanBk = use("App/Models/MPertemuanBk");
const MJadwalKonsultasi = use("App/Models/MJadwalKonsultasi");
const MLabelKalender = use("App/Models/MLabelKalender");
const MKegiatanKalender = use("App/Models/MKegiatanKalender");
const MKalenderPendidikan = use("App/Models/MKalenderPendidikan");
const MBuktiPelaksanaanSanksi = use("App/Models/MBuktiPelaksanaanSanksi");
const MBobotNilai = use("App/Models/MBobotNilai");
const MRegistrasiAkun = use("App/Models/MRegistrasiAkun");
const MKeuAkun = use("App/Models/MKeuAkun");
const MKeuTemplateAkun = use("App/Models/MKeuTemplateAkun");
const MKeuJurnal = use("App/Models/MKeuJurnal");
const MKeuTransaksi = use("App/Models/MKeuTransaksi");
const MJalurPpdb = use("App/Models/MJalurPpdb");
const MInformasiJalurPpdb = use("App/Models/MInformasiJalurPpdb");
const MInformasiGelombang = use("App/Models/MInformasiGelombang");

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
const DownloadService = use("App/Services/DownloadService");
const DownloadService2 = use("App/Services/DownloadService2");
const DownloadKartuPg = use("App/Services/DownloadKartuPg");
const DownloadKartuEsai = use("App/Services/DownloadKartuEsai");
const Downloadkisikisi = use("App/Services/Downloadkisikisi");
const DownloadNaskah = use("App/Services/DownloadNaskah");
const DownloadRumusan = use("App/Services/DownloadRumusan");
const DownloadTemplate = use("App/Services/DownloadTemplate");
const WhatsAppService = use("App/Services/WhatsAppService");

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

class PPDBController {
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

  async getJalur({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const jalur = await MJalurPpdb.query()
      .with("gelombang", (builder) => {
        builder
          .where({ dihapus: 0 })
          .withCount("pendaftar as jumlahPendaftar")
          .with("informasi", (builder) => {
            builder.where({ dihapus: 0 });
          });
      })
      .with("informasi", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    return response.ok({
      jalur,
    });
  }

  async postJalur({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, dibuka, ditutup, biaya } = request.post();

    const jalur = await MJalurPpdb.create({
      nama,
      dibuka,
      ditutup,
      biaya,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putJalur({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, dibuka, ditutup, biaya } = request.post();

    const update = await MJalurPpdb.query().where({ id }).update({
      nama,
      dibuka,
      ditutup,
      biaya,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
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

  async deleteJalur({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jalur = await MJalurPpdb.query().where({ id }).update({
      dihapus: 1,
    });
    if (!jalur) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async detailJalur({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jalur = await MJalurPpdb.query()
      .with("gelombang", (builder) => {
        builder
          .where({ dihapus: 0 })
          .withCount("pendaftar as jumlahPendaftar")
          .with("informasi", (builder) => {
            builder.where({ dihapus: 0 });
          });
      })
      .with("informasi", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ id })
      .first();

    if (!jalur) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      jalur,
    });
  }

  async postInformasiJalur({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, tipe, deskripsi, biaya, m_jalur_ppdb_id } = request.post();

    const informasi = await MInformasiJalurPpdb.create({
      nama,
      tipe,
      deskripsi,
      biaya: biaya ? JSON.stringify(biaya) : null,
      dihapus: 0,
      m_jalur_ppdb_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putInformasiJalur({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, tipe, deskripsi, biaya, m_jalur_ppdb_id } = request.post();

    const informasi = await MInformasiJalurPpdb.query()
      .where({ id })
      .update({
        nama,
        tipe,
        deskripsi,
        biaya: biaya ? JSON.stringify(biaya) : null,
        dihapus: 0,
        m_jalur_ppdb_id,
      });
    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteInformasiJalur({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const informasi = await MInformasiJalurPpdb.query().where({ id }).update({
      dihapus: 1,
    });
    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messageDeleteSuccess,
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

    const jalur = await MJalurPpdb.query()
      .with("gelombang", (builder) => {
        builder
          .where({ dihapus: 0 })
          .withCount("pendaftar as jumlahPendaftar")
          .with("informasi", (builder) => {
            builder.where({ dihapus: 0 });
          });
      })
      .with("informasi", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const jumlahPeserta = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "ppdb" })
      .count("* as total");

    return response.ok({
      jalur: jalur,
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

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const ta = await this.getTAAktif(sekolah);

    const {
      nama,
      dibuka,
      ditutup,
      tes_akademik,
      biaya_pendaftaran,
      m_jalur_ppdb_id,
      diterima,
    } = request.post();

    await MGelombangPpdb.create({
      nama,
      dibuka,
      ditutup,
      dihapus: 0,
      tes_akademik,
      biaya_pendaftaran,
      diterima,
      m_jalur_ppdb_id,
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

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const {
      nama,
      dibuka,
      ditutup,
      tes_akademik,
      biaya_pendaftaran,
      m_jalur_ppdb_id,
      diterima,
    } = request.post();

    const gelombang = await MGelombangPpdb.query()
      .where({ id: gelombang_ppdb_id })
      .update({
        nama,
        dibuka,
        ditutup,
        tes_akademik,
        biaya_pendaftaran,
        m_jalur_ppdb_id,
        diterima,
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

    if (
      user.role != "admin" ||
      user.role == "guru" ||
      user.m_sekolah_id != sekolah.id
    ) {
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

  async postInformasiGelombang({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, tipe, dibuka, ditutup, pengumuman, m_gelombang_ppdb_id } =
      request.post();

    const informasi = await MInformasiGelombang.create({
      nama,
      tipe,
      dibuka,
      ditutup,
      pengumuman,
      m_gelombang_ppdb_id,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putInformasiGelombang({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const { nama, tipe, dibuka, ditutup, pengumuman, m_gelombang_ppdb_id } =
      request.post();

    const informasi = await MInformasiGelombang.query().where({ id }).update({
      nama,
      tipe,
      dibuka,
      ditutup,
      pengumuman,
      m_gelombang_ppdb_id,
      dihapus: 0,
    });
    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteInformasiGelombang({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const informasi = await MInformasiGelombang.query().where({ id }).update({
      dihapus: 1,
    });
    if (!informasi) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messageDeleteSuccess,
    });
  }
}

module.exports = PPDBController;

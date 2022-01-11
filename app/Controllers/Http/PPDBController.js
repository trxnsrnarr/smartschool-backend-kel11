"use strict";

const MSekolah = use("App/Models/MSekolah");
const MGelombangPpdb = use("App/Models/MGelombangPpdb");
const MPendaftarPpdb = use("App/Models/MPendaftarPpdb");
const Mta = use("App/Models/Mta");
const MUjian = use("App/Models/MUjian");
const MJalurPpdb = use("App/Models/MJalurPpdb");
const MInformasiJalurPpdb = use("App/Models/MInformasiJalurPpdb");
const MInformasiGelombang = use("App/Models/MInformasiGelombang");
const MJadwalPpdb = use("App/Models/MJadwalPpdb");
const TkPesertaUjianPpdb = use("App/Models/TkPesertaUjianPpdb");
const User = use("App/Models/User");

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

const dataStatus = {
  menungguSeleksiBerkas: {
    text: "Menunggu Seleksi Berkas",
    color: "color-warning",
    icon: "menunggu-seleksi-berkas",
  },
  menungguKonfirmasiPembayaran: {
    text: "Menunggu Konfirmasi Pembayaran",
    color: "color-warning",
    icon: "menunggu-konfirmasi-pembayaran",
  },
  menungguSeleksiUjian: {
    text: "Menunggu Seleksi Ujian",
    color: "color-warning",
    icon: "menunggu-seleksi-ujian",
  },
  menungguHasilPengumuman: {
    text: "Menunggu Hasil Pengumuman",
    color: "color-warning",
    icon: "menunggu-hasil-pengumuman",
  },
  berkasTerkonfirmasi: {
    text: "Berkas Terkonfirmasi",
    color: "color-success",
    icon: "berkas-terkonfirmasi",
  },
  pembayaranTerkonfirmasi: {
    text: "Pembayaran Terkonfirmasi",
    color: "color-success",
    icon: "pembayaran-terkonfirmasi",
  },
  lulusSeleksi: {
    text: "Lulus Seleksi",
    color: "color-success",
    icon: "lulus-seleksi",
  },
  tidakLulusSeleksi: {
    text: "Tidak Lulus Seleksi",
    color: "color-danger",
    icon: "tidak-lulus-seleksi",
  },
};

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
          .withCount("pendaftar as jumlahPendaftar", (builder) => {
            builder.where({ dihapus: 0 });
          })
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
            builder
              .with("ujian", (builder) => {
                builder.with("soal");
              })
              .where({ dihapus: 0 });
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

  async getJadwalPPDB({ request, response, auth }) {
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

    const jalurIds = await MJalurPpdb.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: sekolah.id })
      .ids();
    const gelombangIds = await MGelombangPpdb.query()
      .where({ dihapus: 0 })
      .whereIn("m_jalur_ppdb_id", jalurIds)
      .where({ m_ta_id: ta.id })
      .ids();

    let pendaftarIds, infoIds;
    if (user.role == "ppdb") {
      pendaftarIds = await MPendaftarPpdb.query()
        .where({ dihapus: 0 })
        .whereIn("m_gelombang_ppdb_id", gelombangIds)
        .andWhere({ m_user_id: user.id })
        .pluck("m_gelombang_ppdb_id");
      infoIds = await MInformasiGelombang.query()
        .where({ dihapus: 0 })
        .whereIn("m_gelombang_ppdb_id", pendaftarIds)
        .ids();
    } else {
      infoIds = await MInformasiGelombang.query()
        .where({ dihapus: 0 })
        .whereIn("m_gelombang_ppdb_id", gelombangIds)
        .ids();
    }

    const {
      tingkat,
      daftar_ujian_id,
      page = 1,
      search,
      filter_mapel,
      filter_tipe,
      filter_tingkat,
    } = request.get();

    const userIds = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("role", ["guru", "admin"])
      .ids();

    let ujian;
    ujian = MUjian.query()
      .where({ dihapus: 0 })
      .whereIn("m_user_id", userIds)
      .orderBy("id", "desc");

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
    }
    ujian.where({ tipe: "ppdb" });

    ujian = await ujian.ids();

    const jadwal = await MJadwalPpdb.query()
      .with("soal")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder.with("jalur");
        });
      })
      .whereIn("m_informasi_gelombang_id", infoIds)
      .where({ dihapus: 0 })
      .paginate(page, 20);

    return response.ok({
      jadwal,
    });
  }

  async detailJadwalPPDB({ request, response, params: { id } }) {
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
            builder
              .with("ujian", (builder) => {
                builder.with("soal");
              })
              .where({ dihapus: 0 });
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

    const jalurIds = await MJalurPpdb.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: sekolah.id })
      .ids();
    const gelombangIds = await MGelombangPpdb.query()
      .where({ dihapus: 0 })
      .whereIn("m_jalur_ppdb_id", jalurIds)
      .where({ m_ta_id: ta.id })
      .ids();

    let { is_public } = request.get();
    is_public = is_public ? is_public : false;

    const checkIds = await MGelombangPpdb.query()
      .where(
        "dibuka",
        "<=",
        moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
      )
      .andWhere(
        "ditutup",
        ">=",
        moment().startOf("day").format("YYYY-MM-DD HH:mm:ss")
      )
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("id", gelombangIds)
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let gelombangAktif;
    let pendaftarIds;
    let terdaftar;

    if (checkIds.length && is_public == false) {
      let user;
      try {
        user = await auth.getUser();
      } catch {
        //
      }
      if (user) {
        gelombangAktif = await MPendaftarPpdb.query()
          .with("gelombang", (builder) => {
            builder
              .with("jalur")
              .with("pendaftar", (builder) => {
                builder
                  .select("id", "m_gelombang_ppdb_id")
                  .where({ dihapus: 0 });
              })
              .with("informasi", (builder) => {
                builder.where({ tipe: "ujian" }).with("ujian");
              });
          })
          .where({ dihapus: 0 })
          .whereIn("m_gelombang_ppdb_id", gelombangIds)
          .andWhere({ m_user_id: user.id })
          .whereIn("m_gelombang_ppdb_id", checkIds)
          .first();

        pendaftarIds = await MPendaftarPpdb.query()
          .where({ dihapus: 0 })
          .whereIn("m_gelombang_ppdb_id", gelombangIds)
          .andWhere({ m_user_id: user.id })
          .pluck("m_gelombang_ppdb_id");

        terdaftar = await MGelombangPpdb.query()
          .with("jalur")
          .whereIn("id", pendaftarIds)
          .where({ dihapus: 0 })
          .fetch();
      }
    }

    const gelombang = await MGelombangPpdb.query()
      .with("jalur")
      .withCount("pendaftar as jumlahPendaftar")
      .where({ m_sekolah_id: sekolah.id })
      .whereIn("id", gelombangIds)
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
        builder.with("user").where({ dihapus: 0 });
      })
      .with("jalur")
      .where({ id: gelombang_ppdb_id })
      .andWhere({ dihapus: 0 })
      .first();
    const gelombangs = await MGelombangPpdb.query()
      .where({ m_jalur_ppdb_id: gelombang.m_jalur_ppdb_id })
      .where({ dihapus: 0 })
      .fetch();

    return response.ok({
      gelombang: gelombang,
      gelombangs,
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
      nama_akun,
      norek,
      bank,
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
      nama_akun,
      norek,
      bank,
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
      nama_akun,
      norek,
      bank,
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
        nama_akun,
        norek,
        bank,
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

  async postJadwalPPDB({ request, response }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const {
      tipe,
      nama,
      keterangan,
      lokasi,
      link,
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      kkm,
      waktu_dibuka,
      waktu_ditutup,
      durasi,
      gmeet,
      diacak,
      dihapus,
      m_gelombang_ppdb_id,
      m_ujian_id,
      m_user_id,
      terlihat,
    } = request.post();

    const informasi = await MInformasiGelombang.create({
      nama,
      tipe: "ujian",
      dibuka: waktu_dibuka,
      ditutup: waktu_ditutup,
      m_gelombang_ppdb_id,
      dihapus: 0,
    });

    const jadwal = await MJadwalPpdb.create({
      tipe,
      nama,
      keterangan,
      lokasi,
      link,
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      kkm,
      waktu_dibuka,
      waktu_ditutup,
      durasi,
      gmeet,
      diacak,
      dihapus,
      m_informasi_gelombang_id: informasi.id,
      m_ujian_id,
      m_user_id,
      terlihat,
      dihapus: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putJadwalPPDB({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    if (ta == "404") {
      return response.notFound({ message: "Tahun Ajaran belum terdaftar" });
    }

    const {
      tipe,
      nama,
      keterangan,
      lokasi,
      link,
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      kkm,
      waktu_dibuka,
      waktu_ditutup,
      durasi,
      gmeet,
      diacak,
      dihapus,
      m_informasi_gelombang_id,
      m_ujian_id,
      m_user_id,
      terlihat,
    } = request.post();

    const informasi = await MInformasiGelombang.query()
      .where({ id: m_informasi_gelombang_id })
      .update({
        nama,
        tipe: "ujian",
        dibuka: waktu_dibuka,
        ditutup: waktu_ditutup,
        dihapus: 0,
      });

    const jadwal = await MJadwalPpdb.query().where({ id }).update({
      tipe,
      nama,
      keterangan,
      lokasi,
      link,
      jumlah_pg,
      jumlah_esai,
      jumlah_soal_akm,
      kkm,
      waktu_dibuka,
      waktu_ditutup,
      durasi,
      gmeet,
      diacak,
      dihapus,
      m_informasi_gelombang_id,
      m_ujian_id,
      m_user_id,
      terlihat,
      dihapus: 0,
    });
    if (!jadwal) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteJadwalPPDB({ request, response, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jadwal = await MJadwalPpdb.query().where({ id }).first();

    const informasi = await MInformasiGelombang.query()
      .where({ id: jadwal.m_informasi_gelombang_id })
      .update({
        dihapus: 1,
      });

    await MJadwalPpdb.query().where({ id }).update({
      dihapus: 1,
    });
    if (!jadwal) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async deletePendaftarPPDB({
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

    const hapus = await MPendaftarPpdb.query()
      .where({ id: pendaftar_ppdb_id })
      .update({
        dihapus: 1,
      });

    if (!hapus) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePostSuccess,
    });
  }
  async detailJadwalUjianPPDB({
    response,
    request,
    auth,
    params: { jadwal_ppdb_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const jadwalPpdb = await MJadwalPpdb.query()
      .with("soal")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder
            .with("pendaftar", (builder) => {
              builder.with("user");
            })
            .with("jalur");
        });
      })
      .where({ id: jadwal_ppdb_id })
      .first();

    const peserta = await TkPesertaUjianPpdb.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ m_jadwal_ppdb_id: jadwal_ppdb_id })
      .fetch();

    return response.ok({
      jadwalPpdb,
      pesertaUjianPpdb: peserta,
    });
  }

  async downloadNilaiUjianPPDB({
    request,
    response,
    auth,
    params: { jadwal_ppdb_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

    const jadwalPpdb = await MJadwalPpdb.query()
      .with("soal")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder
            .with("pendaftar", (builder) => {
              builder.with("user", (builder) => {
                builder.select("id", "nama");
              });
            })
            .with("jalur");
        });
      })
      .where({ id: jadwal_ppdb_id })
      .first();

    const peserta = await TkPesertaUjianPpdb.query()
      .where({ m_jadwal_ppdb_id: jadwal_ppdb_id })
      .fetch();
    const pesertaData = peserta.toJSON();

    const data = jadwalPpdb.toJSON().info.gelombang.pendaftar.map((d) => {
      const nilai = pesertaData.find((e) => e.id == d.id);
      return {
        id: d.id,
        nama: d.user.nama,
        whatsapp: d.user.whatsapp,
        nilai: nilai ? nilai.nilai : 0,
      };
    });
    // return data;
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Rekap`);

    worksheet.mergeCells("A1:D1");
    worksheet.mergeCells("A2:D2");
    worksheet.mergeCells("A3:D3");

    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.addConditionalFormatting({
      ref: "A1:D3",
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
      ref: "A5:D5",
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

    worksheet.getCell("A1").value = "Rekapan Nilai Ujian PPDB";

    worksheet.getCell("A2").value = jadwalPpdb.nama;
    worksheet.getCell("A3").value = jadwalPpdb.tipe;

    await Promise.all(
      data
        .sort((a, b) => ("" + a.nama).localeCompare("" + b.nama))
        .map(async (d, idx) => {
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 5}:C${(idx + 1) * 1 + 5}`,
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
          worksheet.addConditionalFormatting({
            ref: `D${(idx + 1) * 1 + 5}`,
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
          worksheet.getRow(5).values = ["No", "Nama", "Id", "Nilai"];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "id" },
            { key: "nilai" },
          ];

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nama: d ? d.nama : "-",
            id: d ? d.id : "-",
            nilai: d ? d.nilai : "-",
          });
        })
    );
    worksheet.getColumn("A").width = 6;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 0;
    worksheet.getColumn("D").width = 6;
    worksheet.autoFilter = {
      from: "A5",
      to: "D5",
    };

    let namaFile = `/uploads/rekapan-nilai-ujian-ppdb-siswa-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async importNilaiUjianPPDBServices(filelocation, sekolah, jadwalPPDB) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("daftar rekap");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber > 5) {
        data.push({
          nama: explanation.getCell("B" + rowNumber).value,
          id: explanation.getCell("C" + rowNumber).value,
          nilai: explanation.getCell("D" + rowNumber).value,
        });
      }
    });

    const result = await Promise.all(
      data.map(async (d) => {
        const check = await TkPesertaUjianPpdb.query()
          .where({ dihapus: 0 })
          .where({ m_pendaftar_ppdb_id: d.id })
          .where({ m_jadwal_ppdb_id: jadwalPPDB.id })
          .first();
        if (check) {
          await TkPesertaUjianPpdb.query().where({ id: check.id }).update({
            nilai: d.nilai,
          });
        } else {
          await TkPesertaUjianPpdb.create({
            dihapus: 0,
            m_pendaftar_ppdb_id: d.id,
            nilai: d.nilai,
            m_jadwal_ppdb_id: jadwalPPDB.id,
          });
        }
      })
    );

    return result;
  }

  async importNilaiUjianPPDB({
    request,
    response,
    auth,
    params: { jadwal_ppdb_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    let file = request.file("file");
    let fname = `import-excel-nilai-ppdb.xlsx`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    const jadwalPPDB = await MJadwalPpdb.query()
      .where({ id: jadwal_ppdb_id })
      .first();

    return await this.importNilaiUjianPPDBServices(
      `tmp/uploads/${fname}`,
      sekolah,
      jadwalPPDB
    );
  }

  async postPesertaUjianPpdb({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { m_jadwal_ppdb_id, ujian_id } = request.post();
    const waktu_mulai = moment().format("YYYY-MM-DD HH:mm:ss");

    const ujian = await MUjian.query().where({ id: ujian_id }).first();

    const jadwalPpdb = await MJadwalPpdb.query()
      .where({ id: m_jadwal_ppdb_id })
      .first();

    if (jadwalPpdb.waktu_dibuka > waktu_mulai) {
      return response.forbidden({
        message: messageForbidden,
      });
    }

    let diacak = "id ASC";

    if (jadwalPpdb.diacak) {
      diacak = "RAND()";
    }

    const checkIfExist = await TkPesertaUjianPpdb.query()
      .where({ m_user_id: user.id })
      .andWhere({ m_jadwal_ppdb_id: m_jadwal_ppdb_id })
      .where({ dihapus: 0 })
      .first();

    if (checkIfExist) {
      return response.ok({
        peserta_ujian: checkIfExist,
      });
    }

    const soalPGIds = await TkSoalUjian.query()
      .where({ dihapus: 0 })
      .andWhere({ m_ujian_id: ujian_id })
      .pluck("m_soal_ujian_id");

    const soalMasterPGIds = await MSoalUjian.query()
      .where({ bentuk: "pg" })
      .andWhere({ dihapus: 0 })
      .whereIn("id", soalPGIds)
      .limit(jadwalPpdb.jumlah_pg)
      .ids();

    const soalPG = await TkSoalUjian.query()
      .where({ m_ujian_id: ujian_id })
      .whereIn("m_soal_ujian_id", soalMasterPGIds)
      .orderByRaw(`${diacak}`)
      .limit(jadwalPpdb.jumlah_pg)
      .fetch();

    const soalEsaiIds = await TkSoalUjian.query()
      .where({ dihapus: 0 })
      .andWhere({ m_ujian_id: ujian_id })
      .pluck("m_soal_ujian_id");

    const soalMasterEsaiIds = await MSoalUjian.query()
      .where({ bentuk: "esai" })
      .andWhere({ dihapus: 0 })
      .whereIn("id", soalEsaiIds)
      .limit(jadwalPpdb.jumlah_esai)
      .ids();

    const soalEsai = await TkSoalUjian.query()
      .with("soal", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .where({ m_ujian_id: ujian_id })
      .whereIn("m_soal_ujian_id", soalMasterEsaiIds)
      .orderByRaw(`${diacak}`)
      .limit(jadwalPpdb.jumlah_esai)
      .fetch();

    const soalData = [];

    const trx = await Database.beginTransaction();
    const pesertaUjian = await TkPesertaUjianPpdb.create(
      {
        waktu_mulai,
        dinilai: 0,
        selesai: 0,
        dihapus: 0,
        m_user_id: user.id,
        m_jadwal_ppdb_id: m_jadwal_ppdb_id,
      },
      trx
    );

    await Promise.all(
      soalPG.toJSON().map(async (d) => {
        soalData.push({
          durasi: 0,
          ragu: 0,
          dijawab: 0,
          dinilai: 1,
          m_soal_ujian_id: d.m_soal_ujian_id,
          tk_peserta_ujian_ppdb_id: pesertaUjian.id,
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
          tk_peserta_ujian_ppdb_id: pesertaUjian.id,
        });
      })
    );

    await TkJawabanUjianSiswa.createMany(soalData, trx);
    await trx.commit();

    const res = await jadwalUjianReference.add({
      m_jadwal_ppdb_id: m_jadwal_ppdb_id,
      user_id: pesertaUjian.m_user_id,
      progress: 0,
      waktu_mulai: waktu_mulai,
    });

    await TkPesertaUjianPpdb.query().where({ id: pesertaUjian.id }).update({
      doc_id: res.id,
    });

    return response.ok({
      peserta_ujian: pesertaUjian,
    });
  }

  async detailPesertaUjianPpdb({
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
      pesertaUjian = await TkPesertaUjianPpdb.query()
        .with("jadwalPpdb", (builder) => {
          builder.with("soal");
        })
        .with("jawabanSiswa", (builder) => {
          builder.with("soal");
        })
        .with("user")
        .where({ id: peserta_ujian_id })
        .first();

      let semuaPeserta = await MJadwalPpdb.query()
        .with("peserta", (builder) => {
          builder
            .with("user", (builder) => {
              builder.select("id", "nama");
            })
            .select("id", "m_user_id", "m_jadwal_ppdb_id")
            .whereNotNull("waktu_selesai")
            .orderBy("m_user_id", "asc");
        })
        .where({
          m_jadwal_ppdb_id: pesertaUjian.m_jadwal_ppdb_id,
        })
        .fetch();

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
            if (JSON.parse(d.jawaban_rubrik_esai)) {
              if (JSON.parse(d.jawaban_rubrik_esai).length) {
                JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                  if (e.benar) {
                    metaHasil.nilaiEsai = metaHasil.nilaiEsai + e.poin;
                  }
                });

                if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
                  metaHasil.benar = metaHasil.benar + 1;
                }
              }
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
        semuaPeserta: semuaPeserta,
      });
    } else {
      pesertaUjian = await TkPesertaUjianPpdb.query()
        .with("jadwalPpdb", (builder) => {
          builder.with("soal");
        })
        .with("tugas")
        .withCount("jawabanSiswa as totalSoal")
        .withCount("jawabanSiswa as totalDijawab", (builder) => {
          builder.where({ dijawab: 1 });
        })
        .with("user")
        .where({ id: peserta_ujian_id })
        .first();

      const soal_ids = await TkJawabanUjianSiswa.query()
        .where({ tk_peserta_ujian_ppdb_id: peserta_ujian_id })
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
  async downloadGelombangPpdb({
    request,
    response,
    auth,
    params: { gelombang_ppdb_id },
  }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

    const gelombang = await MGelombangPpdb.query()
      .with("pendaftar", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "nama").with("profil");
          })
          .where({ dihapus: 0 });
      })
      .where({ id: gelombang_ppdb_id })
      .andWhere({ dihapus: 0 })
      .first();

    // return gelombang;
    const awal = moment(`${gelombang.dibuka}`).format("DD-MM-YYYY ");
    const akhir = moment(`${gelombang.ditutup}`).format("DD-MM-YYYY ");
    // return data;
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Pendaftar`);

    worksheet.mergeCells("A1:G1");
    worksheet.mergeCells("A2:G2");
    worksheet.mergeCells("A3:G3");

    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.addConditionalFormatting({
      ref: "A1:G3",
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
      ref: "A5:AT6",
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

    worksheet.getCell("A1").value = "Rekapan Gelombang PPDB";
    worksheet.getCell("A2").value = gelombang.nama;
    worksheet.getCell("A3").value = `${awal} - ${akhir}`;

    await Promise.all(
      gelombang
        .toJSON()
        .pendaftar.sort((a, b) =>
          ("" + a.user.nama).localeCompare("" + b.user.nama)
        )
        .map(async (d, idx) => {
          const dataAbsensi = d.user.profil
            ? JSON.parse(d.user.profil.data_absensi || "{}")
            : {};
          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 5}:A${(idx + 1) * 1 + 6}`,
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

          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 5}:AT${(idx + 1) * 1 + 6}`,
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

          // add column headers
          worksheet.getRow(5).values = [
            "No",
            "Nama",
            "Tanggal Mendaftar",
            "Status",
            "Semester 1",
            "",
            "",
            "",
            "",
            "",
            "",
            "Semester 2",
            "",
            "",
            "",
            "",
            "",
            "",
            "Semester 3",
            "",
            "",
            "",
            "",
            "",
            "",
            "Semester 4",
            "",
            "",
            "",
            "",
            "",
            "",
            "Semester 5",
            "",
            "",
            "",
            "",
            "",
            "",
            "Semester 6",
            "",
            "",
            "",
            "",
            "",
            "",
          ];
          worksheet.getRow(6).values = [
            "No",
            "Nama",
            "Tanggal Mendaftar",
            "Status",
            "Alpa",
            "Izin",
            "sakit",
            "Fisika",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "Fisika",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "Fisika",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "Fisika",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "Fisika",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "Fisika",
            "Matematika",
            "B.Indo",
            "B.Ing",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "tanggal" },
            { key: "status" },
            { key: "alpa1" },
            { key: "izin1" },
            { key: "sakit1" },
            { key: "fisika1" },
            { key: "matematika1" },
            { key: "bindo1" },
            { key: "bing1" },
            { key: "alpa2" },
            { key: "izin2" },
            { key: "sakit2" },
            { key: "fisika2" },
            { key: "matematika2" },
            { key: "bindo2" },
            { key: "bing2" },
            { key: "alpa3" },
            { key: "izin3" },
            { key: "sakit3" },
            { key: "fisika3" },
            { key: "matematika3" },
            { key: "bindo3" },
            { key: "bing3" },
            { key: "alpa4" },
            { key: "izin4" },
            { key: "sakit4" },
            { key: "fisika4" },
            { key: "matematika4" },
            { key: "bindo4" },
            { key: "bing4" },
            { key: "alpa5" },
            { key: "izin5" },
            { key: "sakit5" },
            { key: "fisika5" },
            { key: "matematika5" },
            { key: "bindo5" },
            { key: "bing5" },
            { key: "alpa6" },
            { key: "izin6" },
            { key: "sakit6" },
            { key: "fisika6" },
            { key: "matematika6" },
            { key: "bindo6" },
            { key: "bing6" },
          ];

          const checkBayar =
            JSON.parse(d?.pembayaran || "[]")?.reduce((a, b) => {
              if (b?.diverifikasi) {
                return a + b?.nominal;
              } else {
                return a + 0;
              }
            }, 0) < (gelombang?.jalur?.biaya || 0)
              ? "menungguKonfirmasiPembayaran"
              : d?.status;
          const status = dataStatus[checkBayar];

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nama: d.user ? d.user.nama : "-",
            tanggal: d ? d.created_at : "-",
            status: d ? status.text : "-",
            alpa1: d.user.profil
              ? dataAbsensi.alpa1
                ? dataAbsensi.alpa1
                : "0"
              : "0",
            izin1: d.user.profil
              ? dataAbsensi.izin1
                ? dataAbsensi.izin1
                : "0"
              : "0",
            sakit1: d.user.profil
              ? dataAbsensi.sakit1
                ? dataAbsensi.sakit1
                : "0"
              : "0",
            fisika1: d.user.profil ? d.user.profil.fisika1 : "-",
            matematika1: d.user.profil ? d.user.profil.matematika1 : "-",
            bindo1: d.user.profil ? d.user.profil.bindo1 : "-",
            bing1: d.user.profil ? d.user.profil.bing1 : "-",
            alpa2: d.user.profil
              ? dataAbsensi.alpa2
                ? dataAbsensi.alpa2
                : "0"
              : "0",
            izin2: d.user.profil
              ? dataAbsensi.izin2
                ? dataAbsensi.izin2
                : "0"
              : "0",
            sakit2: d.user.profil
              ? dataAbsensi.sakit2
                ? dataAbsensi.sakit2
                : "0"
              : "0",
            fisika2: d.user.profil ? d.user.profil.fisika2 : "-",
            matematika2: d.user.profil ? d.user.profil.matematika2 : "-",
            bindo2: d.user.profil ? d.user.profil.bindo2 : "-",
            bing2: d.user.profil ? d.user.profil.bing2 : "-",
            alpa3: d.user.profil
              ? dataAbsensi.alpa3
                ? dataAbsensi.alpa3
                : "0"
              : "0",
            izin3: d.user.profil
              ? dataAbsensi.izin3
                ? dataAbsensi.izin3
                : "0"
              : "0",
            sakit3: d.user.profil
              ? dataAbsensi.sakit3
                ? dataAbsensi.sakit3
                : "0"
              : "0",
            fisika3: d.user.profil ? d.user.profil.fisika3 : "-",
            matematika3: d.user.profil ? d.user.profil.matematika3 : "-",
            bindo3: d.user.profil ? d.user.profil.bindo3 : "-",
            bing3: d.user.profil ? d.user.profil.bing3 : "-",
            alpa4: d.user.profil
              ? dataAbsensi.alpa4
                ? dataAbsensi.alpa4
                : "0"
              : "0",
            izin4: d.user.profil
              ? dataAbsensi.izin4
                ? dataAbsensi.izin4
                : "0"
              : "0",
            sakit4: d.user.profil
              ? dataAbsensi.sakit4
                ? dataAbsensi.sakit4
                : "0"
              : "0",
            fisika4: d.user.profil ? d.user.profil.fisika4 : "-",
            matematika4: d.user.profil ? d.user.profil.matematika4 : "-",
            bindo4: d.user.profil ? d.user.profil.bindo4 : "-",
            bing4: d.user.profil ? d.user.profil.bing4 : "-",
            alpa5: d.user.profil
              ? dataAbsensi.alpa5
                ? dataAbsensi.alpa5
                : "0"
              : "0",
            izin5: d.user.profil
              ? dataAbsensi.izin5
                ? dataAbsensi.izin5
                : "0"
              : "0",
            sakit5: d.user.profil
              ? dataAbsensi.sakit5
                ? dataAbsensi.sakit5
                : "0"
              : "0",
            fisika5: d.user.profil ? d.user.profil.fisika5 : "-",
            matematika5: d.user.profil ? d.user.profil.matematika5 : "-",
            bindo5: d.user.profil ? d.user.profil.bindo5 : "-",
            bing5: d.user.profil ? d.user.profil.bing5 : "-",
            alpa6: d.user.profil
              ? dataAbsensi.alpa6
                ? dataAbsensi.alpa6
                : "0"
              : "0",
            izin6: d.user.profil
              ? dataAbsensi.izin6
                ? dataAbsensi.izin6
                : "0"
              : "0",
            sakit6: d.user.profil
              ? dataAbsensi.sakit6
                ? dataAbsensi.sakit6
                : "0"
              : "0",
            fisika6: d.user.profil ? d.user.profil.fisika6 : "-",
            matematika6: d.user.profil ? d.user.profil.matematika6 : "-",
            bindo6: d.user.profil ? d.user.profil.bindo6 : "-",
            bing6: d.user.profil ? d.user.profil.bing6 : "-",
          });
        })
    );
    worksheet.mergeCells(`A5:A6`);
    worksheet.mergeCells(`B5:B6`);
    worksheet.mergeCells(`C5:C6`);
    worksheet.mergeCells(`D5:D6`);
    worksheet.mergeCells(`E5:K5`);
    worksheet.mergeCells(`L5:R5`);
    worksheet.mergeCells(`S5:Y5`);
    worksheet.mergeCells(`Z5:AF5`);
    worksheet.mergeCells(`AG5:AM5`);
    worksheet.mergeCells(`AN5:AT5`);
    worksheet.getColumn("A").width = 6;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 0;
    worksheet.getColumn("D").width = 6;
    worksheet.autoFilter = {
      from: "A6",
      to: "AT6",
    };

    let namaFile = `/uploads/rekapan-pendaftar-ppdb-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = PPDBController;

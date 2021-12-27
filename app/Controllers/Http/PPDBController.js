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

  async getJadwalPPDB({ request, response }) {
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
      let user;
      try {
        user = await auth.getUser();
      } catch {
        //
      }
      if (user) {
        gelombangAktif = await MPendaftarPpdb.query()
          .with("gelombang", (builder) => {
            builder.with("jalur");
          })
          .where({ dihapus: 0 })
          .andWhere({ m_user_id: user.id })
          .whereIn("m_gelombang_ppdb_id", checkIds)
          .first();

        pendaftarIds = await MPendaftarPpdb.query()
          .where({ dihapus: 0 })
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
}

module.exports = PPDBController;

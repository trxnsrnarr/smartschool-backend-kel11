"use strict";

const MSekolah = use("App/Models/MSekolah");
const MGelombangPpdb = use("App/Models/MGelombangPpdb");
const MJurusan = use("App/Models/MJurusan");
const MPendaftarPpdb = use("App/Models/MPendaftarPpdb");
const MDiskonPendaftar = use("App/Models/MDiskonPendaftar");
const Mta = use("App/Models/Mta");
const MUjian = use("App/Models/MUjian");
const MJalurPpdb = use("App/Models/MJalurPpdb");
const MInformasiJalurPpdb = use("App/Models/MInformasiJalurPpdb");
const MInformasiGelombang = use("App/Models/MInformasiGelombang");
const MJadwalPpdb = use("App/Models/MJadwalPpdb");
const TkPesertaUjian = use("App/Models/TkPesertaUjian");
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
function padNumber(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

class PPDBController {
  async getSekolahByDomain(domain) {
    const sekolah = await MSekolah.query()
      .with("informasi")
      .with("fitur")
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

    const { nama, dibuka, ditutup, biaya, tipe } = request.post();

    const jalur = await MJalurPpdb.create({
      nama,
      dibuka,
      ditutup,
      biaya,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      tipe,
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

    const { nama, dibuka, ditutup, biaya, tipe } = request.post();

    const update = await MJalurPpdb.query().where({ id }).update({
      nama,
      dibuka,
      ditutup,
      biaya,
      dihapus: 0,
      m_sekolah_id: sekolah.id,
      tipe,
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
          .withCount("pendaftar as jumlahPendaftar", (builder) => {
            builder.where({ dihapus: 0 });
          })
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
      status = "berlangsung",
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

    let jadwal = MJadwalPpdb.query()
      .with("soal")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder.with("jalur");
        });
      })
      .whereIn("m_informasi_gelombang_id", infoIds)
      .where({ dihapus: 0 });

    if (status == "berlangsung") {
      jadwal
        .where("waktu_dibuka", "<=", moment().format("YYYY-MM-DD HH:mm:ss"))
        .where("waktu_ditutup", ">", moment().format("YYYY-MM-DD HH:mm:ss"));
    } else if (status == "akan-datang") {
      jadwal.where("waktu_dibuka", ">", moment().format("YYYY-MM-DD HH:mm:ss"));
    } else if (status == "sudah-selesai") {
      jadwal.where(
        "waktu_ditutup",
        "<=",
        moment().format("YYYY-MM-DD HH:mm:ss")
      );
    }

    jadwal = await jadwal.paginate(page, 20);

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
          .withCount("pendaftar as jumlahPendaftar", (builder) => {
            builder.where({ dihapus: 0 });
          })
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

  async detailJadwalPPDBSS({ response, request, auth, params: { id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search } = request.get();

    const jadwalUjian = await MJadwalPpdb.query()
      // .with("rombelUjian", (builder) => {
      //   builder.where({ dihapus: 0 }).with("rombel");
      // })
      .with("ujian")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder.with("jalur").with("pendaftar", (builder) => {
            builder.where({ dihapus: 0 });
          });
        });
      })
      .where({ id })
      .first();

    let pesertaUjianData = [];
    let detailRombel;

    const pesertaIds = await TkPesertaUjianPpdb.query()
      .where({ m_jadwal_ppdb_id: id })
      .where({ dihapus: 0 })
      .whereNotNull("tk_peserta_ujian_id")
      .pluck("tk_peserta_ujian_id");

    const pendaftarIds = await TkPesertaUjianPpdb.query()
      .where({ m_jadwal_ppdb_id: id })
      .where({ dihapus: 0 })
      .whereNotNull("m_pendaftar_ppdb_id")
      .pluck("m_pendaftar_ppdb_id");

    const userIds = await TkPesertaUjian.query()
      .whereIn("id", pesertaIds)
      .where({ dihapus: 0 })
      .pluck("m_user_id");

    const users = await User.query()
      .with("profil")
      .whereIn("id", userIds)
      .where("nama", "like", `%${search}%`)
      .where({ dihapus: 0 })
      .fetch();

    pesertaUjianData = await Promise.all(
      users.toJSON().map(async (d) => {
        const pesertaUjian = await TkPesertaUjian.query()
          .where({ m_user_id: d.id })
          .where({ dihapus: 0 })
          .whereIn("id", pesertaIds)
          .fetch();
        const pendaftar = await MPendaftarPpdb.query()
          .whereIn("id", pendaftarIds)
          .where({ m_user_id: d.id })
          .first();
        return { ...d, pesertaUjian, pendaftar };
      })
    );

    return response.ok({
      jadwalUjian,
      pesertaUjian: pesertaUjianData,
      rombel: detailRombel,
    });
  }

  async downloadJadwalPPDBSS({ response, request, auth, params: { id } }) {
    const user = await auth.getUser();

    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { search } = request.get();

    const jadwalUjianData = await MJadwalPpdb.query()
      // .with("rombelUjian", (builder) => {
      //   builder.where({ dihapus: 0 }).with("rombel");
      // })
      .with("ujian")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder.with("jalur").with("pendaftar", (builder) => {
            builder.where({ dihapus: 0 });
          });
        });
      })
      .where({ id })
      .first();
    const jadwalUjian = jadwalUjianData.toJSON();

    let pesertaUjianData = [];
    let detailRombel;

    const pesertaIds = await TkPesertaUjianPpdb.query()
      .where({ m_jadwal_ppdb_id: id })
      .where({ dihapus: 0 })
      .whereNotNull("tk_peserta_ujian_id")
      .pluck("tk_peserta_ujian_id");

    const pendaftarIds = await TkPesertaUjianPpdb.query()
      .where({ m_jadwal_ppdb_id: id })
      .where({ dihapus: 0 })
      .whereNotNull("m_pendaftar_ppdb_id")
      .pluck("m_pendaftar_ppdb_id");

    const userIds = await TkPesertaUjian.query()
      .whereIn("id", pesertaIds)
      .where({ dihapus: 0 })
      .pluck("m_user_id");

    const users = await User.query()
      .with("profil")
      .whereIn("id", userIds)
      .where({ dihapus: 0 })
      .fetch();

    pesertaUjianData = await Promise.all(
      users.toJSON().map(async (d) => {
        const pesertaUjian = await TkPesertaUjian.query()
          .where({ m_user_id: d.id })
          .where({ dihapus: 0 })
          .whereIn("id", pesertaIds)
          .first();
        const pendaftar = await MPendaftarPpdb.query()
          .whereIn("id", pendaftarIds)
          .where({ m_user_id: d.id })
          .first();
        return { ...d, pesertaUjian, pendaftar };
      })
    );

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    // return gelombang;
    const awal = moment(`${jadwalUjian.waktu_dibuka}`).format("DD-MM-YYYY ");
    const akhir = moment(`${jadwalUjian.waktu_ditutup}`).format("DD-MM-YYYY ");
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
      ref: "A1:J3",
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
      ref: "A5:J5",
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

    worksheet.getCell("A1").value = `${jadwalUjian.ujian.nama}`;
    worksheet.getCell("A2").value = jadwalUjian.info.gelombang.nama;
    worksheet.getCell("A3").value = `${awal} - ${akhir}`;

    const namaGelombang = jadwalUjian.info.gelombang.nama.toLowerCase();
    const gelombang = jadwalUjian.info.gelombang;
    await Promise.all(
      pesertaUjianData
        .sort((a, b) => ("" + a.nama).localeCompare("" + b.nama))
        .map(async (d, idx) => {
          const nomorPeserta = `${moment().format("YYYY")} - ${namaGelombang.includes("khusus")
            ? "00"
            : namaGelombang.includes("reguler 1")
              ? "01"
              : namaGelombang.includes("reguler 3")
                ? "02"
                : "03"
            } - ${padNumber(
              gelombang.pendaftar.findIndex((e) => {
                return e.id == d.pendaftar.id;
              }) + 1,
              `${gelombang.diterima}`.length
            )}`;
          worksheet.addConditionalFormatting({
            ref: `A${(idx + 1) * 1 + 5}:A${(idx + 1) * 1 + 5}`,
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
            ref: `B${(idx + 1) * 1 + 5}:J${(idx + 1) * 1 + 6}`,
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
            "Gender",
            "Agama",
            "Tanggal lahir",
            "Asal Sekolah",
            "Nomor Peserta",
            "Tanggal Mendaftar",
            "Status",
            "Nilai",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "gender" },
            { key: "agama" },
            { key: "tgllahir" },
            { key: "asalsklh" },
            { key: "nomorPeserta" },
            { key: "tanggal" },
            { key: "status" },
            { key: "nilai" },
          ];

          const checkBayar =
            JSON.parse(d.pendaftar.pembayaran || "[]").reduce((a, b) => {
              if (b.diverifikasi) {
                return a + b.nominal;
              } else {
                return a + 0;
              }
            }, 0) < (gelombang.jalur.biaya || 0)
              ? "menungguKonfirmasiPembayaran"
              : d.pendaftar.status;
          const status = dataStatus[checkBayar];

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nama: d ? d.nama : "-",
            gender: d ? d.gender : "-",
            agama: d ? d.agama : "-",
            tgllahir: d ? d.tanggal_lahir : "-",
            asalsklh: d.profil ? d.profil.asal_sekolah : "-",
            nomorPeserta: nomorPeserta ? nomorPeserta : "-",
            tanggal: d ? d.pendaftar.created_at : "-",
            status: status ? status.text : "-",
            nilai: d.pesertaUjian.nilai,
          });
        })
    );
    worksheet.getColumn("A").width = 6;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 20;
    worksheet.getColumn("D").width = 20;
    worksheet.getColumn("E").width = 20;
    worksheet.getColumn("F").width = 20;
    worksheet.getColumn("G").width = 20;
    worksheet.getColumn("H").width = 20;
    worksheet.getColumn("I").width = 20;
    worksheet.autoFilter = {
      from: "A6",
      to: "AT6",
    };

    let namaFile = `/uploads/rekapan-ujian-ppdb-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
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
    try {
      const domain = request.headers().origin;
      const sekolah = await this.getSekolahByDomain(domain);

      if (sekolah === "404") {
        return response.notFound({ message: "Sekolah belum terdaftar" });
      }

      const ta = await this.getTAAktif(sekolah);

      if (!ta) {
        return response.notFound({
          message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
        });
      }

      let jalurIds;
      if ([14, 13, 121].includes(sekolah.id)) {
        jalurIds = await MJalurPpdb.query()
          .where({ dihapus: 0, m_sekolah_id: sekolah.id, tipe: "Pengembalian" })
          .ids();
      } else {
        jalurIds = await MJalurPpdb.query()
          .where({ dihapus: 0, m_sekolah_id: sekolah.id })
          .ids();
      }

      const gelombangIds = await MGelombangPpdb.query()
        .where({ dihapus: 0 })
        .whereIn("m_jalur_ppdb_id", jalurIds)
        .where({ m_ta_id: ta.id })
        .ids();
      // console.log("[INFO] Gelombang IDs: ", gelombangIds);

      let { is_public } = request.get();
      is_public = is_public || false;
      let gelombangId = request.header("x-gelombang-id") || null;
      // console.log("[DEBUG] gelombangId dari request: ", gelombangId);

      //  Menentukan daftar gelombang yang sudah dibuka
      const checkIds = await MGelombangPpdb.query()
        .where("dibuka", "<=", moment().endOf("day").format("YYYY-MM-DD HH:mm:ss"))
        .andWhere({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .ids();
      // console.log("[INFO] Check IDs (Gelombang Dibuka): ", checkIds);

      let user;
      let gelombangAktif = null;
      let terdaftar = null;
      let gelombang = null;



      if (checkIds.length && is_public === false) {
        try {
          user = await auth.getUser();
        } catch {
          console.warn("[WARN] User tidak terautentikasi.");
        }

        if (user) {
          if (gelombangId) {
            //  Ambil data Pendaftar PPDB berdasarkan `gelombangId` yang sekarang adalah `pendaftar1.id`
            const pendaftar = await MPendaftarPpdb.query()
              .where({ id: gelombangId, dihapus: 0 }) // Menggunakan ID dari pendaftar
              .with("gelombang", (builder) => {
                builder
                  .with("jalur")
                  .with("pendaftar", (builder) => {
                    builder.select("id", "m_gelombang_ppdb_id").where({ dihapus: 0 });
                  })
                  .with("informasi", (builder) => {
                    builder.where({ tipe: "ujian" }).with("ujian").andWhere({ dihapus: 0 });
                  });
              })
              .with("diskon")
              .first();

            if (pendaftar) {
              gelombangAktif = pendaftar;
              // console.log("[INFO] Gelombang Aktif ditemukan:", gelombangAktif.toJSON());
            } else {
              console.warn("[WARN] Gelombang Aktif tidak ditemukan, mencoba menggunakan default...");
            }
          }

          //  Jika `gelombangAktif` tetap kosong, ambil default dari daftar yang sudah terdaftar
          if (!gelombangAktif) {
            // console.log("[INFO] Menggunakan gelombang default (jika tersedia)");

            //  Ambil daftar gelombang yang telah didaftarkan oleh user
            const gelombangTerdaftar = await MGelombangPpdb.query()
              .with("pendaftar1", (builder) => {
                builder.where({ m_user_id: user.id });
              })
              .with("jalur")
              .whereIn("id", gelombangIds)
              .where({ dihapus: 0 })
              .fetch();

            //  Cari gelombang default dari pendaftar1
            const daftarGelombang = gelombangTerdaftar.toJSON();
            const gelombangDefault = daftarGelombang.find((g) => g.pendaftar1 && g.pendaftar1.id);

            if (gelombangDefault) {
              gelombangAktif = await MPendaftarPpdb.query()
                .where({ id: gelombangDefault.pendaftar1.id, dihapus: 0 }) // Menggunakan ID dari pendaftar1
                .with("gelombang", (builder) => {
                  builder
                    .with("jalur")
                    .with("pendaftar", (builder) => {
                      builder.select("id", "m_gelombang_ppdb_id").where({ dihapus: 0 });
                    })
                    .with("informasi", (builder) => {
                      builder.where({ tipe: "ujian" }).with("ujian").andWhere({ dihapus: 0 });
                    });
                })
                .with("diskon")
                .first();

              console.log("[INFO] Gelombang Default ditemukan:", gelombangAktif ? gelombangAktif.toJSON() : null);
            } else {
              console.warn("[WARN] Tidak ada gelombang yang bisa dijadikan default.");
            }
          }

          //  Ambil daftar gelombang yang telah didaftarkan oleh user
          const pendaftarIds = await MPendaftarPpdb.query()
            .where({ dihapus: 0 })
            .whereIn("m_gelombang_ppdb_id", gelombangIds)
            .andWhere({ m_user_id: user.id })
            .pluck("m_gelombang_ppdb_id");

          terdaftar = await MGelombangPpdb.query()
            .with("pendaftar1", (builder) => {
              builder.where({ m_user_id: user.id });
            })
            .with("jalur")
            .whereIn("id", pendaftarIds)
            .where({ dihapus: 0 })
            .fetch();
        }

      }

      //  Ambil semua gelombang yang tersedia
      gelombang = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();

      const jumlahPeserta = await User.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ dihapus: 0, role: "ppdb" })
        .count("* as total");

      let semuaGelombangPengembalian = null;
      if (gelombangAktif) {
        const gelombangData = gelombangAktif.toJSON();
        if (gelombangData.gelombang && gelombangData.gelombang.m_jalur_ppdb_id) {
          semuaGelombangPengembalian = await MGelombangPpdb.query()
            .where({ dihapus: 0 })
            .where({ m_jalur_ppdb_id: gelombangData.gelombang.m_jalur_ppdb_id })
            .where({ m_ta_id: ta.id })
            .ids();
        }
      }

      return response.ok({
        gelombang,
        terdaftar,
        gelombangAktif,
        jumlahPeserta: jumlahPeserta[0].total,
        semuaGelombangPengembalian,
      });
    } catch (error) {
      console.error("[ERROR] Terjadi kesalahan saat mengambil data PPDB:", error);
      return response.internalServerError({
        message: "Terjadi kesalahan saat mengambil data PPDB.",
      });
    }
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
              builder.where({ dihapus: 0 }).with("user");
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

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalPpdb = await MJadwalPpdb.query()
      .with("soal")
      .with("info", (builder) => {
        builder.with("gelombang", (builder) => {
          builder
            .with("pendaftar", (builder) => {
              builder.where({ dihapus: 0 }).with("user", (builder) => {
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

  async downloadGelombangPpdb1({
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

    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const gelombang = await MGelombangPpdb.query()
      .with("pendaftar", (builder) => {
        builder
          .with("gelombang", (builder) => {
            builder
              .with("jalur")
              .with("pendaftar", (builder) => {
                builder
                  .select("id", "m_gelombang_ppdb_id")
                  .where({ dihapus: 0 });
              })
              .with("informasi", (builder) => {
                builder
                  .where({ tipe: "ujian" })
                  .with("ujian")
                  .andWhere({ dihapus: 0 });
              });
          })
          .with("user", (builder) => {
            builder.with("profil");
          })
          .where({ dihapus: 0 });
      })
      .with("jalur")
      .where({ id: gelombang_ppdb_id })
      .andWhere({ dihapus: 0 })
      .first();

    const jurusan = await MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    const awal = moment(`${gelombang.dibuka}`).format("DD-MM-YYYY ");
    const akhir = moment(`${gelombang.ditutup}`).format("DD-MM-YYYY ");

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Pendaftar`);

    // Setting up the worksheet
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
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "A5:BH6",
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

    // Get jalur IDs based on sekolah ID
    let jalurIds;
    if ([14, 13, 121].includes(sekolah.id)) {
      jalurIds = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .where({ tipe: "Pengembalian" })
        .ids();
    } else {
      jalurIds = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .ids();
    }

    const gelombangIds = await MGelombangPpdb.query()
      .where({ dihapus: 0 })
      .whereIn("m_jalur_ppdb_id", jalurIds)
      .where({ m_ta_id: ta.id })
      .ids();

    const checkIds = await MGelombangPpdb.query()
      .where(
        "dibuka",
        "<=",
        moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
      )
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("id", [gelombang_ppdb_id])
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let gelombangUser = [];

    if ([14, 13, 121].includes(sekolah.id)) {
      const jalurIds1 = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .ids();

      const gelombangIds1 = await MGelombangPpdb.query()
        .where({ dihapus: 0 })
        .whereIn("m_jalur_ppdb_id", jalurIds1)
        .where({ m_ta_id: ta.id })
        .ids();

      gelombangUser = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds1)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    } else {
      gelombangUser = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    // Process each pendaftar and generate rows
    const data = await Promise.all(
      gelombang
        .toJSON()
        .pendaftar.sort((a, b) =>
          ("" + a.user.nama).localeCompare("" + b.user.nama)
        )
        .map(async (d, idx) => {
          const urutan = gelombang
            .toJSON()
            .pendaftar.findIndex((e) => e.id == d.id);
          const dataAbsensi = d.user.profil
            ? JSON.parse(d.user.profil.data_absensi || "{}")
            : {};

          let gelombangAktif, gelombangPembelian;
          let semuaGelombangPengembalian;

          if ([14, 13, 121].includes(sekolah.id)) {
            const jalurIds1 = await MJalurPpdb.query()
              .where({ dihapus: 0 })
              .where({ m_sekolah_id: sekolah.id })
              .andWhere({ tipe: "Pembelian" })
              .ids();
            const gelombangIds1 = await MGelombangPpdb.query()
              .where({ dihapus: 0 })
              .whereIn("m_jalur_ppdb_id", jalurIds1)
              .where({ m_ta_id: ta.id })
              .ids();

            const checkIds1 = await MGelombangPpdb.query()
              .where(
                "dibuka",
                "<=",
                moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
              )
              .andWhere({ m_sekolah_id: sekolah.id })
              .whereIn("id", gelombangIds1)
              .andWhere({ m_ta_id: ta.id })
              .andWhere({ dihapus: 0 })
              .ids();

            if (d.user.id) {
              gelombangPembelian = await MPendaftarPpdb.query()
                .with("gelombang", (builder) => {
                  builder.with("jalur").with("pendaftar", (builder) => {
                    builder
                      .select("id", "m_gelombang_ppdb_id", "m_user_id")
                      .where({ dihapus: 0 });
                  });
                })
                .with("user", (builder) => {
                  builder.with("profil");
                })
                .where({ m_user_id: d.user.id })
                .whereIn("m_gelombang_ppdb_id", checkIds1)
                .andWhere({ dihapus: 0 })
                .fetch();
            }

            const gelombangAktifIds = await MGelombangPpdb.query()
              .where({ dihapus: 0 })
              .whereIn("m_jalur_ppdb_id", jalurIds1)
              .where({ m_ta_id: ta.id })
              .ids();

            gelombangAktif = await MGelombangPpdb.query()
              .with("jalur")
              .withCount("pendaftar as jumlahPendaftar", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ m_sekolah_id: sekolah.id })
              .whereIn("id", gelombangAktifIds)
              .andWhere({ m_ta_id: ta.id })
              .andWhere({ dihapus: 0 })
              .fetch();

            const jalurIds2 = await MJalurPpdb.query()
              .where({ dihapus: 0 })
              .where({ m_sekolah_id: sekolah.id })
              .andWhere({ tipe: "Pengembalian" })
              .ids();
            const gelombangIds2 = await MGelombangPpdb.query()
              .where({ dihapus: 0 })
              .whereIn("m_jalur_ppdb_id", jalurIds2)
              .where({ m_ta_id: ta.id })
              .ids();

            semuaGelombangPengembalian = await MGelombangPpdb.query()
              .with("jalur")
              .withCount("pendaftar as jumlahPendaftar", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ m_sekolah_id: sekolah.id })
              .whereIn("id", gelombangIds2)
              .andWhere({ m_ta_id: ta.id })
              .andWhere({ dihapus: 0 })
              .fetch();
          } else {
            if (d.user.id) {
              gelombangPembelian = await MPendaftarPpdb.query()
                .with("gelombang", (builder) => {
                  builder.with("jalur").with("pendaftar", (builder) => {
                    builder
                      .select("id", "m_gelombang_ppdb_id", "m_user_id")
                      .where({ dihapus: 0 });
                  });
                })
                .with("user", (builder) => {
                  builder.with("profil");
                })
                .where({ m_user_id: d.user.id })
                .whereIn("m_gelombang_ppdb_id", checkIds)
                .andWhere({ dihapus: 0 })
                .fetch();
            }

            gelombangAktif = await MGelombangPpdb.query()
              .with("jalur")
              .withCount("pendaftar as jumlahPendaftar", (builder) => {
                builder.where({ dihapus: 0 });
              })
              .where({ m_sekolah_id: sekolah.id })
              .whereIn("id", gelombangIds)
              .andWhere({ m_ta_id: ta.id })
              .andWhere({ dihapus: 0 })
              .fetch();
          }

          let semuaGelombang = gelombangAktif
            .toJSON()
            .concat(gelombangPembelian.toJSON());

          let idxJalur = 0;
          let idxGelombang = 0;
          const nilaiRapor = JSON.parse(d.user.profil.nilai_rapor || "[]");

          semuaGelombang = semuaGelombang.sort((a, b) =>
            ("" + a.jalur.nama).localeCompare("" + b.jalur.nama)
          );

          const dataArr = await Promise.all(
            semuaGelombang.map(async (p) => {
              let nilaiUjian, hasilUjian;

              if (sekolah.id == 14) {
                nilaiUjian = await MPendaftarUjian.query()
                  .where({ m_user_id: d.user.id })
                  .where({ m_ujian_id: p.informasi.ujian.id })
                  .fetch();
              }

              if (p.jalur.tipe == "Pengembalian" && p.jumlahPendaftar > 0) {
                const checkKelulusan = await this.checkKelulusan(
                  sekolah.id,
                  d.user.id,
                  p.gelombang.jalur.id
                );

                hasilUjian = checkKelulusan ? "LULUS" : "TIDAK LULUS";
              }

              let hasil;

              if (p.jalur.tipe == "Pengembalian" && p.jumlahPendaftar > 0) {
                hasil = {
                  urutan: `${urutan + 1}`,
                  id: `${d.user.id}`,
                  user: {
                    nama: `${d.user.nama}`,
                    username: `${d.user.username}`,
                  },
                  profil: {
                    tempat_lahir: `${d.user.profil.tempat_lahir}`,
                    tanggal_lahir: `${d.user.profil.tanggal_lahir}`,
                    jenis_kelamin: `${d.user.profil.jenis_kelamin}`,
                    asal_sekolah: `${d.user.profil.asal_sekolah}`,
                    alamat: `${d.user.profil.alamat}`,
                    telepon: `${d.user.profil.telepon}`,
                    nilai_rapor: `${nilaiRapor[idx].nilai_rapor}`,
                    rapor: nilaiRapor,
                    absen: {
                      tidak_masuk: dataAbsensi.tidak_masuk || 0,
                      sakit: dataAbsensi.sakit || 0,
                      izin: dataAbsensi.izin || 0,
                      alpa: dataAbsensi.alpa || 0,
                    },
                  },
                  pendaftar: {
                    tgl_daftar: `${d.created_at}`,
                    hasil_ujian: hasilUjian || "-",
                    nilai: nilaiUjian || "-",
                  },
                  gelombang: {
                    gelombang: `${p.nama}`,
                    jalur: `${p.jalur.nama}`,
                  },
                };
              } else {
                hasil = {
                  urutan: `${urutan + 1}`,
                  id: `${d.user.id}`,
                  user: {
                    nama: `${d.user.nama}`,
                    username: `${d.user.username}`,
                  },
                  profil: {
                    tempat_lahir: `${d.user.profil.tempat_lahir}`,
                    tanggal_lahir: `${d.user.profil.tanggal_lahir}`,
                    jenis_kelamin: `${d.user.profil.jenis_kelamin}`,
                    asal_sekolah: `${d.user.profil.asal_sekolah}`,
                    alamat: `${d.user.profil.alamat}`,
                    telepon: `${d.user.profil.telepon}`,
                    nilai_rapor: `${nilaiRapor[idx].nilai_rapor}`,
                    rapor: nilaiRapor,
                    absen: {
                      tidak_masuk: dataAbsensi.tidak_masuk || 0,
                      sakit: dataAbsensi.sakit || 0,
                      izin: dataAbsensi.izin || 0,
                      alpa: dataAbsensi.alpa || 0,
                    },
                  },
                  pendaftar: {
                    tgl_daftar: `${d.created_at}`,
                    hasil_ujian: hasilUjian || "-",
                    nilai: nilaiUjian || "-",
                  },
                  gelombang: {
                    gelombang: `${p.nama}`,
                    jalur: `${p.jalur.nama}`,
                  },
                };
              }

              idxJalur += 1;
              return hasil;
            })
          );

          return dataArr;
        })
    );

    // Convert data to single array and add to worksheet
    let dataArray = [];
    for (let i = 0; i < data.length; i++) {
      dataArray = dataArray.concat(data[i]);
    }

    const columnHeaders = [
      "No",
      "Id",
      "Nama",
      "Username",
      "Tempat Lahir",
      "Tanggal Lahir",
      "Jenis Kelamin",
      "Asal Sekolah",
      "Alamat",
      "Telepon",
      "Nilai Rapor",
      "Absensi Tidak Masuk",
      "Absensi Sakit",
      "Absensi Izin",
      "Absensi Alpa",
      "Tanggal Daftar",
      "Hasil Ujian",
      "Nilai",
      "Gelombang",
      "Jalur",
    ];

    worksheet.addRow(columnHeaders);
    dataArray.forEach((row) => worksheet.addRow(Object.values(row)));

    // Set response headers and send the workbook
    response.header(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    response.header(
      "Content-Disposition",
      `attachment; filename=rekapan_gelombang_ppdb_${moment().format(
        "YYYYMMDDHHmmss"
      )}.xlsx`
    );

    await workbook.xlsx.write(response.res);
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
    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }
    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const gelombang = await MGelombangPpdb.query()
      .with("pendaftar", (builder) => {
        builder
          .with("gelombang", (builder) => {
            builder
              .with("jalur")
              .with("pendaftar", (builder) => {
                builder
                  .select("id", "m_gelombang_ppdb_id")
                  .where({ dihapus: 0 });
              })
              .with("informasi", (builder) => {
                builder
                  .where({ tipe: "ujian" })
                  .with("ujian")
                  .andWhere({ dihapus: 0 });
              });
          })
          .with("user", (builder) => {
            builder.with("profil");
          })
          .where({ dihapus: 0 });
      })
      .with("jalur")
      .where({ id: gelombang_ppdb_id })
      .andWhere({ dihapus: 0 })
      .first();

    const jurusan = await MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

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
      ref: "A5:BH6",
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

    const namaGelombang = gelombang.nama.toLowerCase();
    let jalurIds;

    if (sekolah?.id == 14 || sekolah?.id == 13 || sekolah?.id == 121) {
      jalurIds = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .where({ tipe: "Pengembalian" })
        .ids();
    } else {
      jalurIds = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .ids();
    }
    const gelombangIds = await MGelombangPpdb.query()
      .where({ dihapus: 0 })
      .whereIn("m_jalur_ppdb_id", jalurIds)
      .where({ m_ta_id: ta.id })
      .ids();

    const checkIds = await MGelombangPpdb.query()
      .where(
        "dibuka",
        "<=",
        moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
      )
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("id", [gelombang_ppdb_id])
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let gelombangUser = [];

    if (sekolah?.id == 14 || sekolah?.id == 13 || sekolah?.id == 121) {
      const jalurIds1 = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .ids();

      const gelombangIds1 = await MGelombangPpdb.query()
        .where({ dihapus: 0 })
        .whereIn("m_jalur_ppdb_id", jalurIds1)
        .where({ m_ta_id: ta.id })
        .ids();
      gelombangUser = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds1)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    } else {
      gelombangUser = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }

    const data = await Promise.all(
      gelombang
        .toJSON()
        .pendaftar.sort((a, b) =>
          ("" + a.user.nama).localeCompare("" + b.user.nama)
        )
        .map(async (d, idx) => {
          const urutan = gelombang
            .toJSON()
            .pendaftar.findIndex((e) => e.id == d.id);
          const dataAbsensi = d.user.profil
            ? JSON.parse(d.user.profil.data_absensi || "{}")
            : {};

          let gelombangAktif;
          // let pendaftarIds;
          // let pendaftarIds1;
          // let terdaftar;
          // let terdaftarPembelian;
          let gelombangPembelian;

          // gelombangAktif = await MPendaftarPpdb.query()
          //   .with("gelombang", (builder) => {
          //     builder
          //       .with("jalur")
          //       .with("pendaftar", (builder) => {
          //         builder
          //           .select("id", "m_gelombang_ppdb_id")
          //           .where({ dihapus: 0 });
          //       })
          //       .with("informasi", (builder) => {
          //         builder
          //           .where({ tipe: "ujian" })
          //           .with("ujian")
          //           .andWhere({ dihapus: 0 });
          //       });
          //   })
          //   .with("diskon")
          //   .where({ dihapus: 0 })
          //   // .whereIn("m_gelombang_ppdb_id", gelombangIds)
          //   .andWhere({ m_user_id: d.user.id })
          //   .whereIn("m_gelombang_ppdb_id", checkIds)
          //   .first();

          // pendaftarIds = await MPendaftarPpdb.query()
          //   .where({ dihapus: 0 })
          //   .whereIn("m_gelombang_ppdb_id", gelombangIds)
          //   .andWhere({ m_user_id: d.user.id })
          //   .pluck("m_gelombang_ppdb_id");

          // terdaftar = await MGelombangPpdb.query()
          //   .with("pendaftar1", (builder) => {
          //     builder.where({ m_user_id: d.user.id });
          //   })
          //   .with("jalur")
          //   .whereIn("id", pendaftarIds)
          //   .where({ dihapus: 0 })
          //   .fetch();

          if (sekolah?.id == 14 || sekolah?.id == 13) {
            const jalurIds1 = await MJalurPpdb.query()
              .where({ dihapus: 0 })
              .where({ m_sekolah_id: sekolah.id })
              .andWhere({ tipe: "Pembelian" })
              .ids();
            const gelombangIds1 = await MGelombangPpdb.query()
              .where({ dihapus: 0 })
              .whereIn("m_jalur_ppdb_id", jalurIds1)
              .where({ m_ta_id: ta.id })
              .ids();

            const checkIds1 = await MGelombangPpdb.query()
              .where(
                "dibuka",
                "<=",
                moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
              )
              .andWhere({ m_sekolah_id: sekolah.id })
              .whereIn("id", gelombangIds1)
              .andWhere({ m_ta_id: ta.id })
              .andWhere({ dihapus: 0 })
              .ids();

            if (d.user.id) {
              gelombangPembelian = await MPendaftarPpdb.query()
                .with("gelombang", (builder) => {
                  builder
                    .with("jalur")
                    .with("pendaftar", (builder) => {
                      builder
                        .select("id", "m_gelombang_ppdb_id", "m_user_id")
                        .where({ dihapus: 0 });
                    })
                    .with("informasi", (builder) => {
                      builder
                        .where({ tipe: "ujian" })
                        .with("ujian")
                        .andWhere({ dihapus: 0 });
                    });
                })
                .where({ dihapus: 0 })
                // .whereIn("m_gelombang_ppdb_id", gelombangIds)
                .andWhere({ m_user_id: d.user.id })
                .whereIn("m_gelombang_ppdb_id", checkIds1)
                .first();

              //  const pendaftarIds1 = await MPendaftarPpdb.query()
              //     .where({ dihapus: 0 })
              //     .whereIn("m_gelombang_ppdb_id", gelombangIds1)
              //     .andWhere({ m_user_id: d.user.id })
              //     .pluck("m_gelombang_ppdb_id");

              // terdaftarPembelian = await MGelombangPpdb.query()
              //   .with("pendaftar1", (builder) => {
              //     builder.where({ m_user_id: d.user.id });
              //   })
              //   .with("jalur")
              //   .whereIn("id", pendaftarIds1)
              //   .where({ dihapus: 0 })
              //   .fetch();
            }
          }

          let semuaGelombangPengembalian;
          if (sekolah?.id == 14) {
            semuaGelombangPengembalian = await MGelombangPpdb.query()
              .where({ dihapus: 0 })
              .where({
                m_jalur_ppdb_id:
                  gelombangAktif.toJSON().gelombang.m_jalur_ppdb_id,
              })
              .where({ m_ta_id: ta.id })
              .ids();
          }
          // return {semuaGelombangPengembalian,gelombangAktif,checkIds}
          // const nomorPeserta = `${moment().format("YYYY")} - ${
          //   namaGelombang.includes("khusus")
          //     ? "00"
          //     : namaGelombang.includes("reguler 1")
          //     ? "01"
          //     : namaGelombang.includes("reguler 3")
          //     ? "02"
          //     : "03"
          // } - ${padNumber(urutan + 1, `${gelombang.diterima}`.length)}`;

          const nomorPeserta =
            sekolah?.id == 14
              ? `${moment().format("YYYY")} - ${padNumber(
                semuaGelombangPengembalian?.findIndex(
                  (d) => d == gelombangAktif?.gelombang?.id
                ) + 1,
                `2`
              )} ${"-"} ${padNumber(
                gelombangPembelian
                  .toJSON()
                  .gelombang?.pendaftar.findIndex(
                    (d) => d.id == gelombangPembelian?.id
                  ) + 1,
                gelombangPembelian.toJSON().gelombang?.diterima.length
              )}`
              : `${moment().format("YYYY")} - ${sekolah?.id == 13 || sekolah?.id == 121 || sekolah?.id == 14
                ? padNumber(
                  gelombangUser
                    .toJSON()
                    ?.findIndex(
                      (d) => d.id == gelombang?.id
                    ) + 1,
                  `${gelombangUser?.length}`
                )
                : sekolah?.id == 70
                  ? (namaGelombang?.includes("khusus") || namaGelombang?.includes("suluh")
                    ? "00"
                    : namaGelombang?.includes("prestasi")
                      ? "01"
                      : namaGelombang?.includes("reguler 1")
                        ? "02"
                        : namaGelombang?.includes("reguler 3")
                          ? "03"
                          : "04")
                  : (namaGelombang?.includes("khusus")
                    ? "00"
                    : namaGelombang?.includes("reguler 1")
                      ? "01"
                      : namaGelombang?.includes("reguler 3")
                        ? "02"
                        : "03")

              } - ${padNumber(
                gelombang.toJSON()?.pendaftar.findIndex(
                  (r) => r.id == d?.id
                ) + 1, sekolah?.id == 70
                ? 4
                : `${gelombang?.diterima}`.length
              )}
          `;

          const pembayaran = JSON.parse(d?.pembayaran || "[]");
          const totalPembayaran = pembayaran?.reduce(
            (a, b) => a + parseInt(b.nominal),
            0
          );
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
            ref: `B${(idx + 1) * 1 + 5}:BH${(idx + 1) * 1 + 6}`,
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
            "Nama",
            "No Telepon",
            "Gender",
            "Agama",
            "Tanggal lahir",
            "Asal Sekolah",
            "Nomor Peserta",
            "Tanggal Mendaftar",
            "Status",
            "Jurusan 1",
            "Jurusan 2",
            "Jurusan 3",
            "Jurusan 4",
            "Jurusan 5",
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
            "Pembayaran",
            "Sisa",
            "Alamat",
          ];
          worksheet.getRow(6).values = [
            "Nama",
            "No Telepon",
            "Gender",
            "Agama",
            "Tanggal lahir",
            "Asal Sekolah",
            "Nomor Peserta",
            "Tanggal Mendaftar",
            "Status",
            "Jurusan 1",
            "Jurusan 2",
            "Jurusan 3",
            "Jurusan 4",
            "Jurusan 5",
            "Alpa",
            "Izin",
            "sakit",
            "IPA",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "IPA",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "IPA",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "IPA",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "IPA",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Alpa",
            "Izin",
            "sakit",
            "IPA",
            "Matematika",
            "B.Indo",
            "B.Ing",
            "Pembayaran",
            "Sisa",
            "Alamat",
          ];
          worksheet.columns = [
            { key: "nama" },
            { key: "no_telepon" },
            { key: "gender" },
            { key: "agama" },
            { key: "tgllahir" },
            { key: "asalsklh" },
            { key: "nomorPeserta" },
            { key: "tanggal" },
            { key: "status" },
            { key: "jurusan1" },
            { key: "jurusan2" },
            { key: "jurusan3" },
            { key: "jurusan4" },
            { key: "jurusan5" },
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
            { key: "pembayaran" },
            { key: "sisa" },
            { key: "alamat" },
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
          const jurusanData = jurusan.toJSON();

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            nama: d.user ? d.user.nama : "-",
            no_telepon: d.user ? d.user.whatsapp : "-",
            gender: d.user ? d.user.gender : "-",
            agama: d.user ? d.user.agama : "-",
            tgllahir: d?.user?.tanggal_lahir
              ? moment(`${d.user.tanggal_lahir}`).format("DD-MM-YYYY")
              : "-",
            asalsklh: d.user.profil ? d.user.profil.asal_sekolah : "-",
            nomorPeserta: nomorPeserta ? nomorPeserta : "-",
            tanggal: d ? d.created_at : "-",
            status: d ? status.text : "-",
            jurusan1: jurusanData.find((e) => e.id == d.m_jurusan_1_id)
              ? jurusanData.find((e) => e.id == d.m_jurusan_1_id).nama
              : "-",
            jurusan2: jurusanData.find((e) => e.id == d.m_jurusan_2_id)
              ? jurusanData.find((e) => e.id == d.m_jurusan_2_id).nama
              : "-",
            jurusan3: jurusanData.find((e) => e.id == d.m_jurusan_3_id)
              ? jurusanData.find((e) => e.id == d.m_jurusan_3_id).nama
              : "-",
            jurusan4: jurusanData.find((e) => e.id == d.m_jurusan_4_id)
              ? jurusanData.find((e) => e.id == d.m_jurusan_4_id).nama
              : "-",
            jurusan5: jurusanData.find((e) => e.id == d.m_jurusan_5_id)
              ? jurusanData.find((e) => e.id == d.m_jurusan_5_id).nama
              : "-",
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
            pembayaran: totalPembayaran.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            }),
            sisa: `${parseInt(gelombang.toJSON().jalur.biaya) -
              parseInt(totalPembayaran) <
              0
              ? "+"
              : ""
              } ${Math.abs(
                parseInt(gelombang.toJSON().jalur.biaya) -
                parseInt(totalPembayaran)
              ).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}`,
            alamat: d.user.profil ? d.user.profil.alamat : "-",
          });
        })
    );

    worksheet.mergeCells(`A5:A6`);
    worksheet.mergeCells(`B5:B6`);
    worksheet.mergeCells(`C5:C6`);
    worksheet.mergeCells(`D5:D6`);
    worksheet.mergeCells(`E5:E6`);
    worksheet.mergeCells(`F5:F6`);
    worksheet.mergeCells(`G5:G6`);
    worksheet.mergeCells(`H5:H6`);
    worksheet.mergeCells(`I5:I6`);
    worksheet.mergeCells(`J5:J6`);
    worksheet.mergeCells(`K5:K6`);
    worksheet.mergeCells(`L5:L6`);
    worksheet.mergeCells(`M5:M6`);
    worksheet.mergeCells(`N5:N6`);
    worksheet.mergeCells(`O5:O6`);
    worksheet.mergeCells(`P5:V5`);
    worksheet.mergeCells(`W5:AC5`);
    worksheet.mergeCells(`AD5:AJ5`);
    worksheet.mergeCells(`AK5:AQ5`);
    worksheet.mergeCells(`AR5:AX5`);
    worksheet.mergeCells(`AY5:BE5`);
    // worksheet.mergeCells(`BE5:BE6`);
    worksheet.mergeCells(`BF5:BF6`);
    worksheet.mergeCells(`BG5:BG6`);
    worksheet.mergeCells(`BH5:BH6`);
    worksheet.getColumn("A").width = 20;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 20;
    worksheet.getColumn("D").width = 20;
    worksheet.getColumn("E").width = 20;
    worksheet.getColumn("F").width = 20;
    worksheet.getColumn("G").width = 20;
    worksheet.getColumn("H").width = 20;
    worksheet.getColumn("I").width = 20;
    worksheet.getColumn("J").width = 20;
    worksheet.getColumn("K").width = 20;
    worksheet.getColumn("L").width = 20;
    worksheet.getColumn("M").width = 20;
    worksheet.getColumn("N").width = 20;
    worksheet.getColumn("O").width = 20;
    // worksheet.getColumn("BE").width = 20;
    worksheet.getColumn("BF").width = 20;
    worksheet.getColumn("BG").width = 20;
    worksheet.getColumn("BH").width = 20;
    worksheet.autoFilter = {
      from: "A6",
      to: "BH6",
    };

    let namaFile = `/uploads/rekapan-pendaftar-ppdb-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadGelombangPpdbMtsn({
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
    const ta = await this.getTAAktif(sekolah);

    if (!ta) {
      return response.notFound({
        message: "Aktifkan tahun ajaran yg tersedia di menu kurikulum",
      });
    }
    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const gelombang = await MGelombangPpdb.query()
      .with("pendaftar", (builder) => {
        builder
          .with("user", (builder) => {
            builder.with("profil");
          })
          .where({ dihapus: 0 });
      })
      .with("jalur")
      .where({ id: gelombang_ppdb_id })
      .andWhere({ dihapus: 0 })
      .first();

    const jurusan = await MJurusan.query()
      .where({ m_sekolah_id: sekolah.id })
      .where({ dihapus: 0 })
      .fetch();

    // return gelombang;
    const awal = moment(`${gelombang.dibuka}`).format("DD-MM-YYYY ");
    const akhir = moment(`${gelombang.ditutup}`).format("DD-MM-YYYY ");
    // return data;
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Pendaftar`);

    worksheet.mergeCells("A1:Q1");
    worksheet.mergeCells("A2:Q2");
    worksheet.mergeCells("A3:Q3");

    worksheet.getCell(
      "A4"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

    worksheet.addConditionalFormatting({
      ref: "A1:Q3",
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
      ref: "A5:Q6",
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

    const namaGelombang = gelombang.nama.toLowerCase();
    let jalurIds;

    if (sekolah?.id == 14 || sekolah?.id == 13 || sekolah?.id == 121) {
      jalurIds = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .where({ tipe: "Pengembalian" })
        .ids();
    } else {
      jalurIds = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .ids();
    }
    const gelombangIds = await MGelombangPpdb.query()
      .where({ dihapus: 0 })
      .whereIn("m_jalur_ppdb_id", jalurIds)
      .where({ m_ta_id: ta.id })
      .ids();

    const checkIds = await MGelombangPpdb.query()
      .where(
        "dibuka",
        "<=",
        moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
      )
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("id", gelombangIds)
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let gelombangUser;

    if (sekolah?.id == 14 || sekolah?.id == 13 || sekolah?.id == 121) {
      const jalurIds1 = await MJalurPpdb.query()
        .where({ dihapus: 0 })
        .where({ m_sekolah_id: sekolah.id })
        .ids();

      const gelombangIds1 = await MGelombangPpdb.query()
        .where({ dihapus: 0 })
        .whereIn("m_jalur_ppdb_id", jalurIds1)
        .where({ m_ta_id: ta.id })
        .ids();
      gelombangUser = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds1)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    } else {
      gelombangUser = await MGelombangPpdb.query()
        .with("jalur")
        .withCount("pendaftar as jumlahPendaftar", (builder) => {
          builder.where({ dihapus: 0 });
        })
        .where({ m_sekolah_id: sekolah.id })
        .whereIn("id", gelombangIds)
        .andWhere({ m_ta_id: ta.id })
        .andWhere({ dihapus: 0 })
        .fetch();
    }
    const data = await Promise.all(
      gelombang
        .toJSON()
        .pendaftar.sort((a, b) =>
          ("" + a.user.nama).localeCompare("" + b.user.nama)
        )
        .map(async (d, idx) => {
          const urutan = gelombang
            .toJSON()
            .pendaftar.findIndex((e) => e.id == d.id);
          const dataAbsensi = d.user.profil
            ? JSON.parse(d.user.profil.data_absensi || "{}")
            : {};

          let gelombangAktif;

          // let pendaftarIds1;
          // let terdaftarPembelian;
          // let gelombangPembelian;

          gelombangAktif = await MPendaftarPpdb.query()
            .with("gelombang", (builder) => {
              builder.with("pendaftar", (builder) => {
                builder
                  .select("id", "m_gelombang_ppdb_id")
                  .where({ dihapus: 0 });
              });
            })
            .with("diskon")
            .where({ dihapus: 0 })
            // .whereIn("m_gelombang_ppdb_id", gelombangIds)
            .andWhere({ m_user_id: d.user.id })
            .whereIn("m_gelombang_ppdb_id", checkIds)
            .first();

          // let semuaGelombangPengembalian;
          // if (gelombangAktif) {
          //   semuaGelombangPengembalian = await MGelombangPpdb.query()
          //     .where({ dihapus: 0 })
          //     .where({
          //       m_jalur_ppdb_id:
          //         gelombangAktif.toJSON().gelombang.m_jalur_ppdb_id,
          //     })
          //     .where({ m_ta_id: ta.id })
          //     .ids();
          // }
          // return {semuaGelombangPengembalian,gelombangAktif,checkIds}
          // const nomorPeserta = `${moment().format("YYYY")} - ${
          //   namaGelombang.includes("khusus")
          //     ? "00"
          //     : namaGelombang.includes("reguler 1")
          //     ? "01"
          //     : namaGelombang.includes("reguler 3")
          //     ? "02"
          //     : "03"
          // } - ${padNumber(urutan + 1, `${gelombang.diterima}`.length)}`;
          // console.log(
          //   gelombang?.nama,gelombang?.nama?.indexOf("SD") == -1
          // );
          const nomorPeserta =
            sekolah?.id == 9487 || sekolah?.id == 9489
              ? `REG${gelombang?.nama?.indexOf("SD") !== -1 ? "SD" : "MI"
              }${padNumber(
                urutan + 1,
                `${gelombangAktif.toJSON().gelombang?.diterima}`.length
              )}`
              : `${moment().format("YYYY")} - ${sekolah?.id == 13 || sekolah?.id == 121 || sekolah?.id == 14
                ? padNumber(
                  gelombangUser
                    .toJSON()
                    ?.findIndex(
                      (d) => d.id == gelombangAktif.toJSON().gelombang?.id
                    ) + 1,
                  `${gelombangUser?.length}`
                )
                : namaGelombang?.includes("khusus")
                  ? "00"
                  : namaGelombang?.includes("reguler 1")
                    ? "01"
                    : namaGelombang?.includes("reguler 3")
                      ? "02"
                      : "03"
              } - ${padNumber(
                urutan + 1,
                `${gelombangAktif.toJSON().gelombang?.diterima}`.length
              )}
            `;

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
            ref: `B${(idx + 1) * 1 + 5}:Q${(idx + 1) * 1 + 6}`,
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
            "Nama",
            "No Telepon",
            "Gender",
            "Agama",
            "Tanggal lahir",
            "Asal Sekolah",
            "Nomor Peserta",
            "Tanggal Mendaftar",
            "Status",

            "Kelas IV (Ganjil)",
            "Kelas V (Ganjil)",
            "Kelas VI (Ganjil)",
            "Rata-Rata Kumulatif",
            "Link Rapor Kelas IV (Ganjil)",
            "Link Rapor Kelas V (Ganjil)",
            "Link Rapor Kelas VI (Ganjil)",
            "Alamat",
          ];
          worksheet.getRow(6).values = [
            "Nama",
            "No Telepon",
            "Gender",
            "Agama",
            "Tanggal lahir",
            "Asal Sekolah",
            "Nomor Peserta",
            "Tanggal Mendaftar",
            "Status",
            "Kelas IV (Ganjil)",
            "Kelas V (Ganjil)",
            "Kelas VI (Ganjil)",
            "Rata-Rata Kumulatif",
            "Link Rapor Kelas IV (Ganjil)",
            "Link Rapor Kelas V (Ganjil)",
            "Link Rapor Kelas VI (Ganjil)",
            "Alamat",
          ];
          worksheet.columns = [
            { key: "nama" },
            { key: "no_telepon" },
            { key: "gender" },
            { key: "agama" },
            { key: "tgllahir" },
            { key: "asalsklh" },
            { key: "nomorPeserta" },
            { key: "tanggal" },
            { key: "status" },
            { key: "kelasIV" },
            { key: "kelasV" },
            { key: "kelasVI" },
            { key: "rata2" },
            { key: "semesterIV" },
            { key: "semesterV" },
            { key: "semesterVI" },
            { key: "alamat" },
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
          // const status = dataStatus[checkBayar];
          let status = "";
          if (
            d?.status == "menungguKonfirmasiPembayaran" &&
            (sekolah?.id == 9487 || sekolah?.id == 9489)
          ) {
            status = dataStatus["menungguHasilPengumuman"];
          } else if (
            d?.status == "menungguSeleksiBerkas" &&
            (sekolah?.id == 9487 || sekolah?.id == 9489)
          ) {
            status = dataStatus["tidakLulusSeleksi"];
          } else if (sekolah?.id == 9487 || sekolah?.id == 9489) {
            status = dataStatus[d?.status];
          } else {
            status = dataStatus[checkBayar];
          }
          const jurusanData = jurusan.toJSON();

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            nama: d.user ? d.user.nama : "-",
            no_telepon: d.user ? d.user.whatsapp : "-",
            gender: d.user ? d.user.gender : "-",
            agama: d.user ? d.user.agama : "-",
            tgllahir: d?.user?.tanggal_lahir
              ? moment(`${d.user.tanggal_lahir}`).format("DD-MM-YYYY")
              : "-",
            asalsklh: d.user.profil ? d.user.profil.asal_sekolah : "-",
            nomorPeserta: nomorPeserta ? nomorPeserta : "-",
            tanggal: d ? d.created_at : "-",
            status: d ? status.text : "-",

            kelasIV: d?.user?.profil?.semester1,
            kelasV: d?.user?.profil?.semester2,
            kelasVI: d?.user?.profil?.semester3,
            rata2: (
              ((d?.user?.profil?.semester1
                ? parseFloat(d?.user?.profil?.semester1)
                : 0) +
                (d?.user?.profil?.semester2
                  ? parseFloat(d?.user?.profil?.semester2)
                  : 0) +
                (d?.user?.profil?.semester3
                  ? parseFloat(d?.user?.profil?.semester3)
                  : 0)) /
              3
            ).toFixed(2),
            semesterIV: d?.user?.profil?.semester4,
            semesterV: d?.user?.profil?.semester5,
            semesterVI: d?.user?.profil?.semester6,

            alamat: d.user.profil ? d.user.profil.alamat : "-",
          });
        })
    );
    // return data
    worksheet.mergeCells(`A5:A6`);
    worksheet.mergeCells(`B5:B6`);
    worksheet.mergeCells(`C5:C6`);
    worksheet.mergeCells(`D5:D6`);
    worksheet.mergeCells(`E5:E6`);
    worksheet.mergeCells(`F5:F6`);
    worksheet.mergeCells(`G5:G6`);
    worksheet.mergeCells(`H5:H6`);
    worksheet.mergeCells(`I5:I6`);
    worksheet.mergeCells(`J5:J6`);
    worksheet.mergeCells(`K5:K6`);
    worksheet.mergeCells(`L5:L6`);
    worksheet.mergeCells(`M5:M6`);
    worksheet.mergeCells(`N5:N6`);
    worksheet.mergeCells(`O5:O6`);
    worksheet.mergeCells(`P5:P6`);
    worksheet.mergeCells(`Q5:Q6`);
    // worksheet.mergeCells(`P5:V5`);
    // worksheet.mergeCells(`W5:AC5`);
    // worksheet.mergeCells(`AD5:AJ5`);
    // worksheet.mergeCells(`AK5:AQ5`);
    // worksheet.mergeCells(`AR5:AX5`);
    // worksheet.mergeCells(`AY5:BE5`);
    // worksheet.mergeCells(`BE5:BE6`);
    // worksheet.mergeCells(`BF5:BF6`);
    // worksheet.mergeCells(`BG5:BG6`);
    // worksheet.mergeCells(`BH5:BH6`);
    worksheet.getColumn("A").width = 20;
    worksheet.getColumn("B").width = 20;
    worksheet.getColumn("C").width = 20;
    worksheet.getColumn("D").width = 20;
    worksheet.getColumn("E").width = 20;
    worksheet.getColumn("F").width = 20;
    worksheet.getColumn("G").width = 20;
    worksheet.getColumn("H").width = 20;
    worksheet.getColumn("I").width = 20;
    worksheet.getColumn("J").width = 20;
    worksheet.getColumn("K").width = 20;
    worksheet.getColumn("L").width = 20;
    worksheet.getColumn("M").width = 20;
    worksheet.getColumn("N").width = 28;
    worksheet.getColumn("O").width = 28;
    worksheet.getColumn("P").width = 28;
    worksheet.getColumn("Q").width = 28;
    worksheet.getColumn("R").width = 28;
    // worksheet.getColumn("BE").width = 20;
    worksheet.getColumn("BF").width = 20;
    worksheet.getColumn("BG").width = 20;
    worksheet.getColumn("BH").width = 20;
    worksheet.autoFilter = {
      from: "A6",
      to: "Q6",
    };

    let namaFile = `/uploads/rekapan-pendaftar-ppdb-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async putDiskon({ response, request, auth, params: { id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { diskon } = request.post();

    const pendaftar = await MPendaftarPpdb.query()
      .with("gelombang", (builder) => {
        builder.with("jalur");
      })
      .where({ id: id })
      .first();

    const diskonData = await MDiskonPendaftar.query()
      .where({ m_pendaftar_ppdb_id: id })
      .first();

    const harga =
      (pendaftar.toJSON().gelombang.biaya_pendaftaran ||
        pendaftar.toJSON().gelombang.jalur.biaya) -
      ((pendaftar.toJSON().gelombang.biaya_pendaftaran ||
        pendaftar.toJSON().gelombang.jalur.biaya) *
        diskon) /
      100;
    if (diskonData) {
      const datas = await MDiskonPendaftar.query()
        .where({ m_pendaftar_ppdb_id: id })
        .update({ diskon, harga });

      if (!datas) {
        return response.forbidden({
          message: messageForbidden,
        });
      }
    } else {
      await MDiskonPendaftar.create({
        m_pendaftar_ppdb_id: id,
        diskon,
        harga,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }
}

module.exports = PPDBController;

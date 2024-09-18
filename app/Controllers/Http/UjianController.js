"use strict";

const MSekolah = use("App/Models/MSekolah");
const TkPesertaUjian = use("App/Models/TkPesertaUjian");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const MMateri = use("App/Models/MMateri");
const MUjian = use("App/Models/MUjian");
const TkSoalUjian = use("App/Models/TkSoalUjian");
const TkJawabanUjianSiswa = use("App/Models/TkJawabanUjianSiswa");
const TkJadwalUjian = use("App/Models/TkJadwalUjian");
const MJadwalUjian = use("App/Models/MJadwalUjian");
const MSoalUjian = use("App/Models/MSoalUjian");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const MRombel = use("App/Models/MRombel");
const MTemplateKesukaranMapel = use("App/Models/MTemplateKesukaranMapel");
const MPeringatanUjianSiswa = use("App/Models/MPeringatanUjianSiswa");
const fs = require("fs");
const readline = require("readline");
const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();
const FieldValue = firestore.FieldValue();
var striptags = require("striptags");
const Helpers = use("Helpers");
const htmlEscaper = require("html-escaper");
const MRpp = use("App/Models/MRpp");

const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const Excel = require("exceljs");
// reference to
const jadwalUjianReference = db.collection("jadwal-ujian");

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

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
class UjianController {
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

    const { warning } = request.post();

    const pesertaUjian = await TkPesertaUjian.query()
      .where({ id: peserta_ujian_id })
      .update({
        warning,
      });

    if (!pesertaUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const pesertaUjianData = await TkPesertaUjian.query()
      .withCount("jawabanSiswa as totalDijawab", (builder) => {
        builder.where({ dijawab: 1 });
      })
      .where({ id: peserta_ujian_id })
      .first();

    return response.ok({
      doc_id: pesertaUjianData.doc_id,
      tk_jadwal_ujian_id: pesertaUjianData.tk_jadwal_ujian_id,
      user_id: pesertaUjianData.m_user_id,
      warning: warning,
      progress: pesertaUjianData.toJSON().__meta__.totalDijawab,
    });
  }
  async getAnalisisSoal({ response, request, auth }) {
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

    let { m_ta_id = ta.id } = request.get();

    let mataPelajaranIds;
    if (user?.role == "guru") {
      mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_sekolah_id: sekolah.id })
        .andWhere({ m_user_id: user.id })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_ta_id: m_ta_id })
        .ids();
    } else {
      mataPelajaranIds = await MMataPelajaran.query()
        .where({ m_sekolah_id: sekolah.id })

        .andWhere({ dihapus: 0 })
        .andWhere({ m_ta_id: m_ta_id })
        .ids();
    }

    const semuaTA = await Mta.query()
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .orderBy("id", "desc")
      .fetch();

    const materi = await MMateri.query()
      .with("mataPelajaran")
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .where({ dihapus: 0 })
      .fetch();

    let data = [];

    await Promise.all(
      materi.toJSON().map(async (d) => {
        const Ujian = await MUjian.query()
          .where({ m_mata_pelajaran_id: d.m_mata_pelajaran_id })
          .andWhere({ tingkat: d.tingkat })
          .andWhere({ dihapus: 0 })
          .ids();

        const totalSoal = await TkSoalUjian.query()
          .whereIn("m_ujian_id", Ujian)
          .andWhere({ dihapus: 0 })
          .getCount();

        data.push({
          id: d.id,
          nama: d.mataPelajaran.nama,
          tingkat: d.tingkat,
          totalSoal: totalSoal,
          kelompok: d.mataPelajaran.kelompok,
        });
      })
    );

    // return data;

    // const materiLainnya = await MMateri.query()
    //   .with("user")
    //   .with("sekolah")
    //   .withCount("bab", (builder) => {
    //     builder.where({ dihapus: 0 });
    //   })
    //   .where({ m_sekolah_id: sekolah.id })
    //   .andWhere({ dihapus: 0 })
    //   .fetch();

    return response.ok({
      // materi,
      data,
      semuaTA,
      // materiLainnya,
    });
  }
  async detailAnalisisSoal({ response, request, auth, params: { materi_id } }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { m_ujian_id, tipe_soal, search, kesukaran } = request.get();
    const materi = await MMateri.query()
      .with("mataPelajaran")
      .where({ id: materi_id })
      .first();
    const check = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: materi_id })
      .andWhere({ dihapus: 0 })
      .first();

    if (!check) {
      await MTemplateKesukaranMapel.create({
        judul: `Sangat Mudah`,
        batas_bawah: `0.9`,
        batas_atas: `1`,
        dihapus: 0,
        m_materi_id: materi_id,
      });
      await MTemplateKesukaranMapel.create({
        judul: `Mudah`,
        batas_bawah: `0.7`,
        batas_atas: `0.89`,
        dihapus: 0,
        m_materi_id: materi_id,
      });
      await MTemplateKesukaranMapel.create({
        judul: `Sedang`,
        batas_bawah: `0.5`,
        batas_atas: `0.69`,
        dihapus: 0,
        m_materi_id: materi_id,
      });
      await MTemplateKesukaranMapel.create({
        judul: `Sukar`,
        batas_bawah: `0.3`,
        batas_atas: `0.49`,
        dihapus: 0,
        m_materi_id: materi_id,
      });
      await MTemplateKesukaranMapel.create({
        judul: `Sangat Sukar`,
        batas_bawah: `0`,
        batas_atas: `0.29`,
        dihapus: 0,
        m_materi_id: materi_id,
      });
    }

    let ujianIds;
    ujianIds = MUjian.query()
      .where({ m_mata_pelajaran_id: materi.m_mata_pelajaran_id })
      .andWhere({ tingkat: materi.tingkat })
      .andWhere({ dihapus: 0 });

    if (m_ujian_id) {
      ujianIds.andWhere({ id: m_ujian_id });
    }
    ujianIds = await ujianIds.ids();

    const jumlahBankSoal = await MUjian.query()
      .where({ m_mata_pelajaran_id: materi.m_mata_pelajaran_id })
      .andWhere({ tingkat: materi.tingkat })
      .andWhere({ dihapus: 0 })
      .getCount();

    const bankSoalData = await MUjian.query()
      .select("id", "nama")
      .where({ m_mata_pelajaran_id: materi.m_mata_pelajaran_id })
      .andWhere({ tingkat: materi.tingkat })
      .andWhere({ dihapus: 0 })
      .fetch();

    const soalUjianIds = await TkSoalUjian.query()
      .with("soal", (builder) => {
        builder
          .with("jawabanSemuaSiswa")
          .withCount("jawabanSemuaSiswa as totalSiswa");
        if (search) {
          builder.where("pertanyaan", "like", `%${search}%`);
        }
      })
      .with("ujian")
      .whereIn("m_ujian_id", ujianIds)
      .andWhere({ dihapus: 0 })
      .fetch();

    // return soalUjianIds;

    let jumlahSoalPg = 0;
    let jumlahSoalEsai = 0;
    let jumlahSoalPgKompleks = 0;
    let jumlahSoalUraian = 0;
    let jumlahSoalMenjodohkan = 0;

    const template = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: materi_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let dataSoal = [];

    await Promise.all(
      soalUjianIds.toJSON().map(async (d) => {
        if (!d.soal) {
          return;
        }
        let bentuk;
        let bentuk_soal;
        let jumlahTotal = 0;
        if (d.soal.bentuk.toLowerCase().trim() == "pg") {
          jumlahSoalPg = jumlahSoalPg + 1;
          bentuk = "Pilihan Ganda";
          bentuk_soal = "pg";
          await Promise.all(
            d.soal.jawabanSemuaSiswa.map(async (c) => {
              if (c.jawaban_pg == d.soal.kj_pg) {
                jumlahTotal = jumlahTotal + 1;
              }
            })
          );
        } else if (d.soal.bentuk.toLowerCase().trim() == "esai") {
          jumlahSoalEsai = jumlahSoalEsai + 1;
          bentuk = "Esai";
          bentuk_soal = "esai";
          await Promise.all(
            d.soal.jawabanSemuaSiswa.map(async (c) => {
              if (JSON.parse(c.jawaban_rubrik_esai)) {
                if (JSON.parse(c.jawaban_rubrik_esai).length) {
                  JSON.parse(c.jawaban_rubrik_esai).map((e) => {
                    if (e.benar) {
                      jumlahTotal = jumlahTotal + 1;
                    }
                  });

                  if (c.jawaban_rubrik_esai.indexOf("true") != -1) {
                    jumlahTotal = jumlahTotal + 1;
                  }
                }
              }
            })
          );
        } else if (d.soal.bentuk.toLowerCase().trim() == "pg_kompleks") {
          jumlahSoalPgKompleks = jumlahSoalPgKompleks + 1;
          bentuk = "Pilihan Ganda Kompleks";
          bentuk_soal = "pg_kompleks";
        } else if (d.soal.bentuk.toLowerCase().trim() == "uraian") {
          jumlahSoalUraian = jumlahSoalUraian + 1;
          bentuk = "Uraian";
          bentuk_soal = "uraian";
        } else if (d.soal.bentuk.toLowerCase().trim() == "menjodohkan") {
          jumlahSoalMenjodohkan = jumlahSoalMenjodohkan + 1;
          bentuk = "Menjodohkan";
          bentuk_soal = "menjodohkan";
        }
        let hitung;
        let warna;
        if (d.soal.__meta__.totalSiswa) {
          hitung = jumlahTotal / d.soal.__meta__.totalSiswa;
          await Promise.all(
            template.toJSON().map(async (e) => {
              if (hitung >= e.batas_bawah && hitung <= e.batas_atas) {
                if (hitung < 0.5) {
                  warna = "label-light-danger-ss";
                } else if (hitung >= 0.5 && hitung < 0.7) {
                  warna = "label-light-warning-ss";
                } else if (hitung > 0.7) {
                  warna = "label-light-success-ss";
                }
                hitung = e.judul;
              }
            })
          );
        } else {
          hitung = null;
        }
        return dataSoal.push({
          id: d.soal.id,
          nama_bank: d.ujian.nama,
          soal: d.soal.pertanyaan,
          jumlahSiswa: jumlahTotal,
          jumlahSiswaBenar: d.soal.__meta__.totalSiswa,
          jumlahSiswaSalah: jumlahTotal - d.soal.__meta__.totalSiswa,
          bentuk: bentuk,
          bentuk_soal: bentuk_soal,
          kesukaran: hitung,
          warna: warna,
        });
      })
    );
    if (tipe_soal) {
      dataSoal = dataSoal.filter((d) => {
        if (d.bentuk_soal == tipe_soal) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (kesukaran) {
      dataSoal = dataSoal.filter((d) => {
        if (d.kesukaran == kesukaran) {
          return true;
        } else {
          return false;
        }
      });
      // return coba
    }
    // return kesukaran

    let bentukSoal = [];

    bentukSoal = [
      { value: "", label: "Semua" },
      { value: "pg", label: "Pilihan Ganda" },
      { value: "pg_kompleks", label: "Pilihan Ganda Kompleks" },
      { value: "esai", label: "Isian" },
      { value: "uraian", label: "Uraian" },
      { value: "menjodohkan", label: "Menjodohkan" },
    ];

    return response.ok({
      // ujian: { ...ujian.toJSON(), soalUjian: filterUjian },
      dataSoal,
      bentukSoal,
      jumlahSoalPg: jumlahSoalPg,
      jumlahSoalEsai: jumlahSoalEsai,
      jumlahSoalPgKompleks,
      jumlahSoalUraian,
      jumlahSoalMenjodohkan,
      jumlahBankSoal,
      template,
      materi,
      bankSoalData,
    });
  }

  async downloadAnalisisButirSoal({
    response,
    request,
    auth,
    params: { materi_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const materi = await MMateri.query().where({ id: materi_id }).first();

    const mapel = await MMataPelajaran.query()
      .with("ta")
      .where({ id: materi.m_mata_pelajaran_id })
      .first();

    const ujianIds = await MUjian.query()
      .where({ m_mata_pelajaran_id: materi.m_mata_pelajaran_id })
      .andWhere({ tingkat: materi.tingkat })
      .andWhere({ dihapus: 0 })
      .ids();

    const jumlahBankSoal = await MUjian.query()
      .where({ m_mata_pelajaran_id: materi.m_mata_pelajaran_id })
      .andWhere({ tingkat: materi.tingkat })
      .andWhere({ dihapus: 0 })
      .getCount();

    const soalUjianIds = await TkSoalUjian.query()
      .with("soal", (builder) => {
        builder
          .withCount("jawabanSemuaSiswa as totalSiswa")
          .with("jawabanSemuaSiswa");
      })
      .with("ujian")
      .whereIn("m_ujian_id", ujianIds)
      .andWhere({ dihapus: 0 })
      .fetch();

    const template = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: materi_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    let jumlahSoalPg = 0;
    let jumlahSoalEsai = 0;
    let jumlahSoalPgKompleks = 0;
    let jumlahSoalUraian = 0;
    let jumlahSoalMenjodohkan = 0;

    // const template = await MTemplateKesukaranMapel.query()
    //   .where({ m_materi_id: materi_id })
    //   .andWhere({ dihapus: 0 })
    //   .fetch();

    let dataSoal = [];

    await Promise.all(
      soalUjianIds.toJSON().map(async (d) => {
        if (!d.soal) {
          return;
        }
        let bentuk;
        let bentuk_soal;
        let jumlahTotal = 0;
        if (d.soal.bentuk.toLowerCase().trim() == "pg") {
          jumlahSoalPg = jumlahSoalPg + 1;
          bentuk = "Pilihan Ganda";
          bentuk_soal = "pg";
          await Promise.all(
            d.soal.jawabanSemuaSiswa.map(async (c) => {
              if (c.jawaban_pg == d.soal.kj_pg) {
                jumlahTotal = jumlahTotal + 1;
              }
            })
          );
        } else if (d.soal.bentuk.toLowerCase().trim() == "esai") {
          jumlahSoalEsai = jumlahSoalEsai + 1;
          bentuk = "Esai";
          bentuk_soal = "esai";
          await Promise.all(
            d.soal.jawabanSemuaSiswa.map(async (c) => {
              if (JSON.parse(c.jawaban_rubrik_esai)) {
                if (JSON.parse(c.jawaban_rubrik_esai).length) {
                  JSON.parse(c.jawaban_rubrik_esai).map((e) => {
                    if (e.benar) {
                      jumlahTotal = jumlahTotal + 1;
                    }
                  });

                  if (c.jawaban_rubrik_esai.indexOf("true") != -1) {
                    jumlahTotal = jumlahTotal + 1;
                  }
                }
              }
            })
          );
        } else if (d.soal.bentuk.toLowerCase().trim() == "pg_kompleks") {
          jumlahSoalPgKompleks = jumlahSoalPgKompleks + 1;
          bentuk = "Pilihan Ganda Kompleks";
          bentuk_soal = "pg_kompleks";
        } else if (d.soal.bentuk.toLowerCase().trim() == "uraian") {
          jumlahSoalUraian = jumlahSoalUraian + 1;
          bentuk = "Uraian";
          bentuk_soal = "uraian";
        } else if (d.soal.bentuk.toLowerCase().trim() == "menjodohkan") {
          jumlahSoalMenjodohkan = jumlahSoalMenjodohkan + 1;
          bentuk = "Menjodohkan";
          bentuk_soal = "menjodohkan";
        }

        let hitung;
        if (d.soal.__meta__.totalSiswa) {
          hitung = jumlahTotal / d.soal.__meta__.totalSiswa;
          await Promise.all(
            template.toJSON().map(async (e) => {
              if (hitung >= e.batas_bawah && hitung <= e.batas_atas) {
                hitung = e.judul;
              }
            })
          );
        } else {
          hitung = `-`;
        }
        return dataSoal.push({
          id: d.soal.id,
          nama_bank: d.ujian.nama,
          soal: d.soal.pertanyaan,
          bentuk: bentuk,
          bentuk_soal: bentuk_soal,
          kesukaran: hitung,
          // data: d,
        });
      })
    );

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Analisis Soal`);
    worksheet.mergeCells("A1:E1");
    worksheet.mergeCells("A2:E2");
    worksheet.mergeCells("A3:E3");
    worksheet.mergeCells("A4:E4");
    worksheet.getCell(
      "A5"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
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
      ref: "A6:F6",
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
    worksheet.addConditionalFormatting({
      ref: "A7:F7",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Times New Roman",
              family: 4,
              size: 12,
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
      dataSoal.map(async (d, idx) => {
        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 9}:E${(idx + 1) * 1 + 9}`,
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
          ref: `A${(idx + 1) * 1 + 9}`,
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
        worksheet.getRow(9).values = [
          "No",
          "Soal",
          "Bank Soal",
          "Tipe Soal",
          "Kesukaran",
        ];
        worksheet.columns = [
          { key: "no" },
          { key: "soal" },
          { key: "bank_soal" },
          { key: "tipe_soal" },
          { key: "kesukaran" },
        ];

        // Add row using key mapping to columns
        let row = worksheet.addRow({
          no: `${idx + 1}`,
          soal: d ? d.soal : "-",
          bank_soal: d ? d.nama_bank : "-",
          tipe_soal: d ? d.bentuk : "-",
          kesukaran: d ? d.kesukaran : "-",
        });
      })
    );
    worksheet.getCell("A1").value = "Analisis Butir Soal";
    worksheet.getCell("A2").value = `${mapel.nama} Kelas ${materi.tingkat}`;
    worksheet.getCell("A3").value = sekolah.nama;
    worksheet.getCell("A4").value = `${mapel.toJSON().ta.tahun} - ${
      mapel.toJSON().ta.semester
    }`;
    worksheet.getColumn("C").width = 14;
    worksheet.getColumn("D").width = 14;
    worksheet.getColumn("E").width = 14;
    worksheet.getColumn("F").width = 11;
    worksheet.getCell("A6").value = `PG`;
    worksheet.getCell("B6").value = `Uraian`;
    worksheet.getCell("C6").value = `Isian`;
    worksheet.getCell("D6").value = `PG Kompleks`;
    worksheet.getCell("E6").value = `Menjodohkan`;
    worksheet.getCell("F6").value = `Bank Soal`;
    worksheet.getCell("A7").value = jumlahSoalPg;
    worksheet.getCell("B7").value = jumlahSoalUraian;
    worksheet.getCell("C7").value = jumlahSoalEsai;
    worksheet.getCell("D7").value = jumlahSoalPgKompleks;
    worksheet.getCell("E7").value = jumlahSoalMenjodohkan;
    worksheet.getCell("F7").value = jumlahBankSoal;
    worksheet.addConditionalFormatting({
      ref: "A9:E9",
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
    let namaFile = `/uploads/Rekap-Analisis-Butir-Soal-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async postTemplateKesukaran({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tipe, judul, batas_bawah, batas_atas, m_materi_id } =
      request.post();
    const checkBatasBawah = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: m_materi_id })
      .where({ dihapus: 0 })
      .where("batas_bawah", "<=", batas_bawah)
      .where("batas_atas", ">=", batas_bawah)
      .first();

    const checkBatasAtas = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: m_materi_id })
      .where({ dihapus: 0 })
      .where("batas_bawah", "<=", batas_atas)
      .where("batas_atas", ">=", batas_atas)
      .first();

    const checkRange1 = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: m_materi_id })
      .where({ dihapus: 0 })
      .where("batas_bawah", "<=", batas_atas)
      .where("batas_bawah", ">=", batas_bawah)
      .first();
    const checkRange2 = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id: m_materi_id })
      .where({ dihapus: 0 })
      .where("batas_atas", "<=", batas_atas)
      .where("batas_atas", ">=", batas_bawah)
      .first();
    if (checkBatasBawah) {
      return response.expectationFailed({
        message: `Batas Bawah berada dalam jangkauan Tingkat kesukaran ${checkBatasBawah.judul}`,
      });
    }
    if (checkBatasAtas) {
      return response.expectationFailed({
        message: `Batas Atas berada dalam jangkauan Tingkat kesukaran ${checkBatasAtas.judul}`,
      });
    }
    if (checkRange1 || checkRange2) {
      return response.expectationFailed({
        message: `Batas nilai bergesekan dengan ${
          (checkRange1 || checkRange2).judul
        }`,
      });
    }

    const barang = await MTemplateKesukaranMapel.create({
      tipe,
      judul,
      batas_bawah,
      batas_atas,
      dihapus: 0,
      m_materi_id,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putTemplateKesukaran({
    response,
    request,
    auth,
    params: { template_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { tipe, judul, batas_bawah, batas_atas, m_materi_id } =
      request.post();
    const checkBatasBawah = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id })
      .where({ dihapus: 0 })
      .where("batas_bawah", "<=", batas_bawah)
      .where("batas_atas", ">=", batas_bawah)
      .whereNot("id", template_id)
      .first();

    const checkBatasAtas = await MTemplateKesukaranMapel.query()
      .where({ m_materi_id })
      .where({ dihapus: 0 })
      .where("batas_bawah", "<=", batas_atas)
      .where("batas_atas", ">=", batas_atas)
      .whereNot("id", template_id)
      .first();
    if (checkBatasBawah) {
      return response.expectationFailed({
        message: `Tanggal awal berada dalam jangkauan rencana ${checkBatasBawah.nama}`,
      });
    }
    if (checkBatasAtas) {
      return response.expectationFailed({
        message: `Tanggal akhir berada dalam jangkauan rencana ${checkBatasAtas.nama}`,
      });
    }

    const template = await MTemplateKesukaranMapel.query()
      .where({ id: template_id })
      .update({
        tipe,
        judul,
        batas_bawah,
        batas_atas,
        dihapus: 0,
        m_materi_id,
      });

    if (!template) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async deleteTemplateKesukaran({
    response,
    request,
    auth,
    params: { template_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();
    if (
      (user.role != "admin" && user.role != "guru") ||
      user.m_sekolah_id != sekolah.id
    ) {
      return response.forbidden({ message: messageForbidden });
    }

    const template = await MTemplateKesukaranMapel.query()
      .where({ id: template_id })
      .update({
        dihapus: 1,
      });

    if (!template) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  // async otomatisUtamaToTk({
  //   response,
  //   request,
  //   auth,
  // }) {
  //   const ujian = await MUjian.query().where({dihapus: 0}).where("created_at",">","2022-03-01").fetch()

  //   return ujian;

  //   await Promise.all(
  //     ujian.toJSON().map((d)=>{
  //       const tkSoal = await TkSoalUjian.query().where({dihapus:0}).andWhere({m_ujian_id:d.id}).fetch()

  //       await Promise.all(
  //         tkSoal.toJSON().map((e)=>{
  //           const soal = await MSoalUjian.query().where({id:e.m_soal_ujian_id}).first()

  //           await TkSoalUjian.query().where({id:e.id}).update({bentuk: soal.bentuk})
  //         })
  //       )
  //     })
  //   )

  // }

  async postPeringatanUjian({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { jenis, deskripsi, tk_peserta_ujian_id, tk_jadwal_ujian_id } =
      request.post();

    // const rules = {
    //   // jenis: "required",
    //   deskripsi: "required",
    // };
    // const message = {
    //   // "jenis.required": "Jenis harus diisi",
    //   "deskripsi.required": "Deskripsi harus diisi",
    // };
    // const validation = await validate(request.all(), rules, message);
    // if (validation.fails()) {
    //   return response.unprocessableEntity(validation.messages());
    // }

    const peringatan = await MPeringatanUjianSiswa.create({
      jenis,
      deskripsi,
      tk_peserta_ujian_id,
      m_user_id: user.id,
      tk_jadwal_ujian_id,
      dihapus: 0,
      dibaca: 0,
      dibaca_guru: 0,
    });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putPeringatanUjian({
    response,
    request,
    auth,
    params: { peringatan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { deskripsi } = request.post();

    const rules = {
      deskripsi: "required",
    };
    const message = {
      "deskripsi.required": "Deskripsi harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const peringatan = await MPeringatanUjianSiswa.query()
      .where({ id: peringatan_id })
      .update({
        deskripsi,
      });

    if (!peringatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async postJawabanPeringatanUjian({
    response,
    request,
    auth,
    params: { peringatan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { jawaban } = request.post();

    const rules = {
      // jenis: "required",
      jawaban: "required",
    };
    const message = {
      // "jenis.required": "Jenis harus diisi",
      "jawaban.required": "Jawaban harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }

    const peringatan = await MPeringatanUjianSiswa.query()
      .where({ id: peringatan_id })
      .update({
        jawaban,
        dibaca: 1,
      });

    return response.ok({
      message: messagePostSuccess,
    });
  }

  async putJawabanPeringatanUjian({
    response,
    request,
    auth,
    params: { peringatan_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    let { jawaban } = request.post();

    const rules = {
      jawaban: "required",
    };
    // const message = {
    //     "jawaban.required": "Jawaban harus diisi",
    //   };
    //   const validation = await validate(request.all(), rules, message);
    //   if (validation.fails()) {
    //     return response.unprocessableEntity(validation.messages());
    //   }

    const peringatan = await MPeringatanUjianSiswa.query()
      .where({ id: peringatan_id })
      .update({
        jawaban,
        dibaca_guru: 0,
        dibaca: 1,
      });

    if (!peringatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messagePutSuccess,
    });
  }

  async processLineByLine(fileText) {
    const fileStream = fs.createReadStream(fileText);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let content = [];

    for await (const line of rl) {
      content.push(line);
    }

    return content;
  }

  async readingWordForExam({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const fileUpload = request.file("file");

    const user = await auth.getUser();

    const {
      m_ujian_id,
      total_nilai_pg,
      total_nilai_esai,
      total_nilai_pg_kompleks,
    } = request.post();
    // const fname = `doc`;

    const tes = await fileUpload.move(Helpers.publicPath("uploads/"), {
      name: fileUpload?.clientName,
      overwrite: true,
    });

    if (!fileUpload.moved()) {
      return fileUpload.error();
    }
    try {
      const content = await this.processLineByLine(
        Helpers.publicPath(`uploads/${fileUpload?.clientName}`)
      );
      let pattern = /\t/;

      // let totalPG = 0;
      // let totalEsai = 0;
      // const data2 = await Promise.all(
      //   content.map((d) => {
      //     if (d.split(pattern)[0].includes("ESS")) {
      //       totalEsai = totalEsai + 1;
      //       return d.split(pattern);
      //     } else {
      //       totalPG = totalPG + 1;
      //       return d.split(pattern);
      //     }
      //   })
      // );

      // ini cara dapetin semua soal
      // return (content);

      // ini cara dapetin per soal
      // const data = await Promise.all(content.map(async(d)=>{

      //   return datas
      // }))
      // const nilaiPerSoalPg = (total_nilai_pg / totalPG).toFixed(2);
      // const nilaiPerSoalEsai = (total_nilai_esai / totalEsai).toFixed(2);
      // return nilaiPerSoal

      let totalSoalTambah = 0;
      for (let i = 0; i < content.length; i++) {
        const d = content[i].split(pattern).splice(1);
        if (content[i].split(pattern)[0].includes("ESS")) {
          const soalUjian = await MSoalUjian.create({
            bentuk: "esai",
            pertanyaan: d[0] ? htmlEscaper.escape(d[0]) : "",
            nilai_soal: total_nilai_esai,
            // kj_pg,
            m_user_id: user.id,
            dihapus: 0,
          });

          const tkSoalUjian = await TkSoalUjian.create({
            dihapus: 0,
            m_ujian_id: m_ujian_id,
            m_soal_ujian_id: soalUjian.id,
          });

          totalSoalTambah = totalSoalTambah + 1;
        } else if (content[i].split(pattern)[0].includes("MA")) {
          // const result = await Promise.all(
          //   data.map(async (d) => {

          let jawaban_pg_kompleks = [];

          if (d[2] == "Correct") {
            jawaban_pg_kompleks.push("A");
          }

          if (d[4] == "Correct") {
            jawaban_pg_kompleks.push("B");
          }

          if (d[6] == "Correct") {
            jawaban_pg_kompleks.push("C");
          }

          if (d[8] == "Correct") {
            jawaban_pg_kompleks.push("D");
          }

          if (d[10] == "Correct") {
            jawaban_pg_kompleks.push("E");
          }

          const soalUjian = await MSoalUjian.create({
            bentuk: "pg_kompleks",
            pertanyaan: d[0] ? htmlEscaper.escape(d[0]) : "",
            jawaban_a: d[1] ? htmlEscaper.escape(d[1]) : null,
            jawaban_b: d[3] ? htmlEscaper.escape(d[3]) : null,
            jawaban_c: d[5] ? htmlEscaper.escape(d[5]) : null,
            jawaban_d: d[7] ? htmlEscaper.escape(d[7]) : null,
            jawaban_e: d[9] ? htmlEscaper.escape(d[9]) : null,
            nilai_soal: total_nilai_pg_kompleks,
            m_user_id: user.id,
            dihapus: 0,
            jawaban_pg_kompleks: jawaban_pg_kompleks.toString(),
          });

          const tkSoalUjian = await TkSoalUjian.create({
            dihapus: 0,
            m_ujian_id: m_ujian_id,
            m_soal_ujian_id: soalUjian.id,
          });
          // await Promise.all(
          //   d
          //     .split(pattern)
          //     .splice(1)
          //     .map(async (s) => {

          //     })
          // );

          totalSoalTambah = totalSoalTambah + 1;
          //   })
          // );
        } else {
          // const result = await Promise.all(
          //   data.map(async (d) => {

          let kj_pg;

          if (d[2] == "Correct") {
            kj_pg = "A";
          }

          if (d[4] == "Correct") {
            kj_pg = "B";
          }

          if (d[6] == "Correct") {
            kj_pg = "C";
          }

          if (d[8] == "Correct") {
            kj_pg = "D";
          }

          if (d[10] == "Correct") {
            kj_pg = "E";
          }

          const soalUjian = await MSoalUjian.create({
            bentuk: "pg",
            pertanyaan: d[0] ? htmlEscaper.escape(d[0]) : "",
            jawaban_a: d[1] ? htmlEscaper.escape(d[1]) : null,
            jawaban_b: d[3] ? htmlEscaper.escape(d[3]) : null,
            jawaban_c: d[5] ? htmlEscaper.escape(d[5]) : null,
            jawaban_d: d[7] ? htmlEscaper.escape(d[7]) : null,
            jawaban_e: d[9] ? htmlEscaper.escape(d[9]) : null,
            nilai_soal: total_nilai_pg,
            kj_pg,
            m_user_id: user.id,
            dihapus: 0,
          });

          const tkSoalUjian = await TkSoalUjian.create({
            dihapus: 0,
            m_ujian_id: m_ujian_id,
            m_soal_ujian_id: soalUjian.id,
          });
          // await Promise.all(
          //   d
          //     .split(pattern)
          //     .splice(1)
          //     .map(async (s) => {

          //     })
          // );

          totalSoalTambah = totalSoalTambah + 1;
          //   })
          // );
        }
      }

      // return datas;
      const checkTotal = await MRpp.query()
        .where({ m_ujian_id: m_ujian_id })
        .first();

      if (checkTotal) {
        await MRpp.query()
          .where({ m_ujian_id: m_ujian_id })
          .update({
            soal: checkTotal.soal + totalSoalTambah,
          });
      }
      return response.ok({ message: messagePostSuccess });
    } catch (err) {
      console.log(err);
    }
  }

  async postDibacaPeringatanUjianGuru({
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

    const peringatan = await MPeringatanUjianSiswa.query()
      .where({ tk_peserta_ujian_id: peserta_ujian_id })
      .update({
        dibaca_guru: 1,
      });

    return response.ok({
      message: "Sudah dibaca",
    });
  }

  async postDibacaPeringatanUjian({
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

    const peringatan = await MPeringatanUjianSiswa.query()
      .where({ tk_peserta_ujian_id: peserta_ujian_id })
      .update({
        dibaca: 1,
      });

    return response.ok({
      message: "Sudah dibaca",
    });
  }

  async deletePeringatanUjian({
    response,
    request,
    auth,
    params: { peringatan_id },
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
    const peringatan = await MPeringatanUjianSiswa.query()
      .where({ id: peringatan_id })
      .update({
        dihapus: 1,
      });

    if (!peringatan) {
      return response.notFound({
        message: messageNotFound,
      });
    }

    return response.ok({
      message: messageDeleteSuccess,
    });
  }

  async detailNilaiPg({
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

    const pesertaUjian = await TkPesertaUjian.query()
      .with("jadwalUjian", (builder) => {
        builder.with("jadwalUjian", (builder) => {
          builder.with("ujian", (builder) => {
            builder.with("soalUjian", (builder) => {
              builder
                .where({ dihapus: 0 })
                .select("id", "m_ujian_id", "m_soal_ujian_id");
            });
          });
        });
      })
      .with("jawabanSiswa", (builder) => {
        builder.with("soal");
      })
      .with("user")
      .with("peringatan")
      .where({ id: peserta_ujian_id })
      .andWhere({ m_user_id: user.id })
      .first();

    let metaHasil = {
      nilaiPg: 0,
      nilaiPgKompleks: 0,
      nilaiMenjodohkan: 0,
      benar: 0,
      salah: 0,
      jumlahSoal: pesertaUjian?.toJSON()?.jadwalUjian?.jadwalUjian?.jumlah_pg,
    };

    await Promise.all(
      pesertaUjian.toJSON().jawabanSiswa.map(async (d) => {
        if (d.soal.bentuk == "pg") {
          if (d.jawaban_pg == d.soal.kj_pg) {
            metaHasil.nilaiPg = metaHasil.nilaiPg + d.soal.nilai_soal;
            metaHasil.benar = metaHasil.benar + 1;
          } else {
            metaHasil.salah = metaHasil.salah + 1;
          }
        } else if (d.soal.bentuk == "pg_kompleks") {
          const jawabanKjKompleks = d.soal.jawaban_pg_kompleks.split(",");
          const check1 = jawabanKjKompleks.every((e) =>
            d.jawaban_pg_kompleks.includes(e)
          );
          const check2 = d.jawaban_pg_kompleks.every((e) =>
            d.soal.jawaban_pg_kompleks.includes(e)
          );
          if (check1 && check2) {
            metaHasil.nilaiPgKompleks =
              metaHasil.nilaiPgKompleks + d.soal.nilai_soal;
            metaHasil.benar = metaHasil.benar + 1;
          }
        } else if (d.soal.bentuk == "menjodohkan") {
          // const jawabanKjMenjodohkan = d.soal.jawaban_pg_kompleks.split(",")
          // const check1 = jawabanKjKompleks.every(e=> d.jawaban_pg_kompleks.includes(e))
          // const check2 = d.jawaban_menjodohkan.every(e => d.soal.jawaban_pg_kompleks.includes(e))
          if (d.jawaban_menjodohkan) {
            if (d.jawaban_menjodohkan.length) {
              d.jawaban_menjodohkan.map((e, id) => {
                // metaHasil.nilaiMenjodohkan = metaHasil.nilaiMenjodohkan+','+ id ;
                const check1 = d.soal.soal_menjodohkan.find(
                  (r) => id + 1 == r.id
                );
                if (check1) {
                  if (check1.jawaban == e - 1) {
                    metaHasil.nilaiMenjodohkan =
                      metaHasil.nilaiMenjodohkan + parseInt(check1.poin);
                  }
                }
              });

              // if (d.jawaban_rubrik_esai.indexOf("true") != -1) {
              //   metaHasil.benar = metaHasil.benar + 1;
              // }
            }
          }
        }
      })
    );

    return response.ok({
      peserta_ujian: pesertaUjian,
      metaHasil,
    });
  }
  async downloadAnalisisHasilUjian({
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

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalUjian = await MJadwalUjian.query()
      .with("rombelUjian", (builder) => {
        builder
          .with("peserta", (builder) => {
            builder.with("user"),
              (builder) => {
                builder.select("id", "nama");
              };
          })
          .with("rombel")
          .with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
      })
      .with("ujian", (builder) => {
        builder.with("soal").withCount("soal as total");
      })
      .where({ id: jadwal_ujian_id })
      .first();

    // return jadwalUjian.toJSON().ujian.__meta__.total;

    let workbook = new Excel.Workbook();
    await Promise.all(
      jadwalUjian.toJSON().rombelUjian.map(async (s) => {
        let worksheet = workbook.addWorksheet(`${s.rombel.nama}`);
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
        worksheet.mergeCells(`A1:Z1`);
        worksheet.mergeCells(`A2:Z2`);
        worksheet.mergeCells(`A3:Z3`);
        worksheet.mergeCells(`A4:Z4`);
        worksheet.mergeCells(`A6:Z6`);
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
          ref: "A1:I4",
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
          s.peserta
            .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
            .map(async (d, idx) => {
              worksheet.getRow(7).values = ["No", "Nama"];
              worksheet.columns = [{ key: "no" }, { key: "user" }];
              let row = worksheet.addRow({
                no: `${idx + 1}`,
                user: d.user ? d.user.nama : "-",
              });
              let hasil = 0;
              // const row = worksheet.getRow(8);
              await Promise.all(
                jadwalUjian.toJSON().ujian.soal.map(async (e, nox) => {
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${nox + 1}`,
                    ,
                  ];
                  const jawabanSiswa = await TkJawabanUjianSiswa.query()
                    .where({ m_soal_ujian_id: e.id })
                    .andWhere({ tk_peserta_ujian_id: d.id })
                    .first();
                  if (e.bentuk == "pg") {
                    if (
                      jawabanSiswa ? jawabanSiswa.jawaban_pg : "0" == e.kj_pg
                    ) {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                        e ? e.nilai_soal : "-"
                      }`;
                      hasil = hasil + e.nilai_soal;
                    } else {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `0`;
                    }
                  } else if (e.bentuk == "esai") {
                    if (JSON.parse(jawabanSiswa.jawaban_rubrik_esai)) {
                      if (JSON.parse(jawabanSiswa.jawaban_rubrik_esai).length) {
                        JSON.parse(jawabanSiswa.jawaban_rubrik_esai).map(
                          (ed) => {
                            if (ed.benar) {
                              row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                                ed ? ed.poin : "0"
                              }`;
                              hasil = hasil + ed.poin;
                            }
                          }
                        );
                      }
                    }
                  }

                  row.getCell([`${(nox + 1) * 1 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).fill = {
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
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`
              ).value = "Total";
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).value = hasil;
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              };

              worksheet.addConditionalFormatting({
                ref: `A7:${colName(
                  jadwalUjian.toJSON().ujian.__meta__.total + 2
                )}7`,
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
        worksheet.autoFilter = {
          from: "A7",
          to: `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`,
        };

        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;
        worksheet.getColumn("B").width = 35;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
      })
    );
    let namaFile = `/uploads/rekap-ujian-siswa-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadAbsen({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    const { tk_jadwal_ujian_id } = request.post();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const tkJadwalUjian = await TkJadwalUjian.query()
      .with("jadwalUjian", (builder) => {
        builder.with("ujian", (builder) => builder.with("mataPelajaran"));
      })
      .with("rombel")
      .where({ id: tk_jadwal_ujian_id })
      .first();

    const anggotaRombel = await MAnggotaRombel.query()
      .where({ m_rombel_id: tkJadwalUjian.m_rombel_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    const pesertaUjianData = await User.query()
      // .with("pesertaUjian", (builder) => {
      //   builder
      //     .with("peringatan")
      //     .withCount("peringatan as belumDibaca", (builder) => {
      //       builder.where({ dibaca_guru: 0 }).whereNotNull("jawaban");
      //     })
      //     .where({ tk_jadwal_ujian_id: tk_jadwal_ujian_id })
      //     .andWhere({ dihapus: 0 });
      // })
      .whereIn("id", anggotaRombel)
      .andWhere({ dihapus: 0 })
      .fetch();

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Daftar Absen`);
    worksheet.mergeCells("A1:F1");
    worksheet.mergeCells("A2:F2");
    worksheet.mergeCells("A3:F3");
    worksheet.getCell(
      "A7"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
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
      ref: "A8:F8",
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

    worksheet.getCell("A5").value = `Hari, tanggal: ${moment().format(
      "dddd, DD MMMM YYYY"
    )}`;
    worksheet.getCell("A6").value = `Mata Pelajaran : ${
      tkJadwalUjian.toJSON().jadwalUjian.ujian.mataPelajaran.nama
    } `;
    worksheet.getCell("E5").value = `Kelas : ${
      tkJadwalUjian.toJSON().rombel.nama
    }`;
    worksheet.getCell("E6").value = `Ruang : ....`;
    await Promise.all(
      pesertaUjianData
        .toJSON()
        .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
        .map(async (d, idx) => {
          worksheet.getCell("A1").value = "DAFTAR HADIR UJIAN";
          worksheet.getCell("A2").value = sekolah.nama;
          worksheet.getCell("A3").value = `TAHUN PELAJARAN ${ta.tahun}`;
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 8}:D${(idx + 1) * 1 + 8}`,
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
            ref: `E${(idx + 1) * 1 + 8}:F${(idx + 1) * 1 + 8}`,
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
                    horizontal: "right",
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
          // add column headers
          worksheet.getRow(8).values = [
            "No",
            "No Peserta",
            "Nama Peserta",
            "Whatsapp",
            "Tanda Tangan",
            "Tanda Tangan",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "no_p" },
            { key: "nama" },
            { key: "whatsapp" },
            { key: "ttd" },
            { key: "ttd2" },
          ];

          // Add row using key mapping to columns
          if (idx % 2 === 0) {
            let row = worksheet.addRow({
              no: `${idx + 1}`,
              no_p: d ? d.no_ujian : "-",
              nama: d ? d.nama : "-",
              whatsapp: d ? d.whatsapp : "-",
              ttd: "",
              ttd2: idx + 1,
            });
          } else {
            let row = worksheet.addRow({
              no: `${idx + 1}`,
              no_p: d ? d.no_ujian : "-",
              nama: d ? d.nama : "-",
              whatsapp: d ? d.whatsapp : "-",
              ttd: idx + 1,
              ttd2: "",
            });
          }
        })
    );

    worksheet.getColumn("A").width = 7;
    worksheet.getColumn("B").width = 12;
    worksheet.getColumn("C").width = 25;
    worksheet.getColumn("D").width = 16;
    worksheet.getColumn("E").width = 14;
    worksheet.getColumn("F").width = 14;

    let namaFile = `/uploads/Daftar-Hadir-Ujian-${
      tkJadwalUjian.toJSON().rombel.nama
    }-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadJadwalUjian({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tk_jadwal_ujian_id, m_jadwal_ujian_id } = request.post();
    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalUjian = await TkJadwalUjian.query()
      .with("peserta", (builder) => {
        builder.with("user"),
          (builder) => {
            builder.select("id", "nama");
          };
      })
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
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    const pesertaUjianData = await User.query()
      .select("id", "nama")
      .whereIn("id", anggotaRombel)
      .fetch();

    const workbook = new Excel.Workbook();

    await Promise.all(
      [0].map(async (_) => {
        // Create workbook & add worksheet
        const worksheet = workbook.addWorksheet(
          `${jadwalUjian.toJSON().rombel.nama}`
        );
        worksheet.addConditionalFormatting({
          ref: "A10:P10",
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
          pesertaUjianData
            .toJSON()
            .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
            .map(async (d, idx) => {
              let update = 0;
              await Promise.all(
                jadwalUjian
                  .toJSON()
                  .peserta.sort((a, b) =>
                    ("" + a.user.nama).localeCompare(b.user.nama)
                  )
                  .map(async (e) => {
                    if (d.id == e.m_user_id) {
                      update = 1;
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
                        nilaiPgKompleks: 0,
                        nilaiUraian: 0,
                        nilaiMenjodohkan: 0,
                        nilaiIsian: 0,
                        nilaiTotal: 0,
                        benarPg: 0,
                        benarEsai: 0,
                        benarIsian: 0,
                        benarPgKompleks: 0,
                        benarUraian: 0,
                        benarMenjodohkan: 0,
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
                              metaHasil.benarPg = metaHasil.benarPg + 1;
                              analisisBenar[d.soal.kd] = analisisBenar[
                                d.soal.kd
                              ]
                                ? analisisBenar[d.soal.kd] + 1
                                : 1;
                            }
                            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                              ? analisisTotal[d.soal.kd] + 1
                              : 1;
                          } else if (d.soal.bentuk == "isian") {
                            if (d.jawaban_isian == d.soal.jawaban_benar) {
                              metaHasil.nilaiIsian =
                                metaHasil.nilaiIsian + d.soal.nilai_soal;
                              metaHasil.benar = metaHasil.benar + 1;
                              metaHasil.benarIsian = metaHasil.benarIsian + 1;
                            }
                          } else if (d.soal.bentuk == "esai") {
                            if (JSON.parse(d.jawaban_rubrik_esai)) {
                              if (JSON.parse(d.jawaban_rubrik_esai).length) {
                                JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                                  if (e.benar) {
                                    metaHasil.nilaiEsai =
                                      metaHasil.nilaiEsai +
                                      parseInt(e.poin ? e.poin : 0);
                                  }
                                });

                                if (
                                  d.jawaban_rubrik_esai.indexOf("true") != -1
                                ) {
                                  metaHasil.benar = metaHasil.benar + 1;
                                  metaHasil.benarEsai = metaHasil.benarEsai + 1;
                                }
                              }
                            }
                          } else if (d.soal.bentuk == "pg_kompleks") {
                            const jawabanKjKompleks =
                              d.soal.jawaban_pg_kompleks.split(",");
                            const check1 = jawabanKjKompleks.every((e) =>
                              d.jawaban_pg_kompleks.includes(e)
                            );
                            const check2 = d.jawaban_pg_kompleks.every((e) =>
                              d.soal.jawaban_pg_kompleks.includes(e)
                            );
                            if (check1 && check2) {
                              metaHasil.nilaiPgKompleks =
                                metaHasil.nilaiPgKompleks + d.soal.nilai_soal;
                              metaHasil.benar = metaHasil.benar + 1;
                              metaHasil.benarPgKompleks =
                                metaHasil.benarPgKompleks + 1;
                              analisisBenar[d.soal.kd] = analisisBenar[
                                d.soal.kd
                              ]
                                ? analisisBenar[d.soal.kd] + 1
                                : 1;
                            }
                            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                              ? analisisTotal[d.soal.kd] + 1
                              : 1;
                          } else if (d.soal.bentuk == "uraian") {
                            if (d.jawaban_opsi_uraian == d.soal.kj_uraian) {
                              metaHasil.nilaiUraian =
                                metaHasil.nilaiUraian + d.soal.nilai_soal;
                              metaHasil.benar = metaHasil.benar + 1;
                              metaHasil.benarUraian = metaHasil.benarUraian + 1;
                              analisisBenar[d.soal.kd] = analisisBenar[
                                d.soal.kd
                              ]
                                ? analisisBenar[d.soal.kd] + 1
                                : 1;
                            }
                            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                              ? analisisTotal[d.soal.kd] + 1
                              : 1;
                          } else if (d.soal.bentuk == "menjodohkan") {
                            // const jawabanKjMenjodohkan = d.soal.jawaban_pg_kompleks.split(",")
                            // const check1 = jawabanKjKompleks.every(e=> d.jawaban_pg_kompleks.includes(e))
                            // const check2 = d.jawaban_menjodohkan.every(e => d.soal.jawaban_pg_kompleks.includes(e))
                            if (d.jawaban_menjodohkan) {
                              if (d.jawaban_menjodohkan.length) {
                                d.jawaban_menjodohkan.map((e, id) => {
                                  // metaHasil.nilaiMenjodohkan = metaHasil.nilaiMenjodohkan+','+ id ;
                                  const check1 = d.soal.soal_menjodohkan.find(
                                    (r) => id + 1 == r.id
                                  );
                                  if (check1) {
                                    if (check1.jawaban == e - 1) {
                                      metaHasil.nilaiMenjodohkan =
                                        metaHasil.nilaiMenjodohkan +
                                        parseInt(check1.poin);
                                      metaHasil.benar = metaHasil.benar + 1;
                                      metaHasil.benarMenjodohkan =
                                        d.jawaban_menjodohkan.length;
                                    }
                                  }
                                });
                              }
                            }
                          }
                        })
                      );

                      metaHasil.nilaiTotal =
                        (metaHasil.nilaiPg ? metaHasil.nilaiPg : 0) +
                        (metaHasil.nilaiEsai ? metaHasil.nilaiEsai : 0) +
                        (metaHasil.nilaiPgKompleks
                          ? metaHasil.nilaiPgKompleks
                          : 0) +
                        (metaHasil.nilaiUraian ? metaHasil.nilaiUraian : 0) +
                        (metaHasil.nilaiMenjodohkan
                          ? metaHasil.nilaiMenjodohkan
                          : 0);

                      // add column headers
                      worksheet.getRow(10).values = [
                        "Nama",
                        "Nilai PG",
                        "Nilai Esai",

                        "Nilai Isian",
                        "Nilai PG Kompleks",
                        "Nilai Uraian",
                        "Nilai Menjodohkan",
                        "Nilai Total",

                        "Total Benar PG",
                        "Total Benar Esai",
                        "Total Benar Isian",
                        "Total Benar PG Kompleks",
                        "Total Benar Uraian",
                        "Total Benar Menjodohkan",
                        "Total Benar",
                        "Keluar Tab",
                      ];

                      worksheet.columns = [
                        { key: "user" },
                        { key: "nilai_pg" },
                        { key: "nilai_esai" },
                        { key: "nilai_isian" },
                        { key: "nilai_pg_kompleks" },
                        { key: "nilai_uraian" },
                        { key: "nilai_menjodohkan" },
                        { key: "nilai_total" },

                        { key: "benar_pg" },
                        { key: "benar_esai" },
                        { key: "benar_isian" },
                        { key: "benar_pg_kompleks" },
                        { key: "benar_uraian" },
                        { key: "benar_menjodohkan" },
                        { key: "benar_total" },
                        { key: "keluar_tab" },
                      ];
                      worksheet.addConditionalFormatting({
                        ref: `B${(idx + 1) * 1 + 10}:P${(idx + 1) * 1 + 10}`,
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
                        ref: `A${(idx + 1) * 1 + 10}`,
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
                      // Add row using key mapping to columns
                      const row = worksheet.addRow({
                        user: d.nama,
                        nilai_pg: metaHasil.nilaiPg,
                        nilai_esai: metaHasil.nilaiEsai,

                        nilai_isian: metaHasil.nilaiIsian,
                        nilai_pg_kompleks: metaHasil.nilaiPgKompleks,
                        nilai_uraian: metaHasil.nilaiUraian,
                        nilai_menjodohkan: metaHasil.nilaiMenjodohkan,
                        nilai_total: metaHasil.nilaiTotal,
                        benar_pg: metaHasil.benarPg,
                        benar_esai: metaHasil.benarEsai,
                        benar_isian: metaHasil.benarIsian,
                        benar_pg_kompleks: metaHasil.benarPgKompleks,
                        benar_uraian: metaHasil.benarUraian,
                        benar_menjodohkan: metaHasil.benarMenjodohkan,
                        benar_total: metaHasil.benar,
                        keluar_tab: pesertaUjian?.warning,
                      });
                    }
                  })
              );
              if (update == 0) {
                worksheet.getRow(10).values = [
                  "Nama",
                  "Nilai PG",
                  "Nilai Esai",
                  "Nilai Isian",
                  "Nilai PG Kompleks",
                  "Nilai Uraian",
                  "Nilai Menjodohkan",
                  "Nilai Total",

                  "Total Benar PG",
                  "Total Benar Esai",
                  "Total Benar Isian",
                  "Total Benar PG Kompleks",
                  "Total Benar Uraian",
                  "Total Benar Menjodohkan",
                  "Total Benar",
                  "Keluar Tab",
                ];

                worksheet.columns = [
                  { key: "user" },
                  { key: "nilai_pg" },
                  { key: "nilai_esai" },
                  { key: "nilai_isian" },
                  { key: "nilai_pg_kompleks" },
                  { key: "nilai_uraian" },
                  { key: "nilai_menjodohkan" },
                  { key: "nilai_total" },

                  { key: "benar_pg" },
                  { key: "benar_esai" },
                  { key: "benar_isian" },
                  { key: "benar_pg_kompleks" },
                  { key: "benar_uraian" },
                  { key: "benar_menjodohkan" },
                  { key: "benar_total" },
                  { key: "keluar_tab" },
                ];

                // Add row using key mapping to columns
                const row = worksheet.addRow({
                  user: d.nama,
                  nilai_pg: 0,
                  nilai_esai: 0,

                  nilai_isian: 0,
                  nilai_pg_kompleks: 0,
                  nilai_uraian: 0,
                  nilai_menjodohkan: 0,
                  nilai_total: 0,
                  benar_pg: 0,
                  benar_esai: 0,
                  benar_isian: 0,
                  benar_pg_kompleks: 0,
                  benar_uraian: 0,
                  benar_menjodohkan: 0,
                  benar_total: 0,
                  keluar_tab: 0,
                });
                worksheet.addConditionalFormatting({
                  ref: `B${(idx + 1) * 1 + 10}:P${(idx + 1) * 1 + 10}`,
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
                  ref: `A${(idx + 1) * 1 + 10}`,
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
              }
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

        worksheet.getColumn("A").width = 25;
        worksheet.getColumn("B").width = 11;
        worksheet.getColumn("C").width = 11;
        worksheet.getColumn("D").width = 19;
        worksheet.getColumn("E").width = 13;
        worksheet.getColumn("F").width = 19;
        worksheet.getColumn("G").width = 13;

        worksheet.autoFilter = {
          from: "A10",
          to: "N10",
        };

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
        // worksheet.autoFilter = {
        //   from: 'A11',
        //   to: 'D99',
        // }
      })
    );

    let namaFile = `/uploads/${jadwalUjian
      .toJSON()
      .jadwalUjian.ujian.nama.replace(/[\/|\\:*?"<>]/g, " ")} ${jadwalUjian
      .toJSON()
      .rombel.nama.replace(/[\/|\\:*?"<>]/g, " ")}-${Date.now()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadSemuaJadwalUjian({ response, request }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const { tk_jadwal_ujian_id, m_jadwal_ujian_id } = request.post();
    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const workbook = new Excel.Workbook();
    const jadwalUjianData = await MJadwalUjian.query()
      .with("ujian")
      .where({ id: m_jadwal_ujian_id })
      .first();

    const jadwalUjian = await TkJadwalUjian.query()
      .with("peserta", (builder) => {
        builder.with("user"),
          (builder) => {
            builder.select("id", "nama");
          };
      })
      .with("rombel")
      .with("jadwalUjian", (builder) => {
        builder.with("ujian");
      })
      .where({ m_jadwal_ujian_id: m_jadwal_ujian_id })
      // .where({ id: tk_jadwal_ujian_id })
      .fetch();

    await Promise.all(
      jadwalUjian.toJSON().map(async (r) => {
        const tkJadwalUjian = await TkJadwalUjian.query()
          .where({ id: r.id })
          .pluck("m_rombel_id");

        const anggotaRombel = await MAnggotaRombel.query()
          .where({ m_rombel_id: r.m_rombel_id })
          .andWhere({ dihapus: 0 })
          .pluck("m_user_id");

        const pesertaUjianData = await User.query()
          .select("id", "nama")
          .whereIn("id", anggotaRombel)
          .fetch();

        // Create workbook & add worksheet
        const worksheet = workbook.addWorksheet(`${r.rombel.nama}`);
        worksheet.addConditionalFormatting({
          ref: "A10:P10",
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
          pesertaUjianData
            .toJSON()
            .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
            .map(async (d, idx) => {
              let update = 0;
              await Promise.all(
                r.peserta
                  .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
                  .map(async (e) => {
                    if (d.id == e.m_user_id) {
                      update = 1;
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
                        nilaiPgKompleks: 0,
                        nilaiUraian: 0,
                        nilaiMenjodohkan: 0,
                        nilaiIsian: 0,
                        nilaiTotal: 0,
                        benarPg: 0,
                        benarEsai: 0,
                        benarIsian: 0,
                        benarPgKompleks: 0,
                        benarUraian: 0,
                        benarMenjodohkan: 0,
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
                              metaHasil.benarPg = metaHasil.benarPg + 1;
                              analisisBenar[d.soal.kd] = analisisBenar[
                                d.soal.kd
                              ]
                                ? analisisBenar[d.soal.kd] + 1
                                : 1;
                            }
                            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                              ? analisisTotal[d.soal.kd] + 1
                              : 1;
                          } else if (d.soal.bentuk == "isian") {
                            if (d.jawaban_isian == d.soal.jawaban_benar) {
                              metaHasil.nilaiIsian =
                                metaHasil.nilaiIsian + d.soal.nilai_soal;
                              metaHasil.benar = metaHasil.benar + 1;
                              metaHasil.benarIsian = metaHasil.benarIsian + 1;
                            }
                          } else if (d.soal.bentuk == "esai") {
                            if (JSON.parse(d.jawaban_rubrik_esai)) {
                              if (JSON.parse(d.jawaban_rubrik_esai).length) {
                                JSON.parse(d.jawaban_rubrik_esai).map((e) => {
                                  if (e.benar) {
                                    metaHasil.nilaiEsai =
                                      metaHasil.nilaiEsai +
                                      parseInt(e.poin ? e.poin : 0);
                                  }
                                });

                                if (
                                  d.jawaban_rubrik_esai.indexOf("true") != -1
                                ) {
                                  metaHasil.benar = metaHasil.benar + 1;
                                  metaHasil.benarEsai = metaHasil.benarEsai + 1;
                                }
                              }
                            }
                          } else if (d.soal.bentuk == "pg_kompleks") {
                            const jawabanKjKompleks =
                              d.soal.jawaban_pg_kompleks.split(",");
                            const check1 = jawabanKjKompleks.every((e) =>
                              d.jawaban_pg_kompleks.includes(e)
                            );
                            const check2 = d.jawaban_pg_kompleks.every((e) =>
                              d.soal.jawaban_pg_kompleks.includes(e)
                            );
                            if (check1 && check2) {
                              metaHasil.nilaiPgKompleks =
                                metaHasil.nilaiPgKompleks + d.soal.nilai_soal;
                              metaHasil.benar = metaHasil.benar + 1;
                              metaHasil.benarPgKompleks =
                                metaHasil.benarPgKompleks + 1;
                              analisisBenar[d.soal.kd] = analisisBenar[
                                d.soal.kd
                              ]
                                ? analisisBenar[d.soal.kd] + 1
                                : 1;
                            }
                            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                              ? analisisTotal[d.soal.kd] + 1
                              : 1;
                          } else if (d.soal.bentuk == "uraian") {
                            if (d.jawaban_opsi_uraian == d.soal.kj_uraian) {
                              metaHasil.nilaiUraian =
                                metaHasil.nilaiUraian + d.soal.nilai_soal;
                              metaHasil.benar = metaHasil.benar + 1;
                              metaHasil.benarUraian = metaHasil.benarUraian + 1;
                              analisisBenar[d.soal.kd] = analisisBenar[
                                d.soal.kd
                              ]
                                ? analisisBenar[d.soal.kd] + 1
                                : 1;
                            }
                            analisisTotal[d.soal.kd] = analisisTotal[d.soal.kd]
                              ? analisisTotal[d.soal.kd] + 1
                              : 1;
                          } else if (d.soal.bentuk == "menjodohkan") {
                            // const jawabanKjMenjodohkan = d.soal.jawaban_pg_kompleks.split(",")
                            // const check1 = jawabanKjKompleks.every(e=> d.jawaban_pg_kompleks.includes(e))
                            // const check2 = d.jawaban_menjodohkan.every(e => d.soal.jawaban_pg_kompleks.includes(e))
                            if (d.jawaban_menjodohkan) {
                              if (d.jawaban_menjodohkan.length) {
                                d.jawaban_menjodohkan.map((e, id) => {
                                  // metaHasil.nilaiMenjodohkan = metaHasil.nilaiMenjodohkan+','+ id ;
                                  const check1 = d.soal.soal_menjodohkan.find(
                                    (r) => id + 1 == r.id
                                  );
                                  if (check1) {
                                    if (check1.jawaban == e - 1) {
                                      metaHasil.nilaiMenjodohkan =
                                        metaHasil.nilaiMenjodohkan +
                                        parseInt(check1.poin);
                                      metaHasil.benar = metaHasil.benar + 1;
                                      metaHasil.benarMenjodohkan =
                                        d.jawaban_menjodohkan.length;
                                    }
                                  }
                                });
                              }
                            }
                          }
                        })
                      );

                      metaHasil.nilaiTotal =
                        (metaHasil.nilaiPg ? metaHasil.nilaiPg : 0) +
                        (metaHasil.nilaiEsai ? metaHasil.nilaiEsai : 0) +
                        (metaHasil.nilaiPgKompleks
                          ? metaHasil.nilaiPgKompleks
                          : 0) +
                        (metaHasil.nilaiUraian ? metaHasil.nilaiUraian : 0) +
                        (metaHasil.nilaiMenjodohkan
                          ? metaHasil.nilaiMenjodohkan
                          : 0);

                      // add column headers
                      worksheet.getRow(10).values = [
                        "Nama",
                        "Nilai PG",
                        "Nilai Esai",

                        "Nilai Isian",
                        "Nilai PG Kompleks",
                        "Nilai Uraian",
                        "Nilai Menjodohkan",
                        "Nilai Total",

                        "Total Benar PG",
                        "Total Benar Esai",
                        "Total Benar Isian",
                        "Total Benar PG Kompleks",
                        "Total Benar Uraian",
                        "Total Benar Menjodohkan",
                        "Total Benar",
                        "Keluar Tab",
                      ];

                      worksheet.columns = [
                        { key: "user" },
                        { key: "nilai_pg" },
                        { key: "nilai_esai" },
                        { key: "nilai_isian" },
                        { key: "nilai_pg_kompleks" },
                        { key: "nilai_uraian" },
                        { key: "nilai_menjodohkan" },
                        { key: "nilai_total" },

                        { key: "benar_pg" },
                        { key: "benar_esai" },
                        { key: "benar_isian" },
                        { key: "benar_pg_kompleks" },
                        { key: "benar_uraian" },
                        { key: "benar_menjodohkan" },
                        { key: "benar_total" },
                        { key: "keluar_tab" },
                      ];
                      worksheet.addConditionalFormatting({
                        ref: `B${(idx + 1) * 1 + 10}:P${(idx + 1) * 1 + 10}`,
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
                        ref: `A${(idx + 1) * 1 + 10}`,
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
                      // Add row using key mapping to columns
                      const row = worksheet.addRow({
                        user: d.nama,
                        nilai_pg: metaHasil.nilaiPg,
                        nilai_esai: metaHasil.nilaiEsai,

                        nilai_isian: metaHasil.nilaiIsian,
                        nilai_pg_kompleks: metaHasil.nilaiPgKompleks,
                        nilai_uraian: metaHasil.nilaiUraian,
                        nilai_menjodohkan: metaHasil.nilaiMenjodohkan,
                        nilai_total: metaHasil.nilaiTotal,
                        benar_pg: metaHasil.benarPg,
                        benar_esai: metaHasil.benarEsai,
                        benar_isian: metaHasil.benarIsian,
                        benar_pg_kompleks: metaHasil.benarPgKompleks,
                        benar_uraian: metaHasil.benarUraian,
                        benar_menjodohkan: metaHasil.benarMenjodohkan,
                        benar_total: metaHasil.benar,
                        keluar_tab: pesertaUjian?.warning,
                      });
                    }
                  })
              );
              if (update == 0) {
                worksheet.getRow(10).values = [
                  "Nama",
                  "Nilai PG",
                  "Nilai Esai",
                  "Nilai Isian",
                  "Nilai PG Kompleks",
                  "Nilai Uraian",
                  "Nilai Menjodohkan",
                  "Nilai Total",

                  "Total Benar PG",
                  "Total Benar Esai",
                  "Total Benar Isian",
                  "Total Benar PG Kompleks",
                  "Total Benar Uraian",
                  "Total Benar Menjodohkan",
                  "Total Benar",
                  "Keluar Tab",
                ];

                worksheet.columns = [
                  { key: "user" },
                  { key: "nilai_pg" },
                  { key: "nilai_esai" },
                  { key: "nilai_isian" },
                  { key: "nilai_pg_kompleks" },
                  { key: "nilai_uraian" },
                  { key: "nilai_menjodohkan" },
                  { key: "nilai_total" },

                  { key: "benar_pg" },
                  { key: "benar_esai" },
                  { key: "benar_isian" },
                  { key: "benar_pg_kompleks" },
                  { key: "benar_uraian" },
                  { key: "benar_menjodohkan" },
                  { key: "benar_total" },
                  { key: "keluar_tab" },
                ];

                // Add row using key mapping to columns
                const row = worksheet.addRow({
                  user: d.nama,
                  nilai_pg: 0,
                  nilai_esai: 0,

                  nilai_isian: 0,
                  nilai_pg_kompleks: 0,
                  nilai_uraian: 0,
                  nilai_menjodohkan: 0,
                  nilai_total: 0,
                  benar_pg: 0,
                  benar_esai: 0,
                  benar_isian: 0,
                  benar_pg_kompleks: 0,
                  benar_uraian: 0,
                  benar_menjodohkan: 0,
                  benar_total: 0,
                  keluar_tab: 0,
                });
                worksheet.addConditionalFormatting({
                  ref: `B${(idx + 1) * 1 + 10}:P${(idx + 1) * 1 + 10}`,
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
                  ref: `A${(idx + 1) * 1 + 10}`,
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
              }
            })
        );

        worksheet.getCell("A1").value = "Ujian";
        worksheet.getCell("B1").value = jadwalUjianData.toJSON().ujian.nama;
        worksheet.getCell("D1").value = "Tanggal";
        worksheet.getCell("E1").value = `${
          jadwalUjianData.toJSON().tanggalUjian
        } ${jadwalUjianData.toJSON().waktuUjian}`;
        worksheet.getCell("D2").value = "KKM";
        worksheet.getCell("E2").value = jadwalUjianData.kkm;
        worksheet.getCell("A2").value = "Durasi";
        worksheet.getCell("B2").value = `${jadwalUjianData.durasi} menit`;

        worksheet.getColumn("A").width = 25;
        worksheet.getColumn("B").width = 11;
        worksheet.getColumn("C").width = 11;
        worksheet.getColumn("D").width = 19;
        worksheet.getColumn("E").width = 13;
        worksheet.getColumn("F").width = 19;
        worksheet.getColumn("G").width = 13;

        worksheet.autoFilter = {
          from: "A10",
          to: "N10",
        };

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
        // worksheet.autoFilter = {
        //   from: 'A11',
        //   to: 'D99',
        // }
      })
    );

    let namaFile = `/uploads/${jadwalUjianData
      .toJSON()
      .ujian.nama.replace(
        /[\/|\\:*?"<>]/g,
        " "
      )} Semua Kelas-${Date.now()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadHasilSemuaUjian2({
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

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const keluarantanggalseconds = moment().format("YYYY-MM-DD ") + Date.now();

    const { tk_jadwal_ujian_id, m_jadwal_ujian_id } = request.post();

    const jadwalUjian = await MJadwalUjian.query()
      .with("rombelUjian", (builder) => {
        builder
          .with("peserta", (builder) => {
            builder.with("user"),
              (builder) => {
                builder.select("id", "nama");
              };
          })
          // .where({ id: tk_jadwal_ujian_id })
          .with("rombel")
          .with("jadwalUjian", (builder) => {
            builder.with("ujian");
          });
      })
      .with("ujian", (builder) => {
        builder.with("soal").withCount("soal as total");
      })
      .where({ id: jadwal_ujian_id })
      .first();

    // return jadwalUjian.toJSON().ujian;

    let rombel;
    let workbook = new Excel.Workbook();
    await Promise.all(
      jadwalUjian.toJSON().rombelUjian.map(async (s) => {
        let worksheet = workbook.addWorksheet(`${s.rombel.nama}`);
        rombel = s.rombel.nama;
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
        worksheet.mergeCells(`A1:Z1`);
        worksheet.mergeCells(`A2:Z2`);
        worksheet.mergeCells(`A3:Z3`);
        worksheet.mergeCells(`A4:Z4`);
        worksheet.mergeCells(`A6:Z6`);
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
          ref: "A1:I4",
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
          s.peserta
            .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
            .map(async (d, idx) => {
              worksheet.getRow(7).values = ["No", "Nama"];
              worksheet.columns = [{ key: "no" }, { key: "user" }];
              let row = worksheet.addRow({
                no: `${idx + 1}`,
                user: d.user ? d.user.nama : "-",
              });
              let hasil = 0;
              // const row = worksheet.getRow(8);
              await Promise.all(
                jadwalUjian.toJSON().ujian.soal.map(async (e, nox) => {
                  // const image = await nodeHtmlToImage({
                  //   html: formattedHTML(e.pertanyaan),
                  //   type: "jpeg",
                  //   quality: 25,
                  //   encoding: "base64",
                  //   selector: "div",
                  //   puppeteerArgs: {
                  //     args: ["--no-sandbox", "--disable-setuid-sandbox"],
                  //   },
                  // });
                  // const dimensions = sizeOf(Buffer.from(image, "base64"));
                  // const imageId = workbook.addImage({
                  //   base64: image,
                  //   extension: "jpeg",
                  // });
                  // worksheet.getRow(`7`).height =
                  //   (dimensions.height * 3) / 4 + 4;
                  // worksheet.addImage(imageId, {
                  //   tl: { col: [`${(nox + 1) * 1 + 2.1}`], row: 7.1 },
                  //   ext: {
                  //     width: `${dimensions.width}`,
                  //     height: `${dimensions.height}`,
                  //   },
                  // });
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    // `${e?.pertanyaan}`
                    `${nox + 1}`,
                    ,
                  ];
                  const jawabanSiswa = await TkJawabanUjianSiswa.query()
                    .select(
                      "id",
                      "jawaban_pg",
                      "jawaban_esai",
                      "jawaban_rubrik_esai"
                    )
                    .where({ m_soal_ujian_id: e.id })
                    .andWhere({ tk_peserta_ujian_id: d.id })
                    .first();
                  if (e.bentuk == "pg") {
                    if (jawabanSiswa && jawabanSiswa.jawaban_pg) {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value =
                        jawabanSiswa.jawaban_pg;
                      if (jawabanSiswa.jawaban_pg == e.kj_pg) {
                        hasil = hasil + e.nilai_soal;
                      }
                    } else {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                        jawabanSiswa?.jawaban_pg ? jawabanSiswa?.jawaban_pg : ""
                      } (salah)`;
                    }
                  } else if (e.bentuk == "esai") {
                    if (
                      jawabanSiswa?.jawaban_rubrik_esai
                        ? JSON.parse(jawabanSiswa.jawaban_rubrik_esai)
                        : 0
                    ) {
                      if (
                        JSON.parse(jawabanSiswa?.jawaban_rubrik_esai).length
                      ) {
                        JSON.parse(jawabanSiswa?.jawaban_rubrik_esai).map(
                          (ed) => {
                            row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                              jawabanSiswa?.jawaban_esai
                                ? jawabanSiswa.jawaban_esai.replace(
                                    /<\/?[^>]+(>|$)/ig,
                                    ""
                                  )
                                : "(Tidak Menjawab Soal)"
                            }`;
                            if (ed.benar) {
                              row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                                ed ? ed.poin : "0"
                              }`;
                              hasil = hasil + ed.poin;
                            } else {
                              row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                                jawabanSiswa?.jawaban_esai
                                  ? jawabanSiswa.jawaban_esai.replace(
                                      /<\/?[^>]+(>|$)/ig,
                                      ""
                                    )
                                  : "(Tidak Menjawab Soal)"
                              }`;
                            }
                          }
                        );
                      } else {
                        row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                          jawabanSiswa?.jawaban_esai
                            ? jawabanSiswa.jawaban_esai.replace(/<\/?[^>]+(>|$)/ig, "")
                            : "(Tidak Menjawab Soal)"
                        }`;
                      }
                    } else {
                      row.getCell([`${(nox + 1) * 1 + 2}`]).value = `${
                        jawabanSiswa?.jawaban_esai
                          ? jawabanSiswa.jawaban_esai.replace(/<\/?[^>]+(>|$)/ig, "")
                          : "(Tidak Menjawab Soal)"
                      }`;
                    }
                  }

                  row.getCell([`${(nox + 1) * 1 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  worksheet.getColumn([`${(nox + 1) * 1 + 2}`]).fill = {
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
                          // fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: warna}},
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
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`
              ).value = "Total";
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).value = hasil;
              worksheet.getCell(
                `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}${
                  (idx + 1) * 1 + 7
                }`
              ).border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              };

              worksheet.addConditionalFormatting({
                ref: `A7:${colName(
                  jadwalUjian.toJSON().ujian.__meta__.total + 2
                )}7`,
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
        worksheet.autoFilter = {
          from: "A7",
          to: `${colName(jadwalUjian.toJSON().ujian.__meta__.total + 2)}7`,
        };

        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = s.rombel.nama;
        worksheet.getCell("A3").value = jadwalUjian.toJSON().ujian.nama;
        worksheet.getCell("A4").value = ta.tahun;
        worksheet.getColumn("B").width = 35;

        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
      })
    );
    let namaFile = `/uploads/rekap-hasil-ujian-siswa-semua-kelas-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = UjianController;

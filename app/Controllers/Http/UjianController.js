"use strict";

const MSekolah = use("App/Models/MSekolah");
const TkPesertaUjian = use("App/Models/TkPesertaUjian");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const MMateri = use("App/Models/MMateri");
const MUjian = use("App/Models/MUjian");
const TkSoalUjian = use("App/Models/TkSoalUjian");
const MTemplateKesukaranMapel = use("App/Models/MTemplateKesukaranMapel");

const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();
const FieldValue = firestore.FieldValue();
var striptags = require("striptags");

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

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: m_ta_id })
      .ids();

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

        return data.push({
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
    const materi = await MMateri.query().where({ id: materi_id }).first();
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

    const soalUjianIds = await TkSoalUjian.query()
      .with("soal", (builder) => {
        builder
          .with("jawabanSemuaSiswa")
          .withCount("jawabanSemuaSiswa as totalSiswa");
        if (search) {
          builder.where("nama", "like", `%${search}%`);
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
        });
      })
    );
    if (tipe_soal) {
      dataSoal.toJSON().filter((d) => {
        if (d.bentuk_soal == tipe_soal) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (kesukaran) {
      dataSoal.toJSON().filter((d) => {
        if (d.kesukaran == kesukaran) {
          return true;
        } else {
          return false;
        }
      });
    }

    let bentukSoal = [];

    bentukSoal = [
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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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

    const { tipe, judul, batas_bawah, batas_atas } = request.post();

    const rules = {
      judul: "required",
      batas_bawah: "required",
      batas_atas: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "batas_bawah.required": "Batas Bawah harus diisi",
      "batas_atas.required": "Batas Atas harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
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

    const { tipe, judul, batas_bawah, batas_atas } = request.post();

    const rules = {
      judul: "required",
      batas_bawah: "required",
      batas_atas: "required",
    };
    const message = {
      "judul.required": "Judul harus diisi",
      "batas_bawah.required": "Batas Bawah harus diisi",
      "batas_atas.required": "Batas Atas harus diisi",
    };
    const validation = await validate(request.all(), rules, message);
    if (validation.fails()) {
      return response.unprocessableEntity(validation.messages());
    }
    //
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
    const { verifikasi } = request.post();
    if (
      user.role != "admin" ||
      user.role == "guru" ||
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
}

module.exports = UjianController;

"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const User = use("App/Models/User");
const MRombel = use("App/Models/MRombel");
const MMateri = use("App/Models/MMateri");
const MMataPelajaran = use("App/Models/MMataPelajaran");
const MJadwalMengajar = use("App/Models/MJadwalMengajar");
const MKategoriMapel = use("App/Models/MKategoriMapel");
const TkMapelRapor = use("App/Models/TkMapelRapor");
const TkMateriRombel = use("App/Models/TkMateriRombel");
const MKeteranganPkl = use("App/Models/MKeteranganPkl");
const MPerusahaan = use("App/Models/MPerusahaan");
const MAbsen = use("App/Models/MAbsen");
const MTimeline = use("App/Models/MTimeline");
const TkTimeline = use("App/Models/TkTimeline");
const MUjianSiswa = use("App/Models/MUjianSiswa");
const TkPerusahaanSekolah = use("App/Models/TkPerusahaanSekolah");
const Hash = use("Hash");
const Helpers = use("Helpers");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const MJamMengajar = use("App/Models/MJamMengajar");
const Database = use("Database");
const Excel = require("exceljs");
const { database } = require("firebase-admin");
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
class RombelController {
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

  async getAnggotaRombel({ request, response, auth }) {
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

    const { m_rombel_id } = request.get();

    let userIds = MAnggotaRombel.query()
      .select("m_rombel_id", "id", "m_user_id")
      .where({ dihapus: 0 });

    if (typeof m_rombel_id == "object") {
      userIds.whereIn("m_rombel_id", m_rombel_id);
    } else if (m_rombel_id) {
      userIds.where({ m_rombel_id });
    }

    if (m_rombel_id) {
      userIds = await userIds.limit(10000).pluck("m_user_id");
    } else {
      userIds = [];
    }

    const anggota = await User.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("rombel", (builder) => {
            builder.select("id", "nama");
          })
          .whereIn(
            "m_rombel_id",
            typeof m_rombel_id == "object" ? m_rombel_id : [m_rombel_id]
          )
          .andWhere({ dihapus: 0 });
      })
      .select("id", "nama", "whatsapp")
      .where({ dihapus: 0 })
      .whereIn("id", userIds)
      .fetch();

    return response.ok({
      anggota,
    });
  }

  async downloadJadwalMengajarTingkat({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const { tingkat } = request.post();

    let tingkatGet;

    if (tingkat) {
      tingkatGet = tingkat;
    } else {
      tingkatGet = tingkatRombel[0];
    }
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
      {
        id: 7,
        hari: "Minggu",
      },
    ];

    const rombelIds = await MRombel.query()
      .where({ tingkat: tingkatGet })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();
    let workbook = new Excel.Workbook();

    const result = await Promise.all(
      hari.map(async (ss) => {
        const jamMengajarData = await MJamMengajar.query()
          .with("jadwalMengajar", (builder) => {
            builder
              .with("mataPelajaran", (builder) => {
                builder.with("user");
              })
              .with("rombel")
              .whereIn("m_rombel_id", rombelIds);
          })
          .withCount("jadwalMengajar as total", (builder) => {
            builder
              .whereIn("m_rombel_id", rombelIds)
              .whereNotNull("m_mata_pelajaran_id");
          })
          .where({ m_sekolah_id: sekolah.id })
          .andWhere({ kode_hari: ss.id })
          .andWhere({ m_ta_id: ta.id })
          .fetch();

        if (!jamMengajarData.toJSON()[0]) {
          return;
        }
        const jamMengajar = jamMengajarData
          .toJSON()
          .filter((d) => d.__meta__.total != 0 || d.istirahat);

        const total = jamMengajar[0].jadwalMengajar.length;

        let worksheet = workbook.addWorksheet(`${ss.hari}`);

        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = "JADWAL KEGIATAN PEMBELAJARAN";
        worksheet.getCell("A3").value = `TAHUN PELAJARAN ${ta.tahun}`;

        // worksheet.getCell(
        //   "A6"
        // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

        // return jamMengajar.toJSON().length;
        // return total;

        let sudahMerge;
        // add column headers
        const data = await Promise.all(
          jamMengajar.map(async (d, idx) => {
            worksheet.getRow(5).values = [
              "HARI",
              "WAKTU",
              "JAM KE",
              `${tingkat}`,
            ];
            worksheet.getRow(6).values = ["HARI", "WAKTU", "JAM KE"];
            worksheet.getRow(7).values = ["HARI", "WAKTU", "JAM KE"];
            worksheet.columns = [
              { key: "" },
              { key: "waktu" },
              { key: "jamke" },
            ];

            let isi;

            if (d.istirahat == 1) {
              let row = worksheet.addRow({
                waktu: d ? d.jamFormat : "-",
                jamke: "ISTIRAHAT",
              });
              worksheet.mergeCells(
                `C${(idx + 1) * 1 + 7}:${colName(total * 2 + 2)}${
                  (idx + 1) * 1 + 7
                }`
              );
              worksheet.addConditionalFormatting({
                ref: `B${(idx + 1) * 1 + 7}:${colName(total * 2 + 2)}${
                  (idx + 1) * 1 + 7
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
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                      fill: {
                        type: "pattern",
                        pattern: "solid",
                        bgColor: {
                          argb: "C0C0C0",
                          fgColor: { argb: "C0C0C0" },
                        },
                      },
                    },
                  },
                ],
              });
              isi = 0;
            } else {
              let row = worksheet.addRow({
                waktu: d ? d.jamFormat : "-",
                jamke: d ? d.jam_ke : "-",
              });
              // const row = worksheet.getRow(8);

              isi = await Promise.all(
                d.jadwalMengajar.map(async (e, nox) => {
                  worksheet.getColumn([`${(nox + 1) * 2 + 2}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    `${tingkat}`,
                    `${e.rombel ? e.rombel.nama : "-"}`,
                    `Mapel`,
                    ,
                  ];
                  worksheet.getColumn([`${(nox + 1) * 2 + 3}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${e.rombel ? e.rombel.nama : "-"}`,
                    `Nama Guru`,
                    ,
                  ];
                  row.getCell([`${(nox + 1) * 2 + 2}`]).value = `${
                    e.mataPelajaran ? e.mataPelajaran.nama : "-"
                  }`;
                  row.getCell([`${(nox + 1) * 2 + 3}`]).value = `${
                    e.mataPelajaran
                      ? e.mataPelajaran.user
                        ? e.mataPelajaran.user.nama
                        : "-"
                      : "-"
                  }`;
                  if (idx == jamMengajar.length - 1) {
                    if (sudahMerge <= d.jadwalMengajar.length) {
                      worksheet.mergeCells(
                        `${colName((nox + 1) * 2 + 2)}6:
                      ${colName((nox + 1) * 2 + 3)}6`
                      );

                      // worksheet.mergeCells(
                      //   `D6:
                      //   F6`
                      // );
                      sudahMerge = sudahMerge + 1;
                      // worksheet.mergeCells(
                      //   6,
                      //   `${(nox + 1) * 2 + 2}`,
                      //   6,
                      //   `${(nox + 1) * 2 + 3}`
                      // );
                    }
                  }
                  // if(nox == d.jadwalMengajar.length -1){
                  //   sudahMerge = 1;
                  // }
                  row.getCell([`${(nox + 1) * 2 + 2}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(nox + 1) * 2 + 3}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  worksheet.getColumn([`${(nox + 1) * 2 + 2}`]).fill = {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  };
                  worksheet.getColumn([`${(nox + 1) * 2 + 3}`]).fill = {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  };
                  worksheet.getColumn([`${(nox + 1) * 2 + 2}`]).width = 18;
                  worksheet.getColumn([`${(nox + 1) * 2 + 3}`]).width = 20;
                  // worksheet.getCell(`E${(nox + 1) * 1 + 8}`).value = e.nilai;
                  // worksheet.columns = [
                  //   { key: `tugas${nox+1}` },
                  // ];
                  worksheet.addConditionalFormatting({
                    ref: `B${(idx + 1) * 1 + 7}:C${(idx + 1) * 1 + 7}`,
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
                            horizontal: "center",
                          },
                        },
                      },
                    ],
                  });
                  worksheet.addConditionalFormatting({
                    ref: `${(nox + 1) * 1 + 3}`,
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
                  const awal = `${(nox + 1) * 2 + 2}`;
                  const akhir = `${(nox + 1) * 2 + 3}`;
                  // return { awal, akhir };
                })
              );
            }

            // sudahMerge = "asdas";

            if (idx == jamMengajar.length - 1) {
              worksheet.getCell("A8").value = ss.hari;
              worksheet.mergeCells(`A8:A${(idx + 1) * 1 + 7}`);
              worksheet.addConditionalFormatting({
                ref: `A8:A${(idx + 1) * 1 + 7}`,
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
                    },
                  },
                ],
              });
              worksheet.getCell(
                `A${(idx + 1) * 1 + 10}`
              ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
            }
            // return isi;
          })
        );

        worksheet.addConditionalFormatting({
          ref: `A5:${colName(total * 2 + 2)}7`,
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
                  wrapText: true,
                },
              },
            },
          ],
        });
        worksheet.mergeCells(`D5:${colName(total * 2 + 2)}5`);
        worksheet.mergeCells(`A5:A7`);
        worksheet.mergeCells(`B5:B7`);
        worksheet.mergeCells(`C5:C7`);
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = "JADWAL KEGIATAN PEMBELAJARAN";
        worksheet.getCell("A3").value = `TAHUN PELAJARAN ${ta.tahun}`;
        worksheet.mergeCells(`A1:${colName(total * 2 + 2)}1`);
        worksheet.mergeCells(`A2:${colName(total * 2 + 2)}2`);
        worksheet.mergeCells(`A3:${colName(total * 2 + 2)}3`);
        worksheet.addConditionalFormatting({
          ref: `A1:${colName(total * 2 + 2)}3`,
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
                  // textRotation: 'vertical'
                },
              },
            },
          ],
        });

        worksheet.getColumn("A").width = 9;
        worksheet.getColumn("B").width = 12;
        worksheet.getColumn("C").width = 8;
        worksheet.views = [
          {
            state: "frozen",
            xSplit: 3,
            ySplit: 7,
            topLeftCell: "A8",
            activeCell: "A8",
          },
        ];
        // return data;
      })
    );
    // return result;
    let namaFile = `/uploads/Rekap-Jadwal-Mengajar-${tingkat}-${keluarantanggalseconds}.xlsx`;
    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadImportJadwalMengajarTingkat({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const user = await auth.getUser();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const { tingkat } = request.post();

    let tingkatGet;

    if (tingkat) {
      tingkatGet = tingkat;
    } else {
      tingkatGet = tingkatRombel[0];
    }
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
      {
        id: 7,
        hari: "Minggu",
      },
    ];

    const mataPelajaran = await MMataPelajaran.query()
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const rombelIds = await MRombel.query()
      .where({ tingkat: tingkatGet })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .andWhere({ dihapus: 0 })
      .ids();
    let workbook = new Excel.Workbook();

    const result = await Promise.all(
      hari.map(async (ss) => {
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
          .andWhere({ kode_hari: ss.id })
          .andWhere({ m_ta_id: ta.id })
          .fetch();

        if (!jamMengajar.toJSON()[0]) {
          return;
        }

        const total = jamMengajar.toJSON()[0].jadwalMengajar.length;

        let worksheet = workbook.addWorksheet(`${ss.hari}`);

        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = "JADWAL KEGIATAN PEMBELAJARAN";
        worksheet.getCell("A3").value = `TAHUN PELAJARAN ${ta.tahun}`;

        // worksheet.getCell(
        //   "A6"
        // ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

        // return jamMengajar.toJSON().length;
        // return total;

        let sudahMerge;
        // add column headers
        const data = await Promise.all(
          jamMengajar.toJSON().map(async (d, idx) => {
            worksheet.getRow(5).values = [
              "HARI",
              "WAKTU",
              "JAM KE",
              `${tingkat}`,
            ];
            worksheet.getRow(6).values = ["HARI", "WAKTU", "JAM KE"];
            worksheet.getRow(7).values = ["HARI", "WAKTU", "JAM KE"];
            worksheet.columns = [
              { key: "" },
              { key: "waktu" },
              { key: "jamke" },
            ];

            let isi;

            if (d.istirahat == 1) {
              let row = worksheet.addRow({
                waktu: d ? d.jamFormat : "-",
                jamke: "ISTIRAHAT",
              });
              worksheet.mergeCells(
                `C${(idx + 1) * 1 + 7}:${colName(total * 1 + 2)}${
                  (idx + 1) * 1 + 7
                }`
              );
              worksheet.addConditionalFormatting({
                ref: `B${(idx + 1) * 1 + 7}:${colName(total * 1 + 2)}${
                  (idx + 1) * 1 + 7
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
                        size: 11,
                        // bold: true,
                      },
                      alignment: {
                        vertical: "middle",
                        horizontal: "center",
                      },
                      fill: {
                        type: "pattern",
                        pattern: "solid",
                        bgColor: {
                          argb: "C0C0C0",
                          fgColor: { argb: "C0C0C0" },
                        },
                      },
                    },
                  },
                ],
              });
              isi = 0;
            } else {
              let row = worksheet.addRow({
                waktu: d ? d.jamFormat : "-",
                jamke: d ? d.jam_ke : "-",
              });
              // const row = worksheet.getRow(8);
              isi = await Promise.all(
                d.jadwalMengajar.map(async (e, nox) => {
                  worksheet.getColumn([`${(nox + 1) * 1 + 3}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    `${tingkat}`,
                    `${e.rombel ? e.rombel.nama : "-"}`,
                    `Id Mapel`,
                    ,
                  ];
                  row.getCell([`${(nox + 1) * 1 + 3}`]).value = `${
                    e.mataPelajaran ? e.mataPelajaran.id : "-"
                  }`;
                  // if(nox == d.jadwalMengajar.length -1){
                  //   sudahMerge = 1;
                  // }

                  row.getCell([`${(nox + 1) * 1 + 3}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  worksheet.getColumn([`${(nox + 1) * 1 + 3}`]).fill = {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: {
                      argb: "C0C0C0",
                      fgColor: { argb: "C0C0C0" },
                    },
                  };
                  worksheet.getColumn(colName((nox + 1) * 1 + 3)).width = 20;
                  // worksheet.getCell(`E${(nox + 1) * 1 + 8}`).value = e.nilai;
                  // worksheet.columns = [
                  //   { key: `tugas${nox+1}` },
                  // ];
                  worksheet.addConditionalFormatting({
                    ref: `B${(idx + 1) * 1 + 7}:C${(idx + 1) * 1 + 7}`,
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
                            horizontal: "center",
                          },
                        },
                      },
                    ],
                  });
                  worksheet.addConditionalFormatting({
                    ref: `${(nox + 1) * 1 + 3}`,
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
                  // return { awal, akhir };
                })
              );
            }

            // sudahMerge = "asdas";

            if (idx == jamMengajar.toJSON().length - 1) {
              worksheet.getCell("A8").value = ss.hari;
              worksheet.mergeCells(`A8:A${(idx + 1) * 1 + 7}`);
              worksheet.addConditionalFormatting({
                ref: `A8:A${(idx + 1) * 1 + 7}`,
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
                    },
                  },
                ],
              });
              const data112 = await Promise.all(
                mataPelajaran.toJSON().map(async (mata) => {
                  worksheet.getRow((idx + 1) * 1 + 11).values = [
                    "ID",
                    "Mata Pelajaran",
                    "Nama Guru",
                  ];
                  worksheet.columns = [
                    { key: "id" },
                    { key: "mapel" },
                    { key: "nama" },
                  ];

                  let row = worksheet.addRow({
                    id: mata ? mata.id : "-",
                    mapel: mata ? mata.nama : "-",
                    nama: mata.user ? mata.user.nama : "-",
                  });
                })
              );
              worksheet.addConditionalFormatting({
                ref: `A${(idx + 1) * 1 + 11}:C${(idx + 1) * 1 + 11}`,
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
                        // textRotation: 90,
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
                ref: `A${(idx + 1) * 1 + 12}:C${
                  (idx + 1) * 1 + 11 + mataPelajaran.toJSON().length
                }`,
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
                        horizontal: "left",
                        // textRotation: 90,
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
            // return isi;
          })
        );

        worksheet.addConditionalFormatting({
          ref: `A5:${colName(total * 1 + 2)}7`,
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
                  wrapText: true,
                },
              },
            },
          ],
        });
        worksheet.mergeCells(`D5:${colName(total * 1 + 2)}5`);
        worksheet.mergeCells(`A5:A7`);
        worksheet.mergeCells(`B5:B7`);
        worksheet.mergeCells(`C5:C7`);
        worksheet.getCell("A1").value = sekolah.nama;
        worksheet.getCell("A2").value = "JADWAL KEGIATAN PEMBELAJARAN";
        worksheet.getCell("A3").value = `TAHUN PELAJARAN ${ta.tahun}`;
        worksheet.mergeCells(`A1:${colName(total * 1 + 2)}1`);
        worksheet.mergeCells(`A2:${colName(total * 1 + 2)}2`);
        worksheet.mergeCells(`A3:${colName(total * 1 + 2)}3`);
        worksheet.addConditionalFormatting({
          ref: `A1:${colName(total * 1 + 2)}3`,
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
                  // textRotation: 'vertical'
                },
              },
            },
          ],
        });

        worksheet.getColumn("A").width = 9;
        worksheet.getColumn("B").width = 12;
        worksheet.getColumn("C").width = 8;
        for (let i = 4; i <= 100; i++) {
          worksheet.getColumn(i).width = 20;
        }
        worksheet.views = [
          {
            state: "frozen",
            xSplit: 3,
            ySplit: 7,
            topLeftCell: "A8",
            activeCell: "A8",
          },
        ];
        // return data;
      })
    );
    // return result;
    let namaFile = `/uploads/Rekap-Jadwal-Mengajar-${tingkat}-${keluarantanggalseconds}.xlsx`;
    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
  async importJadwalMengajarServices(filelocation, response, sekolah, ta) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);
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
    const semuaJam = await MJamMengajar.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();

    const semuaRombel = await MRombel.query()
      .where({ dihapus: 0 })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id })
      .fetch();
    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_ta_id: ta.id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();
    let DataBelum = [];
    const semuaMateri = await MMateri.query()
      .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
      .andWhere({ dihapus: 0 })
      .fetch();

    for await (const ss of hari) {
      // const ss = hari[no];
      let explanation = workbook.getWorksheet(`${ss.hari}`);

      let colCommentJam = explanation.getColumn("A");

      let colComment = explanation.getRow(6);
      const jamTotal = semuaJam
        .toJSON()
        .filter((d) => d.hari == ss.hari).length;

      // return jamTotal;
      // return colComment

      // return dataKelas;
      let data = [];
      colComment.eachCell(async (cell, rowNumber) => {
        if (rowNumber > 3) {
          colCommentJam.eachCell(async (cell, rowNumberJam) => {
            if (rowNumberJam >= 8 && rowNumberJam <= jamTotal + 7) {
              if (
                explanation.getCell("C" + rowNumberJam).value &&
                explanation.getCell("C" + rowNumberJam).value != "ISTIRAHAT"
              ) {
                data.push({
                  kelas: explanation.getCell(colName(rowNumber - 1) + 6).value,
                  jam_mulai: explanation
                    .getCell("B" + rowNumberJam)
                    .value.slice(0, 5),
                  jam_selesai: explanation
                    .getCell("B" + rowNumberJam)
                    .value.slice(8, 14),

                  jam_ke: explanation.getCell("C" + rowNumberJam).value,
                  mapel: explanation.getCell(
                    colName(rowNumber - 1) + rowNumberJam
                  ).value,
                });
              }
              // dataKelas.push({
              // });
            }
          });
        }
      });
      // return data;
      let janganUlangMateri = [];

      const result = await Promise.all(
        data.map(async (d) => {
          const jam = semuaJam.toJSON().find((c) => {
            return (
              c.jam_ke == d.jam_ke &&
              c.hari == ss.hari &&
              c.jam_mulai == `${d.jam_mulai}:00` &&
              c.jam_selesai == `${d.jam_selesai}:00`
            );
          });

          // return jam;

          // const rombel = await MRombel.query()
          //   .where({ nama: d.kelas })
          //   .where({ m_ta_id: ta.id })
          //   .andWhere({ m_sekolah_id: sekolah.id })
          //   .first();
          const rombel = semuaRombel.toJSON().find((c) => c.nama == d.kelas);

          // return rombel

          let kosongkan;
          if (d.mapel == "-") {
            kosongkan = 1;
          }
          let jadwalMengajar;
          // const kosongkan = d.mapel;
          if (!kosongkan) {
            const checkKategoriMapel = await MKategoriMapel.query()
              .where({ m_rombel_id: rombel.id })
              .first();

            if (!checkKategoriMapel) {
              await MKategoriMapel.create({
                nama: "Muatan Nasional",
                dihapus: 0,
                m_rombel_id: rombel.id,
              });
              await MKategoriMapel.create({
                nama: "Muatan Kewilayahan",
                dihapus: 0,
                m_rombel_id: rombel.id,
              });
              await MKategoriMapel.create({
                nama: "Muatan Peminatan Kejurusan",
                dihapus: 0,
                m_rombel_id: rombel.id,
              });
            }
          }

          if (kosongkan) {
            const jadwal = await MJadwalMengajar.query()
              .where({ m_rombel_id: rombel.id })
              .andWhere({ m_jam_mengajar_id: jam.id })
              .andWhere({ m_ta_id: ta.id })
              .first();

            jadwalMengajar = await MJadwalMengajar.query()
              .where({ id: jadwal.id })
              .update({
                m_mata_pelajaran_id: null,
                diubah: 1,
              });

            const stillTeaching = await MJadwalMengajar.query()
              .where({ m_mata_pelajaran_id: jadwal.m_mata_pelajaran_id })
              .andWhere({ m_rombel_id: jadwal.m_rombel_id })
              .first();

            if (
              jadwal.m_rombel_id &&
              jadwal.m_mata_pelajaran_id &&
              !stillTeaching
            ) {
              const kategoriMapel = await MKategoriMapel.query()
                .where({ m_rombel_id: jadwal.m_rombel_id })
                .fetch();

              const checkTkMapel = await TkMapelRapor.query()
                .where({ m_mata_pelajaran_id: jadwal.m_mata_pelajaran_id })
                .whereIn(
                  "m_kategori_mapel_id",
                  kategoriMapel.toJSON().map((item) => item.id)
                )
                .first();

              if (checkTkMapel) {
                await TkMapelRapor.query()
                  .where({
                    m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id,
                  })
                  .andWhere({ m_mata_pelajaran_id: jadwal.m_mata_pelajaran_id })
                  .delete();
              }
            }

            // return response.ok({
            //   message: messagePutSuccess,
            // });
          } else {
            const jadwalAwal = await MJadwalMengajar.query()
              .where({ m_rombel_id: rombel.id })
              .andWhere({ m_jam_mengajar_id: jam.id })
              .andWhere({ m_ta_id: ta.id })
              .first();

            const kategoriMapel = await MKategoriMapel.query()
              .where({ m_rombel_id: rombel.id })
              .fetch();

            const checkTkMapel = await TkMapelRapor.query()
              .where({
                m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id || d.mapel,
              })
              .whereIn(
                "m_kategori_mapel_id",
                kategoriMapel.toJSON().map((item) => item.id)
              )
              .first();

            const mapel = await MMataPelajaran.query()
              .where({ id: d.mapel })
              .first();

            if (!checkTkMapel) {
              await TkMapelRapor.create({
                m_mata_pelajaran_id: d.mapel,
                nama: mapel.nama,
                kkm2: mapel.kkm,
                m_kategori_mapel_id: kategoriMapel.toJSON()[0].id,
                dihapus: 0,
                urutan: 1,
              });
            } else {
              const tkExist = await TkMapelRapor.query()
                .whereIn(
                  "m_kategori_mapel_id",
                  kategoriMapel.toJSON().map((item) => item.id)
                )
                .where({ m_mata_pelajaran_id: d.mapel })
                .first();
              if (tkExist) {
                const stillTeaching = await MJadwalMengajar.query()
                  .where({
                    m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id,
                  })
                  .andWhere({ m_rombel_id: rombel.id })
                  .first();
                if (!stillTeaching) {
                  await TkMapelRapor.query()
                    .where({
                      m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id,
                    })
                    .andWhere({
                      m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id,
                    })
                    .delete();
                }
              } else {
                await TkMapelRapor.query()
                  .where({
                    m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id,
                  })
                  .andWhere({
                    m_mata_pelajaran_id: jadwalAwal.m_mata_pelajaran_id,
                  })
                  .update({
                    m_mata_pelajaran_id: d.mapel,
                    m_kategori_mapel_id: checkTkMapel.m_kategori_mapel_id,
                    nama: mapel.nama,
                    kkm2: mapel.kkm,
                  });
              }
            }
            try {
              jadwalMengajar = await MJadwalMengajar.query()
                .where({ m_rombel_id: rombel.id })
                .andWhere({ m_jam_mengajar_id: jam.id })
                .andWhere({ m_ta_id: ta.id })
                .update({
                  m_mata_pelajaran_id: d.mapel,
                  diubah: 1,
                });
            } catch (err) {
              DataBelum.push({ rombel, jam, ta });
            }
            const mataPelajaran = await MMataPelajaran.query()
              .where({ id: d.mapel })
              .first();

            // if (mataPelajaran) {
            const check = await MMateri.query()
              .where({ m_mata_pelajaran_id: mataPelajaran.id })
              .andWhere({ tingkat: rombel.tingkat })
              .first();
            // if (
            //   !janganUlangMateri.find(
            //     (e) =>
            //       e.tingkat == rombel.tingkat &&
            //       e.m_mata_pelajaran_id == mataPelajaran.id &&
            //       e.dihapus == 0
            //   )
            // ) {
            if (check) {
              if (check.dihapus) {
                await MMateri.query()
                  .where({ id: check.id })
                  .update({ dihapus: 0 });
              }
            }

            if (!check) {
              const materi = await MMateri.create({
                tingkat: rombel.tingkat,
                m_mata_pelajaran_id: mataPelajaran.id,
              });

              await TkMateriRombel.create({
                m_materi_id: materi.id,
                m_rombel_id: rombel.id,
              });
            } else {
              const checkTk = await TkMateriRombel.query()
                .where({ m_materi_id: check.id })
                .andWhere({ m_rombel_id: rombel.id })
                .first();
              if (!checkTk) {
                await TkMateriRombel.create({
                  m_materi_id: check.id,
                  m_rombel_id: rombel.id,
                });
              }
            }

            janganUlangMateri.push({
              m_mata_pelajaran_id: mataPelajaran.id,
              tingkat: rombel.tingkat,
              dihapus: 0,
              // data: d,
            });
            return;
            // }
            // }
          }

          return;
        })
      );
      // return result;
    }
    return DataBelum;
  }

  async importJadwalMengajar({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }
    const ta = await this.getTAAktif(sekolah);

    let file = request.file("file");
    let fname = `import-excel.xlsx`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importJadwalMengajarServices(
      `tmp/uploads/${fname}`,
      response,
      sekolah,
      ta
    );
  }

  async getDataAbsenWalas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const ta = await this.getTAAktif(sekolah);

    let { tanggal, page, rombel_id, search } = request.get();

    page = page ? parseInt(page) : 1;

    const awal = moment().format("YYYY-MM-DD 00:00:00");
    const akhir = moment().format("YYYY-MM-DD 23:59:59");

    const anggotaRombelIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: rombel_id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    let absenUser;
    absenUser = User.query()
      .with("absen", (builder) => {
        builder.where("created_at", "like", `%${tanggal}%`);
      })
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ role: "siswa" })
      .whereIn("id", anggotaRombelIds);
    if (search) {
      absenUser.andWhere("nama", "like", `%${search}%`);
    }

    absenUser = await absenUser.fetch();
    const absen = await MAbsen.query()
      .where({ role: "siswa" })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereBetween("created_at", [awal, akhir])
      .whereIn("m_user_id", anggotaRombelIds)
      .fetch();

    let total;
    total = User.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ role: "siswa" })
      .whereIn("id", anggotaRombelIds);

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
  }

  async getTimelineWalas({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);
    const user = await auth.getUser();

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const {
      m_mata_pelajaran_id,
      absen,
      m_jadwal_mengajar_id,
      hari_ini,
      waktu_saat_ini,
      waktu_mulai,
      waktu_selesai,
    } = request.get();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("rombel")
      .with("mataPelajaran")
      .where({ id: m_jadwal_mengajar_id })
      .first();

    let mapelIds;
    mapelIds = MJadwalMengajar.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .whereNotNull("m_mata_pelajaran_id");

    if (m_mata_pelajaran_id) {
      mapelIds.where({ m_mata_pelajaran_id });
    }

    mapelIds = await mapelIds.pluck("m_mata_pelajaran_id");

    const mapelKelas = await MMataPelajaran.query()
      .whereIn("id", mapelIds)
      .fetch();

    const tanggalBerlangsung = [];

    let timeline;

    // const tugasIds = await MTugas.query()
    //   .where({ m_user_id: user.id })
    //   .andWhere({ dihapus: 0 })
    //   .ids();

    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
      .andWhere({ dihapus: 0 })
      .pluck("m_user_id");

    const timelineLainnya = await MTimeline.query()
      .whereNull("m_mata_pelajaran_id")
      .andWhere({ dihapus: 0 })
      .andWhere("m_rombel_id", jadwalMengajar.toJSON().rombel.id)
      .whereIn("m_user_id", userIds)
      .ids();

    const timeline1 = await MTimeline.query()
      .with("tugas", (builder) => {
        builder
          .with("soal", (builder) => {
            builder.where({ dihapus: 0 }).with("soal");
          })
          .with("timeline", (builder) => {
            builder.with("rombel").with("tkTimeline");
          });
      })
      .with("mataPelajaran", (builder) => {
        builder.with("materi", (builder) => {
          builder.with("bab");
        });
      })
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .with("materi", (builder) => {
        builder
          .with("bab")
          .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
            builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
          });
      })
      .with("komen", (builder) => {
        builder
          .with("user", (builder) => {
            builder.select("id", "nama");
          })
          .where({ dihapus: 0 });
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
      .whereNull("m_mata_pelajaran_id")
      .whereIn("m_mata_pelajaran_id", mapelIds)
      .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
      .andWhere({ dihapus: 0 })
      // .whereIn("m_tugas_id", tugasIds)
      .orWhereIn("id", timelineLainnya)
      .orderBy("id", "desc")
      .fetch();

    const timeline2 = await MTimeline.query()
      .with("tugas", (builder) => {
        builder
          .with("soal", (builder) => {
            builder.where({ dihapus: 0 }).with("soal");
          })
          .with("timeline", (builder) => {
            builder.with("rombel").with("tkTimeline");
          });
      })
      .with("mataPelajaran", (builder) => {
        builder.with("materi", (builder) => {
          builder.with("bab");
        });
      })
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .with("materi", (builder) => {
        builder
          .with("bab")
          .withCount("materiKesimpulan as totalKesimpulan", (builder) => {
            builder.whereIn("m_user_id", userIds).whereNotNull("kesimpulan");
          });
      })
      .with("komen", (builder) => {
        builder.with("user").where({ dihapus: 0 });
      })
      .withCount("tkTimeline as total_respon", (builder) => {
        builder.where({ dikumpulkan: 1 });
        // .whereNotNull("waktu_pengumpulan");
      })
      .withCount("tkTimeline as total_absen", (builder) => {
        builder.whereNotNull("waktu_absen");
      })
      .withCount("tkTimeline as total_siswa")
      .withCount("komen as total_komen", (builder) => {
        builder.where({ dihapus: 0 });
      })
      .whereNotNull("m_mata_pelajaran_id")
      // .andWhere({
      //   m_mata_pelajaran_id: jadwalMengajar.toJSON().mataPelajaran.id,
      // })
      .whereIn("m_mata_pelajaran_id", mapelIds)
      .andWhere({ m_rombel_id: jadwalMengajar.toJSON().rombel.id })
      // .andWhere({ m_user_id: user.id })
      .andWhere({ dihapus: 0 })
      // .whereIn("m_tugas_id", tugasIds)
      .orderBy("id", "desc")
      .fetch();
    // return timeline2;

    timeline = [...timeline2.toJSON(), ...timeline1.toJSON()].filter((d) => {
      let dibagikan = d.tanggal_pembagian;
      if (d.tipe == "tugas") {
        dibagikan = d.tugas.tanggal_pembagian;
      }
      if (waktu_mulai && waktu_selesai) {
        return (
          moment(dibagikan) > moment(waktu_mulai).startOf("day") &&
          moment(dibagikan) < moment(waktu_selesai).startOf("day")
        );
      } else {
        return 1;
      }
    });

    // await Promise.all(
    //   timeline.map((d) => {
    //     const data = { ...d, bab: d.materi.map((e) => e.bab) };

    //     let dibagikan = d.tanggal_pembagian;
    //     if (d.tipe == "tugas") {
    //       dibagikan = d.tugas.tanggal_pembagian;
    //     }

    //     if (moment(dibagikan).toDate() > moment().toDate()) {
    //       terjadwal.push(data);
    //     } else {
    //       if (d.tipe == "tugas") {
    //         if (
    //           d.__meta__.total_respon >= d.__meta__.total_siswa &&
    //           !tanggalBerlangsung.includes(
    //             moment(dibagikan).format("YYYY-MM-DD")
    //           )
    //         ) {
    //           selesai.push(data);
    //         } else {
    //           if (
    //             !tanggalBerlangsung.includes(
    //               moment(dibagikan).format("YYYY-MM-DD")
    //             )
    //           ) {
    //             tanggalBerlangsung.push(moment(dibagikan).format("YYYY-MM-DD"));
    //           }
    //           berlangsung.push(data);
    //         }
    //       } else if (d.tipe == "absen") {
    //         if (
    //           moment(d.tanggal_akhir).toDate() < moment().toDate() &&
    //           !tanggalBerlangsung.includes(
    //             moment(dibagikan).format("YYYY-MM-DD")
    //           )
    //         ) {
    //           selesai.push(data);
    //         } else {
    //           if (
    //             !tanggalBerlangsung.includes(
    //               moment(dibagikan).format("YYYY-MM-DD")
    //             )
    //           ) {
    //             tanggalBerlangsung.push(moment(dibagikan).format("YYYY-MM-DD"));
    //           }
    //           berlangsung.push(data);
    //         }
    //       } else if (d.tipe == "materi") {
    //         if (
    //           d.materi[0].__meta__.totalKesimpulan >= d.__meta__.total_siswa &&
    //           !tanggalBerlangsung.includes(
    //             moment(dibagikan).format("YYYY-MM-DD")
    //           )
    //         ) {
    //           selesai.push(data);
    //         } else {
    //           if (
    //             !tanggalBerlangsung.includes(
    //               moment(dibagikan).format("YYYY-MM-DD")
    //             )
    //           ) {
    //             tanggalBerlangsung.push(moment(dibagikan).format("YYYY-MM-DD"));
    //           }
    //           berlangsung.push(data);
    //         }
    //       }
    //     }
    //     return 1;
    //   })
    // );

    return response.ok({
      timeline,
      // berlangsung: timeline.filter((d) => {
      //   let dibagikan = d.tanggal_pembagian;
      //   if (d.tipe == "tugas") {
      //     dibagikan = d.tugas.tanggal_pembagian;
      //   }
      //   dibagikan = moment(dibagikan).format("YYYY-MM-DD");
      //   return tanggalBerlangsung.includes(dibagikan);
      // }),
      // selesai: timeline.filter((d) => {
      //   let dibagikan = d.tanggal_pembagian;
      //   if (d.tipe == "tugas") {
      //     dibagikan = d.tugas.tanggal_pembagian;
      //   }
      //   dibagikan = moment(dibagikan).format("YYYY-MM-DD");
      //   return !tanggalBerlangsung.includes(dibagikan);
      // }),
    });
  }

  async downloadRombelPassword({ response, request, auth }) {
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

    const { rombel_id } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const query = MRombel.query()
      .with("user")
      .with("anggotaRombel", (builder) => {
        builder.where({ dihapus: 0 }).with("user");
      })
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ m_ta_id: ta.id });

    const rombel = rombel_id
      ? await query.where({ id: rombel_id }).fetch()
      : await query.fetch();

    let workbook = new Excel.Workbook();
    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    await Promise.all(
      rombel.toJSON().map(async (d, idx) => {
        let worksheet = workbook.addWorksheet(`${idx + 1}.${d.nama}`);
        worksheet.getCell("A1").value = "Rekap Data Siswa";
        worksheet.getCell("A2").value = sekolah.nama;
        worksheet.getCell("A3").value = ta.tahun;
        worksheet.getCell("A4 ").value = d.nama;
        worksheet.getCell(
          "A6"
        ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
        worksheet.addConditionalFormatting({
          ref: `A1:F4`,
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
        worksheet.mergeCells(`A1:F1`);
        worksheet.mergeCells(`A2:F2`);
        worksheet.mergeCells(`A3:F3`);
        worksheet.mergeCells(`A4:F4`);
        worksheet.addConditionalFormatting({
          ref: `A7:F7`,
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
              ref: `B${(idx + 1) * 1 + 7}:F${(idx + 1) * 1 + 7}`,
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
              "Email",
              "Gender",
              "Jabatan",
              "Password",
            ];

            worksheet.columns = [
              { key: "no" },
              { key: "user" },
              { key: "whatsapp" },
              { key: "email" },
              { key: "gender" },
              { key: "jabatan" },
              { key: "password" },
            ];

            const pwBaru = makeid(8);
            await User.query()
              .where({ id: anggota.user.id })
              .update({ password: await Hash.make(pwBaru) });

            // Add row using key mapping to columns
            let row = worksheet.addRow({
              no: `${idx + 1}`,
              user: anggota.user ? anggota.user.nama : "-",
              whatsapp: anggota.user ? anggota.user.whatsapp : "-",
              email: anggota.user ? anggota.user.email : "-",
              gender: anggota.user ? anggota.user.gender : "-",
              jabatan: anggota ? anggota.role : "-",
              password: pwBaru,
            });
          })
        );
      })
    );
    let namaFile = `/uploads/rekap-rombel-${rombel
      .toJSON()
      .map((d) => d.nama)
      .join(" ")}-${Date.now()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async updateBukuIndukRapor({
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

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: ta.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const semuaMapel = await MMataPelajaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .fetch();

    const rombelAktif = await MRombel.query().where({ id: rombel_id }).first();

    const dataRombelIds = await MRombel.query()
      .where({ nama: rombelAktif.nama })
      .andWhere({ tingkat: rombelAktif.tingkat })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .whereNot("id", rombel_id)
      .ids();

    await MKategoriMapel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_rombel_id: rombel_id })
      .update({ dihapus: 1 });

    const dataKategori = await MKategoriMapel.query()
      .with("mapelRapor", (builder) => {
        builder
          .with("mataPelajaran")
          // .where({ dihapus: 0 })
          .orderBy("urutan", "asc");
      })
      .where({ dihapus: 0 })
      .whereIn("m_rombel_id", dataRombelIds)
      .fetch();

    await Promise.all(
      dataKategori.toJSON().map(async (d, idx) => {
        const kategoriBaru = await MKategoriMapel.create({
          nama: d.nama,
          warna: d.warna,
          m_rombel_id: rombel_id,
          dihapus: 0,
        });
        await Promise.all(
          d.mapelRapor.map(async (e) => {
            const mapelBaru = semuaMapel.toJSON().find((s) => {
              return (
                s.nama == e.mataPelajaran.nama &&
                s.kelompok == e.mataPelajaran.kelompok &&
                s.kkm == e.mataPelajaran.kkm &&
                s.dihapus == e.mataPelajaran.dihapus &&
                s.m_user_id == e.mataPelajaran.m_user_id &&
                s.m_ta_id == ta.id &&
                s.m_sekolah_id == sekolah.id
              );
            });

            await TkMapelRapor.create({
              nama: mapelBaru ? mapelBaru.nama : "-",
              kkm2: e.kkm2 ? e.kkm2 : "0",
              m_mata_pelajaran_id: mapelBaru ? mapelBaru.id : null,
              m_kategori_mapel_id: kategoriBaru.id,
              m_predikat_nilai_id: e.m_predikat_nilai_id
                ? e.m_predikat_nilai_id
                : null,
              dihapus: 0,
              urutan: e.urutan ? e.urutan : "0",
            });
          })
        );
      })
    );

    return `sukses`;
  }

  async updateSemuaBukuIndukRapor({ response, request, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    const tahunPelajaranIds = await Mta.query()
      .where({ tahun: ta.tahun })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .ids();

    const semuaMapel = await MMataPelajaran.query()
      .where({ dihapus: 0 })
      .andWhere({ m_sekolah_id: sekolah.id })
      .whereIn("m_ta_id", tahunPelajaranIds)
      .fetch();

    const rombelAktifIds = await MRombel.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .andWhere({ m_ta_id: ta.id })
      .ids();

    await Promise.all(
      rombelAktifIds.map(async (rombel_id) => {
        const rombelAktif = await MRombel.query()
          .where({ id: rombel_id })
          .first();

        const dataRombelIds = await MRombel.query()
          .where({ nama: rombelAktif.nama })
          .andWhere({ tingkat: rombelAktif.tingkat })
          .andWhere({ m_sekolah_id: sekolah.id })
          .whereIn("m_ta_id", tahunPelajaranIds)
          .whereNot("id", rombel_id)
          .ids();

        await MKategoriMapel.query()
          .where({ dihapus: 0 })
          .andWhere({ m_rombel_id: rombel_id })
          .update({ dihapus: 1 });

        const dataKategori = await MKategoriMapel.query()
          .with("mapelRapor", (builder) => {
            builder
              .with("mataPelajaran")
              // .where({ dihapus: 0 })
              .orderBy("urutan", "asc");
          })
          .where({ dihapus: 0 })
          .whereIn("m_rombel_id", dataRombelIds)
          .fetch();

        await Promise.all(
          dataKategori.toJSON().map(async (d, idx) => {
            const kategoriBaru = await MKategoriMapel.create({
              nama: d.nama,
              warna: d.warna,
              m_rombel_id: rombel_id,
              dihapus: 0,
            });
            await Promise.all(
              d.mapelRapor.map(async (e) => {
                const mapelBaru = semuaMapel.toJSON().find((s) => {
                  return (
                    s.nama == e.mataPelajaran.nama &&
                    s.kelompok == e.mataPelajaran.kelompok &&
                    s.kkm == e.mataPelajaran.kkm &&
                    s.dihapus == e.mataPelajaran.dihapus &&
                    s.m_user_id == e.mataPelajaran.m_user_id &&
                    s.m_ta_id == ta.id &&
                    s.m_sekolah_id == sekolah.id
                  );
                });

                await TkMapelRapor.create({
                  nama: mapelBaru ? mapelBaru.nama : "-",
                  kkm2: e.kkm2 ? e.kkm2 : "0",
                  m_mata_pelajaran_id: mapelBaru ? mapelBaru.id : null,
                  m_kategori_mapel_id: kategoriBaru.id,
                  m_predikat_nilai_id: e.m_predikat_nilai_id
                    ? e.m_predikat_nilai_id
                    : null,
                  dihapus: 0,
                  urutan: e.urutan ? e.urutan : "0",
                });
              })
            );
          })
        );
      })
    );
    return `sukses`;
  }
  async downloadKeteranganPkl({
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

    const user = await auth.getUser();

    let { tipe } = request.post();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();
    const rombel = await MRombel.query()
      .select("id", "nama")
      .where({ id: rombel_id })
      .first();

    const anggotaRombel = await MAnggotaRombel.query()
      .with("user", (builder) => {
        builder.select("id", "nama", "whatsapp");
      })
      .where({ m_rombel_id: rombel_id })
      .andWhere({ dihapus: 0 })
      .fetch();

    const perusahaanIds = await TkPerusahaanSekolah.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const perusahaan = await MPerusahaan.query()
      .whereIn("id", perusahaanIds)
      .andWhere({ dihapus: 0 })
      .fetch();

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`sheet1`);
    worksheet.mergeCells("A1:H1");
    worksheet.mergeCells("A2:H2");
    worksheet.getCell("A1").value = "Import Keterangan PKL";
    worksheet.getCell("A2").value = sekolah.nama;
    worksheet.getCell("I4").value = "Catatan : ";
    worksheet.getCell("J4").value =
      "Id Perusahaan diisi dengan Id yang sudah disediakan";
    worksheet.getCell(
      "A3"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.addConditionalFormatting({
      ref: "A1:H2",
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
      ref: "A4:H4",
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
    const panjang = anggotaRombel.toJSON().length + 4;
    // return panjang
    await Promise.all(
      anggotaRombel
        .toJSON()
        .sort((a, b) => ("" + a.user.nama).localeCompare(b.user.nama))
        .map(async (d, idx) => {
          const keterangan = await MKeteranganPkl.query()
            .where({ dihapus: 0 })
            .andWhere({ m_ta_id: ta.id })
            .andWhere({ m_user_id: d.m_user_id })
            .first();

          const user = await User.query().where({ id: d.m_user_id }).first();

          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 4}:H${(idx + 1) * 1 + 4}`,
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
            "Perusahaan",
            "Lokasi Perusahaan",
            "Tanggal Mulai",
            "Tanggal Selesai",
            "Keterangan",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "nama" },
            { key: "whatsapp" },
            { key: "id_perusahaan" },
            { key: "lokasi_perusahaan" },
            { key: "tanggal_mulai" },
            { key: "tanggal_selesai" },
            { key: "keterangan" },
          ];

          // Add row using key mapping to columns
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nama: user ? user.nama : "-",
            whatsapp: user ? user.whatsapp : "-",
            id_perusahaan: keterangan ? keterangan.namamitra : "",
            lokaksi_perusahaan: keterangan ? keterangan.lokasi_perusahaan : "",
            tanggal_mulai: keterangan
              ? moment(keterangan.tanggal_mulai).format("YYYY-MM-DD")
              : "",
            tanggal_selesai: keterangan
              ? moment(keterangan.tanggal_selesai).format("YYYY-MM-DD")
              : "",
            keterangan: keterangan ? keterangan.keterangan : "",
          });
        })
    );

    // worksheet.addConditionalFormatting({
    //   ref: `A${panjang + 2}:C${panjang + 2}`,
    //   rules: [
    //     {
    //       type: "expression",
    //       formulae: ["MOD(ROW()+COLUMN(),1)=0"],
    //       style: {
    //         font: {
    //           name: "Times New Roman",
    //           family: 4,
    //           size: 12,
    //           bold: true,
    //         },
    //         fill: {
    //           type: "pattern",
    //           pattern: "solid",
    //           bgColor: { argb: "C0C0C0", fgColor: { argb: "C0C0C0" } },
    //         },
    //         alignment: {
    //           vertical: "middle",
    //           horizontal: "center",
    //         },
    //         border: {
    //           top: { style: "thin" },
    //           left: { style: "thin" },
    //           bottom: { style: "thin" },
    //           right: { style: "thin" },
    //         },
    //       },
    //     },
    //   ],
    // });

    // await Promise.all(
    //   perusahaan.toJSON().map(async (d, idx) => {
    //     worksheet.addConditionalFormatting({
    //       ref: `B${(idx + 1 + panjang) * 1 + 2}:C${(idx + 1) * 1 + 2}`,
    //       rules: [
    //         {
    //           type: "expression",
    //           formulae: ["MOD(ROW()+COLUMN(),1)=0"],
    //           style: {
    //             font: {
    //               name: "Times New Roman",
    //               family: 4,
    //               size: 11,
    //               // bold: true,
    //             },
    //             alignment: {
    //               vertical: "middle",
    //               horizontal: "left",
    //             },
    //             border: {
    //               top: { style: "thin" },
    //               left: { style: "thin" },
    //               bottom: { style: "thin" },
    //               right: { style: "thin" },
    //             },
    //           },
    //         },
    //       ],
    //     });
    //     worksheet.addConditionalFormatting({
    //       ref: `A${(idx + 1) * 1 + 2 + panjang}`,
    //       rules: [
    //         {
    //           type: "expression",
    //           formulae: ["MOD(ROW()+COLUMN(),1)=0"],
    //           style: {
    //             font: {
    //               name: "Times New Roman",
    //               family: 4,
    //               size: 11,
    //               // bold: true,
    //             },
    //             alignment: {
    //               vertical: "middle",
    //               horizontal: "center",
    //             },
    //             border: {
    //               top: { style: "thin" },
    //               left: { style: "thin" },
    //               bottom: { style: "thin" },
    //               right: { style: "thin" },
    //             },
    //           },
    //         },
    //       ],
    //     });

    //     // add column headers
    //     worksheet.getRow(2 + panjang).values = ["Id", "Nama", "Bidang"];
    //     worksheet.columns = [{ key: "id" }, { key: "nama" }, { key: "bidang" }];

    //     // Add row using key mapping to columns
    //     let row = worksheet.addRow({
    //       id: d ? d.id : "-",
    //       nama: d ? d.nama : "-",
    //       bidang: d ? d.bidang : "",
    //     });
    //   })
    // );
    // worksheet.getCell("I4").value = "Catatan : ";
    // worksheet.getCell("J4").value =
    //   "Id Perusahaan diisi dengan Id yang sudah disediakan";
    let namaFile = `/uploads/rekap-Keterangan-PKL-${rombel.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async importKeteranganPklServices(filelocation, sekolah, ta) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let explanation = workbook.getWorksheet("sheet1");

    let colComment = explanation.getColumn("A");

    let data = [];

    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber > 4) {
        data.push({
          nama: explanation.getCell("B" + rowNumber).value,
          whatsapp: explanation.getCell("C" + rowNumber).value,
          nama_perusahaan: explanation.getCell("D" + rowNumber).value,
          lokasi_perusahaan: explanation.getCell("E" + rowNumber).value,
          tanggal_mulai: explanation.getCell("F" + rowNumber).value,
          tanggal_selesai: explanation.getCell("G" + rowNumber).value,
          keterangan: explanation.getCell("H" + rowNumber).value,
        });
      }
    });
    // return data;

    const result = [];
    const trx = await Database.beginTransaction();
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      const userSiswa = await User.query()
        .select("id", "whatsapp", "dihapus")
        .where({ whatsapp: d.whatsapp })
        .andWhere({ dihapus: 0 })
        .andWhere({ m_sekolah_id: sekolah.id })
        .first();
      // result.push(userSiswa);
      // return;
      if (userSiswa) {
        const checkData = await MKeteranganPkl.query()
          .where({ m_user_id: userSiswa.id })
          .andWhere({ m_ta_id: ta.id })
          .first();

        let keterangan;

        // const perusahaan1 = await MPerusahaan.query()
        //   .where({ id: d.id_perusahaan })
        //   .first();

        let lama;

        if (d.tanggal_mulai && d.tanggal_selesai) {
          const date1 = moment(`${d.tanggal_mulai}`);
          const date2 = moment(`${d.tanggal_selesai}`);
          const diff = date2.diff(date1);

          // return diff
          lama = moment(diff).format(`MM`);
        }
        // return lama;
        if (!checkData) {
          if (d.keterangan) {
            await MKeteranganPkl.create(
              {
                dihapus: 0,
                m_ta_id: ta.id,
                m_user_id: userSiswa.id,
                namamitra: d.nama_perusahaan ? d.nama_perusahaan : "",
                lokasi_perusahaan: d.lokasi_perusahaan
                  ? d.lokasi_perusahaan
                  : "-",
                tanggal_mulai: d.tanggal_mulai
                  ? moment(`${d.tanggal_mulai}`).format("YYYY-MM-DD")
                  : "",
                tanggal_selesai: d.tanggal_selesai
                  ? moment(`${d.tanggal_selesai}`).format("YYYY-MM-DD")
                  : "",
                keterangan: d.keterangan ? d.keterangan : "-",
                lamanya: lama ? lama : null,
                // m_perusahaan_id: d.id_perusahaan ? d.id_perusahaan : "-",
              },
              trx
            );
          }

          // return;
        } else {
          if (d.keterangan) {
            const update = await MKeteranganPkl.query()
              .andWhere({ m_user_id: userSiswa.id })
              .andWhere({ m_ta_id: ta.id })
              // .andWhere({ m_perusahaan_id:d.id_perusahaan})
              .update(
                {
                  tanggal_mulai: d.tanggal_mulai
                    ? moment(`${d.tanggal_mulai}`).format("YYYY-MM-DD")
                    : "",
                  tanggal_selesai: d.tanggal_selesai
                    ? moment(`${d.tanggal_selesai}`).format("YYYY-MM-DD")
                    : "",
                  keterangan: d.keterangan ? d.keterangan : "",
                  lokasi_perusahaan: d.lokasi_perusahaan
                    ? d.lokasi_perusahaan
                    : "-",
                  namamitra: d.nama_perusahaan ? d.nama_perusahaan : "",
                  dihapus: 0,
                  lamanya: lama ? lama : null,
                  // m_perusahaan_id: d.id_perusahaan ? d.id_perusahaan : "-",
                },
                trx
              );
          }
        }
        result.push(1);
      }
    }
    await trx.commit();

    // data.forEach(async (d) => {
    // });

    return result;
  }

  async importKeteranganPkl({ request, response, auth }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const ta = await this.getTAAktif(sekolah);

    let file = request.file("file");
    let fname = `import-excel.xlsx`;

    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }

    return await this.importKeteranganPklServices(
      `tmp/uploads/${fname}`,
      sekolah,
      ta
    );
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

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const jadwalMengajar = await MJadwalMengajar.query()
      .with("mataPelajaran", (builder) => {
        builder.with("user");
      })
      .with("rombel")
      .where({ id: jadwal_mengajar_id })
      .first();

    const userIds = await MAnggotaRombel.query()
      .where({ m_rombel_id: jadwalMengajar.m_rombel_id })
      .andWhere({ dihapus: 0 })
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
      .orderBy("nama", "asc")
      .fetch();
    const judulTugas = await MTimeline.query()
      .select("id", "m_tugas_id", "tanggal_dibuat")
      .with("tugas", (builder) => {
        builder.select("id", "judul");
      })
      .with("ditugaskan", (builder) => {
        builder
          .select(
            Database.raw("sum(nilai) as jumlahNilai, count(id) as jumlahSiswa")
          )
          .select("m_timeline_id")
          .groupBy("m_timeline_id");
      })
      .whereIn("id", timelineIds)
      .fetch();

    const tugasData = judulTugas
      ?.toJSON()
      ?.filter(
        (d) =>
          d?.ditugaskan?.[0]?.jumlahSiswa !== null &&
          d?.ditugaskan?.[0]?.jumlahSiswa > 0 &&
          d?.ditugaskan?.[0]?.jumlahSiswa !== undefined
      );

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Analisis Nilai`);
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    worksheet.mergeCells(
      `A1:${colName(tugasData?.length ? tugasData?.length + 6 : 0)}1`
    );
    worksheet.mergeCells(
      `A2:${colName(tugasData?.length ? tugasData?.length + 6 : 0)}2`
    );
    worksheet.mergeCells(
      `A3:${colName(tugasData?.length ? tugasData?.length + 6 : 0)}3`
    );
    worksheet.mergeCells(
      `A4:${colName(tugasData?.length ? tugasData?.length + 6 : 0)}4`
    );
    worksheet.mergeCells(
      `A6:${colName(tugasData?.length ? tugasData?.length + 6 : 0)}6`
    );
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
      analisisNilai
        .toJSON()
        .sort((a, b) => ("" + a.nama).localeCompare(b.nama))
        .map(async (d, idx) => {
          const ratarata2 = await TkTimeline.query()
            .where({ m_user_id: `${d.id}` })
            .whereIn("m_timeline_id", timelineIds)
            .getSum("nilai");
          const dibawahKKM =
            d?.tugas.filter(
              (tugas) => tugas.nilai < jadwalMengajar?.mataPelajaran?.kkm
            )?.length || 0;

          const tugasBelumDikerjakan =
            d?.tugas?.filter((tugas) => tugas?.dikumpulkan == 0)?.length || 0;

          const tugasBelumDinilai =
            d?.tugas?.filter(
              (tugas) => tugas?.dikumpulkan == 1 && tugas?.nilai == null
            )?.length || 0;

          worksheet.getRow(7).values = [
            "No",
            "Nama",
            "Rata-Rata",
            "Dibawah KKM",
            "Tugas Belum Dikerjakan",
            "Tugas Belum Dinilai",
            "Jumlah Tugas",
          ];
          worksheet.columns = [
            { key: "no" },
            { key: "user" },
            { key: "ratarata" },
            { key: "dibawahkkm" },
            { key: "belumdikerjakan" },
            { key: "belumdinilai" },
            { key: "jumlahtugas" },
          ];
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            user: d ? d.nama : "-",
            ratarata: `${
              ratarata2 ? (ratarata2 / d.tugas.length).toFixed(2) : "-"
            }`,
            dibawahkkm: `${dibawahKKM} Tugas`,
            belumdikerjakan: `${tugasBelumDikerjakan} Tugas`,
            belumdinilai: `${tugasBelumDinilai} Tugas`,
            jumlahtugas: `${d?.tugas?.length ? d?.tugas?.length : 0} Tugas`,
          });

          // const row = worksheet.getRow(8);
          await Promise.all(
            tugasData.map(async (e, nox) => {
              const tugasSiswa = d?.tugas?.find(
                (s) => s?.m_timeline_id == e?.id
              );
              let nilaiSiswa;
              if (tugasSiswa?.id) {
                nilaiSiswa = tugasSiswa?.nilai ? tugasSiswa?.nilai : "0";
              } else {
                nilaiSiswa = "-";
              }
              worksheet.getColumn([`${(nox + 1) * 1 + 7}`]).values = [
                ``,
                ``,
                ``,
                ``,
                ``,
                ``,
                `${e?.tugas?.judul}`,
                ,
              ];
              row.getCell([`${(nox + 1) * 1 + 7}`]).value = `${nilaiSiswa}`;
              row.getCell([`${(nox + 1) * 1 + 7}`]).border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
              };
              worksheet.getColumn([`${(nox + 1) * 1 + 7}`]).fill = {
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
            ref: `A${(idx + 1) * 1 + 7}:G${(idx + 1) * 1 + 7}`,
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
      ref: `A7:${colName(tugasData?.length ? tugasData?.length + 6 : 0)}7`,
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
    worksheet.autoFilter = {
      from: "A7",
      to: `${colName(tugasData?.length ? tugasData?.length + 6 : 0)}7`,
    };

    worksheet.getColumn("A").width = 8;
    worksheet.getColumn("B").width = 28;
    worksheet.getColumn("C").width = 14;
    worksheet.getColumn("D").width = 14;
    worksheet.getColumn("E").width = 14;
    worksheet.getColumn("F").width = 14;
    worksheet.getColumn("G").width = 14;
    worksheet.getCell("A1").value = sekolah.nama;
    worksheet.getCell("A2").value = jadwalMengajar.toJSON().rombel.nama;
    worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;
    worksheet.getCell("A4").value = ta.tahun;

    worksheet.getCell(
      "A6"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;
    let namaFile = `/uploads/rekap-Analisis-Tugas-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async downloadTemplateNilai({
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

    const user = await auth.getUser();

    const keluarantanggalseconds =
      moment().format("YYYY-MM-DD ") + Date.now();

    const userIds = await User.query()
      .where({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    const rombel = await MRombel.query()
      .with("anggotaRombel", (builder) => {
        builder
          .with("user", (builder) => {
            builder
              .with("nilaiSemuaUjian", (builder) => {
                builder.with("mapel").where({ m_ta_id: ta.id });
              })
              .with("profil", (builder) => {
                builder.select("m_user_id", "nis");
              })
              .select("id", "nama", "gender", "whatsapp");
          })
          .where({ dihapus: 0 })
          .whereIn("m_user_id", userIds);
      })
      .with("user", (builder) => {
        builder.select("id", "nama");
      })
      .where({ id: rombel_id })
      .first();

    const mataPelajaranIds = await MMataPelajaran.query()
      .where({ m_ta_id: rombel.m_ta_id })
      .andWhere({ m_sekolah_id: sekolah.id })
      .andWhere({ dihapus: 0 })
      .ids();

    let dataaa = 0;

    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`Rekap Nilai Siswa`);

    let alreadyMerged = 0;
    let sudahGabung = 0;
    // add column headers

    const urutan = rombel
      .toJSON()
      .anggotaRombel.sort((a, b) => {
        return (
          b.user.nilaiSemuaUjian.reduce((c, d) => {
            return c + d.nilai + d.nilai_keterampilan;
          }, 0) -
          a.user.nilaiSemuaUjian.reduce((c, d) => {
            return c + d.nilai + d.nilai_keterampilan;
          }, 0)
        );
      })
      .map((d) => d.id);

    const muatanRombel = await MKategoriMapel.query()
      .where({ dihapus: 0 })
      .andWhere({ m_rombel_id: rombel_id })
      .count("* as total");

    // return urutan;

    const result = await Promise.all(
      rombel
        .toJSON()
        .anggotaRombel.sort((a, b) =>
          ("" + a.user.nama).localeCompare(b.user.nama)
        )
        .map(async (d, idx) => {
          worksheet.getRow(6).values = ["No", "NIS", "Nama", "Id"];
          worksheet.getRow(7).values = ["No", "NIS", "Nama", "Id"];
          worksheet.getRow(8).values = ["No", "NIS", "Nama", "Id"];
          worksheet.columns = [
            { key: "no" },
            { key: "nis" },
            { key: "user" },
            { key: "gen" },
          ];
          let row = worksheet.addRow({
            no: `${idx + 1}`,
            nis: d.user.profil ? d.user.profil.nis : "",
            user: d.user ? d.user.nama : "-",
            gen: d.user ? d.user.id : "",
          });

          const muatan = await MKategoriMapel.query()
            .with("mapelRapor", (builder) => {
              builder
                .with("mataPelajaran", (builder) => {
                  builder
                    .with("nilaiIndividu", (builder) => {
                      builder.where({ m_user_id: d.m_user_id });
                    })
                    .with("sikapSiswa", (builder) => {
                      builder
                        .with("predikat")
                        .where({ m_user_id: d.m_user_id });
                    })
                    .with("templateDeskripsi");
                })
                .where({ dihapus: 0 })
                // .whereIn("m_mata_pelajaran_id", mataPelajaranIds)
                .orderBy("urutan", "asc");
            })
            .where({ dihapus: 0 })
            .andWhere({ m_rombel_id: rombel_id })
            .fetch();
          // const row = worksheet.getRow(8);
          let total = 0;
          let muatanTotal = 0;
          await Promise.all(
            muatan.toJSON().map(async (e) => {
              muatanTotal = muatanTotal + 1;
              let maPor = 0;
              await Promise.all(
                e.mapelRapor.map(async (r, nox) => {
                  maPor = maPor + 1;
                  if (
                    !muatan.toJSON()[`${muatanRombel[0].total - 1}`].mapelRapor
                      .length
                  ) {
                    maPor = 0;
                  }

                  worksheet.getColumn([`${(total + 1) * 2 + 3}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${r.mataPelajaran.kode}`,
                    `${r.mataPelajaran.id}`,
                    `P`,
                  ];
                  worksheet.getColumn([`${(total + 1) * 2 + 4}`]).values = [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    `${r.mataPelajaran.nama}`,
                    `${r.mataPelajaran.id}`,
                    `K`,
                  ];
                  // worksheet.mergeCells(`${(total + 1) * 2 + 3}:${(total + 1) * 2 + 4}`);

                  // if (!r.mataPelajaran.nilaiIndividu) {
                  //   dataaa = dataaa + 1;
                  //   return;
                  // }
                  row.getCell([`${(total + 1) * 2 + 3}`]).value = `${
                    r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai
                      : "-"
                  }`;
                  row.getCell([`${(total + 1) * 2 + 4}`]).value = `${
                    r.mataPelajaran.nilaiIndividu
                      ? r.mataPelajaran.nilaiIndividu.nilai_keterampilan
                      : "-"
                  }`;
                  row.getCell([`${(total + 1) * 2 + 3}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 2 + 4}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 2 + 5}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };
                  row.getCell([`${(total + 1) * 2 + 6}`]).border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  };

                  alreadyMerged = (total + 1) * 2 + 4;
                  total = total + 1;
                  // // Add row using key mapping to columns
                  // let row = worksheet.addRow ({
                  //   tugas1: e ? e.nilai : "-",
                  //   tugas2: e ? e.nilai : "-",
                  //   tugas3: e ? e.nilai : "-",
                  //   tugas4: e ? e.nilai : "-",
                })
              );
              //   tugas5: e ? e.nilai : "-",
              // });
            })
          );
          worksheet.addConditionalFormatting({
            ref: `A6:D8`,
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
            ref: `A${(idx + 1) * 1 + 8}:D${(idx + 1) * 1 + 8}`,
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
    // if (dataaa > 10) {
    //   return response.ok({ message: "Data untuk Leger Nilai Belum Lengkap" });
    // }
    // return result;
    worksheet.getCell("A1").value = `LEGER PERNILAIAN AKHIR SEMESTER ${
      ta.semester == 1 ? "GANJIL" : "GENAP"
    } DARING`;
    worksheet.getCell("A2").value = rombel.nama;
    worksheet.getCell("A3").value = sekolah.nama;
    worksheet.getCell("A4").value = `TAHUN PELAJARAN ${ta.tahun}`;
    // worksheet.getCell("A3").value = jadwalMengajar.toJSON().mataPelajaran.nama;

    worksheet.getCell(
      "A5"
    ).value = `Diunduh tanggal ${keluarantanggalseconds} oleh ${user.nama}`;

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

    worksheet.mergeCells(`A6:A8`);
    worksheet.mergeCells(`B6:B8`);
    worksheet.mergeCells(`C6:C8`);
    worksheet.mergeCells(`D6:D8`);

    if (dataaa < 10) {
      // worksheet.mergeCells(6, 5, 6, `${alreadyMerged}`);
      worksheet.mergeCells(
        6,
        `${alreadyMerged + 1}`,
        8,
        `${alreadyMerged + 1}`
      );
      worksheet.mergeCells(
        6,
        `${alreadyMerged + 2}`,
        8,
        `${alreadyMerged + 2}`
      );

      worksheet.mergeCells(`A1:${colName(alreadyMerged + 1)}1`);
      worksheet.mergeCells(`A2:${colName(alreadyMerged + 1)}2`);
      worksheet.mergeCells(`A3:${colName(alreadyMerged + 1)}3`);
      worksheet.mergeCells(`A4:${colName(alreadyMerged + 1)}4`);
    }

    // worksheet.getCell(`${colName(alreadyMerged)}6`).value = `JUMLAH`;
    // worksheet.getCell(`${colName(alreadyMerged + 1)}6`).value = `PERINGKAT`;

    worksheet.addConditionalFormatting({
      ref: `E6:${colName(alreadyMerged + 1)}8`,
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

    // return dataaa
    worksheet.getColumn("B").width = 14;
    worksheet.getColumn("C").width = 28;
    // worksheet.getColumn(`${colName(alreadyMerged)}`).width = 12;
    // worksheet.getColumn(`${colName(alreadyMerged + 1)}`).width = 16;

    worksheet.views = [
      {
        state: "frozen",
        xSplit: 4,
        ySplit: 8,
        topLeftCell: "A6",
        activeCell: "A6",
      },
    ];

    // worksheet.mergeCells(20,22,22,23);

    // worksheet.mergeCells(22,22,23,24);
    let namaFile = `/uploads/Leger-Nilai-${rombel.nama}-${keluarantanggalseconds}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }

  async importNilaiUtamaServices(
    filelocation,
    response,
    ta_id,
  ) {
    var workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile(filelocation);

    let DataBelum = [];
    // const ss = hari[no];
    let explanation = workbook.getWorksheet(`Rekap Nilai Siswa`);

    let colCommentJam = explanation.getColumn("A");

    let colComment = explanation.getRow(6);

    // const jamTotal = semuaJam.toJSON().filter((d) => d.hari == ss.hari).length;

    // return jamTotal;
    // return colComment

    // return dataKelas;
    let data = [];
    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber > 4) {
        colCommentJam.eachCell(async (cell, rowNumberJam) => {
          if (rowNumberJam >= 9) {
            if (explanation.getCell("C" + rowNumberJam).value) {
              data.push({
                mapel: explanation.getCell(colName(rowNumber - 1) + 6).value,
                mapel_id: explanation.getCell(colName(rowNumber - 1) + 7).value,
                jenis: explanation.getCell(colName(rowNumber - 1) + 8).value,
                whatsapp: explanation.getCell("D" + rowNumberJam).value,
                nilai: explanation.getCell(
                  colName(rowNumber - 1) + rowNumberJam
                ).value,
              });
            }
            // dataKelas.push({
            // });
          }
        });
      }
    });

    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      const check = await MUjianSiswa.query()
        .where({ m_ta_id: ta_id })
        .andWhere({ m_user_id: d.whatsapp })
        .andWhere({ m_mata_pelajaran_id: d.mapel_id })
        .first();

      if (check) {
        if (d.jenis == "P") {
          await MUjianSiswa.query().where({ id: check.id }).update({
            nilai: d.nilai,
          });
        }
        if (d.jenis == "K") {
          await MUjianSiswa.query().where({ id: check.id }).update({
            nilai_keterampilan: d.nilai,
          });
        }
      } else {
        if (d.jenis == "P") {
          await MUjianSiswa.create({
            m_mata_pelajaran_id: d.mapel_id,
            m_user_id: d.whatsapp,
            m_ta_id: ta_id,
            nilai: d.nilai,
          });
        }
        if (d.jenis == "K") {
          await MUjianSiswa.create({
            m_mata_pelajaran_id: d.mapel_id,
            m_user_id: d.whatsapp,
            m_ta_id: ta_id,
            nilai_keterampilan: d.nilai,
          });
        }
      }

      DataBelum.push(d);
    }

    // return result;

    return DataBelum;
  }

  async importNilaiUtama({ request, response, auth }) {
    // const domain = request.headers().origin;

    // const sekolah = await this.getSekolahByDomain(domain);

    // if (sekolah == "404") {
    //   return response.notFound({ message: "Sekolah belum terdaftar" });
    // }
    // const ta = await this.getTAAktif(sekolah);

    let file = request.file("file");
    let fname = `import-excel.xlsx`;

    const { ta_id } = request.post();
    //move uploaded file into custom folder
    await file.move(Helpers.tmpPath("/uploads"), {
      name: fname,
      overwrite: true,
    });

    if (!file.moved()) {
      return fileUpload.error();
    }
    // return ta_id

    return await this.importNilaiUtamaServices(
      `tmp/uploads/${fname}`,
      response,
      // sekolah,
      ta_id,
      // rombel_id
    );
  }
}

module.exports = RombelController;

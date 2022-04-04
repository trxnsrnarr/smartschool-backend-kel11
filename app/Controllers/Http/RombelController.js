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
const MAbsen = use("App/Models/MAbsen");
const MTimeline = use("App/Models/MTimeline");
const Hash = use("Hash");
const Helpers = use("Helpers");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const MJamMengajar = use("App/Models/MJamMengajar");
const Excel = require("exceljs");
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
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
      moment().format("YYYY-MM-DD ") + new Date().getTime();

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
      .join(" ")}-${new Date().getTime()}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = RombelController;

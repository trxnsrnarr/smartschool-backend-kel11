"use strict";

const MSekolah = use("App/Models/MSekolah");
const Mta = use("App/Models/Mta");
const MAnggotaRombel = use("App/Models/MAnggotaRombel");
const User = use("App/Models/User");
const MRombel = use("App/Models/MRombel");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
const MJamMengajar = use("App/Models/MJamMengajar");
const Excel = require("exceljs");
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

    const { tingkat } = request.get();

    let tingkatGet;

    if (tingkat) {
      tingkatGet = tingkat;
    } else {
      tingkatGet = tingkatRombel[0];
    }
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
      {
        id: 7,
        hari: "minggu",
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
                  if (idx == jamMengajar.toJSON().length - 1) {
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

            if (idx == jamMengajar.toJSON().length - 1) {
              worksheet.getCell("A8").value = "Senin";
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
}

module.exports = RombelController;

const Excel = require("exceljs");
const nodeHtmlToImage = require("node-html-to-image");
const sizeOf = require("image-size");
const htmlEscaper = require("html-escaper");
require("events").EventEmitter.defaultMaxListeners = 100;;

class DownloadService {
  static async kartuUjian(
    sekolah,
    kepsek,
    ujian,
    keluarantanggal
    // logoFileName
  ) {
    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`KISI-KISI`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });
// return ujian
    // ADD LOGO
    // const logoImage = workbook.addImage({
    //   filename:
    //     logoFileName == "logo.png"
    //       ? `public/img/${logoFileName}`
    //       : `public/tmp/${logoFileName}`,
    //   extension: "png",
    // });
    // loop data into worksheet
    await Promise.all(
      ujian.toJSON().soalUjian.map(async (d, idx) => {
        // worksheet 1
        worksheet.getRow(22).values = [
          "No",
          "KOMPETENSI DASAR",
          "MATERI",
          "INDIKATOR PENCAPAIAN KOMPETENSI",
          "INDIKATOR SOAL",
          "LEVEL KOGNITIF",
          "BENTUK SOAL",
          "TINGKAT KESUKARAN",
          "SUMBER BUKU",
          "NO SOAL",
        ];

        worksheet.getRow(23).values = ["", "", "", "", "", "", "", "", "", ""];

        worksheet.columns = [
          { key: "No" },
          { key: "KOMPETENSI_DASAR" },
          { key: "MATERI" },
          { key: "INDIKATOR_PENCAPAIAN_KOMPETENSI" },
          { key: "INDIKATOR_SOAL" },
          { key: "LEVEL_KOGNITIF" },
          { key: "BENTUK_SOAL" },
          { key: "TINGKAT_KESUKARAN" },
          { key: "SUMBER_BUKU" },
          { key: "NO_SOAL" },
        ];

        // Add row using key mapping to columns
        worksheet.addRow({
          No: `${idx + 1}`,
          KOMPETENSI_DASAR: d.soal ? d.soal.kd : "-",
          MATERI: d.soal ? d.soal.kd_konten_materi : "-",
          INDIKATOR_PENCAPAIAN_KOMPETENSI: d.soal
            ? d.soal.akm_konteks_materi
            : "-",
          INDIKATOR_SOAL: d.soal ? d.soal.akm_konten_materi : "-",
          LEVEL_KOGNITIF: d.soal ? d.soal.aspek_level : "-",
          BENTUK_SOAL: d.soal ? d.soal.bentuk : "-",
          TINGKAT_KESUKARAN: d.soal ? d.soal.tingkat_kesukaran : "-",
          SUMBER_BUKU: d.soal ? d.soal.sumber_buku : "-",
          NO_SOAL: d.soal ? d.soal.kantor : "-",
        });

        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 23}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  vertical: "top",
                  horizontal: "right",
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thick" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                }
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `B${(idx + 1) * 1 + 23}:E${(idx + 1) * 1 + 23}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  vertical: "top",
                  horizontal: "left",
                  wrapText: true 
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                }
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `F${(idx + 1) * 1 + 23}:I${(idx + 1) * 1 + 23}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  vertical: "top",
                  horizontal: "center",
                  wrapText: true 
                },
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                }
              },
            },
          ],
        });

        worksheet.addConditionalFormatting({
          ref: `J${(idx + 1) * 1 + 23}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thick" },
                },
                alignment: {
                  vertical: "top",
                  horizontal: "center",
                  wrapText: true 
                },
                
              },
            },
          ],
        });
        worksheet.addConditionalFormatting({
          ref: `A${(idx + 1) * 1 + 21}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  top: { style: "thin" },
                  left: { style: "thick" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                alignment: { wrapText: true },
              },
            },
          ],
        });

        if (idx == ujian.toJSON().soalUjian.length - 1) {
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 23}:I${(idx + 1) * 1 + 23}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thick" },
                    right: { style: "thin" },
                  },
                  alignment: { wrapText: true },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: "A1:J1",
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    top: { style: "thick" },
                    left: { style: "thick" },
                    // bottom: { style: "thick" },
                    right: { style: "thick" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `J1:J${(idx + 1) * 1 + 23}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thick" },
                    // left: { style: "thick" },
                    // bottom: { style: "thick" },
                    right: { style: "thick" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `A1:A${(idx + 1) * 1 + 23}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thick" },
                    left: { style: "thick" },
                    // bottom: { style: "thick" },
                    // right: { style: "thick" },
                  },
                },
              },
            ],
          });
          worksheet.addConditionalFormatting({
            ref: `B${(idx + 1) * 1 + 24}:I${(idx + 1) * 1 + 24}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thick" },
                    // left: { style: "thick" },
                    bottom: { style: "thick" },
                    // right: { style: "thick" },
                  },
                },
              },
            ],
          });
          worksheet.getCell(`A${(idx + 2) * 1 + 23}`).border = {
            top: { style: "thin" },
            left: { style: "thick" },
            bottom: { style: "thick" },
            right: { style: "thin" },
          };
          worksheet.getCell(`J${(idx + 2) * 1 + 23}`).border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thick" },
            right: { style: "thick" },
          };
          worksheet.getCell(`B${(idx + 4) * 1 + 24}`).value = {
            richText: [
              {
                font: { name: "Calibri" },
                text: "MENGETAHUI",
              },
            ],
          };
          worksheet.getCell(`B${(idx + 5) * 1 + 24}`).value = {
            richText: [
              {
                font: { name: "Calibri" },
                text: "KEPALA SEKOLAH",
              },
            ],
          };
          worksheet.getCell(`B${(idx + 9) * 1 + 24}`).value = {
            richText: [
              {
                font: { name: "Calibri" },
                text: `${kepsek}`,
              },
            ],
          };

          worksheet.getCell(`G${(idx + 4) * 1 + 24}`).value = {
            richText: [
              {
                font: { name: "Calibri" },
                text: "MENGETAHUI",
              },
            ],
          };
          worksheet.getCell(`G${(idx + 5) * 1 + 24}`).value = {
            richText: [
              {
                font: { name: "Calibri" },
                text: "GURU MATA PELAJARAN",
              },
            ],
          };
          worksheet.getCell(`G${(idx + 9) * 1 + 24}`).value = {
            richText: [
              {
                font: { name: "Calibri" },
                text: `${ ujian.toJSON().mataPelajaran
                  ? ujian.toJSON().mataPelajaran.user.nama
                  : ""}`,
              },
            ],
          };
        }
      })
    );
    worksheet.addConditionalFormatting({
      ref: `A22:J22`,
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Agency FB",
              family: 4,
              size: 11,
              bold: true,
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "0000FF", fgColor: { argb: "0000FF" } },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    //loop PG
    

    //loop Esai
   
    // worksheet.addImage(logoImage, {
    //   tl: { col: 1.5, row: 0.1 },
    //   ext: { width: 100, height: 60 },
    // });

    worksheet.mergeCells("A1:J1");
    worksheet.mergeCells("A2:J2");
    worksheet.mergeCells("A3:J3");
    worksheet.mergeCells("A4:J4");
    worksheet.mergeCells("A5:J5");
    worksheet.mergeCells("A21:J21");
    worksheet.mergeCells("A22:A23");
    worksheet.mergeCells("B22:B23");
    worksheet.mergeCells("C22:C23");
    worksheet.mergeCells("D22:D23");
    worksheet.mergeCells("E22:E23");
    worksheet.mergeCells("F22:F23");
    worksheet.mergeCells("G22:G23");
    worksheet.mergeCells("H22:H23");
    worksheet.mergeCells("I22:I23");
    worksheet.mergeCells("J22:J23");
    worksheet.getColumn("A").width = 4;
    worksheet.getColumn("B").width = 30;
    worksheet.getColumn("C").width = 17;
    worksheet.getColumn("D").width = 26;
    worksheet.getColumn("E").width = 26;
    worksheet.getColumn("F").width = 9.5;
    worksheet.getColumn("G").width = 8;
    worksheet.getColumn("H").width = 12;
    worksheet.getColumn("I").width = 11;
    worksheet.getColumn("J").width = 6;
    worksheet.getCell("A1").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 16,
            bold: true,
          },
          text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi ? sekolah.provinsi.toUpperCase() :''}`,
        },
      ],
    };
    worksheet.getCell("A1").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A2").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 20,
            bold: true,
          },
          text: "DINAS PENDIDIKAN",
        },
      ],
    };
    worksheet.getCell("A2").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A3").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 14,
            bold: true,
          },
          text: `${sekolah.alamat} telp.${sekolah.telp} ${sekolah.kabupaten} - ${sekolah.kode_pos}`,
        },
      ],
    };
    worksheet.getCell("A3").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A4").value = {
      richText: [
        {
          font: {
            name: "Agency FB",
            family: 4,
            size: 36,
            color: { argb: "FFFFFF" },
          },
          text: "KISI-KISI",
        },
      ],
    };

    worksheet.getCell("A4").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A5").value = {
      richText: [
        {
          font: {
            name: "Agency FB",
            family: 4,
            size: 26,
            color: { argb: "FFFFFF" },
          },
          text: `${ujian.toJSON().tipe_format}`,
        },
      ],
    };
    worksheet.getCell("A5").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A4").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0000" },
      bgColor: { argb: "FF0000" },
    };
    worksheet.getCell("A5").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0000" },
      bgColor: { argb: "FF0000" },
    };
    worksheet.getCell("A21").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "000000" },
      bgColor: { argb: "000000" },
    };
    worksheet.getCell("A22").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "0000FF" },
      bgColor: { argb: "0000FF" },
    };

    worksheet.getCell("A1").border = {
      top: { style: "thick" },
      left: { style: "thick" },
      // bottom: {style:'thin'},
      // right: {style:'thin'}
    };
    worksheet.getCell("J1").border = {
      top: { style: "thick" },
      // left: {style:'thick'},
      // bottom: {style:'thin'},
      right: { style: "thick" },
    };

    // worksheet.getRow(5).font = {
    //   name: "Times New Roman",
    //   family: 4,
    //   size: 16,
    //   bold: true,
    // };

    worksheet.getCell("B7").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G7").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("B8").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G8").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("B9").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G9").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("B10").alignment = {
      vertical: "middle",
      horizontal: "right",
    };
    worksheet.getCell("G10").alignment = {
      vertical: "middle",
      horizontal: "right",
    };

    worksheet.getCell("B7").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Nama Sekolah                    :",
        },
      ],
    };
    worksheet.getCell("C7").value = {
      richText: [
        { font: { name: "Times New Roman" }, text: `${sekolah.nama}` },
      ],
    };

    worksheet.getCell("G7").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Tanggal Tes                  :",
        },
      ],
    };
    worksheet.getCell("H7").value = {
      richText: [{ font: { name: "Times New Roman" }, text: 0 }],
    };

    worksheet.getCell("B8").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Mata Pelajaran                  :",
        },
      ],
    };
    worksheet.getCell("C8").value = {
      richText: [
        {
          font: { name: "Times New Roman" },
          text: `${ ujian.toJSON().mataPelajaran
            ? ujian.toJSON().mataPelajaran.nama
            : ""}`,
        },
      ],
    };

    worksheet.getCell("G8").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Kelas/Ujian                 :",
        },
      ],
    };
    worksheet.getCell("H8").value = {
      richText: [
        { font: { name: "Times New Roman" }, text: `${ujian.tingkat}` },
      ],
    };

    worksheet.getCell("B9").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Kompetensi Keahlian        :",
        },
      ],
    };
    worksheet.getCell("C9").value = {
      richText: [{ font: { name: "Times New Roman" }, text: 0 }],
    };

    worksheet.getCell("G9").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Bentuk Soal                  :",
        },
      ],
    };
    // worksheet.getCell("H9").value = {
    //   richText: [
    //     {
    //       font: { name: "Times New Roman" },
    //       text: `${ujianUjian.bentuk}`,
    //     },
    //   ],
    // };

    worksheet.getCell("B10").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Guru Mata Pelajarn         :",
        },
      ],
    };
    worksheet.getCell("C10").value = {
      richText: [
        {
          font: { name: "Times New Roman" },
          text: `${ ujian.toJSON().mataPelajaran
            ? ujian.toJSON().mataPelajaran.user.nama
            : ""}`,
        },
      ],
    };

    worksheet.getCell("G10").value = {
      richText: [
        {
          font: { name: "Times New Roman", size: 12, bold: true },
          text: "Jumlah Soal/Waktu       :",
        },
      ],
    };
    worksheet.getCell("H10").value = {
      richText: [
        {
          font: { name: "Times New Roman" },
          text: `${ujian.TotalUjian}soal `,
        },
      ],
    };

 
    worksheet.views = [
      {showGridLines: false}
    ]

    let namaFile = `/uploads/kartu-soal-kisi-kisi-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

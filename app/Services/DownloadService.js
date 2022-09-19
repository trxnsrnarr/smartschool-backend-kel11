const Excel = require("exceljs");

class DownloadService {
  static async kartuUjian(
    sekolah,
    ta,
    kepsek,
    ujian,
    esaiFilter,
    keluarantanggal,
    logoFileName
  ) {
    let workbook = new Excel.Workbook();

    let worksheet = workbook.addWorksheet(`KISI-KISI`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });
    let worksheet2 = workbook.addWorksheet(`Kartu Soal PG`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });
    let worksheet3 = workbook.addWorksheet(`Kartu Soal Essay`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });
    let worksheet4 = workbook.addWorksheet(`Rumusan Soal`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });
    let worksheet5 = workbook.addWorksheet(`Naskah Soal`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    // ADD LOGO
    const logoImage = workbook.addImage({
      filename: `public/tmp/${logoFileName}`,
      extension: "png",
    });

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
          { key: "INDIKATOR SOAL" },
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
          TINGAT_KESUKARAN: d.soal ? d.soal.tahun_masuk : "-",
          SUMBER_BUKU: d.soal ? d.soal.pekerjaan : "-",
          NO_SOAL: d.soal ? d.soal.kantor : "-",
        });

        // worksheet 2
        if (`${d.soal.bentuk}` == "pg") {
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 30}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 29}:H${(idx + 1) * 32 - 29}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 28}:H${(idx + 1) * 32 - 28}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 27}:H${(idx + 1) * 32 - 27}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 26}:H${(idx + 1) * 32 - 26}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 25}:F${(idx + 1) * 32 - 25}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 24}:F${(idx + 1) * 32 - 24}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 23}:F${(idx + 1) * 32 - 23}`
          );
          worksheet2.mergeCells(
            `D${(idx + 1) * 32 - 22}:F${(idx + 1) * 32 - 22}`
          );
          worksheet2.mergeCells(
            `G${(idx + 1) * 32 - 25}:H${(idx + 1) * 32 - 25}`
          );
          worksheet2.mergeCells(
            `G${(idx + 1) * 32 - 24}:H${(idx + 1) * 32 - 22}`
          );
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 21}:E${(idx + 1) * 32 - 21}`
          ); //11
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 21}:G${(idx + 1) * 32 - 21}`
          ); //11
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 20}:E${(idx + 1) * 32 - 20}`
          ); //12
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 20}:G${(idx + 1) * 32 - 20}`
          ); //12
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 19}:D${(idx + 1) * 32 - 18}`
          ); //1314
          worksheet2.mergeCells(
            `E${(idx + 1) * 32 - 19}:G${(idx + 1) * 32 - 19}`
          ); //13
          worksheet2.mergeCells(
            `B${(idx + 1) * 32 - 18}:B${(idx + 1) * 32 - 11}`
          ); //1421
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 17}:D${(idx + 1) * 32 - 16}`
          ); //1516
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 15}:D${(idx + 1) * 32 - 14}`
          ); //1718
          worksheet2.mergeCells(
            `C${(idx + 1) * 32 - 13}:D${(idx + 1) * 32 - 11}`
          ); //1921
          worksheet2.mergeCells(
            `E${(idx + 1) * 32 - 18}:G${(idx + 1) * 32 - 16}`
          ); //1416
          worksheet2.mergeCells(
            `H${(idx + 1) * 32 - 16}:H${(idx + 1) * 32 - 11}`
          ); //1621
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 15}:G${(idx + 1) * 32 - 15}`
          ); //1717
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 14}:G${(idx + 1) * 32 - 14}`
          ); //18
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 13}:G${(idx + 1) * 32 - 13}`
          ); //19
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 12}:G${(idx + 1) * 32 - 12}`
          ); //20
          worksheet2.mergeCells(
            `F${(idx + 1) * 32 - 11}:G${(idx + 1) * 32 - 11}`
          ); //21

          worksheet2.addImage(logoImage, "B2:C5");

          worksheet2.getCell(`B${(idx + 1) * 32 - 30}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 16,
                  bold: true,
                },
                text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi}`,
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 30}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 29}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 20,
                  bold: true,
                },
                text: "CABANG DINAS PENDIDIKAN",
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 29}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 28}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 14,
                  bold: true,
                },
                text: `${ta.tahun} `,
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 28}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };

          worksheet2.getCell(`B${(idx + 1) * 32 - 26}`).value = {
            richText: [
              {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 22,
                  color: { argb: "000000" },
                },
                text: `${ujian.toJSON().tipe_format}`,
              },
            ],
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 26}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`B${(idx + 1) * 32 - 26}`).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "ADD8E6" },
            bgColor: { argb: "ADD8E6" },
          };
          worksheet2.getCell(`G${(idx + 1) * 32 - 25}`).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "E0FFFF" },
            bgColor: { argb: "E0FFFF" },
          };
          worksheet2.getCell(`G${(idx + 1) * 32 - 25}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Kompetensi Dasar`,
              },
            ],
          };
          // worksheet2.getCell("B29").value = `${ujian.nama}`;
          worksheet2.getCell(`G${(idx + 1) * 32 - 25}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet2.getCell(`G${(idx + 1) * 32 - 24}`).value = {
            richText: [
              {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `${d.soal.kd}`,
              },
            ],
          };
          // worksheet2.getCell("B29").value = `${ujian.nama}`;
          worksheet2.getCell(`G${(idx + 1) * 32 - 24}`).alignment = {
            vertical: "middle",
            horizontal: "center",
          };

          worksheet2.getCell(`B${(idx + 1) * 32 - 25}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Nama Sekolah`,
              },
            ],
          };
          worksheet2.getCell(
            `D${(idx + 1) * 32 - 25}`
          ).value = `${sekolah.nama}`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 24}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Kelas / Semester`,
              },
            ],
          };
          worksheet2.getCell(
            `D${(idx + 1) * 32 - 24}`
          ).value = `${ujian.tingkat}`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 23}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Mata Pelajaran`,
              },
            ],
          };
          worksheet2.getCell(`D${(idx + 1) * 32 - 23}`).value = `${
            ujian.toJSON().mataPelajaran.nama
          }`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 22}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `Kompetensi Keahlian`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 25}`).value = ":";
          worksheet2.getCell(`C${(idx + 1) * 32 - 24}`).value = ":";
          worksheet2.getCell(`C${(idx + 1) * 32 - 23}`).value = ":";
          worksheet2.getCell(`C${(idx + 1) * 32 - 22}`).value = ":";

          worksheet2.getCell(
            `B${(idx + 1) * 32 - 21}`
          ).value = `Materi Pembelajaran`;
          worksheet2.getCell(
            `B${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.kd_konten_materi}`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 21}`
          ).value = `Indikator Pencapaian Kompetensi`;
          worksheet2.getCell(
            `F${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.akm_konteks_materi}`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 21}`).value = `Aspek (Level)`;
          worksheet2.getCell(
            `H${(idx + 1) * 32 - 20}`
          ).value = `${d.soal.aspek_level}`;
          worksheet2.getCell(
            `B${(idx + 1) * 32 - 19}`
          ).value = `Indikator Soal`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 18}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // bold: true,
                },
                text: `${d.soal.akm_konten_materi}`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 19}`).value = `Nomor`;
          worksheet2.getCell(`C${(idx + 1) * 32 - 17}`).value = `${idx + 1}`;
          worksheet2.getCell(
            `E${(idx + 1) * 32 - 19}`
          ).value = `Rumusan Butir Soal`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 17}`).value = `${
            d.soal
              ? d.soal.pertanyaan
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 19}`).value = `BUKU`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 17}`).value = ``;
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 20}:H${(idx + 1) * 32 - 20}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 18}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 17}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 18}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 12,
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 21}:H${(idx + 1) * 32 - 21}`,
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
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 19}:H${(idx + 1) * 32 - 19}`,
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
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                  alignment: {
                    vertical: "middle",
                    horizontal: "center",
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 11}`,
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
                  alignment: { wrapText: true },
                },
              },
            ],
          });

          worksheet2.getCell(`C${(idx + 1) * 32 - 15}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Kunci Jawaban`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 13}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 22,
                  color: { argb: "000000" },
                },
                text: `${d.soal.kj_pg}`,
              },
            ],
          };
          worksheet2.getCell(`C${(idx + 1) * 32 - 13}`).alignment = {
            wrapText: true,
            vertical: "middle",
            horizontal: "center",
          };

          worksheet2.addConditionalFormatting({
            ref: `E${(idx + 1) * 32 - 15}:E${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.getCell(`E${(idx + 1) * 32 - 15}`).value = `A`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 14}`).value = `B`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 13}`).value = `C`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 12}`).value = `D`;
          worksheet2.getCell(`E${(idx + 1) * 32 - 11}`).value = `E`;
          worksheet2.addConditionalFormatting({
            ref: `F${(idx + 1) * 32 - 15}:F${(idx + 1) * 32 - 11}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Arial Narrow",
                    family: 4,
                    size: 9,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.getCell(`F${(idx + 1) * 32 - 15}`).value = `${
            d.soal
              ? d.soal.jawaban_a
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`;
          worksheet2.getCell(`F${(idx + 1) * 32 - 14}`).value = `${
            d.soal
              ? d.soal.jawaban_b
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`;
          worksheet2.getCell(`F${(idx + 1) * 32 - 13}`).value = `${
            d.soal
              ? d.soal.jawaban_c
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`;
          worksheet2.getCell(`F${(idx + 1) * 32 - 12}`).value = `${
            d.soal
              ? d.soal.jawaban_d
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`;
          worksheet2.getCell(`F${(idx + 1) * 32 - 11}`).value = `${
            d.soal
              ? d.soal.jawaban_e
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`;

          worksheet2.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 15}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                },
              },
            ],
          });

          worksheet2.getCell(`H${(idx + 1) * 32 - 17}`).value = {
            richText: [
              {
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  bold: true,
                },
                text: `Gambar/Tabel/Grafik/Wacana`,
              },
            ],
          };
          worksheet2.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 17}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "center",
                  },
                  fill: {
                    type: "pattern",
                    pattern: "solid",
                    bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                  },
                },
              },
            ],
          });

          worksheet2.getCell(`B${(idx + 1) * 32 - 8}`).value = `Mengetahui :`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 7}`).value = `Kepala Sekolah`;
          worksheet2.getCell(`B${(idx + 1) * 32 - 3}`).value = `${kepsek}`;

          worksheet2.getCell(`H${(idx + 1) * 32 - 9}`).value = ``;
          worksheet2.getCell(
            `H${(idx + 1) * 32 - 7}`
          ).value = `Guru Mata Pelajaran`;
          worksheet2.getCell(`H${(idx + 1) * 32 - 3}`).value = `${
            ujian.toJSON().mataPelajaran.user.nama
          }`;

          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 10}:B${(idx + 1) * 32 - 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    left: { style: "thin" },
                    // bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "right",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 10}:H${(idx + 1) * 32 - 4}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    // bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `C${(idx + 1) * 32 - 3}:G${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `B${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    // right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
          worksheet2.addConditionalFormatting({
            ref: `H${(idx + 1) * 32 - 3}`,
            rules: [
              {
                type: "expression",
                formulae: ["MOD(ROW()+COLUMN(),1)=0"],
                style: {
                  border: {
                    // top: { style: "thin" },
                    // left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                  },
                  alignment: {
                    wrapText: true,
                    vertical: "middle",
                    horizontal: "left",
                  },
                  font: {
                    name: "Times New Roman",
                    family: 4,
                    size: 12,
                    color: { argb: "000000" },
                  },
                },
              },
            ],
          });
        }

        // worksheet 3

        if (`${d.soal.bentuk}` == "esai") {
        }

        // worksheet 4

        worksheet4.getRow(6).values = [
          "NO",
          "INDIKATOR SOAL",
          "RUMUSAN BUTIR SOAL",
          "PILIHAN JAWABAN",
          "",
          "",
          "",
          "",
          "KUNCI JAWABAN",
        ];

        worksheet4.getRow(7).values = ["", "", "", "A", "B", "C", "D", "E", ""];

        worksheet4.columns = [
          { key: "No" },
          { key: "INDIKATOR_SOAL" },
          { key: "RUMUSAN_BUTIR_SOAL" },
          { key: "A" },
          { key: "B" },
          { key: "C" },
          { key: "D" },
          { key: "E" },
          { key: "KUNCI_JAWABAN" },
        ];

        // Add row using key mapping to columns
        worksheet4.addRow({
          No: `${idx + 1}`,
          INDIKATOR_SOAL: d.soal ? d.soal.akm_konten_materi : "-",
          RUMUSAN_BUTIR_SOAL: d.soal
            ? d.soal.pertanyaan
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          A: d.soal
            ? d.soal.jawaban_a
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          B: d.soal
            ? d.soal.jawaban_b
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          C: d.soal
            ? d.soal.jawaban_c
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          D: d.soal
            ? d.soal.jawaban_d
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          E: d.soal
            ? d.soal.jawaban_e
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          KUNCI_JAWABAN: d.soal ? d.soal.kj_pg : "-",
        });

        // worksheet 5

        // worksheet5.mergeCells(`B${(idx + 1) * 7 + 15}:L${(idx + 1) * 7 + 15}`);
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 15}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `C${(idx + 1) * 7 + 16}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 17}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 18}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 19}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });
        // , pertanyaan, a, b, c, d,
        worksheet5.addConditionalFormatting({
          ref: `B${(idx + 1) * 7 + 20}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial",
                  family: 4,
                  size: 11,
                  color: { argb: "000000" },
                  // italic: true,
                },
              },
            },
          ],
        });

        worksheet5.getRow(`${(idx + 1) * 7 + 15}`).values = [
          `${idx + 1}`,
          `${
            d.soal
              ? d.soal.pertanyaan
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`,
        ];

        worksheet5.getRow(`${(idx + 1) * 7 + 16}`).values = [
          "",
          "A",
          `${
            d.soal
              ? d.soal.jawaban_a
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 17}`).values = [
          "",
          "B",
          `${
            d.soal
              ? d.soal.jawaban_b
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 18}`).values = [
          "",
          "C",
          `${
            d.soal
              ? d.soal.jawaban_c
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 19}`).values = [
          "",
          "D",
          `${
            d.soal
              ? d.soal.jawaban_d
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`,
        ];
        worksheet5.getRow(`${(idx + 1) * 7 + 20}`).values = [
          "",
          "E",
          `${
            d.soal
              ? d.soal.jawaban_e
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/\&nbsp;/gi, "")
              : "-"
          }`,
        ];

        worksheet5.mergeCells(`B${(idx + 1) * 7 + 15}:L${(idx + 1) * 7 + 15}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 16}:L${(idx + 1) * 7 + 16}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 17}:L${(idx + 1) * 7 + 17}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 18}:L${(idx + 1) * 7 + 18}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 19}:L${(idx + 1) * 7 + 19}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 20}:L${(idx + 1) * 7 + 20}`);
      })
    );

    //loop Esai
    await Promise.all(
      esaiFilter.map(async (d, idx) => {
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 30}`
        );
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 29}:H${(idx + 1) * 32 - 29}`
        );
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 28}:H${(idx + 1) * 32 - 28}`
        );
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 27}:H${(idx + 1) * 32 - 27}`
        );
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 26}:H${(idx + 1) * 32 - 26}`
        );
        worksheet3.mergeCells(
          `D${(idx + 1) * 32 - 25}:F${(idx + 1) * 32 - 25}`
        );
        worksheet3.mergeCells(
          `D${(idx + 1) * 32 - 24}:F${(idx + 1) * 32 - 24}`
        );
        worksheet3.mergeCells(
          `D${(idx + 1) * 32 - 23}:F${(idx + 1) * 32 - 23}`
        );
        worksheet3.mergeCells(
          `D${(idx + 1) * 32 - 22}:F${(idx + 1) * 32 - 22}`
        );
        worksheet3.mergeCells(
          `G${(idx + 1) * 32 - 25}:H${(idx + 1) * 32 - 25}`
        );
        worksheet3.mergeCells(
          `G${(idx + 1) * 32 - 24}:H${(idx + 1) * 32 - 22}`
        );
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 21}:E${(idx + 1) * 32 - 21}`
        ); //11
        worksheet3.mergeCells(
          `F${(idx + 1) * 32 - 21}:G${(idx + 1) * 32 - 21}`
        ); //11
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 20}:E${(idx + 1) * 32 - 20}`
        ); //12
        worksheet3.mergeCells(
          `F${(idx + 1) * 32 - 20}:G${(idx + 1) * 32 - 20}`
        ); //12
        worksheet3.mergeCells(
          `C${(idx + 1) * 32 - 19}:D${(idx + 1) * 32 - 18}`
        ); //1314
        worksheet3.mergeCells(
          `E${(idx + 1) * 32 - 19}:G${(idx + 1) * 32 - 19}`
        ); //13
        worksheet3.mergeCells(
          `B${(idx + 1) * 32 - 18}:B${(idx + 1) * 32 - 11}`
        ); //1421
        worksheet3.mergeCells(
          `C${(idx + 1) * 32 - 17}:D${(idx + 1) * 32 - 16}`
        ); //1516
        worksheet3.mergeCells(
          `C${(idx + 1) * 32 - 15}:D${(idx + 1) * 32 - 11}`
        ); //1718
        // worksheet3.mergeCells(
        //   `C${(idx + 1) * 32 - 13}:D${(idx + 1) * 32 - 11}`
        // ); //1921
        worksheet3.mergeCells(
          `E${(idx + 1) * 32 - 15}:G${(idx + 1) * 32 - 11}`
        ); //1718
        worksheet3.mergeCells(
          `E${(idx + 1) * 32 - 18}:G${(idx + 1) * 32 - 16}`
        ); //1416
        worksheet3.mergeCells(
          `H${(idx + 1) * 32 - 16}:H${(idx + 1) * 32 - 11}`
        ); //1621
        // worksheet3.mergeCells(
        //   `F${(idx + 1) * 32 - 15}:G${(idx + 1) * 32 - 15}`
        // ); //1717
        // worksheet3.mergeCells(
        //   `F${(idx + 1) * 32 - 14}:G${(idx + 1) * 32 - 14}`
        // ); //18
        // worksheet3.mergeCells(
        //   `F${(idx + 1) * 32 - 13}:G${(idx + 1) * 32 - 13}`
        // ); //19
        // worksheet3.mergeCells(
        //   `F${(idx + 1) * 32 - 12}:G${(idx + 1) * 32 - 12}`
        // ); //20
        // worksheet3.mergeCells(
        //   `F${(idx + 1) * 32 - 11}:G${(idx + 1) * 32 - 11}`
        // ); //21

        worksheet3.getCell(`B${(idx + 1) * 32 - 30}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 16,
                bold: true,
              },
              text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi}`,
            },
          ],
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 30}`).alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 29}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 20,
                bold: true,
              },
              text: "CABANG DINAS PENDIDIKAN",
            },
          ],
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 29}`).alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 28}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 14,
                bold: true,
              },
              text: `${ta.tahun} `,
            },
          ],
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 28}`).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet3.getCell(`B${(idx + 1) * 32 - 26}`).value = {
          richText: [
            {
              font: {
                name: "Arial Narrow",
                family: 4,
                size: 22,
                color: { argb: "000000" },
              },
              text: `${ujian.toJSON().tipe_format}`,
            },
          ],
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 26}`).alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        worksheet3.getCell(`B${(idx + 1) * 32 - 26}`).fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "ADD8E6" },
          bgColor: { argb: "ADD8E6" },
        };
        worksheet3.getCell(`G${(idx + 1) * 32 - 25}`).fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "E0FFFF" },
          bgColor: { argb: "E0FFFF" },
        };
        worksheet3.getCell(`G${(idx + 1) * 32 - 25}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                bold: true,
              },
              text: `Kompetensi Dasar`,
            },
          ],
        };
        // worksheet3.getCell("B29").value = `${ujian.nama}`;
        worksheet3.getCell(`G${(idx + 1) * 32 - 25}`).alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        worksheet3.getCell(`G${(idx + 1) * 32 - 24}`).value = {
          richText: [
            {
              font: {
                name: "Arial Narrow",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                bold: true,
              },
              text: `${d.kd}`,
            },
          ],
        };
        // worksheet3.getCell("B29").value = `${ujian.nama}`;
        worksheet3.getCell(`G${(idx + 1) * 32 - 24}`).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet3.getCell(`B${(idx + 1) * 32 - 25}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                // bold: true,
              },
              text: `Nama Sekolah`,
            },
          ],
        };
        worksheet3.getCell(`D${(idx + 1) * 32 - 25}`).value = `${sekolah.nama}`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 24}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                // bold: true,
              },
              text: `Kelas / Semester`,
            },
          ],
        };
        worksheet3.getCell(
          `D${(idx + 1) * 32 - 24}`
        ).value = `${ujian.tingkat}`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 23}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                // bold: true,
              },
              text: `Mata Pelajaran`,
            },
          ],
        };
        worksheet3.getCell(`D${(idx + 1) * 32 - 23}`).value = `${
          ujian.toJSON().mataPelajaran.nama
        }`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 22}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                // bold: true,
              },
              text: `Kompetensi Keahlian`,
            },
          ],
        };
        worksheet3.getCell(`C${(idx + 1) * 32 - 25}`).value = ":";
        worksheet3.getCell(`C${(idx + 1) * 32 - 24}`).value = ":";
        worksheet3.getCell(`C${(idx + 1) * 32 - 23}`).value = ":";
        worksheet3.getCell(`C${(idx + 1) * 32 - 22}`).value = ":";

        worksheet3.getCell(
          `B${(idx + 1) * 32 - 21}`
        ).value = `Materi Pembelajaran`;
        worksheet3.getCell(
          `B${(idx + 1) * 32 - 20}`
        ).value = `${d.kd_konten_materi}`;
        worksheet3.getCell(
          `F${(idx + 1) * 32 - 21}`
        ).value = `Indikator Pencapaian Kompetensi`;
        worksheet3.getCell(
          `F${(idx + 1) * 32 - 20}`
        ).value = `${d.akm_konteks_materi}`;
        worksheet3.getCell(`H${(idx + 1) * 32 - 21}`).value = `Aspek (Level)`;
        worksheet3.getCell(
          `H${(idx + 1) * 32 - 20}`
        ).value = `${d.level_kognitif}`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 19}`).value = `Indikator Soal`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 18}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                // bold: true,
              },
              text: `${d.akm_konten_materi}`,
            },
          ],
        };
        worksheet3.getCell(`C${(idx + 1) * 32 - 19}`).value = `Nomor`;
        worksheet3.getCell(`C${(idx + 1) * 32 - 17}`).value = `${idx + 1}`;
        worksheet3.getCell(
          `E${(idx + 1) * 32 - 19}`
        ).value = `Rumusan Butir Soal`;
        worksheet3.getCell(`E${(idx + 1) * 32 - 17}`).value = `${
          d
            ? d.pertanyaan.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
            : "-"
        }`;
        worksheet3.getCell(`H${(idx + 1) * 32 - 19}`).value = `BUKU`;
        worksheet3.getCell(`H${(idx + 1) * 32 - 17}`).value = ``;
        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 20}:H${(idx + 1) * 32 - 20}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 18}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `C${(idx + 1) * 32 - 17}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `E${(idx + 1) * 32 - 18}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 12,
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 21}:H${(idx + 1) * 32 - 21}`,
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
                  bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 19}:H${(idx + 1) * 32 - 19}`,
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
                  bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                },
                alignment: {
                  vertical: "middle",
                  horizontal: "center",
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 30}:H${(idx + 1) * 32 - 11}`,
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
                alignment: { wrapText: true },
              },
            },
          ],
        });

        worksheet3.getCell(`C${(idx + 1) * 32 - 15}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                bold: true,
              },
              text: `Kunci Jawaban`,
            },
          ],
        };

        worksheet3.addConditionalFormatting({
          ref: `E${(idx + 1) * 32 - 15}:E${(idx + 1) * 32 - 11}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "center",
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `E${(idx + 1) * 32 - 15}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Arial Narrow",
                  family: 4,
                  size: 9,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
        worksheet3.getCell(`F${(idx + 1) * 32 - 15}`).value = `${d.kj_uraian}`;

        worksheet3.addConditionalFormatting({
          ref: `C${(idx + 1) * 32 - 15}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "center",
                },
                fill: {
                  type: "pattern",
                  pattern: "solid",
                  bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                },
              },
            },
          ],
        });

        worksheet3.getCell(`H${(idx + 1) * 32 - 17}`).value = {
          richText: [
            {
              font: {
                name: "Times New Roman",
                family: 4,
                size: 12,
                color: { argb: "000000" },
                bold: true,
              },
              text: `Gambar/Tabel/Grafik/Wacana`,
            },
          ],
        };
        worksheet3.addConditionalFormatting({
          ref: `H${(idx + 1) * 32 - 17}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "center",
                },
                fill: {
                  type: "pattern",
                  pattern: "solid",
                  bgColor: { argb: "E0FFFF", fgColor: { argb: "E0FFFF" } },
                },
              },
            },
          ],
        });

        worksheet3.getCell(`B${(idx + 1) * 32 - 8}`).value = `Mengetahui :`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 7}`).value = `Kepala Sekolah`;
        worksheet3.getCell(`B${(idx + 1) * 32 - 3}`).value = `${kepsek}`;

        worksheet3.getCell(`H${(idx + 1) * 32 - 9}`).value = ``;
        worksheet3.getCell(
          `H${(idx + 1) * 32 - 7}`
        ).value = `Guru Mata Pelajaran`;
        worksheet3.getCell(`H${(idx + 1) * 32 - 3}`).value = `${
          ujian.toJSON().mataPelajaran.user.nama
        }`;

        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 10}:B${(idx + 1) * 32 - 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  // top: { style: "thin" },
                  left: { style: "thin" },
                  // bottom: { style: "thin" },
                  // right: { style: "thin" },
                },
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "right",
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `H${(idx + 1) * 32 - 10}:H${(idx + 1) * 32 - 4}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  // top: { style: "thin" },
                  // left: { style: "thin" },
                  // bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `C${(idx + 1) * 32 - 3}:G${(idx + 1) * 32 - 3}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  // top: { style: "thin" },
                  // left: { style: "thin" },
                  bottom: { style: "thin" },
                  // right: { style: "thin" },
                },
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `B${(idx + 1) * 32 - 3}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  // top: { style: "thin" },
                  left: { style: "thin" },
                  bottom: { style: "thin" },
                  // right: { style: "thin" },
                },
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
        worksheet3.addConditionalFormatting({
          ref: `H${(idx + 1) * 32 - 3}`,
          rules: [
            {
              type: "expression",
              formulae: ["MOD(ROW()+COLUMN(),1)=0"],
              style: {
                border: {
                  // top: { style: "thin" },
                  // left: { style: "thin" },
                  bottom: { style: "thin" },
                  right: { style: "thin" },
                },
                alignment: {
                  wrapText: true,
                  vertical: "middle",
                  horizontal: "left",
                },
                font: {
                  name: "Times New Roman",
                  family: 4,
                  size: 12,
                  color: { argb: "000000" },
                },
              },
            },
          ],
        });
      })
    );

    worksheet.addImage(logoImage, {
      tl: { col: 1.5, row: 0.1 },
      ext: { width: 100, height: 60 },
    });

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
          text: `PEMERINTAH DAERAH PROVINSI ${sekolah.provinsi}`,
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

    worksheet.addConditionalFormatting({
      ref: "A22:J22",
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

    worksheet.addConditionalFormatting({
      ref: "A24:A73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "top",
              horizontal: "right",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "B24:E73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "top",
              horizontal: "left",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "F24:J73",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "top",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet.addConditionalFormatting({
      ref: "B22:I72",
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
            alignment: { wrapText: true },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "J22:J72",
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
            alignment: { wrapText: true },
          },
        },
      ],
    });
    worksheet.addConditionalFormatting({
      ref: "B73:I73",
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
      ref: "A22:A72",
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
      ref: "J1:J72",
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
      ref: "B73:I73",
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
    worksheet.addConditionalFormatting({
      ref: "A1:A72",
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
    worksheet.getCell("A73").border = {
      top: { style: "thin" },
      left: { style: "thick" },
      bottom: { style: "thick" },
      right: { style: "thin" },
    };
    worksheet.getCell("J73").border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thick" },
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
          text: `${ujian.toJSON().mataPelajaran.nama}`,
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
    //       text: `${ujian.soalUjian.soal.bentuk}`,
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
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
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

    worksheet.getCell("B75").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet.getCell("B76").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "KEPALA SEKOLAH",
        },
      ],
    };
    worksheet.getCell("B80").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${kepsek}`,
        },
      ],
    };

    worksheet.getCell("G75").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet.getCell("G76").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "GURU MATA PELAJARAN",
        },
      ],
    };
    worksheet.getCell("G80").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };

    worksheet2.getColumn("A").width = 3;
    worksheet2.getColumn("B").width = 28;
    worksheet2.getColumn("C").width = 1.5;
    worksheet2.getColumn("D").width = 7;
    worksheet2.getColumn("E").width = 5.5;
    worksheet2.getColumn("F").width = 33;
    worksheet2.getColumn("G").width = 42;
    worksheet2.getColumn("H").width = 31;

    //desain worksheet3
    worksheet3.getColumn("A").width = 3;
    worksheet3.getColumn("B").width = 28;
    worksheet3.getColumn("C").width = 1.5;
    worksheet3.getColumn("D").width = 7;
    worksheet3.getColumn("E").width = 5.5;
    worksheet3.getColumn("F").width = 33;
    worksheet3.getColumn("G").width = 42;
    worksheet3.getColumn("H").width = 31;

    worksheet4.getColumn("A").width = 4;
    worksheet4.getColumn("B").width = 32;
    worksheet4.getColumn("C").width = 84;
    worksheet4.getColumn("D").width = 11;
    worksheet4.getColumn("E").width = 11;
    worksheet4.getColumn("F").width = 11;
    worksheet4.getColumn("G").width = 11;
    worksheet4.getColumn("H").width = 11;
    worksheet4.getColumn("I").width = 11;

    worksheet4.addImage(logoImage, {
      tl: { col: 1, row: 0.5 },
      ext: { width: 100, height: 60 },
    });

    // desain Worksheet 4
    // worksheet4.getColumn("A").width = 4;
    // worksheet4.getColumn("B").width = 32;
    // worksheet4.getColumn("C").width = 84;
    // worksheet4.getColumn("D").width = 11;
    // worksheet4.getColumn("E").width = 11;
    // worksheet4.getColumn("F").width = 11;
    // worksheet4.getColumn("G").width = 11;
    // worksheet4.getColumn("H").width = 11;
    // worksheet4.getColumn("I").width = 11;
    worksheet4.mergeCells("A1:I1");
    worksheet4.mergeCells("A2:I2");
    worksheet4.mergeCells("A3:I3");
    worksheet4.mergeCells("A4:I4");
    worksheet4.mergeCells("A5:I5");
    worksheet4.mergeCells("A6:A7");
    worksheet4.mergeCells("B6:B7");
    worksheet4.mergeCells("C6:C7");
    worksheet4.mergeCells("D6:H6");
    worksheet4.mergeCells("I6:I7");
    worksheet4.addConditionalFormatting({
      ref: "C8:I57",
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
            alignment: {
              wrapText: true,
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet4.addConditionalFormatting({
      ref: "A1:A4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              // top: { style: "thin" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
            alignment: {
              wrapText: true,
              vertical: "middle",
              horizontal: "center",
            },
            font: {
              name: "Stencil",
              family: 4,
              size: 18,
              color: { argb: "000000" },
            },
            fill: {
              type: "pattern",
              pattern: "solid",
              bgColor: { argb: "32CD32", fgColor: { argb: "32CD32" } },
            },
          },
        },
      ],
    });
    worksheet4.getCell("A1").value = `RUMUSAN BUTIR SOAL`;
    worksheet4.getCell("A2").value = `${ujian.toJSON().tipe_format}`;
    worksheet4.getCell("A3").value = `${sekolah.nama}`;
    worksheet4.getCell("A4").value = `${ta.tahun}`;
    worksheet4.getCell("A5").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "000000" },
      bgColor: { argb: "000000" },
    };
    worksheet4.addConditionalFormatting({
      ref: "A6:I7",
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
              name: "Calibri",
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

    worksheet4.addConditionalFormatting({
      ref: "A8:I57",
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
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet4.getCell("B60").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet4.getCell("B61").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "KEPALA SEKOLAH",
        },
      ],
    };
    worksheet4.getCell("B66").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${kepsek}`,
        },
      ],
    };

    worksheet4.getCell("G60").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${sekolah.kabupaten},`,
        },
      ],
    };
    worksheet4.getCell("G61").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "GURU MATA PELAJARAN",
        },
      ],
    };
    worksheet4.getCell("G66").value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };

    // worksheet4.getColumn("A").width = 4;
    // worksheet4.getColumn("B").width = 32;
    // worksheet4.getColumn("C").width = 84;
    // worksheet4.getColumn("D").width = 11;
    // worksheet4.getColumn("E").width = 11;
    // worksheet4.getColumn("F").width = 11;
    // worksheet4.getColumn("G").width = 11;
    // worksheet4.getColumn("H").width = 11;
    // worksheet4.getColumn("I").width = 11;

    worksheet5.mergeCells("A1:L1");
    worksheet5.mergeCells("A2:L2");
    worksheet5.mergeCells("A3:L3");
    worksheet5.mergeCells("A4:L4");
    worksheet5.mergeCells("A21:L21");
    worksheet5.mergeCells("A11:L11");
    worksheet5.mergeCells("J6:L6");
    worksheet5.getColumn("A").width = 3;
    worksheet5.getColumn("B").width = 4.3;
    worksheet5.getColumn("C").width = 3;
    worksheet5.getColumn("D").width = 8.5;
    worksheet5.getColumn("E").width = 7.5;
    worksheet5.getColumn("F").width = 10;
    worksheet5.getColumn("G").width = 1.5;
    worksheet5.getColumn("H").width = 8.5;
    worksheet5.getColumn("I").width = 8.5;
    worksheet5.getColumn("J").width = 8.5;
    worksheet5.getColumn("K").width = 8.5;
    worksheet5.getColumn("L").width = 12;

    worksheet5.getCell("A1").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 14,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.toJSON().tipe_format}`,
        },
      ],
    };
    worksheet5.getCell("A2").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 14,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${sekolah.toJSON().tingkat_format}`,
        },
      ],
    };

    worksheet5.getCell("A3").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 16,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${sekolah.nama}`,
        },
      ],
    };
    worksheet5.getCell("A4").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 12,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ta.tahun}`,
        },
      ],
    };
    worksheet5.addConditionalFormatting({
      ref: "A5:L5",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            border: {
              top: { style: "double" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "A1:A4",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "center",
            },
          },
        },
      ],
    });

    worksheet5.getCell("G6").value = ":";
    worksheet5.getCell("G7").value = ":";
    worksheet5.getCell("G8").value = ":";
    worksheet5.getCell("G9").value = ":";

    worksheet5.getCell("E6").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Mata Pelajaran`,
        },
      ],
    };
    worksheet5.getCell("H6").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.toJSON().mataPelajaran.nama}`,
        },
      ],
    };
    worksheet5.getCell("J6").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            // bold: true,
          },
          text: `${ujian.toJSON().mataPelajaran.user.nama}`,
        },
      ],
    };
    worksheet5.getCell("J6").alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    worksheet5.getCell("E7").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Kelas/Semester`,
        },
      ],
    };
    worksheet5.getCell("H7").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.tingkat}/${ta.semester}`,
        },
      ],
    };
    worksheet5.getCell("E8").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Hari/Tanggal`,
        },
      ],
    };
    worksheet5.getCell("E9").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `Jumlah Soal/Waktu`,
        },
      ],
    };
    worksheet5.getCell("H9").value = {
      richText: [
        {
          font: {
            name: "Times New Roman",
            family: 4,
            size: 11,
            color: { argb: "000000" },
            bold: true,
          },
          text: `${ujian.TotalUjian} soal`,
        },
      ],
    };
    worksheet5.getCell("A11").value = {
      richText: [
        {
          font: {
            name: "Arial",
            family: 4,
            size: 10,
            color: { argb: "000000" },
            bold: true,
            italic: true,
          },
          text: `PETUNJUK`,
        },
      ],
    };
    worksheet5.addConditionalFormatting({
      ref: "A11:L11",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              top: { style: "thin" },
              left: { style: "thin" },
              // bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "A11:A20",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              // top: { style: "thin" },
              left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "L11:L20",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            border: {
              // top: { style: "thin" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              right: { style: "thin" },
            },
          },
        },
      ],
    });

    worksheet5.getCell("A12").value = "1.";
    worksheet5.getCell("B12").value =
      "a. Tulislah dengan jelas; Nama, Nomor Peserta, Kelas, pada lembar jawaban yang sudah disediakan.";
    worksheet5.getCell("B13").value =
      "b. Jawaban dikerjakan dengan cara menghitamkan bulatan kecil sesuai dengan pilihan yang dianggap benar.";
    worksheet5.getCell("B14").value =
      "c. Hapuslah jawaban yang dianggap keliru jika anda ingin menggantinya.";
    worksheet5.getCell("B15").value =
      "d. Lembar Jawaban tidak boleh kotor, basah atau rusak.";
    worksheet5.getCell("A16").value = "2.";
    worksheet5.getCell("B16").value =
      "Bacalah soal secara teliti sebelum anda menjawabnya.";
    worksheet5.getCell("A17").value = "3.";
    worksheet5.getCell("B17").value =
      "Dahulukan menjawab soal-soal yang dianggap mudah.";
    worksheet5.getCell("A18").value = "4.";
    worksheet5.getCell("B18").value =
      "Mintalah kertas buram kepada pengawas jika diperlukan.";
    worksheet5.getCell("A19").value = "5.";
    worksheet5.getCell("B19").value =
      "Periksa kembali jawaban anda sebelum menyerahkannya kepada pengawas.";
    worksheet5.getCell("A20").value = "6.";
    worksheet5.getCell("B20").value = "Berdoalah sebelum mengerjakan soal.";
    worksheet5.getCell("A21").value =
      "PILIHLAH SALAH SATU JAWABAN YANG BENAR PADA HURUF A, B, C, D, ATAU D !";
    worksheet5.addConditionalFormatting({
      ref: "A12:B20",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            font: {
              name: "Arial",
              family: 4,
              size: 8,
              color: { argb: "000000" },
              // bold: true,
              // italic: true,
            },
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
          },
        },
      ],
    });
    worksheet5.addConditionalFormatting({
      ref: "A21:L21",
      rules: [
        {
          type: "expression",
          formulae: ["MOD(ROW()+COLUMN(),1)=0"],
          style: {
            alignment: {
              vertical: "middle",
              horizontal: "left",
            },
            font: {
              name: "Arial",
              family: 4,
              size: 10,
              color: { argb: "000000" },
              bold: true,
              // italic: true,
            },
            border: {
              top: { style: "thin" },
              // left: { style: "thin" },
              // bottom: { style: "thin" },
              // right: { style: "thin" },
            },
          },
        },
      ],
    });

    // looping worksheet 5
    worksheet5.addImage(logoImage, {
      tl: { col: 1, row: 0.5 },
      ext: { width: 100, height: 60 },
    });

    let namaFile = `/uploads/kartu-soal-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

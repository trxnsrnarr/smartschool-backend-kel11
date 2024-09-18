const Excel = require("exceljs");
const nodeHtmlToImage = require("node-html-to-image");
const sizeOf = require("image-size");
const htmlEscaper = require("html-escaper");
const { formattedHTML } = require("../../Utils/KartuSoal");
require("events").EventEmitter.defaultMaxListeners = 100;

class DownloadService {
  static async kartuUjian(
    sekolah,
    ta,
    kepsek,
    ujian,
    esaiFilter,
    keluarantanggal
    // logoFileName
  ) {
    let workbook = new Excel.Workbook();
    let worksheet3 = workbook.addWorksheet(`Kartu Soal Essay`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    // ADD LOGO
    // const logoImage = workbook.addImage({
    //   filename:
    //     logoFileName == "logo.png"
    //       ? `public/img/${logoFileName}`
    //       : `public/tmp/${logoFileName}`,
    //   extension: "png",
    // });
    // loop data into worksheet

    //loop Esai
    await Promise.all(
      esaiFilter.map(async (d, idx) => {
        const imageEsai = await nodeHtmlToImage({
          html: formattedHTML(d.pertanyaan),
          type: "jpeg",
          quality: 25,
          encoding: "base64",
          selector: "div",
          puppeteerArgs: {
            args: [
              "--no-sandbox",
              "--disable-setuid-sandbox",
              "--disable-extensions",
            ],
          },
        });
        const dimensions = sizeOf(Buffer.from(imageEsai, "base64"));
        const imageEsay = workbook.addImage({
          base64: imageEsai,
          extension: "jpeg",
        });
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
              text: `PEMERINTAH DAERAH PROVINSI ${
                sekolah.provinsi ? sekolah.provinsi.toUpperCase() : ""
              }`,
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
              text: sekolah?.id == 33 ? `Kode TP` : `Kompetensi Dasar`,
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
          ujian.toJSON().mataPelajaran
          ? ujian.toJSON().mataPelajaran.nama
          : ""
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
        worksheet3.getCell(`F${(idx + 1) * 32 - 21}`).value =
          sekolah?.id == 33
            ? `Tujuan Pembelajaran`
            : `Indikator Pencapaian Kompetensi`;
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
        worksheet3.getRow(`${(idx + 1) * 32 + 17}`).height =
          (dimensions.height * 3) / 4 + 4;
        worksheet3.addImage(imageEsay, {
          tl: { col: 4.1, row: (idx + 1) * 32 - 18.9 },
          ext: {
            width: `${dimensions.width}`,
            height: `${dimensions.height}`,
          },
        });

        // worksheet3.getCell(`E${(idx + 1) * 32 - 17}`).value = `${
        //   d
        //     ? d.pertanyaan.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;
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
          ujian.toJSON().mataPelajaran
          ? ujian.toJSON().mataPelajaran.user.nama
          : ""        }`;

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
    //desain worksheet3
    worksheet3.getColumn("A").width = 3;
    worksheet3.getColumn("B").width = 28;
    worksheet3.getColumn("C").width = 1.5;
    worksheet3.getColumn("D").width = 7;
    worksheet3.getColumn("E").width = 5.5;
    worksheet3.getColumn("F").width = 33;
    worksheet3.getColumn("G").width = 42;
    worksheet3.getColumn("H").width = 31;

    // worksheet4.addImage(logoImage, {
    //   tl: { col: 1, row: 0.5 },
    //   ext: { width: 100, height: 60 },
    // });

    worksheet3.views = [{ showGridLines: false }];

    let namaFile = `/uploads/Kartu-Soal-Esai-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

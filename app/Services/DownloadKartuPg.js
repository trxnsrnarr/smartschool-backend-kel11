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
    pgFilter,
    keluarantanggal
    // logoFileName
  ) {
    let workbook = new Excel.Workbook();

    let worksheet2 = workbook.addWorksheet(`Kartu Soal PG`, {
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

    //loop PG
    await Promise.all(
      pgFilter.map(async (d, idx) => {
        // image
        const image = await nodeHtmlToImage({
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
        const dimensions = sizeOf(Buffer.from(image, "base64"));
        const imagea = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_a),
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
        const dimensionsa = sizeOf(Buffer.from(imagea, "base64"));
        const imageb = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_b),
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
        const dimensionsb = sizeOf(Buffer.from(imageb, "base64"));
        const imagec = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_c),
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
        const dimensionsc = sizeOf(Buffer.from(imagec, "base64"));
        const imaged = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_d),
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
        const dimensionsd = sizeOf(Buffer.from(imaged, "base64"));
        const imagee = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_e),
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
        const dimensionse = sizeOf(Buffer.from(imagee, "base64"));

        const imageId = workbook.addImage({
          base64: image,
          extension: "jpeg",
        });
        const imageIda = workbook.addImage({
          base64: imagea,
          extension: "jpeg",
        });
        const imageIdb = workbook.addImage({
          base64: imageb,
          extension: "jpeg",
        });
        const imageIdc = workbook.addImage({
          base64: imagec,
          extension: "jpeg",
        });
        const imageIdd = workbook.addImage({
          base64: imaged,
          extension: "jpeg",
        });
        const imageIde = workbook.addImage({
          base64: imagee,
          extension: "jpeg",
        });

        // worksheet 2

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

        // worksheet2.addImage(logoImage, "B2:C5");

        worksheet2.getCell(`B${(idx + 1) * 32 - 30}`).value = {
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
              text: sekolah?.id == 33 ? `Kode TP` : `Kompetensi Dasar`,
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
              text: `${d.kd}`,
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
        worksheet2.getCell(`D${(idx + 1) * 32 - 25}`).value = `${sekolah.nama}`;
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
          ujian.toJSON().mataPelajaran ? ujian.toJSON().mataPelajaran?.nama : ""
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
        ).value = `${d.kd_konten_materi}`;
        worksheet2.getCell(`F${(idx + 1) * 32 - 21}`).value =
          sekolah?.id == 33
            ? `Tujuan Pembelajaran`
            : `Indikator Pencapaian Kompetensi`;
        worksheet2.getCell(
          `F${(idx + 1) * 32 - 20}`
        ).value = `${d.akm_konteks_materi}`;
        worksheet2.getCell(`H${(idx + 1) * 32 - 21}`).value = `Aspek (Level)`;
        worksheet2.getCell(
          `H${(idx + 1) * 32 - 20}`
        ).value = `${d.aspek_level}`;
        worksheet2.getCell(`B${(idx + 1) * 32 - 19}`).value = `Indikator Soal`;
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
              text: `${d.akm_konten_materi}`,
            },
          ],
        };
        worksheet2.getCell(`C${(idx + 1) * 32 - 19}`).value = `Nomor`;
        worksheet2.getCell(`C${(idx + 1) * 32 - 17}`).value = `${idx + 1}`;
        worksheet2.getCell(
          `E${(idx + 1) * 32 - 19}`
        ).value = `Rumusan Butir Soal`;
        worksheet2.getRow((idx + 1) * 32 - 17).height =
          (dimensions.height * 3) / 4 + 4;
        worksheet2.addImage(imageId, {
          tl: { col: 4.1, row: (idx + 1) * 32 - 18.9 },
          ext: {
            width: `${dimensions.width}`,
            height: `${dimensions.height}`,
          },
        });
        // worksheet2.getCell(`E${(idx + 1) * 32 - 17}`).value = `${
        //   d
        //     ? d.pertanyaan.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;
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
              text: `${d.kj_pg}`,
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
        // worksheet2.getCell(`F${(idx + 1) * 32 - 15}`).value = `${
        //   d
        //     ? d.jawaban_a.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;
        // worksheet2.getCell(`F${(idx + 1) * 32 - 14}`).value = `${
        //   d
        //     ? d.jawaban_b.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;
        // worksheet2.getCell(`F${(idx + 1) * 32 - 13}`).value = `${
        //   d
        //     ? d.jawaban_c.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;
        // worksheet2.getCell(`F${(idx + 1) * 32 - 12}`).value = `${
        //   d
        //     ? d.jawaban_d.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;
        // worksheet2.getCell(`F${(idx + 1) * 32 - 11}`).value = `${
        //   d
        //     ? d.jawaban_e.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //     : "-"
        // }`;

        worksheet2.getRow((idx + 1) * 32 - 15).height =
          (dimensionsa.height * 3) / 4 + 4;
        worksheet2.addImage(imageIda, {
          tl: { col: 5.1, row: (idx + 1) * 32 - 15.9 },
          ext: {
            width: `${dimensionsa.width}`,
            height: `${dimensionsa.height}`,
          },
        });
        worksheet2.getRow((idx + 1) * 32 - 14).height =
          (dimensionsb.height * 3) / 4 + 4;
        worksheet2.addImage(imageIdb, {
          tl: { col: 5.1, row: (idx + 1) * 32 - 14.9 },
          ext: {
            width: `${dimensionsb.width}`,
            height: `${dimensionsb.height}`,
          },
        });
        worksheet2.getRow((idx + 1) * 32 - 13).height =
          (dimensionsc.height * 3) / 4 + 4;
        worksheet2.addImage(imageIdc, {
          tl: { col: 5.1, row: (idx + 1) * 32 - 13.9 },
          ext: {
            width: `${dimensionsc.width}`,
            height: `${dimensionsc.height}`,
          },
        });
        worksheet2.getRow((idx + 1) * 32 - 12).height =
          (dimensionsd.height * 3) / 4 + 4;
        worksheet2.addImage(imageIdd, {
          tl: { col: 5.1, row: (idx + 1) * 32 - 12.9 },
          ext: {
            width: `${dimensionsd.width}`,
            height: `${dimensionsd.height}`,
          },
        });
        worksheet2.getRow((idx + 1) * 32 - 11).height =
          (dimensionse.height * 3) / 4 + 4;
        worksheet2.addImage(imageIde, {
          tl: { col: 5.1, row: (idx + 1) * 32 - 11.9 },
          ext: {
            width: `${dimensionse.width}`,
            height: `${dimensionse.height}`,
          },
        });

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
          ujian.toJSON().mataPelajaran
            ? ujian.toJSON().mataPelajaran.user.nama
            : ""
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

        // worksheet 3
      })
    );

    //loop Esai

    worksheet2.getColumn("A").width = 3;
    worksheet2.getColumn("B").width = 28;
    worksheet2.getColumn("C").width = 1.5;
    worksheet2.getColumn("D").width = 7;
    worksheet2.getColumn("E").width = 5.5;
    worksheet2.getColumn("F").width = 33;
    worksheet2.getColumn("G").width = 85;
    worksheet2.getColumn("H").width = 31;

    worksheet2.views = [{ showGridLines: false }];

    let namaFile = `/uploads/kartu-soal-pg-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

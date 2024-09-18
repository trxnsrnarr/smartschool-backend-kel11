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

    let worksheet4 = workbook.addWorksheet(`Rumusan Soal`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

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
          puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox","--disable-extensions"] },
        });
        const dimensions = sizeOf(Buffer.from(image, "base64"));
        const imagea = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_a),
          type: "jpeg",
          quality: 25,
          encoding: "base64",
          selector: "div",
          puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox","--disable-extensions"] },
        });
        const dimensionsa = sizeOf(Buffer.from(imagea, "base64"));
        const imageb = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_b),
          type: "jpeg",
          quality: 25,
          encoding: "base64",
          selector: "div",
          puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox","--disable-extensions"] },
        });
        const dimensionsb = sizeOf(Buffer.from(imageb, "base64"));
        const imagec = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_c),
          type: "jpeg",
          quality: 25,
          encoding: "base64",
          selector: "div",
          puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox","--disable-extensions"] },
        });
        const dimensionsc = sizeOf(Buffer.from(imagec, "base64"));
        const imaged = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_d),
          type: "jpeg",
          quality: 25,
          encoding: "base64",
          selector: "div",
          puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox","--disable-extensions"] },
        });
        const dimensionsd = sizeOf(Buffer.from(imaged, "base64"));
        const imagee = await nodeHtmlToImage({
          html: formattedHTML(d.jawaban_e),
          type: "jpeg",
          quality: 25,
          encoding: "base64",
          selector: "div",
          puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox","--disable-extensions"] },
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

        worksheet4.getCell(`A${idx + 8}`).value = idx + 1;
        worksheet4.getCell(`B${idx + 8}`).value = d ? d.kd_konten_materi : "-";
        worksheet4.getCell(`I${idx + 8}`).value = d ? d.kj_pg : "-";

        // worksheet4.columns = [
        //   { key: "No" },
        //   { key: "INDIKATOR_SOAL" },
        //   // { key: "RUMUSAN_BUTIR_SOAL" },
        //   // { key: "A" },
        //   // { key: "B" },
        //   // { key: "C" },
        //   // { key: "D" },
        //   // { key: "E" },
        //   { key: "KUNCI_JAWABAN" },
        // ];

        // Add row using key mapping to columns
        worksheet4.getRow(idx + 8).height = (dimensions.height * 3) / 4 + 4;
        worksheet4.addImage(imageId, {
          tl: { col: 2.1, row: idx + 7.1 },
          ext: {
            width: `${dimensions.width}`,
            height: `${dimensions.height}`,
          },
        });
        worksheet4.addImage(imageIda, {
          tl: { col: 3.1, row: idx + 7.1 },
          ext: {
            width: `${dimensionsa.width}`,
            height: `${dimensionsa.height}`,
          },
        });
        worksheet4.addImage(imageIdb, {
          tl: { col: 4.1, row: idx + 7.1 },
          ext: {
            width: `${dimensionsb.width}`,
            height: `${dimensionsb.height}`,
          },
        });
        worksheet4.addImage(imageIdc, {
          tl: { col: 5.1, row: idx + 7.1 },
          ext: {
            width: `${dimensionsc.width}`,
            height: `${dimensionsc.height}`,
          },
        });
        worksheet4.addImage(imageIdd, {
          tl: { col: 6.1, row: idx + 7.1 },
          ext: {
            width: `${dimensionsd.width}`,
            height: `${dimensionsd.height}`,
          },
        });
        worksheet4.addImage(imageIde, {
          tl: { col: 7.1, row: idx + 7.1 },
          ext: {
            width: `${dimensionse.width}`,
            height: `${dimensionse.height}`,
          },
        });

        // worksheet4.addRow({
        //   No: `${idx + 1}`,
        //   INDIKATOR_SOAL: d ? d.kd_konten_materi : "-",
        //   // RUMUSAN_BUTIR_SOAL: d
        //   //   ? d.pertanyaan.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //   //   : "-",
        //   // A: d
        //   //   ? d.jawaban_a.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //   //   : "-",
        //   // B: d
        //   //   ? d.jawaban_b.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //   //   : "-",
        //   // C: d
        //   //   ? d.jawaban_c.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //   //   : "-",
        //   // D: d
        //   //   ? d.jawaban_d.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //   //   : "-",
        //   // E: d
        //   //   ? d.jawaban_e.replace(/(<([^>]+)>)/gi, "").replace(/\&nbsp;/gi, "")
        //   //   : "-",
        //   KUNCI_JAWABAN: d ? d.kj_pg : "-",
        // });
      })
    );

    worksheet4.getColumn("A").width = 4;
    worksheet4.getColumn("B").width = 32;
    worksheet4.getColumn("C").width = 115;
    worksheet4.getColumn("D").width = 115;
    worksheet4.getColumn("E").width = 115;
    worksheet4.getColumn("F").width = 115;
    worksheet4.getColumn("G").width = 115;
    worksheet4.getColumn("H").width = 115;
    worksheet4.getColumn("I").width = 11;

    // worksheet4.addImage(logoImage, {
    //   tl: { col: 1, row: 0.5 },
    //   ext: { width: 100, height: 60 },
    // });

    // desain Worksheet 4
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
      ref: `C8:I${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 6}`,
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
      ref: `A8:I${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 6}`,
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

    worksheet4.getCell(
      `B${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 8}`
    ).value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "MENGETAHUI",
        },
      ],
    };
    worksheet4.getCell(
      `B${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 9}`
    ).value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "KEPALA SEKOLAH",
        },
      ],
    };
    worksheet4.getCell(
      `B${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 14}`
    ).value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${kepsek}`,
        },
      ],
    };

    worksheet4.getCell(
      `G${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 8}`
    ).value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${sekolah.kabupaten},`,
        },
      ],
    };
    worksheet4.getCell(
      `G${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 9}`
    ).value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: "GURU MATA PELAJARAN",
        },
      ],
    };
    worksheet4.getCell(
      `G${(ujian.toJSON().__meta__.TotalUjian + 1) * 1 + 14}`
    ).value = {
      richText: [
        {
          font: { name: "Calibri" },
          text: `${ ujian.toJSON().mataPelajaran
            ? ujian.toJSON().mataPelajaran.user.nama
            : ""}`,
        },
      ],
    };

    let namaFile = `/uploads/kartu-soal-rumusan-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

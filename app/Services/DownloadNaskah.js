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
    ujian,
    pgFilter,
    keluarantanggal
    // logoFileName
  ) {
    let workbook = new Excel.Workbook();
    let worksheet5 = workbook.addWorksheet(`Naskah Soal`, {
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

        // worksheet 2

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

        worksheet5.getRow(`${(idx + 1) * 7 + 15}`).values = [`${idx + 1}`];
        worksheet5.getRow(`${(idx + 1) * 7 + 15}`).height =
          (dimensions.height * 3) / 4 + 4;
        worksheet5.addImage(imageId, {
          tl: { col: 1.1, row: (idx + 1) * 7 + 14.1 },
          ext: {
            width: `${dimensions.width}`,
            height: `${dimensions.height}`,
          },
        });

        worksheet5.getRow(`${(idx + 1) * 7 + 16}`).values = ["", "A"];
        worksheet5.getRow(`${(idx + 1) * 7 + 16}`).height =
          (dimensionsa.height * 3) / 4 + 4;
        worksheet5.addImage(imageIda, {
          tl: { col: 2.1, row: (idx + 1) * 7 + 15.1 },
          ext: {
            width: `${dimensionsa.width}`,
            height: `${dimensionsa.height}`,
          },
        });
        worksheet5.getRow(`${(idx + 1) * 7 + 17}`).values = ["", "B"];
        worksheet5.getRow(`${(idx + 1) * 7 + 17}`).height =
          (dimensionsb.height * 3) / 4 + 4;
        worksheet5.addImage(imageIdb, {
          tl: { col: 2.1, row: (idx + 1) * 7 + 16.1 },
          ext: {
            width: `${dimensionsb.width}`,
            height: `${dimensionsb.height}`,
          },
        });
        worksheet5.getRow(`${(idx + 1) * 7 + 18}`).values = ["", "C"];
        worksheet5.getRow(`${(idx + 1) * 7 + 18}`).height =
          (dimensionsc.height * 3) / 4 + 4;
        worksheet5.addImage(imageIdc, {
          tl: { col: 2.1, row: (idx + 1) * 7 + 17.1 },
          ext: {
            width: `${dimensionsc.width}`,
            height: `${dimensionsc.height}`,
          },
        });
        worksheet5.getRow(`${(idx + 1) * 7 + 19}`).values = ["", "D"];
        worksheet5.getRow(`${(idx + 1) * 7 + 19}`).height =
          (dimensionsd.height * 3) / 4 + 4;
        worksheet5.addImage(imageIdd, {
          tl: { col: 2.1, row: (idx + 1) * 7 + 18.1 },
          ext: {
            width: `${dimensionsd.width}`,
            height: `${dimensionsd.height}`,
          },
        });
        worksheet5.getRow(`${(idx + 1) * 7 + 20}`).values = ["", "E"];
        worksheet5.getRow(`${(idx + 1) * 7 + 20}`).height =
          (dimensionse.height * 3) / 4 + 4;
        worksheet5.addImage(imageIde, {
          tl: { col: 2.1, row: (idx + 1) * 7 + 19.1 },
          ext: {
            width: `${dimensionse.width}`,
            height: `${dimensionse.height}`,
          },
        });

        worksheet5.mergeCells(`B${(idx + 1) * 7 + 15}:L${(idx + 1) * 7 + 15}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 16}:L${(idx + 1) * 7 + 16}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 17}:L${(idx + 1) * 7 + 17}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 18}:L${(idx + 1) * 7 + 18}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 19}:L${(idx + 1) * 7 + 19}`);
        worksheet5.mergeCells(`C${(idx + 1) * 7 + 20}:L${(idx + 1) * 7 + 20}`);
      })
    );

    //loop Esai

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
          text: `${ ujian.toJSON().mataPelajaran
            ? ujian.toJSON().mataPelajaran.nama
            : ""}`,
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
          text: `${ ujian.toJSON().mataPelajaran
            ? ujian.toJSON().mataPelajaran.user.nama
            : ""}`,
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
    worksheet5.views = [{ showGridLines: false }];

    let namaFile = `/uploads/kartu-soal-naskah-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

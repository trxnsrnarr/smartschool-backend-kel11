const Excel = require("exceljs");
const nodeHtmlToImage = require("node-html-to-image");
const sizeOf = require("image-size");
const htmlEscaper = require("html-escaper");
require("events").EventEmitter.defaultMaxListeners = 100;;

class DownloadService {
  static async kartuUjian(
    ujian,
    keluarantanggal
    // logoFileName
  ) {
    let workbook = new Excel.Workbook();

    let worksheet6 = workbook.addWorksheet(`Sheet1`, {
      properties: { tabColor: { argb: "FFC0000" } },
    });

    worksheet6.addConditionalFormatting({
      ref: `A2:B10`,
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
            }
          },
        },
      ],
    });
    worksheet6.addConditionalFormatting({
      ref: `D2:E3`,
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
            }
          },
        },
      ],
    });

    worksheet6.getCell("A1").value = "Penjelasan";
    worksheet6.getCell("A2").value = "No KD";
    worksheet6.getCell("B2").value = "Nomor KD";
    worksheet6.getCell("A3").value = "Konten KD";
    worksheet6.getCell("B3").value = "Konten materi dari Nomor KD";
    worksheet6.getCell("D1").value = "Penjelasan";
    worksheet6.getCell("D2").value = "Tingkat Kesukaran";
    worksheet6.getCell("E2").value = "Mudah, Sedang, Sulit";
    worksheet6.getCell("D3").value = "Sumber Buku";
    worksheet6.getCell("E3").value = "Erlangga";
    worksheet6.getCell("A4").value = "Pencapaikan Kompetensi";
    worksheet6.getCell("B4").value = "pencapaian yang dapat dicapai pada materi contoh : mengoprasikan bilangan dalam bentuk akar";
    worksheet6.getCell("A5").value = "Indikator Soal";
    worksheet6.getCell("B5").value = "Contoh : Siswa dapat menentukan pengoprasian dalam bentuk akar";

    worksheet6.getCell("A6").value = "Level Kognitif";
    worksheet6.getCell("B6").value = "C1 sampai C6";
    worksheet6.getCell("A7").value = "Bentuk";
    worksheet6.getCell("B7").value = "PG dan Esai";
    worksheet6.getCell("A8").value = "Jawaban";
    worksheet6.getCell("B8").value = "A sampai E";
    worksheet6.getCell("A9").value = "Pembahasan";
    worksheet6.getCell("B9").value =
      "Informasi pembahasan materi setelah siswa mengerjakan ujian atau untuk kunci jawaban soal esai";
    worksheet6.getCell("A10").value = "Catatan";
    worksheet6.getCell("B10").value = "Untuk soal esai opsi A - E dikosongkan";

    await Promise.all(
      ujian.toJSON().soalUjian.map(async (d, idx) => {
        // worksheet 1
        worksheet6.getRow(12).values = [
          "No KD",
          "Konten KD",
          "Level Kognitif",
          "Tingkat Kesukaran",
          "Pencapaian Kompetensi",
          "Indikator Soal",
          "Sumber Buku",
          "Bentuk",
          "Pertanyaan",
          "Opsi A",
          "Opsi B",
          "Opsi C",
          "Opsi D",
          "Opsi E",
          "Jawaban",
          "Pembahasan",
          "Poin",
        ];

        worksheet6.columns = [
          { key: "no" },
          { key: "konten" },
          { key: "level" },
          { key: "tingkat" },
          { key: "konteks" },
          { key: "indikator" },
          { key: "sumber" },
          { key: "bentuk" },
          { key: "pertanyaan" },
          { key: "a" },
          { key: "b" },
          { key: "c" },
          { key: "d" },
          { key: "e" },
          { key: "jawaban" },
          { key: "pembahasan" },
          { key: "poin" },
        ];

        // Add row using key mapping to columns
        worksheet6.addRow({
          no: d.soal ? d.soal.kd : "-",
          konten: d.soal ? d.soal.kd_konten_materi : "-",
          level: d.soal ? d.soal.aspek_level : "-",
          tingkat: d.soal ? d.soal.tingkat_kesukaran : "-",
          konteks: d.soal ? d.soal.akm_konteks_materi : "-",
          indikator: d.soal ? d.soal.akm_konten_materi : "-",
          sumber: d.soal ? d.soal.sumber_buku : "-",
          sumber: d.soal ? d.soal.sumber_buku : "-",
          bentuk: d.soal ? d.soal.bentuk : "-",
          pertanyaan: d.soal
            ? d.soal.pertanyaan
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          a: d.soal
            ? d.soal.jawaban_a
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          b: d.soal
            ? d.soal.jawaban_b
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          c: d.soal
            ? d.soal.jawaban_c
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          d: d.soal
            ? d.soal.jawaban_d
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          e: d.soal
            ? d.soal.jawaban_e
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/\&nbsp;/gi, "")
            : "-",
          jawaban: d.soal ? d.soal.kj_pg : "-",
          pembahasan: d.soal ? d.soal.pembahasan : "-",
          poin: d.soal ? d.soal.nilai_soal : "-",
        });
      })
    );

    worksheet6.getColumn("A").width = 12;
    worksheet6.getColumn("B").width = 90;
    worksheet6.getColumn("C").width = 13;
    worksheet6.getColumn("D").width = 7;
    worksheet6.getColumn("E").width = 12;
    worksheet6.getColumn("F").width = 7;
    worksheet6.getColumn("G").width = 7;
    worksheet6.getColumn("H").width = 7;
    worksheet6.getColumn("I").width = 7;
    worksheet6.getColumn("J").width = 7;
    worksheet6.getColumn("K").width = 8;
    worksheet6.getColumn("L").width = 12;
    worksheet6.getColumn("M").width = 6;
    // looping worksheet 5
    // worksheet5.addImage(logoImage, {
    //   tl: { col: 1, row: 0.5 },
    //   ext: { width: 100, height: 60 },
    // });

    let namaFile = `/uploads/kartu-soal-template-${keluarantanggal}.xlsx`;

    // save workbook to disk
    await workbook.xlsx.writeFile(`public${namaFile}`);

    return namaFile;
  }
}

module.exports = DownloadService;

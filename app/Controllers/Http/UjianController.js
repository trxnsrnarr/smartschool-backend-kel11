"use strict";

const MSekolah = use("App/Models/MSekolah");
const TkPesertaUjian = use("App/Models/TkPesertaUjian");
const Mta = use("App/Models/Mta");
const User = use("App/Models/User");

const Firestore = use("App/Models/Firestore");
const firestore = new Firestore();
const db = firestore.db();
const bucket = firestore.bucket();
const FieldValue = firestore.FieldValue();
var striptags = require("striptags");
// reference to
const jadwalUjianReference = db.collection("jadwal-ujian");

const messagePostSuccess = "Data berhasil ditambahkan";
const messageSaveSuccess = "Data berhasil disimpan";
const messagePutSuccess = "Data berhasil diubah";
const messageDeleteSuccess = "Data berhasil dihapus";
const messageNotFound = "Data tidak ditemukan";
const messageForbidden = "Dilarang, anda bukan seorang admin";
const messageEmailSuccess = "Data berhasil dikirim ke email";
const pesanSudahDitambahkan = "Data sudah ditambahkan";

class UjianController {
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

  async putPesertaUjian({
    response,
    request,
    auth,
    params: { peserta_ujian_id },
  }) {
    const domain = request.headers().origin;

    const sekolah = await this.getSekolahByDomain(domain);

    if (sekolah == "404") {
      return response.notFound({ message: "Sekolah belum terdaftar" });
    }

    const user = await auth.getUser();

    const { warning } = request.post();

    const pesertaUjian = await TkPesertaUjian.query()
      .where({ id: peserta_ujian_id })
      .update({
        warning,
      });

    if (!pesertaUjian) {
      return response.notFound({
        message: messageNotFound,
      });
    }
    const pesertaUjianData = await TkPesertaUjian.query()
      .with("jawabanSiswa", (builder) => {
        builder.with("soal");
      })
      .with("user")
      .where({ id: peserta_ujian_id })
      .first();

    await jadwalUjianReference.doc(`${pesertaUjianData.doc_id}`).set(
      {
        warning: warning,
      },
      { merge: true }
    );
  }
}

module.exports = UjianController;

const MKeuTemplateAkun = use("App/Models/MKeuTemplateAkun");
const MKeuAkun = use("App/Models/MKeuAkun");
const MRumusKeuAkun = use("App/Models/MRumusKeuAkun");
const MRekSekolah = use("App/Models/MRekSekolah");

const otomatisAkun = async (sekolah) => {
  let data = [];

  data[0] = await MKeuAkun.create({
    nama: "HARTA",
    kode: 10000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[1] = await MKeuAkun.create({
    nama: "AKTIVA LANCAR",
    kode: 11000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[2] = await MKeuAkun.create({
    nama: "KAS & BANK",
    kode: 11100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[3] = await MKeuAkun.create({
    nama: "KAS",
    kode: 11110,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[4] = await MKeuAkun.create({
    nama: "DANA BOS",
    kode: 11120,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  await MRekSekolah.create({
    jenis: data[4].nama,
    bank: "DKI",
    norek: 12345,
    nama: data[4].nama,
    saldo: 0,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    pemasukan: 0,
    pengeluaran: 0,
    m_keu_akun_id: data[4].id,
  });
  
  data[5] = await MKeuAkun.create({
    nama: "DANA PMU",
    kode: 11130,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  await MRekSekolah.create({
    jenis: data[5].nama,
    bank: "DKI",
    norek: 12345,
    nama: data[5].nama,
    saldo: 0,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    pemasukan: 0,
    pengeluaran: 0,
    m_keu_akun_id: data[5].id,
  });
  data[6] = await MKeuAkun.create({
    nama: "DANA KOMITE",
    kode: 11140,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  await MRekSekolah.create({
    jenis: data[6].nama,
    bank: "DKI",
    norek: 12346,
    nama: data[6].nama,
    saldo: 0,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    pemasukan: 0,
    pengeluaran: 0,
    m_keu_akun_id: data[6].id,
  });
  data[7] = await MKeuAkun.create({
    nama: "SPP",
    kode: 11141,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  }); data[45] = await MKeuAkun.create({
    nama: "UANG SERAGAM",
    kode: 11141,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[46] = await MKeuAkun.create({
    nama: "UANG UJIAN",
    kode: 11141,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });


  // await MRekSekolah.create({
  //   jenis: data[7].nama,
  //   bank: "DKI",
  //   norek: 12345,
  //   nama: data[7].nama,
  //   saldo: 0,
  //   dihapus: 0,
  //   m_sekolah_id: sekolah.id,
  //   pemasukan: 0,
  //   pengeluaran: 0,
  //   m_keu_akun_id: data[7].id,
  // });
  data[8] = await MKeuAkun.create({
    nama: "PIUTANG",
    kode: 11200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[47] = await MKeuAkun.create({
    nama: "PIUTANG USAHA",
    kode: 11210,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[10] = await MKeuAkun.create({
    nama: "PIUTANG KARYAWAN",
    kode: 11220,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[9] = await MKeuAkun.create({
    nama: "PIUTANG SISWA",
    kode: 11230,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[11] = await MKeuAkun.create({
    nama: "PERLENGKAPAN SEKOLAH",
    kode: 11300,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[12] = await MKeuAkun.create({
    nama: "PEMBAYARAN DIMUKA",
    kode: 11400,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[13] = await MKeuAkun.create({
    nama: "PENDAPATAN DITERIMA DIMUKA",
    kode: 11500,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[14] = await MKeuAkun.create({
    nama: "AKTIVA TETAP",
    kode: 12000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[15] = await MKeuAkun.create({
    nama: "TANAH",
    kode: 12100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[16] = await MKeuAkun.create({
    nama: "BANGUNAN",
    kode: 12200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[17] = await MKeuAkun.create({
    nama: "MESIN DAN PERALATAN",
    kode: 12300,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[18] = await MKeuAkun.create({
    nama: "SARANA DAN PERLENGKAP",
    kode: 12400,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[19] = await MKeuAkun.create({
    nama: "PENYUSUTAN",
    kode: 12500,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[20] = await MKeuAkun.create({
    nama: "AKUMULASI PENYUSUTAN BANGUNAN",
    kode: 12510,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[48] = await MKeuAkun.create({
    nama: "AKUMULASI PENYUSUTAN MESIN DAN PERALATAN",
    kode: 12520,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  //HUTANG
  data[21] = await MKeuAkun.create({
    nama: "UTANG",
    kode: 20000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[22] = await MKeuAkun.create({
    nama: "UTANG LANCAR",
    kode: 21000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[23] = await MKeuAkun.create({
    nama: "UTANG USAHA",
    kode: 21100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[24] = await MKeuAkun.create({
    nama: "UTANG PAJAK",
    kode: 21200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[25] = await MKeuAkun.create({
    nama: "UTANG BANK JATUH TEMPO",
    kode: 21300,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[26] = await MKeuAkun.create({
    nama: "UTANG JANGKA PENDEK LAINNYA",
    kode: 21400,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[27] = await MKeuAkun.create({
    nama: "UTANG JANGKA PANJANG",
    kode: 22000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[28] = await MKeuAkun.create({
    nama: "UTANG BANK",
    kode: 22100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[29] = await MKeuAkun.create({
    nama: "MODAL SAHAM & LABA DITAHAN",
    kode: 30000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[30] = await MKeuAkun.create({
    nama: "MODAL",
    kode: 31000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[31] = await MKeuAkun.create({
    nama: "LABA DITAHAN",
    kode: 32000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[32] = await MKeuAkun.create({
    nama: "PENDAPATAN",
    kode: 40000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[33] = await MKeuAkun.create({
    nama: "PENDAPATAN SEKOLAH",
    kode: 41000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  // const rumusPendapatan = [
  //   {
  //     id: data[3].id,
  //   },
  //   {
  //     operator: "plus",
  //   },
  //   {
  //     id: data[4].id,
  //   },
  //   {
  //     operator: "plus",
  //   },
  //   {
  //     id: data[5].id,
  //   },
  //   {
  //     operator: "plus",
  //   },
  //   {
  //     id: data[6].id,
  //   },
  //   {
  //     operator: "plus",
  //   },
  //   {
  //     id: data[7].id,
  //   },
  // ];
  // await MRumusKeuAkun.create({
  //   tipe: "PENDAPATAN SEKOLAH",
  //   rumus: JSON.stringify(rumusPendapatan),
  //   m_keu_akun_id: data[33].id,
  // });
  data[34] = await MKeuAkun.create({
    nama: "PENDAPATAN LAINNYA",
    kode: 42000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[49] = await MKeuAkun.create({
    nama: "PENDAPATAN BUNGA BANK",
    kode: 42100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[50] = await MKeuAkun.create({
    nama: "PENDAPATAN KOPERASI",
    kode: 42200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  data[35] = await MKeuAkun.create({
    nama: "BEBAN",
    kode: 50000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[36] = await MKeuAkun.create({
    nama: "BEA BOS",
    kode: 51000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[59] = await MKeuAkun.create({
    nama: "HONOR GURU",
    kode: 51100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[60] = await MKeuAkun.create({
    nama: "BEA PMU",
    kode: 51100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[61] = await MKeuAkun.create({
    nama: "HONOR GURU",
    kode: 50210,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[62] = await MKeuAkun.create({
    nama: "PENGADAAN MESIN",
    kode: 50220,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[63] = await MKeuAkun.create({
    nama: "BAHAN PRAKTEK",
    kode: 50230,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[64] = await MKeuAkun.create({
    nama: "BEA KOMITE",
    kode: 51300,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[65] = await MKeuAkun.create({
    nama: "PEMBELIAN SERAGAM",
    kode: 50310,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[37] = await MKeuAkun.create({
    nama: "BEBAN GAJI",
    kode: 51400,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[66] = await MKeuAkun.create({
    nama: "BEBAN GAJI KARYAWAN",
    kode: 51410,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[67] = await MKeuAkun.create({
    nama: "BEBAN GAJI WALI KELAS",
    kode: 51420,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[38] = await MKeuAkun.create({
    nama: "BEBAN LISTRIK, AIR, TELEPON",
    kode: 51500,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[68] = await MKeuAkun.create({
    nama: "BEBAN INTERNER",
    kode: 51600,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[69] = await MKeuAkun.create({
    nama: "BEBAN PERLENGKAPAN",
    kode: 51700,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[70] = await MKeuAkun.create({
    nama: "BEBAN SEWA LAHAN PARKIR",
    kode: 51800,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[71] = await MKeuAkun.create({
    nama: "BEBAN PERALATAN",
    kode: 51900,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[72] = await MKeuAkun.create({
    nama: "BEBAN ASURANSI",
    kode: 52000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[73] = await MKeuAkun.create({
    nama: "BEBAN PENYUSUTAN",
    kode: 521000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[74] = await MKeuAkun.create({
    nama: "BEBAN PENYUSUTAN PERALATAN DAN MESIN",
    kode: 52110,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[75] = await MKeuAkun.create({
    nama: "BEBAN PENYUSUTAN PERALATAN BENGKEL",
    kode: 52120,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[76] = await MKeuAkun.create({
    nama: "BEBAN PENYUSUTAN KENDARAAN",
    kode: 52130,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[77] = await MKeuAkun.create({
    nama: "BEBAN PENYUSUTAN GEDUNG",
    kode: 52140,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[39] = await MKeuAkun.create({
    nama: "BEBAN ADMINISTRASI",
    kode: 52200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[40] = await MKeuAkun.create({
    nama: "BEBAN INVENTARIS",
    kode: 52300,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  }); 
  data[78] = await MKeuAkun.create({
    nama: "BEBAN PERBAIKAN",
    kode: 52400,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
    data[79] = await MKeuAkun.create({
    nama: "BEBAN LAINNYA",
    kode: 52500,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[80] = await MKeuAkun.create({
    nama: "BEBAN DISCOUNT FEE",
    kode: 52600,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[81] = await MKeuAkun.create({
    nama: "HONOR TIM UJIAN",
    kode: 52700,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  // const rumusBebanInventaris = [
  //   {
  //     id: data[16].id,
  //   },
  //   {
  //     operator: "plus",
  //   },
  //   {
  //     id: data[17].id,
  //   },
  //   {
  //     operator: "plus",
  //   },
  //   {
  //     id: data[18].id,
  //   },
  // ];
  // await MRumusKeuAkun.create({
  //   tipe: "BEBAN INVENTARIS",
  //   rumus: JSON.stringify(rumusBebanInventaris),
  //   m_keu_akun_id: data[40].id,
  // });
  data[41] = await MKeuAkun.create({
    nama: "PAJAK",
    kode: 80000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[42] = await MKeuAkun.create({
    nama: "DIVIDEN",
    kode: 90000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[43] = await MKeuAkun.create({
    nama: "DIVIDEN",
    kode: 91000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[44] = await MKeuAkun.create({
    nama: "UTANG DIVIDEN",
    kode: 92000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[51] = await MKeuAkun.create({
    nama: "KAS YAYASAN",
    kode: 9991,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[52] = await MKeuAkun.create({
    nama: "PEMERINTAH PUSAT",
    kode: 9992,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[53] = await MKeuAkun.create({
    nama: "PEMDA KARAWANG",
    kode: 9993,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[54] = await MKeuAkun.create({
    nama: "YAYASAN JAYABEKA",
    kode: 9994,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[55] = await MKeuAkun.create({
    nama: "AKUMULATIF LABA (RUGI)",
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[56] = await MKeuAkun.create({
    nama: "AKKUMULASI PENYUSUTAN",
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[57] = await MKeuAkun.create({
    nama: "AKKUMULASI DIVIDEN",
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[58] = await MKeuAkun.create({
    nama: "DISCOUNT",
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });

  const template = [
    {
      id: data[0].id,
      text: data[0].nama,
      children: [
        {
          id: data[1].id,
          text: data[1].nama,
          children: [
            {
              id: data[2].id,
              text: data[2].nama,
              children: [
                {
                  id: data[3].id,
                  text: data[3].nama,
                },
                {
                  id: data[4].id,
                  text: data[4].nama,
                },
                {
                  id: data[5].id,
                  text: data[5].nama,
                },
                {
                  id: data[6].id,
                  text: data[6].nama,
                  children: [
                    {
                      id: data[7].id,
                      text: data[7].nama,
                    },
                    {
                      id: data[45].id,
                      text: data[45].nama,
                    },
                    {
                      id: data[46].id,
                      text: data[46].nama,
                    },
                  ],
                },
              ],
            },
            {
              id: data[8].id,
              text: data[8].nama,
              children: [
                 {
                  id: data[47].id,
                  text: data[47].nama,
                },
                {
                  id: data[10].id,
                  text: data[10].nama,
                },
                {
                  id: data[9].id,
                  text: data[9].nama,
                },
              ],
            },
            {
              id: data[11].id,
              text: data[11].nama,
            },
            {
              id: data[12].id,
              text: data[12].nama,
            },
            {
              id: data[13].id,
              text: data[13].nama,
            },
          ],
        },
        {
          id: data[14].id,
          text: data[14].nama,
          children: [
            {
              id: data[15].id,
              text: data[15].nama,
            },
            {
              id: data[16].id,
              text: data[16].nama,
            },
            {
              id: data[17].id,
              text: data[17].nama,
            },
            {
              id: data[18].id,
              text: data[18].nama,
            },
            {
              id: data[19].id,
              text: data[19].nama,
              children: [
                {
                  id: data[20].id,
                  text: data[20].nama,
                },
                {
                  id: data[48].id,
                  text: data[48].nama,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: data[21].id,
      text: data[21].nama,
      children: [
        {
          id: data[22].id,
          text: data[22].nama,
          children: [
            {
              id: data[23].id,
              text: data[23].nama,
            },
            {
              id: data[24].id,
              text: data[24].nama,
            },
            {
              id: data[25].id,
              text: data[25].nama,
            },
            { id: data[26].id, text: data[26].nama },
          ],
        },
        {
          id: data[27].id,
          text: data[27].nama,
          children: [
            {
              id: data[28].id,
              text: data[28].nama,
            },
          ],
        },
      ],
    },
    {
      id: data[29].id,
      text: data[29].nama,
      children: [
        {
          id: data[30].id,
          text: data[30].nama,
        },
        {
          id: data[31].id,
          text: data[31].nama,
        },
      ],
    },
    {
      id: data[32].id,
      text: data[32].nama,
      children: [
        {
          id: data[33].id,
          text: data[33].nama,
        },
        {
          id: data[34].id,
          text: data[34].nama,
          children: [
            {
              id: data[49].id,
              text: data[49].nama,
            },
            {
              id: data[50].id,
              text: data[50].nama,
            },
          ],
        },
      ],
    },
    {
      id: data[35].id,
      text: data[35].nama,
      children: [
        {
          id: data[36].id,
          text: data[36].nama,
          children: [
            {
              id: data[59].id,
              text: data[59].nama,
            },
          ],
        },
        {
          id: data[60].id,
          text: data[60].nama,
          children: [
            {
              id: data[61].id,
              text: data[61].nama,
            },
            {
              id: data[62].id,
              text: data[62].nama,
            },
            {
              id: data[63].id,
              text: data[63].nama,
            },
          ],
        },
        {
          id: data[64].id,
          text: data[64].nama,
          children: [
            {
              id: data[65].id,
              text: data[65].nama,
            },
          ],
        },
        {
          id: data[37].id,
          text: data[37].nama,
          children: [
            {
              id: data[66].id,
              text: data[66].nama,
            },
            {
              id: data[67].id,
              text: data[67].nama,
            },
          ],
        },
        {
          id: data[38].id,
          text: data[38].nama,
        },
        {
          id: data[68].id,
          text: data[68].nama,
        },
        {
          id: data[69].id,
          text: data[69].nama,
        },
        {
          id: data[70].id,
          text: data[70].nama,
        },
        {
          id: data[71].id,
          text: data[71].nama,
        },
        {
          id: data[72].id,
          text: data[72].nama,
        },
        {
          id: data[73].id,
          text: data[73].nama,
          children: [
            {
              id: data[74].id,
              text: data[74].nama,
            },
            {
              id: data[75].id,
              text: data[75].nama,
            },
            {
              id: data[76].id,
              text: data[76].nama,
            },
            {
              id: data[77].id,
              text: data[77].nama,
            },
          ],
        },
        {
          id: data[39].id,
          text: data[39].nama,
        },
        {
          id: data[40].id,
          text: data[40].nama,
        },
        {
          id: data[78].id,
          text: data[78].nama,
        },
        {
          id: data[79].id,
          text: data[79].nama,
        },
        {
          id: data[80].id,
          text: data[80].nama,
        },
        {
          id: data[81].id,
          text: data[81].nama,
        },
      ],
    },
    {
      id: data[41].id,
      text: data[41].nama,
    },
    {
      id: data[42].id,
      text: data[42].nama,
      children: [
        {
          id: data[43].id,
          text: data[43].nama,
        },
        {
          id: data[44].id,
          text: data[44].nama,
        },
      ],
    },
    {
      id: data[51].id,
      text: data[51].nama,
    },
    {
      id: data[52].id,
      text: data[52].nama,
    },
    {
      id: data[53].id,
      text: data[53].nama,
    },
    {
      id: data[54].id,
      text: data[54].nama,
    },
    {
      id: data[55].id,
      text: data[55].nama,
    },
    {
      id: data[56].id,
      text: data[56].nama,
    },
    {
      id: data[57].id,
      text: data[57].nama,
    },
    {
      id: data[58].id,
      text: data[58].nama,
    },
  ];

  await MKeuTemplateAkun.create({
    m_sekolah_id: sekolah.id,
    template: JSON.stringify(template),
  });

  return 1;
};

module.exports = {
  otomatisAkun,
};

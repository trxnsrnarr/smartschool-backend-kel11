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
    nama: "DANA BOP",
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
    nama: "DANA BPMU",
    kode: 11140,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  await MRekSekolah.create({
    jenis: data[6].nama,
    bank: "DKI",
    norek: 12345,
    nama: data[6].nama,
    saldo: 0,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    pemasukan: 0,
    pengeluaran: 0,
    m_keu_akun_id: data[6].id,
  });
  data[7] = await MKeuAkun.create({
    nama: "DANA YAYASAN",
    kode: 11150,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });

  await MRekSekolah.create({
    jenis: data[7].nama,
    bank: "DKI",
    norek: 12345,
    nama: data[7].nama,
    saldo: 0,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    pemasukan: 0,
    pengeluaran: 0,
    m_keu_akun_id: data[7].id,
  });
  data[8] = await MKeuAkun.create({
    nama: "PIUTANG",
    kode: 11200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[9] = await MKeuAkun.create({
    nama: "PIUTANG PENDAPATAN JASA",
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
    nama: "INVENTARIS",
    kode: 12100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[16] = await MKeuAkun.create({
    nama: "LEMARI",
    kode: 12110,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[17] = await MKeuAkun.create({
    nama: "MEJA",
    kode: 12120,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[18] = await MKeuAkun.create({
    nama: "KURSI",
    kode: 12130,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[19] = await MKeuAkun.create({
    nama: "KENDARAAN",
    kode: 12200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[20] = await MKeuAkun.create({
    nama: "GEDUNG SEKOLAH",
    kode: 12300,
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
    nama: "PENDAPATAN JASA",
    kode: 41000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Kredit",
  });
  const rumusPendapatan = [
    {
      id: data[3].id,
    },
    {
      operator: "plus",
    },
    {
      id: data[4].id,
    },
    {
      operator: "plus",
    },
    {
      id: data[5].id,
    },
    {
      operator: "plus",
    },
    {
      id: data[6].id,
    },
    {
      operator: "plus",
    },
    {
      id: data[7].id,
    },
  ];
  await MRumusKeuAkun.create({
    tipe: "PENDAPATAN JASA",
    rumus: JSON.stringify(rumusPendapatan),
    m_keu_akun_id: data[33].id,
  });
  data[34] = await MKeuAkun.create({
    nama: "PENDAPATAN LAINNYA",
    kode: 42000,
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
    nama: "BEBAN LANGSUNG",
    kode: 51000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[37] = await MKeuAkun.create({
    nama: "BEBAN GAJI",
    kode: 51100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[38] = await MKeuAkun.create({
    nama: "BEBAN TIDAK LANGSUNG",
    kode: 52000,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[39] = await MKeuAkun.create({
    nama: "BEBAN ADMINISTRASI",
    kode: 52100,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  data[40] = await MKeuAkun.create({
    nama: "BEBAN INVENTARIS",
    kode: 52200,
    dihapus: 0,
    m_sekolah_id: sekolah.id,
    saldo_normal: "Debit",
  });
  const rumusBebanInventaris = [
    {
      id: data[16].id,
    },
    {
      operator: "plus",
    },
    {
      id: data[17].id,
    },
    {
      operator: "plus",
    },
    {
      id: data[18].id,
    },
  ];
  await MRumusKeuAkun.create({
    tipe: "BEBAN INVENTARIS",
    rumus: JSON.stringify(rumusBebanInventaris),
    m_keu_akun_id: data[40].id,
  });
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
                },
                {
                  id: data[7].id,
                  text: data[7].nama,
                },
              ],
            },
            {
              id: data[8].id,
              text: data[8].nama,
              children: [
                {
                  id: data[9].id,
                  text: data[9].nama,
                },
                {
                  id: data[10].id,
                  text: data[10].nama,
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
              children: [
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
              ],
            },
            {
              id: data[19].id,
              text: data[19].nama,
            },
            {
              id: data[20].id,
              text: data[20].nama,
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
              id: data[37].id,
              text: data[37].nama,
            },
          ],
        },
        {
          id: data[38].id,
          text: data[38].nama,
          children: [
            {
              id: data[39].id,
              text: data[39].nama,
            },
            {
              id: data[40].id,
              text: data[40].nama,
            },
          ],
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

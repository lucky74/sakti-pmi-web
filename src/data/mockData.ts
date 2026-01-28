export const countryStats = {
  TW: {
    name: 'Taiwan',
    male: 185000,
    female: 235000,
    total: 420000,
    confidence: 88,
    lat: 23.6978,
    lng: 120.9605,
    jobs: [
      { id: 1, title: 'Caregiver', salary: 'NT$ 20.000', company: 'P3MI Resmi Jaya', verified: true },
      { id: 2, title: 'Operator Pabrik', salary: 'NT$ 24.000', company: 'P3MI Amanah', verified: true },
    ]
  },
  MY: {
    name: 'Malaysia',
    male: 450000,
    female: 550000,
    total: 1000000,
    confidence: 90,
    lat: 4.2105,
    lng: 101.9758,
    jobs: [
      { id: 3, title: 'Konstruksi', salary: 'RM 1.500', company: 'P3MI Bangun Negeri', verified: true },
      { id: 4, title: 'Perkebunan', salary: 'RM 1.800', company: 'P3MI Sejahtera', verified: true },
    ]
  },
  HK: {
    name: 'Hong Kong',
    male: 10000,
    female: 150000,
    total: 160000,
    confidence: 95,
    lat: 22.3193,
    lng: 114.1694,
    jobs: [
      { id: 5, title: 'Domestic Helper', salary: 'HK$ 4.730', company: 'P3MI Global', verified: true },
    ]
  },
  JP: {
    name: 'Jepang',
    male: 30000,
    female: 25000,
    total: 55000,
    confidence: 92,
    lat: 36.2048,
    lng: 138.2529,
    jobs: [
      { id: 6, title: 'Kaigo (Careworker)', salary: '¥ 180.000', company: 'P3MI Sakura', verified: true },
      { id: 7, title: 'Pengolahan Makanan', salary: '¥ 160.000', company: 'P3MI Fuji', verified: true },
    ]
  },
  KR: {
    name: 'Korea Selatan',
    male: 35000,
    female: 5000,
    total: 40000,
    confidence: 85,
    lat: 35.9078,
    lng: 127.7669,
    jobs: [
      { id: 8, title: 'Manufaktur', salary: '₩ 2.000.000', company: 'P3MI Gingseng', verified: true },
    ]
  }
};

export const fraudPatterns = [
  "Meminta uang di muka (DP) dengan alasan administrasi.",
  "Menggunakan email gratisan (gmail/yahoo) bukan email perusahaan.",
  "Tidak memiliki izin SIP3MI yang valid.",
  "Menjanjikan keberangkatan instan tanpa pelatihan.",
  "Bertemu di tempat umum, bukan di kantor resmi."
];

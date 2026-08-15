/**
 * Single source of truth for per-route SEO metadata.
 *
 * Imported by two places, so it must stay plain JS with no JSX and no imports:
 *   - src/components/SEO.jsx  (runtime <head> for the SPA)
 *   - scripts/prerender.mjs   (build time, writes a real HTML file per route)
 *
 * Titles and descriptions are written for search results, not copied from the
 * page H1s. Indonesian is the indexed language: the language toggle is
 * client-side and does not change the URL, so a crawler only ever sees one.
 */

export const SITE = {
  url: 'https://baskomlabs.github.io',
  name: 'BaskomLabs',
  tagline_id: 'Bengkel Aplikasi Kompeni',
  tagline_en: 'Bengkel Aplikasi Kompeni',
  email: 'baskomdevs@gmail.com',
  ogImage: '/og-image.png',
  defaultLang: 'id',
  locale: 'id_ID',
  playDeveloperUrl: 'https://play.google.com/store/apps/dev?id=4678418670975116062',
};

const L = ' | BaskomLabs';

export const ROUTES = [
  {
    path: '/',
    priority: 1.0,
    title_id: 'BaskomLabs — Bengkel Aplikasi Kompeni',
    title_en: 'BaskomLabs — Indie Android Studio from Indonesia',
    desc_id:
      'Studio indie yang ngoprek aplikasi Android buat keperluan sehari-hari: baca kartu NFC, scan QRIS, sampai Yasin & Tahlil. Wadahnya ngoprek.',
    desc_en:
      'A small Indonesian studio building everyday Android apps: NFC card reading, QRIS scanning, and Yasin & Tahlil. Where the tinkering happens.',
  },
  {
    path: '/contact',
    priority: 0.3,
    canonical: '/',
    title_id: `Kontak${L}`,
    title_en: `Contact${L}`,
    desc_id: 'Punya ide proyek, mau kolaborasi, atau nemu bug di aplikasi kami? Sapa kami lewat email.',
    desc_en: 'Got a project idea, want to collaborate, or found a bug in one of our apps? Drop us a line.',
  },

  // --- Learning hub ---
  {
    path: '/learning',
    priority: 0.9,
    title_id: `Pembelajaran: NFC, QRIS & Tradisi NU${L}`,
    title_en: `Learning Hub: NFC, QRIS & NU Traditions${L}`,
    desc_id:
      'Belajar cara kerja NFC, QRIS, dan teknologi di balik aplikasi kami — dijelaskan pelan-pelan, dari gelombang radio sampai format TLV.',
    desc_en:
      'Learn how NFC, QRIS, and the tech behind our apps actually work — explained slowly, from radio waves to TLV parsing.',
  },

  // --- NFC track ---
  {
    path: '/learning/nfc-basics',
    priority: 0.8,
    title_id: `Dasar NFC: Cara Kerja Komunikasi Tanpa Kabel${L}`,
    title_en: `NFC Basics: How Contactless Communication Works${L}`,
    desc_id:
      'Kenapa kartu bisa kebaca cuma dengan ditempel? Penjelasan gelombang radio 13,56 MHz dan induksi magnetik dengan bahasa sehari-hari.',
    desc_en:
      'Why does a card work just by tapping it? A plain-language explanation of 13.56 MHz radio waves and magnetic induction.',
  },
  {
    path: '/learning/data-exchange',
    priority: 0.8,
    title_id: `Pertukaran Data NFC: Dari Gelombang jadi Informasi${L}`,
    title_en: `NFC Data Exchange: From Waves to Information${L}`,
    desc_id:
      'Bagaimana gelombang tak kasat mata berubah jadi angka 0 dan 1 yang dimengerti HP? Memahami modulasi dan pengkodean sinyal NFC.',
    desc_en:
      'How do invisible waves turn into the ones and zeroes a phone understands? Understanding NFC modulation and signal encoding.',
  },
  {
    path: '/learning/components',
    priority: 0.8,
    title_id: `Membedah PembacaKUE: Komponen Aplikasi NFC${L}`,
    title_en: `Inside PembacaKUE: Anatomy of an NFC App${L}`,
    desc_id:
      'Bedah anatomi aplikasi PembacaKUE — peran HP Android, perintah APDU, dan cara kartu pintar menjawab permintaan baca.',
    desc_en:
      'A breakdown of the PembacaKUE app — the Android phone’s role, APDU commands, and how a smart card answers a read request.',
  },
  {
    path: '/learning/radio-waves',
    priority: 0.7,
    title_id: `Gelombang Radio: Menangkap yang Tak Kasat Mata${L}`,
    title_en: `Radio Waves: Catching the Invisible${L}`,
    desc_id:
      'Eksplorasi lebih dalam soal gelombang radio — frekuensi, panjang gelombang, dan kenapa 13,56 MHz yang dipakai kartu NFC.',
    desc_en:
      'A deeper look at radio waves — frequency, wavelength, and why NFC cards settled on 13.56 MHz.',
  },
  {
    path: '/learning/history-trivia',
    priority: 0.7,
    title_id: `Sejarah & Trivia NFC${L}`,
    title_en: `NFC History & Trivia${L}`,
    desc_id:
      'Dari RFID di gudang sampai tap-tap di gerbang MRT — fakta menarik seputar perjalanan teknologi NFC.',
    desc_en:
      'From warehouse RFID to tapping through transit gates — the story of how NFC got everywhere.',
  },
  {
    path: '/learning/terminology',
    priority: 0.7,
    title_id: `Kamus Istilah NFC & IoT${L}`,
    title_en: `NFC & IoT Glossary${L}`,
    desc_id:
      'Daftar istilah penting di dunia NFC, smart card, dan IoT — APDU, ATQA, UID, dan kawan-kawan, dijelaskan singkat.',
    desc_en:
      'The essential vocabulary of NFC, smart cards, and IoT — APDU, ATQA, UID and friends, briefly explained.',
  },

  // --- QRIS track ---
  {
    path: '/learning/qris-basics',
    priority: 0.8,
    title_id: `Dasar QRIS: Standar EMVCo yang Dipakai Sehari-hari${L}`,
    title_en: `QRIS Basics: The EMVCo Standard Behind the Scan${L}`,
    desc_id:
      'Apa itu QRIS dan kenapa satu QR bisa dipakai semua dompet digital? Memahami standar EMVCo di balik pembayaran QR Indonesia.',
    desc_en:
      'What is QRIS, and why can one QR code work with every wallet? Understanding the EMVCo standard behind Indonesian QR payments.',
  },
  {
    path: '/learning/qris-data-parsing',
    priority: 0.8,
    title_id: `Parsing Data QRIS: Membaca Format TLV${L}`,
    title_en: `Parsing QRIS Data: Reading the TLV Format${L}`,
    desc_id:
      'Cara memecah string QRIS jadi data yang terbaca menggunakan format Tag-Length-Value (TLV), lengkap dengan contoh.',
    desc_en:
      'How to break a QRIS string into readable data using the Tag-Length-Value (TLV) format, with worked examples.',
  },
  {
    path: '/learning/qris-components',
    priority: 0.8,
    title_id: `Membedah QRISParser: Komponen Aplikasi QRIS${L}`,
    title_en: `Inside QRISParser: Components of a QRIS App${L}`,
    desc_id:
      'Teknologi dan komponen yang dipakai membangun QRISParser — dari pembacaan kamera sampai validasi data merchant.',
    desc_en:
      'The tech and components behind QRISParser — from camera capture through to merchant data validation.',
  },
  {
    path: '/learning/qris-camera-vision',
    priority: 0.7,
    title_id: `Computer Vision: Cara Kamera Membaca QR Code${L}`,
    title_en: `Computer Vision: How a Camera Reads a QR Code${L}`,
    desc_id:
      'Bagaimana kamera HP mengenali kotak hitam-putih sebagai informasi? Pengenalan pola, koreksi error, dan finder pattern.',
    desc_en:
      'How does a phone camera turn black-and-white squares into information? Pattern recognition, error correction, finder patterns.',
  },
  {
    path: '/learning/qris-history-trivia',
    priority: 0.7,
    title_id: `Sejarah & Trivia QR Code${L}`,
    title_en: `QR Code History & Trivia${L}`,
    desc_id:
      'Asal usul QR Code dari pabrik mobil Denso Wave sampai jadi standar pembayaran nasional lewat QRIS.',
    desc_en:
      'How the QR code went from a Denso Wave car factory to becoming Indonesia’s national payment standard.',
  },
  {
    path: '/learning/qris-terminology',
    priority: 0.7,
    title_id: `Kamus Istilah QRIS & EMVCo${L}`,
    title_en: `QRIS & EMVCo Glossary${L}`,
    desc_id:
      'Daftar istilah penting dunia QRIS dan EMVCo — MPM, CPM, NMID, acquirer, dan lainnya, dijelaskan ringkas.',
    desc_en:
      'Key QRIS and EMVCo terms — MPM, CPM, NMID, acquirer and more, explained concisely.',
  },

  // --- Yasin Tahlil track ---
  {
    path: '/learning/yasin-hikmah',
    priority: 0.7,
    title_id: `Surah Yasin: Jantung Al-Quran${L}`,
    title_en: `Surah Yasin: The Heart of the Quran${L}`,
    desc_id:
      'Mengenal fadhilah Surah Yasin dan kenapa ia disebut jantung Al-Quran, serta kebiasaan membacanya di tradisi Nahdlatul Ulama.',
    desc_en:
      'The virtues of Surah Yasin, why it is called the heart of the Quran, and how it is read in Nahdlatul Ulama tradition.',
  },
  {
    path: '/learning/tahlil-hikmah',
    priority: 0.7,
    title_id: `Doa Tahlil: Susunan dan Makna Dzikirnya${L}`,
    title_en: `The Tahlil: Structure and Meaning${L}`,
    desc_id:
      'Memahami susunan bacaan tahlil dari awal sampai akhir, beserta makna spiritual di balik tiap rangkaian dzikirnya.',
    desc_en:
      'Understanding the tahlil sequence from start to finish, and the meaning behind each part of the remembrance.',
  },
  {
    path: '/learning/maulid-hikmah',
    priority: 0.7,
    title_id: `Ragam Maulid: Barzanji, Diba’, dan Simtudduror${L}`,
    title_en: `Kinds of Maulid: Barzanji, Diba’ and Simtudduror${L}`,
    desc_id:
      'Mengenal berbagai kitab maulid yang dibaca di Indonesia dan bagaimana masing-masing merayakan kelahiran Nabi Muhammad SAW.',
    desc_en:
      'The different maulid texts read across Indonesia, and how each celebrates the birth of the Prophet Muhammad.',
  },
  {
    path: '/learning/tradisi-nu-hikmah',
    priority: 0.7,
    title_id: `Tradisi NU: Menjaga Warisan Amalan Jamaah${L}`,
    title_en: `NU Traditions: Preserving Communal Practice${L}`,
    desc_id:
      'Melestarikan amalan jamaah khas Nahdlatul Ulama — tahlilan, yasinan, maulidan — dan hikmah yang terkandung di dalamnya.',
    desc_en:
      'The communal practices of Nahdlatul Ulama — tahlilan, yasinan, maulidan — and the wisdom they carry.',
  },

  // --- Legal (kept indexable: Play requires these to be publicly reachable) ---
  {
    path: '/privacy-policy',
    priority: 0.4,
    title_id: `Kebijakan Privasi QRSTU${L}`,
    title_en: `QRSTU Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi aplikasi QRSTU: data apa yang diproses, di mana disimpan, dan apa yang tidak kami kumpulkan.',
    desc_en: 'Privacy policy for the QRSTU app: what data is processed, where it is stored, and what we do not collect.',
  },
  {
    path: '/privacy-policy-pembacakue',
    priority: 0.4,
    title_id: `Kebijakan Privasi PembacaKUE${L}`,
    title_en: `PembacaKUE Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi aplikasi PembacaKUE: penanganan data kartu NFC, penyimpanan lokal, dan izin yang diminta.',
    desc_en: 'Privacy policy for PembacaKUE: how NFC card data is handled, local storage, and the permissions requested.',
  },
  {
    path: '/tos-pembacakue',
    priority: 0.3,
    title_id: `Syarat & Ketentuan PembacaKUE${L}`,
    title_en: `PembacaKUE Terms of Service${L}`,
    desc_id: 'Syarat dan ketentuan penggunaan aplikasi PembacaKUE.',
    desc_en: 'Terms of service for the PembacaKUE app.',
  },
  {
    path: '/privacy-policy-yasintahlil',
    priority: 0.4,
    title_id: `Kebijakan Privasi Yasin Tahlil NU${L}`,
    title_en: `Yasin Tahlil NU Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi aplikasi Yasin, Tahlil & Maulid — aplikasi berjalan offline dan tidak mengumpulkan data pribadi.',
    desc_en: 'Privacy policy for the Yasin, Tahlil & Maulid app — it runs offline and collects no personal data.',
  },
  {
    path: '/tos-yasintahlil',
    priority: 0.3,
    title_id: `Syarat & Ketentuan Yasin Tahlil NU${L}`,
    title_en: `Yasin Tahlil NU Terms of Service${L}`,
    desc_id: 'Syarat dan ketentuan penggunaan aplikasi Yasin, Tahlil & Maulid.',
    desc_en: 'Terms of service for the Yasin, Tahlil & Maulid app.',
  },
  {
    path: '/privacy-policy-bensy',
    priority: 0.4,
    title_id: `Kebijakan Privasi Bensy${L}`,
    title_en: `Bensy Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi Bensy, pencatat konsumsi bahan bakar kendaraan.',
    desc_en: 'Privacy policy for Bensy, the vehicle fuel tracker.',
  },
  {
    path: '/tos-bensy',
    priority: 0.3,
    title_id: `Syarat & Ketentuan Bensy${L}`,
    title_en: `Bensy Terms of Service${L}`,
    desc_id: 'Syarat dan ketentuan penggunaan aplikasi Bensy.',
    desc_en: 'Terms of service for the Bensy app.',
  },
];

/** Legacy hash paths that must keep resolving; see the shim in index.html. */
export const LEGACY_ALIASES = { '/home': '/' };

/** Strip a trailing slash so '/learning/' and '/learning' hit the same route. */
export function normalizePath(pathname) {
  const p = (pathname || '/').replace(/\/+$/, '') || '/';
  return LEGACY_ALIASES[p] || p;
}

/**
 * The static host serves these as directory indexes, so the URL that actually
 * returns 200 carries a trailing slash — '/learning/nfc-basics' 301s to
 * '/learning/nfc-basics/'. Canonicals and sitemap entries must name the final
 * URL, not the one that redirects.
 */
export function canonicalUrl(path) {
  return path === '/' ? SITE.url + '/' : SITE.url + path + '/';
}

export function metaFor(pathname, lang = SITE.defaultLang) {
  const path = normalizePath(pathname);
  const route = ROUTES.find((r) => r.path === path) || ROUTES[0];
  const suffix = lang === 'en' ? '_en' : '_id';
  return {
    path: route.path,
    title: route[`title${suffix}`],
    description: route[`desc${suffix}`],
    canonical: canonicalUrl(route.canonical || route.path),
    priority: route.priority,
  };
}

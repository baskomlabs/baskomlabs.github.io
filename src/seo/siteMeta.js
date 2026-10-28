/**
 * Single source of truth for per-route SEO metadata.
 *
 * Imported by two places, so it must stay plain JS with no JSX and no imports:
 *   - src/components/SEO.jsx  (runtime <head> for the SPA)
 *   - scripts/prerender.mjs   (build time, writes a real HTML file per route)
 *
 * Titles and descriptions are written for search results, not copied from the
 * page H1s. English is the indexed language: the language toggle is
 * client-side and does not change the URL, so a crawler only ever sees one.
 */

// Origin the site is served from. CI passes SITE_URL (baskom.fun while the custom
// domain is healthy, github.io after the watchdog falls back), so canonicals and
// the sitemap never name a host that just 301s elsewhere. Vite inlines it for the
// client through `define`; the prerender script reads the env var directly.
const BUILD_URL =
  (typeof __SITE_URL__ !== 'undefined' && __SITE_URL__) ||
  (typeof process !== 'undefined' && process.env.SITE_URL) ||
  '';

export const SITE = {
  url: (BUILD_URL || 'https://baskomlabs.github.io').replace(/\/+$/, ''),
  name: 'BaskomLabs',
  tagline_id: 'Bengkel Aplikasi Kompeni',
  tagline_en: 'Bengkel Aplikasi Kompeni',
  email: 'baskomdevs@gmail.com',
  githubUrl: 'https://github.com/muhakmal',
  ogImage: '/og-image.png',
  ogImageAlt: 'BaskomLabs — indie app and web studio from Indonesia',
  defaultLang: 'en',
  locale: 'en_US',
  playDeveloperUrl: 'https://play.google.com/store/apps/dev?id=4678418670975116062',
};

const L = ' | BaskomLabs';

/**
 * Apps that appear in structured data. Home.jsx reads `pending` from here, so
 * flipping a listing live is a one-line change in one place. Pending apps stay
 * out of the JSON-LD: there is no public store page to point at yet.
 */
export const APPS = [
  {
    name: 'QRSTU: QRIS Scanner & NFC Tap',
    short: 'QRSTU',
    playId: 'com.baskom.qrisparser',
    slug: 'qrstu',
    icon: '/apps/qrstu.png',
    // Exported from the app repo's fastlane phoneScreenshots (540x960 WebP).
    screenshots: {
      id: [1, 2, 3, 4, 5, 6].map((n) => `/apps/qrstu/screen-id-${n}.webp`),
      en: [1, 2, 3, 4, 5, 6].map((n) => `/apps/qrstu/screen-en-${n}.webp`),
    },
    privacy: '/privacy-policy',
    category: 'FinanceApplication',
    desc: 'Scan a QRIS code, unpack what is inside it (merchant, city, category, TLV fields) and learn how it works.',
  },
  {
    name: 'PembacaKUE',
    short: 'PembacaKUE',
    playId: 'com.baskom.pembacakue',
    slug: 'pembacakue',
    icon: '/apps/pembacakue.png',
    // Play only has Indonesian screenshots for this app; both pages use them.
    screenshots: { id: [1, 2, 3, 4].map((n) => `/apps/pembacakue/screen-${n}.webp`) },
    privacy: '/privacy-policy-pembacakue',
    tos: '/tos-pembacakue',
    category: 'UtilitiesApplication',
    desc: 'Check eMoney, Flazz and other NFC card balances straight from your Android phone.',
  },
  {
    name: 'Yasin Tahlil NU',
    short: 'Yasin Tahlil NU',
    playId: 'com.baskom.yasintahlilmaulid',
    icon: '/apps/yasintahlil.png',
    category: 'ReferenceApplication',
    desc: 'Yasin, Tahlil, Maulid and Sholawat in full. Works offline.',
  },
  {
    name: 'Quran Discovery',
    short: 'Quran Discovery',
    playId: 'com.baskomlabs.qurandiscovery',
    icon: '/apps/qurandiscovery.png',
    category: 'ReferenceApplication',
    desc: 'Find a Quran verse by listening to recitation. Read it with translation and tafsir.',
  },
  {
    name: 'Hadith Discovery',
    short: 'Hadith Discovery',
    playId: 'com.baskomlabs.hadithdiscovery',
    icon: '/apps/hadithdiscovery.png',
    category: 'ReferenceApplication',
    desc: 'Paste a hadith to see which book and number it comes from, with grading quoted from named scholars.',
  },
];

/** The bare listing URL. Used in structured data, where it identifies the app. */
export const playUrl = (playId) => `https://play.google.com/store/apps/details?id=${playId}`;

/**
 * The listing URL people actually click. Play hands `referrer` to the install
 * referrer and its utm_* keys show up in Play Console's acquisition reports, so
 * installs from the site are attributable per placement (home, app page, lesson).
 * The source stays "baskom.fun" even on the github.io fallback so reports don't split.
 */
export const playInstallUrl = (playId, placement = 'site') =>
  `${playUrl(playId)}&referrer=${encodeURIComponent(
    `utm_source=baskom.fun&utm_medium=website&utm_campaign=${placement}`
  )}`;

/** Path of an app's landing page in a given language (Indonesian is the default URL). */
export const appPagePath = (slug, lang = 'id') => (lang === 'en' ? `/en/apps/${slug}` : `/apps/${slug}`);

/**
 * Guest-teacher session at IAS Al-Jannah. The talk page, the Home card, the
 * prerendered <noscript> and the JSON-LD all read from here. Small files live
 * in public/talks/kapten-digital; the big ones are GitHub Release assets.
 */
const TALK_BASE = '/talks/kapten-digital';
const TALK_RELEASE =
  'https://github.com/baskomlabs/baskomlabs.github.io/releases/download/talks-kapten-digital-2026-10';

export const TALK_KAPTEN = {
  path: TALK_BASE,
  title: 'Petualangan Kapten Digital',
  date: '2026-10-21',
  slideUrl: `${TALK_BASE}/slide/`,
  cover: `${TALK_BASE}/cover.jpg`,
  slideCount: 24,
  license: 'https://creativecommons.org/licenses/by-nc/4.0/',
  school: {
    name: 'IAS Al-Jannah',
    url: 'https://sekolah-aljannah.com',
    instagram: 'https://www.instagram.com/sekolah_iasaljannah/',
  },
  // `key` maps to talks.kapten.file_<key> / file_<key>_desc in the locales.
  files: [
    { key: 'slide_pdf', href: `${TALK_BASE}/files/Slide_Kapten_Digital.pdf`, type: 'PDF', size: '5,4 MB', name: 'Slide (PDF)' },
    { key: 'pptx', href: `${TALK_RELEASE}/Slide_Kapten_Digital.pptx`, type: 'PPTX', size: '12,4 MB', name: 'Slide (PowerPoint)' },
    { key: 'panduan', href: `${TALK_BASE}/files/Panduan_Guru_Tamu_Kapten_Digital.pdf`, type: 'PDF', size: '260 KB', name: 'Guest teacher guide' },
    { key: 'naskah', href: `${TALK_BASE}/files/Naskah_dan_Cue_Card_Kak_Akmal.pdf`, type: 'PDF', size: '1,2 MB', name: 'Script and cue cards' },
    { key: 'alat', href: `${TALK_BASE}/files/Alat_Peraga_Siap_Cetak.pdf`, type: 'PDF', size: '1,4 MB', name: 'Printable props' },
    { key: 'film', href: `${TALK_BASE}/slide/assets/film.mp4`, type: 'MP4', size: '6,6 MB', name: 'Short film (90 s)' },
    { key: 'musik1', href: `${TALK_RELEASE}/1_Musik_Estafet_WiFi_Otomatis.mp4`, type: 'MP4', size: '4,8 MB', name: 'Music: Wi-Fi relay' },
    { key: 'musik2', href: `${TALK_RELEASE}/2_Musik_Permainan_Ceria.mp4`, type: 'MP4', size: '7,6 MB', name: 'Music: cheerful games' },
    { key: 'musik3', href: `${TALK_RELEASE}/3_Musik_Tenang_Cerita_dan_Senam_Mata.mp4`, type: 'MP4', size: '4,3 MB', name: 'Music: calm story and eye exercise' },
    { key: 'musik4', href: `${TALK_RELEASE}/4_Musik_Pelantikan_dan_Foto.mp4`, type: 'MP4', size: '6,1 MB', name: 'Music: graduation and photo' },
  ],
  zip: { href: `${TALK_RELEASE}/Kapten-Digital-Materi-Lengkap.zip`, size: '45 MB' },
};

/** Which app a learning page leads into. Drives the install CTA and related-app schema. */
export function appForPath(path) {
  if (path === '/learning/quran-discovery') return 'com.baskomlabs.qurandiscovery';
  if (path === '/learning/hadith-discovery') return 'com.baskomlabs.hadithdiscovery';
  if (path.startsWith('/learning/qris-')) return 'com.baskom.qrisparser';
  if (/^\/learning\/(yasin|tahlil|maulid|tradisi-nu)-hikmah$/.test(path))
    return 'com.baskom.yasintahlilmaulid';
  if (/^\/learning\/[^/]+$/.test(path)) return 'com.baskom.pembacakue'; // NFC track
  return null;
}

/** An app landing page in both languages, each pointing at the other via `alternates`. */
function appRoutes({ slug, priority, title_id, title_en, desc_id, desc_en, ogImageAlt }) {
  const alternates = { id: appPagePath(slug, 'id'), en: appPagePath(slug, 'en') };
  const base = { app: slug, priority, alternates, title_id, title_en, desc_id, desc_en, ogImageAlt };
  base.ogImage = `/apps/${slug}/og.jpg`;
  return [
    { ...base, path: alternates.id, lang: 'id' },
    { ...base, path: alternates.en, lang: 'en', priority: priority - 0.1 },
  ];
}

export const ROUTES = [
  {
    path: '/',
    priority: 1.0,
    title_id: 'BaskomLabs — Aplikasi Quran, Hadis, QRIS & NFC untuk Android',
    title_en: 'BaskomLabs — Quran, Hadith, QRIS & NFC Apps for Android',
    desc_id:
      'Studio indie Indonesia di balik Quran Discovery (cari ayat dari suara), Hadith Discovery (cek sumber hadis), QRSTU (scanner QRIS), PembacaKUE (cek saldo kartu NFC) dan Yasin Tahlil NU. Aplikasi Android gratis di Google Play.',
    desc_en:
      'Indie Indonesian studio behind Quran Discovery (find a verse by voice), Hadith Discovery (trace hadith sources), QRSTU (QRIS scanner), PembacaKUE (NFC card balance) and Yasin Tahlil NU. Free Android apps on Google Play.',
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
  {
    path: '/open-source',
    priority: 0.9,
    title_id: `Proyek Open Source${L}`,
    title_en: `Open Source Projects${L}`,
    desc_id:
      'Perkakas developer, parser QRIS, dan notebook PRD Markdown oleh Akmal, M. dan BaskomLabs. Terbuka, gratis, dan bebas dipakai.',
    desc_en:
      'Open-source developer tools, QRIS parsers, and Markdown PRD notebooks by Akmal, M. and BaskomLabs. Free and public on GitHub.',
  },

  // --- Talks ---
  {
    path: TALK_BASE,
    priority: 0.8,
    ogImage: `${TALK_BASE}/og.jpg`,
    ogImageAlt: 'Petualangan Kapten Digital — illustrated kids walking past a treehouse and a toy data train',
    title_id: `Kapten Digital: Materi Guru Tamu TK tentang Internet (Gratis)${L}`,
    title_en: `Kapten Digital: Free Internet Safety Lesson for Kindergarten${L}`,
    desc_id:
      'Slide interaktif, panduan, naskah, alat peraga, film, dan musik dari sesi guru tamu TK B di IAS Al-Jannah. Tiga misi: kenal internet, rem layar, jaga mata. Gratis diunduh, CC BY-NC 4.0.',
    desc_en:
      'Interactive slides, teacher guide, script, printable props, film and music from a kindergarten guest-teacher session at IAS Al-Jannah. Three missions on the internet, screen time and eye care. Free to download under CC BY-NC 4.0.',
  },

  // --- App landing pages ---
  // Indonesian first: most people searching for these apps search in Indonesian.
  // Each page exists at a fixed-language URL (/apps/x = id, /en/apps/x = en), so
  // both languages get indexed and tied together with hreflang.
  ...appRoutes({
    slug: 'pembacakue',
    priority: 0.95,
    title_id: `PembacaKUE: Cek Saldo e-Money, e-Toll & Flazz via NFC${L}`,
    title_en: `PembacaKUE: Check e-Money, e-Toll & Flazz Balance via NFC${L}`,
    desc_id:
      'Cek saldo kartu e-Money, e-Toll, Flazz, TapCash, Brizzi dan JakCard cukup ditempel ke HP Android ber-NFC. Tanpa login, gratis di Google Play.',
    desc_en:
      'Check Mandiri e-Money, e-Toll, BCA Flazz, BNI TapCash, BRI Brizzi and JakCard balances by tapping the card on an NFC Android phone. No login, free on Google Play.',
    ogImageAlt: 'PembacaKUE — cek saldo kartu uang elektronik dengan NFC',
  }),
  ...appRoutes({
    slug: 'qrstu',
    priority: 0.95,
    title_id: `QRSTU: Scan & Cek QRIS, Baca QRIS Tap NFC${L}`,
    title_en: `QRSTU: QRIS Scanner & Reader, QRIS Tap over NFC${L}`,
    desc_id:
      'Scan QRIS dari kamera atau galeri, lihat nama merchant, kota, nominal dan setiap tag EMVCo sebelum bayar. Baca QRIS MPM, CPM dan QRIS Tap (NFC). Gratis di Google Play.',
    desc_en:
      'Scan a QRIS from the camera or gallery and see the merchant, city, amount and every EMVCo tag before you pay. Reads QRIS MPM, CPM and QRIS Tap over NFC. Free on Google Play.',
    ogImageAlt: 'QRSTU — scan dan cek isi kode QRIS',
  }),

  // --- Learning hub ---
  {
    path: '/learning',
    priority: 0.9,
    title_id: `Belajar NFC, QRIS, Al-Quran & Hadis: Panduan Singkat${L}`,
    title_en: `Learn How NFC, QRIS, Quran & Hadith Apps Work${L}`,
    desc_id:
      'Pelajaran singkat berbahasa sehari-hari: cara kerja NFC, QRIS, pengenalan ayat Al-Quran dari suara, dan pengecekan hadis, plus tradisi Yasin & Tahlil.',
    desc_en:
      'Short plain-language lessons on how NFC, QRIS, Quran verse recognition and hadith checking work, plus Yasin & Tahlil traditions.',
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
      'Apa itu gelombang radio, sejarah penemuannya, dan bagaimana kumparan di kartu NFC menangkapnya jadi listrik tanpa baterai.',
    desc_en:
      'What radio waves are, how they were discovered, and how the coil in an NFC card turns them into power without a battery.',
  },
  {
    path: '/learning/history-trivia',
    priority: 0.7,
    title_id: `Sejarah & Trivia NFC${L}`,
    title_en: `NFC History & Trivia${L}`,
    desc_id:
      'Dari radar Perang Dunia dan Nokia 6131 sampai wajib e-toll 2017: sejarah NFC dan e-money di Indonesia, plus beberapa trivia.',
    desc_en:
      'From wartime radar and the Nokia 6131 to Indonesia\'s 2017 cashless toll roads: the history of NFC and e-money, plus some trivia.',
  },
  {
    path: '/learning/terminology',
    priority: 0.7,
    title_id: `Kamus Istilah NFC & IoT${L}`,
    title_en: `NFC & IoT Glossary${L}`,
    desc_id:
      'Istilah NFC, RFID, IoT, APDU, AID, ISO 14443, MIFARE dan NDEF, dijelaskan singkat.',
    desc_en:
      'NFC, RFID, IoT, APDU, AID, ISO 14443, MIFARE and NDEF, each explained in a line or two.',
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
      'Istilah QRIS yang sering muncul: EMVCo, TLV, MCC dan CRC, dijelaskan ringkas.',
    desc_en:
      'Common QRIS terms: EMVCo, TLV, MCC and CRC, explained concisely.',
  },

  // --- Yasin Tahlil track ---
  {
    path: '/learning/yasin-hikmah',
    priority: 0.7,
    title_id: `Surah Yasin: Jantung Al-Quran${L}`,
    title_en: `Surah Yasin: The Heart of the Quran${L}`,
    desc_id:
      'Kenapa Surah Yasin disebut jantung Al-Quran, isi pokoknya, dan kapan biasanya dibaca.',
    desc_en:
      'Why Surah Yasin is called the heart of the Quran, what it covers, and when it is usually read.',
  },
  {
    path: '/learning/tahlil-hikmah',
    priority: 0.7,
    title_id: `Doa Tahlil: Susunan dan Makna Dzikirnya${L}`,
    title_en: `The Tahlil: Structure and Meaning${L}`,
    desc_id:
      'Ringkasan susunan bacaan tahlil, dari istighfar sampai doa, dan untuk siapa doanya dihadiahkan.',
    desc_en:
      'A short overview of the tahlil sequence, from seeking forgiveness to the closing prayer, and who it is offered for.',
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

  // --- Quran Discovery track ---
  {
    path: '/learning/quran-discovery',
    priority: 0.8,
    title_id: `Cara Mencari Ayat Al-Quran dari Suara Bacaan${L}`,
    title_en: `How to Find a Quran Verse from Recitation Audio${L}`,
    desc_id:
      'Bagaimana aplikasi mengenali ayat dari suara? Dari rekaman mikrofon, pengenalan suara Arab di HP, sampai pencocokan ke 6.236 ayat — tanpa unggah audio.',
    desc_en:
      'How does an app identify a Quran verse from sound? From microphone capture and on-device Arabic speech recognition to matching against all 6,236 verses, with no audio uploaded.',
  },

  {
    path: '/learning/hadith-discovery',
    priority: 0.8,
    title_id: `Cara Mengecek Hadis Kiriman: Sumber, Nomor, dan Derajat${L}`,
    title_en: `How to Check a Hadith Before You Forward It${L}`,
    desc_id:
      'Hadis beredar di WhatsApp, bagaimana menelusuri kitab dan nomornya? Cara pencocokan teks, lima kemungkinan hasil, dan kenapa “tidak ditemukan” bukan berarti palsu.',
    desc_en:
      'Got a hadith forwarded on WhatsApp? How a quote is traced to a collection and number, the five possible results, and why “not found” never means fake.',
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
    path: '/privacy-policy-qurandiscovery',
    priority: 0.4,
    title_id: `Kebijakan Privasi Quran Discovery${L}`,
    title_en: `Quran Discovery Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi Quran Discovery: audio mikrofon diproses di perangkat dan tidak diunggah, tanpa akun, iklan, atau analitik.',
    desc_en: 'Privacy policy for Quran Discovery: microphone audio is processed on the device and never uploaded; no account, ads or analytics.',
  },
  {
    path: '/privacy-policy-hadithdiscovery',
    priority: 0.4,
    title_id: `Kebijakan Privasi Hadith Discovery${L}`,
    title_en: `Hadith Discovery Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi Hadith Discovery: tanpa izin internet, teks dan suara diproses di perangkat, tanpa akun, iklan, atau analitik.',
    desc_en: 'Privacy policy for Hadith Discovery: no internet permission, text and speech processed on the device; no account, ads or analytics.',
  },
  {
    path: '/privacy-policy-bensy',
    hidden: true, // Bensy hidden for now: out of the sitemap, page still served
    priority: 0.4,
    title_id: `Kebijakan Privasi Bensy${L}`,
    title_en: `Bensy Privacy Policy${L}`,
    desc_id: 'Kebijakan privasi Bensy, pencatat konsumsi bahan bakar kendaraan.',
    desc_en: 'Privacy policy for Bensy, the vehicle fuel tracker.',
  },
  {
    path: '/tos-bensy',
    hidden: true, // Bensy hidden for now: out of the sitemap, page still served
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

/** The route for a pathname, or undefined when the path is not a known page. */
export function routeFor(pathname) {
  const path = normalizePath(pathname);
  return ROUTES.find((r) => r.path === path);
}

/** hreflang alternates for a route as absolute URLs, x-default = Indonesian. */
export function alternatesFor(route) {
  if (!route || !route.alternates) return [];
  return [
    ...Object.entries(route.alternates).map(([hreflang, p]) => ({ hreflang, href: canonicalUrl(p) })),
    { hreflang: 'x-default', href: canonicalUrl(route.alternates.id) },
  ];
}

export function metaFor(pathname, lang = SITE.defaultLang) {
  const route = routeFor(pathname) || ROUTES[0];
  // Fixed-language pages ignore the toggle: the URL decides the language.
  if (route.lang) lang = route.lang;
  const suffix = lang === 'id' ? '_id' : '_en';
  return {
    lang,
    alternates: alternatesFor(route),
    path: route.path,
    title: route[`title${suffix}`],
    description: route[`desc${suffix}`],
    canonical: canonicalUrl(route.canonical || route.path),
    priority: route.priority,
    ogImage: SITE.url + (route.ogImage || SITE.ogImage),
    ogImageAlt: route.ogImageAlt || SITE.ogImageAlt,
  };
}

const stripSuffix = (t) => t.replace(/ \| BaskomLabs$/, '');

/**
 * Structured data for a route, as a single @graph.
 *   /                 Organization + WebSite + one MobileApplication per live app
 *   /learning         CollectionPage + breadcrumb
 *   /learning/<slug>  TechArticle + breadcrumb, `about` the app it leads into
 *   /talks/<slug>     LearningResource + EducationEvent at the host school
 * Everything else gets Organization only.
 */
export function jsonLdFor(pathname, lang = SITE.defaultLang) {
  const path = normalizePath(pathname);
  const route = ROUTES.find((r) => r.path === path) || ROUTES[0];
  if (route.lang) lang = route.lang;
  const suffix = lang === 'id' ? '_id' : '_en';
  const url = canonicalUrl(route.canonical || route.path);
  const orgId = SITE.url + '/#org';

  const org = {
    '@type': 'Organization',
    '@id': orgId,
    name: SITE.name,
    alternateName: 'Baskom',
    url: SITE.url + '/',
    logo: SITE.url + '/apple-touch-icon.png',
    email: SITE.email,
    description: lang === 'id' ? SITE.tagline_id : SITE.tagline_en,
    sameAs: [
      SITE.playDeveloperUrl,
      'https://github.com/muhakmal',
      'https://github.com/baskomlabs',
    ],
  };
  const graph = [org];

  if (route.path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': SITE.url + '/#website',
      url: SITE.url + '/',
      name: SITE.name,
      inLanguage: ['en', 'id'],
      publisher: { '@id': orgId },
    });
    for (const app of APPS.filter((a) => !a.pending)) {
      graph.push({
        '@type': 'MobileApplication',
        ...(app.slug && { '@id': canonicalUrl(appPagePath(app.slug)) + '#app' }),
        name: app.name,
        url: app.slug ? canonicalUrl(appPagePath(app.slug)) : playUrl(app.playId),
        ...(app.slug && { installUrl: playUrl(app.playId), sameAs: [playUrl(app.playId)] }),
        image: SITE.url + app.icon,
        description: app.desc,
        operatingSystem: 'ANDROID',
        applicationCategory: app.category,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
        author: { '@id': orgId },
      });
    }
  } else if (route.app) {
    const app = APPS.find((a) => a.slug === route.app);
    const title = stripSuffix(route[`title${suffix}`]);
    const home = lang === 'id' ? 'Beranda' : 'Home';
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: home, item: SITE.url + '/' },
        { '@type': 'ListItem', position: 2, name: app.short, item: url },
      ],
    });
    graph.push({
      '@type': 'WebPage',
      '@id': url + '#page',
      url,
      name: title,
      description: route[`desc${suffix}`],
      inLanguage: lang,
      isPartOf: { '@id': SITE.url + '/#website' },
      primaryImageOfPage: SITE.url + route.ogImage,
      mainEntity: { '@id': canonicalUrl(appPagePath(app.slug)) + '#app' },
    });
    graph.push({
      '@type': ['SoftwareApplication', 'MobileApplication'],
      '@id': canonicalUrl(appPagePath(app.slug)) + '#app',
      name: app.name,
      alternateName: app.short,
      url: canonicalUrl(appPagePath(app.slug)),
      description: route[`desc${suffix}`],
      image: SITE.url + app.icon,
      screenshot: (app.screenshots?.[lang] || app.screenshots?.id || []).map((s) => SITE.url + s),
      operatingSystem: 'Android',
      applicationCategory: app.category,
      inLanguage: ['id', 'en'],
      installUrl: playUrl(app.playId),
      downloadUrl: playUrl(app.playId),
      sameAs: [playUrl(app.playId)],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
      author: { '@id': orgId },
      publisher: { '@id': orgId },
    });
  } else if (route.path === '/learning' || route.path.startsWith('/learning/')) {
    const title = stripSuffix(route[`title${suffix}`]);
    const crumbs = [{ name: 'Home', url: SITE.url + '/' }, { name: 'Learning', url: canonicalUrl('/learning') }];
    if (route.path !== '/learning') crumbs.push({ name: title, url });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
    });
    const lessons = ROUTES.filter((r) => r.path.startsWith('/learning/') && !r.hidden);
    const page = {
      '@type': route.path === '/learning' ? 'CollectionPage' : 'TechArticle',
      headline: title,
      name: title,
      description: route[`desc${suffix}`],
      url,
      inLanguage: lang,
      image: SITE.url + SITE.ogImage,
      author: { '@id': orgId },
      publisher: { '@id': orgId },
      isPartOf: { '@id': SITE.url + '/#website' },
    };
    if (route.path === '/learning') {
      page.mainEntity = {
        '@type': 'ItemList',
        itemListElement: lessons.map((r, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: stripSuffix(r[`title${suffix}`]),
          url: canonicalUrl(r.path),
        })),
      };
    }
    const playId = appForPath(route.path);
    const app = playId && APPS.find((a) => a.playId === playId && !a.pending);
    if (app) page.about = { '@type': 'MobileApplication', name: app.name, url: playUrl(app.playId) };
    graph.push(page);
  } else if (route.path === '/open-source') {
    const title = stripSuffix(route[`title${suffix}`]);
    const crumbs = [
      { name: 'Home', url: SITE.url + '/' },
      { name: 'Open Source', url: canonicalUrl('/open-source') },
    ];
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    });
    graph.push({
      '@type': 'CollectionPage',
      headline: title,
      name: title,
      description: route[`desc${suffix}`],
      url,
      inLanguage: lang,
      image: SITE.url + SITE.ogImage,
      author: {
        '@type': 'Person',
        name: 'Akmal, M.',
        url: 'https://github.com/muhakmal',
      },
      publisher: { '@id': orgId },
      isPartOf: { '@id': SITE.url + '/#website' },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'SoftwareSourceCode',
            position: 1,
            name: 'CoNote for Confluence',
            codeRepository: 'https://github.com/muhakmal/conote-for-confluence',
            description: 'Fast, local-first PRD & Markdown notebook for Confluence Cloud.',
          },
          {
            '@type': 'SoftwareSourceCode',
            position: 2,
            name: 'QRIS Parser & Validator',
            codeRepository: 'https://github.com/muhakmal/qris-parser',
            description: 'Production-grade Python parser, compliance validator, and dynamic generator for QRIS.',
          },
          {
            '@type': 'SoftwareSourceCode',
            position: 3,
            name: 'KUE Reader (Indonesian Card Reader SDK)',
            codeRepository: 'https://github.com/muhakmal/osp-kue-reader',
            description: 'Android NFC IsoDep APDU reader SDK for Mandiri e-money, BCA Flazz, BNI TapCash, BRI Brizzi, JakCard, and FeliCa transit cards.',
          },
        ],
      },
    });
  } else if (route.path === TALK_KAPTEN.path) {
    const title = stripSuffix(route[`title${suffix}`]);
    const t = TALK_KAPTEN;
    const author = { '@type': 'Person', name: 'Akmal, M.', url: 'https://github.com/muhakmal' };
    const school = {
      '@type': 'School',
      '@id': t.school.url + '/#school',
      name: t.school.name,
      url: t.school.url,
      sameAs: [t.school.instagram],
    };
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
        { '@type': 'ListItem', position: 2, name: t.title, item: url },
      ],
    });
    graph.push({
      '@type': 'LearningResource',
      '@id': url + '#resource',
      name: t.title,
      headline: title,
      description: route[`desc${suffix}`],
      url,
      image: SITE.url + route.ogImage,
      inLanguage: 'id',
      learningResourceType: ['Presentation', 'Lesson plan', 'Activity'],
      educationalLevel: 'Kindergarten',
      audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
      typicalAgeRange: '5-6',
      timeRequired: 'PT60M',
      about: ['Internet', 'Screen time', 'Eye health'],
      isAccessibleForFree: true,
      license: t.license,
      datePublished: t.date,
      author,
      publisher: { '@id': orgId },
      isPartOf: { '@id': SITE.url + '/#website' },
      hasPart: t.files.map((f) => ({
        '@type': f.type === 'MP4' ? 'MediaObject' : 'DigitalDocument',
        name: f.name,
        url: f.href.startsWith('http') ? f.href : SITE.url + f.href,
        encodingFormat: f.type === 'MP4' ? 'video/mp4' : f.type === 'PDF' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        license: t.license,
      })),
    });
    graph.push({
      '@type': 'EducationEvent',
      name: `${t.title} — Guru Tamu TK B ${t.school.name}`,
      startDate: t.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: school,
      organizer: school,
      performer: author,
      workFeatured: { '@id': url + '#resource' },
      url,
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

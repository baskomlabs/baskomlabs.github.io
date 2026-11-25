import { QRIS_PAYLOAD, AMOUNTS } from './config.js';
import { withAmount, merchantName, isValidQris } from './qris.js';
import { pushSupported, enablePush, syncToken } from './push.js';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.baskom.yasintahlilmaulid';
const app = document.getElementById('app');
const $ = (id) => document.getElementById(id);

// --- tiny helpers -----------------------------------------------------------
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'class') el.className = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) el.append(kid);
  return el;
}
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
};
/** The content carries a little HTML (<p>, <br>); readers only need the words. */
function clean(s) {
  if (!s) return '';
  const doc = new DOMParser().parseFromString(s.replace(/<\/p>\s*<p[^>]*>/gi, '\n').replace(/<br\s*\/?>/gi, '\n'), 'text/html');
  return doc.body.textContent.trim();
}
/** replaceChildren, skipping the null/false a `cond && node` leaves behind. */
const render = (...nodes) => app.replaceChildren(...nodes.flat().filter((n) => n != null && n !== false));
const rupiah = (n) => 'Rp' + n.toLocaleString('id-ID');
const cache = new Map();
const load = (name) => {
  if (!cache.has(name)) cache.set(name, fetch(`data/${name}.json`).then((r) => r.json()));
  return cache.get(name);
};

// --- reader preferences -----------------------------------------------------
const prefs = store.get('prefs', { scale: 1, latin: true, trans: true });
function applyPrefs() {
  document.documentElement.style.setProperty('--scale', prefs.scale);
  document.body.classList.toggle('no-latin', !prefs.latin);
  document.body.classList.toggle('no-trans', !prefs.trans);
  $('opt-latin').checked = prefs.latin;
  $('opt-trans').checked = prefs.trans;
  store.set('prefs', prefs);
}
$('settings-btn').onclick = () => $('settings').showModal();
$('opt-latin').onchange = (e) => { prefs.latin = e.target.checked; applyPrefs(); };
$('opt-trans').onchange = (e) => { prefs.trans = e.target.checked; applyPrefs(); };
document.querySelectorAll('[data-font]').forEach((b) => b.addEventListener('click', () => {
  prefs.scale = Math.min(1.8, Math.max(0.8, +(prefs.scale + 0.1 * b.dataset.font).toFixed(1)));
  applyPrefs();
}));
$('back').onclick = () => (history.length > 1 ? history.back() : (location.hash = '#/'));

// --- shared pieces ----------------------------------------------------------
function setBar(title, subtitle = '', reader = false) {
  $('title').textContent = title;
  $('subtitle').textContent = subtitle;
  $('back').hidden = location.hash === '' || location.hash === '#/';
  $('settings-btn').hidden = !reader;
  document.title = location.hash.length > 2 ? `${title} · Yasin Tahlil` : 'Yasin, Tahlil & Maulid NU';
}
const menuCard = (href, badge, title, sub) =>
  h('a', { class: 'card', href }, h('div', { class: 'badge', 'aria-hidden': 'true' }, badge), h('h3', {}, title), h('p', {}, sub));

/** ×٣٣ at the end of a repeated line, as a number. */
function dzikirTarget(arabic) {
  const m = [...arabic.matchAll(/×\s*([٠-٩0-9]+)/g)].pop();
  if (!m) return null;
  const n = Number(m[1].replace(/[٠-٩]/g, (d) => d.charCodeAt(0) - 0x660));
  return n > 1 ? n : null;
}
function counter(target) {
  let count = 0, timer = 0, reset = false;
  const label = h('b');
  const btn = h('button', { class: 'counter', type: 'button' }, h('span', {}, 'Hitung dzikir · ketuk'), label);
  const draw = () => {
    label.textContent = count >= target ? `✓ ${target}` : `${count} / ${target}`;
    btn.classList.toggle('done', count >= target);
    btn.setAttribute('aria-label', `Hitungan dzikir ${count} dari ${target}. Ketuk untuk menambah, tekan lama untuk mengulang.`);
  };
  btn.addEventListener('pointerdown', () => { reset = false; timer = setTimeout(() => { reset = true; count = 0; navigator.vibrate?.(60); draw(); }, 600); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => btn.addEventListener(ev, () => clearTimeout(timer)));
  btn.addEventListener('click', () => {
    if (reset || count >= target) return;
    count++;
    navigator.vibrate?.(count >= target ? 120 : 8);
    draw();
  });
  btn.addEventListener('contextmenu', (e) => e.preventDefault());
  draw();
  return btn;
}
function passage({ number, arabic, latin, translation, hikmah, label }) {
  const t = dzikirTarget(arabic);
  return h('article', { class: 'item' },
    number != null && h('div', { class: 'num' }, h('span', {}, label ?? `Ayat ${number}`), h('span', { class: 'ar', style: 'font-size:18px;line-height:1' }, number.toLocaleString('ar-EG'))),
    h('div', { class: 'body' },
      h('div', { class: 'ar', lang: 'ar' }, arabic),
      latin && h('p', { class: 'lat' }, latin),
      translation && h('p', { class: 'tr' }, translation),
      hikmah && h('div', { class: 'hikmah' }, hikmah),
      t && counter(t)));
}

/** Renders a reader and keeps the reading position, so a phone call costs nothing. */
function reader(key, nodes) {
  render(...nodes);
  const items = [...app.querySelectorAll('.item')];
  const last = store.get('last', null);
  if (last?.key === key && items[last.index]) requestAnimationFrame(() => items[last.index].scrollIntoView());
  else scrollTo(0, 0);
  let t = 0;
  onscroll = () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const top = document.querySelector('.bar').offsetHeight;
      const index = items.findIndex((el) => el.getBoundingClientRect().bottom > top + 8);
      if (index >= 0) store.set('last', { key, index, title: $('title').textContent, hash: location.hash });
    }, 250);
  };
}

// --- screens ----------------------------------------------------------------
let installEvent = null;
addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvent = e; if (!location.hash || location.hash === '#/') route(); });

/** Offered only while the reader has not answered yet; the permission prompt must follow a tap. */
function notifCard() {
  if (!pushSupported()) return null;
  if (Notification.permission === 'denied') {
    return h('p', { class: 'muted center' }, 'Notifikasi diblokir. Izinkan lewat pengaturan situs di browser bila ingin menerimanya.');
  }
  if (Notification.permission !== 'default') return null;
  const status = h('p', { class: 'muted', role: 'status' });
  const btn = h('button', { class: 'primary', type: 'button' }, 'Aktifkan notifikasi');
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    try {
      const result = await enablePush();
      if (result === 'granted') status.textContent = 'Notifikasi aktif. Mutiara hikmah akan datang tiap pagi.';
      else { status.textContent = 'Notifikasi tidak diizinkan.'; btn.disabled = false; }
    } catch (e) {
      console.error(e);
      status.textContent = 'Belum berhasil mengaktifkan notifikasi. Periksa koneksi lalu coba lagi.';
      btn.disabled = false;
    }
  });
  return h('div', { class: 'card' }, h('h3', {}, 'Notifikasi'),
    h('p', {}, 'Mutiara hikmah tiap pagi dan pengingat Yasin di malam Jumat.'),
    h('div', { style: 'margin-top:12px' }, btn), status);
}

async function home() {
  setBar('Yasin, Tahlil & Maulid', 'Amaliyah warga Nahdliyin');
  const last = store.get('last', null);
  const hikmah = (await load('hikmah')).filter((x) => x.text);
  const pearl = hikmah[Math.floor(Math.random() * hikmah.length)];
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  render(
    last && h('a', { class: 'card resume', href: last.hash }, h('p', {}, 'Lanjutkan membaca'), h('h3', {}, `${last.title} — bagian ${last.index + 1}`)),
    h('div', { class: 'grid' },
      menuCard('#/yasin', 'يٰسۤ', 'Surat Yasin', '83 ayat • Arab, latin, terjemah'),
      menuCard('#/tahlil', 'ذِكْر', 'Tahlil', 'Susunan tahlil lengkap beserta doa arwah'),
      menuCard('#/sholawat', 'ﷺ', 'Shalawat', 'Shalawat masyhur yang biasa dilantunkan'),
      menuCard('#/maulid', 'مَوْلِد', 'Maulid & Ratib', 'Diba\'i, Barzanji, Simthud Durar, dan lainnya')),
    pearl && h('div', { class: 'card tinted' }, h('p', { class: 'section-title', style: 'margin:0' }, '﴿ Mutiara Hikmah'),
      h('p', { style: 'margin-top:8px;font-size:15px' }, pearl.text), h('p', { style: 'font-style:italic;font-size:13px' }, pearl.source)),
    notifCard(),
    h('a', { class: 'card soft', href: '#/sedekah' }, h('h3', {}, 'Sedekah'), h('p', {}, 'Sukarela lewat QRIS, sekadar ikut menopang biaya aplikasi')),
    !standalone && installEvent && h('button', { class: 'primary', onclick: async () => { installEvent.prompt(); await installEvent.userChoice; installEvent = null; route(); } }, 'Pasang di layar utama'),
    !standalone && ios && h('p', { class: 'muted center install' }, 'Di iPhone: ketuk tombol Bagikan ', h('b', {}, '⎙'), ' lalu “Tambah ke Layar Utama” agar bisa dibuka tanpa internet dan menerima notifikasi.'),
    h('p', { class: 'muted center' }, 'Pakai Android? ', h('a', { href: PLAY_URL, rel: 'noopener' }, 'Pasang aplikasinya di Google Play'), ' untuk jadwal shalat, widget, dan bahasa daerah.'),
  );
  scrollTo(0, 0);
}

async function yasin() {
  setBar('Surat Yasin', '83 ayat', true);
  const data = await load('yasin');
  reader('yasin', [
    h('div', { class: 'ar center', lang: 'ar', style: 'text-align:center' }, 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ'),
    ...data.map((v) => passage({ number: v.number, arabic: v.text, latin: clean(v.transliteration), translation: clean(v.translation_id) })),
  ]);
}

const TAHLIL_SECTIONS = [[1, 'Hadiah Al-Fatihah'], [5, 'Surat dan Ayat Pilihan'], [16, 'Salam dan Shalawat'], [26, 'Tahlil dan Tasbih'], [36, 'Doa Penutup']];
async function tahlil() {
  setBar('Tahlil', 'Susunan lengkap', true);
  const data = await load('tahlil');
  const nodes = [];
  for (const v of data) {
    const sec = TAHLIL_SECTIONS.find(([n]) => n === v.number);
    if (sec) nodes.push(h('h2', { class: 'section-title' }, sec[1]));
    nodes.push(passage({ number: v.number, label: `Bacaan ${v.number}`, arabic: clean(v.text), latin: clean(v.transliteration), translation: clean(v.translation_id) }));
  }
  reader('tahlil', nodes);
}

async function sholawatList() {
  setBar('Shalawat');
  const data = await load('sholawat');
  render(...data.map((s) => h('a', { class: 'card', href: `#/sholawat/${s.id}` }, h('h3', {}, s.title), h('p', {}, s.subtitle))));
  scrollTo(0, 0);
}
async function sholawat(id) {
  const s = (await load('sholawat')).find((x) => x.id === id);
  if (!s) return notFound();
  setBar(s.title, s.subtitle, true);
  reader(`sholawat/${id}`, [
    s.description && h('p', { class: 'muted' }, s.description),
    ...s.verses.map((v) => passage({ arabic: clean(v.text), latin: clean(v.transliteration), translation: clean(v.translation) })),
  ]);
}

async function maulidBooks() {
  setBar('Maulid & Ratib');
  const books = await load('maulid_books');
  render(...books.map((b) => h('a', { class: 'card', href: `#/maulid/${b.id}` }, h('h3', {}, b.title), h('p', {}, b.description))));
  scrollTo(0, 0);
}
async function maulidChapters(bookId) {
  const [books, chapters, contents] = await Promise.all([load('maulid_books'), load('maulid_chapters'), load('maulid_contents')]);
  const book = books.find((b) => b.id === bookId);
  if (!book) return notFound();
  setBar(book.title, book.author);
  const readable = new Set(contents.map((c) => c.chapter_id));
  render(...chapters.filter((c) => c.book_id === bookId && readable.has(c.id))
    .map((c, i) => h('a', { class: 'card', href: `#/fasal/${c.id}` }, h('h3', {}, `${i + 1}. ${c.title}`), c.description && h('p', {}, c.description))));
  scrollTo(0, 0);
}
async function fasal(id) {
  const [chapters, contents] = await Promise.all([load('maulid_chapters'), load('maulid_contents')]);
  const ch = chapters.find((c) => c.id === id);
  if (!ch) return notFound();
  setBar(ch.title, '', true);
  reader(`fasal/${id}`, [
    ...contents.filter((c) => c.chapter_id === id).map((c) =>
      passage({ arabic: clean(c.text), latin: clean(c.transliteration), translation: clean(c.translation), hikmah: clean(c.hikmah) })),
    ch.hikmah_fasal && h('div', { class: 'hikmah' }, h('b', {}, 'Hikmah fasal: '), ch.hikmah_fasal),
  ]);
}

function sedekah() {
  setBar('Sedekah');
  scrollTo(0, 0);
  const ready = isValidQris(QRIS_PAYLOAD);
  const intro = h('div', { class: 'card tinted' },
    h('div', { class: 'ar', lang: 'ar', style: 'font-size:21px' }, 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ'),
    h('p', {}, '“Sedekah tidak akan mengurangi harta.” (HR. Muslim)'));
  if (!ready) {
    render(intro, h('div', { class: 'card' }, h('h3', {}, 'Segera hadir'), h('p', {}, 'Sedekah lewat QRIS sedang disiapkan. Doakan saja dulu, itu juga sedekah.')));
    return;
  }
  let amount = AMOUNTS[1];
  const qrBox = h('div', { class: 'qr' });
  const caption = h('p', { class: 'center', style: 'margin:0;font-weight:700' });
  const save = h('a', { class: 'ghost', style: 'display:grid;place-items:center;text-decoration:none', download: 'qris-sedekah.png' }, 'Simpan gambar QR');
  const custom = h('input', { type: 'number', inputmode: 'numeric', min: '1000', step: '1000', placeholder: 'Nominal lain (Rp)', 'aria-label': 'Nominal lain dalam rupiah',
    style: 'min-height:48px;border-radius:14px;border:1px solid var(--outline);padding:0 14px;font:inherit;background:var(--surface);color:var(--on);width:100%' });
  const buttons = [...AMOUNTS.map((a) => h('button', { type: 'button', 'data-a': a }, rupiah(a))), h('button', { type: 'button', 'data-a': 0 }, 'Isi sendiri di aplikasi')];
  const draw = () => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.a === amount)));
    const payload = amount > 0 ? withAmount(QRIS_PAYLOAD, amount) : QRIS_PAYLOAD;
    const qr = window.qrcode(0, 'M');
    qr.addData(payload);
    qr.make();
    const src = qr.createDataURL(8, 16);
    qrBox.replaceChildren(h('img', { src, alt: `QRIS sedekah ${amount > 0 ? rupiah(amount) : 'tanpa nominal'}` }));
    save.href = src;
    caption.textContent = amount > 0 ? `${rupiah(amount)} · ${merchantName(QRIS_PAYLOAD)}` : merchantName(QRIS_PAYLOAD);
  };
  buttons.forEach((b) => b.addEventListener('click', () => { amount = +b.dataset.a; custom.value = ''; draw(); }));
  custom.addEventListener('change', () => {
    const v = Math.round(Number(custom.value));
    if (v >= 1000 && v <= 99999999) { amount = v; draw(); }
  });
  render(
    intro,
    h('h2', { class: 'section-title' }, 'Pilih nominal'),
    h('div', { class: 'amounts' }, buttons),
    custom,
    qrBox, caption,
    h('p', { class: 'muted center' }, 'Pindai dengan aplikasi bank atau e-wallet apa pun (GoPay, OVO, DANA, ShopeePay, m-banking). Di iPhone, tekan lama gambar QR untuk menyimpannya.'),
    save,
    h('div', { class: 'card' }, h('h3', {}, 'Untuk apa sedekahnya'),
      h('p', {}, 'Biaya server, pembaruan bacaan, dan pengembangan aplikasi. Sepenuhnya sukarela: tidak ada fitur yang dikunci, dan semua bacaan tetap gratis.')),
    h('p', { class: 'muted center' }, 'Tidak sempat bersedekah? Doa dan membagikan aplikasi ini kepada keluarga juga sedekah.'),
  );
  draw();
}

function notFound() {
  setBar('Tidak ditemukan');
  render(h('p', { class: 'muted' }, 'Halaman ini tidak ada. '), h('a', { href: '#/' }, 'Kembali ke beranda'));
}

// --- router -----------------------------------------------------------------
async function route() {
  onscroll = null;
  const [a, b] = location.hash.replace(/^#\/?/, '').split('/');
  const id = Number(b);
  try {
    if (!a) await home();
    else if (a === 'yasin') await yasin();
    else if (a === 'tahlil') await tahlil();
    else if (a === 'sholawat') await (b ? sholawat(id) : sholawatList());
    else if (a === 'maulid') await (b ? maulidChapters(id) : maulidBooks());
    else if (a === 'fasal') await fasal(id);
    else if (a === 'sedekah') sedekah();
    else notFound();
  } catch (e) {
    console.error(e);
    render(h('p', { class: 'muted' }, 'Bacaan belum bisa dimuat. Periksa koneksi lalu coba lagi.'));
  }
}
addEventListener('hashchange', route);
applyPrefs();
route();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
  // Already granted: keep FCM's token current, or pushes silently stop when it rotates.
  if (pushSupported() && Notification.permission === 'granted') syncToken().catch((e) => console.error(e));
}

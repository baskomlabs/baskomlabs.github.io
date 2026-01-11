BaskomLabs Brand Identity Guidelines

"Bengkel Arsitektur Sistem Komputer"

Dokumen ini berisi panduan identitas visual, nada suara (voice & tone), dan elemen desain untuk website baskomlabs.github.io.

1. Filosofi & Identitas

Nama Organisasi: BaskomLabs

Kepanjangan: Bengkel Arsitektur Sistem KOMputer

Core Concept: "The Pixelated Basin"

Visi:
Menjadi wadah (baskom) solusi teknologi yang esensial, tempat di mana kode mentah diracik menjadi aplikasi fungsional dengan pendekatan yang santai namun berteknik tinggi.

Personality:

Nyeleneh tapi Pro: Kita terdengar santai dan humoris, tapi hasil kerjanya serius.

Retro-Futurist: Mencintai estetika 8-bit/90an, tapi menggunakan teknologi masa kini.

Jujur (No Bullshit): Tidak menggunakan bahasa marketing yang berbelit-belit.

2. Palet Warna (The Retro-CRT Palette)

Gunakan warna-warna ini untuk menciptakan nuansa layar monitor tabung (CRT) dan estetika arcade.

Primary Colors

Void Black (Background Utama)

Hex: #050505 (Jangan pakai hitam pekat #000000 agar mata tidak cepat lelah)

CRT Blue (Brand Color / Background Aksen)

Hex: #0000BB atau #1A1A40

Accent Colors (Highlights)

Terminal Green (Success / Data / Main Text Accent)

Hex: #00FF41

Glitch Cyan (Link / Hover / Borders)

Hex: #00FFFF

Error Magenta (Warning / Glitch Effects)

Hex: #FF00FF

Neutral

Pixel White (Teks Utama)

Hex: #E0E0E0 (Putih sedikit redup seperti layar lama)

3. Tipografi (Typography System)

Gabungan antara font gaming jadul dengan font coding modern.

Headline (Judul Besar)

Gunakan font bergaya Pixel / Bitmap / 8-bit.

Font: 'Press Start 2P', 'VT323', atau 'Pixelify Sans' (Google Fonts).

Penggunaan: Judul H1, H2, dan tombol utama.

Gaya: Uppercase (Huruf Kapital Semua) disarankan untuk judul hero.

Body Text (Teks Paragraf)

Gunakan font Monospace (Lebar huruf sama) untuk mempertahankan nuansa coding.

Font: 'Fira Code', 'Roboto Mono', atau 'Space Mono' (Google Fonts).

Penggunaan: Paragraf, deskripsi projek, footer.

Keterbacaan: Pastikan line-height cukup (min 1.5) agar tidak terlalu padat.

4. Logo & Ikonografi

Konsep Utama: "The Abstract Code Container"

Bentuk: Kurung kurawal { yang diputar 90 derajat ke atas membentuk siluet mangkuk/baskom.

Isi: Simbol command prompt >_ atau kursor berkedip _ di tengah wadah.

Gaya: Pixel Art / Kotak-kotak kasar.

Aturan Ikon Website (Favicon):
Gunakan versi sederhana dari logo (Wadah biru + isi hijau) tanpa teks "BASKOM".

5. UI/UX Style Guide (Web Design)

The Container Concept

Setiap bagian konten (About, Projects, Contact) harus berada di dalam "Wadah" (Card) dengan border tegas.

Border: Solid, 2px - 4px. Warna #00FFFF atau #E0E0E0.

Shadow: Hard shadow (bayangan kasar) berwarna hitam atau magenta yang digeser, menciptakan efek 3D retro.

Interaksi (Micro-interactions)

Hover Effects:

Tombol bergeser sedikit ke bawah/kanan saat di-hover.

Warna teks berubah menjadi inverted (latar putih, teks hitam).

Efek Glitch (teks bergetar sedikit) pada judul penting.

Cursor:

Ganti kursor default dengan gambar tangan piksel atau panah piksel.

Visual Effects

Scanlines: Tambahkan overlay garis-garis tipis horizontal semi-transparan di seluruh layar (gunakan CSS pointer-events: none).

CRT Flicker: Animasi kedipan halus pada layar setiap beberapa detik.

6. Copywriting & Tone of Voice

Contoh Headline Hero Section:

"Selamat Datang di BaskomLabs."
"Bengkel Arsitektur Sistem Komputer."
Sub: Kami merakit kode agar Anda tidak perlu pusing.

Contoh Deskripsi Projek:

Nama Projek: KasirPintar.exe
Deskripsi: Aplikasi POS untuk UMKM. Dibuat sambil minum kopi sachet. Fitur lengkap, bug diminimalisir (semoga).

Contoh Footer:

"© 2024 BaskomLabs. Ditenagai oleh Nasi Padang dan StackOverflow."
[ SYSTEM SHUTDOWN ]

7. Aset Gambar (Image Guidelines)

Gunakan gambar dengan efek Dithering (bintik-bintik piksel).

Jika menampilkan screenshot aplikasi modern, beri bingkai monitor tabung atau efek glitch.

Hindari foto stok orang bersalaman/tersenyum palsu. Gunakan ilustrasi piksel atau foto tim yang diedit low-res.

Checklist Pengembangan Website

[ ] Setup Repository baskomlabs.github.io.

[ ] Buat index.html dengan struktur semantik.

[ ] Import Google Fonts (VT323 & Fira Code).

[ ] Implementasi CSS Variables untuk warna.

[ ] Buat komponen "Container" (Card) retro.

[ ] Tambahkan efek CSS Scanline.

[ ] Isi konten dengan copywriting gaya "Baskom".

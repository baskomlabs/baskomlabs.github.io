# ASO — Draft Listing Play Store

Copy siap tempel untuk halaman developer dan tiga aplikasi. Bahasa Indonesia jadi listing utama
(pasar Anda), Inggris sebagai listing tambahan.

> **Baca ini dulu.** Saya menulis draft ini dari yang bisa saya lihat: nama aplikasi di halaman
> developer Anda, copy di website, dan materi Learning Hub. Saya **tidak** punya akses ke aplikasi
> atau ke Play Console, jadi setiap klaim fitur di bawah harus Anda cek dulu. Baris yang ditandai
> `⚠️` adalah tebakan saya yang paling mungkin salah — hapus atau betulkan sebelum dipakai.
> Menulis fitur yang tidak ada di aplikasi bisa kena penolakan Play.

---

## Cara ASO bekerja di Play (bukan App Store)

Play **tidak punya kolom keyword**. Yang diindeks cuma tiga tempat:

| Kolom | Batas | Bobot |
|---|---|---|
| Nama aplikasi | 30 karakter | Paling berat |
| Deskripsi singkat | 80 karakter | Berat |
| Deskripsi lengkap | 4.000 karakter | Sedang |

Konsekuensinya: kata kunci harus muncul **wajar di dalam kalimat**, bukan ditumpuk. Menumpuk kata
kunci (keyword stuffing) melanggar kebijakan Play dan justru menurunkan ranking.

Faktor non-teks yang biasanya lebih berpengaruh daripada copy: rating, jumlah install, retensi,
dan kecepatan uninstall. Copy yang bagus membuat orang menemukan aplikasi; sisanya yang membuat
mereka bertahan.

---

## Halaman developer

**Nama developer:** `Baskom`

**Deskripsi:**

```
Baskom itu wadah — tempat semua diaduk jadi satu. Di sini isinya kode.

Aplikasi-aplikasi kecil buat keperluan sehari-hari: cek saldo kartu, baca kode QRIS,
dan tahlilan. Dibikin di rumah, dipakai sendiri, dibagi ke yang butuh.

do code for fun, no.. serious things.
```

---

## 1. QRSTU

**Nama sekarang:** `QRSTU: Scanner QRIS & Edukasi` (29/30 karakter)

Sudah bagus — ada nama merek, fungsi utama (*scanner QRIS*), dan pembeda (*edukasi*). **Saran saya:
jangan diubah.** Mengganti nama aplikasi me-reset sebagian sinyal ranking yang sudah terkumpul.

**Deskripsi singkat** (80 karakter):

```
Scan kode QRIS, bongkar isi datanya, sekalian belajar cara kerja di baliknya.
```
<sub>76 karakter</sub>

**Deskripsi lengkap:**

```
Pernah penasaran, di dalam kode QRIS itu sebenarnya ada apa?

QRSTU membaca kode QRIS lalu membongkar isinya jadi bagian-bagian yang bisa dibaca manusia —
nama merchant, kota, kode kategori, sampai potongan data yang biasanya cuma kelihatan oleh mesin
pembayaran.

Bedanya dengan scanner biasa: QRSTU tidak berhenti di "berhasil dibaca". Setiap bagian data
dijelaskan, jadi Anda tahu kenapa isinya begitu.

YANG BISA DILAKUKAN
• Scan kode QRIS lewat kamera
• Bongkar isi kode jadi format Tag-Length-Value (TLV) yang terbaca
• Lihat detail merchant: nama, kota, dan kode kategori
• Baca penjelasan tiap bagian data, bukan cuma angkanya
⚠️ • Simpan riwayat hasil scan          ← hapus kalau belum ada
⚠️ • Bekerja tanpa koneksi internet     ← hapus kalau belum ada

BUAT SIAPA
Buat yang kerja di pembayaran dan perlu cepat mengecek isi sebuah kode. Buat mahasiswa dan
developer yang lagi belajar standar EMVCo. Buat siapa pun yang suka tahu cara kerja sesuatu.

QRSTU tidak memproses pembayaran dan tidak terhubung ke rekening mana pun. Aplikasi ini cuma
membaca dan menjelaskan.

Mau penjelasan yang lebih panjang? Ada di baskomlabs.github.io/learning

do code for fun, no.. serious things.
```

**Kata kunci yang sudah tercakup:** qris, scan qris, scanner qris, baca qris, kode qr,
emvco, tlv, merchant, parsing.

---

## 2. PembacaKUE

**Nama sekarang:** `PembacaKUE: Cek eMoney Flazz` (28/30 karakter)

Kuat — memuat dua istilah yang paling sering dicari orang (*eMoney*, *Flazz*). Pertahankan.

**Deskripsi singkat** (80 karakter):

```
Cek saldo eMoney, Flazz & kartu NFC lain cukup dengan menempelkan ke HP.
```
<sub>71 karakter</sub>

**Deskripsi lengkap:**

```
Cek sisa saldo kartu tanpa harus ke minimarket atau mesin ATM.

Tempelkan kartu ke belakang HP, saldo langsung muncul. Tidak perlu daftar, tidak perlu login,
tidak perlu koneksi internet.

KARTU YANG DIDUKUNG
• e-Money Mandiri
• Flazz BCA
⚠️ • Brizzi BRI, TapCash BNI     ← hapus yang belum didukung
⚠️ • Kartu uang elektronik lain berbasis NFC

CARA PAKAI
1. Nyalakan NFC di pengaturan HP
2. Buka aplikasi
3. Tempelkan kartu ke bagian belakang HP
4. Saldo muncul

PRIVASI
Saldo dibaca langsung dari kartu ke HP Anda. Aplikasi ini tidak mengirim data kartu ke mana pun,
tidak menyimpannya di server, dan tidak meminta data pribadi Anda.

CATATAN
Butuh HP Android yang punya NFC. Letak antena NFC berbeda-beda tiap merek — kalau kartu tidak
terbaca, coba geser posisinya pelan-pelan.

Aplikasi ini tidak berafiliasi dengan Bank Mandiri, BCA, atau penerbit kartu mana pun. Kami cuma
membaca saldo yang memang sudah tersimpan di kartu.

do code for fun, no.. serious things.
```

**Kata kunci yang sudah tercakup:** cek saldo emoney, cek saldo flazz, saldo e-money, nfc,
kartu emoney, saldo kartu, tap kartu, e-toll.

> ⚠️ Website lama menyebut PembacaKUE sebagai pembaca **kartu identitas / e-KTP**, sedangkan nama
> di Play menyebut **eMoney & Flazz**. Saya sudah samakan website ke arah eMoney karena itu yang
> jadi judul di Play. Kalau aplikasinya memang juga baca e-KTP, bilang ke saya — itu kata kunci
> bervolume tinggi yang sayang kalau dibuang.

---

## 3. Yasin Tahlil Maulid & Sholawat

**Nama sekarang:** `Yasin Tahlil Maulid & Sholawat` (30/30 karakter)

Sudah mentok di batas dan sudah memuat empat kata kunci utama. Jangan diubah.

**Deskripsi singkat** (80 karakter):

```
Yasin, Tahlil, Maulid & Sholawat lengkap. Bisa dibaca tanpa internet.
```
<sub>69 karakter</sub>

**Deskripsi lengkap:**

```
Bacaan Yasin, Tahlil, Maulid, dan Sholawat dalam satu aplikasi — siap dibuka kapan saja, termasuk
saat tidak ada sinyal.

Dibuat mengikuti susunan yang biasa dipakai jamaah Nahdlatul Ulama, supaya bisa langsung diikuti
waktu tahlilan, yasinan, atau maulidan bersama-sama.

ISI APLIKASI
• Surah Yasin lengkap
• Susunan bacaan Tahlil dari awal sampai doa penutup
• Maulid — Barzanji, Diba', dan Simtudduror
• Kumpulan Sholawat
⚠️ • Teks Arab, latin, dan terjemahan   ← sesuaikan dengan yang benar-benar ada
⚠️ • Ukuran huruf bisa diatur
⚠️ • Mode gelap untuk dibaca malam hari

BISA DIBUKA TANPA INTERNET
Semua bacaan tersimpan di dalam aplikasi. Tidak perlu kuota, cocok dibawa ke masjid, musala, atau
acara di rumah yang sinyalnya susah.

TANPA GANGGUAN
Tidak ada iklan yang menutupi bacaan. Tidak perlu daftar akun. Tidak mengumpulkan data pribadi.

Semoga bermanfaat, dan semoga jadi amal jariyah buat yang ikut menyebarkan.

do code for fun, no.. serious things.
```

**Kata kunci yang sudah tercakup:** yasin, tahlil, tahlilan, yasinan, maulid, barzanji, diba,
simtudduror, sholawat, nu, nahdlatul ulama, offline.

---

## Checklist aset per aplikasi

| Aset | Spesifikasi | Status |
|---|---|---|
| Ikon aplikasi | 512×512 PNG 32-bit | Per aplikasi — ikon baskom di `brand/` untuk developer, bukan pengganti ikon tiap app |
| Feature graphic | 1024×500, tanpa alpha | `brand/baskom-feature-graphic.png` (generik Baskom) |
| Screenshot ponsel | min. 2, 16:9 atau 9:16 | Belum dibuat |
| URL kebijakan privasi | wajib, harus bisa diakses | Sudah — lihat di bawah |

**URL kebijakan privasi setelah migrasi URL** (yang lama tetap hidup lewat shim, tapi pakai yang
baru untuk pendaftaran ke depan):

| Aplikasi | URL |
|---|---|
| QRSTU | `https://baskomlabs.github.io/privacy-policy/` |
| PembacaKUE | `https://baskomlabs.github.io/privacy-policy-pembacakue/` |
| Yasin Tahlil | `https://baskomlabs.github.io/privacy-policy-yasintahlil/` |

---

## Yang paling berpengaruh, urut dari atas

1. **Screenshot.** Ini yang paling menentukan orang jadi install atau tidak, jauh di atas teks.
   Kalau cuma satu hal yang mau dikerjakan, kerjakan ini.
2. **Deskripsi singkat.** Muncul di hasil pencarian; bobot indeksnya tinggi dan cuma 80 karakter.
3. **Balas ulasan.** Sinyal ranking sekaligus alasan orang menaikkan bintang.
4. **Deskripsi lengkap.** Penting, tapi sedikit sekali yang membacanya sampai habis.

1|
2|### [⏳ RUNNING] Refaktor `README.md`
3|- **Status**: ⏳ Running
4|- **Detail**:
5|  - Mengubah boilerplate Vite menjadi dokumentasi profesional untuk **Baskom Labs Hub**.
6|  - Menambahkan deskripsi proyek, cara menjalankan, struktur folder, dan lisensi.
7|- **Next**: Commit perubahan setelah selesai.
8|
### [2026-08-09 09:05:00] TASK: Refaktor `README.md`
- **Status**: ✅ Success
- **Detail**:
  - README.md berhasil diubah dari boilerplate Vite menjadi dokumentasi profesional.
  - Menambahkan deskripsi proyek, cara menjalankan (`npm install && npm run dev`), struktur folder (`src/pages/learning/`), dan lisensi (MIT).
- **Evidence**: `/opt/data/baskomlabs_github_io/README.md`
- **Next**: Commit perubahan ke GitHub.

### [2026-10-21] TASK: Halaman aplikasi, SEO teknis, dan app-ads.txt
- **Status**: ✅ Success (PR, belum di-merge)
- **Detail**:
  - Halaman khusus PembacaKUE dan QRSTU: `/apps/<slug>/` (ID) dan `/en/apps/<slug>/` (EN), dengan hreflang, JSON-LD SoftwareApplication, OG image, dan screenshot WebP.
  - `public/app-ads.txt` disajikan di root; 404 asli (noindex) menggantikan redirect ke beranda; sitemap dengan alternatif hreflang.
  - Link Play pakai `&referrer=utm_source%3Dbaskom.fun...`; kebijakan privasi QRSTU & PembacaKUE ditulis ulang dwibahasa dengan pengungkapan iklan.
- **Next**: Akmal meninjau kebijakan privasi, lalu mengubah developer website di Play Console ke https://baskom.fun.

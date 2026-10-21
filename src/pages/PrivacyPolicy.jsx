import { Link } from 'react-router-dom';

function PrivacyPolicy({ app }) {
  if (app === 'QRSTU') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - QRSTU</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: October 21, 2026 · App ID com.baskom.qrisparser · <a href="#id">Bahasa Indonesia ↓</a></p>
            <p><strong>QRSTU</strong> ("the app", "we", "our") is a QRIS reader, scanner and tracker for Android, operated by BaskomLabs. It only reads and explains QRIS codes. It does not make payments or move money.</p>

            <h3>1. Camera, images and NFC</h3>
            <ul>
              <li><strong>Camera</strong>: used only while you scan. Frames are decoded on your device and are not uploaded.</li>
              <li><strong>Images and shared screenshots</strong>: an image you pick or share is decoded on your device to find the QR code. The image is not uploaded.</li>
              <li><strong>NFC</strong>: used only in Tap mode, to read QRIS Tap data from a phone held against yours. Card data stays hidden until you choose to reveal it.</li>
            </ul>

            <h3>2. Scan history</h3>
            <p>Each scan is saved with its date, merchant, city and amount. As a guest, history stays on your device. If you sign in with Google, your history is also backed up to Firebase Cloud Firestore under your account so it can be restored.</p>

            <h3>3. Account, leaderboard and statistics</h3>
            <ul>
              <li><strong>Firebase Authentication (Google sign-in, optional)</strong>: your Google display name, email address, profile photo and a user ID.</li>
              <li><strong>Leaderboard</strong>: if you are signed in, your display name, profile photo, scan count/points and whether you have Premium are shown to other users.</li>
              <li><strong>Merchant statistics</strong>: merchant names and cities from scanned codes are counted to show aggregate statistics.</li>
              <li><strong>Firebase Remote Config</strong>: fetches app settings. <strong>Firebase Crashlytics</strong>: sends crash reports with device and app technical details.</li>
            </ul>

            <h3>4. Advertising</h3>
            <p>The free version shows ads served through <strong>Unity LevelPlay (ironSource)</strong> mediation, with partner networks including Unity Ads, AppLovin, Pangle, Mintegral and Meta Audience Network. These services may use your device's <strong>Advertising ID</strong> and technical information to show and measure ads, under their own privacy policies. Where required, the app shows Google's consent form (User Messaging Platform) before ads load. You can change your choice at any time in <strong>About → Ad Privacy Settings</strong>, and you can reset or delete your Advertising ID in Android settings.</p>
            <p><strong>Premium</strong> removes all ads. Payment is handled by Google Play Billing; we never receive your card details.</p>

            <h3>5. Children</h3>
            <p>The app is not directed at children under 13, and we do not knowingly collect data from them.</p>

            <h3>6. Data retention & deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Data:</strong><br/>
                Open App &gt; <strong>Settings</strong> &gt; <strong>Account</strong> &gt; <strong>Delete Account</strong>. This permanently removes your account and cloud data. Guest data is removed by clearing the app's data or uninstalling it. You can also email us to request deletion.
            </div>

            <h3>7. Changes and contact</h3>
            <p>If this policy changes, the date at the top is updated. Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>

            <hr id="id" style={{ margin: '3rem 0', opacity: 0.2 }} />

            <h3>Kebijakan Privasi QRSTU (Bahasa Indonesia)</h3>
            <p className="meta">Berlaku sejak 21 Oktober 2026</p>
            <p><strong>QRSTU</strong> adalah aplikasi Android untuk membaca, memindai dan mencatat QRIS, dikelola oleh BaskomLabs. Aplikasi ini hanya membaca dan menjelaskan kode QRIS, tidak melakukan pembayaran atau memindahkan dana.</p>

            <h3>1. Kamera, gambar dan NFC</h3>
            <ul>
              <li><strong>Kamera</strong>: hanya dipakai saat memindai. Gambar diproses di perangkat dan tidak diunggah.</li>
              <li><strong>Gambar dan screenshot</strong>: gambar yang Anda pilih atau bagikan diproses di perangkat untuk mencari kode QR, dan tidak diunggah.</li>
              <li><strong>NFC</strong>: hanya dipakai di mode Tap untuk membaca data QRIS Tap dari ponsel yang ditempelkan. Data kartu tetap tersembunyi sampai Anda memilih menampilkannya.</li>
            </ul>

            <h3>2. Riwayat scan</h3>
            <p>Setiap scan disimpan dengan tanggal, merchant, kota dan nominal. Sebagai tamu, riwayat hanya ada di perangkat. Jika Anda login dengan Google, riwayat juga dicadangkan ke Firebase Cloud Firestore di akun Anda agar bisa dipulihkan.</p>

            <h3>3. Akun, leaderboard dan statistik</h3>
            <ul>
              <li><strong>Firebase Authentication (login Google, opsional)</strong>: nama tampilan, alamat email, foto profil Google dan ID pengguna.</li>
              <li><strong>Leaderboard</strong>: jika login, nama tampilan, foto profil, jumlah scan/poin dan status Premium Anda terlihat oleh pengguna lain.</li>
              <li><strong>Statistik merchant</strong>: nama dan kota merchant dari kode yang dipindai dihitung untuk statistik gabungan.</li>
              <li><strong>Firebase Remote Config</strong>: mengambil pengaturan aplikasi. <strong>Firebase Crashlytics</strong>: mengirim laporan crash beserta detail teknis perangkat dan aplikasi.</li>
            </ul>

            <h3>4. Iklan</h3>
            <p>Versi gratis menampilkan iklan melalui mediasi <strong>Unity LevelPlay (ironSource)</strong>, dengan jaringan mitra antara lain Unity Ads, AppLovin, Pangle, Mintegral dan Meta Audience Network. Layanan ini dapat memakai <strong>Advertising ID</strong> dan informasi teknis perangkat untuk menampilkan dan mengukur iklan, sesuai kebijakan privasi masing-masing. Bila diwajibkan, aplikasi menampilkan formulir persetujuan Google (User Messaging Platform) sebelum iklan dimuat. Pilihan itu bisa diubah kapan saja lewat <strong>Tentang → Pengaturan Privasi Iklan</strong>, dan Advertising ID bisa direset atau dihapus di pengaturan Android.</p>
            <p><strong>Premium</strong> menghapus semua iklan. Pembayaran ditangani Google Play Billing; kami tidak pernah menerima data kartu Anda.</p>

            <h3>5. Anak-anak</h3>
            <p>Aplikasi ini tidak ditujukan untuk anak di bawah 13 tahun dan kami tidak dengan sengaja mengumpulkan data dari mereka.</p>

            <h3>6. Penyimpanan & penghapusan data</h3>
            <div className="alert-box">
                <strong>Cara menghapus data:</strong><br/>
                Buka aplikasi &gt; <strong>Pengaturan</strong> &gt; <strong>Akun</strong> &gt; <strong>Hapus Akun</strong>. Ini menghapus akun dan data cloud Anda secara permanen. Data tamu terhapus dengan membersihkan data aplikasi atau mencopot aplikasi. Anda juga bisa meminta penghapusan lewat email.
            </div>

            <h3>7. Perubahan dan kontak</h3>
            <p>Bila kebijakan ini berubah, tanggal di atas ikut diperbarui. Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'Bensy') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - Bensy</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: June 19, 2026</p>
            <p><strong>Bensy</strong> ("we", "our", or "us") is a fuel and vehicle cost tracking application operated by BaskomLabs.</p>
            
            <h3>1. Information We Collect</h3>
            <h4>Account Data (Signed-in users)</h4>
            <ul>
                <li><strong>Google Account profile</strong>: name, email address, and profile picture.</li>
                <li><strong>User ID</strong>: unique identifier issued by Firebase Authentication.</li>
            </ul>
            <h4>Permission-Based Data</h4>
            <ul>
                <li><strong>Camera</strong>: processed entirely on your device using Google ML Kit.</li>
            </ul>
            
            <h3>2. Data Retention & Deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Account &amp; Data:</strong><br/>
                Open App &gt; <strong>Profile</strong> &gt; <strong>Account</strong> &gt; <strong>Delete Account</strong>.
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'PembacaKUE') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - PembacaKUE</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: October 21, 2026 · App ID com.baskom.pembacakue · <a href="#id">Bahasa Indonesia ↓</a></p>
            <p><strong>PembacaKUE</strong> ("the app", "we", "our") reads the balance and transaction history of Indonesian electronic money cards (e-Money/e-Toll, Flazz, TapCash, Brizzi, JakCard) over NFC. It is operated by BaskomLabs.</p>
            <p><strong>In short:</strong> your card balance, serial number and transaction history are read and stored on your own device. Card contents are never sent to any server, and the app cannot change your balance: it only reads, it never writes.</p>

            <h3>1. Data that stays on your device</h3>
            <ul>
              <li><strong>Card balance and transaction history</strong>, read over NFC each time you tap a card and, if history is on, kept in the app's local database.</li>
              <li><strong>Card nicknames</strong> you give yourself.</li>
              <li><strong>Preferences</strong>: language, balance voice, vehicle class and your ad-consent choice.</li>
            </ul>
            <p>Delete all of this at any time with <strong>Settings → Delete All History</strong>, or by uninstalling. History saving can be switched off entirely in <strong>Settings → Save Scan History</strong>.</p>

            <h3>2. Data sent to our servers</h3>
            <ul>
              <li><strong>A SHA-256 hash of the card serial number</strong> (not the number itself), the <strong>card type</strong> and the <strong>read time</strong>: used to count how many different cards are read so we know which card types need better support. The real serial number is never sent and cannot be recovered from the hash.</li>
              <li><strong>Terminal/gate names you correct yourself</strong>: crowdsourced so other users see a readable place name instead of a raw terminal code. Place names only, not linked to your identity.</li>
              <li><strong>An anonymous Firebase Authentication ID</strong>, created automatically without email, phone number or any account, used only to prevent abuse of data writes.</li>
            </ul>
            <p>Your balance and transaction list are <strong>never</strong> sent to our servers.</p>

            <h3>3. Location</h3>
            <p>Location permission is requested only when you open the <strong>Toll Rate Calculator</strong>, and used only while that screen is open. Coordinates are sent to third-party map services to turn them into place names and routes: OpenStreetMap Nominatim, Photon (Komoot) and OSRM. We do not store your location history, on the device or on our servers. Declining location does not affect card reading.</p>

            <h3>4. Advertising</h3>
            <p>The free version shows ads through <strong>ironSource / Unity LevelPlay</strong>, which may use your device's <strong>Advertising ID</strong>. Before ads load, the app shows Google's official consent form (User Messaging Platform). You can change that choice at any time in <strong>Settings → Ad Privacy Settings</strong>.</p>
            <p>The ad-free subscription stops ads from loading entirely. Payment is handled by Google Play Billing; we never receive or store your card details.</p>

            <h3>5. Data export</h3>
            <p>History export (CSV) creates a file in the app's temporary storage and hands it to Android's share menu. Where it goes is your decision; we do not receive a copy.</p>

            <h3>6. Children</h3>
            <p>The app is not directed at children under 13, and we do not knowingly collect data from them.</p>

            <h3>7. Changes and contact</h3>
            <p>If this policy changes, the date at the top is updated. Questions or deletion requests: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>

            <hr id="id" style={{ margin: '3rem 0', opacity: 0.2 }} />

            <h3>Kebijakan Privasi PembacaKUE (Bahasa Indonesia)</h3>
            <p className="meta">Berlaku sejak 21 Oktober 2026</p>
            <p><strong>Ringkasnya:</strong> saldo, nomor seri, dan riwayat transaksi kartu uang elektronik Anda dibaca dan disimpan di perangkat Anda sendiri. Isi kartu tidak pernah kami kirim ke server mana pun, dan kami tidak pernah bisa mengubah saldo kartu Anda. Aplikasi ini hanya membaca, tidak menulis.</p>

            <h3>1. Data yang tetap di perangkat Anda</h3>
            <ul>
              <li><strong>Saldo dan riwayat transaksi kartu</strong>, dibaca lewat NFC setiap kali Anda menempelkan kartu dan (bila fitur riwayat aktif) disimpan di basis data lokal aplikasi.</li>
              <li><strong>Nama panggilan kartu</strong> yang Anda beri sendiri.</li>
              <li><strong>Preferensi</strong>: bahasa, suara pembaca saldo, golongan kendaraan, dan pilihan persetujuan iklan.</li>
            </ul>
            <p>Semua ini bisa dihapus kapan saja lewat <strong>Pengaturan → Hapus Semua Riwayat</strong>, atau dengan mencopot aplikasi. Penyimpanan riwayat bisa dimatikan lewat <strong>Pengaturan → Simpan Riwayat Scan</strong>.</p>

            <h3>2. Data yang dikirim ke server kami</h3>
            <ul>
              <li><strong>Sidik (hash) SHA-256 nomor seri kartu</strong> (bukan nomor aslinya), <strong>jenis kartu</strong> dan <strong>waktu pembacaan</strong>: untuk menghitung berapa banyak kartu berbeda yang terbaca, supaya kami tahu jenis kartu mana yang perlu didukung lebih baik. Nomor seri asli tidak pernah dikirim dan tidak bisa dipulihkan dari hash-nya.</li>
              <li><strong>Nama terminal/gerbang yang Anda perbaiki sendiri</strong>: urun daya agar pengguna lain melihat nama tempat yang mudah dibaca. Hanya nama tempat, tanpa kaitan ke identitas Anda.</li>
              <li><strong>ID anonim Firebase Authentication</strong>, dibuat otomatis tanpa email, nomor telepon atau akun apa pun, semata-mata untuk mencegah penyalahgunaan penulisan data.</li>
            </ul>
            <p>Nominal saldo dan daftar transaksi <strong>tidak pernah</strong> dikirim ke server kami.</p>

            <h3>3. Lokasi</h3>
            <p>Izin lokasi hanya diminta saat Anda membuka <strong>Kalkulator Tarif Tol</strong>, dan hanya dipakai selama layar itu terbuka. Koordinat dikirim ke layanan peta pihak ketiga untuk diubah menjadi nama tempat dan rute: OpenStreetMap Nominatim, Photon (Komoot) dan OSRM. Kami tidak menyimpan riwayat lokasi Anda. Menolak izin lokasi tidak memengaruhi pembacaan kartu.</p>

            <h3>4. Iklan</h3>
            <p>Versi gratis menampilkan iklan melalui <strong>ironSource / Unity LevelPlay</strong>, yang dapat menggunakan <strong>Advertising ID</strong> perangkat Anda. Sebelum iklan dimuat, aplikasi menampilkan formulir persetujuan resmi Google (User Messaging Platform). Pilihan itu bisa diubah kapan saja lewat <strong>Pengaturan → Pengaturan Privasi Iklan</strong>.</p>
            <p>Berlangganan bebas iklan menghentikan pemuatan iklan sepenuhnya. Pembayaran ditangani Google Play Billing; kami tidak pernah menerima atau menyimpan data kartu kredit Anda.</p>

            <h3>5. Ekspor data</h3>
            <p>Ekspor Riwayat (CSV) membuat berkas di penyimpanan sementara aplikasi dan menyerahkannya ke menu berbagi Android. Ke mana berkas itu pergi sepenuhnya keputusan Anda; kami tidak menerima salinannya.</p>

            <h3>6. Anak-anak</h3>
            <p>Aplikasi ini tidak ditujukan untuk anak di bawah 13 tahun dan kami tidak dengan sengaja mengumpulkan data dari mereka.</p>

            <h3>7. Perubahan dan kontak</h3>
            <p>Bila kebijakan ini berubah, tanggal di atas ikut diperbarui. Pertanyaan atau permintaan penghapusan data: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'Yasin Tahlil NU') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - Yasin Tahlil Maulid NU</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Terakhir diperbarui: Juli 2026</p>
            <p>Kami sangat menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana aplikasi <strong>Yasin Tahlil Maulid NU</strong> mengumpulkan, menggunakan, dan melindungi informasi saat Anda menggunakan layanan kami.</p>
            
            <h3>1. Pengumpulan Data Pribadi</h3>
            <p>Aplikasi Yasin Tahlil Maulid NU <strong>TIDAK</strong> mengumpulkan, menyimpan, atau membagikan data pribadi Anda (seperti nama, alamat, nomor telepon, atau email) secara sepihak. Aplikasi dapat digunakan sepenuhnya secara offline untuk fitur-fitur bacaan.</p>

            <h3>2. Penggunaan Akses Internet</h3>
            <p>Beberapa fitur tertentu (seperti halaman pembelajaran eksternal atau update konten) mungkin memerlukan akses internet. Data yang dikirim hanya digunakan untuk mengambil konten statis dari server dan tidak melibatkan pengumpulan data perangkat Anda.</p>

            <h3>3. Layanan Pihak Ketiga</h3>
            <p>Aplikasi ini mungkin menggunakan layanan analitik anonim (seperti Firebase Analytics) untuk memahami statistik penggunaan secara umum dan mendeteksi crash aplikasi guna perbaikan di masa mendatang. Data yang dikumpulkan sepenuhnya anonim dan tidak dapat dikaitkan dengan identitas individu Anda.</p>

            <h3>4. Hubungi Kami</h3>
            <p>Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami di <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'Quran Discovery') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - Quran Discovery</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: September 24, 2026 · <a href="#id">Bahasa Indonesia ↓</a></p>
            <p><strong>Quran Discovery</strong> ("the app", "we", "our") is a Quran reading and verse-recognition application for Android, operated by BaskomLabs. This policy explains what the app does with your information.</p>
            <p><strong>In short:</strong> no account, no ads, no analytics or tracking. Microphone audio is processed only on your phone and is never stored or uploaded. Your history, bookmarks and notes stay on your device.</p>

            <h3>1. Microphone and audio</h3>
            <ul>
              <li>The microphone is used only after you start it: <strong>Find a verse</strong>, <strong>Listen nearby</strong>, or <strong>Check audio input</strong> in Settings.</li>
              <li>Audio is held in memory and analysed <strong>on your device</strong> by an offline speech model. It is not saved to storage, not written to logs, and never sent to us or anyone else. It is erased when the analysis ends.</li>
              <li><strong>Listen nearby</strong> keeps listening in the background as a foreground service and always shows a notification while it is active. You can stop it from the app or the notification.</li>
              <li>If you choose an audio or video file, the app reads at most its first 30 seconds in memory for recognition. The file is not copied or uploaded.</li>
            </ul>

            <h3>2. Information stored on your device</h3>
            <p>The following is stored only in the app's private storage on your phone. We cannot access it, and it is excluded from Android cloud backup.</p>
            <ul>
              <li><strong>Recognition history</strong>: the verse references found, the time, and whether the input was the microphone or a file. No audio or transcript is kept.</li>
              <li><strong>Bookmarks and personal notes</strong> you create.</li>
              <li><strong>Settings</strong>: language, theme, Arabic text size, display options, your last reading position, and the count of your own "Is this the verse?" answers.</li>
              <li><strong>Downloaded content</strong>: the voice-recognition model (if you download it) and cached meaning, transliteration and tafsir text.</li>
            </ul>

            <h3>3. Internet connections</h3>
            <p>The app connects to the internet only to fetch content you ask for. These requests contain only what is needed (for example a surah or verse number). We do not send identifiers, your history, notes or any audio. As with any web request, the service receives your IP address and basic technical information, which is handled under its own privacy policy.</p>
            <ul>
              <li><strong>GitHub</strong> (github.com): the voice-recognition model, downloaded only when you tap Download. Its integrity is verified on your device.</li>
              <li><strong>Quran.com</strong> (api.quran.com, verses.quran.com): meaning, transliteration and English tafsir when you open a surah or tafsir, and recitation audio when you tap play.</li>
              <li><strong>equran.id</strong>: Indonesian tafsir (Tafsir Kemenag RI) when you open a tafsir in Indonesian.</li>
            </ul>
            <p>Links such as the Tanzil source page, and verses you choose to share, open in other apps (your browser or the share target) under their own policies.</p>

            <h3>4. What we do not do</h3>
            <ul>
              <li>No sign-in or account, and no advertising.</li>
              <li>No analytics, crash-reporting, advertising or tracking SDKs.</li>
              <li>No access to your location, contacts, photos or other files beyond a file you explicitly pick.</li>
              <li>We do not sell, rent or share personal data, and we do not collect it in the first place.</li>
            </ul>

            <h3>5. Permissions</h3>
            <ul>
              <li><strong>Microphone</strong>: to recognise recited verses, on your request only.</li>
              <li><strong>Notifications</strong>: model download progress and the Listen nearby status.</li>
              <li><strong>Foreground service (microphone, data sync)</strong>: to keep Listen nearby and the model download running with a visible notification.</li>
              <li><strong>Internet</strong>: for the content described in section 3.</li>
              <li><strong>Vibration</strong>: short haptic feedback while listening and when a verse is found.</li>
            </ul>

            <h3>6. Your choices and deleting data</h3>
            <div className="alert-box">
              <strong>How to delete your data:</strong><br/>
              Delete single history entries in <strong>Library</strong>, or all history in <strong>Settings &gt; Clear discovery history</strong>. Remove bookmarks and notes from the reader.<br/>
              Clearing the app's storage in Android settings, or uninstalling the app, permanently removes everything the app stored. You can revoke the microphone permission at any time in Android settings.
            </div>

            <h3>7. Children</h3>
            <p>The app is intended for a general audience and does not collect personal information from anyone, including children.</p>

            <h3>8. Security</h3>
            <p>All connections use HTTPS; unencrypted connections are disabled. Data on your device is protected by Android's app sandbox.</p>

            <h3>9. Changes to this policy</h3>
            <p>If the app's handling of data changes, we will update this page and its effective date before the change takes effect.</p>

            <h3>10. Contact</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>

            <hr id="id" style={{ margin: '3rem 0', opacity: 0.2 }} />

            <h2>Kebijakan Privasi - Quran Discovery</h2>
            <p className="meta">Berlaku sejak: 24 September 2026</p>
            <p><strong>Quran Discovery</strong> ("aplikasi", "kami") adalah aplikasi membaca Al-Quran dan pengenalan ayat untuk Android yang dikelola oleh BaskomLabs. Kebijakan ini menjelaskan apa yang dilakukan aplikasi terhadap informasi Anda.</p>
            <p><strong>Singkatnya:</strong> tanpa akun, tanpa iklan, tanpa analitik atau pelacakan. Audio mikrofon hanya diproses di HP Anda dan tidak pernah disimpan atau diunggah. Riwayat, tanda, dan catatan Anda tetap di perangkat.</p>

            <h3>1. Mikrofon dan audio</h3>
            <ul>
              <li>Mikrofon hanya digunakan setelah Anda memulainya: <strong>Cari ayat</strong>, <strong>Dengarkan sekitar</strong>, atau <strong>Uji input audio</strong>.</li>
              <li>Audio disimpan sementara di memori dan dianalisis <strong>di perangkat Anda</strong> oleh model suara offline. Audio tidak disimpan ke penyimpanan, tidak dicatat di log, dan tidak pernah dikirim ke kami atau pihak lain. Audio dihapus setelah analisis selesai.</li>
              <li><strong>Dengarkan sekitar</strong> tetap mendengar di latar belakang sebagai layanan latar depan dan selalu menampilkan notifikasi selama aktif. Anda dapat menghentikannya dari aplikasi atau notifikasi.</li>
              <li>Jika Anda memilih file audio atau video, aplikasi membaca paling banyak 30 detik pertama di memori untuk pengenalan. File tidak disalin atau diunggah.</li>
            </ul>

            <h3>2. Informasi yang disimpan di perangkat Anda</h3>
            <p>Data berikut hanya disimpan di penyimpanan pribadi aplikasi di HP Anda. Kami tidak dapat mengaksesnya, dan data ini dikecualikan dari cadangan cloud Android.</p>
            <ul>
              <li><strong>Riwayat pengenalan</strong>: referensi ayat yang ditemukan, waktu, dan sumber input (mikrofon atau file). Tidak ada audio atau transkrip yang disimpan.</li>
              <li><strong>Tanda (bookmark) dan catatan pribadi</strong> yang Anda buat.</li>
              <li><strong>Pengaturan</strong>: bahasa, tema, ukuran huruf Arab, pilihan tampilan, posisi terakhir membaca, dan jumlah jawaban "Apakah ini ayatnya?" Anda.</li>
              <li><strong>Konten yang diunduh</strong>: model pengenalan suara (jika Anda mengunduhnya) serta teks arti, transliterasi, dan tafsir yang tersimpan sementara (cache).</li>
            </ul>

            <h3>3. Koneksi internet</h3>
            <p>Aplikasi hanya terhubung ke internet untuk mengambil konten yang Anda minta. Permintaan tersebut hanya berisi hal yang diperlukan (misalnya nomor surat atau ayat). Kami tidak mengirim pengenal, riwayat, catatan, atau audio apa pun. Seperti permintaan web pada umumnya, layanan tersebut menerima alamat IP dan informasi teknis dasar Anda, yang diatur oleh kebijakan privasinya masing-masing.</p>
            <ul>
              <li><strong>GitHub</strong> (github.com): model pengenalan suara, hanya diunduh saat Anda menekan Unduh. Integritasnya diverifikasi di perangkat Anda.</li>
              <li><strong>Quran.com</strong> (api.quran.com, verses.quran.com): arti, transliterasi, dan tafsir berbahasa Inggris saat Anda membuka surat atau tafsir, serta audio bacaan saat Anda menekan putar.</li>
              <li><strong>equran.id</strong>: tafsir berbahasa Indonesia (Tafsir Kemenag RI) saat Anda membuka tafsir dalam bahasa Indonesia.</li>
            </ul>
            <p>Tautan seperti halaman sumber Tanzil, serta ayat yang Anda bagikan, dibuka di aplikasi lain (browser atau tujuan berbagi) sesuai kebijakan masing-masing.</p>

            <h3>4. Yang tidak kami lakukan</h3>
            <ul>
              <li>Tidak ada login atau akun, dan tidak ada iklan.</li>
              <li>Tidak ada SDK analitik, pelaporan crash, iklan, atau pelacakan.</li>
              <li>Tidak mengakses lokasi, kontak, foto, atau file lain selain file yang Anda pilih sendiri.</li>
              <li>Kami tidak menjual, menyewakan, atau membagikan data pribadi, dan memang tidak mengumpulkannya.</li>
            </ul>

            <h3>5. Izin</h3>
            <ul>
              <li><strong>Mikrofon</strong>: untuk mengenali ayat yang dibacakan, hanya atas permintaan Anda.</li>
              <li><strong>Notifikasi</strong>: kemajuan unduhan model dan status Dengarkan sekitar.</li>
              <li><strong>Layanan latar depan (mikrofon, sinkronisasi data)</strong>: agar Dengarkan sekitar dan unduhan model tetap berjalan dengan notifikasi yang terlihat.</li>
              <li><strong>Internet</strong>: untuk konten yang dijelaskan pada bagian 3.</li>
              <li><strong>Getar</strong>: umpan balik haptik singkat saat mendengar dan saat ayat ditemukan.</li>
            </ul>

            <h3>6. Pilihan Anda dan penghapusan data</h3>
            <div className="alert-box">
              <strong>Cara menghapus data Anda:</strong><br/>
              Hapus riwayat satu per satu di <strong>Koleksi</strong>, atau seluruh riwayat di <strong>Pengaturan &gt; Hapus riwayat penemuan</strong>. Hapus tanda dan catatan dari pembaca.<br/>
              Menghapus penyimpanan aplikasi di pengaturan Android, atau mencopot aplikasi, akan menghapus permanen semua data yang disimpan aplikasi. Izin mikrofon dapat dicabut kapan saja di pengaturan Android.
            </div>

            <h3>7. Anak-anak</h3>
            <p>Aplikasi ditujukan untuk pengguna umum dan tidak mengumpulkan informasi pribadi dari siapa pun, termasuk anak-anak.</p>

            <h3>8. Keamanan</h3>
            <p>Semua koneksi menggunakan HTTPS; koneksi tidak terenkripsi dinonaktifkan. Data di perangkat dilindungi oleh sandbox aplikasi Android.</p>

            <h3>9. Perubahan kebijakan</h3>
            <p>Jika penanganan data oleh aplikasi berubah, kami akan memperbarui halaman ini beserta tanggal berlakunya sebelum perubahan diterapkan.</p>

            <h3>10. Kontak</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'Hadith Discovery') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - Hadith Discovery</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: October 2, 2026 · <a href="#id">Bahasa Indonesia ↓</a></p>
            <p><strong>Hadith Discovery</strong> ("the app", "we", "our") is an Android app for checking where a hadith comes from, searching hadith and reading hadith books, operated by BaskomLabs. This policy explains what the app does with your information.</p>
            <p><strong>In short:</strong> no account, no ads and no analytics or tracking. The text you check or search and any speech you let it hear are processed only on your phone and are never sent anywhere. The only internet use is a one-time download of the Arabic speech package that you start yourself.</p>

            <h3>1. Text you check or search</h3>
            <ul>
              <li>Text you type, paste, share into the app (for example from a chat app) or send through the <strong>Check hadith</strong> text-selection menu is compared against the hadith collection bundled inside the app, <strong>on your device</strong>.</li>
              <li>This text and your search queries are held in memory only. They are not saved, not logged, and never sent to us or anyone else.</li>
            </ul>

            <h3>2. Microphone and speech</h3>
            <ul>
              <li>The microphone is used only after you tap <strong>Start listening</strong> in <strong>Listen and check</strong> on the Check tab, for at most 30 seconds or until you tap Done.</li>
              <li>The audio is kept in the phone's memory only while it is turned into text by a speech recognition model running <strong>on your device</strong>, then erased. It is never written to storage, logged or uploaded.</li>
              <li>The recognised text is placed in the check field and handled as described in section 1.</li>
            </ul>

            <h3>3. Information stored on your device</h3>
            <p>The app stores, in its private storage on your phone: your settings (language, theme, Arabic text size, source-detail display, daily reminder on/off and time), hadith you save and private notes you write, and the Arabic speech package if you download it. None of this is sent anywhere. The hadith collection, translations and explanations are read-only content shipped inside the app. Android backup is turned off for the app, so nothing is copied to cloud backup.</p>

            <h3>4. Internet and links</h3>
            <p>The app uses the internet for one thing only: when you tap <strong>Download package</strong> in Listen and check, it downloads the Arabic speech recognition model (about 88 MB) from a fixed GitHub release address and verifies it before use. The request contains no audio, text, account or app identifier; like any download, GitHub receives your IP address under its own privacy policy. The app makes no other network connections. Links you choose to open, such as a hadith's page on HadeethEnc.com or a data source, open in your browser under that site's own privacy policy.</p>

            <h3>5. What we do not do</h3>
            <ul>
              <li>No sign-in or account, and no advertising.</li>
              <li>No analytics, crash-reporting, advertising or tracking SDKs.</li>
              <li>No access to your location, contacts, photos or files.</li>
              <li>We do not sell, rent or share personal data, and we do not collect it in the first place.</li>
            </ul>

            <h3>6. Permissions</h3>
            <ul>
              <li><strong>Microphone</strong>: for Listen and check, on your request only. You can deny it and still use every other feature.</li>
              <li><strong>Internet</strong>: only for the speech package download you start.</li>
              <li><strong>Notifications</strong> and <strong>run at startup</strong>: for the optional daily hadith reminder you turn on in Settings, and to restore its alarm after a restart.</li>
            </ul>

            <h3>7. Your choices and deleting data</h3>
            <div className="alert-box">
              <strong>How to delete your data:</strong><br/>
              The app keeps no history of what you checked, searched or heard. You can remove saved hadith and notes in the app. Clearing the app's storage in Android settings, or uninstalling the app, removes your settings, saved hadith, notes and the speech package. You can revoke the microphone permission at any time in Android settings.
            </div>

            <h3>8. Children</h3>
            <p>The app is intended for a general audience and does not collect personal information from anyone, including children.</p>

            <h3>9. Changes to this policy</h3>
            <p>If the app's handling of data changes, we will update this page and its effective date before the change takes effect.</p>

            <h3>10. Contact</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>

            <hr id="id" style={{ margin: '3rem 0', opacity: 0.2 }} />

            <h2>Kebijakan Privasi - Hadith Discovery</h2>
            <p className="meta">Berlaku sejak: 2 Oktober 2026</p>
            <p><strong>Hadith Discovery</strong> ("aplikasi", "kami") adalah aplikasi Android untuk memeriksa sumber hadis, mencari hadis, dan membaca kitab hadis yang dikelola oleh BaskomLabs. Kebijakan ini menjelaskan apa yang dilakukan aplikasi terhadap informasi Anda.</p>
            <p><strong>Singkatnya:</strong> tanpa akun, tanpa iklan, tanpa analitik atau pelacakan. Teks yang Anda cek atau cari dan suara yang Anda izinkan untuk didengar hanya diproses di HP Anda dan tidak pernah dikirim ke mana pun. Satu-satunya penggunaan internet adalah unduhan sekali paket suara Arab yang Anda mulai sendiri.</p>

            <h3>1. Teks yang Anda cek atau cari</h3>
            <ul>
              <li>Teks yang Anda ketik, tempel, bagikan ke aplikasi (misalnya dari aplikasi chat), atau kirim lewat menu seleksi teks <strong>Cek hadis</strong> dicocokkan dengan koleksi hadis yang sudah ada di dalam aplikasi, <strong>di perangkat Anda</strong>.</li>
              <li>Teks dan kata pencarian tersebut hanya disimpan sementara di memori. Tidak disimpan, tidak dicatat di log, dan tidak pernah dikirim ke kami atau pihak lain.</li>
            </ul>

            <h3>2. Mikrofon dan suara</h3>
            <ul>
              <li>Mikrofon hanya digunakan setelah Anda menekan <strong>Mulai dengarkan</strong> di <strong>Dengar dan cek</strong> pada tab Cek, paling lama 30 detik atau sampai Anda menekan Selesai.</li>
              <li>Audio hanya ada di memori HP selama diubah menjadi teks oleh model pengenal suara yang berjalan <strong>di perangkat Anda</strong>, lalu dihapus. Audio tidak pernah ditulis ke penyimpanan, dicatat di log, atau diunggah.</li>
              <li>Teks hasil pengenalan dimasukkan ke kolom cek dan diperlakukan seperti pada bagian 1.</li>
            </ul>

            <h3>3. Informasi yang disimpan di perangkat Anda</h3>
            <p>Aplikasi menyimpan di penyimpanan pribadinya di HP Anda: pengaturan (bahasa, tema, ukuran huruf Arab, tampilan keterangan sumber, pengingat harian dan jamnya), hadis yang Anda simpan dan catatan pribadi yang Anda tulis, serta paket suara Arab bila Anda mengunduhnya. Semua ini tidak dikirim ke mana pun. Koleksi hadis, terjemahan, dan penjelasan adalah konten baca-saja yang ikut di dalam aplikasi. Cadangan Android dimatikan untuk aplikasi ini, sehingga tidak ada yang tersalin ke cadangan cloud.</p>

            <h3>4. Internet dan tautan</h3>
            <p>Aplikasi memakai internet untuk satu hal saja: saat Anda menekan <strong>Unduh paket</strong> di Dengar dan cek, aplikasi mengunduh model pengenal suara Arab (sekitar 88 MB) dari alamat rilis GitHub yang tetap dan memverifikasinya sebelum dipakai. Permintaan itu tidak berisi audio, teks, akun, atau pengenal aplikasi; seperti unduhan lain, GitHub menerima alamat IP Anda sesuai kebijakan privasinya sendiri. Aplikasi tidak membuat koneksi jaringan lain. Tautan yang Anda pilih untuk dibuka, seperti halaman hadis di HadeethEnc.com atau sumber data, dibuka di browser Anda sesuai kebijakan privasi situs tersebut.</p>

            <h3>5. Yang tidak kami lakukan</h3>
            <ul>
              <li>Tidak ada login atau akun, dan tidak ada iklan.</li>
              <li>Tidak ada SDK analitik, pelaporan crash, iklan, atau pelacakan.</li>
              <li>Tidak mengakses lokasi, kontak, foto, atau file Anda.</li>
              <li>Kami tidak menjual, menyewakan, atau membagikan data pribadi, dan memang tidak mengumpulkannya.</li>
            </ul>

            <h3>6. Izin</h3>
            <ul>
              <li><strong>Mikrofon</strong>: untuk Dengar dan cek, hanya atas permintaan Anda. Anda bisa menolaknya dan tetap memakai semua fitur lain.</li>
              <li><strong>Internet</strong>: hanya untuk unduhan paket suara yang Anda mulai.</li>
              <li><strong>Notifikasi</strong> dan <strong>berjalan saat HP menyala</strong>: untuk pengingat hadis harian opsional yang Anda nyalakan di Pengaturan, dan memasang ulang alarmnya setelah HP dinyalakan ulang.</li>
            </ul>

            <h3>7. Pilihan Anda dan penghapusan data</h3>
            <div className="alert-box">
              <strong>Cara menghapus data Anda:</strong><br/>
              Aplikasi tidak menyimpan riwayat apa yang Anda cek, cari, atau dengar. Hadis tersimpan dan catatan bisa dihapus di aplikasi. Menghapus penyimpanan aplikasi di pengaturan Android, atau mencopot aplikasi, akan menghapus pengaturan, hadis tersimpan, catatan, dan paket suara. Izin mikrofon dapat dicabut kapan saja di pengaturan Android.
            </div>

            <h3>8. Anak-anak</h3>
            <p>Aplikasi ditujukan untuk pengguna umum dan tidak mengumpulkan informasi pribadi dari siapa pun, termasuk anak-anak.</p>

            <h3>9. Perubahan kebijakan</h3>
            <p>Jika penanganan data oleh aplikasi berubah, kami akan memperbarui halaman ini beserta tanggal berlakunya sebelum perubahan diterapkan.</p>

            <h3>10. Kontak</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default PrivacyPolicy;

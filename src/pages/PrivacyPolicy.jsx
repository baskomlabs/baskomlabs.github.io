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
            <p className="meta">Effective Date: January 11, 2026</p>
            <p><strong>QRSTU</strong> ("we", "our", or "us") is committed to protecting your privacy.</p>
            
            <h3>1. Information We Collect</h3>
            <h4>Permission-Based Data</h4>
            <ul>
                <li><strong>Camera</strong>: Used strictly for scanning QR codes locally. No video data is sent to servers.</li>
            </ul>
            
            <h4>Third-Party Services</h4>
            <ul>
                <li><strong>Firebase Authentication</strong>: For secure sign-ins.</li>
                <li><strong>Firebase Crashlytics</strong>: For anonymous crash reporting.</li>
                <li><strong>Firebase Firestore</strong>: For data syncing.</li>
            </ul>

            <h3>2. Data Retention & Deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Data:</strong><br/>
                Open App &gt; <strong>Settings</strong> &gt; <strong>Account</strong> &gt; <strong>Delete Account</strong>.<br/>
                This permanently removes your data.
            </div>

            <h3>3. Contact Us</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
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
            <p className="meta">Effective Date: July 13, 2026</p>
            <p><strong>PembacaKUE</strong> ("we", "our", or "us") is an Identity Card Reader & Verifier application operated by BaskomLabs.</p>
            
            <h3>1. Information We Collect and Process</h3>
            <h4>Permission-Based Data & Hardware</h4>
            <ul>
                <li><strong>NFC (Near Field Communication)</strong>: We use your device's NFC capabilities strictly to read data directly from supported identity cards (such as e-KTP).</li>
            </ul>
            
            <h3>2. Data Processing and Storage</h3>
            <p>All identity data read by PembacaKUE is processed <strong>locally on your device</strong>. We do not transmit, collect, or store your personal identity information on our servers. Any data handled during a scanning session is transient and discarded after use or stored only locally if explicitly saved by you.</p>

            <h3>3. Data Retention & Deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Data:</strong><br/>
                Because no data is sent to our servers, simply uninstalling the application or clearing the app's local data will permanently delete any saved information.
            </div>

            <h3>4. Contact Us</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
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
              <li>The microphone is used only after you start it: <strong>Find a verse</strong>, <strong>Listen nearby</strong>, or the <strong>Check audio input</strong>.</li>
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

  return null;
}

export default PrivacyPolicy;

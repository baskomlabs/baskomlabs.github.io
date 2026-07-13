import { Link } from 'react-router-dom';

function HistoryTrivia() {
  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>Sejarah & Trivia NFC</h2>
          <Link to="/learning" className="close-btn btn-secondary">Back to Hub</Link>
        </div>
        <div className="document-content">
          <p className="meta">Teknologi yang sekarang bisa kamu pakai hanya dalam 0,1 detik ini memiliki sejarah puluhan tahun dan mengubah wajah transportasi di Indonesia.</p>
          
          <h3>Evolusi: Dari Perang Dunia ke Smartphone</h3>
          <p>
            Akar dari NFC adalah <strong>RFID (Radio Frequency Identification)</strong>. Teknologi yang mirip RFID pertama kali dikembangkan pada era Perang Dunia II untuk mengenali pesawat kawan atau lawan melalui gelombang radar (sistem IFF buatan Inggris).
          </p>
          <p>
            Paten RFID modern pertama kali didaftarkan oleh Charles Walton pada tahun 1983. Barulah pada tahun <strong>2004</strong>, tiga perusahaan raksasa: <strong>Nokia, Philips, dan Sony</strong> bergabung membentuk "NFC Forum" untuk merumuskan teknologi NFC yang lebih aman dan terstandarisasi untuk konsumen.
          </p>
          <p>
            Tahukah kamu? HP pertama di dunia yang punya NFC adalah ponsel lipat klasik <strong>Nokia 6131</strong> yang dirilis pada tahun 2006! Sementara untuk Android, fitur ini pertama kali muncul di <strong>Google Nexus S</strong> pada tahun 2010.
          </p>

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <div className="morph-icon" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
                <span>📻</span> <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>➔</span> <span>📱</span>
            </div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>1983 - 2004 - 2010</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Dari teknologi radar militer berevolusi menjadi standar pembayaran modern di genggaman.</p>
          </div>

          <h3>NFC & E-Money di Indonesia</h3>
          <p>Kapan persisnya keajaiban ini mulai akrab di kantong orang Indonesia?</p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>2009:</strong> E-Money mulai diperkenalkan secara luas, salah satunya oleh Bank Mandiri. Namun saat itu, hanya sedikit merchant yang menerimanya.</li>
            <li><strong>2013 (KRL Commuter Line):</strong> PT KCI mulai menerapkan sistem tiket elektronik (KMT - Kartu Multi Trip) menggantikan tiket kertas. Jutaan orang Jakarta dan sekitarnya mulai terbiasa melakukan "Tap" kartu setiap hari.</li>
            <li><strong>Oktober 2017 (Revolusi Gerbang Tol):</strong> Pemerintah Indonesia mewajibkan 100% pembayaran gerbang tol menggunakan uang elektronik. Inilah momen di mana masyarakat secara masif mulai mencari HP yang punya fitur NFC untuk mengecek saldo e-Toll!</li>
          </ul>

          <h3>Fakta Unik (Trivia) NFC</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', margin: '1.5rem 0' }}>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-blue)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>FeliCa Sang Juara Kecepatan</strong><br/>
                <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>Standar kartu NFC di Jepang bernama FeliCa (Felicity Card buatan Sony). Sistem ini luar biasa cepat, bisa memproses transaksi hanya dalam waktu <strong>0.1 detik</strong>! Karena orang Jepang berjalan sangat cepat di stasiun kereta api, sistem mereka didesain agar orang bisa berjalan tanpa henti sambil nge-tap.</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-purple)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Apple Pernah "Menggembok" NFC-nya</strong><br/>
                <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>Selama bertahun-tahun sejak iPhone 6, Apple mengunci sensor NFC mereka HANYA untuk layanan Apple Pay. Pengguna Android sudah bisa isi saldo E-Toll, tapi pengguna iPhone belum bisa. Baru mulai iOS 13 (2019), Apple perlahan membuka akses NFC untuk membaca kartu secara publik.</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #ec4899' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Pengisi Daya Nirkabel (Wireless Charging)</strong><br/>
                <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>Karena teknologi dasarnya adalah induksi elektromagnetik, NFC Forum pada 2020 merilis spesifikasi agar NFC bisa dipakai men-charge baterai perangkat kecil (seperti smartwatch atau earphone) pada daya hingga 1 Watt (WLC standard).</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/terminology" className="btn-primary">
                Lanjut: Kamus Istilah ➔
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTrivia;

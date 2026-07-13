import { Link } from 'react-router-dom';

function Terminology() {
  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>Kamus Pintar IoT & NFC</h2>
          <Link to="/learning" className="close-btn btn-secondary">Back to Hub</Link>
        </div>
        <div className="document-content">
          <p className="meta">Bingung dengan singkatan-singkatan teknis? Berikut adalah contekan kamus istilah dari semua kata teknis yang kita gunakan di project ini.</p>
          
          <div style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>NFC <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Near Field Communication)</span></h3>
                <p style={{ margin: 0 }}>Komunikasi Nirkabel Jarak Dekat. Teknologi yang memungkinkan dua perangkat saling bertukar data saat didekatkan dengan jarak maksimal sekitar 4 cm pada frekuensi 13.56 MHz.</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>RFID <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Radio Frequency Identification)</span></h3>
                <p style={{ margin: 0 }}>Kakek moyang NFC. Teknologi pembacaan gelombang radio untuk mengidentifikasi objek jarak jauh (bisa sampai berhektar-hektar). Misalnya: Sensor gerbang masuk parkiran mall atau tag keamanan pakaian di toko.</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>IoT <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Internet of Things)</span></h3>
                <p style={{ margin: 0 }}>Jaringan benda-benda fisik ("Things") yang ditanami sensor, software, atau teknologi lain agar bisa terhubung dan bertukar data dengan perangkat/sistem lain.</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-purple)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>APDU <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Application Protocol Data Unit)</span></h3>
                <p style={{ margin: 0 }}>Format pesan standar untuk berbicara dengan *Smart Card*. Ibaratnya, ini adalah tata bahasa wajib (seperti surat resmi) yang dikirim HP Android agar kartu mau merespon. Ada *Command APDU* (perintah) dan *Response APDU* (balasan).</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-purple)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>AID <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Application Identifier)</span></h3>
                <p style={{ margin: 0 }}>Nomor atau ID unik aplikasi yang ada di dalam *Smart Card*. Dalam satu kartu pintar (misal e-KTP), bisa ada berbagai aplikasi. HP menggunakan AID untuk memilih "aplikasi E-Money mana yang mau dibaca?".</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: '#ec4899', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>ISO/IEC 14443</h3>
                <p style={{ margin: 0 }}>Standar internasional tingkat dunia (dari International Organization for Standardization) yang mengatur bagaimana *contactless smart card* (kartu tanpa kontak fisik) harus dibuat. Hampir semua e-money dan paspor elektronik dunia menggunakan standar ini.</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: '#ec4899', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>MIFARE</h3>
                <p style={{ margin: 0 }}>Merek dagang untuk seri chip *smart card* paling populer di dunia, diproduksi oleh NXP Semiconductors. Sangat sering digunakan untuk tiket kereta, bus, dan akses pintu kantor.</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: '#ec4899', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>NDEF <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(NFC Data Exchange Format)</span></h3>
                <p style={{ margin: 0 }}>Format data ringan khusus untuk NFC. Biasanya digunakan pada stiker NFC (NFC Tags). Misalnya kamu menulis stiker NDEF berisi link ke menu restoran, saat HP pelanggan menempel, link tersebut langsung terbuka.</p>
            </div>
          </div>

          <div className="glass-card floating-card" style={{ marginTop: '3rem', textAlign: 'center', borderColor: 'var(--accent-blue)', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Kamu Sudah Jadi Ahli! 🎓</h3>
            <p style={{ fontSize: '1.05rem' }}>
                Dengan memahami seluruh terminologi, sejarah, dan cara kerja dari komponen-komponen ini, kamu bukan sekadar pengguna biasa, tetapi kamu sudah memahami *"behind the scenes"* dari teknologi yang mengubah hidup manusia modern.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning" className="btn-primary">
                Kembali ke Beranda Awal ↺
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terminology;

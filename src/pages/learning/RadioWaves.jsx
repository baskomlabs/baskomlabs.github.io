import { Link } from 'react-router-dom';

function RadioWaves() {
  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>Gelombang Radio: Menangkap yang Tak Kasat Mata</h2>
          <Link to="/learning" className="close-btn btn-secondary">Back to Hub</Link>
        </div>
        <div className="document-content">
          <p className="meta">NFC, Wi-Fi, dan Bluetooth semuanya menggunakan gelombang radio. Tapi, apa sebenarnya gelombang radio itu dan bagaimana manusia menemukannya?</p>
          
          <h3>Apa itu Gelombang Radio?</h3>
          <p>
            Gelombang radio pada dasarnya sama persis dengan cahaya matahari yang kamu lihat setiap hari. Keduanya adalah <strong>Gelombang Elektromagnetik</strong> (gabungan medan listrik dan medan magnet yang bergerak bersamaan).
          </p>
          <p>
            Bedanya hanyalah pada <strong>Frekuensi</strong> dan <strong>Panjang Gelombang</strong>. Cahaya yang bisa kita lihat (seperti warna merah atau biru) memiliki frekuensi yang sangat tinggi. Sedangkan gelombang radio memiliki frekuensi yang lebih rendah, sehingga mata manusia tidak berevolusi untuk bisa melihatnya.
          </p>

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <div className="wave-animation" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <span>🌊</span><span>⚡</span>
            </div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Spektrum Elektromagnetik</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px', color: 'var(--text-secondary)' }}>Sinar Gamma ➔ Sinar X ➔ Cahaya Tampak ➔ Microwave ➔ <strong style={{color: 'var(--text-primary)'}}>Gelombang Radio</strong></p>
          </div>

          <h3>Sejarah Penemuan: Dari Rumus ke Realita</h3>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>1867 (Teori - James Clerk Maxwell):</strong> Secara matematis, Maxwell meramalkan bahwa harus ada sesuatu bernama gelombang elektromagnetik yang merambat secepat cahaya, meski tidak terlihat.</li>
            <li><strong>1887 (Pembuktian - Heinrich Hertz):</strong> Hertz membangun sebuah alat sederhana (osilator percikan) yang berhasil menciptakan dan mendeteksi gelombang radio di laboratoriumnya. (Itulah sebabnya satuan frekuensi dinamakan <strong>Hertz / Hz</strong>).</li>
            <li><strong>1895 (Praktik - Guglielmo Marconi):</strong> Marconi adalah orang pertama yang membuat sistem telegraf nirkabel jarak jauh. Dia sukses mengirim kode morse menyeberangi Samudra Atlantik menggunakan gelombang radio.</li>
          </ul>

          <h3>Bagaimana Cara Kita "Menangkap" Gelombang Radio?</h3>
          <p>
            Untuk menangkap gelombang yang tak kasat mata ini, kita membutuhkan sepotong logam yang disebut <strong>Antena</strong>.
          </p>
          <div className="glass-card" style={{ padding: '1.5rem', margin: '1.5rem 0', borderLeft: '4px solid var(--accent-blue)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Sihir Fisika: Elektron yang Bergoyang</strong><br/>
            <span style={{ fontSize: '0.95rem', marginTop: '8px', display: 'block' }}>
                Di dalam logam (antena), terdapat jutaan elektron yang bisa bergerak bebas. Ketika sebuah gelombang elektromagnetik (radio) menabrak antena tersebut, medan magnet dan listrik dari gelombang itu akan <strong>mendorong dan menarik elektron-elektron</strong> di dalam logam.
            </span>
          </div>
          <p>
            Dorongan dan tarikan ini menciptakan <strong>arus listrik bolak-balik (AC) mikroskopis</strong> di dalam kabel antena. Sirkuit elektronik di HP atau radio kita kemudian bertugas untuk mendeteksi arus listrik kecil ini, memperkuatnya (Amplifier), dan memisahkannya dari suara "noise" (Tuning / Resonansi).
          </p>
          <p>
            <strong>Di sinilah letak kaitan dengan NFC!</strong><br/>
            Antena di dalam kartu E-Toll/KTP Anda tidak berbentuk lurus seperti tiang radio, melainkan digulung membentuk kumparan (Coil). Ketika gelombang radio dari HP menabrak kumparan logam di kartu, elektron di dalamnya bergoyang keras dan menghasilkan arus listrik yang cukup kuat untuk menyalakan chip pintar di dalamnya tanpa butuh baterai. Hukum fisika ini disebut <em>Hukum Induksi Faraday</em>.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/nfc-basics" className="btn-primary">
                Lanjut: Dasar NFC ➔
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RadioWaves;

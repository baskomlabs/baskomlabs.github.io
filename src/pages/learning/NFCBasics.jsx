import { Link } from 'react-router-dom';

function NFCBasics() {
  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>1. Dasar NFC: Misteri Komunikasi Tanpa Kabel</h2>
          <Link to="/learning" className="close-btn btn-secondary">Back to Hub</Link>
        </div>
        <div className="document-content">
          <p className="meta">Pernahkah kamu berpikir bagaimana kartu E-Toll bisa terbaca oleh HP-mu padahal kartu tersebut tidak punya baterai? Mari kita bahas teknologi di baliknya: NFC.</p>
          
          <h3>Apa itu NFC?</h3>
          <p>
            <strong>NFC (Near Field Communication)</strong> adalah teknologi komunikasi nirkabel (tanpa kabel) jarak dekat. Jaraknya sangat dekat, biasanya hanya <strong>maksimal 4 cm</strong>.
          </p>
          <p>
            Jika Bluetooth dan Wi-Fi dirancang untuk mengirim data dalam jarak jauh (beberapa meter), NFC dirancang untuk <strong>keamanan dan kecepatan koneksi</strong>. Kamu harus secara sengaja menempelkan kartu ke perangkat (seperti gerbang tol atau HP) agar komunikasi terjadi.
          </p>

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱 📶 💳</div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Jarak Maksimal: ~4 cm</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Sangat dekat untuk mencegah penyadapan data.</p>
          </div>

          <h3>Rahasia Frekuensi 13.56 MHz</h3>
          <p>
            Dalam dunia komunikasi radio, perangkat harus berada di "saluran" atau frekuensi yang sama agar bisa mengobrol. Sama seperti stasiun radio FM (misal 99.0 MHz Prambors), NFC bekerja pada frekuensi spesifik yaitu <strong>13.56 MHz</strong>.
          </p>
          <p>
            HP Android yang memiliki fitur NFC terus-menerus memancarkan gelombang radio pada frekuensi 13.56 MHz ini untuk mencari apakah ada kartu di dekatnya.
          </p>

          <h3>Kok Kartu E-Toll Gak Punya Baterai?</h3>
          <p>
            Ini bagian paling keren dari IoT pasif (Passive IoT). Kartu pintar seperti E-Money atau KMT disebut sebagai perangkat <strong>Pasif</strong>. Artinya mereka tidak punya sumber listrik sendiri.
          </p>
          <p>
            Lalu dari mana tenaganya? Jawabannya adalah <strong>Induksi Elektromagnetik</strong>.<br/>
            Saat kartu didekatkan ke HP, gelombang frekuensi radio (13.56 MHz) yang dipancarkan HP ditangkap oleh antena (kawat tembaga) yang melingkar di dalam kartu.
          </p>
          <p>
            Gelombang radio ini kemudian <em>diubah menjadi energi listrik kecil</em> oleh chip di dalam kartu. Energi listrik itulah yang digunakan chip untuk "bangun/menyala", membaca data saldo, dan membalas pesan ke HP!
          </p>

          <div className="glass-card" style={{ margin: '2rem 0', padding: '2rem' }}>
            <h4 style={{ color: 'var(--accent-blue)', marginTop: 0 }}>Proses Induksi</h4>
            <ol style={{ marginTop: '1rem', marginLeft: '1rem', lineHeight: '1.8' }}>
                <li>HP memancarkan medan magnet (radio).</li>
                <li>Antena kartu menangkap medan magnet.</li>
                <li>Medan magnet berubah jadi listrik.</li>
                <li>Chip kartu menyala tanpa baterai!</li>
            </ol>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/data-exchange" className="btn-primary">
                Lanjut: Cara Data Bertukar ➔
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NFCBasics;

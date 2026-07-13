import { Link } from 'react-router-dom';

function ComponentsPage() {
  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>3. Komponen Project: Membedah PembacaKUE</h2>
          <Link to="/learning" className="close-btn btn-secondary">Back to Hub</Link>
        </div>
        <div className="document-content">
          <p className="meta">Sekarang kita tahu teorinya, mari kita lihat bagaimana teknologi ini diterapkan dalam kode pada project aplikasi PembacaKUE.</p>
          
          <h3>1. Perangkat Pembaca (Reader / Initiator)</h3>
          <p>
            Dalam project ini, HP Android bertindak sebagai <em>Reader</em>. Aplikasi Android menggunakan <strong>Android NFC API</strong> untuk mengakses perangkat keras antena NFC di HP.
          </p>
          <p>
            Kelas utama yang digunakan di Android adalah <code>NfcAdapter</code> dan kelas-kelas teknologi seperti <code>IsoDep</code> atau <code>NfcA</code>.
          </p>
          <p>Tugas utama HP di aplikasi ini adalah:</p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Mendeteksi saat ada kartu ditempelkan (Intent Action <code>ACTION_TECH_DISCOVERED</code>).</li>
            <li>Mengirim perintah baca (Transceive APDU) ke kartu.</li>
            <li>Menerjemahkan data Hexadecimal balasan menjadi data kartu identitas atau saldo Rupiah.</li>
          </ul>

          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', margin: '2rem 0' }}>
            <div className="pulse-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Android NFC API</h4>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85rem', marginTop: '15px', textAlign: 'left' }}>
                <span style={{ color: 'var(--accent-purple)' }}>val</span> nfcAdapter = NfcAdapter.getDefaultAdapter(context)<br/>
                <span style={{ color: 'var(--accent-purple)' }}>val</span> isoDep = IsoDep.get(tag)<br/>
                isoDep.connect()<br/>
                <span style={{ color: 'var(--text-secondary)' }}>// Kirim perintah (Transceive)</span><br/>
                <span style={{ color: 'var(--accent-purple)' }}>val</span> response = isoDep.transceive(apduCommand)
            </div>
          </div>

          <h3>2. Kartu Target (Tag)</h3>
          <p>
            Kartu e-KTP atau KMT yang dibaca merupakan <strong>Smart Card</strong> (Kartu Pintar). Berbeda dengan kartu memori biasa, kartu pintar ini memiliki CPU mini (mikrokontroler) dan sistem operasinya sendiri (biasanya Java Card OS).
          </p>
          <p>
            Kartu ini akan menerima perintah dari HP, memprosesnya dengan keamanannya sendiri (misal mengecek PIN atau kunci enkripsi), dan baru memberikan data jika HP mengirim perintah yang benar.
          </p>

          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', margin: '2rem 0' }}>
            <div className="wave-expand-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Smart Card ISO 14443</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Punya chip kecil untuk memproses data keamanan dan menyimpan file data pribadi atau saldo.</p>
          </div>

          <div className="glass-card" style={{ marginTop: '3rem', textAlign: 'center', borderColor: 'var(--accent-blue)', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Selamat! 🎉</h3>
            <p style={{ fontSize: '1.05rem' }}>
                Kamu telah menyelesaikan panduan dasar tentang cara kerja NFC dan IoT di balik project <strong>PembacaKUE</strong>.
                Sekarang, saat kamu menempelkan KTP ke HP, kamu sudah tahu keajaiban induksi magnetik, modulasi, dan APDU yang terjadi dalam hitungan milidetik!
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning" className="btn-primary">
                Kembali ke Learning Hub ↺
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentsPage;

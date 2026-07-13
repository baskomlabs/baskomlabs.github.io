import { Link } from 'react-router-dom';

function DataExchange() {
  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>2. Pertukaran Data: Dari Gelombang ke Informasi</h2>
          <Link to="/learning" className="close-btn btn-secondary">Back to Hub</Link>
        </div>
        <div className="document-content">
          <p className="meta">Kita sudah tahu listrik bisa didapat dari gelombang magnetik. Tapi, bagaimana gelombang yang sama juga bisa mengirimkan informasi saldo uang kita?</p>
          
          <h3>Modulasi: Bahasa Rahasia Gelombang</h3>
          <p>
            Komputer dan HP hanya mengerti dua angka: <strong>0 dan 1 (Biner)</strong>. Untuk mengirim angka ini melalui gelombang radio, HP harus mengubah-ubah bentuk gelombang tersebut. Proses mengubah bentuk gelombang ini disebut <strong>Modulasi</strong>.
          </p>
          <p>
            Bayangkan kamu sedang memberi kode morse menggunakan senter. Senter yang menyala terang berarti "1", dan agak redup berarti "0". Dalam NFC, HP mengubah "kekuatan" medan magnetnya (Amplitudo) untuk mengirim angka 0 dan 1 ke kartu. Ini disebut <em>Amplitude Shift Keying (ASK)</em>.
          </p>

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <h4 style={{ marginTop: 0 }}>Ilustrasi Modulasi (Senter)</h4>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '1rem', alignItems: 'flex-end', height: '80px' }}>
                <div style={{ background: 'var(--accent-blue)', width: '40px', height: '80px', borderRadius: '8px' }} title="Kuat = 1"></div>
                <div style={{ background: 'rgba(59, 130, 246, 0.3)', width: '40px', height: '40px', borderRadius: '8px' }} title="Lemah = 0"></div>
                <div style={{ background: 'var(--accent-blue)', width: '40px', height: '80px', borderRadius: '8px' }} title="Kuat = 1"></div>
                <div style={{ background: 'var(--accent-blue)', width: '40px', height: '80px', borderRadius: '8px' }} title="Kuat = 1"></div>
            </div>
            <p style={{ marginTop: '15px', fontWeight: 'bold', letterSpacing: '25px', color: 'var(--text-primary)' }}>1011</p>
          </div>

          <h3>Load Modulation: Cara Kartu Membalas</h3>
          <p>
            Saat HP bertanya, HP memakai energinya sendiri. Tapi bagaimana kartu menjawab pesan HP jika kartu tidak punya baterai?
          </p>
          <p>
            Kartu membalas menggunakan teknik cerdas bernama <strong>Load Modulation (Modulasi Beban)</strong>. Karena kartu menyerap energi magnetik dari HP, kartu dengan sengaja <em>menyedot arus listrik lebih banyak, lalu lebih sedikit, secara bergantian</em>.
          </p>
          <p>
            HP akan merasakan bahwa energinya "kesedot" dengan ritme tertentu. HP membaca ritme sedotan tersebut sebagai angka 0 dan 1. Sungguh brilian!
          </p>

          <h3>Bahasa Percakapan: APDU</h3>
          <p>
            Oke, gelombang sudah berubah jadi angka 1 dan 0. Tapi 10101011 artinya apa? Di sinilah aturan percakapan dibuat. Dalam dunia Smart Card (Kartu Pintar), mereka mengobrol menggunakan format pesan bernama <strong>APDU (Application Protocol Data Unit)</strong>.
          </p>
          <p>
            Dalam project <strong>PembacaKUE</strong>, HP bertindak sebagai komandan yang mengirim <em>Command APDU</em>.
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>HP (Command APDU):</strong> "Pilih aplikasi uang elektronik (Select AID)!"</li>
            <li><strong>Kartu (Response APDU):</strong> "Oke siap, berhasil (90 00)."</li>
            <li><strong>HP (Command APDU):</strong> "Baca data di baris saldo dong (Read Record)!"</li>
            <li><strong>Kartu (Response APDU):</strong> "Ini saldonya (Hexa) dan berhasil (90 00)."</li>
          </ul>

          <div className="glass-card" style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--accent-purple)' }}>// Contoh Command APDU Hex (Select)</span><br/>
            <span style={{ color: 'var(--text-primary)' }}>00 A4 04 00 07</span> <span style={{ color: 'var(--accent-blue)' }}>[AID Kartu]</span><br/><br/>
            <span style={{ color: 'var(--accent-purple)' }}>// Response Kartu</span><br/>
            <span style={{ color: '#10b981' }}>90 00</span> (Sukses)
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/components" className="btn-primary">
                Lanjut: Komponen Project ➔
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataExchange;

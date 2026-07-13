import { Link } from 'react-router-dom';

function LearningHub() {
  return (
    <section className="active-view">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title reveal-on-scroll" style={{ fontSize: '3rem' }}>
            Selamat datang di Dunia <br/><span className="gradient-text">Internet of Things (IoT)</span>
          </h1>
          <p className="hero-subtitle reveal-on-scroll">
            Bayangkan jika benda mati di sekitarmu—seperti kartu uang elektronik (e-money)—bisa "berbicara" dengan HP-mu tanpa harus dicolok kabel. Itulah keajaiban IoT! Di platform ini, kita akan membongkar rahasia di balik project <strong>PembacaKUE</strong>.
          </p>
        </div>
      </div>

      <div className="glass-card document-card reveal-on-scroll" style={{ marginTop: '2rem' }}>
        <div className="document-content">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Apa itu IoT secara Sederhana?</h2>
          <p>
            <strong>Internet of Things (IoT)</strong> sederhananya adalah konsep di mana alat-alat fisik (Things) saling terhubung dan bertukar data. 
          </p>
          <p>
            Jika dulu internet hanya dipakai oleh manusia melalui komputer atau HP untuk saling mengirim pesan, di dunia IoT, mesin dan benda mati juga ikut mengirim pesan. Misalnya, kartu E-Toll memberi tahu mesin gerbang tol: <em>"Hei, saldo saya sisa Rp 50.000, silakan buka gerbangnya!"</em>
          </p>
          <p>
            Dalam project <strong>PembacaKUE</strong>, "Things" yang berkomunikasi adalah: <strong>Kartu E-Money/KMT</strong> dan <strong>HP Android (Aplikasi Cek Saldo)</strong>.
          </p>
          
          <div className="glass-card" style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌐</div>
            <h3 style={{ color: 'var(--text-primary)' }}>Dunia yang Terhubung</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Manusia ↔ Komputer ↔ Benda Fisik</p>
          </div>
        </div>
      </div>

      <div className="section-divider reveal-on-scroll" style={{ marginTop: '4rem' }}>
        <div className="divider-text">MULAI BELAJAR DARIMANA?</div>
      </div>

      <div className="products-grid reveal-on-scroll">
        <Link to="/learning/nfc-basics" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-card glass-card" style={{ height: '100%' }}>
            <div className="product-icon-wrapper qrstu-theme" style={{ fontSize: '2.5rem' }}>📻</div>
            <div className="product-info">
              <h3>1. Dasar NFC</h3>
              <p>Bagaimana perangkat bisa saling terhubung tanpa kabel? Mari kenalan dengan gelombang radio 13.56 MHz dan induksi magnetik.</p>
            </div>
          </div>
        </Link>
        
        <Link to="/learning/data-exchange" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-card glass-card" style={{ height: '100%' }}>
            <div className="product-icon-wrapper pembacakue-theme" style={{ fontSize: '2.5rem' }}>⚡</div>
            <div className="product-info">
              <h3>2. Cara Data Bertukar</h3>
              <p>Bagaimana gelombang tak kasat mata bisa berubah menjadi angka 0 dan 1 yang dimengerti oleh HP? Pahami apa itu modulasi.</p>
            </div>
          </div>
        </Link>

        <Link to="/learning/components" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-card glass-card" style={{ height: '100%' }}>
            <div className="product-icon-wrapper qrstu-theme" style={{ fontSize: '2.5rem', background: 'linear-gradient(135deg, #10b981, #059669)' }}>📱</div>
            <div className="product-info">
              <h3>3. Komponen Project</h3>
              <p>Bedah anatomi project PembacaKUE. Apa peran HP Android dan bagaimana kartu pintar bekerja di baliknya.</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="products-grid reveal-on-scroll" style={{ marginTop: '2rem' }}>
        <Link to="/learning/radio-waves" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card glass-card" style={{ height: '100%' }}>
                <div className="product-info">
                <h3>Gelombang Radio</h3>
                <p>Eksplorasi lebih dalam tentang konsep gelombang radio.</p>
                </div>
            </div>
        </Link>

        <Link to="/learning/history-trivia" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card glass-card" style={{ height: '100%' }}>
                <div className="product-info">
                <h3>Sejarah & Trivia</h3>
                <p>Fakta menarik seputar perkembangan teknologi NFC.</p>
                </div>
            </div>
        </Link>

        <Link to="/learning/terminology" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card glass-card" style={{ height: '100%' }}>
                <div className="product-info">
                <h3>Kamus Istilah</h3>
                <p>Daftar istilah penting dalam dunia IoT dan Smart Card.</p>
                </div>
            </div>
        </Link>
      </div>
    </section>
  );
}

export default LearningHub;

import { Link } from 'react-router-dom';

function TermsOfService({ app }) {
  if (app === 'Bensy') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Terms of Service - Bensy</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: June 19, 2026</p>
            <p>These Terms of Service ("Terms") govern your access to and use of Bensy, operated by BaskomLabs.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the App, you confirm that you are at least 13 years old and agree to comply with these Terms.</p>
            
            <h3>2. Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, BaskomLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
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
            <h2>Terms of Service - PembacaKUE</h2>
            <Link to="/" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: July 13, 2026</p>
            <p>These Terms of Service ("Terms") govern your access to and use of PembacaKUE, operated by BaskomLabs.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the App, you agree to comply with these Terms. You also agree to use this application only for lawful purposes, such as verifying your own identity or identities you are explicitly authorized to process.</p>
            
            <h3>2. Prohibited Conduct</h3>
            <p>You may not use this application to facilitate identity theft, unauthorized data harvesting, or any other illegal activities.</p>
            
            <h3>3. Limitation of Liability</h3>
            <p>The App is provided "as is". To the maximum extent permitted by law, BaskomLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the application.</p>
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
            <h2>Disclaimer (S&K) - Yasin Tahlil Maulid NU</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Terakhir diperbarui: Juli 2026</p>
            <p>Segala informasi dan teks bacaan (Yasin, Tahlil, Maulid, dll) yang terdapat dalam aplikasi <strong>Yasin Tahlil Maulid NU</strong> diterbitkan dengan tujuan baik dan semata-mata untuk memfasilitasi umat Islam dalam beribadah secara digital.</p>
            
            <h3>1. Keakuratan Konten</h3>
            <p>Kami telah berusaha semaksimal mungkin untuk memastikan bahwa teks Arab, transliterasi, maupun terjemahan yang ada dalam aplikasi ini akurat dan bersumber dari referensi yang mu'tabar (terpercaya). Namun, pengembang tidak memberikan jaminan mutlak atas ketiadaan kesalahan ketik (typo) maupun kealpaan dalam penyalinan.</p>
            
            <h3>2. Rujukan Utama</h3>
            <p>Aplikasi ini hanyalah sebuah sarana digital. Dalam hal terjadi perbedaan redaksi, ketidakpastian hukum fiqih, atau keraguan dalam pelafalan bacaan, pengguna sangat disarankan untuk merujuk kembali kepada Al-Qur'an fisik, kitab kuning aslinya, atau bertanya langsung kepada kyai, ustadz, maupun guru ngaji yang mumpuni.</p>
            
            <h3>3. Penggunaan Aplikasi</h3>
            <p>Setiap tindakan yang Anda ambil berdasarkan informasi yang Anda temukan di aplikasi ini sepenuhnya merupakan risiko Anda sendiri. Pengembang tidak bertanggung jawab atas segala kerugian maupun konsekuensi spiritual yang timbul dari penggunaan aplikasi ini.</p>
            
            <h3>4. Koreksi &amp; Masukan</h3>
            <p>Kami sangat terbuka terhadap koreksi, teguran, maupun saran yang membangun apabila Anda menemukan kesalahan pada teks bacaan di aplikasi ini agar dapat segera kami perbaiki pada pembaruan (update) selanjutnya.</p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default TermsOfService;

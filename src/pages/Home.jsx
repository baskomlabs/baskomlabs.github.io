import { useEffect } from 'react';

function Home({ scrollToContact }) {
  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollToContact]);

  return (
    <>
      <section id="home" className="active-view">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge reveal-on-scroll">Est. 2026</div>
            <h1 className="hero-title reveal-on-scroll">
              Bengkel Aplikasi <span className="gradient-text">Kompeni</span>
            </h1>
            <p className="hero-subtitle reveal-on-scroll">
              We engineer high-performance, secure, and intuitive digital solutions. Building the future of mobile and web applications with cutting-edge technology.
            </p>
          </div>
        </div>

        <div className="section-divider reveal-on-scroll">
          <div className="divider-text">FEATURED PROJECTS</div>
        </div>

        <div className="products-grid reveal-on-scroll">
          <div className="product-card glass-card">
            <div className="product-icon-wrapper qrstu-theme">
              <svg viewBox="0 0 512 512" fill="none" className="product-svg">
                <rect x="128" y="128" width="80" height="80" rx="16" fill="currentColor"/>
                <rect x="304" y="128" width="80" height="80" rx="16" fill="currentColor"/>
                <rect x="128" y="304" width="80" height="80" rx="16" fill="currentColor"/>
                <path d="M304 384h80M384 304v80" stroke="currentColor" strokeWidth="40" strokeLinecap="round"/>
                <rect x="80" y="80" width="352" height="352" rx="48" stroke="currentColor" strokeWidth="32" fill="none"/>
              </svg>
            </div>
            <div className="product-info">
              <h3>QRSTU</h3>
              <p>QRIS Reader, Scoring, & Tracking Utility</p>
              <div className="product-tags">
                <span className="tag tag-qrstu">QRIS</span>
                <span className="tag tag-qrstu">FinTech</span>
                <span className="tag tag-qrstu">Gamification</span>
              </div>
            </div>
          </div>

          <div className="product-card glass-card">
            <div className="product-icon-wrapper pembacakue-theme">
              <svg viewBox="0 0 512 512" fill="none" className="product-svg">
                <rect x="64" y="144" width="384" height="224" rx="32" stroke="currentColor" strokeWidth="32" fill="none"/>
                <circle cx="160" cy="256" r="48" fill="currentColor"/>
                <rect x="256" y="216" width="128" height="24" rx="12" fill="currentColor"/>
                <rect x="256" y="272" width="80" height="24" rx="12" fill="currentColor"/>
              </svg>
            </div>
            <div className="product-info">
              <h3>PembacaKUE</h3>
              <p>Advanced Identity Card Reader & Verifier</p>
              <div className="product-tags">
                <span className="tag tag-pembacakue">Identity</span>
                <span className="tag tag-pembacakue">e-KTP</span>
                <span className="tag tag-pembacakue">Utility</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider reveal-on-scroll" style={{ marginTop: '4rem' }}>
          <div className="divider-text">CORE TECHNOLOGIES</div>
        </div>

        <div className="tech-grid reveal-on-scroll">
          <div className="tech-card glass-card">
            <div className="tech-header">
              <div className="tech-icon tech-nfc">
                <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32">
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z"/>
                  <path d="M256 80c-97.1 0-176 78.9-176 176s78.9 176 176 176 176-78.9 176-176S353.1 80 256 80z"/>
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z"/>
                </svg>
              </div>
              <h3>NFC Technology</h3>
            </div>
            <p className="tech-desc">
              We leverage advanced Near Field Communication (NFC) protocols for secure hardware-software interactions. Integrating modern contactless systems with high-end encryption to ensure reliable data transmission and enhanced security in applications like PembacaKUE.
            </p>
            <div className="tech-ref">Ref ID: 139abb2b-b563-4fd9-bf7a-95c0b3dd0cea</div>
          </div>
        </div>
      </section>

      <section id="contact" className="active-view">
        <div className="centered-content">
          <div className="glass-card contact-card reveal-on-scroll">
            <h2>Get in Touch</h2>
            <p>Interested in collaborating or want to report an issue? We'd love to hear from you.</p>
            <a href="mailto:baskomdevs@gmail.com" className="btn-primary mt-2">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

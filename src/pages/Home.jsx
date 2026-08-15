import { useEffect, useState, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import BaskomMark from '../components/BaskomMark';
import PlayStoreButton from '../components/PlayStoreButton';

function Home({ scrollToContact }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollToContact]);

  // Parallax Effect
  const handleMouseMove = (e) => {
    // Disable parallax for devices without hover (mobile/touch)
    if (!containerRef.current || window.matchMedia("(hover: none)").matches) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate rotation (-10deg to +10deg max)
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * -20;
    
    // Calculate glow movement
    const moveX = (clientX / innerWidth - 0.5) * 50;
    const moveY = (clientY / innerHeight - 0.5) * 50;

    containerRef.current.style.setProperty('--rx', `${yPos}deg`);
    containerRef.current.style.setProperty('--ry', `${xPos}deg`);
    
    document.documentElement.style.setProperty('--px', `${moveX}px`);
    document.documentElement.style.setProperty('--py', `${moveY}px`);
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} style={{ perspective: '1000px' }}>
      {/* Adding dynamic styles for parallax on global glows through inline styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (hover: hover) {
          .glow-1 { transform: translate(calc(var(--px, 0px) * -1), calc(var(--py, 0px) * -1)); }
          .glow-2 { transform: translate(calc(var(--px, 0px) * 1.5), calc(var(--py, 0px) * 1.5)); }
          .product-card {
             transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
             transition: transform 0.1s ease-out;
          }
          .product-card:hover {
             transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale3d(1.05, 1.05, 1.05);
          }
        }
      `}} />

      <section id="home" className="active-view">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge reveal-on-scroll">{t('home.hero_badge')}</div>
            <h1 className="hero-title reveal-on-scroll">
              {t('home.hero_title_1')} <span className="gradient-text">{t('home.hero_title_2')}</span>
            </h1>
            <div className="hero-tagline reveal-on-scroll">{t('home.hero_tagline')}</div>
            <p className="hero-subtitle reveal-on-scroll">
              {t('home.hero_subtitle')}
            </p>
            <div className="hero-signature reveal-on-scroll">{t('home.hero_signature')}</div>
          </div>
        </div>

        <div className="section-divider reveal-on-scroll">
          <div className="divider-text">{t('home.origin_label')}</div>
        </div>

        <div className="origin-card glass-card reveal-on-scroll">
          <div className="origin-mark">
            <BaskomMark size={96} />
          </div>
          <div className="origin-body">
            <h3>{t('home.origin_title')}</h3>
            <p>{t('home.origin_p1')}</p>
            <p><Trans i18nKey="home.origin_p2" components={{ strong: <strong /> }} /></p>
          </div>
        </div>

        <div className="section-divider reveal-on-scroll">
          <div className="divider-text">{t('home.featured_projects')}</div>
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
              <p>{t('home.qrstu_desc')}</p>
              <div className="product-tags">
                <span className="tag tag-qrstu">QRIS</span>
                <span className="tag tag-qrstu">Scanner</span>
                <span className="tag tag-qrstu">Edukasi</span>
              </div>
              <PlayStoreButton url="https://play.google.com/store/apps/details?id=com.baskom.qrisparser" />
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
              <p>{t('home.pembacakue_desc')}</p>
              <div className="product-tags">
                <span className="tag tag-pembacakue">eMoney</span>
                <span className="tag tag-pembacakue">Flazz</span>
                <span className="tag tag-pembacakue">NFC</span>
              </div>
              <PlayStoreButton url="https://play.google.com/store/apps/details?id=com.baskom.pembacakue" />
            </div>
          </div>

          <div className="product-card glass-card">
            <div className="product-icon-wrapper yasintahlil-theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="product-svg" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <div className="product-info">
              <h3>Yasin Tahlil NU</h3>
              <p>{t('home.yasintahlil_desc')}</p>
              <div className="product-tags">
                <span className="tag tag-yasintahlil">Yasin</span>
                <span className="tag tag-yasintahlil">Tahlil</span>
                <span className="tag tag-yasintahlil">Offline</span>
              </div>
              <PlayStoreButton url="https://play.google.com/store/apps/details?id=com.baskom.yasintahlilmaulid" />
            </div>
          </div>
        </div>

        {/* Developer Profile CTA */}
        <div className="dev-profile-cta reveal-on-scroll">
          <span className="dev-profile-badge">{t('home.dev_profile_label')}</span>
          <a
            id="dev-profile-link"
            href="https://play.google.com/store/apps/dev?id=4678418670975116062"
            target="_blank"
            rel="noopener noreferrer"
            className="dev-profile-btn"
            aria-label="Lihat semua aplikasi BaskomLabs di Google Play Store"
          >
            {/* Google Play logo icon */}
            <svg className="dev-profile-icon" viewBox="0 0 512 512" fill="none" aria-hidden="true">
              <path d="M48 432L272 256 48 80v352z" fill="currentColor" opacity="0.9"/>
              <path d="M48 80l224 176-64 56L48 80z" fill="#4CAF50"/>
              <path d="M48 432l160-120-64-56L48 432z" fill="#F44336"/>
              <path d="M272 256l160-96-160-80v176z" fill="#FFB300"/>
              <path d="M272 256l160 96-160-80v-16z" fill="#00ACC1"/>
            </svg>
            {t('home.dev_profile_cta')}
          </a>
          <p className="dev-profile-desc">{t('home.dev_profile_desc')}</p>
        </div>

        <div className="section-divider reveal-on-scroll" style={{ marginTop: '4rem' }}>
          <div className="divider-text">{t('home.core_technologies')}</div>
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
              <h3>{t('home.nfc_title')}</h3>
            </div>
            <p className="tech-desc">
              {t('home.nfc_desc')}
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="active-view">
        <div className="centered-content">
          <div className="glass-card contact-card reveal-on-scroll">
            <h2>{t('home.contact_title')}</h2>
            <p>{t('home.contact_desc')}</p>
            <a href="mailto:baskomdevs@gmail.com" className="btn-primary mt-2">
              {t('home.email_us')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


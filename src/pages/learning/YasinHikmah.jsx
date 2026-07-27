import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function YasinHikmah() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="hero" style={{ minHeight: '40vh' }}>
        <div className="hero-content">
          <div className="hero-badge reveal-on-scroll">YASIN TAHLIL NU</div>
          <h1 className="hero-title reveal-on-scroll" style={{ fontSize: '2.5rem' }}>
            <span className="gradient-text">{t('learning.yt_yasin_title')}</span>
          </h1>
          <p className="hero-subtitle reveal-on-scroll">
            {t('learning.yt_yasin_meta')}
          </p>
        </div>
      </div>

      <div className="document-card glass-card reveal-on-scroll">
        <div className="card-header">
          <h2>{t('learning.yt_yasin_title')}</h2>
          <Link to="/learning" className="btn-secondary">
            {t('learning.qris_term_next_btn')}
          </Link>
        </div>
        
        <div className="document-content">
          <h3>{t('learning.yt_yasin_h3_1')}</h3>
          <p>{t('learning.yt_yasin_p1_1')}</p>
          
          <h3>{t('learning.yt_yasin_h3_2')}</h3>
          <p>{t('learning.yt_yasin_p2_1')}</p>
        </div>
        
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/learning/tahlil-hikmah" className="btn-primary">
            {t('learning.yt_yasin_next_btn')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default YasinHikmah;

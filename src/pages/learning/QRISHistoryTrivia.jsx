import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function QRISHistoryTrivia() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="document-content">
          <h2>{t('learning.qris_ht_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="meta">{t('learning.qris_ht_meta')}</p>
            
            <h3>{t('learning.qris_ht_h3_1')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_ht_p1_1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_ht_p1_2') }} />
            
            <h3 style={{ marginTop: '2rem' }}>{t('learning.qris_ht_h3_2')}</h3>
            <div className="features-grid" style={{ gridTemplateColumns: '1fr', marginTop: '1rem' }}>
                <div className="feature-card" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>♟️</div>
                    <p style={{ fontSize: '1rem' }} dangerouslySetInnerHTML={{ __html: t('learning.qris_ht_p2_1') }} />
                </div>
            </div>
            
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'right' }}>
            <Link to="/learning/qris-terminology" className="btn btn-primary">
              {t('learning.qris_ht_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRISHistoryTrivia;

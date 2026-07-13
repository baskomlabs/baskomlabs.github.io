import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function QRISBasics() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="document-content">
          <h2>{t('learning.qris_basics_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="meta">{t('learning.qris_basics_meta')}</p>
            
            <h3>{t('learning.qris_basics_h3_1')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_basics_p1_1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_basics_p1_2') }} />
            
            <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', margin: '2rem 0', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', opacity: 0.5, margin: 0 }}>EMVCo</h3>
            </div>
            
            <h3>{t('learning.qris_basics_h3_2')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_basics_p2_1') }} />
            
            <div className="features-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
                <div className="feature-card" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
                    <h4 style={{ color: '#10b981' }}>{t('learning.qris_basics_static')}</h4>
                    <p style={{ fontSize: '0.9rem' }}>{t('learning.qris_basics_static_desc')}</p>
                </div>
                <div className="feature-card" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
                    <h4 style={{ color: '#3b82f6' }}>{t('learning.qris_basics_dynamic')}</h4>
                    <p style={{ fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: t('learning.qris_basics_dynamic_desc') }} />
                </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'right' }}>
            <Link to="/learning/qris-data-parsing" className="btn btn-primary">
              {t('learning.qris_basics_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRISBasics;

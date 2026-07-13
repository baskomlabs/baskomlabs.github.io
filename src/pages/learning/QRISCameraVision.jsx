import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function QRISCameraVision() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="document-content">
          <h2>{t('learning.qris_cv_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="meta">{t('learning.qris_cv_meta')}</p>
            
            <h3>{t('learning.qris_cv_h3_1')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_cv_p1_1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_cv_p1_2') }} />
            
            <div style={{ padding: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', margin: '2rem 0', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', width: '50px', height: '50px', border: '5px solid white', padding: '5px' }}>
                    <div style={{ width: '100%', height: '100%', background: 'white' }}></div>
                </div>
            </div>

            <h3>{t('learning.qris_cv_h3_2')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_cv_p2_1') }} />
            
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'right' }}>
            <Link to="/learning/qris-history-trivia" className="btn btn-primary">
              {t('learning.qris_cv_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRISCameraVision;

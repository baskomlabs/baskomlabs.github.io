import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function QRISTerminology() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="document-content">
          <h2>{t('learning.qris_term_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="meta">{t('learning.qris_term_meta')}</p>
            
            <div className="terminology-list">
                <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t('learning.qris_term_emvco') }} />
                </div>
                <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t('learning.qris_term_tlv') }} />
                </div>
                <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t('learning.qris_term_mcc') }} />
                </div>
                <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t('learning.qris_term_crc') }} />
                </div>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('learning.term_congrats')}</h3>
                <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: t('learning.term_congrats_desc') }} />
                <Link to="/learning" className="btn btn-primary">
                {t('learning.qris_term_next_btn')}
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRISTerminology;

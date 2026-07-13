import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function QRISComponents() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="document-content">
          <h2>{t('learning.qris_comp_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="meta">{t('learning.qris_comp_meta')}</p>
            
            <h3>{t('learning.qris_comp_h3_1')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_comp_p1_1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_comp_p1_2') }} />
            
            <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', margin: '1.5rem 0', fontFamily: 'monospace' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{t('learning.qris_comp_code_1')}</span><br/>
                <span style={{ color: 'var(--accent-purple)' }}>val</span> rawData = barcode.rawValue
            </div>

            <h3>{t('learning.qris_comp_h3_2')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_comp_p2_1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_comp_p2_2') }} />
            
            <h3>{t('learning.qris_comp_h3_3')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_comp_p3_1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_comp_p3_2') }} />

            <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', margin: '2rem 0', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span style={{ color: '#3b82f6' }}>Data Parsed</span> ➔ <span style={{ color: '#10b981' }}>Beautiful UI</span>
            </div>
            
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('learning.term_congrats')}</h3>
            <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: t('learning.term_congrats_desc') }} />
            <Link to="/learning" className="btn btn-primary">
              {t('learning.qris_comp_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRISComponents;

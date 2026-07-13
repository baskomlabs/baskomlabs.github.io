import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function QRISDataParsing() {
  const { t } = useTranslation();
  
  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="document-content">
          <h2>{t('learning.qris_parsing_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="meta">{t('learning.qris_parsing_meta')}</p>
            
            <h3>{t('learning.qris_parsing_h3_1')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_p1_1') }} />
            <ul>
                <li dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_li_1') }} />
                <li dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_li_2') }} />
                <li dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_li_3') }} />
            </ul>

            <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', margin: '2rem 0', fontFamily: 'monospace', textAlign: 'center' }}>
                <span style={{ color: '#ef4444' }}>Tag</span>
                <span style={{ color: '#eab308' }}>Len</span>
                <span style={{ color: '#10b981' }}>Value</span>
            </div>
            
            <h3>{t('learning.qris_parsing_h3_2')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_p2_1') }} />
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                <span style={{ color: '#ef4444' }}>59</span><span style={{ color: '#eab308' }}>14</span><span style={{ color: '#10b981' }}>WARUNG MAKMUR </span><br/>
                <span style={{ color: '#ef4444' }}>54</span><span style={{ color: '#eab308' }}>05</span><span style={{ color: '#10b981' }}>25000</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_p2_2') }} />

            <h3 style={{ marginTop: '2rem' }}>{t('learning.qris_parsing_h3_3')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_p3_1') }} />
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                ...<span style={{ color: '#ef4444' }}>63</span><span style={{ color: '#eab308' }}>04</span><span style={{ color: '#10b981' }}>A1B2</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: t('learning.qris_parsing_p3_2') }} />
            
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'right' }}>
            <Link to="/learning/qris-components" className="btn btn-primary">
              {t('learning.qris_parsing_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRISDataParsing;

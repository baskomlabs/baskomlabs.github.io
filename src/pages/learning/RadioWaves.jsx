import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function RadioWaves() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>{t('learning.rw_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.rw_meta')}</p>
          
          <h3>{t('learning.rw_h3_1')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.rw_p1_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.rw_p1_2') }} />

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <div className="wave-animation" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <span>🌊</span><span>⚡</span>
            </div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>{t('learning.rw_spectrum')}</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px', color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: t('learning.rw_spectrum_desc') }} />
          </div>

          <h3>{t('learning.rw_h3_2')}</h3>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li dangerouslySetInnerHTML={{ __html: t('learning.rw_li_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.rw_li_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.rw_li_3') }} />
          </ul>

          <h3>{t('learning.rw_h3_3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.rw_p3_1') }} />
          <div className="glass-card" style={{ padding: '1.5rem', margin: '1.5rem 0', borderLeft: '4px solid var(--accent-blue)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>{t('learning.rw_magic')}</strong><br/>
            <span style={{ fontSize: '0.95rem', marginTop: '8px', display: 'block' }} dangerouslySetInnerHTML={{ __html: t('learning.rw_magic_desc') }} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: t('learning.rw_p3_2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.rw_p3_3') }} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/nfc-basics" className="btn-primary">
                {t('learning.rw_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RadioWaves;

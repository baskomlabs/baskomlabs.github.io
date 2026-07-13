import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function DataExchange() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>{t('learning.dx_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.dx_meta')}</p>
          
          <h3>{t('learning.dx_h3_1')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p1_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p1_2') }} />

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <h4 style={{ marginTop: 0 }}>{t('learning.dx_mod_illus')}</h4>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '1rem', alignItems: 'flex-end', height: '80px' }}>
                <div style={{ background: 'var(--accent-blue)', width: '40px', height: '80px', borderRadius: '8px' }} title={t('learning.dx_mod_strong')}></div>
                <div style={{ background: 'rgba(59, 130, 246, 0.3)', width: '40px', height: '40px', borderRadius: '8px' }} title={t('learning.dx_mod_weak')}></div>
                <div style={{ background: 'var(--accent-blue)', width: '40px', height: '80px', borderRadius: '8px' }} title={t('learning.dx_mod_strong')}></div>
                <div style={{ background: 'var(--accent-blue)', width: '40px', height: '80px', borderRadius: '8px' }} title={t('learning.dx_mod_strong')}></div>
            </div>
            <p style={{ marginTop: '15px', fontWeight: 'bold', letterSpacing: '25px', color: 'var(--text-primary)' }}>1011</p>
          </div>

          <h3>{t('learning.dx_h3_2')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p2_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p2_2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p2_3') }} />

          <h3>{t('learning.dx_h3_3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p3_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.dx_p3_2') }} />
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li dangerouslySetInnerHTML={{ __html: t('learning.dx_li_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.dx_li_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.dx_li_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.dx_li_4') }} />
          </ul>

          <div className="glass-card" style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--accent-purple)' }}>{t('learning.dx_code_1')}</span><br/>
            <span style={{ color: 'var(--text-primary)' }}>00 A4 04 00 07</span> <span style={{ color: 'var(--accent-blue)' }}>{t('learning.dx_code_2')}</span><br/><br/>
            <span style={{ color: 'var(--accent-purple)' }}>{t('learning.dx_code_3')}</span><br/>
            <span style={{ color: '#10b981' }}>90 00</span> {t('learning.dx_code_4')}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/components" className="btn-primary">
                {t('learning.dx_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataExchange;

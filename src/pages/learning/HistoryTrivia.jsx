import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HistoryTrivia() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>{t('learning.ht_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.ht_meta')}</p>
          
          <h3>{t('learning.ht_h3_1')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.ht_p1_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.ht_p1_2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.ht_p1_3') }} />

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <div className="morph-icon" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
                <span>📻</span> <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>➔</span> <span>📱</span>
            </div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>1983 - 2004 - 2010</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>{t('learning.ht_evo_desc')}</p>
          </div>

          <h3>{t('learning.ht_h3_2')}</h3>
          <p>{t('learning.ht_p2_1')}</p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li dangerouslySetInnerHTML={{ __html: t('learning.ht_li_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.ht_li_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.ht_li_3') }} />
          </ul>

          <h3>{t('learning.ht_h3_3')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', margin: '1.5rem 0' }}>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-blue)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t('learning.ht_trivia1_title')}</strong><br/>
                <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block' }} dangerouslySetInnerHTML={{ __html: t('learning.ht_trivia1_desc') }} />
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-purple)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t('learning.ht_trivia2_title')}</strong><br/>
                <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block' }} dangerouslySetInnerHTML={{ __html: t('learning.ht_trivia2_desc') }} />
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #ec4899' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t('learning.ht_trivia3_title')}</strong><br/>
                <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block' }} dangerouslySetInnerHTML={{ __html: t('learning.ht_trivia3_desc') }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/terminology" className="btn-primary">
                {t('learning.ht_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTrivia;

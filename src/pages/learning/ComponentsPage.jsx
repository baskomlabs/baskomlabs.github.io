import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ComponentsPage() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>{t('learning.comp_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.comp_meta')}</p>
          
          <h3>{t('learning.comp_h3_1')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.comp_p1_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.comp_p1_2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.comp_p1_3') }} />
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li dangerouslySetInnerHTML={{ __html: t('learning.comp_li_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.comp_li_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('learning.comp_li_3') }} />
          </ul>

          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', margin: '2rem 0' }}>
            <div className="pulse-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>{t('learning.comp_code_title')}</h4>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85rem', marginTop: '15px', textAlign: 'left' }}>
                <span style={{ color: 'var(--accent-purple)' }}>{t('learning.comp_code_val')}</span> nfcAdapter = NfcAdapter.getDefaultAdapter(context)<br/>
                <span style={{ color: 'var(--accent-purple)' }}>{t('learning.comp_code_val')}</span> isoDep = IsoDep.get(tag)<br/>
                isoDep.connect()<br/>
                <span style={{ color: 'var(--text-secondary)' }}>{t('learning.comp_code_comment')}</span><br/>
                <span style={{ color: 'var(--accent-purple)' }}>{t('learning.comp_code_val')}</span> response = isoDep.transceive(apduCommand)
            </div>
          </div>

          <h3>{t('learning.comp_h3_2')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.comp_p2_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.comp_p2_2') }} />

          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', margin: '2rem 0' }}>
            <div className="wave-expand-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>{t('learning.comp_smartcard')}</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>{t('learning.comp_smartcard_desc')}</p>
          </div>

          <div className="glass-card" style={{ marginTop: '3rem', textAlign: 'center', borderColor: 'var(--accent-blue)', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('learning.comp_congrats')}</h3>
            <p style={{ fontSize: '1.05rem' }} dangerouslySetInnerHTML={{ __html: t('learning.comp_congrats_desc') }} />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning" className="btn-primary">
                {t('learning.comp_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentsPage;

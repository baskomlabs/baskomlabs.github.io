import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NFCBasics() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>{t('learning.nfc_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.nfc_meta')}</p>
          
          <h3>{t('learning.nfc_h3_1')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p1_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p1_2') }} />

          <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱 📶 💳</div>
            <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>{t('learning.nfc_max_dist')}</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>{t('learning.nfc_max_dist_desc')}</p>
          </div>

          <h3>{t('learning.nfc_h3_2')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p2_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p2_2') }} />

          <h3>{t('learning.nfc_h3_3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p3_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p3_2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.nfc_p3_3') }} />

          <div className="glass-card" style={{ margin: '2rem 0', padding: '2rem' }}>
            <h4 style={{ color: 'var(--accent-blue)', marginTop: 0 }}>{t('learning.nfc_induction_process')}</h4>
            <ol style={{ marginTop: '1rem', marginLeft: '1rem', lineHeight: '1.8' }}>
                <li>{t('learning.nfc_li_1')}</li>
                <li>{t('learning.nfc_li_2')}</li>
                <li>{t('learning.nfc_li_3')}</li>
                <li>{t('learning.nfc_li_4')}</li>
            </ol>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning/data-exchange" className="btn-primary">
                {t('learning.nfc_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NFCBasics;

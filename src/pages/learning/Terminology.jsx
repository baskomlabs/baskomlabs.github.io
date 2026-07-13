import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Terminology() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="glass-card document-card">
        <div className="card-header">
          <h2>{t('learning.term_title')}</h2>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.term_meta')}</p>
          
          <div style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>NFC <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Near Field Communication)</span></h3>
                <p style={{ margin: 0 }}>{t('learning.term_nfc_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>RFID <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Radio Frequency Identification)</span></h3>
                <p style={{ margin: 0 }}>{t('learning.term_rfid_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>IoT <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Internet of Things)</span></h3>
                <p style={{ margin: 0 }}>{t('learning.term_iot_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-purple)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>APDU <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Application Protocol Data Unit)</span></h3>
                <p style={{ margin: 0 }}>{t('learning.term_apdu_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--accent-purple)', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>AID <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(Application Identifier)</span></h3>
                <p style={{ margin: 0 }}>{t('learning.term_aid_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: '#ec4899', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>ISO/IEC 14443</h3>
                <p style={{ margin: 0 }}>{t('learning.term_iso_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: '#ec4899', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>MIFARE</h3>
                <p style={{ margin: 0 }}>{t('learning.term_mifare_desc')}</p>
            </div>

            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: '#ec4899', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>NDEF <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400 }}>(NFC Data Exchange Format)</span></h3>
                <p style={{ margin: 0 }}>{t('learning.term_ndef_desc')}</p>
            </div>
          </div>

          <div className="glass-card floating-card" style={{ marginTop: '3rem', textAlign: 'center', borderColor: 'var(--accent-blue)', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('learning.term_congrats')}</h3>
            <p style={{ fontSize: '1.05rem' }} dangerouslySetInnerHTML={{ __html: t('learning.term_congrats_desc') }} />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/learning" className="btn-primary">
                {t('learning.term_next_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terminology;

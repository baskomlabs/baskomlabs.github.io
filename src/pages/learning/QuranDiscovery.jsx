import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const STEPS = ['qd_step1', 'qd_step2', 'qd_step3', 'qd_step4'];

function QuranDiscovery() {
  const { t } = useTranslation();

  return (
    <section className="active-view fade-in">
      <div className="glass-card document-card">
        <div className="card-header">
          <h1>{t('learning.qd_title')}</h1>
          <Link to="/learning" className="close-btn btn-secondary">{t('learning.btn_back_hub')}</Link>
        </div>
        <div className="document-content">
          <p className="meta">{t('learning.qd_meta')}</p>

          <h3>{t('learning.qd_h3_1')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.qd_p1_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.qd_p1_2') }} />

          <h3>{t('learning.qd_h3_2')}</h3>
          <ol>
            {STEPS.map((k) => (
              <li key={k} dangerouslySetInnerHTML={{ __html: t(`learning.${k}`) }} />
            ))}
          </ol>

          <h3>{t('learning.qd_h3_3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.qd_p3_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.qd_p3_2') }} />

          <h3>{t('learning.qd_h3_4')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.qd_p4_1') }} />

          <h3>{t('learning.qd_h3_5')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('learning.qd_p5_1') }} />

          <div style={{ marginTop: '3rem', textAlign: 'right' }}>
            <Link to="/learning" className="btn btn-primary">{t('learning.qd_next_btn')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuranDiscovery;

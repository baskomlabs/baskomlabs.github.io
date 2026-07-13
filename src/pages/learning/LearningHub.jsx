import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LearningHub() {
  const { t } = useTranslation();

  return (
    <section className="active-view">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title reveal-on-scroll" style={{ fontSize: '3rem' }}>
            {t('learning.hub_title_1')} <br/><span className="gradient-text">{t('learning.hub_title_2')}</span>
          </h1>
          <p className="hero-subtitle reveal-on-scroll" dangerouslySetInnerHTML={{ __html: t('learning.hub_subtitle') }} />
        </div>
      </div>

      <div className="glass-card document-card reveal-on-scroll" style={{ marginTop: '2rem' }}>
        <div className="document-content">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('learning.hub_what_is_iot')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('learning.hub_iot_desc_1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.hub_iot_desc_2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('learning.hub_iot_desc_3') }} />
          
          <div className="glass-card" style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌐</div>
            <h3 style={{ color: 'var(--text-primary)' }}>{t('learning.hub_connected_world')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('learning.hub_connected_desc')}</p>
          </div>
        </div>
      </div>

      <div className="section-divider reveal-on-scroll" style={{ marginTop: '4rem' }}>
        <div className="divider-text">{t('learning.hub_where_to_start')}</div>
      </div>

      <div className="products-grid reveal-on-scroll">
        <Link to="/learning/nfc-basics" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-card glass-card" style={{ height: '100%' }}>
            <div className="product-icon-wrapper qrstu-theme" style={{ fontSize: '2.5rem' }}>📻</div>
            <div className="product-info">
              <h3>{t('learning.hub_card1_title')}</h3>
              <p>{t('learning.hub_card1_desc')}</p>
            </div>
          </div>
        </Link>
        
        <Link to="/learning/data-exchange" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-card glass-card" style={{ height: '100%' }}>
            <div className="product-icon-wrapper pembacakue-theme" style={{ fontSize: '2.5rem' }}>⚡</div>
            <div className="product-info">
              <h3>{t('learning.hub_card2_title')}</h3>
              <p>{t('learning.hub_card2_desc')}</p>
            </div>
          </div>
        </Link>

        <Link to="/learning/components" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-card glass-card" style={{ height: '100%' }}>
            <div className="product-icon-wrapper qrstu-theme" style={{ fontSize: '2.5rem', background: 'linear-gradient(135deg, #10b981, #059669)' }}>📱</div>
            <div className="product-info">
              <h3>{t('learning.hub_card3_title')}</h3>
              <p>{t('learning.hub_card3_desc')}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="products-grid reveal-on-scroll" style={{ marginTop: '2rem' }}>
        <Link to="/learning/radio-waves" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card glass-card" style={{ height: '100%' }}>
                <div className="product-info">
                <h3>{t('learning.hub_card4_title')}</h3>
                <p>{t('learning.hub_card4_desc')}</p>
                </div>
            </div>
        </Link>

        <Link to="/learning/history-trivia" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card glass-card" style={{ height: '100%' }}>
                <div className="product-info">
                <h3>{t('learning.hub_card5_title')}</h3>
                <p>{t('learning.hub_card5_desc')}</p>
                </div>
            </div>
        </Link>

        <Link to="/learning/terminology" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card glass-card" style={{ height: '100%' }}>
                <div className="product-info">
                <h3>{t('learning.hub_card6_title')}</h3>
                <p>{t('learning.hub_card6_desc')}</p>
                </div>
            </div>
        </Link>
      </div>
    </section>
  );
}

export default LearningHub;

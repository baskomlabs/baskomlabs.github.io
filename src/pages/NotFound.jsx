import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/** Real 404 view: tells crawlers not to index the URL instead of redirecting home. */
function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="active-view not-found">
      <Helmet>
        <title>{t('notfound.title')} | BaskomLabs</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="glass-card document-card">
        <p className="app-eyebrow">404</p>
        <h1>{t('notfound.title')}</h1>
        <p>{t('notfound.desc')}</p>
        <p className="not-found-links">
          <Link to="/" className="btn-solid">{t('notfound.home')}</Link>
          <Link to="/apps/pembacakue/" className="lp-link">PembacaKUE</Link>
          <Link to="/apps/qrstu/" className="lp-link">QRSTU</Link>
        </p>
      </div>
    </section>
  );
}

export default NotFound;

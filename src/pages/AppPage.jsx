import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PlayStoreButton from '../components/PlayStoreButton';
import { APPS, appPagePath, playInstallUrl } from '../seo/siteMeta';

/**
 * Landing page for one app in one fixed language (/apps/<slug> is Indonesian,
 * /en/apps/<slug> is English). Copy lives under `apps.<slug>` in the locale files.
 */
function AppPage({ slug, lang }) {
  const { i18n } = useTranslation();
  const t = i18n.getFixedT(lang);
  const app = APPS.find((a) => a.slug === slug);
  const k = `apps.${slug}`;
  const other = lang === 'id' ? 'en' : 'id';

  // The URL decides the language here, so keep the rest of the UI in step with it.
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [i18n, lang]);

  const list = (key) => {
    const v = t(key, { returnObjects: true });
    return Array.isArray(v) ? v : [];
  };
  const features = list(`${k}.features`);
  const howto = list(`${k}.howto`);
  const faq = list(`${k}.faq`);
  const learn = list(`${k}.learn`);
  const cards = list(`${k}.cards`);
  const shots = app.screenshots[lang] || app.screenshots.id;
  const play = (placement) => (
    <PlayStoreButton url={playInstallUrl(app.playId, placement)} appName={app.short} />
  );

  return (
    <article className={`app-page app-page--${slug}`} lang={lang}>
      <nav className="app-crumbs" aria-label="Breadcrumb">
        <Link to="/">{t('apps.common.breadcrumb_home')}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{app.short}</span>
      </nav>

      <header className="app-hero">
        <img className="app-hero-icon" src={app.icon} alt={`${app.short} icon`} width="96" height="96" />
        <div className="app-hero-copy">
          <p className="app-eyebrow">{app.short} · {t(`${k}.eyebrow`)}</p>
          <h1>{t(`${k}.h1`)}</h1>
          <p className="app-lead">{t(`${k}.lead`)}</p>
          {t(`${k}.notice`, { defaultValue: '' }) && (
            <p className="alert-box app-notice">{t(`${k}.notice`)}</p>
          )}
          <div className="app-cta">
            {play('app-page-hero')}
            <span className="app-badge-note">{t('apps.common.badge')}</span>
          </div>
        </div>
      </header>

      {cards.length > 0 && (
        <section className="app-section">
          <h2>{t(`${k}.cards_title`)}</h2>
          <ul className="app-cards">
            {cards.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
      )}

      <section className="app-section">
        <h2>{t('apps.common.features_title')}</h2>
        <div className="app-features">
          {features.map((f) => (
            <div key={f.title} className="glass-card app-feature">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="app-section">
        <h2>{t('apps.common.screens_title')}</h2>
        <div className="app-shots" tabIndex={0} role="region" aria-label={t('apps.common.screens_title')}>
          {shots.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={t('apps.common.screens_alt', { app: app.short, n: i + 1 })}
              width="540"
              height="960"
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>
      </section>

      <section className="app-section">
        <h2>{t('apps.common.howto_title')}</h2>
        <ol className="app-howto">
          {howto.map((s) => <li key={s}>{s}</li>)}
        </ol>
      </section>

      <section className="app-section">
        <h2>{t('apps.common.faq_title')}</h2>
        <div className="app-faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {learn.length > 0 && (
        <section className="app-section">
          <h2>{t('apps.common.learn_title')}</h2>
          <ul className="app-learn">
            {learn.map((l) => (
              <li key={l.to}><Link to={l.to} className="lp-link">{l.label}</Link></li>
            ))}
          </ul>
        </section>
      )}

      <section className="glass-card app-final">
        <h2>{t('apps.common.final_title', { app: app.short })}</h2>
        <p>{t('apps.common.final_desc')}</p>
        {play('app-page-footer')}
        <p className="app-legal">
          <Link to={app.privacy}>{t('apps.common.privacy')}</Link>
          {app.tos && (
            <>
              <span aria-hidden="true"> · </span>
              <Link to={app.tos}>{t('apps.common.tos')}</Link>
            </>
          )}
          <span aria-hidden="true"> · </span>
          <Link to={`${appPagePath(slug, other)}/`} hrefLang={other} lang={other}>
            {t('apps.common.other_lang')}
          </Link>
        </p>
      </section>
    </article>
  );
}

export default AppPage;

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { TALK_KAPTEN as TALK } from '../../seo/siteMeta';

const STATS = [
  { label: 'stat_audience', valueKey: 'stat_audience_value' },
  { label: 'stat_duration', valueKey: 'stat_duration_value' },
  { label: 'stat_missions', value: '3' },
  { label: 'stat_license', value: 'CC BY-NC' },
];

const MISSIONS = [1, 2, 3];

// School links are followed on purpose: the session is a real partnership and
// the link is a thank-you, not an ad.
const SchoolLink = ({ children }) => (
  <a href={TALK.school.url} target="_blank" rel="noopener">{children}</a>
);

function KaptenDigital() {
  const { t } = useTranslation();
  const [started, setStarted] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const k = (key) => t(`talks.kapten.${key}`);

  const goFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
  };

  return (
    <div className="oss-page talk-page">
      <nav className="talk-crumbs" aria-label="Breadcrumb">
        <Link to="/">{k('breadcrumb_home')}</Link>
        <span aria-hidden="true">/</span>
        <span>{k('breadcrumb_talks')}</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Kapten Digital</span>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className="oss-hero reveal-on-scroll">
        <div className="lp-chip">
          <span className="lp-chip-dot" aria-hidden="true" />
          {k('chip')}
        </div>
        <h1 className="oss-title">
          {k('title_1')} <span className="gradient-text">{k('title_2')}</span>
        </h1>
        <p className="oss-lead">{k('lead')}</p>
        <p className="talk-byline">
          <Trans i18nKey="talks.kapten.byline" components={{ school: <SchoolLink /> }} />
        </p>
      </section>

      <dl className="talk-stats reveal-on-scroll">
        {STATS.map((s) => (
          <div key={s.label} className="talk-stat">
            <dt>{k(s.label)}</dt>
            <dd>{s.value || k(s.valueKey)}</dd>
          </div>
        ))}
      </dl>

      {/* ---------- SLIDES ---------- */}
      <section className="talk-block reveal-on-scroll">
        <div className="lp-eyebrow"><span>01</span>{k('slide_title')}</div>
        <p className="talk-hint">{k('slide_hint')}</p>

        <div className="talk-player">
          {started ? (
            <iframe
              ref={frameRef}
              src={TALK.slideUrl}
              title={k('slide_frame_title')}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <button type="button" className="talk-poster" onClick={() => setStarted(true)}>
              <img src={TALK.cover} alt="" loading="lazy" />
              <span className="talk-poster-cta">
                <span className="btn-solid">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  {k('slide_start')}
                </span>
                <small>{k('slide_size')}</small>
              </span>
            </button>
          )}
        </div>

        <div className="talk-player-actions">
          {started && (
            <button type="button" className="btn-ghost" onClick={goFullscreen}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
              {k('slide_fullscreen')}
            </button>
          )}
          <a href={TALK.slideUrl} target="_blank" rel="noopener noreferrer" className="lp-link">
            {k('slide_open_tab')}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
        </div>
      </section>

      {/* ---------- MISSIONS ---------- */}
      <section className="talk-block reveal-on-scroll">
        <div className="lp-eyebrow"><span>02</span>{k('missions_title')}</div>
        <ol className="talk-missions">
          {MISSIONS.map((n) => (
            <li key={n}>
              <span className="talk-mission-num" aria-hidden="true">{n}</span>
              <div>
                <h3>{k(`mission_${n}_title`)}</h3>
                <p>{k(`mission_${n}_desc`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- DOWNLOADS ---------- */}
      <section className="talk-block reveal-on-scroll" id="downloads">
        <div className="lp-eyebrow"><span>03</span>{k('downloads_title')}</div>
        <p className="talk-hint">{k('downloads_lead')}</p>

        <a href={TALK.zip.href} className="talk-zip" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
          <span>
            <strong>{k('zip_title')}</strong>
            <small>{k('zip_desc')} · {TALK.zip.size}</small>
          </span>
        </a>

        <ul className="talk-files">
          {TALK.files.map((f) => (
            <li key={f.key}>
              <span className="talk-file-type">{f.type}</span>
              <span className="talk-file-info">
                <strong>{k(`file_${f.key}`)}</strong>
                <small>{k(`file_${f.key}_desc`)} · {f.size}</small>
              </span>
              <a href={f.href} className="lp-link" download={f.href.startsWith('/') ? '' : undefined} rel="noopener">
                {k('download')}
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- LICENSE + SCHOOL ---------- */}
      <section className="talk-footer reveal-on-scroll">
        <div className="talk-card">
          <h2>{k('license_title')}</h2>
          <p>
            <Trans
              i18nKey="talks.kapten.license_text"
              components={{ cc: <a href={TALK.license} target="_blank" rel="license noopener" /> }}
            />
          </p>
        </div>
        <div className="talk-card">
          <h2>{k('school_title')}</h2>
          <p>{k('school_text')}</p>
          <div className="talk-school-links">
            <a href={TALK.school.url} target="_blank" rel="noopener" className="btn-solid">
              sekolah-aljannah.com
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
            <a href={TALK.school.instagram} target="_blank" rel="noopener" className="btn-ghost">
              @sekolah_iasaljannah
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          </div>
        </div>
      </section>

      <p className="talk-back">
        <Link to="/" className="lp-link">
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          {k('back_home')}
        </Link>
      </p>
    </div>
  );
}

export default KaptenDigital;

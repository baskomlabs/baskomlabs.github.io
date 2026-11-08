import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import PlayStoreButton from '../components/PlayStoreButton';
import RuangIlmu from '../components/RuangIlmu';
import { APPS as APP_META, TALK_KAPTEN as TALK, appPagePath, playInstallUrl } from '../seo/siteMeta';

// Release state lives in siteMeta.js (also feeds the structured data).
const PENDING = new Set(APP_META.filter((a) => a.pending).map((a) => a.short));

const PLAY_DEV_URL = 'https://play.google.com/store/apps/dev?id=4678418670975116062';

// Icons are the Play Store launcher icons, copied from each app's repo into public/apps.
const APPS = [
  {
    name: 'QRSTU',
    theme: 'qrstu',
    descKey: 'home.qrstu_desc',
    url: playInstallUrl('com.baskom.qrisparser', 'home'),
    icon: '/apps/qrstu.png',
    slug: 'qrstu',
  },
  {
    name: 'PembacaKUE',
    theme: 'pembacakue',
    descKey: 'home.pembacakue_desc',
    url: playInstallUrl('com.baskom.pembacakue', 'home'),
    icon: '/apps/pembacakue.png',
    slug: 'pembacakue',
  },
  {
    name: 'Yasin Tahlil NU',
    theme: 'yasintahlil',
    descKey: 'home.yasintahlil_desc',
    url: playInstallUrl('com.baskom.yasintahlilmaulid', 'home'),
    icon: '/apps/yasintahlil.png',
  },
  {
    name: 'Quran Discovery',
    theme: 'qurandiscovery',
    descKey: 'home.qurandiscovery_desc',
    url: playInstallUrl('com.baskomlabs.qurandiscovery', 'home'),
    icon: '/apps/qurandiscovery.png',
  },
  {
    name: 'Hadith Discovery',
    theme: 'hadithdiscovery',
    descKey: 'home.hadithdiscovery_desc',
    url: playInstallUrl('com.baskomlabs.hadithdiscovery', 'home'),
    icon: '/apps/hadithdiscovery.png',
  },
  // `soon`: not on Play or the web yet. Both badges show greyed out until release.
  {
    name: 'Sanak',
    theme: 'sanak',
    descKey: 'home.sanak_desc',
    url: playInstallUrl('fun.baskom.sanak', 'home'),
    webUrl: 'https://sanak-byp.pages.dev/?utm_source=baskom.fun&utm_medium=website&utm_campaign=home',
    icon: '/apps/sanak.png',
    isNew: true,
  },
  {
    name: 'SalingBantu',
    theme: 'salingbantu',
    descKey: 'home.salingbantu_desc',
    icon: '/apps/salingbantu.png',
    soon: true,
  },
  {
    name: 'MasakINI',
    theme: 'masakini',
    descKey: 'home.masakini_desc',
    icon: '/apps/masakini.png',
    soon: true,
  },
];

const SUITE_FEATURES = ['suite_f1', 'suite_f2', 'suite_f3', 'suite_f4'];

const TECH = [
  { key: 'nfc', to: '/learning/nfc-basics', glyph: '((·))', pop: 'var(--pop-cyan)' },
  { key: 'qris', to: '/learning/qris-basics', glyph: '[▦]', pop: 'var(--pop-pink)' },
  { key: 'offline', to: '/learning/yasin-hikmah', glyph: '</>', pop: 'var(--pop-yellow)' },
];


const ARROW = <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

function SectionHead({ index, label, title }) {
  return (
    <div className="lp-section-head reveal-on-scroll">
      <div className="lp-eyebrow"><span>{index}</span>{label}</div>
      {title && <h2 className="lp-section-title">{title}</h2>}
    </div>
  );
}

/**
 * The hero loop: rendered with HyperFrames from video/hero-loop/ into
 * public/hero/. Decorative, so it is hidden from assistive tech. It only starts
 * playing from JS, and not at all under prefers-reduced-motion: the poster
 * frame stands in, which is also what a no-JS visitor sees.
 */
function HeroLoop() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.play().catch(() => { /* autoplay refused: the poster stays */ });
  }, []);

  return (
    <div className="nb-player" aria-hidden="true">
      <div className="nb-player-bar">
        <span className="nb-player-dots"><i /><i /><i /></span>
        <span>~/baskom $ stir ./ide</span>
      </div>
      <div className="nb-player-stage">
        <video ref={ref} muted loop playsInline preload="metadata" poster="/hero/baskom-loop-poster.webp" width="720" height="720">
          <source src="/hero/baskom-loop.webm" type="video/webm" />
          <source src="/hero/baskom-loop.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Home({ scrollToContact }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact')?.scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollToContact]);

  const marquee = APPS.map((a) => a.name);

  return (
    <div className="lp">
      {/* ---------- HERO ---------- */}
      <section id="home" className="nb-hero">
        <div>
          <div className="nb-sticker">
            <span className="lp-chip-dot" aria-hidden="true" />
            {t('home.hero_badge')}
          </div>
          <h1 className="nb-hero-title">
            {t('home.hero_title_1')} <span className="gradient-text">{t('home.hero_title_2')}</span>
          </h1>
          <p className="nb-tagline">{t('home.hero_tagline')}</p>
          <p className="nb-hero-sub">{t('home.hero_subtitle')}</p>

          <div className="nb-hero-actions">
            <a href="#apps" className="btn-solid">
              {t('home.hero_cta_apps')}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
            </a>
            <a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              {t('home.dev_profile_cta')}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          </div>

          <div className="hero-signature">{t('home.hero_signature')}</div>
        </div>

        <HeroLoop />
      </section>

      <div className="nb-marquee" aria-hidden="true">
        <div className="nb-marquee-track">
          {[...marquee, ...marquee].map((name, i) => <span key={i}>{name}</span>)}
        </div>
      </div>

      {/* ---------- APPS ---------- */}
      <section id="apps" className="lp-section">
        <SectionHead index="01" label={t('home.featured_projects')} title={t('home.apps_title')} />

        <div className="lp-apps reveal-on-scroll">
          {APPS.map((app) => (
            <article key={app.name} className={`lp-app lp-app--${app.theme}${app.soon ? ' is-soon' : ''}`}>
              <div className="lp-app-top">
                {app.isNew && <span className="lp-app-flag">{t('home.new_badge')}</span>}
                {app.soon && <span className="lp-app-flag is-soon">{t('home.soon_badge')}</span>}
                <img className="lp-app-icon" src={app.icon} alt={`${app.name} app icon`} width="58" height="58" loading="lazy" />
                <h3>{app.name}</h3>
              </div>
              <div className="lp-app-body">
                <p>{t(app.descKey)}</p>
                <div className="product-tags">
                  {t(`home.tags.${app.theme}`, { returnObjects: true }).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <PlayStoreButton url={app.url} webUrl={app.webUrl} isNew={app.isNew} appName={app.name} pending={PENDING.has(app.name)} soon={app.soon} />
                {app.slug && (
                  <Link to={appPagePath(app.slug, i18n.language === 'en' ? 'en' : 'id')} className="lp-link">
                    {t('home.app_details')}
                    {ARROW}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="lp-apps-more reveal-on-scroll">
          <span>{t('home.dev_profile_desc')}</span>
          <a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer" className="lp-link">
            {t('home.dev_profile_label')}
            {ARROW}
          </a>
        </div>
      </section>

      {/* ---------- RUANG ILMU ---------- */}
      <section id="ruang-ilmu" className="lp-section">
        <SectionHead index="02" label={t('home.ruang_label')} title={t('home.ruang_title')} />
        <p className="lp-section-lead reveal-on-scroll">{t('home.ruang_desc')}</p>
        <div className="reveal-on-scroll">
          <RuangIlmu />
        </div>
      </section>

      {/* ---------- BEYOND THE APPS: talks, name, tech, tools, open source ---------- */}
      <section className="lp-section">
        <SectionHead index="03" label={t('home.more_label')} title={t('home.more_title')} />

        <div className="nb-bento">
          <article id="talks" className="nb-tile nb-span-4 lp-talk reveal-on-scroll">
            <Link to={TALK.path} className="lp-talk-cover" tabIndex={-1} aria-hidden="true">
              <img src={TALK.cover} alt={t('home.talks_cover_alt')} width="960" height="536" loading="lazy" />
            </Link>
            <div className="lp-talk-body">
              <div className="product-tags">
                {['talks_tag_1', 'talks_tag_2', 'talks_tag_3'].map((key) => (
                  <span key={key} className="tag">{t(`home.${key}`)}</span>
                ))}
              </div>
              <h3>{t('home.talks_card_title')}</h3>
              <p>
                <Trans
                  i18nKey="home.talks_desc"
                  components={{ school: <a href={TALK.school.url} target="_blank" rel="noopener" /> }}
                />
              </p>
              <p className="lp-talk-meta">{t('home.talks_meta')}</p>
              <Link to={TALK.path} className="btn-ghost">
                {t('home.talks_cta')}
                {ARROW}
              </Link>
            </div>
          </article>

          <article className="nb-tile nb-span-2 lp-origin reveal-on-scroll">
            <div className="lp-chip">{t('home.origin_label')}</div>
            <h3>{t('home.origin_title')}</h3>
            <p>{t('home.origin_p1')}</p>
            <p><Trans i18nKey="home.origin_p2" components={{ strong: <strong /> }} /></p>
          </article>

          {TECH.map((item) => (
            <Link key={item.key} to={item.to} className="nb-tile nb-span-2 lp-tech-card reveal-on-scroll" style={{ '--pop': item.pop }}>
              <span className="lp-tech-glyph" aria-hidden="true">{item.glyph}</span>
              <h3>{t(`home.${item.key}_title`)}</h3>
              <p>{t(`home.${item.key}_desc`)}</p>
              <span className="lp-link">
                {t('home.learn_more')}
                {ARROW}
              </span>
            </Link>
          ))}

          <article id="product-suite" className="nb-tile nb-span-3 lp-suite reveal-on-scroll">
            <div className="lp-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><rect x="5" y="11" width="14" height="10" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              {t('home.suite_badge')}
            </div>
            <h3>Product Suite</h3>
            <p>{t('home.suite_desc')}</p>
            <ul className="lp-suite-features">
              {SUITE_FEATURES.map((key) => (
                <li key={key}><span aria-hidden="true">&gt;_</span>{t(`home.${key}`)}</li>
              ))}
            </ul>
            <p className="lp-suite-note">{t('home.suite_note')}</p>
          </article>

          <article className="nb-tile nb-span-3 lp-oss reveal-on-scroll">
            <div className="lp-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              {t('home.oss_badge')}
            </div>
            <h3>{t('home.oss_card_title')}</h3>
            <p>{t('home.oss_desc')}</p>
            <ul className="lp-suite-features">
              {t('home.oss_list', { returnObjects: true }).map((item) => (
                <li key={item}><span aria-hidden="true">&gt;_</span>{item}</li>
              ))}
            </ul>
            <Link to="/open-source" className="btn-ghost">
              {t('home.oss_cta')}
              {ARROW}
            </Link>
          </article>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="lp-section">
        <div className="lp-contact reveal-on-scroll">
          <h2>{t('home.contact_title')}</h2>
          <div>
            <p>{t('home.contact_desc')}</p>
            <a href="mailto:baskomdevs@gmail.com" className="btn-solid">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" /><path d="m3 7 9 6 9-6" /></svg>
              {t('home.email_us')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

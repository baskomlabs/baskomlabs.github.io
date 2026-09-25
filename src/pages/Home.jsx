import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import BaskomMark from '../components/BaskomMark';
import PlayStoreButton from '../components/PlayStoreButton';

const PLAY_DEV_URL = 'https://play.google.com/store/apps/dev?id=4678418670975116062';

const APPS = [
  {
    name: 'QRSTU',
    theme: 'qrstu',
    descKey: 'home.qrstu_desc',
    tags: ['QRIS', 'Scanner', 'Edukasi'],
    url: 'https://play.google.com/store/apps/details?id=com.baskom.qrisparser',
    icon: (
      <svg viewBox="0 0 512 512" fill="none" className="product-svg">
        <rect x="128" y="128" width="80" height="80" rx="16" fill="currentColor"/>
        <rect x="304" y="128" width="80" height="80" rx="16" fill="currentColor"/>
        <rect x="128" y="304" width="80" height="80" rx="16" fill="currentColor"/>
        <path d="M304 384h80M384 304v80" stroke="currentColor" strokeWidth="40" strokeLinecap="round"/>
        <rect x="80" y="80" width="352" height="352" rx="48" stroke="currentColor" strokeWidth="32" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'PembacaKUE',
    theme: 'pembacakue',
    descKey: 'home.pembacakue_desc',
    tags: ['eMoney', 'Flazz', 'NFC'],
    url: 'https://play.google.com/store/apps/details?id=com.baskom.pembacakue',
    icon: (
      <svg viewBox="0 0 512 512" fill="none" className="product-svg">
        <rect x="64" y="144" width="384" height="224" rx="32" stroke="currentColor" strokeWidth="32" fill="none"/>
        <circle cx="160" cy="256" r="48" fill="currentColor"/>
        <rect x="256" y="216" width="128" height="24" rx="12" fill="currentColor"/>
        <rect x="256" y="272" width="80" height="24" rx="12" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Yasin Tahlil NU',
    theme: 'yasintahlil',
    descKey: 'home.yasintahlil_desc',
    tags: ['Yasin', 'Tahlil', 'Offline'],
    url: 'https://play.google.com/store/apps/details?id=com.baskom.yasintahlilmaulid',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="product-svg" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
];

const TECH = [
  { key: 'nfc', to: '/learning/nfc-basics', glyph: '((·))' },
  { key: 'qris', to: '/learning/qris-basics', glyph: '[▦]' },
  { key: 'offline', to: '/learning/yasin-hikmah', glyph: '</>' },
];

// Code glyphs rising off the bowl like steam, same idea as the Play header banner.
const STEAM = ['{ }', ';', '</>', '( )', '>_'];

function SectionHead({ index, label, title }) {
  return (
    <div className="lp-section-head reveal-on-scroll">
      <div className="lp-eyebrow"><span>{index}</span>{label}</div>
      {title && <h2 className="lp-section-title">{title}</h2>}
    </div>
  );
}

function Home({ scrollToContact }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollToContact]);

  return (
    <div className="lp">
      {/* ---------- HERO ---------- */}
      <section id="home" className="lp-hero">
        <div className="lp-hero-copy">
          <div className="lp-chip">
            <span className="lp-chip-dot" aria-hidden="true" />
            {t('home.hero_badge')}
          </div>
          <h1 className="lp-hero-title">
            {t('home.hero_title_1')} <span className="gradient-text">{t('home.hero_title_2')}</span>
          </h1>
          <p className="lp-hero-tagline">{t('home.hero_tagline')}</p>
          <p className="lp-hero-sub">{t('home.hero_subtitle')}</p>

          <div className="lp-hero-actions">
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

        <div className="lp-hero-visual" aria-hidden="true">
          <div className="lp-plate">
            <div className="lp-steam">
              {STEAM.map((g, i) => (
                <span key={g} style={{ '--i': i }}>{g}</span>
              ))}
            </div>
            <BaskomMark size={220} className="lp-plate-mark" />
            <div className="lp-plate-shadow" />
          </div>

          <div className="lp-terminal">
            <div className="lp-terminal-bar"><i /><i /><i /></div>
            <div className="lp-terminal-body">
              <div><span className="t-prompt">~/baskom $</span> stir ./ide</div>
              {APPS.map((a) => (
                <div key={a.name}><span className="t-ok">✓</span> {a.name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- APPS ---------- */}
      <section id="apps" className="lp-section">
        <SectionHead index="01" label={t('home.featured_projects')} title={t('home.apps_title')} />

        <div className="lp-apps reveal-on-scroll">
          {APPS.map((app) => (
            <article key={app.name} className={`lp-app lp-app--${app.theme}`}>
              <div className="lp-app-top">
                <div className={`product-icon-wrapper ${app.theme}-theme`}>{app.icon}</div>
                <h3>{app.name}</h3>
              </div>
              <p>{t(app.descKey)}</p>
              <div className="product-tags">
                {app.tags.map((tag) => (
                  <span key={tag} className={`tag tag-${app.theme}`}>{tag}</span>
                ))}
              </div>
              <PlayStoreButton url={app.url} appName={app.name} />
            </article>
          ))}
        </div>

        <div className="lp-apps-more reveal-on-scroll">
          <span>{t('home.dev_profile_desc')}</span>
          <a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer" className="lp-link">
            {t('home.dev_profile_label')}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>

      {/* ---------- WHY BASKOM ---------- */}
      <section className="lp-section">
        <SectionHead index="02" label={t('home.origin_label')} />

        <div className="lp-origin reveal-on-scroll">
          <div className="lp-origin-mark">
            <BaskomMark size={120} />
          </div>
          <div className="lp-origin-body">
            <h3>{t('home.origin_title')}</h3>
            <p>{t('home.origin_p1')}</p>
            <p><Trans i18nKey="home.origin_p2" components={{ strong: <strong /> }} /></p>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE TINKER WITH ---------- */}
      <section className="lp-section">
        <SectionHead index="03" label={t('home.core_technologies')} title={t('home.tech_title')} />

        <div className="lp-tech reveal-on-scroll">
          {TECH.map((item) => (
            <Link key={item.key} to={item.to} className="lp-tech-card">
              <span className="lp-tech-glyph" aria-hidden="true">{item.glyph}</span>
              <h3>{t(`home.${item.key}_title`)}</h3>
              <p>{t(`home.${item.key}_desc`)}</p>
              <span className="lp-link">
                {t('home.learn_more')}
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="lp-section">
        <div className="lp-contact reveal-on-scroll">
          <svg className="lp-contact-marble" aria-hidden="true" preserveAspectRatio="none">
            <filter id="lp-marble" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.003" numOctaves="4" seed="11" />
              <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  1 0 0 0 -0.03" />
              <feComponentTransfer><feFuncA type="linear" slope="14" intercept="-7.2" /></feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#lp-marble)" />
          </svg>
          <div className="lp-contact-copy">
            <div className="lp-contact-prompt" aria-hidden="true">&gt;_</div>
            <h2>{t('home.contact_title')}</h2>
            <p>{t('home.contact_desc')}</p>
          </div>
          <a href="mailto:baskomdevs@gmail.com" className="btn-enamel">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            {t('home.email_us')}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

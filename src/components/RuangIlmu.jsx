import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * The Yasin Tahlil NU app's "Ruang Ilmu" reading room, embedded as-is. The app
 * loads the same site in a WebView, so the essays stay in one place and get
 * corrected there without touching this repo. The host must stay in the
 * frame-src of the CSP in index.html.
 *
 * The site (yasin-tahlil-maulid-nu/ota_content) understands two things here:
 *   ?embed=1&theme=light|dark  on load, and
 *   {type:'ruang-ilmu:theme'}   messages for later theme switches;
 * it answers with {type:'ruang-ilmu:page'} whenever a page opens, which keeps
 * the tabs in sync when a reader follows a link inside the frame.
 */
// VITE_RUANG_ILMU_URL points dev builds at a local copy of ota_content.
const BASE = import.meta.env.VITE_RUANG_ILMU_URL || 'https://yasin-tahlil-maulid-nu.web.app/';
const ORIGIN = new URL(BASE).origin;

const TOPICS = [
  { page: 'index.html', labelKey: 'home.ruang_tab_home' },
  { page: 'yasin.html', label: 'Yasin' },
  { page: 'tahlil.html', label: 'Tahlil' },
  { page: 'maulid.html', label: 'Maulid' },
  { page: 'tradisi-nu.html', label: 'Tradisi NU' },
  { page: 'al-hikam.html', label: 'Al-Hikam' },
];

/** The theme this page is actually showing: pinned by ThemeToggle, or the system's. */
function currentTheme() {
  const pinned = document.documentElement.getAttribute('data-theme');
  if (pinned === 'light' || pinned === 'dark') return pinned;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function useSiteTheme() {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    const update = () => setTheme(currentTheme());
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', update);
    return () => {
      observer.disconnect();
      mq.removeEventListener('change', update);
    };
  }, []);
  return theme;
}

function RuangIlmu() {
  const { t } = useTranslation();
  const theme = useSiteTheme();
  const frameRef = useRef(null);

  // `page` is what the frame was told to load; `active` is what it reports showing.
  const [page, setPage] = useState(TOPICS[0].page);
  const [active, setActive] = useState(TOPICS[0].page);
  // Bumped on every tab click so re-picking the current topic still reloads
  // the frame after the reader wandered off through an in-frame link.
  const [nav, setNav] = useState(0);

  // Theme is read once per navigation; later switches go over postMessage so
  // the reader doesn't lose their scroll position.
  const themeAtLoad = useRef(theme);
  const src = `${BASE}${page}?embed=1&theme=${themeAtLoad.current}`;

  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage({ type: 'ruang-ilmu:theme', theme }, ORIGIN);
  }, [theme]);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== ORIGIN || event.source !== frameRef.current?.contentWindow) return;
      const data = event.data || {};
      if (data.type === 'ruang-ilmu:page' && typeof data.page === 'string') setActive(data.page);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const open = (next) => {
    themeAtLoad.current = theme;
    setPage(next);
    setActive(next);
    setNav((n) => n + 1);
  };

  return (
    <div className="ri">
      <div className="ri-bar">
        <div className="ri-tabs" role="tablist" aria-label={t('home.ruang_title')}>
          {TOPICS.map((topic) => (
            <button
              key={topic.page}
              type="button"
              role="tab"
              aria-selected={active === topic.page}
              className={active === topic.page ? 'is-active' : ''}
              onClick={() => open(topic.page)}
            >
              {topic.labelKey ? t(topic.labelKey) : topic.label}
            </button>
          ))}
        </div>
        <a href={BASE + active} target="_blank" rel="noopener noreferrer" className="ri-open">
          {t('home.ruang_open')}
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
        </a>
      </div>
      <div className="ri-frame">
        <iframe
          ref={frameRef}
          key={nav}
          src={src}
          title={t('home.ruang_title')}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          onLoad={() =>
            frameRef.current?.contentWindow?.postMessage({ type: 'ruang-ilmu:theme', theme: currentTheme() }, ORIGIN)
          }
        />
      </div>
    </div>
  );
}

export default RuangIlmu;

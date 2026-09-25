import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'baskom-theme';
const THEME_COLORS = { light: '#f6f7f2', dark: '#0b0d10' };

function readSaved() {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    return t === 'light' || t === 'dark' ? t : 'system';
  } catch {
    return 'system';
  }
}

/**
 * Three-way theme switch. "system" removes data-theme so the CSS falls back to
 * prefers-color-scheme; light/dark pin it. index.html applies the saved value
 * before first paint, this component only keeps it in sync afterwards.
 */
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', mode);

  // The browser chrome colour follows the media query unless a theme is pinned.
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    const scheme = meta.media.includes('dark') ? 'dark' : 'light';
    meta.content = THEME_COLORS[mode === 'system' ? scheme : mode];
  });
}

const icons = {
  system: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  light: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  ),
};

function ThemeToggle() {
  const { t } = useTranslation();
  const [mode, setMode] = useState(readSaved);

  useEffect(() => {
    applyTheme(mode);
    try {
      if (mode === 'system') localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* private mode: the choice just won't survive a reload */
    }
  }, [mode]);

  return (
    <div className="theme-toggle" role="radiogroup" aria-label={t('theme.label')}>
      {['system', 'light', 'dark'].map((m) => (
        <button
          key={m}
          type="button"
          role="radio"
          aria-checked={mode === m}
          aria-label={t(`theme.${m}`)}
          title={t(`theme.${m}`)}
          className={mode === m ? 'is-active' : ''}
          onClick={() => setMode(m)}
        >
          {icons[m]}
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;

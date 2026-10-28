import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BaskomMark from './BaskomMark';
import ThemeToggle from './ThemeToggle';
import { routeFor } from '../seo/siteMeta';

function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  // Fixed-language pages (the app pages) have a URL per language, so the
  // toggle moves to the other URL instead of only swapping the UI strings.
  const toggleLanguage = () => {
    const route = routeFor(location.pathname);
    const current = route?.lang || (i18n.language === 'id' ? 'id' : 'en');
    const newLang = current === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
    const target = route?.alternates?.[newLang];
    if (target && target !== route.path) navigate(`${target}/`);
  };

  // Only on page changes: a hash link (#apps, hub chips) must keep its own scroll.
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link to="/" className="logo-text" aria-label="BaskomLabs">
          <BaskomMark size={34} className="logo-mark" />
          <span className="logo-word">Baskom<span>Labs</span></span>
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            {t('navbar.home')}
          </Link>
          <Link
            to="/open-source"
            className={`nav-item ${location.pathname.startsWith('/open-source') ? 'active' : ''}`}
          >
            {t('navbar.opensource')}
          </Link>
          <Link
            to="/learning"
            className={`nav-item ${location.pathname.startsWith('/learning') ? 'active' : ''}`}
          >
            {t('navbar.learning')}
          </Link>
          <Link
            to="/contact"
            className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            {t('navbar.contact')}
          </Link>
        </div>

        <div className="nav-controls">
          <a
            href="https://github.com/muhakmal"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github-link"
            aria-label="GitHub profile @muhakmal"
            title="GitHub @muhakmal"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="nav-github-label">GitHub</span>
          </a>
          <button type="button" className="lang-switcher" onClick={toggleLanguage}>
            {t('navbar.switch_lang')}
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

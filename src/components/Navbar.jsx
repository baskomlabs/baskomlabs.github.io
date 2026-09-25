import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BaskomMark from './BaskomMark';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
    <nav className="glass-nav">
      <div className="logo-area">
        <Link to="/home" className="logo-text">
          Baskom<span>Labs</span>
        </Link>
      </div>
      
      <div className="nav-links">
        <Link 
          to="/home" 
          className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}
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
        <button className="lang-switcher nav-item" onClick={toggleLanguage} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500' }}>
          {t('navbar.switch_lang')}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

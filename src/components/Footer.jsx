import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BaskomMark from './BaskomMark';

// Each app's legal pages, grouped so the footer reads as a list, not a wall of links.
const POLICIES = [
  { app: 'QRSTU', privacy: '/privacy-policy' },
  { app: 'PembacaKUE', privacy: '/privacy-policy-pembacakue', tos: '/tos-pembacakue' },
  { app: 'Yasin Tahlil NU', privacy: '/privacy-policy-yasintahlil', tos: '/tos-yasintahlil' },
  // Bensy is hidden for now; its pages stay reachable by direct URL.
  // { app: 'Bensy', privacy: '/privacy-policy-bensy', tos: '/tos-bensy' },
  { app: 'Quran Discovery', privacy: '/privacy-policy-qurandiscovery' },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-mark">
            <BaskomMark size={28} />
            <span>Baskom<span>Labs</span></span>
          </Link>
          <p className="footer-tagline">{t('home.hero_tagline')}</p>
          <div className="footer-signature">{t('footer.signature')}</div>
          <a href="mailto:baskomdevs@gmail.com" className="footer-email">baskomdevs@gmail.com</a>
        </div>

        <div className="footer-policies">
          <div className="footer-heading">{t('footer.legal')}</div>
          <ul>
            {POLICIES.map((p) => (
              <li key={p.app}>
                <span className="footer-app">{p.app}</span>
                <span className="footer-app-links">
                  <Link to={p.privacy} className="footer-link">{t('footer.privacy')}</Link>
                  {p.tos && (
                    <>
                      <span className="footer-sep" aria-hidden="true">·</span>
                      <Link to={p.tos} className="footer-link">{t('footer.tos')}</Link>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-line">{t('footer.copyright')}</div>
    </footer>
  );
}

export default Footer;

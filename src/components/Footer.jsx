import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BaskomMark from './BaskomMark';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-mark">
        <BaskomMark size={26} />
        Baskom<span>Labs</span>
      </div>
      <div className="footer-signature">{t('footer.signature')}</div>
      <div className="footer-line">
        {t('footer.copyright')}
      </div>
      <div className="footer-policies">
        <Link to="/privacy-policy" className="footer-link">QRSTU {t('footer.privacy')}</Link>
        <span className="footer-sep">·</span>
        <Link to="/privacy-policy-bensy" className="footer-link">Bensy {t('footer.privacy')}</Link>
        <span className="footer-sep">·</span>
        <Link to="/tos-bensy" className="footer-link">Bensy {t('footer.tos')}</Link>
        <span className="footer-sep">·</span>
        <Link to="/privacy-policy-pembacakue" className="footer-link">PembacaKUE {t('footer.privacy')}</Link>
        <span className="footer-sep">·</span>
        <Link to="/tos-pembacakue" className="footer-link">PembacaKUE {t('footer.tos')}</Link>
        <span className="footer-sep">·</span>
        <Link to="/privacy-policy-yasintahlil" className="footer-link">Yasin Tahlil {t('footer.privacy')}</Link>
        <span className="footer-sep">·</span>
        <Link to="/tos-yasintahlil" className="footer-link">Yasin Tahlil {t('footer.tos')}</Link>
      </div>
    </footer>
  );
}

export default Footer;

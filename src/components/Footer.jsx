import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
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
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-line">
        © 2026 BaskomLabs | Bengkel Aplikasi Kompeni. Secure & Optimized.
      </div>
      <div className="footer-policies">
        <Link to="/privacy-policy" className="footer-link">QRSTU Privacy</Link>
        <span className="footer-sep">·</span>
        <Link to="/privacy-policy-bensy" className="footer-link">Bensy Privacy</Link>
        <span className="footer-sep">·</span>
        <Link to="/tos-bensy" className="footer-link">Bensy ToS</Link>
        <span className="footer-sep">·</span>
        <Link to="/privacy-policy-pembacakue" className="footer-link">PembacaKUE Privacy</Link>
        <span className="footer-sep">·</span>
        <Link to="/tos-pembacakue" className="footer-link">PembacaKUE ToS</Link>
      </div>
    </footer>
  );
}

export default Footer;

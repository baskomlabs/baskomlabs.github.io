import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Navbar() {
  const location = useLocation();

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
          Home
        </Link>
        <Link 
          to="/learning" 
          className={`nav-item ${location.pathname.startsWith('/learning') ? 'active' : ''}`}
        >
          Learning
        </Link>
        <Link 
          to="/contact" 
          className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

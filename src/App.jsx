import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Intersection Observer for scroll animations
function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const checkAndObserve = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };

    checkAndObserve();
    
    // Allow React time to render DOM changes before re-observing
    const timeoutId = setTimeout(checkAndObserve, 100);
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  });
}

function ScrollWrapper({ children }) {
  useScrollReveal();
  return children;
}

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main id="viewport">
          <ScrollWrapper>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Home scrollToContact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy app="QRSTU" />} />
              <Route path="/privacy-policy-bensy" element={<PrivacyPolicy app="Bensy" />} />
              <Route path="/tos-bensy" element={<TermsOfService app="Bensy" />} />
              <Route path="/privacy-policy-pembacakue" element={<PrivacyPolicy app="PembacaKUE" />} />
              <Route path="/tos-pembacakue" element={<TermsOfService app="PembacaKUE" />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </ScrollWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

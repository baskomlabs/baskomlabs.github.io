import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import LearningHub from './pages/learning/LearningHub';
import NFCBasics from './pages/learning/NFCBasics';
import DataExchange from './pages/learning/DataExchange';
import ComponentsPage from './pages/learning/ComponentsPage';
import RadioWaves from './pages/learning/RadioWaves';
import HistoryTrivia from './pages/learning/HistoryTrivia';
import Terminology from './pages/learning/Terminology';
import QRISBasics from './pages/learning/QRISBasics';
import QRISDataParsing from './pages/learning/QRISDataParsing';
import QRISComponents from './pages/learning/QRISComponents';
import QRISCameraVision from './pages/learning/QRISCameraVision';
import QRISHistoryTrivia from './pages/learning/QRISHistoryTrivia';
import QRISTerminology from './pages/learning/QRISTerminology';

import YasinHikmah from './pages/learning/YasinHikmah';
import TahlilHikmah from './pages/learning/TahlilHikmah';
import MaulidHikmah from './pages/learning/MaulidHikmah';
import TradisiNUHikmah from './pages/learning/TradisiNUHikmah';

// Intersection Observer for scroll animations
function useScrollReveal(pathname) {
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
  }, [pathname]);
}

function ScrollWrapper({ children }) {
  const location = useLocation();
  useScrollReveal(location.pathname);
  return children;
}

function App() {
  return (
    <Router>
      <SEO />
      <div className="container">
        <Navbar />
        <main id="viewport">
          <ScrollWrapper>
            <Routes>
              {/* Root is the canonical home; /home stays as a redirect for old links */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Home scrollToContact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy app="QRSTU" />} />
              <Route path="/privacy-policy-bensy" element={<PrivacyPolicy app="Bensy" />} />
              <Route path="/tos-bensy" element={<TermsOfService app="Bensy" />} />
              <Route path="/privacy-policy-pembacakue" element={<PrivacyPolicy app="PembacaKUE" />} />
              <Route path="/tos-pembacakue" element={<TermsOfService app="PembacaKUE" />} />
              <Route path="/privacy-policy-yasintahlil" element={<PrivacyPolicy app="Yasin Tahlil NU" />} />
              <Route path="/tos-yasintahlil" element={<TermsOfService app="Yasin Tahlil NU" />} />
              
              {/* Learning Routes */}
              <Route path="/learning" element={<LearningHub />} />
              <Route path="/learning/nfc-basics" element={<NFCBasics />} />
              <Route path="/learning/data-exchange" element={<DataExchange />} />
              <Route path="/learning/components" element={<ComponentsPage />} />
              <Route path="/learning/radio-waves" element={<RadioWaves />} />
              <Route path="/learning/history-trivia" element={<HistoryTrivia />} />
              <Route path="/learning/terminology" element={<Terminology />} />
              
              {/* QRIS Learning Routes */}
              <Route path="/learning/qris-basics" element={<QRISBasics />} />
              <Route path="/learning/qris-data-parsing" element={<QRISDataParsing />} />
              <Route path="/learning/qris-components" element={<QRISComponents />} />
              <Route path="/learning/qris-camera-vision" element={<QRISCameraVision />} />
              <Route path="/learning/qris-history-trivia" element={<QRISHistoryTrivia />} />
              <Route path="/learning/qris-terminology" element={<QRISTerminology />} />

              {/* Yasin Tahlil Learning Routes */}
              <Route path="/learning/yasin-hikmah" element={<YasinHikmah />} />
              <Route path="/learning/tahlil-hikmah" element={<TahlilHikmah />} />
              <Route path="/learning/maulid-hikmah" element={<MaulidHikmah />} />
              <Route path="/learning/tradisi-nu-hikmah" element={<TradisiNUHikmah />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ScrollWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

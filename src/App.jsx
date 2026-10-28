import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LearningAppCta from './components/LearningAppCta';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Home and 404 ship in the main bundle; every other page is its own chunk.
const QuranDiscovery = lazy(() => import('./pages/learning/QuranDiscovery'));
const HadithDiscovery = lazy(() => import('./pages/learning/HadithDiscovery'));
const OpenSource = lazy(() => import('./pages/OpenSource'));
const KaptenDigital = lazy(() => import('./pages/talks/KaptenDigital'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const AppPage = lazy(() => import('./pages/AppPage'));
const LearningHub = lazy(() => import('./pages/learning/LearningHub'));
const NFCBasics = lazy(() => import('./pages/learning/NFCBasics'));
const DataExchange = lazy(() => import('./pages/learning/DataExchange'));
const ComponentsPage = lazy(() => import('./pages/learning/ComponentsPage'));
const RadioWaves = lazy(() => import('./pages/learning/RadioWaves'));
const HistoryTrivia = lazy(() => import('./pages/learning/HistoryTrivia'));
const Terminology = lazy(() => import('./pages/learning/Terminology'));
const QRISBasics = lazy(() => import('./pages/learning/QRISBasics'));
const QRISDataParsing = lazy(() => import('./pages/learning/QRISDataParsing'));
const QRISComponents = lazy(() => import('./pages/learning/QRISComponents'));
const QRISCameraVision = lazy(() => import('./pages/learning/QRISCameraVision'));
const QRISHistoryTrivia = lazy(() => import('./pages/learning/QRISHistoryTrivia'));
const QRISTerminology = lazy(() => import('./pages/learning/QRISTerminology'));
const YasinHikmah = lazy(() => import('./pages/learning/YasinHikmah'));
const TahlilHikmah = lazy(() => import('./pages/learning/TahlilHikmah'));
const MaulidHikmah = lazy(() => import('./pages/learning/MaulidHikmah'));
const TradisiNUHikmah = lazy(() => import('./pages/learning/TradisiNUHikmah'));

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

    // Lazy pages mount after this effect runs, so watch for them arriving.
    const mutations = new MutationObserver(checkAndObserve);
    mutations.observe(document.getElementById('viewport'), { childList: true, subtree: true });
    return () => {
      mutations.disconnect();
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
        <main id="viewport" tabIndex={-1}>
          <ScrollWrapper>
            <Suspense fallback={null}>
            <Routes>
              {/* Root is the canonical home; /home stays as a redirect for old links */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              {/* App landing pages: Indonesian at /apps/*, English at /en/apps/* */}
              <Route path="/apps/pembacakue" element={<AppPage key="pk-id" slug="pembacakue" lang="id" />} />
              <Route path="/en/apps/pembacakue" element={<AppPage key="pk-en" slug="pembacakue" lang="en" />} />
              <Route path="/apps/qrstu" element={<AppPage key="qr-id" slug="qrstu" lang="id" />} />
              <Route path="/en/apps/qrstu" element={<AppPage key="qr-en" slug="qrstu" lang="en" />} />
              <Route path="/open-source" element={<OpenSource />} />
              <Route path="/talks/kapten-digital" element={<KaptenDigital />} />
              <Route path="/contact" element={<Home scrollToContact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy app="QRSTU" />} />
              <Route path="/privacy-policy-bensy" element={<PrivacyPolicy app="Bensy" />} />
              <Route path="/tos-bensy" element={<TermsOfService app="Bensy" />} />
              <Route path="/privacy-policy-pembacakue" element={<PrivacyPolicy app="PembacaKUE" />} />
              <Route path="/tos-pembacakue" element={<TermsOfService app="PembacaKUE" />} />
              <Route path="/privacy-policy-yasintahlil" element={<PrivacyPolicy app="Yasin Tahlil NU" />} />
              <Route path="/tos-yasintahlil" element={<TermsOfService app="Yasin Tahlil NU" />} />
              <Route path="/privacy-policy-qurandiscovery" element={<PrivacyPolicy app="Quran Discovery" />} />
              <Route path="/privacy-policy-hadithdiscovery" element={<PrivacyPolicy app="Hadith Discovery" />} />
              
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

              {/* Quran Discovery */}
              <Route path="/learning/quran-discovery" element={<QuranDiscovery />} />
              <Route path="/learning/hadith-discovery" element={<HadithDiscovery />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
            <LearningAppCta />
          </ScrollWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import PlayStoreButton from './PlayStoreButton';
import { APPS, appForPath, normalizePath, playUrl } from '../seo/siteMeta';

// Short name -> the home.* key holding its one-line description.
const DESC_KEY = {
  QRSTU: 'home.qrstu_desc',
  PembacaKUE: 'home.pembacakue_desc',
  'Yasin Tahlil NU': 'home.yasintahlil_desc',
};

/**
 * Install prompt under each lesson: the lesson explains the tech, the app
 * is the tech in action. Gives the learning pages a path into the Play listing.
 */
function LearningAppCta() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const playId = appForPath(normalizePath(pathname));
  const app = playId && APPS.find((a) => a.playId === playId && !a.pending);
  if (!app) return null;

  return (
    <aside className="glass-card learn-cta">
      <img className="learn-cta-icon" src={app.icon} alt={`${app.short} app icon`} width="56" height="56" loading="lazy" />
      <div className="learn-cta-copy">
        <h2>{t('learning.cta_title', { app: app.short })}</h2>
        <p>{t(DESC_KEY[app.short])}</p>
      </div>
      <PlayStoreButton url={playUrl(app.playId)} appName={app.short} />
    </aside>
  );
}

export default LearningAppCta;

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PlayStoreButton.css';

// `pending`: the listing is still in Google Play review, so there is nothing to
// link to yet. The badge shows greyed out and inert, with a note under it.
// `soon`: not submitted anywhere yet. Plain outline pills instead of the official
// badge, which Google's badge rules reserve for links to a real listing.
const PlayStoreButton = ({ url, appName, pending = false, soon = false }) => {
  const { t } = useTranslation();

  if (soon) {
    return (
      <div className="playstore-button-container">
        <span className="soon-pill">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5v17l14-8.5z" /></svg>
          Google Play
        </span>
        <span className="soon-pill">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
          {t('home.pwa_button')}
        </span>
        <span className="playstore-pending-note">{t('home.coming_soon')}</span>
      </div>
    );
  }

  if (pending) {
    return (
      <div className="playstore-button-container">
        <span className="playstore-button is-pending">
          <img src="/google-play-badge.png" width="646" height="250" alt="Google Play" />
        </span>
        <span className="playstore-pending-note">{t('home.play_pending')}</span>
      </div>
    );
  }

  return (
    <div className="playstore-button-container">
      <a
        href={url}
        className="playstore-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get ${appName} on Google Play`}
      >
        <img
          src="/google-play-badge.png"
          width="646"
          height="250"
          alt={`Get ${appName} on Google Play`}
        />
      </a>
    </div>
  );
};

export default PlayStoreButton;

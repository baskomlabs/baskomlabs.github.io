import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PlayStoreButton.css';

// `pending`: the listing is still in Google Play review, so there is nothing to
// link to yet. The badge shows greyed out and inert, with a note under it.
// `soon`: not released anywhere yet, so the web app (PWA) button is inert too.
const PlayStoreButton = ({ url, appName, pending = false, soon = false }) => {
  const { t } = useTranslation();

  if (pending || soon) {
    const note = t(soon ? 'home.coming_soon' : 'home.play_pending');
    return (
      <div className="playstore-button-container">
        <span className="playstore-button is-pending" aria-disabled="true">
          <img src="/google-play-badge.png" width="646" height="250" alt={`${appName} — ${note}`} />
        </span>
        {soon && (
          <span className="pwa-button is-pending" aria-disabled="true">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
            {t('home.pwa_button')}
          </span>
        )}
        <span className="playstore-pending-note">{note}</span>
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

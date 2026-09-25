import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PlayStoreButton.css';

// `pending`: the listing is still in Google Play review, so there is nothing to
// link to yet. The badge shows greyed out and inert, with a note under it.
const PlayStoreButton = ({ url, appName, pending = false }) => {
  const { t } = useTranslation();

  if (pending) {
    return (
      <div className="playstore-button-container">
        <span className="playstore-button is-pending" aria-disabled="true">
          <img src="/google-play-badge.png" alt={`${appName} — ${t('home.play_pending')}`} />
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
        aria-label={`Download ${appName} di Google Play`}
      >
        <img
          src="/google-play-badge.png"
          alt={`Dapatkan ${appName} di Google Play`}
        />
      </a>
    </div>
  );
};

export default PlayStoreButton;

import React from 'react';
import '../styles/PlayStoreButton.css';

const PlayStoreButton = ({ url, appName }) => {
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

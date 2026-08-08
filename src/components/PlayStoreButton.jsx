import React from 'react';

const PlayStoreButton = ({ link, appName }) => {
  return (
    <a
      href={link}
      className="playstore-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Download ${appName} di Google Play`}
    >
      <img
        src="/google-play-badge.svg"
        alt={`Dapatkan ${appName} di Google Play`}
        style={{ height: '60px' }}
      />
    </a>
  );
};

export default PlayStoreButton;

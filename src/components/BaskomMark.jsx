/**
 * The baskom mark, flat build — no turbulence filters, so it stays cheap to
 * inline repeatedly and stays legible down to navbar size.
 * The textured build lives in brand/baskom-icon.svg (Play Store assets only).
 */
function BaskomMark({ size = 32, showPrompt = true, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="BaskomLabs"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="bm-out" x1="0.1" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#7ccb52" />
          <stop offset="55%" stopColor="#4b9c38" />
          <stop offset="100%" stopColor="#2c6224" />
        </linearGradient>
        <linearGradient id="bm-rim" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#4478ea" />
          <stop offset="45%" stopColor="#1a3c88" />
          <stop offset="100%" stopColor="#0b1c46" />
        </linearGradient>
        <clipPath id="bm-clip">
          <path d="M 9,25 A 23,9.2 0 0 1 55,25 C 54.2,38 47.4,49.6 40,52.4 Q 32,54.6 24,52.4 C 16.6,49.6 9.8,38 9,25 Z" />
        </clipPath>
        <clipPath id="bm-clipcav">
          <ellipse cx="32" cy="25" rx="19.4" ry="6.6" />
        </clipPath>
      </defs>

      <g clipPath="url(#bm-clip)">
        <path
          d="M 9,25 A 23,9.2 0 0 1 55,25 C 54.2,38 47.4,49.6 40,52.4 Q 32,54.6 24,52.4 C 16.6,49.6 9.8,38 9,25 Z"
          fill="url(#bm-out)"
        />
        <ellipse cx="20" cy="30" rx="9" ry="16" fill="#ffffff" opacity="0.1" transform="rotate(-12 20 30)" />
      </g>

      <ellipse cx="32" cy="25" rx="19.4" ry="6.6" fill="#ffffff" />
      <g clipPath="url(#bm-clipcav)">
        <ellipse cx="32" cy="25" rx="16.6" ry="4.4" fill="none" stroke="#4e9e3f" strokeWidth="5" opacity="0.85" />
      </g>

      <ellipse cx="32" cy="25" rx="21.2" ry="8" fill="none" stroke="url(#bm-rim)" strokeWidth="3.6" />

      {showPrompt && (
        <g stroke="#0e2a5e" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 24,20.6 L 29,25 L 24,29.4" />
          <path d="M 35.4,29.4 H 41" />
        </g>
      )}
    </svg>
  );
}

export default BaskomMark;

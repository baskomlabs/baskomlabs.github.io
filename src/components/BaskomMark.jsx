/**
 * The baskom mark, flat build (soft brutalism). Same drawing as public/favicon.svg
 * and brand/baskom-mark-flat.svg, minus the tile. The outline follows --line so
 * it stays visible in dark mode.
 */
function BaskomMark({ size = 32, showPrompt = true, className = '' }) {
  const ink = 'var(--line, #26231e)';
  return (
    <svg
      viewBox="4 9 56 56"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="BaskomLabs"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <ellipse cx="32" cy="53.5" rx="15" ry="2.6" fill={ink} opacity="0.22" />
      <path
        d="M8.5 26 H55.5 L49.6 46.5 Q48.3 51 43.8 51 H20.2 Q15.7 51 14.4 46.5 Z"
        fill="#b4d07a"
        stroke={ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M21 33 q1.5 6 -0.5 12 M43.5 33 q-1 5 0.5 10" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <ellipse cx="32" cy="26" rx="24" ry="7.5" fill="#fff" stroke={ink} strokeWidth="3" />
      <ellipse cx="32" cy="26" rx="20.4" ry="5" fill="none" stroke="#27427a" strokeWidth="2.6" />
      {showPrompt && (
        <g stroke="#0e2a5e" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M26 23.4 L29.4 25.9 L26 28.4" />
          <path d="M32.6 28.4 H38" />
        </g>
      )}
    </svg>
  );
}

export default BaskomMark;

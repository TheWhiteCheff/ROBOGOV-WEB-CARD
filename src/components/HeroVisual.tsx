import React from "react";

/**
 * A custom, non-stock visual to reduce the "AI-template" vibe.
 */
export default function HeroVisual() {
  return (
    <div className="heroVisual" aria-hidden="true">
      <svg viewBox="0 0 640 420" className="heroVisual__svg">
        <defs>
          <linearGradient id="hv1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(120, 220, 255, .95)" />
            <stop offset="1" stopColor="rgba(160, 120, 255, .92)" />
          </linearGradient>
          <radialGradient id="hv2" cx="50%" cy="40%" r="70%">
            <stop offset="0" stopColor="rgba(255,255,255,.22)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 .55 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="640" height="420" rx="30" fill="url(#hv2)" />
        <g filter="url(#softGlow)">
          <path
            d="M88 300C150 210 230 180 300 210c84 36 132 8 210-52 70-54 120-56 160-30v120c-58 48-116 94-172 112-82 26-142-4-212-40-64-34-132-28-198 44Z"
            fill="url(#hv1)"
            opacity=".55"
          />
          <path
            d="M60 270c82-122 210-150 310-90 86 52 144 30 220-24 36-26 74-32 110-18"
            fill="none"
            stroke="rgba(255,255,255,.34)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <g opacity=".75">
            <circle cx="180" cy="210" r="6" fill="rgba(255,255,255,.85)" />
            <circle cx="332" cy="240" r="6" fill="rgba(255,255,255,.85)" />
            <circle cx="468" cy="170" r="6" fill="rgba(255,255,255,.85)" />
            <circle cx="520" cy="130" r="4" fill="rgba(255,255,255,.7)" />
          </g>
        </g>

        <g opacity=".35">
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 70 + i * 30;
            return <line key={i} x1={x} y1="60" x2={x} y2="360" stroke="rgba(255,255,255,.10)" />;
          })}
        </g>
        <g opacity=".35">
          {Array.from({ length: 10 }).map((_, i) => {
            const y = 80 + i * 30;
            return <line key={i} x1="60" y1={y} x2="580" y2={y} stroke="rgba(255,255,255,.10)" />;
          })}
        </g>
      </svg>

      <div className="heroVisual__tag">
        <span className="tagDot" />
        <span>Robotics · Sky · Ops</span>
      </div>
    </div>
  );
}

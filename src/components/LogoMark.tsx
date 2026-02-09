import React from "react";

export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div className="logoMark" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 64 64" width={size} height={size} role="img" aria-label="">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgb(var(--accent1))" />
            <stop offset="1" stopColor="rgb(var(--accent2))" />
          </linearGradient>
        </defs>
        <path
          d="M32 6c9.5 0 17 7.5 17 17v7.5c0 2.2.9 4.3 2.5 5.9l3.7 3.7c1.7 1.7.5 4.6-1.9 4.6H10.7c-2.4 0-3.6-2.9-1.9-4.6l3.7-3.7c1.6-1.6 2.5-3.7 2.5-5.9V23C15 13.5 22.5 6 32 6Z"
          fill="url(#g1)"
          opacity="0.9"
        />
        <path
          d="M22 36c0-5.5 4.5-10 10-10s10 4.5 10 10"
          fill="none"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="26" cy="36" r="2" fill="rgba(255,255,255,0.9)" />
        <circle cx="38" cy="36" r="2" fill="rgba(255,255,255,0.9)" />
        <path
          d="M24 44c2.2 2 5.1 3 8 3s5.8-1 8-3"
          fill="none"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

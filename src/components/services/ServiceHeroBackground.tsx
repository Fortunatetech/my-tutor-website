// src/components/services/ServiceHeroBackground.tsx
// NEW - decorative gradient + SVG shapes for hero background (purely presentational)
import React from 'react';

export default function ServiceHeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#0FB5A6" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0B2545" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <rect width="1200" height="600" fill="url(#g1)" />
        <g transform="translate(800 120) rotate(15)">
          <ellipse cx="0" cy="0" rx="320" ry="120" fill="#FF8A5B" opacity="0.05"></ellipse>
        </g>
        <g transform="translate(200 400) rotate(-10)">
          <ellipse cx="0" cy="0" rx="420" ry="160" fill="#0B2545" opacity="0.03"></ellipse>
        </g>
      </svg>
    </div>
  );
}

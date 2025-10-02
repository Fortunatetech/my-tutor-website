// src/components/ui/Icon.tsx
// NEW - small icon set used by premium service components

import React from 'react';

export type IconName = 'book' | 'code' | 'briefcase' | 'resume' | 'calendar' | 'clock' | 'star' | 'database';

export default function Icon({ name, className = '', size = 20 }: { name: IconName; className?: string; size?: number }) {
  const common = { width: size, height: size, className: `inline-block ${className}` };

  switch (name) {
    case 'book':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 19.5A2.5 2.5 0 0 0 5.5 22H20" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H20v18H5.5A2.5 2.5 0 0 1 3 19.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'code':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20 18L14 12l6-6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'resume':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"></rect>
          <path d="M7 8h6M7 12h6M7 16h4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M21 7v10" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="5" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"></rect>
          <path d="M16 3v4M8 3v4" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case 'clock':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"></circle>
          <path d="M12 7v6l3 3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case 'star':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 17.3l-5.6 3 1.5-6.3L3.2 10l6.4-.6L12 3l2.4 6.4 6.4.6-5 3.9 1.5 6.3z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case 'database':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v6c0 1.6 4 3 9 3s9-1.4 9-3V5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3 11v6c0 1.6 4 3 9 3s9-1.4 9-3v-6" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    default:
      return null;
  }
}

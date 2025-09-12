// src/components/ui/ServiceIcon.tsx
import React from 'react';

export default function ServiceIcon({ name, className = '' }: { name?: string; className?: string }) {
  const common = 'w-6 h-6';
  switch (name) {
    case 'book':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'code':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 18l6-6-6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6l-6 6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'database':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="1.5" />
          <path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'homework':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 8V7L12 2 3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 12h10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="1.5" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'resume':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          <path d="M7 7h10M7 11h10M7 15h6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'it':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6v12h12V6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'office':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" />
          <path d="M8 2v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        </svg>
      );
  }
}

// src/components/services/ServicesFilter.tsx
'use client';

import React from 'react';

export default function ServicesFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string | null;
  onChange: (c: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button
        onClick={() => onChange(null)}
        className={`px-3 py-1 rounded-full text-sm ${active === null ? 'bg-brand-500 text-white' : 'bg-white/80 dark:bg-white/5'}`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-1 rounded-full text-sm ${active === c ? 'bg-brand-500 text-white' : 'bg-white/80 dark:bg-white/5'}`}
        >
          {capitalize(c)}
        </button>
      ))}
    </div>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

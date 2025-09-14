// src/components/services/ServiceSubservices.tsx
'use client';
import React from 'react';

export default function ServiceSubservices({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/80 dark:bg-black/10 text-neutral-700">
          {i}
        </span>
      ))}
    </div>
  );
}

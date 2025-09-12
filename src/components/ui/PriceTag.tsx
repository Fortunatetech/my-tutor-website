// src/components/ui/PriceTag.tsx
import React from 'react';

export default function PriceTag({ original, current }: { original?: string; current?: string }) {
  return (
    <div className="inline-flex items-baseline gap-3">
      {original && (
        <span className="text-sm text-neutral-500 line-through" aria-hidden>
          {original}
        </span>
      )}
      {current && (
        <span className="text-base font-semibold text-brand-900" aria-label={`Price ${current}`}>
          {current}
        </span>
      )}
    </div>
  );
}

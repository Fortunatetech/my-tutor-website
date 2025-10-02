// src/components/services/PriceBlock.tsx
// NEW: Show starting from price, original/slash price, and session length options
import React from 'react';

type Props = {
  original?: string;
  current?: string;
  compact?: boolean;
};

export default function PriceBlock({ original, current, compact = false }: Props) {
  return (
    <div className={`p-3 rounded-lg ${compact ? 'bg-amber-200' : 'bg-bg-50'}`}>
      <div className="flex items-baseline gap-3">
        {current && <div className="text-2xl font-bold text-neutral-900">Starting from {current}</div>}
        {original && <div className="text-sm line-through text-neutral-500">{original}</div>}
      </div>

      {!compact && (
        <div className="mt-2 text-sm text-neutral-600">
          Hourly rate — {current} <span className="text-neutral-500">({original} before)</span>. Session lengths: 30 / 45 / 60 min.
        </div>
      )}
    </div>
  );
}

// src/components/services/PricingStrip.tsx
// NEW - horizontal pricing panel with session length choices (purely presentational)
import React from 'react';
import Icon from '@/components/ui/Icon';

export default function PricingStrip({ original, current }: { original?: string; current?: string }) {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-r from-amber-200 to-bg-50 border shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-sm text-neutral-600">Hourly rate</div>
          <div className="text-2xl font-bold text-neutral-900">Starting from {current} <span className="line-through text-neutral-500 text-base ml-2">{original}</span></div>
          <div className="mt-2 text-sm text-neutral-600">Session lengths: 30 / 45 / 60 min</div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-3 py-2 bg-white border rounded text-sm">30 min</button>
          <button className="px-3 py-2 bg-white border rounded text-sm">45 min</button>
          <button className="px-3 py-2 bg-white border rounded text-sm">60 min</button>
        </div>
      </div>
    </div>
  );
}

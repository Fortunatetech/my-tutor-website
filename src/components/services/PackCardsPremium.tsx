// src/components/services/PackCardsPremium.tsx
// NEW - premium pack cards (Starter/Growth/Accelerator)
'use client';

import React from 'react';
import BookServiceButton from './BookServiceButton';
import Link from 'next/link';

type Pack = { id: string; title: string; sessions: number; description: string };

export default function PackCardsPremium({ serviceId, packs }: { serviceId: string; packs: Pack[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {packs.map((p) => (
        <div key={p.id} className="p-6 bg-amber-200 rounded-2xl shadow-lg border">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-neutral-500">{p.title}</div>
              <div className="font-bold text-xl mt-1">{p.sessions} {p.sessions > 1 ? 'sessions' : 'session'}</div>
            </div>
            <div className="text-sm text-neutral-600">Best for</div>
          </div>

          <p className="mt-3 text-neutral-700 text-sm">{p.description}</p>

          <div className="mt-5 flex gap-3">
            {/* Starter: opens modal */}
            <BookServiceButton serviceId={serviceId} pack={p.id} className="px-3 py-2 rounded bg-brand-500 text-white text-sm">
              Book {p.title}
            </BookServiceButton>

            {/* Schedule (direct to scheduler for bigger packs) */}
            <Link href={`/booking?service=${serviceId}&pack=${p.id}`} className="px-3 py-2 rounded border text-sm">
              Schedule
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

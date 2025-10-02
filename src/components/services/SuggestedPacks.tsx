// src/components/services/SuggestedPacks.tsx
// NEW: Render Starter / Growth / Accelerator packs with proper booking behaviour
'use client';

import React from 'react';
import BookServiceButton from './BookServiceButton';
import Link from 'next/link';

type Pack = { id: string; title: string; sessions: number; description: string };

type Props = {
  serviceId: string;
  packs: Pack[];
};

export default function SuggestedPacks({ serviceId, packs }: Props) {
  const starter = packs.find((p) => p.id === 'starter');
  const growth = packs.find((p) => p.id === 'growth');
  const accel = packs.find((p) => p.id === 'accelerator');

  return (
    <section aria-labelledby="packs" className="space-y-4">
      <h3 id="packs" className="text-xl font-semibold text-brand-900">Suggested session packs</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        {starter && (
          <div className="p-4 bg-orange-400 rounded-lg shadow">
            <div className="text-sm text-neutral-600">{starter.title}</div>
            <div className="font-semibold text-lg">{starter.sessions} session</div>
            <div className="text-sm mt-2 text-neutral-600">{starter.description}</div>
            <div className="mt-4 flex gap-2">
              {/* Starter: open modal prefilled */}
              <BookServiceButton serviceId={serviceId} pack={starter.id} className="px-3 py-2 rounded bg-brand-500 text-white text-sm">
                Book Starter
              </BookServiceButton>
              <Link href={`/booking?service=${serviceId}&pack=${starter.id}`} className="px-3 py-2 rounded border text-sm">
                Schedule
              </Link>
            </div>
          </div>
        )}

        {growth && (
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="text-sm text-neutral-600">{growth.title}</div>
            <div className="font-semibold text-lg">{growth.sessions} sessions</div>
            <div className="text-sm mt-2 text-neutral-600">{growth.description}</div>
            <div className="mt-4 flex gap-2">
              {/* Growth: modal first, show scheduler after success */}
              <BookServiceButton serviceId={serviceId} pack={growth.id} className="px-3 py-2 rounded bg-brand-500 text-white text-sm">
                Book Growth
              </BookServiceButton>
              <Link href={`/booking?service=${serviceId}&pack=${growth.id}`} className="px-3 py-2 rounded border text-sm">
                Schedule
              </Link>
            </div>
          </div>
        )}

        {accel && (
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="text-sm text-neutral-600">{accel.title}</div>
            <div className="font-semibold text-lg">{accel.sessions} sessions</div>
            <div className="text-sm mt-2 text-neutral-600">{accel.description}</div>
            <div className="mt-4 flex gap-2">
              {/* Accelerator: direct scheduler preferred */}
              <Link href={`/booking?service=${serviceId}&pack=${accel.id}`} className="px-3 py-2 rounded bg-brand-500 text-white text-sm">
                Book Accelerator (Schedule)
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

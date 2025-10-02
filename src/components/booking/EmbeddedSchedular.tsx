// src/components/booking/EmbeddedScheduler.tsx
'use client';

import React from 'react';

type Props = {
  serviceId?: string | null;
};

/**
 * NEW: EmbeddedScheduler
 * - Simple iframe wrapper for embedding a scheduler (Calendly or similar).
 * - Replace CALENDLY_BASE with your scheduling page or primary embed link.
 *
 * Example Calendly embed: https://calendly.com/your-username/30min
 */

const CALENDLY_BASE = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/ayodeleayodeji250/30min';

export default function EmbeddedScheduler({ serviceId }: Props) {
  // Optionally append service param to calendly URL for context or to prefill questions:
  const src = `${CALENDLY_BASE}${serviceId ? `?service=${encodeURIComponent(serviceId)}` : ''}`;

  return (
    <div id="calendly" className="w-full h-[700px] rounded-lg overflow-hidden shadow-lg">
      <iframe src={src} title="Scheduler" className="w-full h-full border-0" />
    </div>
  );
}

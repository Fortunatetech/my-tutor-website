// src/components/services/ServiceAudienceSection.tsx
// NEW: Audience tabbed / anchor section for a service with Kids / Students / Professionals
'use client';

import React, { useState, useRef } from 'react';
import BookServiceButton from './BookServiceButton';

type Audience = {
  key: string;
  label: string;
  headline: string;
  bullets: string[];
  firstSession: string;
  outcomes: string[];
  testimonial?: { text: string; author: string };
};

type Props = {
  audiences: Audience[];
  serviceId: string;
};

export default function ServiceAudienceSection({ audiences, serviceId }: Props) {
  const [active, setActive] = useState(audiences[0]?.key ?? '');
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  function scrollTo(key: string) {
    setActive(key);
    const el = refs.current[key];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="space-y-6">
      {/* Audience chips */}
      <div className="flex gap-3 flex-wrap">
        {audiences.map((a) => (
          <button
            key={a.key}
            onClick={() => scrollTo(a.key)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              active === a.key ? 'bg-brand-500 text-white' : 'bg-white border'
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* Audience content blocks */}
      <div className="grid gap-6">
        {audiences.map((a) => (
          <div
            key={a.key}
            ref={(el) => (refs.current[a.key] = el)}
            id={`aud-${a.key}`}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-900">{a.headline}</h3>
                <p className="mt-2 text-neutral-600">{a.bullets.slice(0, 3).join(' • ')}</p>
              </div>

              {/* contextual Book sample review (small) */}
              <div className="flex flex-col items-end gap-2">
                {/* Book sample review for this audience (Starter pack prefilled) */}
                <BookServiceButton
                  serviceId={serviceId}
                  audience={a.key}
                  pack="starter"
                  className="px-3 py-2 rounded-lg bg-brand-500 text-white text-sm"
                >
                  Book sample review
                </BookServiceButton>

                <a href={`/booking?service=${encodeURIComponent(serviceId)}&audience=${a.key}`} className="text-sm text-neutral-600 underline">
                  Schedule now
                </a>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">What we focus on</h4>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  {a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Outcomes</h4>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  {a.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 text-sm text-neutral-700">
              <div><strong>First session:</strong> {a.firstSession}</div>
              {a.testimonial && (
                <blockquote className="mt-3 p-3 bg-gray-50 rounded">
                  <p className="italic">"{a.testimonial.text}"</p>
                  <footer className="mt-2 text-xs text-neutral-500">— {a.testimonial.author}</footer>
                </blockquote>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

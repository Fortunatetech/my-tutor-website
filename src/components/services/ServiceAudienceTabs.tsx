// src/components/services/ServiceAudienceTabs.tsx
// NEW - a polished tabbed audience view (client component)
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookServiceButton from './BookServiceButton';
import Icon from '@/components/ui/Icon';

type Audience = {
  key: string;
  label: string;
  headline: string;
  bullets: string[];
  firstSession: string;
  outcomes: string[];
  testimonial?: { text: string; author: string };
};

export default function ServiceAudienceTabs({ audiences, serviceId }: { audiences: Audience[]; serviceId: string }) {
  const [active, setActive] = useState(audiences[0]?.key ?? '');

  return (
    <div className="bg-bg-50 p-6 rounded-2xl">
      <div className="flex gap-2 mb-4">
        {audiences.map((a) => (
          <button
            key={a.key}
            onClick={() => setActive(a.key)}
            className={`px-3 py-2 rounded-full text-sm font-medium ${active === a.key ? 'bg-brand-500 text-white' : 'bg-amber-200 border'}`}
            aria-pressed={active === a.key}
          >
            {a.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          {audiences.map((a) =>
            active === a.key ? (
              <motion.div key={a.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.28 }}>
                <div className="grid gap-6 md:grid-cols-3 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-semibold text-brand-900">{a.headline}</h3>
                    <p className="mt-2 text-neutral-700">{a.bullets.join(' • ')}</p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="p-4 bg-amber-200 rounded-lg shadow-sm">
                        <h4 className="font-semibold mb-2">What we focus on</h4>
                        <ul className="text-neutral-700 list-disc list-inside space-y-1">
                          {a.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                      </div>

                      <div className="p-4 bg-amber-200 rounded-lg shadow-sm">
                        <h4 className="font-semibold mb-2">Outcomes</h4>
                        <ul className="text-neutral-700 list-disc list-inside space-y-1">
                          {a.outcomes.map((o) => <li key={o}>{o}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-neutral-700">
                      <strong>First session:</strong> {a.firstSession}
                    </div>

                    {a.testimonial && (
                      <blockquote className="mt-4 p-4 bg-white rounded border text-sm">
                        <p className="italic">"{a.testimonial.text}"</p>
                        <footer className="mt-2 text-xs text-neutral-500">— {a.testimonial.author}</footer>
                      </blockquote>
                    )}
                  </div>

                  <aside className="flex flex-col gap-3">
                    <div className="p-4 bg-amber-200 rounded-lg shadow">
                      <div className="flex items-center gap-3">
                        <Icon name="calendar" />
                        <div>
                          <div className="text-sm text-neutral-600">Quick sample review</div>
                          <div className="font-semibold">Starter — 30–45 min</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <BookServiceButton serviceId={serviceId} audience={a.key} pack="starter" className="w-full px-3 py-2 bg-amber-200 text-white rounded">
                          Book sample review
                        </BookServiceButton>
                      </div>
                      <a href={`/booking?service=${serviceId}&audience=${a.key}`} className="block mt-2 text-center text-sm text-neutral-600 underline">
                        Schedule now
                      </a>
                    </div>

                    <div className="p-4 bg-amber-200 rounded-lg shadow text-sm text-neutral-700">
                      <div className="font-semibold">Why this suits {a.label.toLowerCase()}</div>
                      <div className="mt-2">Tailored lessons for the needs of {a.label.toLowerCase()} learners — focus, pace and examples match the audience.</div>
                    </div>
                  </aside>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

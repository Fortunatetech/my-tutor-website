// src/components/services/FAQSection.tsx
// NEW: simple accordion FAQ section
'use client';

import React, { useState } from 'react';

type Item = { q: string; a: string };

export default function FAQSection({ items }: { items: Item[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  if (!items || items.length === 0) return null;
  return (
    <section aria-labelledby="faq" className="mt-6">
      <h3 id="faq" className="text-xl font-semibold text-brand-900 mb-4">Frequently asked</h3>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="border-amber-200 p-4 rounded-lg shadow-sm">
            <button
              className="w-full text-left flex items-center justify-between"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <span className="font-medium">{it.q}</span>
              <span>{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && <div className="mt-2 text-sm text-neutral-700">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/services/ServiceDetailCards.tsx
// FIXED: now a client component (uses framer-motion) — add 'use client' at top
'use client';

import React from 'react';
import Icon from '@/components/ui/Icon';
import { motion } from 'framer-motion';

export default function ServiceDetailCards({
  cover = [],
  lessonPlan = [],
  outcomes = [],
}: {
  cover?: string[];
  lessonPlan?: string[];
  outcomes?: string[];
}) {
  const cards = [
    { id: 'cover', title: 'What I cover', icon: 'book', items: cover },
    { id: 'plan', title: 'Typical lesson plan', icon: 'clock', items: lessonPlan },
    { id: 'out', title: 'What you’ll walk away with', icon: 'star', items: outcomes },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {cards.map((c, i) => (
        <motion.div
          key={c.id}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.06 }}
          className="p-6 bg-amber-200 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-800 rounded-lg">
              <Icon name={c.icon as any} />
            </div>
            <h4 className="font-semibold text-lg text-brand-900">{c.title}</h4>
          </div>

          <ul className="mt-4 list-disc list-inside text-neutral-700 space-y-2">
            {c.items.map((it: string) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

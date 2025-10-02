// src/components/services/FAQAccordionPremium.tsx
// NEW - refined FAQ with simple animations (client)
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordionPremium({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="bg-white rounded-lg border">
          <button className="w-full p-4 flex justify-between items-center" onClick={() => setOpen(open === i ? null : i)}>
            <div className="text-left">
              <div className="font-semibold text-neutral-900">{it.q}</div>
            </div>
            <div className="text-neutral-600">{open === i ? '−' : '+'}</div>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="px-4 pb-4 text-sm text-neutral-700">
                {it.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

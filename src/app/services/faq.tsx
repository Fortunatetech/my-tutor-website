// src/app/services/faq.tsx
'use client';

import Accordion from '@/components/ui/Accordion';
import { FAQ_ITEMS } from './faq-data';

export default function ServicesFAQ() {
  const items = FAQ_ITEMS.map((f, i) => ({ id: i, title: f.q, content: f.a }));
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-brand-900 mb-4">Frequently asked questions</h3>
      <Accordion items={items} />
    </section>
  );
}

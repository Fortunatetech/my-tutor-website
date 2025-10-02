// src/components/services/ServiceHeader.tsx
// NEW: header block for a service detail page (title, subtitle/desc, trust row, top-right Book + price)
'use client';

import React from 'react';
import BookServiceButton from './BookServiceButton';
import TrustRow from '@/components/TrustRow';
import PriceBlock from '@/components/services/PriceBlock';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  price?: string;
  priceOriginal?: string;
};

export default function ServiceHeader({ id, title, subtitle, desc, price, priceOriginal }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
      {/* LEFT: Title & description */}
      <div className="md:col-span-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-900 leading-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-neutral-700">{subtitle}</p>}
        {desc && <p className="mt-4 text-neutral-600 max-w-2xl">{desc}</p>}

        {/* TRUST ROW - re-usable small component */}
        <div className="mt-6">
          <TrustRow />
        </div>
      </div>

      {/* RIGHT: Price + CTA */}
      <aside className="flex flex-col items-end gap-3">
        <PriceBlock original={priceOriginal} current={price} compact />
        {/* Book button prefilled for this service */}
        <BookServiceButton serviceId={id} className="px-4 py-2 rounded-lg bg-brand-500 text-white w-full">
          Book Free Consult
        </BookServiceButton>

        {/* Schedule now quick link */}
        <a
          href={`/booking?service=${encodeURIComponent(id)}`}
          className="mt-2 text-sm underline text-neutral-700"
        >
          Or schedule now — pick a time
        </a>
      </aside>
    </div>
  );
}

// src/components/services/ServiceDetailSections/WhatSetsApart.tsx
import React from 'react';

export default function WhatSetsApart({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">What sets me apart</h3>
      <ul className="list-disc pl-5 space-y-2 text-neutral-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

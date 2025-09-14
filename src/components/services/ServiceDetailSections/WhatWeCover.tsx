// src/components/services/ServiceDetailSections/WhatWeCover.tsx
import React from 'react';
import Card from '@/components/ui/Card';

export default function WhatWeCover({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">What we will cover</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <Card key={it} className="p-4">
            <div className="font-semibold text-neutral-900">{it}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

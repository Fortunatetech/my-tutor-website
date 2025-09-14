// src/components/services/ServiceDetailSections/WhoIsThisFor.tsx
import React from 'react';
import Card from '@/components/ui/Card';

export default function WhoIsThisFor({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">Who is this for?</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((t) => (
          <Card key={t} className="p-4">
            <div className="text-sm text-neutral-700">{t}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

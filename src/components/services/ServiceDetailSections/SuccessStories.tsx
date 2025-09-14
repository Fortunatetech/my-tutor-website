// src/components/services/ServiceDetailSections/SuccessStories.tsx
import React from 'react';
import Card from '@/components/ui/Card';

export default function SuccessStories({ stories }: { stories?: import('@/data/services').SuccessStory[] }) {
  if (!stories || stories.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">Success stories</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {stories.map((s) => (
          <Card key={s.id} className="p-4">
            <div className="font-semibold text-neutral-900">{s.title}</div>
            <div className="text-sm text-neutral-700 mt-2">{s.summary}</div>
            <div className="text-sm text-green-700 mt-2 font-medium">{s.result}</div>
            {s.details && <div className="text-sm text-neutral-700 mt-2">{s.details}</div>}
          </Card>
        ))}
      </div>
    </div>
  );
}

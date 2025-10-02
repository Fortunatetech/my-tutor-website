// src/components/services/SuccessStories.tsx
// NEW: small card list for success stories
import React from 'react';

type Story = { id: string; title: string; summary: string; result?: string; details?: string };

export default function SuccessStories({ stories }: { stories: Story[] }) {
  if (!stories || stories.length === 0) return null;
  return (
    <section aria-labelledby="success-stories" className="space-y-4">
      <h3 id="success-stories" className="text-xl font-semibold text-brand-900">Success stories</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {stories.map((s) => (
          <div key={s.id} className="p-4 bg-blue-200 rounded-lg shadow-sm">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-neutral-700 mt-2">{s.summary}</p>
            {s.result && <div className="mt-2 text-sm text-neutral-600"><strong>Result:</strong> {s.result}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

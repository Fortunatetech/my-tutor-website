// src/components/services/ServiceDetailSections/LessonPlan.tsx
import React from 'react';
import Card from '@/components/ui/Card';

export default function LessonPlan({ plan }: { plan?: string[] }) {
  if (!plan || plan.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">A typical lesson plan</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {plan.map((p) => (
          <Card key={p} className="p-4">
            <div className="text-sm text-neutral-700">{p}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

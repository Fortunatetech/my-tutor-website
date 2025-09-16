// src/components/services/ServiceAudienceSection.tsx
'use client';

import React from 'react';
import BookServiceButton from './BookServiceButton';
import Card from '@/components/ui/Card';
import { AudienceSection } from '@/data/services';

export default function ServiceAudienceSection({ serviceId, section }: { serviceId: string; section: AudienceSection }) {
  const id = `${serviceId}-${section.key}`;

  return (
    <section id={id} className="mb-8">
      <div className="rounded-lg p-6 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-brand-900">{section.headline}</h3>
            <p className="mt-2 text-neutral-700">{section.firstSession}</p>
          </div>

          <div className="md:text-right">
            <div className="text-sm text-neutral-600">First session</div>
            <div className="font-semibold">{section.firstSession}</div>
            <div className="mt-3">
              <BookServiceButton serviceId={serviceId} audience={section.key} className="px-4 py-2 rounded-lg bg-brand-500 text-white">
                Book sample review
              </BookServiceButton>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card className="p-4">
            <h4 className="font-semibold text-neutral-900">What we focus on</h4>
            <ul className="list-disc pl-5 mt-2 text-neutral-700 space-y-1">
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold text-neutral-900">Outcomes</h4>
            <ul className="list-disc pl-5 mt-2 text-neutral-700 space-y-1">
              {(section.outcomes || []).map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>

            {section.testimonial && (
              <div className="mt-4 border-t pt-3 text-sm text-neutral-700">
                “{section.testimonial.text}” — <span className="font-semibold">{section.testimonial.author}</span>
                {section.testimonial.date ? <span className="text-xs text-neutral-500">, {section.testimonial.date}</span> : null}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

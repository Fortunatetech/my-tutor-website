// src/components/services/ServiceDetailSections/PricingAndPacks.tsx
'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import PriceTag from '@/components/ui/PriceTag';
import BookServiceButton from '@/components/services/BookServiceButton';
import { Service } from '@/data/services';

export default function PricingAndPacks({ service }: { service: Service }) {
  return (
    <div id="pricing" className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">Pricing</h3>

      <Card className="p-6 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-neutral-600">Hourly rate</div>
            <PriceTag original={service.priceOriginal} current={service.price} />
            <div className="text-sm text-neutral-600 mt-1">Session lengths: 30 / 45 / 60 min</div>
          </div>

          <div>
            <BookServiceButton serviceId={service.id} className="px-4 py-3 rounded-lg bg-orange-500 text-white">
              Book a session
            </BookServiceButton>
          </div>
        </div>
      </Card>

      <div>
        <h4 className="text-lg font-semibold mb-3">Suggested session packs</h4>
        <div className="grid gap-4 sm:grid-cols-3">
          {(service.packs || []).map((p) => (
            <Card key={p.id} className="p-4">
              <div className="text-sm text-neutral-600">{p.title}</div>
              <div className="font-semibold text-lg">{p.sessions} session{p.sessions > 1 ? 's' : ''}</div>
              <div className="text-sm text-neutral-600 mt-2">{p.description}</div>
              <div className="mt-4">
                <BookServiceButton serviceId={service.id} className="px-3 py-2 rounded-lg bg-orange-500 text-white">
                  Book {p.title}
                </BookServiceButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

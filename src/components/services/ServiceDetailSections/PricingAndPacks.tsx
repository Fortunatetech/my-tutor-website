// src/components/services/ServiceDetailSections/PricingAndPacks.tsx
'use client';
import React from 'react';
import Card from '@/components/ui/Card';
import BookServiceButton from '@/components/services/BookServiceButton';
import PriceTag from '@/components/ui/PriceTag';

export default function PricingAndPacks({ service }: { service: import('@/data/services').Service }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-900 mb-4">Pricing</h3>

      <Card className="p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-neutral-600">Hourly rate</div>
            <PriceTag original={service.priceOriginal} current={service.price} />
          </div>

          <div>
            <BookServiceButton serviceId={service.id}>Book a session</BookServiceButton>
          </div>
        </div>
      </Card>

      <div>
        <h4 className="text-lg font-semibold mb-3">Suggested session packs</h4>
        <div className="grid gap-4 sm:grid-cols-3">
          {(service.packs || []).map((p) => (
            <Card key={p.id} className="p-4">
              <div className="text-sm text-neutral-600">{p.title}</div>
              <div className="font-semibold text-lg">{p.sessions} session{p.sessions>1?'s':''}</div>
              <div className="text-sm text-neutral-600 mt-2">{p.description}</div>
              <div className="mt-4">
                <BookServiceButton serviceId={service.id}>Book {p.title}</BookServiceButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

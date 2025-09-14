// src/components/services/ServiceDetailSections/ServiceHeader.tsx
'use client';
import React from 'react';
import PriceTag from '@/components/ui/PriceTag';
import BookServiceButton from '@/components/services/BookServiceButton';

export default function ServiceHeader({
  service,
}: {
  service: import('@/data/services').Service;
}) {
  return (
    <header className="mb-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-brand-900">{service.title}</h1>
          {service.subservices && <p className="mt-2 text-sm text-neutral-700">{service.subservices.join(' • ')}</p>}
          {service.heroMetric && <div className="mt-3 text-sm text-brand-500">{service.heroMetric}</div>}
          <p className="mt-4 text-neutral-600 max-w-2xl">{service.desc}</p>
        </div>

        <div className="text-right">
          <PriceTag original={service.priceOriginal} current={service.price} />
          <div className="mt-4">
            <BookServiceButton serviceId={service.id}>Book a consultation</BookServiceButton>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-neutral-600">Trusted by 1,200+ learners • Avg rating 4.9/5</div>
    </header>
  );
}

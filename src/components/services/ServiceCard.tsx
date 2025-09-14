// src/components/services/ServiceCard.tsx
'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import PriceTag from '@/components/ui/PriceTag';
import ServiceIcon from '@/components/ui/ServiceIcon';
import { Service } from '@/data/services';
import { useBooking } from '@/components/booking/BookingProvider';
import Link from 'next/link';

export default function ServiceCard({ service }: { service: Service }) {
  const { openBooking } = useBooking();
  const sub = service.subservices?.slice(0, 3).join(' • ') ?? '';

  return (
    <Card className="h-full flex flex-col p-6 transition-transform hover:shadow-xl hover:-translate-y-1 overflow-visible">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0 w-12 h-12 rounded-lg bg-brand-900/5 flex items-center justify-center text-brand-500">
          <ServiceIcon name={service.icon} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-brand-900">{service.title}</h3>
          <div className="text-sm text-neutral-600 mt-1">{sub}</div>
          {service.heroMetric && <div className="mt-3 text-sm text-brand-500">{service.heroMetric}</div>}
        </div>
      </div>

      <div className="mt-4 flex-1" />

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <PriceTag original={service.priceOriginal} current={service.price} />
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/services/${service.id}`} className="text-sm px-3 py-2 rounded-lg border">
            Learn
          </Link>

          <button
            onClick={() => openBooking({ service: service.id })}
            className="px-3 py-2 rounded-lg bg-orange-500 text-white text-sm"
          >
            Book
          </button>
        </div>
      </div>
    </Card>
  );
}

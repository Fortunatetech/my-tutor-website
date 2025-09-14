// src/components/services/BookServiceButton.tsx
'use client';
import React from 'react';
import { useBooking } from '@/components/booking/BookingProvider';

export default function BookServiceButton({ serviceId, children }: { serviceId: string; children?: React.ReactNode }) {
  const { openBooking } = useBooking();
  return (
    <button onClick={() => openBooking({ service: serviceId })} className="px-4 py-3 rounded-lg bg-orange-500 text-white">
      {children ?? 'Book'}
    </button>
  );
}

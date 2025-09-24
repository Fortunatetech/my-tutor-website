// src/components/services/BookServiceButton.tsx
'use client';

import React from 'react';
import { useBooking } from '@/components/booking/BookingProvider';

type Props = {
  serviceId: string;
  audience?: string; // 'kids' | 'students' | 'professionals'
  pack?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * UPDATED: BookServiceButton
 * - Opens the global Booking modal via BookingProvider.
 * - Keeps a simple styling API.
 */

export default function BookServiceButton({ serviceId, audience, pack, children, className }: Props) {
  const { openBooking } = useBooking();

  function handle() {
    openBooking({ service: serviceId, audience, pack });
  }

  return (
    <button
      onClick={handle}
      className={`${className ?? 'px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-brand-600'}`}
    >
      {children ?? 'Book'}
    </button>
  );
}

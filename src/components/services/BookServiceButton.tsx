// src/components/services/BookServiceButton.tsx
'use client';
import React from 'react';
import { useBooking } from '@/components/booking/BookingProvider';

type Props = {
  serviceId: string;
  audience?: string; // 'kids' | 'students' | 'professionals'
  children?: React.ReactNode;
  className?: string;
};

export default function BookServiceButton({ serviceId, audience, children, className }: Props) {
  const { openBooking } = useBooking();

  function handle() {
    openBooking({ service: serviceId, audience });
  }

  return (
    <button
      onClick={handle}
      className={`${className ?? 'px-4 py-3 rounded-lg bg-brand-500 text-white hover:bg-brand-600'}`}
    >
      {children ?? 'Book'}
    </button>
  );
}

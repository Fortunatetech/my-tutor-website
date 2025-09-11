// src/components/booking/BookingProvider.tsx
'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type Prefill = { service?: string; name?: string; email?: string } | null;

type BookingContextType = {
  openBooking: (prefill?: Prefill) => void;
  closeBooking: () => void;
  isOpen: boolean;
  prefill: Prefill;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
  return ctx;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill>(null);

  function openBooking(p?: Prefill) {
    setPrefill(p ?? null);
    setIsOpen(true);
  }
  function closeBooking() {
    setIsOpen(false);
    setPrefill(null);
  }

  const value = { openBooking, closeBooking, isOpen, prefill };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}
